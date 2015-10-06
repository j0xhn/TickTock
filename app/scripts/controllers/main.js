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
    var audio =  new Audio('../../audio/sounds-958-thin.mp3');

    // define private functions
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
          // start immediately and continue sound
          ttPrivateActions.soundAlarm();
          $scope.soundAlarmPromise = $interval(ttPrivateActions.soundAlarm, 1500);
          ttPrivateActions.toggleAlarm();
          $scope.alarmTime = null;
        }
      }
    };

    ttPrivateActions.soundAlarm = function() {
      audio.play();
    };

    ttPrivateActions.toggleAlarm = function(){
      $scope.showAlarm = !$scope.showAlarm;
    };

    // define public functions
    $scope.resetAlarm = function() {
      $scope.showAlarm = false;
      $scope.alarmTime = null;
      $scope.modalOpen = false;
      $interval.cancel($scope.soundAlarmPromise);
    };

    $scope.setAlarm = function(){
      // refactor: alarm actually already set when you are picking time... should be here
      $scope.modalOpen = false;
    };

    $scope.showModal = function(){
      $scope.modalOpen = true;
    };


    // commence the ticking!
    ttPrivateActions.tick();
    $interval(ttPrivateActions.tick, 1000);

  });
