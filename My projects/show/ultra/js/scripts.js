$(document).ready(function() {
// ------------------------------------------------------------------------------------
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- sticky ----- */

var nav = $("#nav");

$(window).scroll(function () {
  if ($(this).scrollTop() >= 895 && !$("div").is(".fixed-nav")) {
    nav.sticky({
    	topSpacing: 0,
    	className: "fixed-nav",
    	widthFromWrapper: true,
    	responsiveWidth: true
    });
  } else if ($(this).scrollTop() < 895) {
    nav.unstick();
    $("#menu li").each(function(index, el) {
		$(this).removeClass('current');
		});
  } else { 
  	return; 
  }
});

/* ----- waypoint scroll ----- */

var waypoints = $("section").waypoint(function (direction) {
	var id = "#"+ this.element.id;
	$("#menu li").each(function(index, el) {
		$(this).removeClass('current');
	});
	$('a[href="'+ id +'"]').closest("li").addClass('current');
}, {
  offset: 42
});

/* ----- slick-slider ----- */

$('.slider__projects').slick({
	dots: true,
	mobileFirst: true,
	adaptiveHeight: true
});

$('.slider__prices').slick({
	dots: true,
	mobileFirst: true,
	adaptiveHeight: true
});

/* ----- counter ----- */

var counter = $("#feedback").waypoint(function (direction) {
	if ($(this).data("complete") == undefined) {
		$(".counter-digit").countTo();
		$(this).data("complete", "done");
	} else {
		return;
	}
}, {
  offset: 42
});

/* ===== CUSTOM CODE: ===== */
  
/* ----- scrolltop() ----- */

$("#nav").on("click","a", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		  top = $(id).offset().top;
	$("body, html").animate({scrollTop: top - 41}, 1000);
});

$(".scroll-down").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		  top = $(id).offset().top;
	$("body, html").animate({scrollTop: top - 41}, 500);
});

// -------------------------------------------------------------------------------------
});