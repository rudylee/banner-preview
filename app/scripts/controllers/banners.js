'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersCtrl
 * @description
 * # BannersCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersCtrl', function ($scope, banners, BannerService) {
    $scope.banners = banners;

    $scope.remove =  function(id) {
      BannerService.remove(id);
    };
  });
