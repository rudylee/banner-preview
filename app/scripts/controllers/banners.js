/* global Firebase */
'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersCtrl
 * @description
 * # BannersCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://banner-preview.firebaseio.com/');
    var sync = $firebase(ref);

    $scope.banners = sync.$asObject();
  });
