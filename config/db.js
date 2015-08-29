/*
*
*   MongoDB schema for badge and message collection
*
*/

var mongoose = require('mongoose')
var uriUtil = require('mongodb-uri')

/*
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://hackathon5:hackathon5@ds035503.mongolab.com:35503/hackathon5';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.createConnection(mongooseUri);

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('db connected');
})
