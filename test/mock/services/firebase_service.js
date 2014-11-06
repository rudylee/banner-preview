angular.module('FirebaseServiceMock', []).provider('FirebaseService', function() {
  this.$get = function() {
    return {
      getBanners: function() {
        return {};
      }
    };
  }
});
