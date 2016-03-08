import GALLERY from '../../data/gallery';

module.exports = angular.module('jumps.galleryController', [])
    .controller('galleryController', galleryController);

function galleryController() {
    const vm = this;

    vm.itemsToLoad = GALLERY.itemsToLoad || 6;
    vm.itemsRow = GALLERY.items_row_gallery || 3;
    vm.itemsShown = vm.itemsToLoad;
    vm.iterator = 1;

    vm.galleryRows = _.chunk(GALLERY.ITEMS, vm.itemsRow);

    // vm.paginationLimit = function(data) {
    //     return vm.itemsToLoad * vm.iterator;
    // };
    // vm.hasMoreItemsToShow = function() {
    //     return vm.itemsShown < (GALLERY.ITEMS.length / vm.itemsToLoad);
    // };
    // vm.showMoreItems = function() {
    //     vm.iterator =+ 1;
    // };
    //
    // vm.loadNewItems = function () {
    //     console.log('load new items concat!!', vm.itemsToLoad);
    //     //_.concat(vm.galleryItems, _.slice(GALLERY.ITEMS, vm.itemsToLoad));
    //     vm.galleryRows.push(_.slice(GALLERY.ITEMS, vm.itemsShown, vm.itemsToLoad));
    //     console.log('pushed items: ', _.slice(GALLERY.ITEMS, vm.itemsShown, vm.itemsToLoad));
    //     //vm.galleryItems = vm.galleryItems.concat(_.slice(GALLERY.ITEMS, vm.itemsToLoad));
    //     console.log('rows length: ', vm.galleryRows.length);
    //     console.log('items shown: ', vm.itemsShown, GALLERY.ITEMS.length);
    //     vm.itemsShown += vm.itemsToLoad;
    //
    // };
}
