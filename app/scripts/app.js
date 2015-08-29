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
    'ngRoute',
    'btford.socket-io'
  ])
  /*
  .factory('mySocket', function (socketFactory) {
    //return socketFactory();
    var mySocket = socketFactory();
    mySocket.forward('error');
    return mySocket;
  })
  */
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
