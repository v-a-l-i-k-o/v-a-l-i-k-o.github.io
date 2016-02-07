jQuery(document).ready(function($) {

	xopcResize();
	$(window).on('resize', xopcResize );
	function xopcResize() {
		if ($('body').hasClass('forum')){
			$('.q-text_head .cell1 h3').innerWidth(function (index, value) {
				var cell = $(this).closest('.cell1');
				var apanel = cell.find('.admin-cell');
				if (apanel.css('display') !== 'none' )
					return cell.innerWidth() - apanel.innerWidth()-13;
				else return 'auto';
			});
		}
	}

	function calc(items) {
		var heights = items.map(function(indx, elem){
		  return $(elem).outerHeight();
		});
		heights = heights.get();
		for (var i = heights.length - 1, s = 0; i >= 0; i--) s += heights[i];
		return s;
	}

	$('.question-answer').on('click', '.q-replies', function() {

		var q = $(this).closest('.question-answer');
		var items = q.find('.respondent');

		var type = q.data('state');
		var s = q.find('.answer').outerHeight();

		if ( (type == 'expanded') || (type == 'full_expanded') ) {
			q.find('.all-answers, .pagination').addClass('hidden');
			q.find('.answer').transition({ "margin-top": -s }, 0, 'ease', function() {
				// console.log(this, s);
				var q = $(this).closest('.question-answer');
				q.data('state', 'collapsed').attr('data-state', 'collapsed').find('.answer, .respondent').addClass('hidden');
				q.find('.answer').css({"margin-top": 0});
			});
		} else {
			q.data('state', 'expanded').attr('data-state', 'expanded').find('.answer').css({"margin-top": -s});
			q.find('.answer').removeClass('hidden');
			if (items.length>2) q.find('.all-answers').removeClass('hidden');
			items.slice(0, 2).removeClass('hidden');
			q.find('.answer').transition({ "margin-top": 0 }, 500, 'easeOutBack');
		}

	});

	$('.question-answer').on('click', '.all-answers', function() {

		var q = $(this).closest('.question-answer');

		var type = q.data('state');
		var items = q.find('.respondent').slice(2);
		var container = q.find('.answer');
		var s = calc(items);

		if ( (type == 'expanded') ) {
			q.find('.all-answers').addClass('hidden');
			q.find('.pagination').removeClass('hidden');
			q.data('state', 'full_expanded').attr('data-state', 'full_expanded');
			container.css({"margin-bottom": -s, "height": container.height()+s});
			items.removeClass('hidden');
			container.css({"height": "auto"});
			container.transition({ "margin-bottom": 0 }, 500, 'easeOutBack');
		}

	});

	// SHOW/HIDE MAIN SIDEBAR WITH FILTER
	$('.sidebar').on('click', '.sidebar__mobile', function(event) {
		event.preventDefault();
		var sidebar = $(this).closest('.sidebar');
		var form = sidebar.find('form');
		var w = sidebar.data('tablet-w');
		if ( form.css('display') == 'none' ){
			sidebar.css({ marginLeft: -w, width: w });
			form.css({ display: 'block' });
			$(this).css({ display: 'none' });
			$('body').addClass('tablet_menu--open');
			sidebar.transition({ marginLeft: 0 }, 500, 'easeOutQuint');
			$('main').transition({ marginLeft: w }, 500, 'easeOutQuint');
		}
	});
	$('.sidebar').on('click', '.sidebar_mobile__btn_close', function(event) {
		event.preventDefault();
		var sidebar = $(this).closest('.sidebar');
		var form = sidebar.find('form');
		var w = sidebar.data('tablet-w');
		if ( form.css('display') == 'block' ){
			$('body').removeClass('tablet_menu--open');
			sidebar.transition({ marginLeft: -w }, 400, 'easeOutQuint', function() {
				sidebar.attr('style', ''); form.attr('style', ''); $('.sidebar__mobile').attr('style', '');
			});
			$('main').transition({ marginLeft: $('.sidebar__mobile').width() }, 600, 'easeOutQuint', function(){$(this).css({marginLeft:''})});
		}
	});
	$('body').on('click', '.filter__mobile ', function(event) {
		event.preventDefault();	var body = $('body');
		if ( body.hasClass('mobile_menu--open') ) body.removeClass('mobile_menu--open');
		else body.addClass('mobile_menu--open');
	});
	$.mediaquery("bind", "mq-mainsidebar", "(max-width: 599px)", {
	    enter: function() {
	    	if ( $('body').hasClass('tablet_menu--open') ){
		       $('.sidebar .sidebar_mobile__btn_close').trigger('click');
		       if ( ! $('body').hasClass('mobile_menu--open') )
			       $('.filter__mobile').trigger('click');
	    	}
	    },
	    leave: function() {
	        if ( $('body').hasClass('mobile_menu--open') ){
		       $('.sidebar .sidebar__mobile').trigger('click');
	        }
	    }
	});
	$.mediaquery("bind", "mq-mainsidebar", "(max-width: 1024px)", {
	    enter: function() {},
	    leave: function() {
	    	// console.log('leave (max-width: 1024px)');
	        if ( $('body').hasClass('tablet_menu--open') ){
	        	$('body').removeClass('tablet_menu--open');
	        	$('.sidebar, .sidebar form, .sidebar__mobile, main').attr('style', '');
	        }
	    }
	});		

	// SHOW/HIDE BLOCKS ON PRIVATE DATA PAGE
	$.mediaquery("bind", "mq-privatedata-page", "(max-width: 599px)", {
	    enter: function() {
	    	var containers = $('.wrapper-delivery, .wrapper-messages');
	    	containers.each(function(index, el) {
	    		if (!$(el).attr('data-state')) $(el).attr('data-state', 'undefined');
	    		$(el).data('height', $(el).innerHeight());
	    	});
    		// console.log('enter');
	    	var styles = $('<style id="mq-privatedata-page-styles">'
	    		+'@media screen and (max-width: 599px) {'
				+ '.wrapper-delivery, .wrapper-messages{ transition:  height 1s ease; }'
				+ '.wrapper-delivery { height: '+ $('.wrapper-delivery[data-state]').data('height') + 'px }'
				+ '.wrapper-messages { height: '+ $('.wrapper-messages[data-state]').data('height') + 'px }'
				+'}</style>').prependTo('body');
	    	$('.wrapper-delivery, .wrapper-messages').on('click.expander', 'a.mailing, a.message-list', function (event) {
	    		event.preventDefault();
	    		var container = $(this).closest('div');
	    		if (container.data('state') === 'collapsed') {
	    			container.attr('data-state', 'expanded').data('state', 'expanded');
	    			var body = $("html, body");
	    			$(body).clearQueue().delay(500).queue(function(){
		    			var scrollTop = $('html').scrollTop() || $('body').scrollTop();
    			        $(body).animate({scrollTop: scrollTop+$(container).data('height')}, '50', 'linear');
    			        $(body).dequeue();
    			    });
	    		} else {
    				container.attr('data-state', 'collapsed').data('state', 'collapsed');
	    		} 
	    	})
	    },
	    leave: function() {
	    	// console.log('leave');
	    	$('#mq-privatedata-page-styles').remove();
	        $('.wrapper-delivery, .wrapper-messages').removeAttr('data-state').removeData('state').off('click.expander');
	    }
	});	

	// SHOW/HIDE USERINFO 
	$('body').on('click', '.useinfo_sidebar__btn_close', function(event) {
		event.preventDefault();	var body = $('body');
		var cell = $(this).closest('.q-user_cell');
		var panel = cell.find('.collapse-q-user_cell');
		var l = panel.innerWidth();
		if ( panel.css('display') == 'none' ){
			cell.find('.q-user, .q-admin_cell').transition({ marginLeft: -200 }, 500, 'easeOutQuint');
			cell.data('width', cell.innerWidth).transition({ width: 0 }, 500, 'easeOutQuint').transition({ width: l }, 500, 'easeOutQuint');
			panel.css({left:-l, display:'block'}).transition({ left: 0,delay: 500 }, 500, 'easeOutQuint');
			cell.closest('.question-answer').addClass('q-user_cell__collapsed');
		}
	});
	$('body').on('click', '.collapse-q-user_cell', function(event) {
		event.preventDefault();	var body = $('body');
		var cell = $(this).closest('.q-user_cell');
		var panel = $(this);
		var l = panel.innerWidth();
		if ( panel.css('display') == 'block' ){
			panel.transition({ left: -l }, 500, 'easeOutQuint', function(){panel.attr('style', '')});
			cell.transition({ width: 0 }, 500, 'easeOutQuint').transition({ width: cell.data('width') }, 500, 'easeOutQuint', function(){cell.attr('style', '')});
			cell.find('.q-user, .q-admin_cell').transition({ marginLeft: 0, delay: 500 }, 500, 'easeOutQuint');
			cell.closest('.question-answer').removeClass('q-user_cell__collapsed');
		}
	});

	$('body').on('click', '.respond_sidebar__btn_close', function(event) {
		event.preventDefault();	var body = $('body');
		var cell = $(this).closest('.r-user_cell');
		var panel = cell.find('.collapse-r-user_cell');
		var l = panel.innerWidth();
		if ( panel.css('display') == 'none' ){
			cell.find('.r-user, .r-admin_cell').transition({ marginLeft: -300 }, 500, 'easeOutQuint', function(){ $(this).css('visibility', 'hidden') } );
			cell.data('width', cell.innerWidth).transition({ width: 0 }, 500, 'easeOutQuint').transition({ width: l }, 500, 'easeOutQuint');
			panel.css({left:-l-9.6, display:'block'}).transition({ left: 0,delay: 500 }, 500, 'easeOutQuint');
			cell.closest('.question-answer').addClass('r-user_cell__collapsed');
		}
	});
	$('body').on('click', '.collapse-r-user_cell', function(event) {
		event.preventDefault();	var body = $('body');
		var cell = $(this).closest('.r-user_cell');
		var panel = $(this);
		var l = panel.innerWidth();
		if ( panel.css('display') == 'block' ){
			panel.transition({ left: -l-9.6 }, 500, 'easeOutQuint', function(){panel.attr('style', '')});
			cell.transition({ width: 0 }, 500, 'easeOutQuint').transition({ width: cell.data('width') }, 500, 'easeOutQuint', function(){cell.attr('style', '')});
			cell.find('.r-user, .r-admin_cell').css('visibility', 'visible').transition({ marginLeft: 0, delay: 500 }, 500, 'easeOutQuint');
			cell.closest('.question-answer').removeClass('r-user_cell__collapsed');
		}
	});

	$('.header_wrapper').on('click', '.search', function() {
		var search = $(this).closest('.header_wrapper').find('[name="search"]');
		event.stopPropagation();
		if (search.css('display') !== 'none') return;
		$(this).closest('.header_wrapper').find('[name="search"]')
		.css({left:"150%", display: 'inline-block'})
		.transition({ left: 0 }, 700, 'easeOutBack', function() {
			$('body *').on('click.search', function() {
				if ( $(this).attr('name') == 'search' ) {
					event.stopPropagation();
					event.stopImmediatePropagation();
					return;
				}
				$('.header_wrapper').find('[name="search"]')
				.transition({ left: "150%" }, 700, 'easeOutQuint', function(){
					$(this).css({left:0, display: 'none'});
				});
				$('body *').off('click.search');
			});
		});
	});

	$('input[type="checkbox"]').iCheck({
	    checkboxClass: 'icheckbox_xopc',
	    radioClass: 'iradio_xopc',
	    // increaseArea: '20%' // optional
	});

	(function(){

		var i18n = {
		    previousMonth : 'Previous Month',
		    nextMonth     : 'Next Month',
		    months        : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		    weekdays      : ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
		    weekdaysShort : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
		},
		updateStartDate = function(source, startDate) {
			var endPicker = $(source).closest('form').find('[name="date[to]"]').eq(0);
		    endPicker.pikaday('setMinDate', startDate);
		},
		updateEndDate = function(source, endDate) {
			var startPicker = $(source).closest('form').find('[name="date[from]"]').eq(0);
		    startPicker.pikaday('setMaxDate', endDate);
		};
		$('[name="date[from]"]').pikaday({
			 firstDay: 1,
			 i18n: i18n,
			 onSelect: function() {
			     startDate = this.getDate();
			     // console.log('startDate', startDate);
			     // console.log('field', this._o.field);
			     updateStartDate(this._o.field, startDate);
			 }
		});
		$('[name="date[to]"]').pikaday({
			 firstDay: 1,
			 i18n: i18n,
			 onSelect: function() {
			     endDate = this.getDate();
			     // console.log('endDate', endDate);
			     // console.log('field', this._o.field);
			     updateEndDate(this._o.field, endDate)
			 }
		});
		
	})();

	$('.sidebar form').change(function(event) {
		var data = $(this).serializeObject();
		console.log(data);
	});

	$('select').selectric({
		preventWindowScroll: false,
		maxHeight: 134,
		onInit: function() {
			// console.log($(this).find('option').length);
			if ( $(this).find('option').length > 4 ){
				var selectric = $(this).closest('.selectric-wrapper');
				selectric.find('.selectric-items').addClass('custom-scroll').prepend('<div class="scroll-up"></div>').append('<div class="scroll-down"></div>');
				var scrollbox = selectric.find('.selectric-scroll');
				scrollbox.scrollbar();
				selectric.on('mousedown click', '.scroll-up', {parent:scrollbox, l: 78, duration: 300, direction:'up' }, scroll);
				selectric.on('mousedown click', '.scroll-down', {parent:scrollbox, l: 78, duration: 300, direction:'down' }, scroll);
			}
		},
	});

	var countries = [];
	var cities = [];

	window.data.forEach(function(el, index){
		countries[index] = el.country;
		cities[index] = { value: el.capital, data: el.country };
	});

	(function () {
		var margin = 18;
		$('[name="country"]').autocomplete({
			lookup: countries,
			beforeRender: beforeRender,
			maxHeight: 138,
			onSelect: function (suggestion) {
				// console.log('onSelect', this, suggestion);
				$(this).data( 'value', suggestion.value );
				$(this).closest('form').find('[name="city"]').val('');
			},
			onInvalidateSelection: function () {
				// console.log('onInvalidateSelection', this);
				$(this).data('value', '');
				$(this).closest('form').find('[name="city"]').val('');
			}
		});
		$('[name="city"]').autocomplete({
			lookup: cities,
			beforeRender: beforeRender,
			maxHeight: 138,
			onSelect: function (suggestion) {
				// console.log('onSelect', this, suggestion);
				var country = $(this).closest('form').find('[name="country"]');
				country.val( suggestion.data );
				country.data( 'value', suggestion.data );
			},
		});

		$('[name="city"]').each(function(index, elem) {
			$(elem).autocomplete('setOptions', {lookupFilter: search.bind(elem)})
		});

		function search (suggestion, query, queryLowerCase) {
			// console.log(suggestion, query, queryLowerCase, this, arguments);
			var country = $(this).closest('form').find('[name="country"]');
			if (country.length>0 && country.data('value')) {
				if ( country.data('value') !== suggestion.data ) return false;
			}
			$(this).closest('form').find('[name="country"]').data('value')
			return-1!==suggestion.value.toLowerCase().indexOf(queryLowerCase);
		}

		function beforeRender (container) {
			$(container).scrollbar('destroy');
			var items = $(container).find('.autocomplete-suggestion');
			if (items.length>4){
				$(container).scrollbar();
				$(container).find('.fs-scrollbar-content').width($(container).outerWidth()+margin);
				$(container).prepend('<div class="scroll-up"></div>').append('<div class="scroll-down"></div>');
				$(container).on('mousedown click', '.scroll-up', {parent:$(container), l: 78, duration: 300, direction:'up' }, scroll);
				$(container).on('mousedown click', '.scroll-down', {parent:$(container), l: 78, duration: 300, direction:'down' }, scroll);
			} 
		}
		$(window).on('resize', {selector: '.autocomplete-suggestions'}, function(){
			var items = $('.autocomplete-suggestions');
			// console.log('resize');
			items.each(function(index, el) {
				var items = $(el).find('.autocomplete-suggestion');
				if (items.length>4)
					$(el).find('.fs-scrollbar-content').width($(this).outerWidth()+margin);
			});
		});
	})()

	$('.modal.avatar-moder [data-scrollbox]').scrollbar();
	$('.modal.avatar-moder').on('mousedown click', '.moder__up', {parent:'.modal.avatar-moder', direction:'up' }, scroll);
	$('.modal.avatar-moder').on('mousedown click', '.moder__down', {parent:'.modal.avatar-moder', direction:'down' }, scroll);

	function scroll (event) {
		event.preventDefault();
		event.stopPropagation();
		// event.stopImmediatePropagation();
		if ( event.type == 'click' ) return;
		var scrollbox = (event.data.parent instanceof jQuery) ? event.data.parent : $(this).closest(event.data.parent).find('.fs-scrollbar-element');
		if (scrollbox.length>0) {
			scrollarea = scrollbox.find('.fs-scrollbar-content');
			topOffset = scrollarea.scrollTop();
			// console.log('topOffset', topOffset);
			var length = event.data.l || scrollbox.data('scroll-length') || 30;
			var duration = event.data.duration || scrollbox.data('scroll-duration') || 150;
			if (event.data.direction == 'up')
				scrollbox.scrollbar("scroll", topOffset>length?topOffset-length:0, duration);
			else scrollbox.scrollbar("scroll", topOffset+length, duration);
		}
	}

	/*FORMS, MODALS, POPUPS*/
	(function(){
		var modals = [5,8,8], popups = [], validators = [], tooltipCallbacks = [];
		$('body').on('click', '[data-type="submit"]', function(event) {
			event.preventDefault();
			var form = $(this).closest('form');
			if (form.length===0) form = $(this).closest('.modal').find('form');
			if (form.length>0) form.submit(); else $.magnificPopup.close();
		});

		$('body button[data-type="submit"]').each(function(index, el) {
			var form = $(el).closest('form');
			if (form.length===0) form = $(this).closest('.modal').find('form');
			// console.log(form);
			var fname = form.attr('name');
			if (form.length>0 && fname && !validators[fname]) {
				// console.log('fname', fname);
				var fields = [];
				form.find('input, select, textarea').each(function(index, el) {
					var v = {rules:''}, field = $(el);
					v.name = field.attr('name');
					if (field.data('name')) v.display = field.data('name');
					if (field.prop('required')) v.rules += 'required|';
					if (field.data('rule')) v.rules += field.data('rule');
					if (v.name && v.rules) fields.push(v);
				});
				// console.log('fields', fields);
				if (fields.length>0){

					var validator = new FormValidator(fname, fields, function(errors, event) {
						// console.log('errors', errors, this);
						var form = $(this.form);
						if ( form.prev().hasClass('attantion') ) form.prev().remove();
					    if (errors.length > 0) {
					        var errorString = '', requiredErrorMessages = '', otherErrorMessages = '';
			                for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
			                	var field = $(errors[i].element);
			                    errorString += errors[i].message + '<br />';
			                    if ( field.attr('type') === 'password' && errors[i].rule === 'min_length'){
			                    	otherErrorMessages += '<span>'+'Пароль недостаточной длины'+'</span>';
			                    	field.addClass('error'); continue;
			                    }
			                    if (errors[i].rule === 'valid_email'){
			                    	otherErrorMessages += '<span>'+'Введите корректный email'+'</span>';
			                    	field.addClass('error'); continue;
			                    };
			                    if (field.attr('required')){
			                    	if (field.data('name')) requiredErrorMessages += '<span>'+errors[i].display+'</span>';
			                    	field.addClass('error'); continue;
			                    };
			                    if ( field.attr('type') === 'password' && (errors[i].rule === 'required' || errors[i].rule === 'matches') ){
			                    	otherErrorMessages += '<span>'+'Пароли не совпадают'+'</span>';
			                    	field.addClass('error'); continue;
			                    }
			                };
			                var allErrorsString = '';
			                if (requiredErrorMessages || otherErrorMessages){
			                	if (requiredErrorMessages) 
			                		allErrorsString = '<div class="attantion">%r%s</div>'.replace('%r', '<span>Вы не заполнили следующие поля:</span>');
			                	else allErrorsString = '<div class="attantion">%r%s</div>'.replace('%r', '');
			                	allErrorsString = allErrorsString.replace('%s', requiredErrorMessages+otherErrorMessages);
			                	form.before(allErrorsString);
			                }
			                // console.log(errorString);
			                // console.log(requiredErrorMessages);
			                form.addClass('validate');
			                var modal = form.closest('.modal');
			                if (modal.length>0) {
			                	modal.addClass('animated shake');
			                	setTimeout((function(){
			                		$(this).removeClass('animated shake')
			                	}).bind(modal), 1500);
			                }
					    } else {
					    	var data = form.serializeObject();
					    		console.log(data);
					    		$.magnificPopup.close();
					    }
					});
					validators[fname] = validator;
				}
			}
		});

		$('form').on('submit', function(event) {
			event.preventDefault();
			var modal = $(this).closest('.modal');
			// var data = $(this).serializeObject();
				// console.log(data);
			var fname = $(this).attr('name');
			if (!validators[fname])	$.magnificPopup.close();
		});
		$('body').on('focus', 'form.validate input', function(event) {
			if ($(this).hasClass('error')) $(this).removeClass('error');
		});




		/*
		data-open-tooltip: data-tooltip
		data-tooltip-type: func || html
		data-tooltip-tooltipAttachmentPoint: 'top right': top|middle|bottom || left|center|right
		data-tooltip-targetAttachmentPoint: 'top right': top|middle|bottom || left|center|right
		data-tooltip-offset: '0 10px' : y || x
		data-tooltip-delay: ms
		data-tooltip-event: hover || click
		**/

		tooltipCallbacks['userinfo'] = function () {
			var tooltip = $(this.target).closest('.q-user_cell').find('.q-user__popUp')[0].outerHTML;
			// console.log('tooltip userinfo', this, tooltip, typeof(tooltip));
			// this.options.tetherOptions.offset = '0 0';//y,x
			this.options.tetherOptions.targetOffset = '-90% -17%';//y,x
			this.options.tetherOptions.constraints = [{to: 'scrollParent', attachment: 'none'}];
			if ($('body').innerWidth()<600){
				this.options.tetherOptions.targetOffset = '-70% -17%';
				this.options.openOn = 'click';
				this.target = $(this.target).find('.q-user-wrapper img')[0];
			}
			return tooltip;
		};

		$('body').on('click', '[data-tooltip="admin_ava_req"]', function () {
			id = $(this).data('tooltip');
			popups[id].close();
		})
		
		var Modal, Tooltip;

		Tooltip = Drop.createContext({
		  classPrefix: 'tooltip'
		});
		Modal = Drop.createContext({
		  classPrefix: 'modal'
		});
		$('[data-open-tooltip]').each(function(index, el) {
			// console.log('[data-open-tooltip]:', el);
			var id                 = $(el).data('open-tooltip'),
			type                   = $(el).data('tooltip-type'),
			offset                 = $(el).data('tooltip-offset'),
			delay                  = $(el).data('tooltip-delay'),
			event                  = $(el).data('tooltip-event'),
			tooltipAttachmentPoint = $(el).data('tooltip-tooltipattachmentpoint'),
			targetAttachmentPoint  = $(el).data('tooltip-targetattachmentpoint');

			// console.log('params:', id, type, event, 'tooltipAttachmentPoint:', tooltipAttachmentPoint, 'targetAttachmentPoint:', targetAttachmentPoint, 'offset:', offset);

			if (!id /*|| popups[id]*/) return;
			type                   = (type === 'func')      ? type                   : 'html';
			delay                  = delay                  ? delay                  : 300;
			event                  = event                  ? event                  : 'hover';
			offset                 = offset                 ? offset                 : '0 0';
			tooltipAttachmentPoint = tooltipAttachmentPoint ? tooltipAttachmentPoint : 'top left';
			targetAttachmentPoint  = targetAttachmentPoint  ? targetAttachmentPoint  : 'bottom right';


			var content = (type === 'func') ? ( (typeof tooltipCallbacks[id] !== undefined) ? tooltipCallbacks[id] : null ) : $('[data-tooltip="%s"]'.replace('%s', id))[0];
			// console.log('params:', id, type, event, offset, content);
			if (!content || (type === 'html' && content.length === 0) || ( type === 'func' && typeof content !== 'function' )) return;
			var drop = new Tooltip({
			  target: el,
			  content: content,
			  // position: position,
			  openOn: event,
			  // openOn: 'always',
			  hoverCloseDelay: delay,
			  remove: true,
			  tetherOptions: {
			  	offset: offset,
			  	targetAttachment: targetAttachmentPoint,
			  	attachment: tooltipAttachmentPoint,
			  }
			});
			// console.log('drop created', drop);
			drop.on('open', function () {
				// console.log('drop open', this);
			});
			if (type === 'func' || popups[id]) id += index;
			popups[id] = drop;
			// console.log(popups);
		});

		/*data-open-modal: data-modal*/
		$('body').on('click.open_modal', '[data-open-modal]', function(event) {
			event.preventDefault();
			var id = $(this).data('open-modal'), drop = modals[id], modal = $('[data-modal="%s"]'.replace('%s', id));
			$.magnificPopup.open({
			  items: {
			    src: modal
			  },
			  type:'inline',
			  closeOnBgClick: false,
			  showCloseBtn: false,
			  mainClass: 'mfp-fade',
			  removalDelay: 600,
			  callbacks: {
			      open: function() {
			      	setTimeout(function(){ $('body').addClass('modal-open') }, 600);
			        // modal.css({x:'-50%'}).transition({ bottom: '50%', y: '50%' }, 500, 'easeOutBack');
			      },
			    },
			});
		});
		$('body').on('click', '[data-type="cancel"], .modal .close', function(event) {
			event.preventDefault();
			var modal = $(this).closest('.modal');
			if (modal.length>0) {
				// modal.transition({ bottom: '100%', y: 0 }, 500, 'easeInBack', function () {
				// 	$('body').removeClass('modal-open');
				// });
				$('body').removeClass('modal-open');
				$.magnificPopup.close();
			}
		});
		$('.question-answer').on('click', '[data-open-modal="reply2req"]', function(event) {
			event.preventDefault();	event.stopImmediatePropagation();
			event.stopPropagation(); $(this).trigger('click.open_modal'); return;
		});




	})();

	Mousetrap.bind('ctrl+alt+1', function(e) {
	    $('body').toggleClass('admin-mode user-mode', false).toggleClass('guest-mode', true);
	    // console.log(e);
	});
	Mousetrap.bind('ctrl+alt+2', function(e) {
	    $('body').toggleClass('admin-mode guest-mode', false).toggleClass('user-mode', true);
	});
	Mousetrap.bind('ctrl+alt+3', function(e) {
	    $('body').toggleClass('guest-mode user-mode', false).toggleClass('admin-mode', true);
	});











});