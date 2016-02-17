var sample_data = {"ar":"1","at":"1","au":"1","be":"1","bg":"1","bo":"1","br":"1","by":"1","bz":"1","ca":"1","ch":"1","cl":"1","cm":"1","cn":"1","co":"1",
"cr":"1","cv":"1","cu":"1","cz":"1","de":"1","dk":"1","do":"1","ec":"1","eg":"1","es":"1","fi":"1","fr":"1","gb":"1","gr":"1","gt":"1","hn":"1",
"hr":"1","ht":"1","hu":"1","id":"1","ie":"1","in":"1","is":"1","it":"1","jo":"1","jp":"1","kh":"1","kr":"1","lk":"1","lv":"1","ma":"1","md":"1","mk":"1","mm":"1",
"mx":"1","my":"1","na":"1","ni":"1","nl":"1","no":"1","np":"1","nz":"1","pa":"1","pe":"1","ph":"1","pl":"1","pt":"1","py":"1","rs":"1","ro":"1","ru":"1","se":"1",
"si":"1","sk":"1","th":"1","tr":"1","tt":"1","tz":"1","ua":"1","us":"1","uy":"1","vn":"1","za":"1"
};

(function($) {
  $(document).ready(function(){
    //$( "#tabs" ).tabs();
    // $('.info_icon').hover(
	// 	function () {
	// 		$(this).closest('.jumper').find('.toolTip').css({'left': $(this).offset().left - 120}).show();
	// 	},
	// 	function () {
	// 		$(this).closest('.jumper').find('.toolTip').hide();
	// 	}
	// );

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


    function sizeMap() {
        var containerWidth = mapWrapper.width(),
            containerHeight = (containerWidth / 1.4);

        customMap.css({
            'width': containerWidth,
            'height': containerHeight
        });
    }

    $(window).on("resize", sizeMap);

  });

})(jQuery);
