angular.module('karaoke.auth', [])

.controller('authCtrl', function($scope, $window, $location, authFactory) {

  $scope.user = {};

  $scope.signup = function(isValid) {
    authFactory.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.karaoke', token);
        //direct to where upon signup? 
        $location.path('/event');
      })
      .catch(function (error) {
        console.error(error);
      });
    // if (isValid) {
    //   // send user info to server
    //   // if successful, tell user, start a session. set any info on $rootScope?
    //   // else, indicate the error (user name already taken, etc.)
    //   console.log('can submit');
    // }
  };

  $scope.login = function(isValid) {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.karaoke', token);
        //direct to where upon login? 
        $location.path('/event');
      })
      .catch(function (error) {
        console.error(error);
      });
    // if (isValid) {
    //   // send user info to server
    //   // if successful, start a session
    //   // else, indicate the error (un does not exist, wrong password, etc.)
    //   console.log('can submit');
    // }
  };

});