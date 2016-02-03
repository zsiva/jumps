jQuery(document).ready(function($) {

	if($('#projects').length > 0){		
			var $container = $('#projects');
			
			$container.imagesLoaded(function() {
				$container.isotope({
				  // options
				  animationEngine: 'best-available',
				  itemSelector : '.item-thumbs',
				  layoutMode : 'fitRows'
				});
			});
			
			// filter items when filter link is clicked
			var $optionSets = $('#options .option-set'),
				$optionLinks = $optionSets.find('a');
		
			  $optionLinks.click(function(){
				var $this = $(this);
				// don't proceed if already selected
				if ( $this.hasClass('selected') ) {
				  return false;
				}
				var $optionSet = $this.parents('.option-set');
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected');
		  
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
					key = $optionSet.attr('data-option-key'),
					value = $this.attr('data-option-value');
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[ key ] = value;
				if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
				  // changes in layout modes need extra logic
				  changeLayoutMode( $this, options )
				} else {
				  // otherwise, apply new options
				  console.log(options);
				  $container.isotope( options );
				}
				
				return false;
			});
		}
});