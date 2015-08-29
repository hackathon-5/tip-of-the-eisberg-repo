(function () {
  "use strict";

  var container = document.querySelector('section');


  angular.module("hackathon5")
    .controller("ReviewCtrl", function (ReviewService, $scope, $location, $routeParams) {
      var reviews = this;

      ReviewService.getReviews().success(function(data) {
        reviews.reviewData = data;
        console.log(data)
      })

      $scope.notFound = "We're sorry, but the page you requested is not found."
  });
})();
