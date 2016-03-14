import GALLERY from '../../../data/gallery';

module.exports = angular.module('jumps.gallery', []).directive('gallery', gallery);

function gallery() {
    return {
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        template: require('./template.html'),
        controller: galleryController,
        bindToController: {
            rowclass: '=',
            type: '=',
            rowitems: '='
        },
    };
}

function galleryController() {
    const vm = this;

    vm.items = GALLERY.ITEMS;
}
