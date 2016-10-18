$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

	/* ----- slick-slider ----- */

	$('.slider__take-care').slick({
		autoplay: true,
		autoplaySpeed: 4000,
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
		slidesToScroll: 1
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
		slidesToScroll: 1
	});

/* ===== CUSTOM CODE: ===== */
  
	/* ----- description of your code ----- */



// -------------------------------------------------------------------------------------
});