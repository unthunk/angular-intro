'use strict';

/* global angular */

// we will create an Angular model for our filters here
var app = {
  name: 'beerApp',
  filters: angular.module('beerFilters', [])
};

// add beerFilters to our depndencies
var beerApp = angular.module(app.name, ['beerAppControllers','beerFilters']);

var beerAppControllers = angular.module('beerAppControllers', []);
