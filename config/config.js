'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    firebaseUrl: '@@firebaseUrl',
    AWS : {
      url: '@@AWS.url',
      AccessKeyId : '@@AWS.AccessKeyId',
      policy : '@@AWS.policy',
      signature: '@@AWS.signature'
    }
  });
