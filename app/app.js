'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.httpstatus'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/httpstatus'});
}]);
