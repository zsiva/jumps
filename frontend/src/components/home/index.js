

import _ from 'lodash';

module.exports = angular.module('jumps.homeController', [])
  .controller('homeController', homeController);

function homeController() {
  const vm = this;
  vm.slides = [];
  vm.currIndex = 0;

  for (var i = 0; i < 4; i++) {
      vm.slides.push({
          image: 'images/slider/Paris.png',
          text: ['Marta, Juan and Vicen in Paris, France'][vm.slides.length % 4],
          id: vm.currIndex++
      });
  };

}
