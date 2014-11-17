'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersCtrl
 * @description
 * # BannersCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersCtrl', function ($scope, BannerService) {
    $scope.banners = BannerService.getBanners();

    $scope.remove =  function(id) {
      BannerService.remove(id);
    };
  });
