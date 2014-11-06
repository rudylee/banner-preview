'use strict';

describe('Controller: BannersCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('bannerPreviewApp'));

  var BannersCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BannersCreateCtrl = $controller('BannersCreateCtrl', {
      $scope: scope
    });
  }));

});
