var mongoose = require('mongoose');

// Create badge schema - empty object so it is
// truly schemaless and not enforced
var reviewSchema = mongoose.Schema({});

exports.Review = mongoose.model('Review', reviewSchema, 'reviews');
