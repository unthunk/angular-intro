'use strict';

/* global angular */

var app = {
  name: 'beerApp'
};


var beerApp = angular.module(app.name, ['beerAppControllers']);

var beerAppControllers = angular.module('beerAppControllers', []);
