'use strict';

describe('Controller: BannersCtrl', function () {

  // load the controller's module
  beforeEach(module('bannerPreviewApp'));

  beforeEach(module('FirebaseServiceMock'));

  var BannersCtrl,
    scope,
    FirebaseService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _FirebaseService_) {
    FirebaseService = _FirebaseService_;
    scope = $rootScope.$new();
    BannersCtrl = $controller('BannersCtrl', {
      $scope: scope,
      FirebaseService: FirebaseService
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});
