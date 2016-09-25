$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- name of the plugin ----- */



/* ===== CUSTOM CODE: ===== */
  
/* ----- Разворачиваем подробное описание ----- */

$('.service-item').on('click', '.js-btn-more', function (e) {
	e.preventDefault();
	var id = $(this).data('num');
	var detail = $('.service-items').find(id);
	var parent = $('.js-service-detail');

	detail.removeClass('hidden').siblings()
															.addClass('hidden');

	if ( $(parent).is(":hidden")) {
		$(parent).slideDown(300);
	} else {
		$(parent).slideUp(300);
	}
})

// -------------------------------------------------------------------------------------
});