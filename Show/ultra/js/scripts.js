$(document).ready(function() {
// ------------------------------------------------------------------------------------

/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- waypoint scroll ----- */

$("section").waypoint(waypoint_callback, {offset: 39 }); //down
$("section").waypoint(waypoint_callback, {offset: 41 }); // up

function waypoint_callback(direction) {
	if (direction == 'up' && this.options.offset < 40 || direction == 'down' && this.options.offset > 40){
		var id = "#"+ this.element.id;
		$("#menu li").each(function(index, el) {
			$(this).removeClass('current');
		});
		$('a[href="'+ id +'"]').closest("li").addClass('current');
	}
}

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

$("#feedback").waypoint(feedback_start_callback, {offset: 41});
$("#feedback").waypoint(feedback_start_callback, {offset: 39});
$("#feedback").waypoint(feedback_clear_callback, {offset: $(window).height()});
$("#feedback").waypoint(feedback_clear_callback, {offset: -$(window).height()});

function feedback_clear_callback(direction){
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
}
function feedback_start_callback(direction){
	if (direction == 'up' && this.options.offset < 40 || direction == 'down' && this.options.offset > 40){
		var section = $(this.element);
		if ( section.data("complete") !== "done" ) {
			section.find('[data-from]').each(function(index, el) {
				if ($(el).data("countTo") === undefined) $(el).countTo();
				else $(el).countTo('start');
			});
			section.data("complete", "done");
		}
	}
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
	var	href = $(this).attr("href"),
			top,
			lishki = $(this).closest('ul').find("li:not(:last-child)"),
			ashki = lishki.find("a"),
			currentIndx,
			currentActive;
	ashki.each(function(index, el) {
		if ($(el).attr("href") == href) {
			currentIndx = index;
		}
	});
	lishki.each(function(index, el) {
		if ($(el).hasClass("current")) {
			currentActive = index;
		}
	});
	if ( currentActive === undefined || currentIndx > currentActive) {
		top = $(href).offset().top - 40; //39
	} else if ( currentIndx == 0 ) {
		top = $(href).offset().top - 40; //41
	} else if ( currentIndx < currentActive ) {
		top = $(href).offset().top - 40; //41
	};
	if ( top !== undefined ) $("body, html").animate({scrollTop: top}, 1000);
});

$(".scroll-down").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr("href"),
		  top = $(id).offset().top;
	$("body, html").animate({scrollTop: top - 40}, 500); //39
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
		$("#process").on("mouseenter", "img", function(){
		  $(this).closest(".process-item").find(".pop-up-process").fadeIn(300);
		});

		$("#process").on("mouseleave", ".pop-up-process", function(){
		  $(this).fadeOut(300);
		});

		$("#about-us").on("mouseenter", "img", function(){
		  $(this).closest(".about-us_item").find(".pop-up-about").fadeIn(300);
		});

		$("#about-us").on("mouseleave", ".pop-up-about", function(){
		  $(this).fadeOut(300);
		});

		$("#process").off("click", "img");
		$("#process").off("click", ".pop-up_close");
		$("#about-us").off("click", "img");
		$("#about-us").off("click", ".pop-up-about_close");
	},

	leave: function() {
		var place;
		$("#process").off("mouseenter", "img");
		$("#process").off("mouseleave", ".pop-up-process");
		$("#about-us").off("mouseenter", "img");
		$("#about-us").off("mouseleave", ".pop-up-about");

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

/* ----- yandex map ----- */


$.scrollify({
        section : "[data-section]",
        sectionName : "section",
        easing: "easeOutExpo",
        scrollSpeed: 1000,
        offset : -40,//-41
        scrollbars: true,
        // standardScrollElements: "#contacts",
        // before:function(index,elements) {console.log(index,elements)},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });



}); // -------jQuery.ready()------------------------------------------------------------------------------

/* ----- yandex map ----- */

ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map("map", {
    center: [55.7958,37.8038],
    zoom: 16
  }),

  // Создаем метку с помощью вспомогательного класса.
  myPlacemark = new ymaps.Placemark([55.7958,37.8038], {
    // Свойства.
    // Содержимое иконки, балуна и хинта.
    balloonContent: 'ULTRAMARIN<br/> WEB - СТУДИЯ',
    hintContent: 'ул. Средняя Первомайская, д.3'
  }, {
	  // Опции.
	  // Стандартная иконка.
	  preset: 'twirl#greyDotIcon',
    balloonOffset: [0, 0]
  });
    
  myMap.controls.add('smallZoomControl');
  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark);
};