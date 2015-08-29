(function(app) {

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "views/login.html",
          controller: "LoginCtrl as login"
        })
        .when ('/listing', {
          templateUrl: "views/map-listing.html",
          controller: "mapCtrl as map"
        })
        .otherwise({
          redirectTo: '/not-found'
        });
    });

    // .constant('_', _); //infusing underscore library

    app.run(function ( ) {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("hackathon5", [
    'ngRoute',
    'uiGmapgoogle-maps'
])));
