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
    
/* ===== CUSTOM CODE: ===== */
  
    /* ----- toElement ----- */

    $('.menu, .slicknav_menu').on('click', 'a[href^="#"], a[href^="."]', function(e) {
        e.PreventDefault;
        var scroll_el = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top + 1}, 500);
    });

// -------------------------------------------------------------------------------------
});