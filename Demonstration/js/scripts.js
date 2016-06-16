$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- slickSlider ----- */

$('#slider-best').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

$('#slider-new').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

/* ===== CUSTOM CODE: ===== */
  
/* ----- toTop ----- */

$('#toTop').click( function() {
  $('html, body').animate({ scrollTop: 0 }, 700);
	return false;
});

/* ----- side menu ----- */

$('.btn-menu').on('click', function(event) {
  event.preventDefault();
  $('.navbar').toggleClass('is-visible');
  $(this).toggleClass('is-open');
  var height = $(document).height();
  $('.hack').toggleClass('is-visible');
  if ($('.hack').hasClass('is-visible')) {
    $('.hack').css('height', height + 'px');
  } else {
    $('.hack').css('height', 'auto');
  }
});

/* ---------- */

$('.top-pokies-item_discribe').on('click', function(event) {
  event.preventDefault();
  var review = $(this).closest('.top-pokies-item').find('.top-pokies-item_txt');
  var bonus = $(this).closest('.top-pokies-item').find('.top-pokies-item_why-play ul');
  if ($(event.target).hasClass('top-pokies-item_review')) {
    $(review).slideToggle(400);
    $(event.target).toggleClass('show');
  } else {
    $(bonus).slideToggle(400);
  }
});

$(window).resize(function(event) {
  if ($(window).width() > 767) {
    $('.top-pokies-item_txt, .top-pokies-item_why-play ul').show();
  } else {
    $('.top-pokies-item_txt, .top-pokies-item_why-play ul').hide();
  }
});
// -------------------------------------------------------------------------------------
});