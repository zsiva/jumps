import {jumpers} from '../../data/jumpers';

module.exports = angular.module('jumps.rankingController', [])
    .controller('rankingController', rankingController);

function rankingController($uibModal) {
    const vm = this;
    vm.jumpers = jumpers;

    vm.getJumperInfo = function (name) {
        return vm.jumpers.find(jumper => jumper.name === name);
    };

    vm.openInfoBox = function (name) {
        $uibModal.open({
            backdrop: true,
            keyboard: true,
            modalFade: true,
            template: require('../modal/template.html'),
            controller: 'modalController as vm',
            resolve: {
                info: function() {
                    return vm.getJumperInfo(name);
                }
            }
        });
    };
}
