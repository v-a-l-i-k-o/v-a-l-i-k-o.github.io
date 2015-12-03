$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- toTop ----- */

$("#toTop").toTop({
    autohide: true,
    position: true,
    offset: 700,
    speed: 500,
    bottom: 30,
    right: 30
});

/* ----- magnificPopUp ----- */

$('.info-describe').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  closeBtnInside: false,
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
});

/* ===== CUSTOM CODE: ===== */
  
/* ----- for display info-describe ----- */

$('.about-product').click(function(event) {
	var parent = $(this).closest('.models-info');
	var items = $(this).closest('.info-describe');
	var info = parent.find('.info-detail');
	parent.css('overflow', 'hidden');
	items.css('position', 'absolute').animate({ top: '100%', opacity: 0 }, 300, function() {
		info.toggleClass('hidden').animate({ opacity: 1, top: 0 }, 300);
	});
});

$('.close').click(function(event) {
	var parent = $(this).closest('.models-info');
	var items = parent.find('.info-describe');
	var info = parent.find('.info-detail');
	info.animate({ top: '100%', opacity: 0 }, 300, function() {
		items.animate({ top: 0, opacity: 1 }, 300, function() {
			info.toggleClass('hidden');
			parent.css('overflow', 'visible');
		});
	});
});

/* ----- jquery .scrolltop() ----- */

$(".nav").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr("href"),
		top = $(id).offset().top;
	$("body,html").animate({scrollTop: top}, 1000);
});

// -------------------------------------------------------------------------------------
});