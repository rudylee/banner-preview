/* jshint loopfunc: true */
'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersCreateCtrl
 * @description Page for creating new banner and uploading files
 * # BannersCreateCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersCreateCtrl', function ($scope, $location, BannerService) {
    $scope.loading = false;

    // Saves the banner to Firebase
    $scope.save = function () {
      if(!$scope.form.$valid) {
        return;
      }

      $scope.loading = true;

      BannerService.save($scope.banner.name).then(function(id) {
        $scope.loading = false;

        // Redirects user to banner edit page
        $location.path('banners_edit/' + id);
      });
    };
  });
