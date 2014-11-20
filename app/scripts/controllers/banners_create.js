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

    // Saves the banner to Firebase
    $scope.save = function () {
      var name = 'Untitled';
      if(angular.isObject($scope.banner)) {
        name = $scope.banner.name;
      }

      BannerService.save(name).then(function(id) {
        // Redirects user to banner edit page
        $location.path('banners_edit/' + id);
      });
    };

    // Updates the banner to Firebase
    $scope.update = function() {
      $scope.banner.$save();
    };
  });
