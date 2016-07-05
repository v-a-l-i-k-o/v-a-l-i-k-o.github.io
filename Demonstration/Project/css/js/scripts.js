$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- name of the plugin ----- */



/* ===== CUSTOM CODE: ===== */
  
/* ----- toggle steps ----- */

$('body').on('click', '.btn__buy, .btn__submit', function (event) {
	$(this).closest('.catalog-item').fadeOut(0);
  if ($(this).hasClass('btn__buy')) {
  	$('.catalog-item2').fadeIn(600);
	} else {
    $('.catalog-item3').fadeIn(600);
  }
  return false;
});
	

// -------------------------------------------------------------------------------------
});