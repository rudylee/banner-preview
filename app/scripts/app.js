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
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/banners.html',
        controller: 'BannersCtrl'
      })
      .when('/banners_create', {
        templateUrl: 'views/banners_create.html',
        controller: 'BannersCreateCtrl'
      })
      .when('/banners_edit/:id', {
        templateUrl: 'views/banners_edit.html',
        controller: 'BannersEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
