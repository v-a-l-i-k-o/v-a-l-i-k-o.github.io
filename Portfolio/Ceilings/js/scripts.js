$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- flexslider.js ----- */

$('.flexslider').flexslider({
  animation: "slide",
  controlNav: "thumbnails",
  slideshow: false,
  prevText: "",
  nextText: ""
});

/* ===== CUSTOM CODE: ===== */
  
/* ----- jquery .scrolltop() ----- */

$(".nav").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr("href"),
		top = $(id).offset().top-105;
	$("body,html").animate({scrollTop: top}, 500);
});

// -------------------------------------------------------------------------------------
});

/* ----- yandex map ----- */

ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map("map", {
    center: [55.7958,37.8038],
    zoom: 16
  }),

  // Создаем метку с помощью вспомогательного класса.
  myPlacemark = new ymaps.Placemark([55.7958,37.8038], {
    // Свойства.
    // Содержимое иконки, балуна и хинта.
    balloonContent: 'ULTRAMARIN<br/> WEB - СТУДИЯ',
    hintContent: 'ул. Средняя Первомайская, д.3'
  }, {
	  // Опции.
	  // Стандартная иконка.
	  preset: 'twirl#greyDotIcon',
    balloonOffset: [0, 0]
  });
    
  myMap.controls.add('smallZoomControl');
  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark);
};