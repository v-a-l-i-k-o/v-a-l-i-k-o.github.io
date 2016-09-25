$(document).ready(function() {
// ------------------------------------------------------------------------------------

	/* ===== INITIALIZATION OF THE PLUGINS: ===== */

	/* ----- name of the plugin ----- */



	/* ===== CUSTOM CODE: ===== */

	/* ----- Разворачиваем подробное описание ----- */



	$('.service-item').on('click', '.js-btn-more', function (e) {
		e.preventDefault();
		var id = $(this).data('num');
		var detail = $('.service-items').find('#'+id);
		var current = $('.service-items .current');
		var parent = $('.js-service-detail');
		var items = $('.service-items > div[class^=col]');
		var item = $(this).closest('.service-items > div');
		var vw = $(window).width();

		if ( vw <= 767 ) {
			parent.insertAfter(item);
		} else if ( vw <= 991 && (id < 3) ) {
			parent.insertAfter(items[1]);
		} else {
			parent.insertAfter(items[3]);
		};
		if (current.length>0 && current.attr('id') != id) {
			current.removeClass('current');
			items.has('[data-num='+ current.attr('id') +']').removeClass('active');
			detail.addClass('current');
			item.addClass('active');
		} else {
			if ( $(parent).is(":hidden")) {
				detail.addClass('current');
				item.addClass('active');
				$(parent).slideDown(300);
			} else {
				$(parent).slideUp(300);
				item.removeClass('active');
				detail.removeClass('current');
			}
		};
	})

// -------------------------------------------------------------------------------------
});