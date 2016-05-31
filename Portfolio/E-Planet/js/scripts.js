$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- affix.js ----- */

$('.navbar').affix({
	offset: {
    top: function() {
      return (this.top = $('.navbar-nav').offset().top)
		}
  }
});

$('.navbar').on('affix.bs.affix', function() {
	$('.title__h1').css('padding-top', function() {
		return $(this).offset().top
	});
});

$('.navbar').on('affix-top.bs.affix', function() {
	$('.title__h1').css('padding-top', 0)
});

/* ----- modal.js ----- */

$('body').on('click', '.navbar-sign_user', function(event) {
	event.preventDefault();
	$('.modal-log').removeClass('modal-log__reg').addClass('modal-log__in');
	$('.modal-log_title-reg').removeClass('current');
	$('.modal-log_title-in').addClass('current');
	$('#modalLog').modal({ backdrop: 'static' }); 
});

$('body').on('click', '.navbar-sign button, .callback-link, .modal-log_title a', function(event) {
	event.preventDefault();
	var obj = $(event.target);

	if (obj.hasClass('navbar-sign_btn__in') || obj.hasClass('modal-log_title-in')) {
		$('.modal-log').removeClass('modal-log__reg').addClass('modal-log__in');
		$('.modal-log_title-reg').removeClass('current');
		$('.modal-log_title-in').addClass('current');
	} else if (obj.hasClass('navbar-sign_btn__reg') || obj.hasClass('modal-log_title-reg')) {
		$('.modal-log').removeClass('modal-log__in').addClass('modal-log__reg');
		$('.modal-log_title-in').removeClass('current');
		$('.modal-log_title-reg').addClass('current');
	} else {
		$('#modalCall').modal({ backdrop: 'static' });
		return;
	}

	$('#modalLog').modal({ backdrop: 'static' }); 
});

/* ----- flexslider.js ----- */

$('.flexslider').flexslider({
  animation: "slide",
  customDirectionNav: $(".custom-navigation a"),
  slideshow: false,
  controlNav: false
});

/* ----- jquery.maskedinput.js ----- */

$("#phoneCall").mask("+7 (999) 999-99-99");

/* ===== CUSTOM CODE: ===== */
  
/* ----- prevend scrolling page ----- */

$('body').on('click','.menu-btn, .site-overlay, .pushy-link', function(event) {
	event.preventDefault();
	var h = ($(window).height() > 900 );
	if ($('body').hasClass('pushy-open-left') && h) {
		disableScroll()
	} else {
		enableScroll()
	}
});

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;  
}

// -------------------------------------------------------------------------------------
});