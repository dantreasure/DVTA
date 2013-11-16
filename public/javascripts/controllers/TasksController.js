angular.module('dvta', ['ui.bootstrap']);
var TasksController = function ($scope, $http){
  $scope.tasks = [];
  $scope.selected = undefined;
  $scope.newTask = {
    name : '',
    count : ''
  }

  $scope.setTasks = function(tasks) {
    $scope.tasks = tasks;
  };

  $scope.remove = function (task){

    $http.delete('/task/' + task._id + '.json', task).success(function(data){
      if (!data.task) {
        alert(JSON.stringify(data));
      }  
    })
  };

  $scope.addTask = function() {
    $http.post('/task.json', $scope.newTask).success(function(data) {
      if (data.task) {
        $scope.tasks.push(data.task);
        $scope.newTask.name = '';
        $scope.newTask.count = '';
      } 
      else {
        alert(JSON.stringify(data));
      }
    });
  };
};