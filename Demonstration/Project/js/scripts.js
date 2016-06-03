$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- name of the plugin ----- */

/* ===== CUSTOM CODE: ===== */
  
/* ----- side menu ----- */

$('.navbar-nav-close').on('click', function(event) {
	event.preventDefault();
	$('.navbar-nav').toggleClass('is-visible');
	$(this).toggleClass('is-open');
});

/* ----- vertical limit ----- */

$('.describe-news_txt p').cutText();

// -------------------------------------------------------------------------------------
});