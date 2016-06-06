$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- modal.js ----- */

$('body').on('click', '.btn__callback', function(event) {
	event.preventDefault();
	$('#modalCallback').modal({
		backdrop: 'static'
	});

});

/* ===== CUSTOM CODE: ===== */
  
/* ----- toggle menu ----- */

$('.navbar').on('click', '.btn-menu', function(event) {
	event.preventDefault();
	$('body').toggleClass('menu-open');
});

// -------------------------------------------------------------------------------------
});