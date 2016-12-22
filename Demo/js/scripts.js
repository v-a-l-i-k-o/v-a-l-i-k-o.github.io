$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

	/* ----- selectric ----- */

	$('select').selectric({
		maxHeight: 200
	});

	/* ----- slick ----- */

	$('.single-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.multiple-slider'
	});

	$('.multiple-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		centerPadding: '0',
		focusOnSelect: true,
		asNavFor: '.single-slider'
	});

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