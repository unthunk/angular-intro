'use strict';

/* global app */


app.controllers
  .controller('beerListCtrl', ['$scope', 'BeerService', function ($scope, BeerService) {

    $scope.listTitle = 'my beer list';

    // now the beers are avilable to all controllers via the service
    $scope.beers = BeerService.beers;
}]);
