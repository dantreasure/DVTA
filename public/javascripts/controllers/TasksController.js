angular.module('dvta', ['ui.bootstrap']);
var TasksController = function ($scope){
  $scope.selected = undefined;
  $scope.tasks = [
    {name: "Deadlift", count: 43},
    {name: "Pages Read", count: 421},
    {name: "Hours Coding", count: 34},
    {name: "Romanian Deadlift", count: 32} 
  ];
};