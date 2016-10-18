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

/* ----- yandex map ----- */

ymaps.ready(init);

function init () {
	var myMap = new ymaps.Map("map", {
		center: [55.79635956893193,37.710413500000016],
		zoom: 16
	});
	// Создаем метку с помощью вспомогательного класса.
	var myPlacemark = new ymaps.Placemark([55.79635956893193,37.710413500000016], {
		// Свойства.
		// Содержимое иконки, балуна и хинта.
		balloonContent: '',
		hintContent: 'г. Москва, Площадь, ул.1-я Бухвостова 12/11 офис 211'
	});
	// иконка
	myPlacemark.options.set('iconImageHref', './img/icons/balloon.png');
	myPlacemark.options.set('iconImageOffset', [-15, -50]);
	myPlacemark.options.set('iconImageSize', [38, 53]);
	// Добавляем zoom.
	myMap.controls.add('smallZoomControl');
	// Добавляем все метки на карту.
	myMap.geoObjects.add(myPlacemark);
};