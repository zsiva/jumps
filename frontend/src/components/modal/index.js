module.exports = angular.module('jumps.modalController', [])
  .controller('modalController', modalController);

function modalController(info, $uibModalInstance) {
  const vm = this;

  vm.modalOptions = {
      closeButtonText: 'Close',
      actionButtonText: 'OK',
      displayAction: false,
      bodyText: ''
  };
            
  angular.extend(vm.modalOptions, info);

  vm.modalOptions.ok = function () {
      $uibModalInstance.close($scope);
  };

  vm.modalOptions.closeModal = function () {
      $uibModalInstance.dismiss('cancel');
  };

}
