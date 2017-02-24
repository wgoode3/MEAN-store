var app = angular.module('app', ['ngRoute', 'angular-momentjs']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: '/partials/index.html'
    })
    .when('/products', {
    	templateUrl: '/partials/products.html'
    })
    .when('/orders', {
      templateUrl: '/partials/orders.html'
    })
    .when('/customers', {
      templateUrl: '/partials/customers.html'
    })
    .when('/settings', {
      templateUrl: '/partials/settings.html'
    })
    .when('/product/:id', {
      templateUrl: '/partials/product.html'
    })
    .otherwise({
      redirectTo: '/index'
    });
});