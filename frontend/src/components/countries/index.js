import {visitedCountries} from '../../data/map_data';
require('vmap');
require('world_map');

module.exports = angular.module('jumps.countriesController', [])
    .controller('countriesController', countriesController);

function countriesController() {
    let wrapper = angular.element('.map-wrapper'),
        containerWidth = wrapper.width() - 200,
        containerHeight = Math.ceil(containerWidth / 1.4);

    wrapper.append('<div id="vmap" style="width: '+ containerWidth + '; height: ' + containerHeight + 'px;"></div>');

    angular.element('#vmap').vectorMap({ map: 'world_en',
        enableZoom: false,
        hoverColor: '#008500',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors:  ['#FF4040', '#FE4040'],
        values: visitedCountries,
        showTooltip: true
    });

}
