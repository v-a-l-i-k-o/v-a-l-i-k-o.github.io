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

$('body').on('click', '.btn__callback, .btn__advs-order, .btn__step', function(event) {
	event.preventDefault();
	$('#modalCallback').modal();
});

$('body').on('click', '.btn__view', function(event) {
	event.preventDefault();
	$('#modalView').modal();
});

$('body').on('click', '.btn-form__form-order, .btn-form__consult', function(event) {
	event.preventDefault();
	$('#modalThanks').modal();
});

$('body').on('click', '.contact-link', function(event) {
	event.preventDefault();
	if ($(this).attr('href') == '#rekvisit') {
		$('#modalRekvisit').modal();
	} else if ($(this).attr('href') == '#about') {
		$('#modalAbout').modal();
	} else {
		$('#modalOferta').modal();
	}
});

$('.tab-content__targets').on('click', 'a[href="#4"]', function(event) {
	event.preventDefault();
	$('#modalPrice1').modal();
});

$('.tab-content__targets').on('click', 'a[href="#3"]', function(event) {
	event.preventDefault();
	$('#modalPrice2').modal();
});

$('.tab-content__targets').on('click', 'a[href="#2"]', function(event) {
	event.preventDefault();
	$('#modalPrice3').modal();
});

$('.tab-content__targets').on('click', 'a[href="#1"]', function(event) {
	event.preventDefault();
	$('#modalPrice4').modal();
});

$('body').on('click', '.btn__downloadPrice, .overlayGetPrice', function(event) {
	event.preventDefault();
	$('#modalGetPrice').modal();
});

$('#modalGetPrice').on('hidden.bs.modal', function (e) {
  $('body').addClass('modal-open');
})

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
    	return $('.grid').width()/4
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
  
  var myPlacemark1 = new ymaps.Placemark([61.2546,73.425], {
    // Свойства.
    // Содержимое иконки, балуна и хинта.
    balloonContent: '',
    hintContent: '80м от ул. 30 лет Победы'
  });
 	// иконка
  myPlacemark1.options.set('iconImageHref', './img/rroute.png');
  myPlacemark1.options.set('iconImageOffset', [7, 5]);
  myPlacemark1.options.set('iconImageSize', [55,120]);

  myMap.controls.add('smallZoomControl');
  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark1);
};