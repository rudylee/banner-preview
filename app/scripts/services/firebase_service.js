/* global Firebase */
'use strict';

/**
 * @ngdoc service
 * @name bannerPreviewApp.FirebaseService
 * @description
 * # FirebaseService
 * Service in the bannerPreviewApp.
 */
angular.module('bannerPreviewApp')
  .service('FirebaseService', function FirebaseService($firebase) {
    this.getBanners = function() {
      var ref = new Firebase('https://banner-preview.firebaseio.com/banners');
      var sync = $firebase(ref);

      return sync.$asObject();
    };
  });
