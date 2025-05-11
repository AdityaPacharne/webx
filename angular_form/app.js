angular.module("registrationApp", [])
  .controller("RegistrationController", function($scope) {
    $scope.submitForm = function() {
      if ($scope.regForm.$valid) {
        alert("Form submitted successfully!");
      } else {
        alert("Please fill out the form correctly.");
      }
    };
  });
