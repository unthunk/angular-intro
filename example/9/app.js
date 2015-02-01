'use strict';

/* global angular */

// add a module for services
var app = {
  name: 'beerApp',
  filters: angular.module('beerFilters', []),
  controllers: angular.module('beerAppControllers', []),
  services: angular.module('beerAppServices', [])
};

// include beerAppServices in our dependencies
var beerApp = angular.module(app.name, ['beerAppControllers','beerFilters','ngRoute', 'beerAppServices'])

  .config(['$routeProvider' ,function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'beerListCtrl',
        templateUrl: 'templates/beer-list.html',
      })
      .when('/breweries', {
        controller: 'breweriesCtrl',
        templateUrl: 'templates/breweries.html',
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

