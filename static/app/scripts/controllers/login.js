'use strict';

angular.module('declutterApp')
  .controller('LoginCtrl', function ($scope, $location, $rootScope, djangoAuth, Validate) {
    $scope.model = {'username':'','password':''};
  	$scope.complete = false;
    $scope.login = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.login($scope.model.username, $scope.model.password)
        .then(function(data){
        	// success case
        	$location.path("/mycrap");
            $rootScope.logname = $scope.model.username;
        },function(data){
        	// error case
        	$scope.errors = data;
        });
      }
    }
  });
