'use strict';


// Declare app level module which depends on filters, and services
angular.module('homePiApp', ['homePiApp.filters', 'homePiApp.services', 'homePiApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    // Main App
    $routeProvider.when('/', {templateUrl: 'partials/switches.html', controller: SwitchListCtrl});
    
    // Contact
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
    
    // Configuration
      //$routeProvider.when('/configuration', {templateUrl: 'partials/configuration.html', controller: SwitchListCtrl});
      //$routeProvider.when('/configuration/edit/:id', {templateUrl: 'partials/edit.html', controller: SwitchListCtrl});

    // Contact
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});

    // All others
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
