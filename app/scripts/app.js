/* global Firebase */
'use strict';

/**
 * @ngdoc overview
 * @name bannerPreviewApp
 * @description
 * # bannerPreviewApp
 *
 * Main module of the application.
 */
angular
  .module('bannerPreviewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'angularFileUpload',
    'services.config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/banners.html',
        controller: 'BannersCtrl'
      })
      .when('/banners_create', {
        templateUrl: 'views/banners_create.html',
        controller: 'BannersCreateCtrl',
        resolve: {
          banner: function($q) {
            var defer = $q.defer();
            defer.resolve();
            return defer.promise;
          }
        }
      })
      .when('/banners_edit/:id', {
        templateUrl: 'views/banners_create.html',
        controller: 'BannersCreateCtrl',
        resolve: {
          banner: function($q, $firebase, $route, configuration) {
            var defer = $q.defer();
            var obj = $firebase(new Firebase(configuration.firebaseUrl + '/' + $route.current.params.id)).$asObject();

            obj.$loaded().then(function() {
              defer.resolve(obj);
            });

            return defer.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
