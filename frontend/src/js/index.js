require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

import ROUTES from './../constants/routes';
import STATES from './../constants/states';

import './../scss/main.scss';

const app = angular.module('jumpsPage', [
    'ui.router',
    'ui.bootstrap',
    require('./../components/navigation').name,
    require('./../components/footer').name,
    require('./../components/gallery').name,
    require('./../components/ranking').name,
    require('./../components/countries').name,
    require('./../components/home').name
]);
app.config(setUpRoutes);

function setUpRoutes ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state(STATES.GALLERY, {
            url: ROUTES.GALLERY,
            template: require('./../components/gallery/template.html'),
            controller: 'galleryController',
            controllerAs: 'vm'
        })
        .state(STATES.RANKING, {
            url: ROUTES.RANKING,
            template: require('./../components/ranking/template.html'),
            controller: 'rankingController',
            controllerAs: 'vm'
        })
        .state(STATES.COUNTRIES, {
            url: ROUTES.COUNTRIES,
            template: require('./../components/countries/template.html'),
            controller: 'countriesController',
            controllerAs: 'vm'
        })
        .state('index', {
            url: '/',
            template: require('./../components/home/template.html'),
            controller: 'homeController',
            controllerAs: 'vm'
        });
}
