/* global Firebase */
'use strict';

/**
 * @ngdoc service
 * @name bannerPreviewApp.BannerService
 * @description
 * # BannerService
 * Service in the bannerPreviewApp.
 */
angular.module('bannerPreviewApp')
  .service('BannerService', function BannerService($firebase) {
    this.getBanners = function() {
      var ref = new Firebase('https://banner-preview.firebaseio.com/banners');
      var sync = $firebase(ref);

      return sync.$asObject();
    };
  });
