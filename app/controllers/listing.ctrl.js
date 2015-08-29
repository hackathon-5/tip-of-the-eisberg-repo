angular.module("hackathon5")
  .controller('ListingCtrl', ['ListingService', '$scope', '$http',
    function(ListingService, $scope, $http) {

      var listCtrl = this;

      ListingService.getListings().success(function(data){
        listCtrl.listings = data;
      });

  }]);
