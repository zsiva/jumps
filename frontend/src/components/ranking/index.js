import _ from 'lodash';
import JUMPS from '../../data/jumpers';

module.exports = angular.module('jumps.rankingController', [])
    .controller('rankingController', rankingController);

function rankingController() {
    const vm = this;

    vm.jumpers = _.values(JUMPS.JUMPERS);
}
