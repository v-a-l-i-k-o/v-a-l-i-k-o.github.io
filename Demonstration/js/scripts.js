$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- flexSlider ----- */

initSlider1();
initSlider2();
 
  // tiny helper function to add breakpoints
function getGridSize() {
  return (window.innerWidth < 480) ? 1 :
         (window.innerWidth < 600) ? 2 :
         (window.innerWidth < 768) ? 3 : 4;
}

function destroy1() { 
  $('.flexslider-1').removeData("flexslider");
};

function destroy2() {
  var destroy2 = $('.flexslider-2').removeData("flexslider");
};

function initSlider1() {
  $('.flexslider-1').flexslider({
    animation: "slide",
    itemWidth: 220.5,
    itemMargin: (function() {
      return (window.innerWidth < 1024) ? 20 : 26
    })(),
    controlNav: false,
    slideshow: false,
    prevText: "",
    nextText: "",
    animationLoop: true,
    minItems: getGridSize(), // use function to pull in initial value
    maxItems: getGridSize() // use function to pull in initial value
  });
}

function initSlider2() {
  $('.flexslider-2').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 220.5,
    controlNav: false,
    slideshow: false,
    itemMargin: (function() {
      return (window.innerWidth < 1024) ? 20 : 26
    })(),
    prevText: "",
    nextText: "",
    minItems: getGridSize(), // use function to pull in initial value
    maxItems: getGridSize() // use function to pull in initial value
  });
}

enquire.register("screen and (max-width:479px)", {

  match : function() {
    destroy1();
    destroy2();
    initSlider1();
    initSlider2();
  },

  unmatch : function() {
    destroy1();
    destroy2();
    initSlider1();
    initSlider2();
  }
});

enquire.register("screen and (max-width:599px)", {

  match : function() {
    destroy1();
    destroy2();
    initSlider1();
    initSlider2();
  },

  unmatch : function() {
    destroy1();
    destroy2();
    initSlider1();
    initSlider2();
  }    
});

enquire.register("screen and (max-width:767px)", {

  match : function() {
    destroy1();
    destroy2();
    initSlider1();
    initSlider2();
  },

  unmatch : function() {
    destroy1();
    destroy2();
    initSlider1();
    initSlider2();
  }                                
});

enquire.register("screen and (max-width:1023px)", {

  match : function() {
    destroy1();
    destroy2();
    initSlider1();
    initSlider2();
  },

  unmatch : function() {
    destroy1();
    destroy2();
    initSlider1();
    initSlider2();
  }                                
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