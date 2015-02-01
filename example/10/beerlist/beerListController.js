'use strict';

/* global app */


app.controllers
  .controller('beerListCtrl', ['$scope', 'BeerService', function ($scope, BeerService) {

    $scope.listTitle = 'my beer list';


    $scope.beers = BeerService.beers;

    // add a method to remove a beer
    $scope.deleteBeer = function(beer) {
      var index = $scope.beers.indexOf(beer);
      $scope.beers.splice(index, 1);
    };
}]);
