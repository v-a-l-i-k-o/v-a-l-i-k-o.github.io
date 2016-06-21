$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- nanoscroller.js ----- */

$(".nano").nanoScroller( {
	alwaysVisible: true,
	preventPageScrolling: true
});

$('.modal').on('shown.bs.modal', function (e) {
	$(".nano").nanoScroller();
});

/* ----- modal.js ----- */

$('body').on('click', '.btn', function(event) {
	event.preventDefault();
  var data = $(this).data('id');
	$('#'+ data).modal();
});

$('body').on('click', '.contact-link', function(event) {
	event.preventDefault();
  var href = $(this).attr('href');
	$('#'+ href).modal();
});

$('.tab-content__targets, .channels').on('click', 'a', function(event) {
	event.preventDefault();
  var href = $(this).attr('href');
	$('#modalPrice'+ href).modal();
});

$('#modalGetPrice, #modalThanks').on('hidden.bs.modal', function (e) {
  if ($('.modal').hasClass('in'))
    $('body').addClass('modal-open');
  $('#modalGetPrice').removeClass('done');
})

$('body').on('click', '.btn-form__getPrice', function(event) {
  event.preventDefault();
  var inputMail = $('.form__getPrice').find('input[type="email"]');
  var mailValue = inputMail.val();
  $(this).closest('#modalGetPrice').find('p').text('Прайс успешно отправлен на '+ mailValue);
  inputMail.val('');
  $(this).closest('#modalGetPrice').addClass('done');
});

$('.btn-form__thanks').on('click', function(event) {
  event.preventDefault();
  $('#modalThanks').modal('hide');
});

/* ----- flexSlider.js ----- */

$('#tv-slider').flexslider({
  animation: "fade",
  slideshowSpeed: 4000,
  animationSpeed: 1000,
  initDelay: 1000,
  controlNav: false,
  directionNav: false
});

$('#leaders-carousel').flexslider({
	animation: "slide",
	controlNav: false,
  animationLoop: true,
  itemWidth: 240,
  slideshow: true,
  asNavFor: '#leaders-slider'
});

$('#leaders-slider').flexslider({
	animation: "slide",
	slideshowSpeed: 4000,
  animationSpeed: 1000,
	animationLoop: true,
	slideshow: true,
	controlNav: false,
	controlsContainer: $(".custom-controls-container"),
	customDirectionNav: $(".custom-navigation a"),
	sync: "#leaders-carousel"
});

/* ----- tab.js ----- */

$('.nav-tabs__modalPrice a').click(function(event) {
	event.preventDefault();
  $(this).tab('show');
});

/* ----- isotop.js ----- */

var grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: (function() {
      var width = $('.grid').width()/4;
    	return width
    })()
  }
});

// filter items on button click
$('.targets-tabs').on( 'click', 'li', function(e) {
  e.preventDefault();
  var filterValue = $(this).attr('data-filter');
  grid.isotope({ filter: filterValue });
});

/* ===== CUSTOM CODE: ===== */
  
/* ----- toggle menu ----- */

$('.navbar').on('click', '.btn-menu', function(event) {
	event.preventDefault();
	$('body').toggleClass('menu-open');
});

/* ----- toggle buttons ----- */

$('.targets-tabs').on('click', 'li', function(event) {
	var items = $(this).closest('.targets-tabs').find('li');
	$(items).each(function(index, el) {
		$(el).removeClass('current');
	});
	$(this).addClass('current');
});

// -------------------------------------------------------------------------------------
});

/* ----- yandex map ----- */

ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map("map", {
    center: [61.254623,73.425984],
    zoom: 16
  });
  // Создаем метку с помощью вспомогательного класса.
  var myPlacemark = new ymaps.Placemark([61.254623,73.425984], {
    // Свойства.
    // Содержимое иконки, балуна и хинта.
    balloonContent: '',
    hintContent: 'ул. 30 лет Победы, 27/2'
  });
 	// иконка
  myPlacemark.options.set('iconImageHref', './img/balloon.png');
  myPlacemark.options.set('iconImageOffset', [-45, -130]);
  myPlacemark.options.set('iconImageSize', [85,123]);
  myMap.controls.add('smallZoomControl');
  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark);

  var geometry = [[61.25335,73.4262], [61.254623,73.4253]],
 
      properties = {
        hintContent: "Путь к зданию"
      },
      options = {
        draggable: true,
        strokeColor: '#ffcc7c',
        strokeWidth: 8
 
      },
      polyline = new ymaps.Polyline(geometry, properties, options);
 
      myMap.geoObjects.add(polyline); 
};