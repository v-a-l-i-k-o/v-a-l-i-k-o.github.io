$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- slicknav ----- */

$('.menu').slicknav({
  'label' : '',
  'closeOnClick': true,
  'prependTo': 'header'
});

/* ----- scrollspy ----- */

$('body').scrollspy({
  target: '.navbar-nav',
  offset: (function () {
    var h = $('header').outerHeight();
    return h;
  })()
});

/* ----- bpopup ----- */

$('body').on('click', '.btn__callback, .btn__get', function(event) {
  event.preventDefault();
  var popupGetOffer = bPopup = $('.modal__get-offer').bPopup({
    speed: 450,
    opacity: .65,
    modalClose: false,
    modalColor: '#000',
    transition: 'slideDown'
  });
});

$('body').on('click', '.btn__order, .btn__submit', function(event) {
  event.preventDefault();
  var popupThanks = bPopup = $('.modal__thanks').bPopup({
    speed: 450,
    opacity: .65,
    modalClose: false,
    modalColor: '#000',
    transition: 'slideDown'
  });
});

/* ===== CUSTOM CODE: ===== */
  
/* ----- scrollTo ----- */

  $('.menu, .slicknav_menu').on('click', 'a[href^="#"]', function(e) {
    e.PreventDefault;
    var scroll_el = $(this).attr('href');
    var h = ($('header').outerHeight()) - 1;
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - h}, 500);
  });

// -------------------------------------------------------------------------------------
});

/* ----- yandex map ----- */

ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map("map", {
      center: [53.6321, 55.9018],
      zoom: 16
    }),

  // Создаем метку с помощью вспомогательного класса.
    myPlacemark = new ymaps.Placemark([53.6321, 55.9018], {
      // Свойства.
      // Содержимое иконки, хинта.
      hintContent: 'ул. Лазурная, дом 19, помещение III'
    }, {
      // Опции.
      // Стандартная иконка.
      preset: 'twirl#blueDotIcon',
      balloonOffset: [0, 0]
    });

  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark);
};