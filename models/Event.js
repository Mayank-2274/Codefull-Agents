const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  location: String,
  crowd_count: Number,
  crowdLevel: String,
  time: Date
}, {
  strict: false,
  timestamps: true
});

module.exports = mongoose.model('Event', EventSchema, 'event');
