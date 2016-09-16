$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */


/* ===== CUSTOM CODE: ===== */
  
/* ----- jquery .scrolltop() ----- */

$('.signUp').on('click','.btn__signUp', function (event) {
	event.preventDefault();
	var top = $('footer').offset().top;
	$("body,html").animate({scrollTop: top}, 400);
});

// -------------------------------------------------------------------------------------
});