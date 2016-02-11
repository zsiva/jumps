import _ from 'lodash';
import JUMPS from '../../data/jumpers';

module.exports = angular.module('jumps.rankingController', [])
    .controller('rankingController', rankingController);

function rankingController() {
    const vm = this;

    vm.jumpers = _(JUMPS.JUMPERS).omit(_.isUndefined).omit(_.isNull).value();
}
