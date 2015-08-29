var mongoose = require('mongoose');

// Create badge schema - empty object so it is
// truly schemaless and not enforced
var listingSchema = mongoose.Schema({});

exports.Listing = mongoose.model('Listing', listingSchema, 'listings');
