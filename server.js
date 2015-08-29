// server.js

// set up
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),
    config = require('./config');                 // Loads in config settings

var morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session');

var Listing = require('./models/listing').Listing;
var User = require('./models/user');


// configuration
mongoose.connect(config.mongo.url);                  // Connects to our database

require('./config/passport')(passport)           // Pass Passport for configuration

// set up express application
app.use(morgan('dev'));                          // Logs every request to console
app.use(cookieParser());                         // Reads cookies which is needed for auth
app.use(bodyParser());                           // Gets info from HTML forms

app.set('view engine', 'ejs')                    // Set the templating engine
app.set('port', process.env.PORT || 5000);

// required for passport
app.use(session({ secret: 'stuffandthings' }));      // Session secret - ?!
app.use(passport.initialize());
app.use(passport.session());                     // Allows for persistent login sessions
app.use(flash())                                 // Use connect-flash for flash messages stored in session

// Load in routes
require('./routes/routes.js')(app, passport);     // Load our routes and pass in our app and fully configured passport

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// BADGE API ROUTES
router.route('/listings')
  .get(function(req, res) {
    Listing.find({}, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });
  })
  .post(function(req, res) {
    var listing = new Listing(req.body)
    listing.save(function(err){
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Listing Created' })
      }
    })
  })

router.route('/listings/:listing_id')
  .get(function(req, res) {
      Listing.findById(req.params.listing_id, function(err, listing) {
        if(err) {
          res.send(err);
        } else {
          res.json(listing);
        }
      })
  })
  .put(function(req, res) {
    // STUBBED
  })
  .delete(function(req, res) {
    // STUBBED
  })

// BADGE API ROUTES
router.route('/users')
  .get(function(req, res) {
    User.find({}, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });
  })
