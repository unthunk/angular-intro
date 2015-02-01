'use strict';

/* global app */


app.controllers
  .controller('breweriesCtrl', ['$scope', 'BeerService', function ($scope, BeerService) {

    $scope.breweriesTitle = 'breweries';


    $scope.breweries = function() {
      var i, len = $scope.beers.length, ret = [];

      for(i = 0; i < len; i++) {
        if(ret.indexOf($scope.beers[i].brewery) === -1) {
          ret.push($scope.beers[i].brewery);
        }
      }
      return ret.sort();
    };


    $scope.beers = BeerService.beers;
}]);
