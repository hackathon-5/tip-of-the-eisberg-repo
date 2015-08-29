(function(app) {

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "views/login.html",
          controller: "LoginCtrl as login"
        })
        .when('/your-location', {
          templateUrl: "views/your-location.html",
          controller: "YourLocationCtrl as yourLocation"
        })
        .when ('/tasks', {
          templateUrl: "views/tasks.html",
          controller: "TaskCtrl as tasks"
        })
        .when ('/listing', {
          templateUrl: "views/map-listing.html",
          controller: "MapCtrl as mapCtrl"
        })
        .when ('/reviews', {
          templateUrl: "views/reviews.html",
          controller: "ReviewCtrl as reviews"
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
    'uiGmapgoogle-maps',
    'ngAnimate',
    'ngMaterial'
])));
