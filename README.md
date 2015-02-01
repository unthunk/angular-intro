# Intro to Angular

An introduction to AngularJS with a sample application.

## Installing

Point your choice of web server at the root folder of this project and you are good to go.  Or, you can use the included node server to serve these pages.  

Run `npm install` to install the node dependencies.

Run `bower install` to pull down the Angular dependencies.

To start the server, run `grunt server` then open a browser to http://localhost:3003/ or to the exampel you want to run.


## Notes

What is Angular?
  - a MV* framework for creating web apps/SPAs
  - Philosophy: Angular is what HTML would have been had it been designed for applications.
    - declarative HTML
  - Features
    - two-way data binding
    - routing
    - services
    - filters
    - directives
    - testing
    - modules
    - DI (dependedncy injection)


Beer app!

1. Bootstrap Angular

2. Add a controller - list of beers
  - this part of DOM controlled by controller
  - directives 
    - Angular incldues a bunch of built in directives: https://docs.angularjs.org/api/ng/directive
    - ng-repeat iterates over a collection and applies template to each item (looping FTW)
    - an error in the console??

3. Let's get organized
  - organizing your code make it easier to devleop and maintain
  - more directives
    - don't show unprocessed {{}} to users
    - fix that pesky 404
  - Dependeny Injection

4. Filters and two-way databinding at work
  - use ng-model to bind a form input to a variable - when the value changes in the input the variable changes as evidenced by filter
  - Use filters to format stuff

5. More filters
  - chain filters
  - custom filters
  - keep it modular

6. Make the controllers more modular too

7. Add another page: breweries
  - setup routing
  - add new breweries controller
  - we need templates and ng-view
    - update index.html
    - create partial html for controllers

8. Duplicate breweries in the list
  - filter or function?

9. The beers list is in two places
  - model has been hard coded into the controllers
  - use a service

10. More data-binding
  - remove a beer affects the service and thus the brewery list

11. REST
