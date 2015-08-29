(function () {




  angular.module("hackathon5")
    .controller("MapCtrl", function ($scope) {
      
    $scope.map = {
        center: {
            latitude: 32.803215,
            longitude: -79.9479865
        },
        zoom: 12,
        
    };

     $scope.marker = {
      id: 0,
      coords: {
        latitude: 32.778393,
        longitude: -79.971560
      },
      options : {
        labelContent: 'Markers id 1',
        labelAnchor: "22 0",
        labelClass: "marker-label"
      }
    };



  });
})();












