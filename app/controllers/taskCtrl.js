(function () {
  "use strict";

  var container = document.querySelector('section');


  angular.module("hackathon5")
    .controller("TaskCtrl", function (TaskService, $scope, $location, $routeParams) {
      var tasks = this;

      TaskService.getTasks().success(function(data) {
        tasks.taskData = data;
        console.log(data)
      })

      $scope.notFound = "We're sorry, but the page you requested is not found."
  });
})();
