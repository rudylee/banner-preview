'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersPreviewCtrl
 * @description
 * # BannersPreviewCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersPreviewCtrl', function ($scope, banner) {
    $scope.banner = banner;
  });
