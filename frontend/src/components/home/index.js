import SLIDER from '../../data/slides';

module.exports = angular.module('jumps.homeController', [])
  .controller('homeController', homeController);

function homeController() {
  const vm = this;

  vm.slides = SLIDER.SLIDES;
}
