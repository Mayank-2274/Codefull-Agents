require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const cron = require('node-cron');

const Event = require('./models/Event');
const Video = require('./models/Video');

const PORT = process.env.PORT || 5000;
const DATA_DIR = process.env.DATA_DIR || './data';
const PROCESSED_DIR = process.env.PROCESSED_DIR || path.join(DATA_DIR, 'processed');
const CRON_SCHEDULE = process.env.CRON_SCHEDULE || '*/5 * * * *';
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Helper: classify crowd count
function labelCrowd(count) {
  if (!count && count !== 0) return 'Unknown';
  if (count < 10) return 'Low';
  if (count < 50) return 'Medium';
  return 'High';
}

// Upload CSV to Mongoose model
async function uploadCSV(filePath, model, type) {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        const doc = { ...data };

        // Event-specific: crowd count + label
        if (type === 'event' && data.crowd_count) {
          const count = parseInt(data.crowd_count, 10);
          doc.crowd_count = isNaN(count) ? null : count;
          doc.crowdLevel = labelCrowd(count);
        }

        // Parse date fields
        if (data.time || data.date || data.upload_date) {
          doc.time = new Date(data.time || data.date || data.upload_date);
        }

        rows.push(doc);
      })
      .on('end', async () => {
        try {
          if (rows.length > 0) {
            await model.insertMany(rows);
            console.log(`📤 Uploaded ${rows.length} rows to "${type}"`);
          }
          resolve(rows.length);
        } catch (err) {
          reject(err);
        }
      })
      .on('error', (err) => reject(err));
  });
}

// Process CSVs for all collections
async function processCSVFiles() {
  if (!fs.existsSync(PROCESSED_DIR)) fs.mkdirSync(PROCESSED_DIR, { recursive: true });

  const tasks = [
    { file: 'event.csv', model: Event, type: 'event' },
    { file: 'video.csv', model: Video, type: 'video' }
  ];

  for (const t of tasks) {
    const filePath = path.join(DATA_DIR, t.file);
    if (fs.existsSync(filePath)) {
      try {
        const count = await uploadCSV(filePath, t.model, t.type);
        const dest = path.join(PROCESSED_DIR, `${Date.now()}-${t.file}`);
        fs.renameSync(filePath, dest);
        console.log(`✅ Processed ${t.file} (${count} rows) → moved to processed folder`);
      } catch (err) {
        console.error(`❌ Error processing ${t.file}:`, err);
      }
    } else {
      console.log(`⚠️ File not found: ${filePath}`);
    }
  }
}

// Initial run
processCSVFiles();

// Cron schedule
cron.schedule(CRON_SCHEDULE, () => {
  console.log(`⏰ Running scheduled upload at ${new Date().toISOString()}`);
  processCSVFiles();
});

// Express server
const app = express();

app.get('/health', (req, res) => res.send('OK'));

app.get('/upload', async (req, res) => {
  try {
    await processCSVFiles();
    res.send('✅ CSV upload complete');
  } catch (err) {
    res.status(500).send('❌ Error uploading CSV: ' + err.message);
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
