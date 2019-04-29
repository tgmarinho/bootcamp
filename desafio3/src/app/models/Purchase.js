const mongoose = require('mongoose')

const PurchaseSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  sold: {
    type: Boolean
  }
})

module.exports = mongoose.model('Purchase', PurchaseSchema)
