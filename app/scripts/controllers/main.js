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
    var ttActions = {};
    var ttState = {};

    // sound
    ttActions.soundAlarm = function() {
      var audio = new Audio('http://oringz.com/oringz-uploads/sounds-1074-professionals.mp3');
      audio.play();
      //$('body').append(audio);
    };


    // ticking clock
    var tick = function() {
      $scope.clock = new Date();

      // if alarm set look for match
      if($scope.alarmTime){
        var newClock = new Date($scope.clock);
        //  QUICK HACK - equalize seconds and milliseconds because of weird rounding
        //  would need to look into this more to find why it's behaving as such.
        newClock.setSeconds(0);
        newClock.setMilliseconds(0);
        $scope.alarmTime.setSeconds(0);
        $scope.alarmTime.setMilliseconds(0);

        // play sound and clear alarm when equal
        if($scope.alarmTime.getTime() === newClock.getTime()) {
          ttActions.soundAlarm();
          $scope.alarmTime = null;
        }
      }
    }
    tick();
    $interval(tick, 1000);

    $scope.setAlarm = function(){
      $scope.modalOpen = false;
    }

  });
