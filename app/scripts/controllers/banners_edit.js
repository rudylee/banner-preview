/* global Firebase */
'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersEditCtrl
 * @description
 * # BannersEditCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersEditCtrl', function ($scope, $firebase, $routeParams, $location) {
    var ref = new Firebase('https://banner-preview.firebaseio.com/banners/' + $routeParams.id);
    var sync = $firebase(ref);

    $scope.banner = sync.$asObject();

    $scope.update = function(banner) {
      ref.update({
        name: banner.name
      });

      $location.path('/');
    };
  });
