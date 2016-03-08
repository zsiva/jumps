module.exports = angular.module('jumps.infiniteScroll', []).directive('infiniteScroll', infiniteScroll);

function infiniteScroll() {
    return {
        restrict: 'A',
        link: function ($scope, element, attr) {
            var raw = element[0];
            element.bind('scroll', _.throttle(function () {
                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                    console.log('scrollTop');
                    $scope.$apply(attr.infiniteScroll);
                }
            }, 200));
        }
    };
}
