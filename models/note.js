'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Notes',  // model name
  mongoose.Schema({
    title: String,
    text: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,  // category id
      ref: 'Categories'  // reference Categories model in category.js
    }
  })
);
