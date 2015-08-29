(function () {
  "use strict";

  var container = document.querySelector('section');


  angular.module("hackathon5")
    .controller("yourLocationCtrl", function (LocationService, $scope, $location, $routeParams) {
      var yourLocation = this;

      LocationService.getCity().success(function(data) {
        yourLocation.cityData = data;
      })

      $scope.notFound = "We're sorry, but the page you requested is not found."
  });
})();
