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
    'services.config',
    'swfobject'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/banners.html',
        controller: 'BannersCtrl',
        resolve: {
          banners: function($q, BannerService) {
            var defer = $q.defer();
            var obj = BannerService.getBanners();

            obj.$loaded().then(function() {
              defer.resolve(obj);
            });

            return defer.promise;
          }
        }
      })
      .when('/banners_create', {
        templateUrl: 'views/banners_create.html',
        controller: 'BannersCreateCtrl'
      })
      .when('/banners_edit/:id', {
        templateUrl: 'views/banners_edit.html',
        controller: 'BannersEditCtrl',
        resolve: {
          banner: function($q, BannerService, $route) {
            var defer = $q.defer();
            var obj = BannerService.getBanner($route.current.params.id);

            obj.$loaded().then(function() {
              defer.resolve(obj);
            });

            return defer.promise;
          }
        }
      })
      .when('/banners_preview/:id', {
        templateUrl: 'views/banners_preview.html',
        controller: 'BannersPreviewCtrl',
        resolve: {
          banner: function($q, BannerService, $route) {
            var defer = $q.defer();
            var obj = BannerService.getBanner($route.current.params.id);

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
