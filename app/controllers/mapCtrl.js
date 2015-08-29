(function () {
  angular.module("hackathon5")
    .controller("MapCtrl", function ($scope, ListingService) {

    var mapCtrl = this;

    ListingService.getListings().success(function(data){
      mapCtrl.listings = data;
      for ( var i = 0; i < mapCtrl.listings.length; i++ ) {
        mapCtrl.listings[i].coords = {
          latitude: mapCtrl.listings[i].Lat,
          longitude: mapCtrl.listings[i].Long
        }
        mapCtrl.listings[i].id = mapCtrl.listings[i]._id;
      }
      console.log(mapCtrl.listings);
    });

    $scope.map = {
        center: {
            latitude: 32.803215,
            longitude: -79.9479865
        },
        zoom: 13
    };
    $scope.mapOptions = {
      scrollwheel: false
    }

    $scope.windowOptions = {
        visible: true
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };


  });
})();
