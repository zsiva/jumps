require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-slugify');

import ROUTES from './../constants/routes';
import STATES from './../constants/states';

const app = angular.module('jumpsPage', [
    'ui.router',
    'ui.bootstrap',
    'slugifier',
    require('./../components/gallery').name,
    require('./../components/ranking').name

]);
app.config(setUpRoutes);

function setUpRoutes ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    console.log(STATES.GALLERY);
    $stateProvider
        .state(STATES.GALLERY, {
            url: ROUTES.GALLERY,
            template: require('./../components/gallery/template.html'),
            controller: 'galleryController',
            controllerAs: 'vm',
            resolve: {
            }
        })
        .state(STATES.RANKING, {
            url: ROUTES.RANKING,
            template: require('./../components/ranking/template.html'),
            controller: 'rankingController',
            controllerAs: 'vm',
            params: {
              bookSlug: '',
              bookId: ''
            },
            resolve: {
            }
        })
        .state('index', {
            url: '/',
            template: 'Hello'
        });
}
