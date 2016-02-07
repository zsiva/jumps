
module.exports = angular.module('jumps.footer', []).directive('footer', footer);

function footer() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        scope: {},
        template: require('./template.html'),
        controller: footerController
    };
}

function footerController() {
    const vm = this;
}
