'use strict';

/**
 * @ngdoc function
 * @name clockularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clockularApp
 */
angular.module('clockularApp')
  .controller('MainCtrl', function ($scope, $interval) {
    var ttPrivateActions = {};
    $scope.alarmCTA = "set alarm"

    // sound
    ttPrivateActions.soundAlarm = function() {
      var audio = new Audio('http://oringz.com/oringz-uploads/sounds-1065-just-like-that.mp3');
      audio.play();
    };

    // toggle alarm
    ttPrivateActions.toggleAlarm = function(){
      $scope.showAlarm = !$scope.showAlarm;
    }

    // ticking clock
    ttPrivateActions.tick = function() {
      $scope.clock = new Date();
      if($scope.alarmTime){
        //  QUICK HACK - equalize seconds and milliseconds because of weird rounding
        //  would need to look into this more to find why it's behaving as such.
        var newClock = new Date($scope.clock);
        newClock.setSeconds(0);
        newClock.setMilliseconds(0);
        $scope.alarmTime.setSeconds(0);
        $scope.alarmTime.setMilliseconds(0);

        if($scope.alarmTime.getTime() === newClock.getTime()) {
          ttPrivateActions.soundAlarm();
          ttPrivateActions.toggleAlarm();
          $scope.alarmTime = null;
          $scope.alarmCTA = 'reset'
        }
      }
    }

    // commence the ticking!
    ttPrivateActions.tick();
    $interval(ttPrivateActions.tick, 1000);

    // clear alarm
    $scope.resetAlarm = function() {
      $scope.showAlarm = false;
      $scope.alarmTime = null;
      $scope.modalOpen = false;
    }

    $scope.setAlarm = function(){
      $scope.modalOpen = false;
    }

    $scope.showModal = function(){
      $scope.modalOpen = true;
    }

  });
