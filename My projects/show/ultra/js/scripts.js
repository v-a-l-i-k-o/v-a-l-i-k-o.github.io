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
	if ($(this.element).data("complete") == "") {
		$(".counter-digit").countTo();
		$(this.element).data("complete", "done");
	} else {
		return;
	}
}, {
  offset: 42
});

/* ----- slicknav ----- */

$('#menu').slicknav({
	closeOnClick: true,
  label: "Ultramarine",
  prependTo: ".nav"
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

/* ----- scale ----- */

var scale = $("#process").waypoint(function (direction) {
	if (!$(this.element).hasClass("scale")) {
		$(this.element).addClass("scale");
	} else {
		return;
	}
}, {
  offset: 46
});

/* ----- hover-pop-up ----- */

$("#process").on("mouseover", "img", function(){
  $(this).closest(".process-item").find(".pop-up-process").fadeIn(300);
});

$("#process").on("mouseout", ".pop-up-process", function(){
  $(this).fadeOut(300);
});

// -------------------------------------------------------------------------------------
});