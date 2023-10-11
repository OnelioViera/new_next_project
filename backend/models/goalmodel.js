const mongoose = require('mongoose') // import mongoose

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text field']
    }
  },
  {
    timestamp: true
  })

  module.exports = mongoose.module('Goal', goalSchema) // export the model