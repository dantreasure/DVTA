angular.module('dvta', ['ui.bootstrap']);
var TasksController = function ($scope){
  $scope.selected = undefined;
  $scope.tasks = [
    {name: "Deadlift", count: 43},
    {name: "Pages Read", count: 421},
    {name: "Hours Coding", count: 34},
    {name: "Pullups", count: 32}, 
    {name: "Cups of Water", count: 78},
    {name: "Miles Driven", count: 2019}
  ];
  $scope.add = function (){
    $scope.tasks.push({
      name: $scope.new_name,
      count: $scope.new_count
    });
    $scope.new_name = '';
    $scope.new_count = '';
  };
};