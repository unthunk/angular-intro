'use strict';

/* global angular */


var app = {
  name: 'beerApp',
  filters: angular.module('beerFilters', []),
  controllers: angular.module('beerAppControllers', [])
};


var beerApp = angular.module(app.name, ['beerAppControllers','beerFilters','ngRoute'])

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

