'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersCtrl
 * @description
 * # BannersCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersCtrl', function ($scope, FirebaseService) {
    $scope.banners = FirebaseService.getBanners();
  });
