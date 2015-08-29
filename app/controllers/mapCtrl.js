(function () {
  angular.module("hackathon5")
    .controller("MapCtrl", function ($scope, $http, ListingService, TaskService, $animate, $timeout, $mdSidenav, $mdUtil, $log) {

    var mapCtrl = this;

    ListingService.getListings().success(function(data){
      mapCtrl.listings = data;
      for ( var i = 0; i < mapCtrl.listings.length; i++ ) {
        mapCtrl.listings[i].coords = {
          latitude: mapCtrl.listings[i].Lat,
          longitude: mapCtrl.listings[i].Long
        }
        mapCtrl.listings[i].id = mapCtrl.listings[i]._id;
        // var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+ mapCtrl.listings[i].coords.latitude.toFixed(5) + ',' + mapCtrl.listings[i].coords.longitude.toFixed(5) +'&key=AIzaSyD5gXzrEw5mXzak8wI95MSrHc9EYuNCz_E';
        // $http.get(url).success(function(data){
        //     console.log(data);
        //     mapCtrl.listings[i].address = data.results[0].address_components;
        //     ListingService.editListing(mapCtrl.listings[i]);
        // });
      }
    });

    TaskService.getTasks().success(function(data) {
      mapCtrl.tasks = data;
    });

    $scope.map = {
        center: {
            latitude: 32.803215,
            longitude: -79.9479865
        },
        zoom: 13
    };

    $scope.markers = {
      options: {
        icon:'../images/location-marker.png'
      }
    }


    $scope.mapOptions = {
      scrollwheel: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP]
      }
    }

    var styleArray =
    [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#a0d6d1"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#866770"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#866770"
        }, {
            "lightness": 29
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#866770"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#C1E8DA"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f1f1f1"
        }, {
            "lightness": 21
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f1f1f1"
        }, {
            "lightness": 5
          },{

            "weight": 2
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
        }, {
            "color": "#333333"
        }, {
            "lightness": 40
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
        }, {
            "lightness": 19
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#fefefe"
        }, {
            "lightness": 17
        }, {
            "weight": 1.2
        }]
    }]

    $scope.options = {
       styles: styleArray
    };

    $scope.windowOptions = {
        visible: true
    };

    // TO THE TOP BUTTON
    $('body').on('click', '.to-the-top-button', function(e) {
      $("html, body").animate({ scrollTop: "0px" });
    });

    // SLIDE OUT HANDLEER
    $('body').on('click', '.slide-out-toggler', function(e) {
      $('.slide-out').removeClass('open')
     $(e.currentTarget).parent('md-card').find('.slide-out').addClass('open');
    })
    $('body').on('click', '.close-button-wrapper', function(e) {
      $(e.currentTarget).parent('.slide-out').removeClass('open');
    });


  })
})();
