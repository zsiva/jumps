import STATES from '../../constants/states';
let logo = require('../../images/logo.png');

module.exports = angular.module('jumps.navigation', []).directive('navigation', navigation);

function navigation() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        scope: {},
        template: require('./template.html'),
        controller: navigationController
    };
}

function navigationController() {
    const vm = this;

    vm.rankingUrl = STATES.RANKING;
    vm.galleryUrl = STATES.GALLERY;
    vm.countriesUrl = STATES.COUNTRIES;
    vm.homeUrl = STATES.HOME;

    vm.logo = logo;
}
