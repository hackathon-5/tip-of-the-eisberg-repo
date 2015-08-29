(function () {
  "use strict";
  angular.module('hackathon5')
  .factory('ReviewService', function ($http, $rootScope, $log) {

    var url = '/api/reviews'

    var getAllReviews = function () {
      return $http.get(url);
      // returns list of reviews;
    };

    return {
      getReviews: getAllReviews
    };

});

})();
