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
  .service('BannerService', function BannerService($firebase, $q, configuration, ngProgress) {
    var defer = $q.defer();

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

    this.addFile = function(id, file) {
      var ref = new Firebase(configuration.firebaseUrl + '/' + id);
      var filesSync = $firebase(ref.child('files'));

      filesSync.$push({
        title: file.name,
        filename: file.name 
      });
    };

    // Saves banner to firebase
    this.save = function(name) {
      var ref = new Firebase(configuration.firebaseUrl);
      var sync = $firebase(ref);

      ngProgress.start();

      sync.$push({
        name: name,
        files: []
      }).then(function(pushRef) {
        ngProgress.complete();

        defer.resolve(pushRef.name());
      });

      return defer.promise;
    };

    this.remove = function(id) {
      var ref = new Firebase(configuration.firebaseUrl + '/' + id);
      var sync = $firebase(ref);

      sync.$remove();
    };
  });
