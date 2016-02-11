$(document).ready(function() {
// ------------------------------------------------------------------------------------

/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- waypoint scroll ----- */

var waypoints = $("section").waypoint(function (direction) {
	var id = "#"+ this.element.id;
	$("#menu li").each(function(index, el) {
		$(this).removeClass('current');
	});
	$('a[href="'+ id +'"]').closest("li").addClass('current');
}, {
  offset: 40
});

/* ----- sticky ----- */

$(window).scroll(function () {
	var nav = $("#nav");
  if ($(this).scrollTop() >= ($("#about-us").offset().top - 40) && !$("div").is(".fixed-nav")) {
    nav.sticky({
    	topSpacing: 0,
    	className: "fixed-nav",
    });
  } else if ($(this).scrollTop() < ($("#about-us").offset().top - 40)) {
    nav.unstick();
    $("#menu li").each(function(index, el) {
		$(this).removeClass('current');
		});
  } else { 
  	return; 
  }
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
		$(".counter-digit1").countTo({ from: 0, to: 172, speed: 2500 });
		$(".counter-digit2").countTo({ from: 0, to: 110, speed: 2500 });
		$(".counter-digit3").countTo({ from: 0, to: 17200, speed: 2500 });
		$(this.element).data("complete", "done");
	} else {
		function func() {
			$(".counter-digit1").countTo({ to: 0, speed: 1 });
			$(".counter-digit2").countTo({ to: 0, speed: 1 });
			$(".counter-digit3").countTo({ to: 0, speed: 1 });
		};
		$(this.element).data("complete", "");
		setTimeout(func, 2000);
	}
}, {
  offset: 40
});

/* ----- slicknav ----- */

$('#menu').slicknav({
	closeOnClick: true,
  label: "Ultramarine",
  prependTo: ".nav"
});

/* ----- scrollify ----- */




/* ===== CUSTOM CODE: ===== */
  
/* ----- scrolltop() ----- */

$("#nav").on("click","a", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		  top = $(id).offset().top;
	$("body, html").animate({scrollTop: top - 38}, 1000);
});

$(".scroll-down").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		  top = $(id).offset().top;
	$("body, html").animate({scrollTop: top - 38}, 500);
});

$("a[href='#ultramarine']").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		  top = $(id).offset().top;
	$("body, html").animate({scrollTop: top}, 500);
});

/* ----- scale ----- */

var scale = $("#process").waypoint(function (direction) {
	if (!$(this.element).hasClass("scale")) {
		$(this.element).addClass("scale");
	} else {
		return;
	}
}, {
  offset: 40
});

/* ----- hover-pop-up ----- */

$.mediaquery("bind", "mq-popUp", "(min-width: 800px)", {
	enter: function() {
		$("#process").on("mouseover", "img", function(){
		  $(this).closest(".process-item").find(".pop-up-process").fadeIn(300);
		});

		$("#process").on("mouseout", ".pop-up-process", function(){
		  $(this).fadeOut(300);
		});

		$("#process").off("click", "img");
		$("#process").off("click", ".pop-up_close");
	},

	leave: function() {
		var place;
		$("#process").off("mouseover", "img");
		$("#process").off("mouseout", ".pop-up-process");

		$("#process").on("click", "img", function(event) {
			event.preventDefault();
			place = $(this).closest(".process-item");
			var popUp = $(this).closest(".process-item").find('.pop-up-process');
			popUp.appendTo($(this).closest('.process'));
			$(".overlay").fadeIn(400);
			popUp.fadeIn(300);
		});

		$("#process").on("click", ".pop-up_close", function(event) {
			event.preventDefault();
			var popUp = $(this).closest(".pop-up-process");
			popUp.fadeOut(300);
			$(".overlay").fadeOut(400);
			function func() {
				popUp.appendTo(place);
			};
			setTimeout(func, 500);
		});
	}
});

// -------------------------------------------------------------------------------------
});