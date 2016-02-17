jQuery(document).ready(function() {
			jQuery('#vmap').vectorMap({ map: 'world_en',
				enableZoom: true,
				hoverColor: '#008500',
				hoverOpacity: null,
				normalizeFunction: 'linear',
				scaleColors:  ['#FF4040', '#FE4040'],				
				values: sample_data,
				zoomStep: 2.0,
				showTooltip: true,
				onRegionClick: function(element, code, region)
				{
					console.log(region.top)		
					getCountryData(code,region);
				}
					});
					
			jQuery("#close_country").click(function(){
				//console.log("click");
				jQuery("#country_popup").hide();
			});
		});
		
		function getCountryData(countryCode,countryName){
			jQuery("#country_popup").hide();
			var jumps_countryObj = jumpsPerCountry.filter(function (country) { return country.country_code == countryCode });
			//get Jumps
			if ( jumps_countryObj.length > 0){
				if (jumps_countryObj[0]['jumps'] == 1)
					var jumps = jumps_countryObj[0]['jumps']+" jump";
				else
					var jumps = jumps_countryObj[0]['jumps']+" jumps";	
				//get when last jump was taken	
				var last_jump = "last jump was taken on " + jumps_countryObj[0]['last_jump'];	
				//get number of jumpers
				if (jumps_countryObj[0]['jumpers'] == 1)
					var jumpers = jumps_countryObj[0]['jumpers']+" jumper";
				else
					var jumpers = jumps_countryObj[0]['jumpers']+" jumpers";
					
				var innerString = countryName+" has: <ul><li> "+jumpers+"</li> <li> "+jumps+"</li><li>"+last_jump+"</li></ul>"
				}
			else{
				var jumps = 0;
				var jumpers = 0;
				var last_jump ="";
				var innerString = countryName+" has: <ul><li> 0 jumpers</li> <li> "+jumps+" jumps</li></ul>"
			}
			//console.log(jumps);
			jQuery("#country_popup #inner").html(innerString);
			jQuery("#country_popup").show();
		}
		