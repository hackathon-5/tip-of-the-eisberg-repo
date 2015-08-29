'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Listing', ListingSchema);