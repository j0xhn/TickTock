'use strict';

/**
 * @ngdoc directive
 * @name clockularApp.directive:clock
 * @description
 * # clock
 */
angular.module('clockularApp')
  .directive('clock', function () {
    return {
      template: "<h1>{{ clock | date:'hh:mm:ss'}}</h1>",
      restrict: 'E'
      //link: function postLink(scope, element, attrs) {
      //  element.text('this is the clock directive');
      //}
    };
  });
