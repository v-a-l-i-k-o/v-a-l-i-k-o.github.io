function lang(elem){
	var lang = $(elem);

	lang.on('click', '.selected', function(){
		$(this)
			.toggleClass('current')
			.next()
			.fadeToggle(100);
	});

	lang.on('click', '.list>li', function(event){
		event.preventDefault();
		var selected = $(this).children('a').text();
		$(this)
			.closest('.header-lang')
			.find('.selected')
			.removeClass('current')
			.text(selected);
		lang
			.find('.list')
			.fadeOut(100);
	});

	$(document).click(function(event) {
		if ($(event.target).closest(".header-lang").length) return;
		lang
			.find('.selected')
			.removeClass('current')
			.parent()
			.find('.list')
			.fadeOut(100);
		event.stopPropagation();
	});
};






function firstFullScreen(elem){
	function firstResize(){
		$(elem).css({
			'height' : $(window).height() - 60
		});
		if($(window).width() < 1300 || $(window).height() < 570){
			$(elem).removeAttr('style');
		}
	};
	firstResize();
	

	$(window).resize(function(){
		firstResize();
	});
};





function firstSlider(elem){
	$(elem).owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
		autoplay: false,
		autoplaySpeed: 2400,
		mouseDrag: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
	});

	var i = 0;
	var titles = ['Авиация', 'Электроника', 'Вооружение', 'Авто', 'Машиностроение'];
	
	var status = false;

	$(elem).find('.owl-dot').each(function(){
		$(this).find('span').text(titles[i++]);
	});

	var video = $('.videos-slider');

	$('.first-nav').on('click', '.prev', function(){
		$(elem).trigger('prev.owl.carousel');
		video.trigger('prev.owl.carousel');
		status = true;
	});

	$('.first-nav').on('click', '.next', function(){
		$(elem).trigger('next.owl.carousel');
		video.trigger('next.owl.carousel');
		status = true;
	});

	$(elem).on('click', '.owl-dot', function(){
		var toIndex = $(this).index();
		video.trigger('to.owl.carousel', [toIndex, 200, true]);
		status = true;
	});

	$(elem).on('translate.owl.carousel', function(event) {
		if(status){return false;}
		video.trigger('next.owl.carousel');				
	});
	
	$(elem).on('translated.owl.carousel', function(event) {
		status = false;			
	});
};






function videoSlider(elem){
	$(elem).owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		//video:true,
		loop: true,		
		autoplay: false,
		mouseDrag: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
	});
	
	var firstslide = $('.first-slider'),
	    body = $('body');
	
	$(elem).on('translate.owl.carousel', function(event) {	
		var ind = event.item.index;
		var next = $(elem)
			.find('.owl-item')
			.eq(ind)
			.find('video');	
			
		//console.log(next.get(0).duration);
		if(body.width() > 430){
			if(next.get(0).duration){					
				next.get(0).play();
			}else{
				next.bind("loadeddata", function(e){
					//console.log("Loaded the video's data!",e);
					next.get(0).play();
				});

				next.get(0).load();
			}
			
			next.on( "ended", function(){
				firstslide.trigger('next.owl.carousel');
			});
		}else{
			setTimeout(function(){firstslide.trigger('next.owl.carousel')},3000);
		}
			
	});
	
	var startv = $(elem)
			.find('.owl-item')
			.eq(2)
			.find('video');
			
		if(body.width() > 430 && startv && startv.get(0)){ 		
			if(startv.get(0).duration){					
				startv.get(0).play();
			}else{			
				startv.get(0).load();
				
				startv.bind("loadeddata", function(e){
					//console.log("Loaded the video's data!",e);
					startv.get(0).play();
				});
			}
			
			startv.on("ended", function(){
				firstslide.trigger('next.owl.carousel');
			});
		}else{
			setTimeout(function(){firstslide.trigger('next.owl.carousel')},3000);
		}
			
		
};


function historySlider(elem){
	$(elem).owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: true,
		autoplay: true,
		autoplaySpeed: 2400,
		mouseDrag: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
	});
};




function sliderCategory(elem){
	$(elem).owlCarousel({
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 1,
				nav: false,
				dots: true,
				loop: false,
				smartSpeed: 600,
				mouseDrag: true,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 480 up
			480 : {
				items: 2,
				nav: false,
				dots: true,
				loop: false,
				smartSpeed: 600,
				mouseDrag: true,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 768 up
			768 : {
				items: 2,
				nav: false,
				dots: true,
				loop: false,
				smartSpeed: 600,
				mouseDrag: true,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 992 up
			992 : {
				items: 3,
				nav: false,
				loop: false,
				smartSpeed: 600,
				mouseDrag: true,
				dots: false,
				margin: 20,
				autoHeight: true,
			}
		}
	});
};


function smiCategory(elem){
	$(elem).owlCarousel({
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 1,
				nav: false,
				dots: true,
				loop: false,
				smartSpeed: 600,
				mouseDrag: true,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 480 up
			480 : {
				items: 2,
				nav: false,
				dots: true,
				loop: false,
				smartSpeed: 600,
				mouseDrag: true,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 768 up
			768 : {
				items: 2,
				nav: false,
				dots: true,
				loop: false,
				smartSpeed: 600,
				mouseDrag: true,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 992 up
			992 : {
				items: 3,
				nav: false,
				loop: false,
				smartSpeed: 600,
				mouseDrag: true,
				dots: false,
				margin: 20,
				autoHeight: true,
			}
		}
	});
};


function docCategory(elem){
	$(elem).owlCarousel({
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 1,
				nav: false,
				dots: false,
				loop: false,
				smartSpeed: 600,
				mouseDrag: false,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 480 up
			480 : {
				items: 2,
				nav: false,
				dots: false,
				loop: false,
				smartSpeed: 600,
				mouseDrag: false,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 768 up
			768 : {
				items: 2,
				nav: false,
				dots: false,
				loop: false,
				smartSpeed: 600,
				mouseDrag: false,
				margin: 20,
				autoHeight: true,
			},
			// breakpoint from 992 up
			992 : {
				items: 3,
				nav: false,
				loop: false,
				smartSpeed: 600,
				mouseDrag: false,
				dots: false,
				margin: 20,
				autoHeight: true,
			}
		}
	});
};




function chiefSlider(elem){
	$(elem).owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		loop: true,
		mouseDrag: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
	});
	$(elem).on('translated.owl.carousel', function(event) {
		setTimeout(function(){
			$(this).find('.active h4').addClass('animated');
		}, 500);
	});
};






function scrollTop(elem){
	$(elem).on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
};






function tabs(elem){
	$(elem).on('click', '.btns li', function(){
		$(this)
			.addClass('current')
			.siblings()
			.removeClass('current')
			.closest('.news-tabs')
			.find('.tab')
			.eq($(this).index())
			.addClass('current')
			.siblings()
			.removeClass('current')
	});
};










// Меню
function menuClose(elem){
	var toggle = $(elem);

	toggle
		.removeClass('current')
		.closest('body')
		.removeClass('opened')
		.find('.mmenu')
		.fadeOut(150);
};

function menuOpen(elem){
	var toggle = $(elem);

	toggle
		.addClass('current')
		.closest('body')
		.addClass('opened')
		.find('.mmenu')
		.fadeIn(150);

	newsClose('.news');
	galleryClose();
};

function menu(elem){
	var toggle = $(elem);

	toggle.on('click', function(){
		if(toggle.hasClass('current')){
			menuClose('.header-menu');
		}
		else{
			menuOpen('.header-menu');
		}
	});
};










// Панель новостей
function newsOpen(elem){
	var toggle = $(elem).find('.news-btn');

	toggle
		.addClass('active')
		.parent()
		.addClass('opened');

	setTimeout(function(){
		$('body').addClass('opened');
	}, 500);

	$('.header-buttons').addClass('opened');

	$('.overlay').fadeIn(500);

	menuClose('.header-menu');
};

function newsClose(elem){
	var toggle = $(elem).find('.news-btn');

	toggle
		.removeClass('active')
		.parent()
		.removeClass('opened');

	setTimeout(function(){
		$('body').removeClass('opened');
	}, 500);

	$('.header-buttons').removeClass('opened');

	$('.overlay').fadeOut(500);
};

function news(elem){

	var toggle = $(elem).find('.news-btn');

	toggle.on('click', function(){

		if(toggle.hasClass('active')){
			newsClose('.news');
		}
		else{
			newsOpen('.news');
		}
		
	});

	$('.overlay').on('click', function(){
		if($('.news-gallery, .news-vgallery').is(':visible')){
			$('.arthidden').children().remove();
			$('.photos > ul').children().remove();
			$('.news-gallery, .news-vgallery, .artgallery, .overlay2').fadeOut(250);
		} 
		else{
			$(this).fadeOut(600);
			$('.news-btn').removeClass('active');
			$('.header-buttons, .news').removeClass('opened');
			$('body').removeClass('opened');
		}

		if($('.news-article').is(':visible')){
			newsArticleClose();
		}
	});


	$('.news-more').on('click', function(){
		newsOpen('.news');
	});
	
	$('.news').on('click', function(){
		if($(this).hasClass('opened') || $('body').hasClass('opened')) return true;
		newsOpen('.news');
	});

};


function newsArticle(elem){
	$(elem).on('click', '.news-item', function(event){
		event.preventDefault();

		if($(this).hasClass('news-galery')){
			return false
		} else if($(this).hasClass('news-vgallery')){
			return false
		}
		else{
			newsArticleOpen();
		}
	});

	$('.news-close').on('click', function(){
		newsArticleClose();
	});
};

function newsArticleOpen(){
	$('.news-article, .overlay2').fadeIn(100);
};

function newsArticleClose(){
	$('.news-article, .overlay2').fadeOut(100);
}








// Фильтр
function filter(elem, close){
	$(elem).on('click', function(){
		$(close)
			.slideToggle(250);
	});

	$(close).on('click', '.close', function(){
		$(this)
			.parent()
			.slideUp(200);
	});
};










// Галерея
function galleryOpen(){
	$('.news-gallery').fadeIn(250);
	$('.overlay2').fadeIn(250);
};

function galleryClose(){
	$('.arthidden').children().remove();
	$('.photos > ul').children().remove();
	$('.news-gallery, .artgallery, .overlay2').fadeOut(250);
};

function gallery(elem){
	$(elem).on('click', function(event){
		event.preventDefault();

		galleryOpen();

		$('.news-scrollbar').mCustomScrollbar("scrollTo", 0);

		$(this).find('.igallery').children().each(function(){
			$('.photos')
				.find('ul')
				.append('<li class="col"><a href="#"><img src="'+ $(this).attr('src') +'"></a></li>');
			$('.arthidden')
				.append('<img src="'+ $(this).attr('src') +'">');
		});


		setTimeout(function(){
			$('.photos li').each(function(){

				var elem    = $(this),
					imgSrc  = elem.find('img').attr('src');

				elem.find('a').css({
					'background'      : 'url('+ imgSrc +') center top no-repeat',
					'background-size' : 'cover'
				});

			});
		}, 200);

	});

	$('.overlay2, .js-closegal').on('click', function(){
		galleryClose();
		newsArticleClose();
	});
};

function vgalleryOpen(){
	$('.news-video').fadeIn(250);
	$('.overlay2').fadeIn(250);
};

function vgalleryClose(){
	$('.news-video .video').children().remove();
	$('.news-video, .overlay2').fadeOut(250);
};

function vgallery(elem){
    $(elem).on('click', function(event){
		event.preventDefault();

		vgalleryOpen();

		$('.news-scrollbar').mCustomScrollbar("scrollTo", 0);

		$(this).find('.vgallery').children().each(function(){
			$('.news-video .video')				
				.append('<iframe width=640 height=480 src="'+ $(this).attr('src') +'"  frameborder="0" allowfullscreen />');			
		});
		
		

	});

	$('.overlay2, .js-closegal').on('click', function(){
		vgalleryClose();
		newsArticleClose();
	});
};









function viewPhoto(elem){
	$(elem).on('click', 'li', function(event){
		event.preventDefault();

		$('.artgallery').fadeIn(250);

		var elem = $(this),
			i    = elem.index();

		$('.arthidden').find('img').eq(i).addClass('current');

		adaptiveImage();

	});


	function adaptiveImage(){
		setTimeout(function(){
			var h = $('.arthidden').find('img.current').height();
			$('.arthidden').height(h);
		},100);
	};


	var i = 1;
	$(document).on('click', '.next', function(){
		
		$('.arthidden')
			.find('.current')
			.next()
			.addClass('current')
			.siblings()
			.removeClass('current');

		adaptiveImage()

		
	});

	$(document).on('click', '.prev', function(){

		$('.arthidden')
			.find('.current')
			.prev()
			.addClass('current')
			.siblings()
			.removeClass('current');

		adaptiveImage()

	});



	$(document).on('mousemove', '.photos a', function(){
		$(this).removeClass('other').parent().siblings().find('a').addClass('other');
	});


};







// Лого в шапке
function showLogo(elem, logo){
	if($(logo).length){
		var height = $(logo).offset().top + $(logo).height() - 30;

		$(window).scroll(function(){
			if($(this).scrollTop() > height){
				$(elem).addClass('show');
			}
			else{
				$(elem).removeClass('show');
			}
		});
	}
	
}



// new function 6/09


function fixedNav(elem){
	if($(elem).length){
		var top = $(elem).offset().top;
	
		$(window).scroll(function(){
			if($(window).scrollTop() + 60 > top){
				$('body').addClass('fixed');
			}
			else{
				$('body').removeClass('fixed');
			}
		});

		$(elem).on('click', 'a', function(event){
			event.preventDefault();

			$(this).parent().addClass('current').siblings().removeClass('current');

			var scroll_el = $(this).attr('href');
			if ($(scroll_el).length != 0) {
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 120 }, 800);
			}
		});
	}
}



$(document).ready(function(){  

	$('.mmenu, .news-artscroll, .events-news, .vert-scroll').mCustomScrollbar({
		axis                : 'y',
		scrollInertia       : 600,
		mouseWheelPixels    : 160,
		autoHideScrollbar   : false,
		autoDraggerLength   : true,
		autoExpandScrollbar : false,
		alwaysShowScrollbar : 0
	});

	$('.news-scrollbar').mCustomScrollbar({
		axis                : 'y',
		scrollInertia       : 600,
		mouseWheelPixels    : 160,
		autoHideScrollbar   : false,
		autoDraggerLength   : true,
		autoExpandScrollbar : false,
		alwaysShowScrollbar : 0,
		callbacks:{
	        onScroll:function(){
	        	if((this.mcs.top * -1) >= 60){
	        		$('.gheader').addClass('fixed');
	        	}
	        	else{
	        		$('.gheader').removeClass('fixed');
	        	}
	        }
	    }
	});

	
	$('.events-slider').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		loop: true,
		autoplay: false,
		mouseDrag: false,
	});

	$('.events-slider').on('translate.owl.carousel', function(event) {
		var ind = $(this).find('.owl-dot.active').index();

		$('.events-months li').eq(ind).addClass('current').siblings().removeClass('current');
	});

	// $(elem).on('click', '.owl-dot', function(){
	// 	var toIndex = $(this).index();
	// 	video.trigger('to.owl.carousel', [toIndex, 200, true]);
	// });

	$('.events-months').on('click', 'li', function(event){
		event.preventDefault();

		$('.events-slider').find('.owl-dot').eq($(this).index()).trigger('click');
		$(this).addClass('current').siblings().removeClass('current');
	});


	$('.calendar').on('click', 'td:not(.other-month)', function(event){
		event.preventDefault();
		//var edots = $(this).find('ul').is('.events-dots');
		if(!$(this).hasClass('has-events')){return false;}
		$(this).closest('.calendar').find('td').removeClass('current');
		$(this).addClass('current');
	});

	$('.events-dots').closest('td').on('click', function(){
		$('.events-news').eq($(this).index()).siblings().hide();
		$('.events-news').eq($(this).index()).fadeIn(250);
	});
	
	$('.events-slider .calendar td.current').trigger('click');



	showLogo('.header-logo-sm', '.first-logo');

	lang('.header-lang');

	firstSlider('.first-slider');

	firstFullScreen('.b-first, .videos');

	videoSlider('.videos-slider');

	sliderCategory('.categ-slider, .news-slider');
	
	smiCategory('.smi-list');
	
	docCategory('.doc-list');

	menu('.header-menu');

	chiefSlider('.chief-slider');

	filter('.js-catselect', '.js-catdropdown');

	tabs('.news-tabs');

	scrollTop('.footer-scrolltop');

	news('.news');

	newsArticle('.news')

	gallery('.news-galery');
	
	vgallery('.news-vgallery');

	viewPhoto('.photos');
	
	fixedNav('.nav-categ');

	var nav = $('.nav-categ a'),
		darrow = $('.darrow'),
		navli = $('.nav-categ li'),
		$ptitle = $(".page-title"),
		$menu = $(".nav-categ"),
		windowHeight = $(".b-header").height(),
		titleHeight = $ptitle.height(),
		naviHeight = $menu.height(),		
		k = true,
		hash;

	nav.click(function () {
		if ($('html, body').is(':animated')) return false;

		hash = $(this).attr('href');

		if ($(hash).length) {
			k = false;

			navli.removeClass('current');
			$(this).parent('li').addClass('current');

			$('html, body').animate({
				scrollTop: $(hash).offset().top - windowHeight - naviHeight
			}, 600, function () {
				setTimeout(function () {
					k = true
				}, 100);				
			});
		}
		return false;
	});
	
	darrow.click(function () {
		if ($('html, body').is(':animated')) return false;

		hash = $(this).attr('href');

		if ($(hash).length) {
			k = false;

			$('html, body').animate({
				scrollTop: $(hash).offset().top - windowHeight
			}, 600, function () {
				setTimeout(function () {
					k = true
				}, 100);				
			});
		}
		return true;
	});

	$(window).scroll(function () {
		/*if ( $(this).scrollTop()  > windowHeight + titleHeight ){
			$menu.addClass("fixed");
		} else if($(this).scrollTop() <= windowHeight + titleHeight && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed");
		}*/
		
		if (k) {
			for (var i = 0; i < nav.length; i++) {
				hash = nav.eq(i).attr('href');
				if (hash.split('#').length > 1) {
					if ($(this).scrollTop() >= $(hash).offset().top - windowHeight - naviHeight) {
						navli.removeClass('current');
						nav.eq(i).parent('li').addClass('current');
					};
				};
			};
		}
		
		var $clusterl = $(".clusters-left"),
			$clusterr = $(".clusters-right"),
			clusterHeight;
		
		if($clusterl && $clusterr){			
			if($(this).scrollTop() > 0){
				clusterHeight = $(this).scrollTop();
				if(clusterHeight < $clusterr.height()-$clusterl.height()-windowHeight){
					//$clusterl.css({'top':clusterHeight+'px'});
					$clusterl.removeClass('fixedb');
				}else{
					$clusterl.addClass('fixedb');
				}
			}else{
				//$clusterl.css({'top':'0px'});
			}
		}
		
		/*if ( $(this).scrollTop()  > windowHeight + titleHeight ){
			$menu.addClass("fixed");
		} else if($(this).scrollTop() <= windowHeight + titleHeight && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed");
		}*/
		
	});
	
	if ( $("body").scrollTop()  > windowHeight + titleHeight ){
		$menu.addClass("fixed");
	}



	$(document).on('click', '.arthidden img.current', function(){

		$('.artgallery').fadeOut(250);
		$('.artgallery').find('img').removeClass('current');

	});



	setTimeout(function(){
		//$('.events-year').styler();
	});



	$(window).scroll(function(){
		var bg  = $('.page-title.paralax'),
			scr = ($(this).scrollTop() * 0.5);

		// console.log(scr);
		if(bg.length){
			bg.css({
				'background-position' : 'center -'+scr+'px'
			})
		}		
		
	});
	
	var histyears = $('.history .history-years li'),
		histbyears = $('.history .history-years li.border'),
	    histitems = $('.history .history-item'),
		histslide = $('.history .history-slide'),
	    histphoto = $('.history .history-photo'),
		animNow = false;
	
	histyears.click(function () {
		if($(window).scrollTop() < $("#block1").offset().top){darrow.trigger('click');}
		
		var hind = parseInt($(this).attr('target'));
		var hcur = parseInt($('.history .history-years li.current').attr('target'));
		
		if(animNow || hind == hcur) return false;
		
		animNow = true;
		
		histyears.removeClass('current');
		
		var hoffset = parseInt(histyears.eq(hind).position().top);
				
		histbyears.animate({top: hoffset+"px"},1000,function() {
			histyears.eq(hind).addClass('current');
		});		
		
		histslide.removeClass('current');
		histslide.eq(hind).addClass('current');
		setTimeout(function(){histslide.eq(hind).addClass('animation');},100);
		setTimeout(function(){histslide.eq(hcur).removeClass('current animation');},500);
		
		histitems.removeClass('current');
		
		var hoffset = parseInt(histyears.parent().position().top 
		+ histyears.eq(1).position().top
		+ histyears.eq(1).outerHeight()
		);

		for(var i=0;i<hind;i++){
			hoffset -= parseInt(histitems.eq(i).height());
		}
		
		histphoto.animate({marginTop: hoffset+"px"},1000,function() {
			histitems.eq(hind).addClass('current');
			animNow = false;
		});
		
	});
	
	$('.search-wrap .header-search').click(function () {
		$('.search-wrap .search-box').fadeIn(500);		
	});
	
	$('.search-wrap .header-close').click(function () {
		$('.search-wrap .search-box').fadeOut(500);		
	});
	
	$('.search-wrap input[name="search"]').on('focus',function () {
		if($(this).attr('value') == $(this).attr('placeholder'))$(this).val('');		
	});
	
	$('.search-wrap input[name="search"]').on('focusout',function () {
		if($(this).attr('value') == '')$(this).val($(this).attr('placeholder'));		
	});
	
	
	$(window).scroll();

});
