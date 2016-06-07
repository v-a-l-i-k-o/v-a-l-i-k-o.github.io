$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- modal.js ----- */

$('body').on('click', '.btn__callback, .btn__advs-order', function(event) {
	event.preventDefault();
	$('#modalCallback').modal({
		backdrop: 'static'
	});
});

$('body').on('click', '.btn-form__form-order, .btn-form__consult', function(event) {
	event.preventDefault();
	$('#modalThanks').modal({
		backdrop: 'static'
	});
});

$('body').on('click', '.contact-link', function(event) {
	event.preventDefault();
	if ($(this).attr('href') == '#rekvisit') {
		$('#modalRekvisit').modal({ backdrop: 'static' });
	} else if ($(this).attr('href') == '#about') {
		$('#modalAbout').modal({ backdrop: 'static' });
	} else {
		$('#modalOferta').modal({ backdrop: 'static' });
	}
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

/* ===== CUSTOM CODE: ===== */
  
/* ----- toggle menu ----- */

$('.navbar').on('click', '.btn-menu', function(event) {
	event.preventDefault();
	$('body').toggleClass('menu-open');
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
  myPlacemark.options.set('iconImageHref', '../img/balloon.png');
  myPlacemark.options.set('iconImageOffset', [-45, -130]);
  myPlacemark.options.set('iconImageSize', [75,123]);
    
  myMap.controls.add('smallZoomControl');
  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark);
};