

$(document).ready(function() {

    $('.Select').selectpicker();

	$('.BurgerIcon').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('body').toggleClass('ShowSidebar');
	}); 

    $('#dark_mode').on('change', function(e){
		if ($(this).is(':checked')) {
			$('body').addClass('DarkMode'); 
		} else {
			$('body').removeClass('DarkMode'); 
		}
	})


	$('.LogOutPopup').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.LogOut').toggleClass('Show'); 
	});

});
 