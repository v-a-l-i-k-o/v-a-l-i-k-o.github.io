$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

    /* ----- slick-slider ----- */

    $('.rent-slider').slick({
        pauseOnHover: false,
        autoplaySpeed: 3500,
        autoplay: true,
        arrows: false,
        speed: 1200
    });

    $('.store-slider').slick({
        arrows: false,
        dots: true
    });

    $('.partners-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 411,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    /* ----- toTop ----- */

    $("#toTop").toTop({
        autohide: true,
        position: true,
        offset: 700,
        speed: 300,
        right: 50,
        bottom: 30
    });

    /* ----- slicknav ----- */

    $('#menu').slicknav({
        label: '',
        prependTo: 'header',
        closeOnClick: true
    });

    $('.has-submenu').on('click', '.slicknav_row a', function () {
        $('#menu').slicknav('toggle');
    } );

    /* ===== CUSTOM CODE: ===== */
  
    /* ----- toElement ----- */

    $('.menu, .slicknav_menu').on('click', 'a[href^="#"], a[href^="."]', function(e) {
        e.PreventDefault;
        var scroll_el = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top + 1}, 500);
    });

// -------------------------------------------------------------------------------------
});

/* ----- yandex map ----- */

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
        center: [48.52405907387438,44.61516099999992],
        zoom: 17
    });
    // Создаем метку с помощью вспомогательного класса.
    var myPlacemark = new ymaps.Placemark([48.523809636178584,44.61481767724603], {
        // Свойства.
        // Содержимое иконки, балуна и хинта.
        balloonContent: '',
        hintContent: 'Москва, 2-й Котляковский пер. д.1'
    },{
        // Стандартная иконка.
        preset: 'twirl#blueDotIcon',
        balloonOffset: [0, 0]
    });
    // иконка
    myMap.controls.add('smallZoomControl');
    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark);

    var geometry = [[48.52452231203106,44.61634117196647],[48.5233036301998,44.614506541000296],[48.523745494857074,44.61388426850885],[48.52291165024213,44.61257535050957],[48.52338202582517,44.61197453569023],[48.52535612997318,44.61509662698358],[48.524536279800266,44.61632378880905]],

        properties = {
            hintContent: "Территория"
        },
        options = {
            draggable: true,
            strokeColor: '#00a3db',
            strokeWidth: 5

        },
        polyline = new ymaps.Polyline(geometry, properties, options);

    myMap.geoObjects.add(polyline);
};