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

      var editListing = function(listing) {
        $http.put( url + listing._id, listing ).then(function(res) {
          $location.path('/listing')
        });
      };

      return {
        getListings: getAllListings,
        getListing: getSingleListing,
        editListing: editListing
      };

  }]);
