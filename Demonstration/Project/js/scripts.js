$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- slick-slider ----- */

$('.slider__order').slick({
	dots: true,
	appendDots: '.slider-board'
});

$('.slider__reviews').slick({
	dots: true,
	appendDots: '.reviews',
	arrows: false
});

/* ----- bpopup ----- */

$('body').on('click', '.btn__send-request, .btn__order-submit', function(event) {
	event.preventDefault();
	$('.modal__thanks').bPopup({
	  speed: 450,
	  opacity: .85,
	  modalClose: false,
	  modalColor: '#fff',
	  transition: 'slideDown'
	});
});

$('body').on('click', '.btn__order', function(event) {
	event.preventDefault();
	$('.modal__leave-request').bPopup({
	  speed: 450,
	  opacity: .85,
	  modalClose: false,
	  modalColor: '#fff',
	  transition: 'slideDown'
	});
});

/* ----- slicknav ----- */

$('.menu').slicknav({
	'label' : '',
	'closeOnClick': true
});

/* ===== CUSTOM CODE: ===== */

/* ----- write company name ----- */

$('body').on('click', '.btn__order', function(event) {
	event.preventDefault();
	var title = $(this).closest('.offers_item').find('.offers_title').text();
	$('.modal__leave-request').find('.insert').text(title);
});

/* ----- navigate toTop ----- */

$('.menu, .slicknav_menu').on('click', 'a[href^="#"], a[href^="."]', function(e) {
  e.PreventDefault;
  var scroll_el = $(this).attr('href');                                     
  if ($(window).width() < 800) {                                           
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 45}, 500);
	} else {
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top + 2}, 500);
	};
});

/* ----- expanded class ----- */

$('body').on('click', '.btn__learn-more', function(event) {
	event.preventDefault();
	var parent = $(this).closest('.services-items');
	var item = $(this).closest('.services-item-wrap');

	parent.find('.services-item-wrap').each(function(index, el) {
		$(el).removeClass('expanded');
	});
	if (item.index() != 0 && item.index() < 3) {
		$(parent.find('.services-item-wrap')[0]).before(item);	
	} else if (item.index() != 3 && item.index() > 2) {
		$(parent.find('.services-item-wrap')[2]).after(item);
	}
	item.addClass('expanded');
});

// -------------------------------------------------------------------------------------
});