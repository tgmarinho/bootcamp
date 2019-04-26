const mongoose = require('mongoose')

const AdSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Ad', AdSchema)
