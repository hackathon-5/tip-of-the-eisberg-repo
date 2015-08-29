'use strict';

var _ = require('lodash');
var Listing = require('./listing.model');

// Get list of listings
exports.index = function(req, res) {
  Listing.find(function (err, listings) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(listings);
  });
};

// Get a single listing
exports.show = function(req, res) {
  Listing.findById(req.params.id, function (err, listing) {
    if(err) { return handleError(res, err); }
    if(!listing) { return res.status(404).send('Not Found'); }
    return res.json(listing);
  });
};

// Creates a new listing in the DB.
exports.create = function(req, res) {
  Listing.create(req.body, function(err, listing) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(listing);
  });
};

// Updates an existing listing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Listing.findById(req.params.id, function (err, listing) {
    if (err) { return handleError(res, err); }
    if(!listing) { return res.status(404).send('Not Found'); }
    var updated = _.merge(listing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(listing);
    });
  });
};

// Deletes a listing from the DB.
exports.destroy = function(req, res) {
  Listing.findById(req.params.id, function (err, listing) {
    if(err) { return handleError(res, err); }
    if(!listing) { return res.status(404).send('Not Found'); }
    listing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}