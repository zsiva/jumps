import STATES from '../../constants/states';

module.exports = angular.module('books.navigation', []).directive('navigation', navigation);

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
}
