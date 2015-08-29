var config = {};

// Databse connection
config.mongo = {
  'url': 'mongodb://hackathon5:hackathon5@ds035503.mongolab.com:35503/hackathon5'
}

// FaceBook oAuth settings
config.facebookAuth = {
        'clientID'      : '1599251517008990', // your App ID
        'clientSecret'  : 'd41af310f7bd2ed71ba7231460d91bbf', // your App Secret
        'callbackURL'   : 'http://localhost:5000/auth/facebook/callback'
};

// Make these config options available
module.exports = config;
