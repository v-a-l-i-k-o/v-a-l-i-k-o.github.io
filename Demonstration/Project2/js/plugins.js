// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

/* ===== JQUERY/HELPER PLUGINS ===== */

/* ----- transition.js ----- */

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ----- tab.js ----- */

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ----- countdown.js ----- */

/*

JQUERY: STOPWATCH & COUNTDOWN

This is a basic stopwatch & countdown plugin to run with jquery. Start timer, pause it, stop it or reset it. Same behaviour with the countdown besides you need to input the countdown value in seconds first. At the end of the countdown a callback function is invoked.

Any questions, suggestions? marc.fuehnen(at)gmail.com

*/

$(document).ready(function() {
  (function($) {
    $.extend({
      APP: {
        formatTimer: function(a) {
          if (a < 10) {
            a = '0' + a;
          }
          return a;
        },
        startTimer: function(dir) {
          var a;
          // save type
          $.APP.dir = dir;
          // get current date
          $.APP.d1 = new Date();
          switch ($.APP.state) {
            case 'pause':
              // resume timer
              // get current timestamp (for calculations) and
              // substract time difference between pause and now
              $.APP.t1 = $.APP.d1.getTime() - $.APP.td;
              break;
            default:
              // get current timestamp (for calculations)
              $.APP.t1 = $.APP.d1.getTime();
              // if countdown add ms based on seconds in textfield
              if ($.APP.dir === 'cd') {
                $.APP.t1 += parseInt($('#cd_seconds').val()) * 1000;
              }
              break;
          }
          // reset state
          $.APP.state = 'alive';
          $('#' + $.APP.dir + '_status').html('Running');
          // start loop
          $.APP.loopTimer();
        },
        pauseTimer: function() {
          // save timestamp of pause
          $.APP.dp = new Date();
          $.APP.tp = $.APP.dp.getTime();
          // save elapsed time (until pause)
          $.APP.td = $.APP.tp - $.APP.t1;
          // change button value
          $('#' + $.APP.dir + '_start').val('Resume');
          // set state
          $.APP.state = 'pause';
          $('#' + $.APP.dir + '_status').html('Paused');
        },
        stopTimer: function() {
          // change button value
          $('#' + $.APP.dir + '_start').val('Restart');
          // set state
          $.APP.state = 'stop';
          $('#' + $.APP.dir + '_status').html('Stopped');
        },
        resetTimer: function() {
          // reset display
          $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');
          // change button value
          $('#' + $.APP.dir + '_start').val('Start');
          // set state
          $.APP.state = 'reset';
          $('#' + $.APP.dir + '_status').html('Reset & Idle again');
        },
        endTimer: function(callback) {
          // change button value
          $('#' + $.APP.dir + '_start').val('Restart');
          // set state
          $.APP.state = 'end';
          // invoke callback
          if (typeof callback === 'function') {
            callback();
          }
        },
        loopTimer: function() {
          var td;
          var d2, t2;
          var ms = 0;
          var s = 0;
          var m = 0;
          var h = 0;
          if ($.APP.state === 'alive') {
            // get current date and convert it into 
            // timestamp for calculations
            d2 = new Date();
            t2 = d2.getTime();
            // calculate time difference between
            // initial and current timestamp
            if ($.APP.dir === 'sw') {
              td = t2 - $.APP.t1;
              // reversed if countdown
            } else {
              td = $.APP.t1 - t2;
              if (td <= 0) {
                // if time difference is 0 end countdown
                $.APP.endTimer(function() {
                  $.APP.resetTimer();
                  $('#' + $.APP.dir + '_status').html('Ended & Reset');
                });
              }
            }
            // calculate milliseconds
            ms = td % 1000;
            if (ms < 1) {
              ms = 0;
            } else {
              // calculate seconds
              s = (td - ms) / 1000;
              if (s < 1) {
                s = 0;
              } else {
                // calculate minutes   
                var m = (s - (s % 60)) / 60;
                if (m < 1) {
                  m = 0;
                } else {
                  // calculate hours
                  var h = (m - (m % 60)) / 60;
                  if (h < 1) {
                    h = 0;
                  }
                }
              }
            }
            // substract elapsed minutes & hours
            ms = Math.round(ms / 10);
            s = s - (m * 60);
            m = m - (h * 60);
            // update display
            $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
            $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
            $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));
            $('#' + $.APP.dir + '_h').html($.APP.formatTimer(h));
            // loop
            $.APP.t = setTimeout($.APP.loopTimer, 1);
          } else {
            // kill loop
            clearTimeout($.APP.t);
            return true;
          }
        }
      }
    });
    $('#sw_start').on('click', function() {
      $.APP.startTimer('sw');
    });
    $('#cd_start').on('click', function() {
      $.APP.startTimer('cd');
    });
    $('#sw_stop,#cd_stop').on('click', function() {
      $.APP.stopTimer();
    });
    $('#sw_reset,#cd_reset').on('click', function() {
      $.APP.resetTimer();
    });
    $('#sw_pause,#cd_pause').on('click', function() {
      $.APP.pauseTimer();
    });
  })(jQuery);
});