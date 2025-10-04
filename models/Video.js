const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: String,
  url: String,
  upload_date: Date
}, {
  strict: false,
  timestamps: true
});

module.exports = mongoose.model('Video', VideoSchema, 'video');
