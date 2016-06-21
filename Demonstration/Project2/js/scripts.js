$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ===== CUSTOM CODE: ===== */

/* ----- Add active class to li-element ----- */

$('body').on('click', '.sb-btn-minor', function(event) {
	event.preventDefault();
	var href = $(this).attr('href');
	$('.sb-panel-tab').removeClass('active').find('a[href="' + href +'"]').closest('li').addClass('active');
}); 

/* ----- sideBar ----- */

//open the panel

$('.sb-btn').on('click', function(event){
	event.preventDefault();
	$('.sb-panel').addClass('is-visible');
});

//close the panel

$('.sb-panel').on('click', function(event){
	event.preventDefault();
	if( $(event.target).is('.sb-panel') ||
		$(event.target).is('.sb-panel-close') ||
		$(event.target).is('.sb-panel-hide') ) { 
		$('.sb-panel').removeClass('is-visible');
		$('.sb-chose-time').delay(500).slideDown();
		$('.sb-countdown').delay(500).slideDown();
		$('.sb-form-group__date').delay(500).slideUp(300);
		setTimeout( function() { 
    	$('.sb-form-caption').toggleClass('in');
    }, 500); 
	}
});

/* ----- chose time ----- */

$('.sb-chose-time').on('click', function(event) {
	event.preventDefault();
	var form = $(this).closest('.sb-form');
	$(this).hide();
	form.find('.sb-countdown').hide();
	form.find('.sb-form-caption').toggleClass('in');
	form.find('.sb-form-group__date').slideDown(300);
});

/* ----- countdown ----- */

// -------------------------------------------------------------------------------------
});