$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

	/* ----- name of the plugin ----- */

	$('.form-user').on('click', '.btn__submit', function(event) {
		event.preventDefault();
		$('.modal').bPopup({
			speed: 450,
			opacity: .75,
			modalClose: false,
			modalColor: '#000',
			transition: 'slideDown'
		});
		$(this).closest('form').hide().prev('a').show();
	});

/* ===== CUSTOM CODE: ===== */
  
	/* ----- switch function ----- */

$('.users-tb').on('click', 'a', function(event) {
	event.preventDefault();
	$(this).hide().next('form').show();
});

$('form').on('click', '.input-group-addon', function(event) {
	$(this).closest('form').hide().prev('a').show();
});

$('.form-pass').on('click', '.btn__submit', function(event) {
	event.preventDefault();
	window.location = 'inner.html';
	$(this).closest('form').hide().prev('a').show();
});

// -------------------------------------------------------------------------------------
});