import GALLERY from '../../data/gallery';

module.exports = angular.module('jumps.galleryController', [])
    .controller('galleryController', galleryController);

function galleryController() {
    const vm = this;

    vm.gallery = GALLERY.ITEMS;
}
