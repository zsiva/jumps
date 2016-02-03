(function($) {
  $(document).ready(function(){
    $( "#tabs" ).tabs();
    $('.info_icon').hover(
		function () {
			$(this).closest('.jumper').find('.toolTip').css({'left': $(this).offset().left - 120}).show();
		}, 
		function () {
			$(this).closest('.jumper').find('.toolTip').hide();
		}
	);
	
  });
})(jQuery);
