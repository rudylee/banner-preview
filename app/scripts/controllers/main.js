'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
