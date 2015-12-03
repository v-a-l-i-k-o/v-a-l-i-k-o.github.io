$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- name of the plugin ----- */


/* ===== CUSTOM CODE: ===== */
  
/* ----- Modal window ----- */

$('#callback').click(function(event) { // ловим клик по кнопке с id="callback"
    event.preventDefault(); // выключаем стандартную роль элемента
    $('#overlay').css('display', 'block')
    			 .animate({opacity: 0.9}, 400);
    $('#pop-up').css('display', 'block')
                .animate({opacity: 1}, 200);
});

$('#overlay, #close').click( function() {
    $('#pop-up').animate({opacity: 0}, 200, function() {
        $(this).css('display', 'none');
        $('#overlay').animate({opacity: 0}, 400)
                	 .css('display', 'none');
    });
});

/* ----- Yandex map ----- */

var myMap, 
    myPlacemark;
function init() {
	// Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map"). 
    myMap = new ymaps.Map ("map", {
    	// При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64],
        zoom: 7,
        behaviors: ['drag','scrollZoom']
    });
    // Создаём метку на карте.      
    myPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Москва!',
        balloonContent: 'Столица России'
    });
    myMap.geoObjects.add(myPlacemark);
    // Ползунок изменения масштаба
	myMap.controls.add('zoomControl', {right : '35px', top : '40px'});
	// Выбор типа карты
	myMap.controls.add(new ymaps.control.TypeSelector());
}
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

// -------------------------------------------------------------------------------------
});