'use strict';

/* global angular */

var app = {
  name: 'beerApp'
};

// add a depndeceny on beerAppControllers
var beerApp = angular.module(app.name, ['beerAppControllers']);

var beerAppControllers = angular.module('beerAppControllers', []);

// modular code is modular
