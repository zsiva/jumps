import values from "lodash/values";
import JUMPS from '../../data/jumpers';

module.exports = angular.module('jumps.rankingController', [])
    .controller('rankingController', rankingController);

function rankingController($uibModal) {
    const vm = this;

    vm.jumpers = values(JUMPS.JUMPERS);

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
