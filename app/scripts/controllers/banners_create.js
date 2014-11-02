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
  .controller('BannersCreateCtrl', function ($scope, $firebase, $upload, configuration) {
    $scope.selectedFiles = [];
    $scope.progress = [];
    $scope.banner = {
      id:  0,
      name: ''
    };

    var ref = new Firebase(configuration.firebaseUrl);
    var sync = $firebase(ref);

    $scope.onFileSelect = function($files) {
      // Save banner before uploading file
      save();

      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        var index = $scope.selectedFiles.push(file) - 1;

        $upload.upload({
          url: configuration.AWS.url,
          method: 'POST',
          data : {
            key: $scope.banner.id + '/' + file.name, 
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
          addFile(file.name);
        });
      }
    };

    // Saves the banner to Firebase
    function save() {
      if($scope.banner.id !== 0) {
        return;
      }

      if($scope.banner.name === '') {
        $scope.banner.name = 'Untitled';
      }

      sync.$push({
        name: $scope.banner.name,
      }).then(function(ref) {
        $scope.banner.id = ref.name();
      });
    }

    // Adds new file to Firebase
    function addFile(filename) {
      var bannerRef = new Firebase(configuration.firebaseUrl + '/' + $scope.banner.id);
      var bannerSync = $firebase(bannerRef);

      bannerSync.$push('files', {
        filename: filename 
      });
    }
  });
