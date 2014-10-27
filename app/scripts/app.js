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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/banners.html',
        controller: 'BannersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
