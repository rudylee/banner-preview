'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersCreateCtrl
 * @description
 * # BannersCreateCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersCreateCtrl', function ($scope, $firebase, $location) {
    var ref = new Firebase('https://banner-preview.firebaseio.com/banners');

    $scope.save = function(banner) {
      ref.push({
        name: banner.name 
      });

      $location.path('/');
    };
  });
