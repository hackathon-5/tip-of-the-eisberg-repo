(function () {
  "use strict";
  angular.module('hackathon5')
  .factory('TaskService', function ($http, $rootScope, $log) {

    var url = '/api/tasks'

    var getAllTasks = function () {
      return $http.get(url);
      // returns list of tasks;
    };

    return {
      getTasks: getAllTasks
    };

});

})();
