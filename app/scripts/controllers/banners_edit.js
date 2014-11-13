'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersEditCtrl
 * @description
 * # BannersEditCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersEditCtrl', function ($scope, banner) {
    $scope.banner = banner;
  });
