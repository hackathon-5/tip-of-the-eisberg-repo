angular.module('hackathon5')
  .factory('TaskService', ['$http', '$location',
    function($http, $location) {

      var url = '/api/tasks';

      var getAllTasks = function() {
        return $http.get( url );
      };

      return {
        getAllTasks: getAllTasks
      }

  }]);
