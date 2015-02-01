'use strict';

/* global app */

app.services
  .factory('BeerService', ['$resource', function($resource){
    return $resource('beer.json', {}, {
      query: {method: 'GET', params: {}, isArray:true}
    });
  }]);
