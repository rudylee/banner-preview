'use strict';

describe('Controller: BannersPreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('bannerPreviewApp'));

  var BannersPreviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BannersPreviewCtrl = $controller('BannersPreviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
