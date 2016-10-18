$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

	/* ----- slick-slider ----- */

	$('.slider__take-care').slick({
		// autoplay: true,
		// autoplaySpeed: 4000,
		arrows: false,
		dots: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 1000
	});

	$('.carusel__reviews').slick({
		// autoplay: true,
		// autoplaySpeed: 4000,
		arrows: true,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 979,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 799,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 639,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.carusel__licenses').slick({
		// autoplay: true,
		// autoplaySpeed: 4000,
		arrows: true,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 979,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 799,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 639,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/* ----- slicknav ----- */

	$('#menu').slicknav({
		label: '',
		prependTo: '',
		appendTo: 'header',
		closeOnClick: true,
		removeClasses: true
	});

/* ===== CUSTOM CODE: ===== */
  
	/* ----- description of your code ----- */



// -------------------------------------------------------------------------------------
});