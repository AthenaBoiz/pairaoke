angular.module('karaoke.services')

.factory('burgerService', function() {
  var burgerLine1 = document.getElementById('burgerLine1');
  var burgerLine2 = document.getElementById('burgerLine2');
  var burgerLine3 = document.getElementById('burgerLine3');

  // animate menu icon from burger formation to X formation
  var burgerOpen = function() {
    Velocity(burgerLine1, { y1: '+= 6', y2: '+= 6' }, { duration: 400 });
    Velocity(burgerLine1, { y1: '+= 7', y2: '-= 7'}, { duration: 400 });
    Velocity(burgerLine2, { strokeOpacity: '0' }, { duration: 400 });
    Velocity(burgerLine3, { y1: '-= 6', y2: '-= 6' }, { duration: 400 });
    Velocity(burgerLine3, { y1: '-= 7', y2: '+= 7'}, { duration: 400 });
  };

  // animate menu icon from X formation to burger formation
  var burgerClose = function() {
    Velocity(burgerLine1, { y1: '-= 7', y2: '+= 7' }, { duration: 400 });
    Velocity(burgerLine1, { y1: '-= 6', y2: '-= 6'}, { duration: 400 });
    Velocity(burgerLine2, { strokeOpacity: '1' }, { duration: 400, delay: 400 });
    Velocity(burgerLine3, { y1: '+= 7', y2: '-= 7' }, { duration: 400 });
    Velocity(burgerLine3, { y1: '+= 6', y2: '+= 6'}, { duration: 400 });
  };

  return {
    open: burgerOpen,
    close: burgerClose
  };
});
