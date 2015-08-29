'use strict';

/**
 * @ngdoc overview
 * @name caretakerApp
 * @description
 * # caretakerApp
 *
 * Main module of the application.
 */
angular
  .module('caretakerApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/activity', {
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl',
        controllerAs: 'activity'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
