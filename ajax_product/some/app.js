angular.module('productApp', [])
  .controller('ProductController', function($scope, $http) {
    $scope.query = "";
    $scope.results = [];

    $scope.search = function () {
      $http.get(`/search?q=${$scope.query}`)
        .then(function (response) {
          $scope.results = response.data;
        }, function (error) {
          console.error('Error:', error);
        });
    };
  });
