import SLIDER from '../../data/slides';
import GALLERY from '../../data/gallery';
import STATES from '../../constants/states';

module.exports = angular.module('jumps.homeController', [])
  .controller('homeController', homeController);

function homeController() {
  const vm = this;

  vm.slides = SLIDER.SLIDES;
  vm.galleryRows = _.chunk(GALLERY.ITEMS, GALLERY.items_row_home);
  vm.galleryUrl = STATES.GALLERY;
}
