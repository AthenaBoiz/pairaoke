angular.module('karaoke.home', [])

.controller('homeCtrl', function($scope, $rootScope, locationFactory, eventFactory, mapService, $location) {
  $scope.lat = '';
  $scope.long = '';
  $scope.loading = true;
  $scope.loadingMessage = 'loading events in your area';

  // check to see if user location has been saved on $rootScope before calling .getPosition
  if (!$rootScope.userLocation) {
    locationFactory.getPosition()
      .then(function(pos) {
        $rootScope.userLocation = pos.coords;
        $scope.lat = pos.coords.latitude;
        $scope.long = pos.coords.longitude;
        mapLocalEvents();
      });
  } else {
    $scope.lat = $rootScope.userLocation.latitude;
    $scope.long = $rootScope.userLocation.longitude;
    mapLocalEvents();
  }

  // make map and query for events within 30 miles (48,000 meters) of the user's location
  function mapLocalEvents() {
    mapService.renderMap($scope, $scope.lat, $scope.long, 14, 0, 20, 'map');
    queryLocalEvents($scope.lat, $scope.long, 48000);
    $scope.loading = false;
  }
  
  function queryLocalEvents(lat, long, proximity) {
    eventFactory.getInArea(lat, long, proximity)
      .then(function(events) {
        mapService.populateMap($scope, $location, events);
      });
  }
});
