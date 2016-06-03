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

/* ----- pruning.js ----- */


(function($) {
  var cut = function(el) {
    var text = el.text(),
      height = el.height(),
      clone = el.clone();

    clone.css({
      position: 'absolute',
      visibility: 'hidden',
      height: 'auto',
      width: el.innerWidth()
    });
    el.after(clone);

    var l = text.length - 1;
    for (; l >= 0 && clone.height() > height; --l) {
      clone.text(text.substring(0, l) + '...');
    }

    el.text(clone.text());
    clone.remove();
  };

  $.fn.cutText = function() {
    return this.each(function() {
      cut($(this));
    });
  };
}(jQuery));