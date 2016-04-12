angular.module('karaoke.auth', [])

.controller('authCtrl', function($scope, $window, $location, authFactory) {

  $scope.user = {};

  $scope.signup = function(isValid) {
    if (isValid) {
      authFactory.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.karaoke', token);
          //direct to where upon signup? 
          $location.path('/addEvent');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.login = function(isValid) {
    if (isValid) {
<<<<<<< HEAD
      Auth.signin($scope.user)
=======
      authFactory.login($scope.user)
>>>>>>> ef37efd16c486175a9dc9abef5978af1d1d0965b
        .then(function (token) {
          $window.localStorage.setItem('com.karaoke', token);
          //direct to where upon login? 
          $location.path('/addEvent');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

});