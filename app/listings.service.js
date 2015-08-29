angular.module('hackathon5')
  .factory('ListingService', ['$http', '$location',
    function($http, $location) {

      var url = '/api/listings';

      var getAllListings = function() {
        return $http.get( url );
      };

      var getSingleListing = function(listingId) {
        return $http.get( url + '/listing/' + listingId );
      };

      return {
        getListings: getAllListings,
        getListing: getSingleListing
      };

  }]);
