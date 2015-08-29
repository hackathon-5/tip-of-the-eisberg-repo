angular.module("hackathon5", [
    'ngRoute',
]).config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "common/views/main.html",
          controller: "AppCtrl as appCtrl"
        })
        .when('/listings', {
          templateUrl: "common/views/listings.html",
          controller: "AppCtrl as appCtrl"
        })
        .otherwise({
          redirectTo: '/not-found'
        })
  })
