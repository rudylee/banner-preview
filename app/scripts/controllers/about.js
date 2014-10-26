'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
