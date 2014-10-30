/* global Firebase */
'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersCreateCtrl
 * @description Page for creating new banner and uploading files
 * # BannersCreateCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersCreateCtrl', function ($scope, $firebase, $upload, configuration, $location) {
    $scope.selectedFiles = [];
    $scope.progress = [];

    var ref = new Firebase(configuration.firebaseUrl);

    $scope.onFileSelect = function($files) {
      $scope.selectedFiles = $files;

      for (var i = 0; i < $files.length; i++) {
        var index = i;
        var file = $files[index];

        $upload.upload({
          url: configuration.AWS.url,
          method: 'POST',
          data : {
            key: file.name, 
            AWSAccessKeyId: configuration.AWS.AccessKeyId ,
            acl: 'private', 
            policy: configuration.AWS.policy,
            signature: configuration.AWS.signature,
            'Content-Type': file.type !== '' ? file.type : 'application/octet-stream', 
            filename: file.name 
          },
          file: file,
        }).progress(function(event) {
          $scope.progress[index] = parseInt(100.0 * event.loaded / event.total);
        });
      }
    };

    $scope.save = function(banner) {
      ref.push({
        name: banner.name 
      });

      $location.path('/');
    };
  });
