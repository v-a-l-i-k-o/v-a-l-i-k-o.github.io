$(document).ready(function() {
// ------------------------------------------------------------------------------------

/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- waypoint scroll ----- */

var waypoints = $("section").waypoint(function (direction) {
	var id = "#"+ this.element.id;
	console.log(id);
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
  if ($(this).scrollTop() >= ($("#about-us").offset().top - 45) && !$("div").is(".fixed-nav")) {
    nav.sticky({
    	topSpacing: 0,
    	className: "fixed-nav",
    });
  } else if ($(this).scrollTop() < ($("#about-us").offset().top - 45)) {
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

$("#feedback").waypoint(feedback_start_callback, {offset: 40});
$("#feedback").waypoint(feedback_clear_callback, {offset: $(window).height()});
$("#feedback").waypoint(feedback_clear_callback, {offset: -$(window).height()});

function feedback_clear_callback(direction){
	console.log(direction);
	console.log(this.options.offset);
	var section = $(this.element);
	var clear = function(){
		section.data("complete", "");
		section.find('[data-from]').each(function(index, el) {
				$(el).countTo("stop");
				$(el).text('0').data("countTo").init();
		});
	};
	if (section.data("complete") == "done"){
		if (direction == 'down' && this.options.offset < 0) clear();
		if (direction == 'up' && this.options.offset > 0) clear();
	}
	console.log(section.find(".counter-digit1").data('countTo'));
}
function feedback_start_callback(direction){
	var section = $(this.element);
	if ( section.data("complete") !== "done" ) {
			section.find('[data-from]').each(function(index, el) {
				if ($(el).data("countTo") === undefined) $(el).countTo();
				else $(el).countTo('start');
			});
			section.data("complete", "done");
	}
	console.log(section.find(".counter-digit1").data('countTo'));
}

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
	var	id = $(this).attr("href"),
			top,
			ashki = $(this).closest('ul').find("a"),
			lishki = $(this).closest('ul').find("li"),
			currentIndx,
			currentActive;
	ashki.each(function(index, el) {
		if ($(el).attr("href") == id) {
			currentIndx = index;
		}
	});
	lishki.each(function(index, el) {
		if ($(el).hasClass("current")) {
			currentActive = index;
		}
	});
	if ( currentActive === undefined || currentIndx > currentActive) {
		top = $(id).offset().top - 39;
	} else {
		( currentIndx == 0 )? top = $(id).offset().top - 41 : top = $(id).offset().top - 40;
	};
	$("body, html").animate({scrollTop: top}, 1000);
});

$(".scroll-down").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		  top = $(id).offset().top;
	$("body, html").animate({scrollTop: top - 39}, 500);
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
		$("#about-us").off("click", "img");
		$("#process").off("mouseover", "img");
		$("#process").off("mouseout", ".pop-up-process");
		$("#about-us").off("click", ".pop-up-about_close");

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

		$("#about-us").on("click", "img", function(event) {
			event.preventDefault();
			var popUp = $(this).closest(".about-us_item").find('.pop-up-about');
			var popUps = $(this).closest(".about-us_items").find('.pop-up-about');
			popUps.css('display', 'none');
			popUp.fadeIn(300);
		});

		$("#about-us").on("click", ".pop-up-about_close", function(event) {
			event.preventDefault();
			var popUp = $(this).closest(".about-us_item").find('.pop-up-about');
			popUp.fadeOut(300);
		});
	}
});

// -------------------------------------------------------------------------------------
});