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

    // ticking clock
    var tick = function() {
      $scope.clock = Date.now();
    }
    tick();
    $interval(tick, 1000);

  });
