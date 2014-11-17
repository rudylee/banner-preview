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
  .service('BannerService', function BannerService($firebase, configuration) {
    this.getBanners = function() {
      var ref = new Firebase(configuration.firebaseUrl);
      var sync = $firebase(ref);

      return sync.$asObject();
    };

    this.getBanner = function(id) {
      var ref = new Firebase(configuration.firebaseUrl + '/' + id);
      var sync = $firebase(ref);

      return sync.$asObject();
    };

    this.remove = function(id) {
      var ref = new Firebase(configuration.firebaseUrl + '/' + id);
      var sync = $firebase(ref);

      sync.$remove();
    };
  });
