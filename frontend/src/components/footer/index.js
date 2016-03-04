module.exports = angular.module('jumps.footer', []).directive('footer', footer);

function footer() {
    return {
        restrict: 'E',
        template: require('./template.html')
    };
}
