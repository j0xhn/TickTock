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
      template: "<h1>{{ clock | date:'h:mm'}}</h1><span>{{ clock | date:'a'}}</span>",
      restrict: 'E'
      //link: function postLink(scope, element, attrs) {
      //  element.text('this is the clock directive');
      //}
    };
  });
