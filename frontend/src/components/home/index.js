
module.exports = angular.module('jumps.homeController', [])
  .controller('homeController', homeController);

function homeController(slides) {
  const vm = this;

  vm.slides = slides;

}
