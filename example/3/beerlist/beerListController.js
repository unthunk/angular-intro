'use strict';

/* global beerAppControllers */


beerAppControllers
  .controller('beerListCtrl', ['$scope', function ($scope) {

    $scope.listTitle = 'my beer list';

    $scope.beers = [
      {
        name: 'Opal',
        brewery: 'Firestone Walker Brewing Copmany',
        style: 'Saison/Farmhouse Ale',
        img: '010560f440bfcd10c0e355776a74e0e5_640x640.jpg'
      },
      {
        name: 'Aroma Coma',
        brewery: 'Drake\'s Brewing Company',
        style: 'American IPA',
        img: '25a270e714395ee36eaf331390ada43f_640x640.jpg'
      },
      {
        name: 'Blonde Ale',
        brewery: 'Saint Archer',
        style: 'Kölsch',
        img: '2fc64ab326de2ac837e4bd7a7b880169_640x640.jpg'
      },
      {
        name: 'Habanero Sculpin',
        brewery: 'Ballast Point Brewing & Spirits',
        style: 'American IPA',
        img: '3258601a72b1c51f1e9b7d88fcd553c6_640x640.jpg'
      },
      {
        name: 'Howling Wolf Weisse Bier',
        brewery: 'Grand Teton Brewing',
        style: 'Hefeweizen',
        img: '5ca70c82e1159ca48fb4feda50bb135b_640x640.jpg'
      },
      {
        name: 'Gold Medal Taiwan Beer',
        brewery: 'Taiwan Tobacco & Liquor Corporation',
        style: 'North American Adjunct Lager',
        img: '6a7a23a7bbe708d6d01758373e6447dd_640x640.jpg'
      },
      {
        name: 'Lizard\' Mouth',
        brewery: 'Figueroa Mountain',
        style: 'Imperial/Double IPA',
        img: '82c391e51e10f63257ef3c22d7271cde_640x640.jpg'
      },
      {
        name: 'Pabst Blue Ribbon',
        brewery: 'Pabst Brewing Company',
        style: 'North American Adjunct Lager',
        img: '872451ba399ded315d56dd91261558c6_640x640.jpg'
      },
      {
        name: 'Hell or High Watermelon',
        brewery: '21st Amendment Brewery',
        style: 'Fruit Beer',
        img: '8c3a7859b381ff2b24220d6243e6f82b_640x640.jpg'
      },
      {
        name: 'Budweiser',
        brewery: 'Anheuser-Busch',
        style: 'American Light Lager',
        img: '9819370685f618c22a785245fae33c01_640x640.jpg'
      },
      {
        name: 'Duke\'s Cold Nose Brown Ale',
        brewery: 'Bold City Brewery',
        style: 'American Brown Ale',
        img: 'b0e80a087abe913759b13468a04ddb13_640x640.jpg'
      },
      {
        name: 'Dead Guy Ale',
        brewery: 'Rogue Ales',
        style: 'Maibock/Helles Bock',
        img: 'babb5f6168466791928c9729555ee60c_640x640.jpg'
      },
      {
        name: 'Jon Boat Ale',
        brewery: 'Intuition Ale Works',
        style: 'Kölsch',
        img: 'c6078187b0b9bc62f53d1e3171df5d14_640x640.jpg'
      },
      {
        name: 'IPA',
        brewery: 'Saint Archer',
        style: 'American IPA',
        img: 'd58ee983617a542022b773e1bd38ddb8_640x640.jpg'
      },
      {
        name: 'Hop Nosh IPA',
        brewery: 'Uinta Brewing Company',
        style: 'American IPA',
        img: 'dd6b4e47c8ccbe5d3391610630d96bc9_640x640.jpg'
      },
      {
        name: 'Yanjing Beer',
        brewery: 'Beijing Yanjing Brewery',
        style: 'North American Adjunct Lager',
        img: 'eea317bf382361c8a6700beb204df311_640x640.jpg'
      },
      {
        name: 'Fat Squirrel',
        brewery: 'New Glarus Brewing Company',
        style: 'American Brown Ale',
        img: 'f55611f0c153f9d70705f89aeb3d2d5c_640x640.jpg'
      },
      {
        name: 'Union Jack IPA',
        brewery: 'Firestone Walker Brewing Copmany',
        style: 'American IPA',
        img: 'ff3d24dad779211197758befb70290bf_640x640.jpg'
      }
    ];
}]);
