/**
 * Jumps Page
 * @author Marta Carrizo Ibarra
 */

const app = angular.module('jumpsPage', [
    'ngRoute',
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "components/home/template.html", controller: "PageCtrl"})
    // Pages
    .when("/ranking", {templateUrl: "components/ranking/template.html", controller: "PageCtrl"})
    .when("/gallery", {templateUrl: "components/gallery/template.html", controller: "PageCtrl"})
    .when("/visited-countries", {templateUrl: "components/countries/template.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
