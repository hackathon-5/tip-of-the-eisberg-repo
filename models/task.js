var mongoose = require('mongoose');

// Create badge schema - empty object so it is
// truly schemaless and not enforced
var taskSchema = mongoose.Schema({});

exports.Task = mongoose.model('Task', taskSchema, 'tasks');
