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

/* ===== CUSTOM CODE: ===== */
  
/* ----- navigate toTop ----- */

$('.menu').on('click', 'a[href^="#"], a[href^="."]', function(e) {          // если в href начинается с # или ., то ловим клик
  e.PreventDefault;
  var scroll_el = $(this).attr('href');                                     // возьмем содержимое атрибута href
  if ($(scroll_el).length != 0) {                                           // проверим существование элемента чтобы избежать ошибки
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
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