angular.module('FirebaseServiceMock', []).provider('FirebaseService', function() {
  this.getBanners = function() {
    return {};
  };
});
