angular.module("hackathon5", [
    'ngRoute',
]).config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "views/main.html",
          controller: "AppCtrl as appCtrl"
        })
        .when('/listings', {
          templateUrl: "views/listings.html",
          controller: "ListingCtrl as listCtrl"
        })
        .when('/login', {
          templateUrl: "views/login.html",
          controller: "LoginCtrl as login"
        })
        .otherwise({
          redirectTo: '/not-found'
        })
  })
  .controller('AppCtrl', ['ListingService', '$scope', '$http',
    function(ListingService, $scope, $http) {

      var appCtrl = this;

      ListingService.getListings().success(function(data){
        appCtrl.listings = data;
      });

  }]);
