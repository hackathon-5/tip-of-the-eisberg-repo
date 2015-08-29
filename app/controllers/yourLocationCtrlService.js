(function () {
  "use strict";
  angular.module('hackathon5')
  .factory('LocationService', function ($http, $rootScope, $log) {

    var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=32.803215,-79.9479865&key=AIzaSyBMJ6IbVAcrDZacINdZLHNAt2XmN-nplcU'

    var getCityName = function () {
      return $http.get(url);
      // returns City Name;
    };


    return {
      getCity: getCityName
    };

});

})();
