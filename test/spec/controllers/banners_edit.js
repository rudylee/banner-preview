'use strict';

describe('Controller: BannersEditCtrl', function () {

  // load the controller's module
  beforeEach(module('bannerPreviewApp'));

  var BannersEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BannersEditCtrl = $controller('BannersEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
