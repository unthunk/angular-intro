'use strict';

/* global angular */


var app = {
  name: 'beerApp',
  filters: angular.module('beerFilters', []),
  controllers: angular.module('beerAppControllers', [])
};

// add dependency for routing
var beerApp = angular.module(app.name, ['beerAppControllers','beerFilters','ngRoute'])

// add routing configuration, note we are chaining on the beerApp declaration
  .config(['$routeProvider' ,function ($routeProvider) {
    $routeProvider
      // we use a set of rules to declare what to do for each route we want, / will display the beer list we already built
      .when('/', {
        controller: 'beerListCtrl',
        templateUrl: 'templates/beer-list.html',
      })
      // we are adding a breweries route which will use a new controller called breweriesCtrl
      .when('/breweries', {
        controller: 'breweriesCtrl',
        templateUrl: 'templates/breweries.html',
      })
      // be nice to the user - if they enter an undefined route just send them to the hmoe page
      .otherwise({
        redirectTo: '/'
      });
}]);

