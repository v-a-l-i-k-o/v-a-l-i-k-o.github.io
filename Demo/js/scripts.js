$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

	/* ----- slicknav ----- */

	$('#menu').slicknav({
		label: '',
		appendTo: '.navbar',
		closeOnClick: true,
		removeClasses: true
	});

/* ===== CUSTOM CODE: ===== */

	/* ----- scrollTo ----- */

	$('.menu, .slicknav_menu').on('click', 'a[href^="#"]', function(e) {
		e.preventDefault();
		var scroll_to_el = $(this).attr('href');
		var top = (scroll_to_el == '#')? 0 : $(scroll_to_el).offset().top;
		if ($(this).closest('li').hasClass('current')) {
			return
		};
		$(this).closest('li').addClass('current').siblings().removeClass('current');
		$('html,body').animate({ scrollTop: top}, 500);
	});

	/* ----- bpopup ----- */

	var prices = {
		'iphone 4/4s'   : ['Бесплатно','500р','от 500р','1999р','800р','800р','1000р','1000р','800р','800р','800р','1000р','400р','800р','1000р'],
		'iphone 5'      : ['Бесплатно','500р','от 500р','2999р','800р','1500р','1500р','1500р','800р','1000р','1000р','1500р','2500р','1500р','1500р'],
		'iphone 5c/5s'  : ['Бесплатно','500р','от 500р','2999р','800р','1500р','1700р','1500р','1000р','1000р','1000р','1500р','2500р','1500р','1500р'],
		'iphone 6'      : ['Бесплатно','500р','от 500р','5000р','1000р','2000р','2000р','1500р','1000р','1000р','1000р','2000р','4000р','2000р','2000р'],
		'iphone 6 plus' : ['Бесплатно','500р','от 500р','8000р','1500р','2000р','2000р','1500р','1000р','1000р','1000р','2000р','5000р','2000р','2000р'],
		'iphone 3/3gs'  : ['Бесплатно','500р','от 500р','1000р','400р','800р','800р','800р','500р','500р','300р','500р','1500р','500р','1000р'],
		'ipad mini 2' : ['Бесплатно','3500р','4500р','4000р','2000р','500р','2000р','от 500р','от 1000р','от 1000р'],
		'ipad 2'      : ['Бесплатно','2500р','3500р','4000р','1500р','300р','1500р','от 500р','от 1000р','от 1000р'],
		'ipad 3'      : ['Бесплатно','3000р','4000р','4500р','2000р','500р','2000р','от 500р','от 1500р','от 1000р'],
		'ipad 4'      : ['Бесплатно','3000р','4000р','4500р','2000р','500р','2000р','от 500р','от 1500р','от 1000р'],
		'ipad air'    : ['Бесплатно','4000р','5000р','6000р','3000р','700р','3000р','от 500р','от 2000р','от 1000р'],
		'ipad mini'   : ['Бесплатно','3500р','4500р','4000р','2000р','500р','2000р','от 500р','от 1000р','от 1000р']
	};
	
	$('body').on('click', '.price-item_petal .hexagon', function(event) {
		event.preventDefault();
		var data = $(this).data('name');
		var costs;

		if ($(this).closest('.price-item').hasClass('price-item_iphone')) {
			costs = $('.modal-prices_iphone').find('.modal-prices_cost');
			for (var i = 0; i < costs.length; i++) {
				$(costs[i]).html(prices[data][i]);
			};

			$('.modal-prices_iphone').bPopup({
				speed: 450,
				opacity: .75,
				modalClose: false,
				modalColor: '#000',
				transition: 'slideDown'
			});
		} else {
			costs = $('.modal-prices_ipad').find('.modal-prices_cost');
			for (var i = 0; i < costs.length; i++) {
				$(costs[i]).html(prices[data][i]);
			};

			$('.modal-prices_ipad').bPopup({
				speed: 450,
				opacity: .75,
				modalClose: false,
				modalColor: '#000',
				transition: 'slideDown'
			});
		}
	});

	/* ----- tabs ----- */

	var center;

	(function(s) {
		var n;
		s(".js-tabControls").on("click", ".tabs_city:not(.active)", function() {
			center = $(this).data('coords'); // для ymaps
			n = s(this).parents(".js-tabBox");
			s(this).dmtabs(n);
			setCenter(center);
		});

		s.fn.dmtabs = function(n) {
			s(this).addClass("active").siblings().removeClass("active");
			n.find(".js-tabContent").eq(s(this).index())
					.show(1, function() {
						s(this).addClass("openTabContent")
					})
					.siblings(".js-tabContent").hide(1, function() {
				s(this).removeClass("openTabContent")
			})
		}
	})(jQuery);

// -------------------------------------------------------------------------------------
});

/* ----- yandex map ----- */

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
	// Создание экземпляра карты и его привязка к контейнеру с
	// заданным id ("map").
	myMap = new ymaps.Map('map', {
		// При инициализации карты обязательно нужно указать
		// её центр и коэффициент масштабирования.
		center:[53.20853762235738,44.96182099999998], // Пенза
		zoom:12
	});

	// Создаем метки с помощью вспомогательного класса.
	var myPlacemark1 = new ymaps.Placemark([53.20853762235738,44.96182099999998], {
		// Свойства.
		// Содержимое иконки, балуна и хинта.
		hintContent: 'г.Пенза, ул. Красноармейская,д.1а'
	}, {
		// Опции.
		// Стандартная фиолетовая иконка.
		preset: 'twirl#redDotIcon'
	});

	// Создаем метку с помощью вспомогательного класса.
	var myPlacemark2 = new ymaps.Placemark([54.32224257028735,48.40162250000001], {
		// Свойства.
		// Содержимое иконки, балуна и хинта.
		hintContent: 'г.Ульяновск, ул. Красноармейская,д.1а'
	}, {
		// Опции.
		// Стандартная фиолетовая иконка.
		preset: 'twirl#redDotIcon'
	});

	// Создаем метку с помощью вспомогательного класса.
	var myPlacemark3 = new ymaps.Placemark([54.17818007041486,45.18199799999995], {
		// Свойства.
		// Содержимое иконки, балуна и хинта.
		hintContent: 'г.Саранск, ул. Красноармейская,д.1а'
	}, {
		// Опции.
		// Стандартная фиолетовая иконка.
		preset: 'twirl#redDotIcon'
	});

	// Добавляем все метки на карту.
	myMap.geoObjects
			.add(myPlacemark1)
			.add(myPlacemark2)
			.add(myPlacemark3);

	// Добавляем zoom.
	myMap.controls.add('smallZoomControl', { left: 5, top: 100 });
}

// Устанавливаем центр
function setCenter (coords) {
	myMap.setCenter(coords);
}

