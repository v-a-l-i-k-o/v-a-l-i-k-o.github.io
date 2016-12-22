$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

	/* ----- name of the plugin ----- */



/* ===== CUSTOM CODE: ===== */
  
	/* ----- accordion ----- */

	accordionInit('.accordion');

	function accordionInit(el) {
		var closeAccordion = function() {
			$('.accordion_title').removeClass('active');
			$('.accordion_content').slideUp(300).removeClass('open');
		};

		$(el).on('click', '.accordion_title', function(e) {
			if (e.target.tagName !== 'LABEL' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'I') {
				var multiple = $(this).closest(el).is('.multiple');
				var attrHref = $(this).attr('href');

				if ($(this).is('.active')) {

					$(this).removeClass('active');
					$(attrHref).slideUp(300).removeClass('open');

				} else {
					if (multiple) closeAccordion();

					$(this).addClass('active');
					$(attrHref).slideDown(300).addClass('open');
				}
			}

			e.preventDefault();
		});
	};

// -------------------------------------------------------------------------------------
});