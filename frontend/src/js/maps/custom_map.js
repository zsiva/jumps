export default {
    loadMap: function () {
        var customMap = $('#vmap'),
            mapWrapper = $('.map-wrapper');

            sizeMap();
            customMap.vectorMap({ map: 'world_en',
                enableZoom: false,
                hoverColor: '#008500',
                hoverOpacity: null,
                normalizeFunction: 'linear',
                scaleColors:  ['#FF4040', '#FE4040'],
                values: sample_data,
                showTooltip: true,
                onRegionClick: function(element, code, region){
                    //getCountryData(code,region);
                }
            });
    },
    sizeMap: function () {
        var customMap = $('#vmap'),
            mapWrapper = $('.map-wrapper');

        var containerWidth = mapWrapper.width(),
            containerHeight = (containerWidth / 1.4);

        customMap.css({
            'width': containerWidth,
            'height': containerHeight
        });
    }
};
