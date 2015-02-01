'use strict';

/* global angular */

// we can also make our controllers more modular
var app = {
  name: 'beerApp',
  filters: angular.module('beerFilters', []),
  controllers: angular.module('beerAppControllers', [])
};


var beerApp = angular.module(app.name, ['beerAppControllers','beerFilters']);

// modular code is modular
