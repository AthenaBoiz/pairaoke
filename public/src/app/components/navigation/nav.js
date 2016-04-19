angular.module('karaoke.nav', [])

.controller('navCtrl', function($scope, authFactory, burgerService) {
  $scope.droppedDown = false;
  $scope.loggedIn = authFactory.isAuth();

  $scope.toggleMenu = function() {
    $scope.droppedDown = !$scope.droppedDown;
    if ($scope.droppedDown) {
      burgerService.open();
    } else {
      burgerService.close();
    }
  };

  $scope.logOut = function() {
  	authFactory.logout();
  };

  // if menu is open when the user's location changes, toggle it closed
  $scope.$on('$locationChangeStart', function(next, current) {
    if ($scope.droppedDown) {
      $scope.toggleMenu();
    }
    $scope.loggedIn = authFactory.isAuth();
  });
});