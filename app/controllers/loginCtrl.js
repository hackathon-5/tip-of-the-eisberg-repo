(function () {
  "use strict";

  var container = document.querySelector('section');


  angular.module("hackathon5")
    .controller("MainCtrl", function (ProductService, $scope, $location, $routeParams) {
      var main = this;

      // main.allProducts = ProductService.getAllProducts();
      ProductService.getAllProducts().success(function(data) {
        main.allProducts = data;
        console.log(data)
      })

      ProductService.getOneProduct($routeParams.productId).then(function(response) {
        main.getSingleProd = response.data;
        console.log(response.data)
      });
      /////////////

      main.addProduct = function (newproduct) {
        ProductService.addOneProduct(newproduct);
        // $scope.newproduct = {};
      }

      main.updateProduct = function (product, id) {
        ProductService.updateOneProduct(product, id);
        // $scope.newproduct = {};
      }

      main.removeProduct = function (id) {
        ProductService.removeOneProduct(id);
        // $scope.newproduct = {};
      }

      main.flipCard = function() {
        var myEl = angular.element( $(event.target).parent().siblings().find( '.flipper' ) );
        myEl.addClass('doFlip');
      }

      main.unflipCard = function() {
        var myEl = angular.element( $(event.target).parent().siblings().find( '.flipper' ) );
        myEl.removeClass('doFlip');
      }

      main.notFound = "We're sorry, but the page you requested is not found."
  });
})();
