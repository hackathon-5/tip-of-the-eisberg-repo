// routes.js

module.exports = function (app, passport) {

    // HOME PAGE
    // app.get('/', function(req, res) {
    //   res.render('index.ejs')
    // });

    // LOGIN
    app.get('/login', function(req, res) {
      // render page and pass in flash data if it exists
      res.render('login.ejs', { message: req.flash('loginMessage') });
    });
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    // SIGNUP
    //// Displays the signup form view
    app.get('/signup', function(req, res) {
      res.render('signup.ejs', { message: req.flash('signupMessage') });
    });
    //// Processes the signup form
    app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/profile',               // securely redirects to the profile
      failureRedirect: '/signup',                // Redirect to signup page if there is an error
      failureFlash: true                         // Allow flash messages
    }));


    // PROFILE SECTION
    // we want this protected -- you have to login to view
    // use route middleware to verify this (isLoggedIn)
    app.get('/profile', isLoggedIn, function(req, res) {
      res.render('profile.ejs', {
        user: req.user         // Gets the user out of the session and passes to template
      })
    });


    // FACEBOOK
    //// route for FB authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ["user_events"] }));

    //// handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
      passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));


    // LOGOUT
    app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
    });

    function isLoggedIn(req, res, next) {

      // if user is authenticed in the session, carry on
      if (req.isAuthenticated()) {
        return next();
      }
      // if not, redirect to home page
      res.redirect('/');
    }

}
