/* jshint loopfunc: true */
'use strict';

/**
 * @ngdoc function
 * @name bannerPreviewApp.controller:BannersEditCtrl
 * @description
 * # BannersEditCtrl
 * Controller of the bannerPreviewApp
 */
angular.module('bannerPreviewApp')
  .controller('BannersEditCtrl', function ($scope, $upload, BannerService, banner, configuration) {
    $scope.selectedFiles = [];
    $scope.progress = [];
    $scope.banner = banner;

    $scope.onFileSelect = function($files) {
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

          BannerService.addFile($scope.banner.$id, file);
        });
      }
    };
  });
