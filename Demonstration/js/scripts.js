$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- flexSlider ----- */

var $window = $(window);

$window.resize(function(event) {

  $('.flexslider-1').removeData("flexslider");
  $('.flexslider-2').removeData("flexslider");

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
});
 
  // tiny helper function to add breakpoints
function getGridSize() {
  return (window.innerWidth < 480) ? 1 :
  			 (window.innerWidth < 768) ? 2 : 4;
}
 
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
  $('.hack').toggleClass('is-visible');
});

// -------------------------------------------------------------------------------------
});