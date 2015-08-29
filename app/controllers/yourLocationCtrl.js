(function () {
  "use strict";

  var container = document.querySelector('section');


  angular.module("hackathon5")
    .controller("yourLocationCtrl", function ($scope, $location, $routeParams) {
      var main = this;

      main.notFound = "We're sorry, but the page you requested is not found."
  });
})();
