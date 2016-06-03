$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- flexSlider ----- */

$('.flexslider').flexslider({
  animation: "slide",
  controlNav: false,
  directionNav: false,
  slideshowSpeed: 3000
});

/* ----- vertical limit ----- */

$('.describe-news_txt p').cutText();

/* ===== CUSTOM CODE: ===== */
  
/* ----- side menu ----- */

$('.navbar-nav-close').on('click', function(event) {
	event.preventDefault();
	$('.navbar-nav').toggleClass('is-visible');
	$(this).toggleClass('is-open');
});

/* ----- form position ----- */

if ($(window).width() > 819) {
	$('.callback-form').css({
		top: $('header').height()
	});
} else {
	$('.callback-form').css({
		top: $('.navbar').height()
	});

	$('.callback').css({
		top: 0
	});
}

// -------------------------------------------------------------------------------------
});