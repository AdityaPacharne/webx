angular.module('taskApp', [])
  .service('TaskService', function() {
    let tasks = [];

    this.getTasks = () => tasks;

    this.addTask = task => tasks.push({ title: task, done: false });

    this.removeTask = index => tasks.splice(index, 1);

    this.toggleDone = task => task.done = !task.done;
  })

  .controller('TaskController', function($scope, TaskService) {
    $scope.tasks = TaskService.getTasks();

    $scope.addTask = () => {
      TaskService.addTask($scope.newTask);
      $scope.newTask = '';
    };

    $scope.removeTask = TaskService.removeTask;
    $scope.toggleDone = TaskService.toggleDone;
  });
