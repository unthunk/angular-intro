'use strict';

/* global app */

// since we defined our Angular model in app.js as app.filters we can just use app.filters here
// now we can more easily reuse our filter in other projects with this convention - the filter doesn't care what we named to model
app.filters
  .filter('capitalize', function() {
    return function(input) {
    if (input!== null) {
      input = input.toLowerCase();
    }
    return input.substring(0,1).toUpperCase()+input.substring(1);
  };
});
