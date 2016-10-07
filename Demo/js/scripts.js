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
        center: [55.649065106787525,37.631151992065334],
        zoom: 15
    });
    // Создаем метку с помощью вспомогательного класса.
    var myPlacemark = new ymaps.Placemark([55.64891950222155,37.632396537048244], {
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

    var geometry = [[55.64891950222155,37.632396537048244]],

        properties = {
            hintContent: "Территория"
        },
        options = {
            draggable: true,
            strokeColor: '#78в5а7',
            strokeWidth: 8

        },
        polyline = new ymaps.Polyline(geometry, properties, options);

    myMap.geoObjects.add(polyline);
};