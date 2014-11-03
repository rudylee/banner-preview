/* global Firebase */
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
  .controller('BannersCreateCtrl', function ($scope, $firebase, $upload, $q, banner, configuration) {
    $scope.selectedFiles = [];
    $scope.progress = [];

    var defer = $q.defer();
    var ref = new Firebase(configuration.firebaseUrl);
    var sync = $firebase(ref);

    if(banner) {
      $scope.banner = banner;

      ref = new Firebase(configuration.firebaseUrl + '/' + $scope.banner.$id);
      sync = $firebase(ref);
    } 

    $scope.onFileSelect = function($files) {
      // Save banner before file upload
      $scope.save();

      defer.promise.then(function() {
        for (var i = 0; i < $files.length; i++) {
          var file = $files[i];
          var index = $scope.selectedFiles.push(file) - 1;

          $upload.upload({
            url: configuration.AWS.url,
            method: 'POST',
            data : {
              key: $scope.banner.$id + '/' + file.name, 
              AWSAccessKeyId: configuration.AWS.AccessKeyId,
              acl: 'private', 
              policy: configuration.AWS.policy,
              signature: configuration.AWS.signature,
              'Content-Type': file.type !== '' ? file.type : 'application/octet-stream', 
              filename: file.name 
            },
            file: file,
          }).progress(function(event) {
            $scope.progress[index] = parseInt(100.0 * event.loaded / event.total);
          }).success(function() {
            $scope.selectedFiles.splice(index, 1);

            var filesSync = $firebase(ref.child('files'));

            filesSync.$push({
              title: file.name,
              filename: file.name 
            });
          });
        }
      });
    };

    // Saves the banner to Firebase
    $scope.save = function () {
      if($scope.banner !== undefined) {
        defer.resolve();
        return;
      }

      var name = 'Untitled';
      if(angular.isObject($scope.banner)) {
        name = $scope.banner.name;
      }

      sync.$push({
        name: name,
        files: []
      }).then(function(pushRef) {
        // Updates the reference to Firebase
        ref = new Firebase(configuration.firebaseUrl + '/' + pushRef.name());
        sync = $firebase(ref);
        $scope.banner = sync.$asObject();

        defer.resolve();
      });
    };

    // Updates the banner to Firebase
    $scope.update = function() {
      $scope.banner.$save();
    };
  });
