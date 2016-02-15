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

/* ----- jquery.selectric ----- */

/*! Selectric ϟ v1.9.3 (2015-07-08) - git.io/tjl9sQ - Copyright (c) 2015 Leonardo Santos - Dual licensed: MIT/GPL */
!function(e){"use strict";var t="selectric",s="Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel",o=".sl",i={onChange:function(t){e(t).change()},maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:!0,openOnHover:!1,hoverIntentTimeout:500,expandToItemText:!1,responsive:!1,preventWindowScroll:!0,inheritOriginalWidth:!1,allowWrap:!0,customClass:{prefix:t,camelCase:!1,overwrite:!0},optionsItemBuilder:"{text}",labelBuilder:"{text}"},n={add:function(e,t,s){this[e]||(this[e]={}),this[e][t]=s},remove:function(e,t){delete this[e][t]}},l={replaceDiacritics:function(e){for(var t="40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g,"\\3$&").split(" "),s=t.length;s--;)e=e.toLowerCase().replace(RegExp("["+t[s]+"]","g"),"aeiouncy".charAt(s));return e},format:function(e){var t=arguments;return(""+e).replace(/{(\d+|(\w+))}/g,function(e,s,o){return o&&t[1]?t[1][o]:t[s]})},nextEnabledItem:function(e,t){for(;e[t=(t+1)%e.length].disabled;);return t},previousEnabledItem:function(e,t){for(;e[t=(t>0?t:e.length)-1].disabled;);return t},toDash:function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},triggerCallback:function(s,o){var i=o.element,a=o.options["on"+s];e.isFunction(a)&&a.call(i,i,o),n[s]&&e.each(n[s],function(){this.call(i,i,o)}),e(i).trigger(t+"-"+l.toDash(s),o)}},a=e(document),r=e(window),c=function(n,c){function d(t){if(j.options=e.extend(!0,{},i,j.options,t),j.classes={},j.element=n,l.triggerCallback("BeforeInit",j),j.options.disableOnMobile&&Y)return void(j.disableOnMobile=!0);C(!0);var o=j.options.customClass,a=s.split(" "),r=F.width();e.each(a,function(e,t){var s=o.prefix+t;j.classes[t.toLowerCase()]=o.camelCase?s:l.toDash(s)}),x=e("<input/>",{"class":j.classes.input,readonly:Y}),k=e("<div/>",{"class":j.classes.items,tabindex:-1}),T=e("<div/>",{"class":j.classes.scroll}),D=e("<div/>",{"class":o.prefix,html:j.options.arrowButtonMarkup}),I=e('<p class="label"/>'),y=F.wrap("<div>").parent().append(D.prepend(I),k,x),A={open:m,close:g,destroy:C,refresh:u,init:d},F.on(A).wrap('<div class="'+j.classes.hideselect+'">'),e.extend(j,A),$=j.options.labelBuilder,j.options.inheritOriginalWidth&&r>0&&y.width(r),p()}function p(){j.items=[];var t=F.children(),s="<ul>",i=F.find("option"),n=i.index(i.filter(":selected")),a=0;B=S=~n?n:0,(E=t.length)&&(t.each(function(){function t(){var t=e(this),o=t.html(),i=t.prop("disabled"),n=j.options.optionsItemBuilder;j.items[a]={element:t,value:t.val(),text:o,slug:l.replaceDiacritics(o),disabled:i},s+=l.format('<li data-index="{1}" class="{2}">{3}</li>',a,e.trim([a==B?"selected":"",a==E-1?"last":"",i?"disabled":""].join(" ")),e.isFunction(n)?n(j.items[a],t,a):l.format(n,j.items[a])),a++}var o=e(this);if(o.is("optgroup")){var i=o.prop("disabled"),n=o.children();s+=l.format('<ul class="{1}"><li class="{2}">{3}</li>',e.trim([j.classes.group,i?"disabled":"",o.prop("class")].join(" ")),j.classes.grouplabel,o.prop("label")),i&&n.prop("disabled",!0),n.each(t),s+="</ul>"}else t.call(o)}),k.append(T.html(s+"</ul>")),I.html(e.isFunction($)?$(j.items[B]):l.format($,j.items[B]))),D.add(F).add(y).add(x).off(o),y.prop("class",[j.classes.wrapper,j.options.customClass.overwrite?F.prop("class").replace(/\S+/g,j.options.customClass.prefix+"-$&"):F.prop("class"),j.options.responsive?j.classes.responsive:""].join(" ")),F.prop("disabled")?(y.addClass(j.classes.disabled),x.prop("disabled",!0)):(R=!0,y.removeClass(j.classes.disabled).on("mouseenter"+o+" mouseleave"+o,function(t){e(this).toggleClass(j.classes.hover),j.options.openOnHover&&(clearTimeout(j.closeTimer),"mouseleave"==t.type?j.closeTimer=setTimeout(g,j.options.hoverIntentTimeout):m())}),D.on("click"+o,function(e){L?g():m(e)}),x.prop({tabindex:P,disabled:!1}).on("keypress"+o,h).on("keydown"+o,function(e){h(e),clearTimeout(j.resetStr),j.resetStr=setTimeout(function(){x.val("")},j.options.keySearchTimeout);var t=e.keyCode||e.which;if(t>36&&41>t){if(!j.options.allowWrap&&(39>t&&0==S||t>38&&S+1==j.items.length))return;b(l[(39>t?"previous":"next")+"EnabledItem"](j.items,S))}}).on("focusin"+o,function(e){x.one("blur",function(){x.blur()}),L||m(e)}).on("oninput"in x[0]?"input":"keyup",function(){x.val().length&&e.each(j.items,function(e,t){return RegExp("^"+x.val(),"i").test(t.slug)&&!t.disabled?(b(e),!1):void 0})}),F.prop("tabindex",!1),O=e("li",k.removeAttr("style")).on({mousedown:function(e){e.preventDefault(),e.stopPropagation()},click:function(){return b(e(this).data("index"),!0),!1}}).filter("[data-index]")),l.triggerCallback("Init",j)}function u(){l.triggerCallback("Refresh",j),p()}function h(e){var t=e.keyCode||e.which;13==t&&e.preventDefault(),/^(9|13|27)$/.test(t)&&(e.stopPropagation(),b(S,!0))}function f(){var e=k.closest(":visible").children(":hidden").addClass(j.classes.tempshow),t=j.options.maxHeight,s=k.outerWidth(),o=D.outerWidth()-(s-k.width());!j.options.expandToItemText||o>s?M=o:(k.css("overflow","scroll"),y.width(9e4),M=k.width(),k.css("overflow",""),y.width("")),k.width(M).height()>t&&k.height(t),e.removeClass(j.classes.tempshow)}function m(s){l.triggerCallback("BeforeOpen",j),s&&(s.preventDefault(),s.stopPropagation()),R&&(f(),e("."+j.classes.hideselect,"."+j.classes.open).children()[t]("close"),L=!0,H=k.outerHeight(),W=k.height(),y.addClass(j.classes.open),x.val("").is(":focus")||x.focus(),a.on("click"+o,g).on("scroll"+o,v),v(),j.options.preventWindowScroll&&a.on("mousewheel"+o+" DOMMouseScroll"+o,"."+j.classes.scroll,function(t){var s=t.originalEvent,o=e(this).scrollTop(),i=0;"detail"in s&&(i=-1*s.detail),"wheelDelta"in s&&(i=s.wheelDelta),"wheelDeltaY"in s&&(i=s.wheelDeltaY),"deltaY"in s&&(i=-1*s.deltaY),(o==this.scrollHeight-W&&0>i||0==o&&i>0)&&t.preventDefault()}),w(S),l.triggerCallback("Open",j))}function v(){y.toggleClass(j.classes.above,y.offset().top+y.outerHeight()+H>r.scrollTop()+r.height())}function g(){if(l.triggerCallback("BeforeClose",j),B!=S){l.triggerCallback("BeforeChange",j);var t=j.items[S].text;F.prop("selectedIndex",B=S).data("value",t),I.html(e.isFunction($)?$(j.items[S]):l.format($,j.items[S])),l.triggerCallback("Change",j)}a.off(o),y.removeClass(j.classes.open),L=!1,l.triggerCallback("Close",j)}function b(e,t){void 0!=e&&(j.items[e].disabled||(O.removeClass("selected").eq(S=e).addClass("selected"),w(e),t&&g()))}function w(e){var t=O.eq(e).outerHeight(),s=O[e].offsetTop,o=T.scrollTop(),i=s+2*t;T.scrollTop(i>o+H?i-H:o>s-t?s-t:o)}function C(e){R&&(k.add(D).add(x).remove(),!e&&F.removeData(t).removeData("value"),F.prop("tabindex",P).off(o).off(A).unwrap().unwrap(),R=!1)}var x,k,T,D,I,y,O,S,B,H,W,M,E,A,$,j=this,F=e(n),L=!1,R=!1,Y=/android|ip(hone|od|ad)/i.test(navigator.userAgent),P=F.prop("tabindex");d(c)};e.fn[t]=function(s){return this.each(function(){var o=e.data(this,t);o&&!o.disableOnMobile?""+s===s&&o[s]?o[s]():o.init(s):e.data(this,t,new c(this,s))})},e.fn[t].hooks=n}(jQuery);

/* ----- icheck ----- */

/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);

/* ----- slider ----- */

/*! nouislider - 8.2.1 - 2015-12-02 21:43:14 */

!function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?module.exports=a():window.noUiSlider=a()}(function(){"use strict";function a(a){return a.filter(function(a){return this[a]?!1:this[a]=!0},{})}function b(a,b){return Math.round(a/b)*b}function c(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.documentElement,e=m();return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(e.x=0),{top:b.top+e.y-d.clientTop,left:b.left+e.x-d.clientLeft}}function d(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function e(a){var b=Math.pow(10,7);return Number((Math.round(a*b)/b).toFixed(7))}function f(a,b,c){j(a,b),setTimeout(function(){k(a,b)},c)}function g(a){return Math.max(Math.min(a,100),0)}function h(a){return Array.isArray(a)?a:[a]}function i(a){var b=a.split(".");return b.length>1?b[1].length:0}function j(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function k(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function l(a,b){a.classList?a.classList.contains(b):new RegExp("(^| )"+b+"( |$)","gi").test(a.className)}function m(){var a=void 0!==window.pageXOffset,b="CSS1Compat"===(document.compatMode||""),c=a?window.pageXOffset:b?document.documentElement.scrollLeft:document.body.scrollLeft,d=a?window.pageYOffset:b?document.documentElement.scrollTop:document.body.scrollTop;return{x:c,y:d}}function n(a){a.stopPropagation()}function o(a){return function(b){return a+b}}function p(a,b){return 100/(b-a)}function q(a,b){return 100*b/(a[1]-a[0])}function r(a,b){return q(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function s(a,b){return b*(a[1]-a[0])/100+a[0]}function t(a,b){for(var c=1;a>=b[c];)c+=1;return c}function u(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=t(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+r([d,e],c)/p(f,g)}function v(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=t(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],s([d,e],(c-f)*p(f,g))}function w(a,c,d,e){if(100===e)return e;var f,g,h=t(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):c[h-1]?a[h-1]+b(e-a[h-1],c[h-1]):e}function x(a,b,c){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!d(e)||!d(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");c.xPct.push(e),c.xVal.push(b[0]),e?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1])}function y(a,b,c){return b?void(c.xSteps[a]=q([c.xVal[a],c.xVal[a+1]],b)/p(c.xPct[a],c.xPct[a+1])):!0}function z(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.length&&"object"==typeof f[0][0]?f.sort(function(a,b){return a[0][0]-b[0][0]}):f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)x(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)y(e,this.xNumSteps[e],this)}function A(a,b){if(!d(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function B(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(b.min===b.max)throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");a.spectrum=new z(b,a.snap,a.dir,a.singleStep)}function C(a,b){if(b=h(b),!Array.isArray(b)||!b.length||b.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");a.handles=b.length,a.start=b}function D(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function E(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function F(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function G(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function H(a,b){if(!d(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(a.margin=a.spectrum.getMargin(b),!a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function I(a,b){if(!d(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function J(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function K(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0,g=b.indexOf("hover")>=0;if(d&&!a.connect)throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");a.events={tap:c||f,drag:d,fixed:e,snap:f,hover:g}}function L(a,b){var c;if(b!==!1)if(b===!0)for(a.tooltips=[],c=0;c<a.handles;c++)a.tooltips.push(!0);else{if(a.tooltips=h(b),a.tooltips.length!==a.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");a.tooltips.forEach(function(a){if("boolean"!=typeof a&&("object"!=typeof a||"function"!=typeof a.to))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})}}function M(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function N(a,b){if(void 0!==b&&"string"!=typeof b)throw new Error("noUiSlider: 'cssPrefix' must be a string.");a.cssPrefix=b}function O(a){var b,c={margin:0,limit:0,animate:!0,format:T};b={step:{r:!1,t:A},start:{r:!0,t:C},connect:{r:!0,t:F},direction:{r:!0,t:J},snap:{r:!1,t:D},animate:{r:!1,t:E},range:{r:!0,t:B},orientation:{r:!1,t:G},margin:{r:!1,t:H},limit:{r:!1,t:I},behaviour:{r:!0,t:K},format:{r:!1,t:M},tooltips:{r:!1,t:L},cssPrefix:{r:!1,t:N}};var d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"};return Object.keys(b).forEach(function(e){if(void 0===a[e]&&void 0===d[e]){if(b[e].r)throw new Error("noUiSlider: '"+e+"' is required.");return!0}b[e].t(c,void 0===a[e]?d[e]:a[e])}),c.pips=a.pips,c.style=c.ort?"top":"left",c}function P(b,d){function e(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[g(d),g(e)]):[d,e]}function p(a,b){a.preventDefault();var c,d,e=0===a.type.indexOf("touch"),f=0===a.type.indexOf("mouse"),g=0===a.type.indexOf("pointer"),h=a;return 0===a.type.indexOf("MSPointer")&&(g=!0),e&&(c=a.changedTouches[0].pageX,d=a.changedTouches[0].pageY),b=b||m(),(f||g)&&(c=a.clientX+b.x,d=a.clientY+b.y),h.pageOffset=b,h.points=[c,d],h.cursor=f||g,h}function q(a,b){var c=document.createElement("div"),d=document.createElement("div"),e=["-lower","-upper"];return a&&e.reverse(),j(d,da[3]),j(d,da[3]+e[b]),j(c,da[2]),c.appendChild(d),c}function r(a,b,c){switch(a){case 1:j(b,da[7]),j(c[0],da[6]);break;case 3:j(c[1],da[6]);case 2:j(c[0],da[7]);case 0:j(b,da[6])}}function s(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(c.appendChild(q(b,d)));return e}function t(a,b,c){j(c,da[0]),j(c,da[8+a]),j(c,da[4+b]);var d=document.createElement("div");return j(d,da[1]),c.appendChild(d),d}function u(a,b){if(!d.tooltips[b])return!1;var c=document.createElement("div");return c.className=da[18],a.firstChild.appendChild(c)}function v(){d.dir&&d.tooltips.reverse();var a=Y.map(u);d.dir&&(a.reverse(),d.tooltips.reverse()),U("update",function(b,c,e){a[c]&&(a[c].innerHTML=d.tooltips[c]===!0?b[c]:d.tooltips[c].to(e[c]))})}function w(a,b,c){if("range"===a||"steps"===a)return aa.xVal;if("count"===a){var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return aa.fromStepping(c?aa.getStep(a):a)}):"values"===a?c?b.map(function(a){return aa.fromStepping(aa.getStep(aa.toStepping(a)))}):b:void 0}function x(b,c,d){function e(a,b){return(a+b).toFixed(7)/1}var f=aa.direction,g={},h=aa.xVal[0],i=aa.xVal[aa.xVal.length-1],j=!1,k=!1,l=0;return aa.direction=0,d=a(d.slice().sort(function(a,b){return a-b})),d[0]!==h&&(d.unshift(h),j=!0),d[d.length-1]!==i&&(d.push(i),k=!0),d.forEach(function(a,f){var h,i,m,n,o,p,q,r,s,t,u=a,v=d[f+1];if("steps"===c&&(h=aa.xNumSteps[f]),h||(h=v-u),u!==!1&&void 0!==v)for(i=u;v>=i;i=e(i,h)){for(n=aa.toStepping(i),o=n-l,r=o/b,s=Math.round(r),t=o/s,m=1;s>=m;m+=1)p=l+m*t,g[p.toFixed(5)]=["x",0];q=d.indexOf(i)>-1?1:"steps"===c?2:0,!f&&j&&(q=0),i===v&&k||(g[n.toFixed(5)]=[i,q]),l=n}}),aa.direction=f,g}function y(a,b,c){function e(a){return["-normal","-large","-sub"][a]}function f(a,b,c){return'class="'+b+" "+b+"-"+h+" "+b+e(c[1])+'" style="'+d.style+": "+a+'%"'}function g(a,d){aa.direction&&(a=100-a),d[1]=d[1]&&b?b(d[0],d[1]):d[1],i.innerHTML+="<div "+f(a,da[21],d)+"></div>",d[1]&&(i.innerHTML+="<div "+f(a,da[22],d)+">"+c.to(d[0])+"</div>")}var h=["horizontal","vertical"][d.ort],i=document.createElement("div");return j(i,da[20]),j(i,da[20]+"-"+h),Object.keys(a).forEach(function(b){g(b,a[b])}),i}function z(a){var b=a.mode,c=a.density||1,d=a.filter||!1,e=a.values||!1,f=a.stepped||!1,g=w(b,e,f),h=x(c,b,g),i=a.format||{to:Math.round};return $.appendChild(y(h,d,i))}function A(){return X["offset"+["Width","Height"][d.ort]]}function B(a,b,c){void 0!==b&&1!==d.handles&&(b=Math.abs(b-d.dir)),Object.keys(ca).forEach(function(d){var e=d.split(".")[0];a===e&&ca[d].forEach(function(a){a.call(Z,h(P()),b,h(C(Array.prototype.slice.call(ba))),c||!1)})})}function C(a){return 1===a.length?a[0]:d.dir?a.reverse():a}function D(a,b,c,e){var f=function(b){return $.hasAttribute("disabled")?!1:l($,da[14])?!1:(b=p(b,e.pageOffset),a===R.start&&void 0!==b.buttons&&b.buttons>1?!1:e.hover&&b.buttons?!1:(b.calcPoint=b.points[d.ort],void c(b,e)))},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,!1),g.push([a,f])}),g}function E(a,b){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===a.buttons&&0!==b.buttonsProperty)return F(a,b);var c,d,f=b.handles||Y,g=!1,h=100*(a.calcPoint-b.start)/b.baseSize,i=f[0]===Y[0]?0:1;if(c=e(h,b.positions,f.length>1),g=L(f[0],c[i],1===f.length),f.length>1){if(g=L(f[1],c[i?0:1],!1)||g)for(d=0;d<b.handles.length;d++)B("slide",d)}else g&&B("slide",i)}function F(a,b){var c=X.querySelector("."+da[15]),d=b.handles[0]===Y[0]?0:1;null!==c&&k(c,da[15]),a.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener));var e=document.documentElement;e.noUiListeners.forEach(function(a){e.removeEventListener(a[0],a[1])}),k($,da[12]),B("set",d),B("change",d),void 0!==b.handleNumber&&B("end",b.handleNumber)}function G(a,b){"mouseout"===a.type&&"HTML"===a.target.nodeName&&null===a.relatedTarget&&F(a,b)}function H(a,b){var c=document.documentElement;if(1===b.handles.length&&(j(b.handles[0].children[0],da[15]),b.handles[0].hasAttribute("disabled")))return!1;a.preventDefault(),a.stopPropagation();var d=D(R.move,c,E,{start:a.calcPoint,baseSize:A(),pageOffset:a.pageOffset,handles:b.handles,handleNumber:b.handleNumber,buttonsProperty:a.buttons,positions:[_[0],_[Y.length-1]]}),e=D(R.end,c,F,{handles:b.handles,handleNumber:b.handleNumber}),f=D("mouseout",c,G,{handles:b.handles,handleNumber:b.handleNumber});if(c.noUiListeners=d.concat(e,f),a.cursor){document.body.style.cursor=getComputedStyle(a.target).cursor,Y.length>1&&j($,da[12]);var g=function(){return!1};document.body.noUiListener=g,document.body.addEventListener("selectstart",g,!1)}void 0!==b.handleNumber&&B("start",b.handleNumber)}function I(a){var b,e,g=a.calcPoint,h=0;return a.stopPropagation(),Y.forEach(function(a){h+=c(a)[d.style]}),b=h/2>g||1===Y.length?0:1,g-=c(X)[d.style],e=100*g/A(),d.events.snap||f($,da[14],300),Y[b].hasAttribute("disabled")?!1:(L(Y[b],e),B("slide",b,!0),B("set",b,!0),B("change",b,!0),void(d.events.snap&&H(a,{handles:[Y[b]]})))}function J(a){var b=a.calcPoint-c(X)[d.style],e=aa.getStep(100*b/A()),f=aa.fromStepping(e);Object.keys(ca).forEach(function(a){"hover"===a.split(".")[0]&&ca[a].forEach(function(a){a.call(Z,f)})})}function K(a){var b,c;if(!a.fixed)for(b=0;b<Y.length;b+=1)D(R.start,Y[b].children[0],H,{handles:[Y[b]],handleNumber:b});if(a.tap&&D(R.start,X,I,{handles:Y}),a.hover)for(D(R.move,X,J,{hover:!0}),b=0;b<Y.length;b+=1)["mousemove MSPointerMove pointermove"].forEach(function(a){Y[b].children[0].addEventListener(a,n,!1)});a.drag&&(c=[X.querySelector("."+da[7])],j(c[0],da[10]),a.fixed&&c.push(Y[c[0]===Y[0]?1:0].children[0]),c.forEach(function(a){D(R.start,a,H,{handles:Y})}))}function L(a,b,c){var e=a!==Y[0]?1:0,f=_[0]+d.margin,h=_[1]-d.margin,i=_[0]+d.limit,l=_[1]-d.limit;return Y.length>1&&(b=e?Math.max(b,f):Math.min(b,h)),c!==!1&&d.limit&&Y.length>1&&(b=e?Math.min(b,i):Math.max(b,l)),b=aa.getStep(b),b=g(parseFloat(b.toFixed(7))),b===_[e]?!1:(window.requestAnimationFrame?window.requestAnimationFrame(function(){a.style[d.style]=b+"%"}):a.style[d.style]=b+"%",a.previousSibling||(k(a,da[17]),b>50&&j(a,da[17])),_[e]=b,ba[e]=aa.fromStepping(b),B("update",e),!0)}function M(a,b){var c,e,f;for(d.limit&&(a+=1),c=0;a>c;c+=1)e=c%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=d.format.from(f),(f===!1||isNaN(f)||L(Y[e],aa.toStepping(f),c===3-d.dir)===!1)&&B("update",e))}function N(a){var b,c,e=h(a);for(d.dir&&d.handles>1&&e.reverse(),d.animate&&-1!==_[0]&&f($,da[14],300),b=Y.length>1?3:1,1===e.length&&(b=1),M(b,e),c=0;c<Y.length;c++)B("set",c)}function P(){var a,b=[];for(a=0;a<d.handles;a+=1)b[a]=d.format.to(ba[a]);return C(b)}function Q(){da.forEach(function(a){a&&k($,a)}),$.innerHTML="",delete $.noUiSlider}function T(){var a=_.map(function(a,b){var c=aa.getApplicableStep(a),d=i(String(c[2])),e=ba[b],f=100===a?null:c[2],g=Number((e-c[2]).toFixed(d)),h=0===a?null:g>=c[1]?c[2]:c[0]||!1;return[h,f]});return C(a)}function U(a,b){ca[a]=ca[a]||[],ca[a].push(b),"update"===a.split(".")[0]&&Y.forEach(function(a,b){B("update",b)})}function V(a){var b=a.split(".")[0],c=a.substring(b.length);Object.keys(ca).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete ca[a]})}function W(a){var b,c=P(),e=O({start:[0,0],margin:a.margin,limit:a.limit,step:a.step,range:a.range,animate:a.animate,snap:void 0===a.snap?d.snap:a.snap});for(["margin","limit","step","range","animate"].forEach(function(b){void 0!==a[b]&&(d[b]=a[b])}),aa=e.spectrum,_=[-1,-1],N(c),b=0;b<Y.length;b++)B("update",b)}var X,Y,Z,$=b,_=[-1,-1],aa=d.spectrum,ba=[],ca={},da=["target","base","origin","handle","horizontal","vertical","background","connect","ltr","rtl","draggable","","state-drag","","state-tap","active","","stacking","tooltip","","pips","marker","value"].map(o(d.cssPrefix||S));if($.noUiSlider)throw new Error("Slider was already initialized.");return X=t(d.dir,d.ort,$),Y=s(d.handles,d.dir,X),r(d.connect,$,Y),d.pips&&z(d.pips),d.tooltips&&v(),Z={destroy:Q,steps:T,on:U,off:V,get:P,set:N,updateOptions:W},K(d.events),Z}function Q(a,b){if(!a.nodeName)throw new Error("noUiSlider.create requires a single element.");var c=O(b,a),d=P(a,c);return d.set(c.start),a.noUiSlider=d,d}var R=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},S="noUi-";z.prototype.getMargin=function(a){return 2===this.xPct.length?q(this.xVal,a):!1},z.prototype.toStepping=function(a){return a=u(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},z.prototype.fromStepping=function(a){return this.direction&&(a=100-a),e(v(this.xVal,this.xPct,a))},z.prototype.getStep=function(a){return this.direction&&(a=100-a),a=w(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},z.prototype.getApplicableStep=function(a){var b=t(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},z.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var T={to:function(a){return void 0!==a&&a.toFixed(2)},from:Number};return{create:Q}});

/* ----- moment.min.js ----- */

//! moment.js
//! version : 2.10.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Ac.apply(null,arguments)}function b(a){Ac=a}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}function e(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function f(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function g(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function h(a,b){for(var c in b)g(b,c)&&(a[c]=b[c]);return g(b,"toString")&&(a.toString=b.toString),g(b,"valueOf")&&(a.valueOf=b.valueOf),a}function i(a,b,c,d){return ya(a,b,c,d,!0).utc()}function j(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length&&void 0===a._pf.bigHour)),a._isValid}function k(a){var b=i(0/0);return null!=a?h(b._pf,a):b._pf.userInvalidated=!0,b}function l(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Cc.length>0)for(c in Cc)d=Cc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function m(b){l(this,b),this._d=new Date(+b._d),Dc===!1&&(Dc=!0,a.updateOffset(this),Dc=!1)}function n(a){return a instanceof m||null!=a&&g(a,"_isAMomentObject")}function o(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function p(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&o(a[d])!==o(b[d]))&&g++;return g+f}function q(){}function r(a){return a?a.toLowerCase().replace("_","-"):a}function s(a){for(var b,c,d,e,f=0;f<a.length;){for(e=r(a[f]).split("-"),b=e.length,c=r(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=t(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&p(e,c,!0)>=b-1)break;b--}f++}return null}function t(a){var b=null;if(!Ec[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Bc._abbr,require("./locale/"+a),u(b)}catch(c){}return Ec[a]}function u(a,b){var c;return a&&(c="undefined"==typeof b?w(a):v(a,b),c&&(Bc=c)),Bc._abbr}function v(a,b){return null!==b?(b.abbr=a,Ec[a]||(Ec[a]=new q),Ec[a].set(b),u(a),Ec[a]):(delete Ec[a],null)}function w(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Bc;if(!d(a)){if(b=t(a))return b;a=[a]}return s(a)}function x(a,b){var c=a.toLowerCase();Fc[c]=Fc[c+"s"]=Fc[b]=a}function y(a){return"string"==typeof a?Fc[a]||Fc[a.toLowerCase()]:void 0}function z(a){var b,c,d={};for(c in a)g(a,c)&&(b=y(c),b&&(d[b]=a[c]));return d}function A(b,c){return function(d){return null!=d?(C(this,b,d),a.updateOffset(this,c),this):B(this,b)}}function B(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function C(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function D(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=y(a),"function"==typeof this[a])return this[a](b);return this}function E(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function F(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Jc[a]=e),b&&(Jc[b[0]]=function(){return E(e.apply(this,arguments),b[1],b[2])}),c&&(Jc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function G(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function H(a){var b,c,d=a.match(Gc);for(b=0,c=d.length;c>b;b++)d[b]=Jc[d[b]]?Jc[d[b]]:G(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function I(a,b){return a.isValid()?(b=J(b,a.localeData()),Ic[b]||(Ic[b]=H(b)),Ic[b](a)):a.localeData().invalidDate()}function J(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Hc.lastIndex=0;d>=0&&Hc.test(a);)a=a.replace(Hc,c),Hc.lastIndex=0,d-=1;return a}function K(a,b,c){Yc[a]="function"==typeof b?b:function(a){return a&&c?c:b}}function L(a,b){return g(Yc,a)?Yc[a](b._strict,b._locale):new RegExp(M(a))}function M(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function N(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=o(a)}),c=0;c<a.length;c++)Zc[a[c]]=d}function O(a,b){N(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function P(a,b,c){null!=b&&g(Zc,a)&&Zc[a](b,c._a,c,a)}function Q(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function R(a){return this._months[a.month()]}function S(a){return this._monthsShort[a.month()]}function T(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=i([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function U(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),Q(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function V(b){return null!=b?(U(this,b),a.updateOffset(this,!0),this):B(this,"Month")}function W(){return Q(this.year(),this.month())}function X(a){var b,c=a._a;return c&&-2===a._pf.overflow&&(b=c[_c]<0||c[_c]>11?_c:c[ad]<1||c[ad]>Q(c[$c],c[_c])?ad:c[bd]<0||c[bd]>24||24===c[bd]&&(0!==c[cd]||0!==c[dd]||0!==c[ed])?bd:c[cd]<0||c[cd]>59?cd:c[dd]<0||c[dd]>59?dd:c[ed]<0||c[ed]>999?ed:-1,a._pf._overflowDayOfYear&&($c>b||b>ad)&&(b=ad),a._pf.overflow=b),a}function Y(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function Z(a,b){var c=!0;return h(function(){return c&&(Y(a),c=!1),b.apply(this,arguments)},b)}function $(a,b){hd[a]||(Y(b),hd[a]=!0)}function _(a){var b,c,d=a._i,e=id.exec(d);if(e){for(a._pf.iso=!0,b=0,c=jd.length;c>b;b++)if(jd[b][1].exec(d)){a._f=jd[b][0]+(e[6]||" ");break}for(b=0,c=kd.length;c>b;b++)if(kd[b][1].exec(d)){a._f+=kd[b][0];break}d.match(Vc)&&(a._f+="Z"),sa(a)}else a._isValid=!1}function aa(b){var c=ld.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(_(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ba(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function ca(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function da(a){return ea(a)?366:365}function ea(a){return a%4===0&&a%100!==0||a%400===0}function fa(){return ea(this.year())}function ga(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=za(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ha(a){return ga(a,this._week.dow,this._week.doy).week}function ia(){return this._week.dow}function ja(){return this._week.doy}function ka(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function la(a){var b=ga(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function ma(a,b,c,d,e){var f,g,h=ca(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:da(a-1)+g}}function na(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function oa(a,b,c){return null!=a?a:null!=b?b:c}function pa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function qa(a){var b,c,d,e,f=[];if(!a._d){for(d=pa(a),a._w&&null==a._a[ad]&&null==a._a[_c]&&ra(a),a._dayOfYear&&(e=oa(a._a[$c],d[$c]),a._dayOfYear>da(e)&&(a._pf._overflowDayOfYear=!0),c=ca(e,0,a._dayOfYear),a._a[_c]=c.getUTCMonth(),a._a[ad]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[bd]&&0===a._a[cd]&&0===a._a[dd]&&0===a._a[ed]&&(a._nextDay=!0,a._a[bd]=0),a._d=(a._useUTC?ca:ba).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[bd]=24)}}function ra(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=oa(b.GG,a._a[$c],ga(za(),1,4).year),d=oa(b.W,1),e=oa(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=oa(b.gg,a._a[$c],ga(za(),f,g).year),d=oa(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=ma(c,d,e,g,f),a._a[$c]=h.year,a._dayOfYear=h.dayOfYear}function sa(b){if(b._f===a.ISO_8601)return void _(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=J(b._f,b._locale).match(Gc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(L(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Jc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),P(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[bd]<=12&&(b._pf.bigHour=void 0),b._a[bd]=ta(b._locale,b._a[bd],b._meridiem),qa(b),X(b)}function ta(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function ua(a){var b,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=l({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=c(),b._f=a._f[f],sa(b),j(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,d=b));h(a,d||b)}function va(a){if(!a._d){var b=z(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],qa(a)}}function wa(a){var b,c=a._i,e=a._f;return a._locale=a._locale||w(a._l),null===c||void 0===e&&""===c?k({nullInput:!0}):("string"==typeof c&&(a._i=c=a._locale.preparse(c)),n(c)?new m(X(c)):(d(e)?ua(a):e?sa(a):xa(a),b=new m(X(a)),b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b))}function xa(b){var c=b._i;void 0===c?b._d=new Date:e(c)?b._d=new Date(+c):"string"==typeof c?aa(b):d(c)?(b._a=f(c.slice(0),function(a){return parseInt(a,10)}),qa(b)):"object"==typeof c?va(b):"number"==typeof c?b._d=new Date(c):a.createFromInputFallback(b)}function ya(a,b,d,e,f){var g={};return"boolean"==typeof d&&(e=d,d=void 0),g._isAMomentObject=!0,g._useUTC=g._isUTC=f,g._l=d,g._i=a,g._f=b,g._strict=e,g._pf=c(),wa(g)}function za(a,b,c,d){return ya(a,b,c,d,!1)}function Aa(a,b){var c,e;if(1===b.length&&d(b[0])&&(b=b[0]),!b.length)return za();for(c=b[0],e=1;e<b.length;++e)b[e][a](c)&&(c=b[e]);return c}function Ba(){var a=[].slice.call(arguments,0);return Aa("isBefore",a)}function Ca(){var a=[].slice.call(arguments,0);return Aa("isAfter",a)}function Da(a){var b=z(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=w(),this._bubble()}function Ea(a){return a instanceof Da}function Fa(a,b){F(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+E(~~(a/60),2)+b+E(~~a%60,2)})}function Ga(a){var b=(a||"").match(Vc)||[],c=b[b.length-1]||[],d=(c+"").match(qd)||["-",0,0],e=+(60*d[1])+o(d[2]);return"+"===d[0]?e:-e}function Ha(b,c){var d,f;return c._isUTC?(d=c.clone(),f=(n(b)||e(b)?+b:+za(b))-+d,d._d.setTime(+d._d+f),a.updateOffset(d,!1),d):za(b).local();return c._isUTC?za(b).zone(c._offset||0):za(b).local()}function Ia(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ja(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ga(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ia(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Za(this,Ua(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ia(this)}function Ka(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function La(a){return this.utcOffset(0,a)}function Ma(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ia(this),"m")),this}function Na(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ga(this._i)),this}function Oa(a){return a=a?za(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Pa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Qa(){if(this._a){var a=this._isUTC?i(this._a):za(this._a);return this.isValid()&&p(this._a,a.toArray())>0}return!1}function Ra(){return!this._isUTC}function Sa(){return this._isUTC}function Ta(){return this._isUTC&&0===this._offset}function Ua(a,b){var c,d,e,f=a,h=null;return Ea(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(h=rd.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:o(h[ad])*c,h:o(h[bd])*c,m:o(h[cd])*c,s:o(h[dd])*c,ms:o(h[ed])*c}):(h=sd.exec(a))?(c="-"===h[1]?-1:1,f={y:Va(h[2],c),M:Va(h[3],c),d:Va(h[4],c),h:Va(h[5],c),m:Va(h[6],c),s:Va(h[7],c),w:Va(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Xa(za(f.from),za(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Da(f),Ea(a)&&g(a,"_locale")&&(d._locale=a._locale),d}function Va(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Wa(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Xa(a,b){var c;return b=Ha(b,a),a.isBefore(b)?c=Wa(a,b):(c=Wa(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function Ya(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||($(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ua(c,d),Za(this,e,a),this}}function Za(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&C(b,"Date",B(b,"Date")+g*d),h&&U(b,B(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function $a(a){var b=a||za(),c=Ha(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,za(b)))}function _a(){return new m(this)}function ab(a,b){var c;return b=y("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=n(a)?a:za(a),+this>+a):(c=n(a)?+a:+za(a),c<+this.clone().startOf(b))}function bb(a,b){var c;return b=y("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=n(a)?a:za(a),+a>+this):(c=n(a)?+a:+za(a),+this.clone().endOf(b)<c)}function cb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function db(a,b){var c;return b=y(b||"millisecond"),"millisecond"===b?(a=n(a)?a:za(a),+this===+a):(c=+za(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function eb(a){return 0>a?Math.ceil(a):Math.floor(a)}function fb(a,b,c){var d,e,f=Ha(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=y(b),"year"===b||"month"===b||"quarter"===b?(e=gb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:eb(e)}function gb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function hb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ib(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():I(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):I(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jb(b){var c=I(this,b||a.defaultFormat);return this.localeData().postformat(c)}function kb(a,b){return Ua({to:this,from:a}).locale(this.locale()).humanize(!b)}function lb(a){return this.from(za(),a)}function mb(a){var b;return void 0===a?this._locale._abbr:(b=w(a),null!=b&&(this._locale=b),this)}function nb(){return this._locale}function ob(a){switch(a=y(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function pb(a){return a=y(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function qb(){return+this._d-6e4*(this._offset||0)}function rb(){return Math.floor(+this/1e3)}function sb(){return this._offset?new Date(+this):this._d}function tb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function ub(){return j(this)}function vb(){return h({},this._pf)}function wb(){return this._pf.overflow}function xb(a,b){F(0,[a,a.length],0,b)}function yb(a,b,c){return ga(za([a,11,31+b-c]),b,c).week}function zb(a){var b=ga(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Ab(a){var b=ga(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Bb(){return yb(this.year(),1,4)}function Cb(){var a=this.localeData()._week;return yb(this.year(),a.dow,a.doy)}function Db(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Fb(a){return this._weekdays[a.day()]}function Gb(a){return this._weekdaysShort[a.day()]}function Hb(a){return this._weekdaysMin[a.day()]}function Ib(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=za([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Jb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Eb(a,this.localeData()),this.add(a-b,"d")):b}function Kb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Lb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Mb(a,b){F(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Nb(a,b){return b._meridiemParse}function Ob(a){return"p"===(a+"").toLowerCase().charAt(0)}function Pb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Qb(a){F(0,[a,3],0,"millisecond")}function Rb(){return this._isUTC?"UTC":""}function Sb(){return this._isUTC?"Coordinated Universal Time":""}function Tb(a){return za(1e3*a)}function Ub(){return za.apply(null,arguments).parseZone()}function Vb(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function Wb(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b}function Xb(){return this._invalidDate}function Yb(a){return this._ordinal.replace("%d",a)}function Zb(a){return a}function $b(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function _b(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function ac(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function bc(a,b,c,d){var e=w(),f=i().set(d,b);return e[c](f,a)}function cc(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return bc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=bc(a,f,c,e);return g}function dc(a,b){return cc(a,b,"months",12,"month")}function ec(a,b){return cc(a,b,"monthsShort",12,"month")}function fc(a,b){return cc(a,b,"weekdays",7,"day")}function gc(a,b){return cc(a,b,"weekdaysShort",7,"day")}function hc(a,b){return cc(a,b,"weekdaysMin",7,"day")}function ic(){var a=this._data;return this._milliseconds=Od(this._milliseconds),this._days=Od(this._days),this._months=Od(this._months),a.milliseconds=Od(a.milliseconds),a.seconds=Od(a.seconds),a.minutes=Od(a.minutes),a.hours=Od(a.hours),a.months=Od(a.months),a.years=Od(a.years),this}function jc(a,b,c,d){var e=Ua(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function kc(a,b){return jc(this,a,b,1)}function lc(a,b){return jc(this,a,b,-1)}function mc(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;return g.milliseconds=d%1e3,a=eb(d/1e3),g.seconds=a%60,b=eb(a/60),g.minutes=b%60,c=eb(b/60),g.hours=c%24,e+=eb(c/24),h=eb(nc(e)),e-=eb(oc(h)),f+=eb(e/30),e%=30,h+=eb(f/12),f%=12,g.days=e,g.months=f,g.years=h,this}function nc(a){return 400*a/146097}function oc(a){return 146097*a/400}function pc(a){var b,c,d=this._milliseconds;if(a=y(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+12*nc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(oc(this._months/12)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 24*b*60+d/6e4;case"second":return 24*b*60*60+d/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+d;default:throw new Error("Unknown unit "+a)}}function qc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*o(this._months/12)}function rc(a){return function(){return this.as(a)}}function sc(a){return a=y(a),this[a+"s"]()}function tc(a){return function(){return this._data[a]}}function uc(){return eb(this.days()/7)}function vc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function wc(a,b,c){var d=Ua(a).abs(),e=ce(d.as("s")),f=ce(d.as("m")),g=ce(d.as("h")),h=ce(d.as("d")),i=ce(d.as("M")),j=ce(d.as("y")),k=e<de.s&&["s",e]||1===f&&["m"]||f<de.m&&["mm",f]||1===g&&["h"]||g<de.h&&["hh",g]||1===h&&["d"]||h<de.d&&["dd",h]||1===i&&["M"]||i<de.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,vc.apply(null,k)}function xc(a,b){return void 0===de[a]?!1:void 0===b?de[a]:(de[a]=b,!0)}function yc(a){var b=this.localeData(),c=wc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function zc(){var a=ee(this.years()),b=ee(this.months()),c=ee(this.days()),d=ee(this.hours()),e=ee(this.minutes()),f=ee(this.seconds()+this.milliseconds()/1e3),g=this.asSeconds();return g?(0>g?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}var Ac,Bc,Cc=a.momentProperties=[],Dc=!1,Ec={},Fc={},Gc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Hc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ic={},Jc={},Kc=/\d/,Lc=/\d\d/,Mc=/\d{3}/,Nc=/\d{4}/,Oc=/[+-]?\d{6}/,Pc=/\d\d?/,Qc=/\d{1,3}/,Rc=/\d{1,4}/,Sc=/[+-]?\d{1,6}/,Tc=/\d+/,Uc=/[+-]?\d+/,Vc=/Z|[+-]\d\d:?\d\d/gi,Wc=/[+-]?\d+(\.\d{1,3})?/,Xc=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Yc={},Zc={},$c=0,_c=1,ad=2,bd=3,cd=4,dd=5,ed=6;F("M",["MM",2],"Mo",function(){return this.month()+1}),F("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),F("MMMM",0,0,function(a){return this.localeData().months(this,a)}),x("month","M"),K("M",Pc),K("MM",Pc,Lc),K("MMM",Xc),K("MMMM",Xc),N(["M","MM"],function(a,b){b[_c]=o(a)-1}),N(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[_c]=e:c._pf.invalidMonth=a});var fd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),gd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),hd={};a.suppressDeprecationWarnings=!1;var id=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,jd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],kd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ld=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=Z("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),F(0,["YY",2],0,function(){return this.year()%100}),F(0,["YYYY",4],0,"year"),F(0,["YYYYY",5],0,"year"),F(0,["YYYYYY",6,!0],0,"year"),x("year","y"),K("Y",Uc),K("YY",Pc,Lc),K("YYYY",Rc,Nc),K("YYYYY",Sc,Oc),K("YYYYYY",Sc,Oc),N(["YYYY","YYYYY","YYYYYY"],$c),N("YY",function(b,c){c[$c]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return o(a)+(o(a)>68?1900:2e3)};var md=A("FullYear",!1);F("w",["ww",2],"wo","week"),F("W",["WW",2],"Wo","isoWeek"),x("week","w"),x("isoWeek","W"),K("w",Pc),K("ww",Pc,Lc),K("W",Pc),K("WW",Pc,Lc),O(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=o(a)});var nd={dow:0,doy:6};F("DDD",["DDDD",3],"DDDo","dayOfYear"),x("dayOfYear","DDD"),K("DDD",Qc),K("DDDD",Mc),N(["DDD","DDDD"],function(a,b,c){c._dayOfYear=o(a)}),a.ISO_8601=function(){};var od=Z("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=za.apply(null,arguments);return this>a?this:a}),pd=Z("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=za.apply(null,arguments);return a>this?this:a});Fa("Z",":"),Fa("ZZ",""),K("Z",Vc),K("ZZ",Vc),N(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ga(a)});var qd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var rd=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,sd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ua.fn=Da.prototype;var td=Ya(1,"add"),ud=Ya(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var vd=Z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});F(0,["gg",2],0,function(){return this.weekYear()%100}),F(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xb("gggg","weekYear"),xb("ggggg","weekYear"),xb("GGGG","isoWeekYear"),xb("GGGGG","isoWeekYear"),x("weekYear","gg"),x("isoWeekYear","GG"),K("G",Uc),K("g",Uc),K("GG",Pc,Lc),K("gg",Pc,Lc),K("GGGG",Rc,Nc),K("gggg",Rc,Nc),K("GGGGG",Sc,Oc),K("ggggg",Sc,Oc),O(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=o(a)}),O(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),F("Q",0,0,"quarter"),x("quarter","Q"),K("Q",Kc),N("Q",function(a,b){b[_c]=3*(o(a)-1)}),F("D",["DD",2],"Do","date"),x("date","D"),K("D",Pc),K("DD",Pc,Lc),K("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),N(["D","DD"],ad),N("Do",function(a,b){b[ad]=o(a.match(Pc)[0],10)});var wd=A("Date",!0);F("d",0,"do","day"),F("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),F("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),F("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),F("e",0,0,"weekday"),F("E",0,0,"isoWeekday"),x("day","d"),x("weekday","e"),x("isoWeekday","E"),K("d",Pc),K("e",Pc),K("E",Pc),K("dd",Xc),K("ddd",Xc),K("dddd",Xc),O(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:c._pf.invalidWeekday=a}),O(["d","e","E"],function(a,b,c,d){b[d]=o(a)});var xd="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),yd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),zd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");F("H",["HH",2],0,"hour"),F("h",["hh",2],0,function(){return this.hours()%12||12}),Mb("a",!0),Mb("A",!1),x("hour","h"),K("a",Nb),K("A",Nb),K("H",Pc),K("h",Pc),K("HH",Pc,Lc),K("hh",Pc,Lc),N(["H","HH"],bd),N(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),N(["h","hh"],function(a,b,c){b[bd]=o(a),c._pf.bigHour=!0});var Ad=/[ap]\.?m?\.?/i,Bd=A("Hours",!0);F("m",["mm",2],0,"minute"),x("minute","m"),K("m",Pc),K("mm",Pc,Lc),N(["m","mm"],cd);var Cd=A("Minutes",!1);F("s",["ss",2],0,"second"),x("second","s"),K("s",Pc),K("ss",Pc,Lc),N(["s","ss"],dd);var Dd=A("Seconds",!1);F("S",0,0,function(){return~~(this.millisecond()/100)}),F(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Qb("SSS"),Qb("SSSS"),x("millisecond","ms"),K("S",Qc,Kc),K("SS",Qc,Lc),K("SSS",Qc,Mc),K("SSSS",Tc),N(["S","SS","SSS","SSSS"],function(a,b){b[ed]=o(1e3*("0."+a))});var Ed=A("Milliseconds",!1);F("z",0,0,"zoneAbbr"),F("zz",0,0,"zoneName");var Fd=m.prototype;Fd.add=td,Fd.calendar=$a,Fd.clone=_a,Fd.diff=fb,Fd.endOf=pb,Fd.format=jb,Fd.from=kb,Fd.fromNow=lb,Fd.get=D,Fd.invalidAt=wb,Fd.isAfter=ab,Fd.isBefore=bb,Fd.isBetween=cb,Fd.isSame=db,Fd.isValid=ub,Fd.lang=vd,Fd.locale=mb,Fd.localeData=nb,Fd.max=pd,Fd.min=od,Fd.parsingFlags=vb,Fd.set=D,Fd.startOf=ob,Fd.subtract=ud,Fd.toArray=tb,Fd.toDate=sb,Fd.toISOString=ib,Fd.toJSON=ib,Fd.toString=hb,Fd.unix=rb,Fd.valueOf=qb,Fd.year=md,Fd.isLeapYear=fa,Fd.weekYear=zb,Fd.isoWeekYear=Ab,Fd.quarter=Fd.quarters=Db,Fd.month=V,Fd.daysInMonth=W,Fd.week=Fd.weeks=ka,Fd.isoWeek=Fd.isoWeeks=la,Fd.weeksInYear=Cb,Fd.isoWeeksInYear=Bb,Fd.date=wd,Fd.day=Fd.days=Jb,Fd.weekday=Kb,Fd.isoWeekday=Lb,Fd.dayOfYear=na,Fd.hour=Fd.hours=Bd,Fd.minute=Fd.minutes=Cd,Fd.second=Fd.seconds=Dd,Fd.millisecond=Fd.milliseconds=Ed,Fd.utcOffset=Ja,Fd.utc=La,Fd.local=Ma,Fd.parseZone=Na,Fd.hasAlignedHourOffset=Oa,Fd.isDST=Pa,Fd.isDSTShifted=Qa,Fd.isLocal=Ra,Fd.isUtcOffset=Sa,Fd.isUtc=Ta,Fd.isUTC=Ta,Fd.zoneAbbr=Rb,Fd.zoneName=Sb,Fd.dates=Z("dates accessor is deprecated. Use date instead.",wd),Fd.months=Z("months accessor is deprecated. Use month instead",V),Fd.years=Z("years accessor is deprecated. Use year instead",md),Fd.zone=Z("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Ka);var Gd=Fd,Hd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Id={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},Jd="Invalid date",Kd="%d",Ld=/\d{1,2}/,Md={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Nd=q.prototype;Nd._calendar=Hd,Nd.calendar=Vb,Nd._longDateFormat=Id,Nd.longDateFormat=Wb,Nd._invalidDate=Jd,Nd.invalidDate=Xb,Nd._ordinal=Kd,Nd.ordinal=Yb,Nd._ordinalParse=Ld,
Nd.preparse=Zb,Nd.postformat=Zb,Nd._relativeTime=Md,Nd.relativeTime=$b,Nd.pastFuture=_b,Nd.set=ac,Nd.months=R,Nd._months=fd,Nd.monthsShort=S,Nd._monthsShort=gd,Nd.monthsParse=T,Nd.week=ha,Nd._week=nd,Nd.firstDayOfYear=ja,Nd.firstDayOfWeek=ia,Nd.weekdays=Fb,Nd._weekdays=xd,Nd.weekdaysMin=Hb,Nd._weekdaysMin=zd,Nd.weekdaysShort=Gb,Nd._weekdaysShort=yd,Nd.weekdaysParse=Ib,Nd.isPM=Ob,Nd._meridiemParse=Ad,Nd.meridiem=Pb,u("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===o(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=Z("moment.lang is deprecated. Use moment.locale instead.",u),a.langData=Z("moment.langData is deprecated. Use moment.localeData instead.",w);var Od=Math.abs,Pd=rc("ms"),Qd=rc("s"),Rd=rc("m"),Sd=rc("h"),Td=rc("d"),Ud=rc("w"),Vd=rc("M"),Wd=rc("y"),Xd=tc("milliseconds"),Yd=tc("seconds"),Zd=tc("minutes"),$d=tc("hours"),_d=tc("days"),ae=tc("months"),be=tc("years"),ce=Math.round,de={s:45,m:45,h:22,d:26,M:11},ee=Math.abs,fe=Da.prototype;fe.abs=ic,fe.add=kc,fe.subtract=lc,fe.as=pc,fe.asMilliseconds=Pd,fe.asSeconds=Qd,fe.asMinutes=Rd,fe.asHours=Sd,fe.asDays=Td,fe.asWeeks=Ud,fe.asMonths=Vd,fe.asYears=Wd,fe.valueOf=qc,fe._bubble=mc,fe.get=sc,fe.milliseconds=Xd,fe.seconds=Yd,fe.minutes=Zd,fe.hours=$d,fe.days=_d,fe.weeks=uc,fe.months=ae,fe.years=be,fe.humanize=yc,fe.toISOString=zc,fe.toString=zc,fe.toJSON=zc,fe.locale=mb,fe.localeData=nb,fe.toIsoString=Z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",zc),fe.lang=vd,F("X",0,0,"unix"),F("x",0,0,"valueOf"),K("x",Uc),K("X",Wc),N("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),N("x",function(a,b,c){c._d=new Date(o(a))}),a.version="2.10.2",b(za),a.fn=Gd,a.min=Ba,a.max=Ca,a.utc=i,a.unix=Tb,a.months=dc,a.isDate=e,a.locale=u,a.invalid=k,a.duration=Ua,a.isMoment=n,a.weekdays=fc,a.parseZone=Ub,a.localeData=w,a.isDuration=Ea,a.monthsShort=ec,a.weekdaysMin=hc,a.defineLocale=v,a.weekdaysShort=gc,a.normalizeUnits=y,a.relativeTimeThreshold=xc;var ge=a;return ge});

/* ----- jquery.daterangepicker.js ----- */

// daterangepicker.js
// version : 0.0.9
// author : Chunlong Liu
// last updated at: 2015-10-30
// license : MIT
// www.jszen.com

(function (factory) {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define(['jquery', 'moment'], factory);
		} else if (typeof exports === 'object' && typeof module !== 'undefined') {
			// CommonJS. Register as a module
			module.exports = factory(require('jquery'), require('moment'));
		} else {
			// Browser globals
			factory(jQuery, moment);
		}
}(function ($, moment)
{

	$.dateRangePickerLanguages =
	{
		'default':  //default language: English
		{
			'selected': 'Selected:',
			'day':'Day',
			'days': 'Days',
			'apply': 'Close',
			'week-1' : 'mo',
			'week-2' : 'tu',
			'week-3' : 'we',
			'week-4' : 'th',
			'week-5' : 'fr',
			'week-6' : 'sa',
			'week-7' : 'su',
			'week-number': 'W',
			'month-name': ['january','february','march','april','may','june','july','august','september','october','november','december'],
			'shortcuts' : 'Shortcuts',
			'custom-values': 'Custom Values',
			'past': 'Past',
			'following':'Following',
			'previous' : 'Previous',
			'prev-week' : 'Week',
			'prev-month' : 'Month',
			'prev-year' : 'Year',
			'next':'Next',
			'next-week':'Week',
			'next-month':'Month',
			'next-year':'Year',
			'less-than' : 'Date range should not be more than %d days',
			'more-than' : 'Date range should not be less than %d days',
			'default-more' : 'Please select a date range longer than %d days',
			'default-single' : 'Please select a date',
			'default-less' : 'Please select a date range less than %d days',
			'default-range' : 'Please select a date range between %d and %d days',
			'default-default': 'Please select a date range',
			'time':'Time',
			'hour':'Hour',
			'minute':'Minute'
		},
		'az':
		{
			'selected': 'Seçildi:',
			'day':' gün',
			'days': ' gün',
			'apply': 'tətbiq',
			'week-1' : '1',
			'week-2' : '2',
			'week-3' : '3',
			'week-4' : '4',
			'week-5' : '5',
			'week-6' : '6',
			'week-7' : '7',
			'month-name': ['yanvar','fevral','mart','aprel','may','iyun','iyul','avqust','sentyabr','oktyabr','noyabr','dekabr'],
			'shortcuts' : 'Qısayollar',
			'past': 'Keçmiş',
			'following':'Növbəti',
			'previous' : '&nbsp;&nbsp;&nbsp;',
			'prev-week' : 'Öncəki həftə',
			'prev-month' : 'Öncəki ay',
			'prev-year' : 'Öncəki il',
			'next': '&nbsp;&nbsp;&nbsp;',
			'next-week':'Növbəti həftə',
			'next-month':'Növbəti ay',
			'next-year':'Növbəti il',
			'less-than' : 'Tarix aralığı %d gündən çox olmamalıdır',
			'more-than' : 'Tarix aralığı %d gündən az olmamalıdır',
			'default-more' : '%d gündən çox bir tarix seçin',
			'default-single' : 'Tarix seçin',
			'default-less' : '%d gündən az bir tarix seçin',
			'default-range' : '%d və %d gün aralığında tarixlər seçin',
			'default-default': 'Tarix aralığı seçin'
		},
		'cn':  //simplified chinese
		{
			'selected': '已选择:',
			'day':'天',
			'days': '天',
			'apply': '确定',
			'week-1' : '一',
			'week-2' : '二',
			'week-3' : '三',
			'week-4' : '四',
			'week-5' : '五',
			'week-6' : '六',
			'week-7' : '日',
			'week-number': '周',
			'month-name': ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
			'shortcuts' : '快捷选择',
			'past': '过去',
			'following':'将来',
			'previous' : '&nbsp;&nbsp;&nbsp;',
			'prev-week' : '上周',
			'prev-month' : '上个月',
			'prev-year' : '去年',
			'next': '&nbsp;&nbsp;&nbsp;',
			'next-week':'下周',
			'next-month':'下个月',
			'next-year':'明年',
			'less-than' : '所选日期范围不能大于%d天',
			'more-than' : '所选日期范围不能小于%d天',
			'default-more' : '请选择大于%d天的日期范围',
			'default-less' : '请选择小于%d天的日期范围',
			'default-range' : '请选择%d天到%d天的日期范围',
			'default-single':'请选择一个日期',
			'default-default': '请选择一个日期范围',
			'time':'时间',
			'hour':'小时',
			'minute':'分钟'
		},
		'cz':
		{
			'selected': 'Vybráno:',
			'day':'Den',
			'days': 'Dny',
			'apply': 'Zavřít',
			'week-1' : 'po',
			'week-2' : 'út',
			'week-3' : 'st',
			'week-4' : 'čt',
			'week-5' : 'pá',
			'week-6' : 'so',
			'week-7' : 'ne',
			'month-name': ['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],
			'shortcuts' : 'Zkratky',
			'past': 'po',
			'following':'následující',
			'previous' : 'předchozí',
			'prev-week' : 'týden',
			'prev-month' : 'měsíc',
			'prev-year' : 'rok',
			'next':'další',
			'next-week':'týden',
			'next-month':'měsíc',
			'next-year':'rok',
			'less-than' : 'Rozsah data by neměl být větší než %d dnů',
			'more-than' : 'Rozsah data by neměl být menší než %d dnů',
			'default-more' : 'Prosím zvolte rozsah data větší než %d dnů',
			'default-single' : 'Prosím zvolte datum',
			'default-less' : 'Prosím zvolte rozsah data menší než %d dnů',
			'default-range' : 'Prosím zvolte rozsah data mezi %d a %d dny',
			'default-default': 'Prosím zvolte rozsah data'
		},
		'de':
		{
			'selected': 'Auswahl:',
			'day':'Tag',
			'days': 'Tage',
			'apply': 'Schließen',
			'week-1' : 'mo',
			'week-2' : 'di',
			'week-3' : 'mi',
			'week-4' : 'do',
			'week-5' : 'fr',
			'week-6' : 'sa',
			'week-7' : 'so',
			'month-name': ['januar','februar','märz','april','mai','juni','juli','august','september','oktober','november','dezember'],
			'shortcuts' : 'Schnellwahl',
			'past': 'Vorherige',
			'following':'Folgende',
			'previous' : 'Vorherige',
			'prev-week' : 'Woche',
			'prev-month' : 'Monat',
			'prev-year' : 'Jahr',
			'next':'Nächste',
			'next-week':'Woche',
			'next-month':'Monat',
			'next-year':'Jahr',
			'less-than' : 'Datumsbereich darf nicht größer sein als %d Tage',
			'more-than' : 'Datumsbereich darf nicht kleiner sein als %d Tage',
			'default-more' : 'Bitte mindestens %d Tage auswählen',
			'default-single' : 'Bitte ein Datum auswählen',
			'default-less' : 'Bitte weniger als %d Tage auswählen',
			'default-range' : 'Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen',
			'default-default': 'Bitte ein Start- und Enddatum auswählen',
			'Time': 'Zeit',
			'hour': 'Stunde',
			'minute': 'Minute',
		},
		'es':
		{
			'selected': 'Seleccionado:',
			'day':'Dia',
			'days': 'Dias',
			'apply': 'Cerrar',
			'week-1' : 'lu',
			'week-2' : 'ma',
			'week-3' : 'mi',
			'week-4' : 'ju',
			'week-5' : 'vi',
			'week-6' : 'sa',
			'week-7' : 'do',
			'month-name': ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
			'shortcuts' : 'Accesos directos',
			'past': 'Pasado',
			'following':'Siguiente',
			'previous' : 'Anterior',
			'prev-week' : 'Semana',
			'prev-month' : 'Mes',
			'prev-year' : 'Año',
			'next':'Siguiente',
			'next-week':'Semana',
			'next-month':'Mes',
			'next-year':'Año',
			'less-than' : 'El rango no deberia ser mayor de %d dias',
			'more-than' : 'El rango no deberia ser menor de %d dias',
			'default-more' : 'Por favor selecciona un rango mayor a %d dias',
			'default-single' : 'Por favor selecciona un dia',
			'default-less' : 'Por favor selecciona un rango menor a %d dias',
			'default-range' : 'Por favor selecciona un rango entre %d y %d dias',
			'default-default': 'Por favor selecciona un rango de fechas.'
		},
		'fr':
		{
			'selected': 'Sélection:',
			'day':'Jour',
			'days': 'Jours',
			'apply': 'Fermer',
			'week-1' : 'lu',
			'week-2' : 'ma',
			'week-3' : 'me',
			'week-4' : 'je',
			'week-5' : 've',
			'week-6' : 'sa',
			'week-7' : 'di',
			'month-name': ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
			'shortcuts' : 'Raccourcis',
			'past': 'Passé',
			'following':'Suivant',
			'previous' : 'Précédent',
			'prev-week' : 'Semaine',
			'prev-month' : 'Mois',
			'prev-year' : 'Année',
			'next':'Suivant',
			'next-week':'Semaine',
			'next-month':'Mois',
			'next-year':'Année',
			'less-than' : 'L\'intervalle ne doit pas être supérieure à %d jours',
			'more-than' : 'L\'intervalle ne doit pas être inférieure à %d jours',
			'default-more' : 'Merci de choisir une intervalle supérieure à %d jours',
			'default-single' : 'Merci de choisir une date',
			'default-less' : 'Merci de choisir une intervalle inférieure %d jours',
			'default-range' : 'Merci de choisir une intervalle comprise entre %d et %d jours',
			'default-default': 'Merci de choisir une date'
		},
		'hu':
		{
			'selected': 'Kiválasztva:',
			'day':'Nap',
			'days': 'Nap',
			'apply': 'Ok',
			'week-1' : 'h',
			'week-2' : 'k',
			'week-3' : 'sz',
			'week-4' : 'cs',
			'week-5' : 'p',
			'week-6' : 'sz',
			'week-7' : 'v',
			'month-name': ['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],
			'shortcuts' : 'Gyorsválasztó',
			'past': 'Múlt',
			'following':'Következő',
			'previous' : 'Előző',
			'prev-week' : 'Hét',
			'prev-month' : 'Hónap',
			'prev-year' : 'Év',
			'next':'Következő',
			'next-week':'Hét',
			'next-month':'Hónap',
			'next-year':'Év',
			'less-than' : 'A kiválasztás nem lehet több %d napnál',
			'more-than' : 'A kiválasztás nem lehet több %d napnál',
			'default-more' : 'Válassz ki egy időszakot ami hosszabb mint %d nap',
			'default-single' : 'Válassz egy napot',
			'default-less' : 'Válassz ki egy időszakot ami rövidebb mint %d nap',
			'default-range' : 'Válassz ki egy %d - %d nap hosszú időszakot',
			'default-default': 'Válassz ki egy időszakot'
		},
		'it':
		{
			'selected': 'Selezionati:',
			'day':'Giorno',
			'days': 'Giorni',
			'apply': 'Chiudi',
			'week-1' : 'lu',
			'week-2' : 'ma',
			'week-3' : 'me',
			'week-4' : 'gi',
			'week-5' : 've',
			'week-6' : 'sa',
			'week-7' : 'do',
			'month-name': ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
			'shortcuts' : 'Scorciatoie',
			'past': 'Scorso',
			'following':'Successivo',
			'previous' : 'Precedente',
			'prev-week' : 'Settimana',
			'prev-month' : 'Mese',
			'prev-year' : 'Anno',
			'next':'Prossimo',
			'next-week':'Settimana',
			'next-month':'Mese',
			'next-year':'Anno',
			'less-than' : 'L\'intervallo non dev\'essere maggiore di %d giorni',
			'more-than' : 'L\'intervallo non dev\'essere minore di %d giorni',
			'default-more' : 'Seleziona un intervallo maggiore di %d giorni',
			'default-single' : 'Seleziona una data',
			'default-less' : 'Seleziona un intervallo minore di %d giorni',
			'default-range' : 'Seleziona un intervallo compreso tra i %d e i %d giorni',
			'default-default': 'Seleziona un intervallo di date'
		},
		'no':
		{
			'selected': 'Valgt:',
			'day':'Dag',
			'days': 'Dager',
			'apply': 'Lukk',
			'week-1' : 'ma',
			'week-2' : 'ti',
			'week-3' : 'on',
			'week-4' : 'to',
			'week-5' : 'fr',
			'week-6' : 'lø',
			'week-7' : 'sø',
			'month-name': ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
			'shortcuts' : 'Snarveier',
			'custom-values': 'Egendefinerte Verdier',
			'past': 'Over', // Not quite sure about the context of this one
			'following':'Følger',
			'previous' : 'Forrige',
			'prev-week' : 'Uke',
			'prev-month' : 'Måned',
			'prev-year' : 'År',
			'next':'Neste',
			'next-week':'Uke',
			'next-month':'Måned',
			'next-year':'År',
			'less-than' : 'Datoperioden skal ikkje være lengre enn %d dager',
			'more-than' : 'Datoperioden skal ikkje være kortere enn %d dager',
			'default-more' : 'Vennligst velg ein datoperiode lengre enn %d dager',
			'default-single' : 'Vennligst velg ein dato',
			'default-less' : 'Vennligst velg ein datoperiode mindre enn %d dager',
			'default-range' : 'Vennligst velg ein datoperiode mellom %d og %d dager',
			'default-default': 'Vennligst velg ein datoperiode',
			'time':'Tid',
			'hour':'Time',
			'minute':'Minutter'
		},
		'nl':
		{
			'selected': 'Geselecteerd:',
			'day':'Dag',
			'days': 'Dagen',
			'apply': 'Ok',
			'week-1' : 'ma',
			'week-2' : 'di',
			'week-3' : 'wo',
			'week-4' : 'do',
			'week-5' : 'vr',
			'week-6' : 'za',
			'week-7' : 'zo',
			'month-name': ['januari','februari','maart','april','mei','juni','juli','augustus','september','october','november','december'],
			'shortcuts' : 'Snelkoppelingen',
			'custom-values': 'Aangepaste waarden',
			'past': 'Verleden',
			'following':'Komend',
			'previous' : 'Vorige',
			'prev-week' : 'Week',
			'prev-month' : 'Maand',
			'prev-year' : 'Jaar',
			'next':'Volgende',
			'next-week':'Week',
			'next-month':'Maand',
			'next-year':'Jaar',
			'less-than' : 'Interval moet langer dan %d dagen zijn',
			'more-than' : 'Interval mag niet minder dan %d dagen zijn',
			'default-more' : 'Selecteer een interval langer dan %dagen',
			'default-single' : 'Selecteer een datum',
			'default-less' : 'Selecteer een interval minder dan %d dagen',
			'default-range' : 'Selecteer een interval tussen %d en %d dagen',
			'default-default': 'Selecteer een interval',
			'time':'Tijd',
			'hour':'Uur',
			'minute':'Minuut'
		},
		'ru':
		{
			'selected': 'Выбрано:',
			'day': 'День',
			'days': 'Дней',
			'apply': 'Закрыть',
			'week-1': 'пн',
			'week-2': 'вт',
			'week-3': 'ср',
			'week-4': 'чт',
			'week-5': 'пт',
			'week-6': 'сб',
			'week-7': 'вс',
			'month-name': ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'],
			'shortcuts': 'Быстрый выбор',
			'past': 'Прошедшие',
			'following': 'Следующие',
			'previous': '&nbsp;&nbsp;&nbsp;',
			'prev-week': 'Неделя',
			'prev-month': 'Месяц',
			'prev-year': 'Год',
			'next': '&nbsp;&nbsp;&nbsp;',
			'next-week': 'Неделя',
			'next-month': 'Месяц',
			'next-year': 'Год',
			'less-than': 'Диапазон не может быть больше %d дней',
			'more-than': 'Диапазон не может быть меньше %d дней',
			'default-more': 'Пожалуйста выберите диапазон больше %d дней',
			'default-single': 'Пожалуйста выберите дату',
			'default-less': 'Пожалуйста выберите диапазон меньше %d дней',
			'default-range': 'Пожалуйста выберите диапазон между %d и %d днями',
			'default-default': 'Пожалуйста выберите диапазон'
		},
		'pl':
		{
			'selected': 'Wybrany:',
			'day':'Dzień',
			'days': 'Dni',
			'apply': 'Zamknij',
			'week-1' : 'pon',
			'week-2' : 'wt',
			'week-3' : 'śr',
			'week-4' : 'czw',
			'week-5' : 'pt',
			'week-6' : 'so',
			'week-7' : 'nd',
			'month-name': ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'],
			'shortcuts' : 'Skróty',
			'custom-values': 'Niestandardowe wartości',
			'past': 'Przeszłe',
			'following':'Następne',
			'previous' : 'Poprzednie',
			'prev-week' : 'tydzień',
			'prev-month' : 'miesiąc',
			'prev-year' : 'rok',
			'next':'Następny',
			'next-week':'tydzień',
			'next-month':'miesiąc',
			'next-year':'rok',
			'less-than' : 'Okres nie powinien być dłuższy niż %d dni',
			'more-than' : 'Okres nie powinien być krótszy niż  %d ni',
			'default-more' : 'Wybierz okres dłuższy niż %d dni',
			'default-single' : 'Wybierz datę',
			'default-less' : 'Wybierz okres krótszy niż %d dni',
			'default-range' : 'Wybierz okres trwający od %d do %d dni',
			'default-default': 'Wybierz okres',
			'time':'Czas',
			'hour':'Godzina',
			'minute':'Minuta'
		}
	};

	$.fn.dateRangePicker = function(opt)
	{
		if (!opt) opt = {};
		opt = $.extend(true,
		{
			autoClose: false,
			format: 'YYYY-MM-DD',
			separator: ' to ',
			language: 'auto',
			startOfWeek: 'sunday',// or monday
			getValue: function()
			{
				return $(this).val();
			},
			setValue: function(s)
			{
				if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
				{
					$(this).val(s);
				}
			},
			startDate: false,
			endDate: false,
			time: {
				enabled: false
			},
			minDays: 0,
			maxDays: 0,
			showShortcuts: false,
			shortcuts:
			{
				//'prev-days': [1,3,5,7],
				// 'next-days': [3,5,7],
				//'prev' : ['week','month','year'],
				// 'next' : ['week','month','year']
			},
			customShortcuts : [],
			inline:false,
			container:'body',
			alwaysOpen:false,
			singleDate:false,
			lookBehind: false,
			batchMode: false,
			duration: 200,
			stickyMonths: false,
			dayDivAttrs: [],
			dayTdAttrs: [],
			selectForward: false,
			selectBackward: false,
			applyBtnClass: '',
			singleMonth: 'auto',
			hoveringTooltip: function(days, startTime, hoveringTime)
			{
				return days > 1 ? days + ' ' + lang('days') : '';
			},
			showTopbar: true,
			swapTime: false,
			showWeekNumbers: false,
			getWeekNumber: function(date) //date will be the first day of a week
			{
				return moment(date).format('w');
			}
		},opt);

		opt.start = false;
		opt.end = false;

		opt.startWeek = false;

		//detect a touch device
		opt.isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

		//if it is a touch device, hide hovering tooltip
		if (opt.isTouchDevice) opt.hoveringTooltip = false;

		//show one month on mobile devices
		if (opt.singleMonth == 'auto') opt.singleMonth = $(window).width() < 480;
		if (opt.singleMonth) opt.stickyMonths = false;

		if (opt.singleDate) opt.singleMonth = true;

		if (!opt.showTopbar) opt.autoClose = true;

		if (opt.startDate && typeof opt.startDate == 'string') opt.startDate = moment(opt.startDate,opt.format).toDate();
		if (opt.endDate && typeof opt.endDate == 'string') opt.endDate = moment(opt.endDate,opt.format).toDate();

		var langs = getLanguages();
		var box;
		var initiated = false;
		var self = this;
		var selfDom = $(self).get(0);
		var domChangeTimer;

		$(this).unbind('.datepicker').bind('click.datepicker',function(evt)
		{
			var isOpen = box.is(':visible');
			if(!isOpen) open(opt.duration);
		}).bind('change.datepicker', function(evt)
		{
			checkAndSetDefaultValue();
		}).bind('keyup.datepicker',function()
		{
			try{ clearTimeout(domChangeTimer); }catch(e){}
			domChangeTimer = setTimeout(function()
			{
				checkAndSetDefaultValue();
			},2000);
		});

		init_datepicker.call(this);

		if (opt.alwaysOpen)
		{
			open(0);
		}

		// expose some api
		$(this).data('dateRangePicker',
		{
			setDateRange : function(d1,d2,silent)
			{
				if (typeof d1 == 'string' && typeof d2 == 'string')
				{
					d1 = moment(d1,opt.format).toDate();
					d2 = moment(d2,opt.format).toDate();
				}
				setDateRange(d1,d2,silent);
			},
			clear: clearSelection,
			close: closeDatePicker,
			open: open,
			getDatePicker: getDatePicker,
			destroy: function()
			{
				$(self).unbind('.datepicker');
				$(self).data('dateRangePicker','');
				$(self).data('date-picker-opened',null);
				box.remove();
				$(window).unbind('resize.datepicker',calcPosition);
				$(document).unbind('click.datepicker',closeDatePicker);
			}
		});

		$(window).bind('resize.datepicker',calcPosition);

		return this;
		
		function IsOwnDatePickerClicked(evt, selfObj)
		{
			return ( selfObj.contains(evt.target) || evt.target == selfObj  || (selfObj.childNodes != undefined && $.inArray(evt.target, selfObj.childNodes)>=0))
		}

		function init_datepicker()
		{
			var self = this;

			if ($(this).data('date-picker-opened'))
			{
				closeDatePicker();
				return;
			}
			$(this).data('date-picker-opened',true);


			box = createDom().hide();
			box.append('<div class="date-range-length-tip"></div>');
			box.delegate('.day', 'mouseleave', function()
			{
				box.find('.date-range-length-tip').hide();
			});

			$(opt.container).append(box);

			if (!opt.inline)
			{
				calcPosition();
			}
			else
			{
				box.addClass("inline-wrapper");
			}

			if (opt.alwaysOpen)
			{
				box.find('.apply-btn').hide();
			}

			var defaultTime = opt.defaultTime ? opt.defaultTime : new Date();
			if (opt.lookBehind)
			{
				if (opt.startDate && compare_month(defaultTime, opt.startDate) < 0 ) defaultTime = nextMonth(moment(opt.startDate).toDate());
				if (opt.endDate && compare_month(defaultTime,opt.endDate) > 0 ) defaultTime = moment(opt.endDate).toDate();

				showMonth(prevMonth(defaultTime),'month1');
				showMonth(defaultTime,'month2');

			}
			else
			{
				if (opt.startDate && compare_month(defaultTime,opt.startDate) < 0 ) defaultTime = moment(opt.startDate).toDate();
				if (opt.endDate && compare_month(nextMonth(defaultTime),opt.endDate) > 0 ) defaultTime = prevMonth(moment(opt.endDate).toDate());

				showMonth(defaultTime,'month1');
				showMonth(nextMonth(defaultTime),'month2');
			}

			if (opt.singleDate)
			{
				if (opt.startDate && compare_month(defaultTime,opt.startDate) < 0 ) defaultTime = moment(opt.startDate).toDate();
				if (opt.endDate && compare_month(defaultTime,opt.endDate) > 0 ) defaultTime = moment(opt.endDate).toDate();

				showMonth(defaultTime,'month1');
			}

			if (opt.time.enabled)
			{
				if ((opt.startDate && opt.endDate) || (opt.start && opt.end)) {
					showTime(moment(opt.start || opt.startDate).toDate(),'time1');
					showTime(moment(opt.end || opt.endDate).toDate(),'time2');
				} else {
					showTime(defaultTime,'time1');
					showTime(defaultTime,'time2');
				}
			}

			//showSelectedInfo();


			var defaultTopText = '';
			if (opt.singleDate)
				defaultTopText = lang('default-single');
			else if (opt.minDays && opt.maxDays)
				defaultTopText = lang('default-range');
			else if (opt.minDays)
				defaultTopText = lang('default-more');
			else if (opt.maxDays)
				defaultTopText = lang('default-less');
			else
				defaultTopText = lang('default-default');

			box.find('.default-top').html( defaultTopText.replace(/\%d/,opt.minDays).replace(/\%d/,opt.maxDays));
			if (opt.singleMonth)
			{
				box.addClass('single-month');
			}
			else
			{
				box.addClass('two-months');
			}


			setTimeout(function()
			{
				updateCalendarWidth();
				initiated = true;
			},0);

			box.click(function(evt)
			{
				evt.stopPropagation();
			});

			//if user click other place of the webpage, close date range picker window
			$(document).bind('click.datepicker',function(evt)
			{
				if (!IsOwnDatePickerClicked(evt, self[0])) {
					if (box.is(':visible')) closeDatePicker();
				}
			});

			box.find('.next').click(function()
			{
				if(!opt.stickyMonths)
					gotoNextMonth(this);
				else
					gotoNextMonth_stickily(this);
			});

			function gotoNextMonth(self)
			{
				var isMonth2 = $(self).parents('table').hasClass('month2');
				var month = isMonth2 ? opt.month2 : opt.month1;
				month = nextMonth(month);
				if (!opt.singleMonth && !opt.singleDate && !isMonth2 && compare_month(month,opt.month2) >= 0 || isMonthOutOfBounds(month)) return;
				showMonth(month,isMonth2 ? 'month2' : 'month1');
				showGap();
			}

			function gotoNextMonth_stickily(self) {
				var nextMonth1 = nextMonth(opt.month1);
				var nextMonth2 = nextMonth(opt.month2);
				if(isMonthOutOfBounds(nextMonth2)) return;
				if (!opt.singleDate && compare_month(nextMonth1,nextMonth2) >= 0) return;
				showMonth(nextMonth1, 'month1');
				showMonth(nextMonth2, 'month2');
				showSelectedDays();
			}


			box.find('.prev').click(function()
			{
				if(!opt.stickyMonths)
					gotoPrevMonth(this);
				else
					gotoPrevMonth_stickily(this);
			});

			function gotoPrevMonth(self) {
				var isMonth2 = $(self).parents('table').hasClass('month2');
				var month = isMonth2 ? opt.month2 : opt.month1;
				month = prevMonth(month);
				if (isMonth2 && compare_month(month,opt.month1) <= 0 || isMonthOutOfBounds(month)) return;
				showMonth(month,isMonth2 ? 'month2' : 'month1');
				showGap();
			}

			function gotoPrevMonth_stickily(self)
			{
				var prevMonth1 = prevMonth(opt.month1);
				var prevMonth2 = prevMonth(opt.month2);
				if(isMonthOutOfBounds(prevMonth1)) return;
				if(!opt.singleDate && compare_month(prevMonth2,prevMonth1) <= 0) return;
				showMonth(prevMonth2, 'month2');
				showMonth(prevMonth1, 'month1');
				showSelectedDays();
			}

			box.delegate('.day','click', function(evt)
			{
				dayClicked($(this));
			});

			box.delegate('.day','mouseenter',function(evt)
			{
				dayHovering($(this));
			});

			box.delegate('.week-number', 'click', function(evt)
			{
				weekNumberClicked($(this));
			});

			box.attr('unselectable', 'on')
			.css('user-select', 'none')
			.bind('selectstart', function(e)
			{
				e.preventDefault(); return false;
			});

			box.find('.apply-btn').click(function()
			{
				closeDatePicker();
				var dateRange = getDateString(new Date(opt.start))+ opt.separator +getDateString(new Date(opt.end));
				$(self).trigger('datepicker-apply',
				{
					'value': dateRange,
					'date1' : new Date(opt.start),
					'date2' : new Date(opt.end)
				});
			});

			box.find('[custom]').click(function()
			{
				var valueName = $(this).attr('custom');
				opt.start = false;
				opt.end = false;
				box.find('.day.checked').removeClass('checked');
				opt.setValue.call(selfDom, valueName);
				checkSelectionValid();
				showSelectedInfo(true);
				showSelectedDays();
				if (opt.autoClose) closeDatePicker();
			});

			box.find('[shortcut]').click(function()
			{
				var shortcut = $(this).attr('shortcut');
				var end = new Date(),start = false;
				if (shortcut.indexOf('day') != -1)
				{
					var day = parseInt(shortcut.split(',',2)[1],10);
					start = new Date(new Date().getTime() + 86400000*day);
					end = new Date(end.getTime() + 86400000*(day>0?1:-1) );
				}
				else if (shortcut.indexOf('week')!= -1)
				{
					var dir = shortcut.indexOf('prev,') != -1 ? -1 : 1;

					if (dir == 1)
						var stopDay = opt.startOfWeek == 'monday' ? 1 : 0;
					else
						var stopDay = opt.startOfWeek == 'monday' ? 0 : 6;

					end = new Date(end.getTime() - 86400000);
					while(end.getDay() != stopDay) end = new Date(end.getTime() + dir*86400000);
					start = new Date(end.getTime() + dir*86400000*6);
				}
				else if (shortcut.indexOf('month') != -1)
				{
					var dir = shortcut.indexOf('prev,') != -1 ? -1 : 1;
					if (dir == 1)
						start = nextMonth(end);
					else
						start = prevMonth(end);
					start.setDate(1);
					end = nextMonth(start);
					end.setDate(1);
					end = new Date(end.getTime() - 86400000);
				}
				else if (shortcut.indexOf('year') != -1)
				{
					var dir = shortcut.indexOf('prev,') != -1 ? -1 : 1;
					start = new Date();
					start.setFullYear(end.getFullYear() + dir);
					start.setMonth(0);
					start.setDate(1);
					end.setFullYear(end.getFullYear() + dir);
					end.setMonth(11);
					end.setDate(31);
				}
				else if (shortcut == 'custom')
				{
					var name = $(this).html();
					if (opt.customShortcuts && opt.customShortcuts.length > 0)
					{
						for(var i=0;i<opt.customShortcuts.length;i++)
						{
							var sh = opt.customShortcuts[i];
							if (sh.name == name)
							{
								var data = [];
								// try
								// {
									data = sh['dates'].call();
								//}catch(e){}
								if (data && data.length == 2)
								{
									start = data[0];
									end = data[1];
								}

								// if only one date is specified then just move calendars there
								// move calendars to show this date's month and next months
								if (data && data.length == 1)
								{
									movetodate = data[0];
									showMonth(movetodate,'month1');
									showMonth(nextMonth(movetodate),'month2');
									showGap();
								}

								break;
							}
						}
					}
				}
				if (start && end)
				{
					setDateRange(start,end);
					checkSelectionValid();
				}
			});

			box.find(".time1 input[type=range]").bind("change mousemove", function (e) {
				var target = e.target,
					hour = target.name == "hour" ? $(target).val().replace(/^(\d{1})$/, "0$1") : undefined,
					min = target.name == "minute" ? $(target).val().replace(/^(\d{1})$/, "0$1") : undefined;
				setTime("time1", hour, min);
			});

			box.find(".time2 input[type=range]").bind("change mousemove", function (e) {
				var target = e.target,
					hour = target.name == "hour" ? $(target).val().replace(/^(\d{1})$/, "0$1") : undefined,
					min = target.name == "minute" ? $(target).val().replace(/^(\d{1})$/, "0$1") : undefined;
				setTime("time2", hour, min);
			});

		}


		function calcPosition()
		{
			if (!opt.inline)
			{
				var offset = $(self).offset();
						if ($(opt.container).css("position") == "relative")
						{
							var containerOffset = $(opt.container).offset();
							box.css(
							{
								top: offset.top - containerOffset.top + $(self).outerHeight() + 4,
								left: offset.left - containerOffset.left
							});
						}
						else
						{
							if (offset.left < 460) //left to right
							{
								box.css(
								{
									top: offset.top+$(self).outerHeight() + parseInt($('body').css('border-top') || 0,10 ),
									left: offset.left
								});
							}
							else
							{
								box.css(
								{
									top: offset.top+$(self).outerHeight() + parseInt($('body').css('border-top') || 0,10 ),
									left: offset.left + $(self).width() - box.width() - 16
								});
							}
						}
			}
		}

		// Return the date picker wrapper element
		function getDatePicker()
		{
			return box;
		}

		function open(animationTime)
		{
			calcPosition();
			checkAndSetDefaultValue();
			box.slideDown(animationTime, function(){
				$(self).trigger('datepicker-opened', {relatedTarget: box});
			});
			$(self).trigger('datepicker-open', {relatedTarget: box});
			showGap();
			updateCalendarWidth();
		}

		function checkAndSetDefaultValue()
		{
			var __default_string = opt.getValue.call(selfDom);
			var defaults = __default_string ? __default_string.split( opt.separator ) : '';

			if (defaults && ((defaults.length==1 && opt.singleDate) || defaults.length>=2))
			{
				var ___format = opt.format;
				if (___format.match(/Do/))
				{

					___format = ___format.replace(/Do/,'D');
					defaults[0] = defaults[0].replace(/(\d+)(th|nd|st)/,'$1');
					if(defaults.length >= 2){
						defaults[1] = defaults[1].replace(/(\d+)(th|nd|st)/,'$1');
					}
				}
				// set initiated  to avoid triggerring datepicker-change event
				initiated = false;
				if(defaults.length >= 2){
					setDateRange(moment(defaults[0], ___format, moment.locale(opt.language)).toDate(),moment(defaults[1], ___format, moment.locale(opt.language)).toDate());
				}
				else if(defaults.length==1 && opt.singleDate){
					setSingleDate(moment(defaults[0], ___format, moment.locale(opt.language)).toDate());
				}

				initiated = true;
			}
		}

		function updateCalendarWidth()
		{
			var gapMargin = box.find('.gap').css('margin-left');
			if (gapMargin) gapMargin = parseInt(gapMargin);
			var w1 = box.find('.month1').width();
			var w2 = box.find('.gap').width() + ( gapMargin ? gapMargin*2 : 0 );
			var w3 = box.find('.month2').width();
			box.find('.month-wrapper').width(w1 + w2 + w3);
		}

		function renderTime (name, date) {
			box.find("." + name + " input[type=range].hour-range").val(moment(date).hours());
			box.find("." + name + " input[type=range].minute-range").val(moment(date).minutes());
			setTime(name, moment(date).format("HH"), moment(date).format("mm"));
		}

		function changeTime (name, date) {
			opt[name] = parseInt(
				moment(parseInt(date))
					.startOf('day')
					.add(moment(opt[name + "Time"]).format("HH"), 'h')
					.add(moment(opt[name + "Time"]).format("mm"), 'm').valueOf()
				);
		}

		function swapTime () {
			renderTime("time1", opt.start);
			renderTime("time2", opt.end);
		}

		function setTime (name, hour, minute) 
		{
			hour && (box.find("." + name + " .hour-val").text(hour));
			minute && (box.find("." + name + " .minute-val").text(minute));
			switch (name) {
				case "time1":
					if (opt.start) {
						setRange("start", moment(opt.start));
					}
					setRange("startTime", moment(opt.startTime || moment().valueOf()));
					break;
				case "time2":
					if (opt.end) {
						setRange("end", moment(opt.end));
					}
					setRange("endTime", moment(opt.endTime || moment().valueOf()));
					break;
			}
			function setRange(name, timePoint) {
				var h = timePoint.format("HH"),
					m = timePoint.format("mm");
				opt[name] = timePoint
					.startOf('day')
					.add(hour || h, "h")
					.add(minute || m, "m")
					.valueOf();
			}
			checkSelectionValid();
			showSelectedInfo();
			showSelectedDays();
		}

		function clearSelection()
		{
			opt.start = false;
			opt.end = false;
			box.find('.day.checked').removeClass('checked');
			box.find('.day.last-date-selected').removeClass('last-date-selected');
			box.find('.day.first-date-selected').removeClass('first-date-selected');
			opt.setValue.call(selfDom, '');
			checkSelectionValid();
			showSelectedInfo();
			showSelectedDays();
		}

		function handleStart(time)
		{
			var r = time;
			if  (opt.batchMode === 'week-range')
			{
				if (opt.startOfWeek === 'monday')
				{
					r = moment(parseInt(time)).startOf('isoweek').valueOf();
				}
				else
				{
					r = moment(parseInt(time)).startOf('week').valueOf();
				}
			}
			else if (opt.batchMode === 'month-range')
			{
				r = moment(parseInt(time)).startOf('month').valueOf();
			}
			return r;
		}

		function handleEnd(time)
		{
			var r = time;
			if  (opt.batchMode === 'week-range')
			{
				if (opt.startOfWeek === 'monday')
				{
					r = moment(parseInt(time)).endOf('isoweek').valueOf();
				}
				else
				{
					r = moment(parseInt(time)).endOf('week').valueOf();
				}
			}
			else if (opt.batchMode === 'month')
			{
				r = moment(parseInt(time)).endOf('month').valueOf();
			}
			return r;
		}


		function dayClicked(day)
		{
			if (day.hasClass('invalid')) return;
			var time = day.attr('time');
			day.addClass('checked');
			if ( opt.singleDate )
			{
				opt.start = time;
				opt.end = false;
			}
			else if  (opt.batchMode === 'week')
			{
				if (opt.startOfWeek === 'monday') {
					opt.start = moment(parseInt(time)).startOf('isoweek').valueOf();
					opt.end = moment(parseInt(time)).endOf('isoweek').valueOf();
				} else {
					opt.end = moment(parseInt(time)).endOf('week').valueOf();
					opt.start = moment(parseInt(time)).startOf('week').valueOf();
				}
			}
			else if  (opt.batchMode === 'workweek')
			{
				opt.start = moment(parseInt(time)).day(1).valueOf();
				opt.end = moment(parseInt(time)).day(5).valueOf();
			}
			else if  (opt.batchMode === 'weekend')
			{
				opt.start = moment(parseInt(time)).day(6).valueOf();
				opt.end = moment(parseInt(time)).day(7).valueOf();
			}
			else if (opt.batchMode === 'month')
			{
				opt.start = moment(parseInt(time)).startOf('month').valueOf();
				opt.end = moment(parseInt(time)).endOf('month').valueOf();
			}
			else if ((opt.start && opt.end) || (!opt.start && !opt.end) )
			{
				opt.start = handleStart(time);
				opt.end = false;
			}
			else if (opt.start)
			{
				opt.end = handleEnd(time);
				if (opt.time.enabled) {
					changeTime("end", opt.end);
				}
			}

			//Update time in case it is enabled and timestamps are available
			if(opt.time.enabled) {
				if(opt.start) {
					changeTime("start", opt.start);
				}
				if(opt.end) {
					changeTime("end", opt.end);
				}
			}

			//In case the start is after the end, swap the timestamps
			if (!opt.singleDate && opt.start && opt.end && opt.start > opt.end)
			{
				var tmp = opt.end;
				opt.end = handleEnd(opt.start);
				opt.start = handleStart(tmp);
				if (opt.time.enabled && opt.swapTime) {
					swapTime();
				}
			}

			opt.start = parseInt(opt.start);
			opt.end = parseInt(opt.end);

			clearHovering();
			if (opt.start && !opt.end)
			{
				$(self).trigger('datepicker-first-date-selected',
				{
					'date1' : new Date(opt.start)
				});
				dayHovering(day);
			}
			updateSelectableRange(time);

			checkSelectionValid();
			showSelectedInfo();
			showSelectedDays();
			autoclose();
		}

		
		function weekNumberClicked(weekNumberDom)
		{
			var thisTime = parseInt(weekNumberDom.attr('data-start-time'),10);
			if (!opt.startWeek)
			{
				opt.startWeek = thisTime;
				weekNumberDom.addClass('week-number-selected');
				var date1 = new Date(thisTime);
				opt.start = moment(date1).day(opt.startOfWeek == 'monday' ? 1 : 0).toDate();
				opt.end = moment(date1).day(opt.startOfWeek == 'monday' ? 7 : 6).toDate();
			}
			else
			{
				box.find('.week-number-selected').removeClass('week-number-selected');
				var date1 = new Date(thisTime < opt.startWeek ? thisTime : opt.startWeek);
				var date2 = new Date(thisTime < opt.startWeek ? opt.startWeek : thisTime);
				opt.startWeek = false;
				opt.start = moment(date1).day(opt.startOfWeek == 'monday' ? 1 : 0).toDate();
				opt.end = moment(date2).day(opt.startOfWeek == 'monday' ? 7 : 6).toDate();
			}
			updateSelectableRange();
			checkSelectionValid();
			showSelectedInfo();
			showSelectedDays();
			autoclose();
		}

		function isValidTime(time) 
		{
			time = parseInt(time, 10);
			if (opt.startDate && compare_day(time, opt.startDate) < 0) return false;
			if (opt.endDate && compare_day(time, opt.endDate) > 0) return false;

			if (opt.start && !opt.end && !opt.singleDate) 
			{
				//check maxDays and minDays setting
				if (opt.maxDays > 0 && countDays(time, opt.start) > opt.maxDays) return false;
				if (opt.minDays > 0 && countDays(time, opt.start) < opt.minDays) return false;

				//check selectForward and selectBackward
				if (opt.selectForward && time < opt.start ) return false;
				if (opt.selectBackward && time > opt.start) return false;

				//check disabled days
				if (opt.beforeShowDay && typeof opt.beforeShowDay == 'function')
				{
					var valid = true;
					var timeTmp = time;
					while( countDays(timeTmp, opt.start) > 1 )
					{
						var arr = opt.beforeShowDay( new Date(timeTmp) );
						if (!arr[0])
						{
							valid = false;
							break;
						}
						if (timeTmp > opt.start) timeTmp -= 86400000;
						if (timeTmp < opt.start) timeTmp += 86400000;
					}
					if (!valid) return false;
				}
			}
			return true;
		}


		function updateSelectableRange()
		{
			box.find('.day.invalid.tmp').removeClass('tmp invalid').addClass('valid');
			if (opt.start && !opt.end)
			{
				box.find('.day.toMonth.valid').each(function()
				{
					var time = parseInt($(this).attr('time'), 10);
					if (!isValidTime(time))
						$(this).addClass('invalid tmp').removeClass('valid');
					else
						$(this).addClass('valid tmp').removeClass('invalid');
				});
			}

			return true;
		}


		function dayHovering(day)
		{
			var hoverTime = parseInt(day.attr('time'));
			var tooltip = '';

			if (day.hasClass('has-tooltip') && day.attr('data-tooltip'))
			{
				tooltip = '<span style="white-space:nowrap">'+day.attr('data-tooltip')+'</span>';
			}
			else if (!day.hasClass('invalid'))
			{
				if (opt.singleDate)
				{
					box.find('.day.hovering').removeClass('hovering');
					day.addClass('hovering');
				}
				else
				{
					box.find('.day').each(function()
					{
						var time = parseInt($(this).attr('time')),
							start = opt.start,
							end = opt.end;

						if ( time == hoverTime )
						{
							$(this).addClass('hovering');
						}
						else
						{
							$(this).removeClass('hovering');
						}

						if (
							( opt.start && !opt.end )
							&&
							(
								( opt.start < time && hoverTime >= time )
								||
								( opt.start > time && hoverTime <= time )
							)
						)
						{
							$(this).addClass('hovering');
						}
						else
						{
							$(this).removeClass('hovering');
						}
					});

					if (opt.start && !opt.end)
					{
						var days = countDays(hoverTime, opt.start);
						if (opt.hoveringTooltip)
						{
							if (typeof opt.hoveringTooltip == 'function')
							{
								tooltip = opt.hoveringTooltip(days, opt.start, hoverTime);
							}
							else if (opt.hoveringTooltip === true && days > 1)
							{
								tooltip = days + ' ' + lang('days');
							}
						}
					}
				}
			}

			if (tooltip)
			{
				var posDay = day.offset();
				var posBox = box.offset();

				var _left = posDay.left - posBox.left;
				var _top = posDay.top - posBox.top;
				_left += day.width()/2;


				var $tip = box.find('.date-range-length-tip');
				var w = $tip.css({'visibility':'hidden', 'display':'none'}).html(tooltip).width();
				var h = $tip.height();
				_left -= w/2;
				_top -= h;
				setTimeout(function()
				{
					$tip.css({left:_left, top:_top, display:'block','visibility':'visible'});
				},10);
			}
			else
			{
				box.find('.date-range-length-tip').hide();
			}
		}

		function clearHovering()
		{
			box.find('.day.hovering').removeClass('hovering');
			box.find('.date-range-length-tip').hide();
		}

		function autoclose () {
			if (opt.singleDate === true) {
				if (initiated && opt.start )
				{
					if (opt.autoClose) closeDatePicker();
				}
			} else {
				if (initiated && opt.start && opt.end)
				{
					if (opt.autoClose) closeDatePicker();
				}
			}
		}

		function checkSelectionValid()
		{
			var days = Math.ceil( (opt.end - opt.start) / 86400000 ) + 1;
			if (opt.singleDate) { // Validate if only start is there
				if (opt.start && !opt.end)
					box.find('.drp_top-bar').removeClass('error').addClass('normal');
				else
					box.find('.drp_top-bar').removeClass('error').removeClass('normal');
			}
			else if ( opt.maxDays && days > opt.maxDays)
			{
				opt.start = false;
				opt.end = false;
				box.find('.day').removeClass('checked');
				box.find('.drp_top-bar').removeClass('normal').addClass('error').find('.error-top').html( lang('less-than').replace('%d',opt.maxDays) );
			}
			else if ( opt.minDays && days < opt.minDays)
			{
				opt.start = false;
				opt.end = false;
				box.find('.day').removeClass('checked');
				box.find('.drp_top-bar').removeClass('normal').addClass('error').find('.error-top').html( lang('more-than').replace('%d',opt.minDays) );
			}
			else
			{
				if (opt.start || opt.end)
					box.find('.drp_top-bar').removeClass('error').addClass('normal');
				else
					box.find('.drp_top-bar').removeClass('error').removeClass('normal');
			}

			if ( (opt.singleDate && opt.start && !opt.end) || (!opt.singleDate && opt.start && opt.end) )
			{
				box.find('.apply-btn').removeClass('disabled');
			}
			else
			{
				box.find('.apply-btn').addClass('disabled');
			}

			if (opt.batchMode)
			{
				if ( (opt.start && opt.startDate && compare_day(opt.start, opt.startDate) < 0)
					|| (opt.end && opt.endDate && compare_day(opt.end, opt.endDate) > 0)  )
				{
					opt.start = false;
					opt.end = false;
					box.find('.day').removeClass('checked');
				}
			}
		}

		function showSelectedInfo(forceValid,silent)
		{
			box.find('.start-day').html('...');
			box.find('.end-day').html('...');
			box.find('.selected-days').hide();
			if (opt.start)
			{
				box.find('.start-day').html(getDateString(new Date(parseInt(opt.start))));
			}
			if (opt.end)
			{
				box.find('.end-day').html(getDateString(new Date(parseInt(opt.end))));
			}

			if (opt.start && opt.singleDate)
			{
				box.find('.apply-btn').removeClass('disabled');
				var dateRange = getDateString(new Date(opt.start));
				opt.setValue.call(selfDom, dateRange, getDateString(new Date(opt.start)), getDateString(new Date(opt.end)));

				if (initiated && !silent)
				{
					$(self).trigger('datepicker-change',
					{
						'value': dateRange,
						'date1' : new Date(opt.start)
					});
				}
			}
			else if (opt.start && opt.end)
			{
				box.find('.selected-days').show().find('.selected-days-num').html(countDays(opt.end, opt.start));
				box.find('.apply-btn').removeClass('disabled');
				var dateRange = getDateString(new Date(opt.start))+ opt.separator +getDateString(new Date(opt.end));
				opt.setValue.call(selfDom,dateRange, getDateString(new Date(opt.start)), getDateString(new Date(opt.end)));
				if (initiated && !silent)
				{
					$(self).trigger('datepicker-change',
					{
						'value': dateRange,
						'date1' : new Date(opt.start),
						'date2' : new Date(opt.end)
					});
				}
			}
			else if (forceValid)
			{
				box.find('.apply-btn').removeClass('disabled');
			}
			else
			{
				box.find('.apply-btn').addClass('disabled');
			}
		}

		function countDays(start,end)
		{
			return Math.abs( daysFrom1970(start) - daysFrom1970(end) ) + 1;
		}

		function setDateRange(date1,date2,silent)
		{
			if (date1.getTime() > date2.getTime())
			{
				var tmp = date2;
				date2 = date1;
				date1 = tmp;
				tmp = null;
			}
			var valid = true;
			if (opt.startDate && compare_day(date1,opt.startDate) < 0) valid = false;
			if (opt.endDate && compare_day(date2,opt.endDate) > 0) valid = false;
			if (!valid)
			{
				showMonth(opt.startDate,'month1');
				showMonth(nextMonth(opt.startDate),'month2');
				showGap();
				return;
			}

			opt.start = date1.getTime();
			opt.end = date2.getTime();

			if (opt.time.enabled)
			{
				renderTime("time1", date1);
				renderTime("time2", date2);
			}

			if (opt.stickyMonths || (compare_day(date1,date2) > 0 && compare_month(date1,date2) == 0))
			{
				if (opt.lookBehind) {
					date1 = prevMonth(date2);
				} else {
					date2 = nextMonth(date1);
				}
			}

			if(opt.stickyMonths && compare_month(date2,opt.endDate) > 0) {
				date1 = prevMonth(date1);
				date2 = prevMonth(date2);
			}

			if (!opt.stickyMonths) {
				if (compare_month(date1,date2) == 0)
				{
					if (opt.lookBehind) {
						date1 = prevMonth(date2);
					} else {
						date2 = nextMonth(date1);
					}
				}
			}

			showMonth(date1,'month1');
			showMonth(date2,'month2');
			showGap();
			checkSelectionValid();
			showSelectedInfo(false,silent);
			autoclose();
		}

		function setSingleDate(date1)
		{

			var valid = true;
			if (opt.startDate && compare_day(date1,opt.startDate) < 0) valid = false;
			if (opt.endDate && compare_day(date1,opt.endDate) > 0) valid = false;
			if (!valid)
			{
				showMonth(opt.startDate,'month1');
				return;
			}

			opt.start = date1.getTime();


			if (opt.time.enabled) {
				renderTime("time1", date1);

			}
			showMonth(date1,'month1');
			//showMonth(date2,'month2');
			showGap();
			showSelectedInfo();
			autoclose();
		}

		function showSelectedDays()
		{
			if (!opt.start && !opt.end) return;
			box.find('.day').each(function()
			{
				var time = parseInt($(this).attr('time')),
					start = opt.start,
					end = opt.end;
				if (opt.time.enabled) {
					time = moment(time).startOf('day').valueOf();
					start = moment(start || moment().valueOf()).startOf('day').valueOf();
					end = moment(end || moment().valueOf()).startOf('day').valueOf();
				}
				if (
					(opt.start && opt.end && end >= time && start <= time )
					|| ( opt.start && !opt.end && moment(start).format('YYYY-MM-DD') == moment(time).format('YYYY-MM-DD') )
				)
				{
					$(this).addClass('checked');
				}
				else
				{
					$(this).removeClass('checked');
				}

				//add first-date-selected class name to the first date selected
				if ( opt.start && moment(start).format('YYYY-MM-DD') == moment(time).format('YYYY-MM-DD') )
				{
					$(this).addClass('first-date-selected');
				}
				else
				{
					$(this).removeClass('first-date-selected');
				}
				//add last-date-selected
				if ( opt.end && moment(end).format('YYYY-MM-DD') == moment(time).format('YYYY-MM-DD') )
				{
					$(this).addClass('last-date-selected');
				}
				else
				{
					$(this).removeClass('last-date-selected');
				}
			});

			box.find('.week-number').each(function()
			{
				if ($(this).attr('data-start-time') == opt.startWeek)
				{
					$(this).addClass('week-number-selected');
				}
			});
		}

		function showMonth(date,month)
		{
			date = moment(date).toDate();
			var monthName = nameMonth(date.getMonth());
			box.find('.'+month+' .month-name').html(monthName+' '+date.getFullYear());
			box.find('.'+month+' tbody').html(createMonthHTML(date));
			opt[month] = date;
			updateSelectableRange();
		}

		function showTime(date,name)
		{
			box.find('.' + name).append(getTimeHTML());
			renderTime(name, date);
		}

		function nameMonth(m)
		{
			return lang('month-name')[m];
		}

		function getDateString(d)
		{
			return moment(d).format(opt.format);
		}

		function showGap()
		{
			showSelectedDays();
			var m1 = parseInt(moment(opt.month1).format('YYYYMM'));
			var m2 = parseInt(moment(opt.month2).format('YYYYMM'));
			var p = Math.abs(m1 - m2);
			var shouldShow = (p > 1 && p !=89);
			if (shouldShow)
			{
				box.addClass('has-gap').removeClass('no-gap').find('.gap').css('visibility','visible');
			}
			else
			{
				box.removeClass('has-gap').addClass('no-gap').find('.gap').css('visibility','hidden');
			}
			var h1 = box.find('table.month1').height();
			var h2 = box.find('table.month2').height();
			box.find('.gap').height(Math.max(h1,h2)+10);
		}

		function closeDatePicker()
		{
			if (opt.alwaysOpen) return;
			$(box).slideUp(opt.duration,function()
			{
				$(self).data('date-picker-opened',false);
				$(self).trigger('datepicker-closed', {relatedTarget: box});
			});
			//$(document).unbind('.datepicker');
			$(self).trigger('datepicker-close', {relatedTarget: box});
		}

		function compare_month(m1,m2)
		{
			var p = parseInt(moment(m1).format('YYYYMM')) - parseInt(moment(m2).format('YYYYMM'));
			if (p > 0 ) return 1;
			if (p == 0) return 0;
			return -1;
		}

		function compare_day(m1,m2)
		{
			var p = parseInt(moment(m1).format('YYYYMMDD')) - parseInt(moment(m2).format('YYYYMMDD'));
			if (p > 0 ) return 1;
			if (p == 0) return 0;
			return -1;
		}

		function nextMonth(month)
		{
			return moment(month).add(1, 'months').toDate();
		}

		function prevMonth(month)
		{
			return moment(month).add(-1, 'months').toDate();
		}

		function getTimeHTML()
		{
			return '<div>\
						<span>'+lang('Time')+': <span class="hour-val">00</span>:<span class="minute-val">00</span></span>\
					</div>\
					<div class="hour">\
						<label>'+lang('Hour')+': <input type="range" class="hour-range" name="hour" min="0" max="23"></label>\
					</div>\
					<div class="minute">\
						<label>'+lang('Minute')+': <input type="range" class="minute-range" name="minute" min="0" max="59"></label>\
					</div>';
		}

		function createDom()
		{
			var html = '<div class="date-picker-wrapper';
			if ( opt.extraClass ) html += ' '+opt.extraClass+' ';
			if ( opt.singleDate ) html += ' single-date ';
			if ( !opt.showShortcuts ) html += ' no-shortcuts ';
			if ( !opt.showTopbar ) html += ' no-topbar ';
			if ( opt.customTopBar) html += ' custom-topbar ';
			html += '">';

			if (opt.showTopbar)
			{
				html += '<div class="drp_top-bar">';

				if (opt.customTopBar)
				{
					if (typeof opt.customTopBar == 'function') opt.customTopBar = opt.customTopBar();
					html += '<div class="custom-top">'+opt.customTopBar+'</div>';
				}
				else
				{
					html += '<div class="normal-top">\
							<span style="color:#333">'+lang('selected')+' </span> <b class="start-day">...</b>';
					if ( ! opt.singleDate ) {
						html += ' <span class="separator-day">'+opt.separator+'</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> '+lang('days')+')</i>'
					}
					html += '</div>';
					html += '<div class="error-top">error</div>\
						<div class="default-top">default</div>';
				}

				html += '<input type="button" class="apply-btn disabled'+ getApplyBtnClass() +'" value="'+lang('apply')+'" />';
				html += '</div>'
			}

			var _colspan = opt.showWeekNumbers ? 6 : 5;
			html += '<div class="month-wrapper">'
				+'<table class="month1" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;"><span class="prev">&lt;</span></th><th colspan="'+_colspan+'" class="month-name"></th><th style="width:27px;">' + (opt.singleDate || !opt.stickyMonths ? '<span class="next">&gt;</span>': '') + '</th></tr><tr class="week-name">'+getWeekHead()+'</thead><tbody></tbody></table>';

			if ( hasMonth2() )
			{
				html += '<div class="gap">'+getGapHTML()+'</div>'
					+'<table class="month2" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;">' + (!opt.stickyMonths ? '<span class="prev">&lt;</span>': '') + '</th><th colspan="'+_colspan+'" class="month-name"></th><th style="width:27px;"><span class="next">&gt;</span></th></tr><tr class="week-name">'+getWeekHead()+'</thead><tbody></tbody></table>'
			}
				//+'</div>'
			html +=	'<div style="clear:both;height:0;font-size:0;"></div>'
				+'<div class="time">'
				+'<div class="time1"></div>'
			if ( ! opt.singleDate ) {
				html += '<div class="time2"></div>'
			}
			html += '</div>'
				+'<div style="clear:both;height:0;font-size:0;"></div>'
				+'</div>';

			html += '<div class="footer">';
			if (opt.showShortcuts)
			{
				html += '<div class="shortcuts"><b>'+lang('shortcuts')+'</b>';

				var data = opt.shortcuts;
				if (data)
				{
					if (data['prev-days'] && data['prev-days'].length > 0)
					{
						html += '&nbsp;<span class="prev-days">'+lang('past');
						for(var i=0;i<data['prev-days'].length; i++)
						{
							var name = data['prev-days'][i];
							name += (data['prev-days'][i] > 1) ? lang('days') : lang('day');
							html += ' <a href="javascript:;" shortcut="day,-'+data['prev-days'][i]+'">'+name+'</a>';
						}
						html+='</span>';
					}

					if (data['next-days'] && data['next-days'].length > 0)
					{
						html += '&nbsp;<span class="next-days">'+lang('following');
						for(var i=0;i<data['next-days'].length; i++)
						{
							var name = data['next-days'][i];
							name += (data['next-days'][i] > 1) ? lang('days') : lang('day');
							html += ' <a href="javascript:;" shortcut="day,'+data['next-days'][i]+'">'+name+'</a>';
						}
						html+= '</span>';
					}

					if (data['prev'] && data['prev'].length > 0)
					{
						html += '&nbsp;<span class="prev-buttons">'+lang('previous');
						for(var i=0;i<data['prev'].length; i++)
						{
							var name = lang('prev-'+data['prev'][i]);
							html += ' <a href="javascript:;" shortcut="prev,'+data['prev'][i]+'">'+name+'</a>';
						}
						html+='</span>';
					}

					if (data['next'] && data['next'].length > 0)
					{
						html += '&nbsp;<span class="next-buttons">'+lang('next');
						for(var i=0;i<data['next'].length; i++)
						{
							var name = lang('next-'+data['next'][i]);
							html += ' <a href="javascript:;" shortcut="next,'+data['next'][i]+'">'+name+'</a>';
						}
						html+='</span>';
					}
				}

				if (opt.customShortcuts)
				{
					for(var i=0;i<opt.customShortcuts.length; i++)
					{
						var sh = opt.customShortcuts[i];
						html+= '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">'+sh.name+'</a></span>';
					}
				}
				html += '</div>';
			}

			// Add Custom Values Dom
			if (opt.showCustomValues)
			{
				html += '<div class="customValues"><b>'+(opt.customValueLabel || lang('custom-values'))+'</b>';

				if (opt.customValues)
				{
					for(var i=0;i<opt.customValues.length;i++)
					{
						var val = opt.customValues[i];
							html+= '&nbsp;<span class="custom-value"><a href="javascript:;" custom="'+ val.value+'">'+val.name+'</a></span>';
					}
				}
			}

			html += '</div></div>';


			return $(html);
		}

		function getApplyBtnClass()
		{
			var klass = ''
			if (opt.autoClose === true) {
				klass += ' hide';
			}
			if (opt.applyBtnClass !== '') {
				klass += ' ' + opt.applyBtnClass;
			}
			return klass;
		}

		function getWeekHead()
		{
			var prepend = opt.showWeekNumbers ? '<th>'+lang('week-number')+'</th>' : '';
			if (opt.startOfWeek == 'monday')
			{
				return prepend+'<th>'+lang('week-1')+'</th>\
					<th>'+lang('week-2')+'</th>\
					<th>'+lang('week-3')+'</th>\
					<th>'+lang('week-4')+'</th>\
					<th>'+lang('week-5')+'</th>\
					<th>'+lang('week-6')+'</th>\
					<th>'+lang('week-7')+'</th>';
			}
			else
			{
				return prepend+'<th>'+lang('week-7')+'</th>\
					<th>'+lang('week-1')+'</th>\
					<th>'+lang('week-2')+'</th>\
					<th>'+lang('week-3')+'</th>\
					<th>'+lang('week-4')+'</th>\
					<th>'+lang('week-5')+'</th>\
					<th>'+lang('week-6')+'</th>';
			}
		}

		function isMonthOutOfBounds(month)
		{
			var month = moment(month);
			if (opt.startDate && month.endOf('month').isBefore(opt.startDate))
			{
				return true;
			}
			if (opt.endDate && month.startOf('month').isAfter(opt.endDate))
			{
				return true;
			}
			return false;
		}

		function getGapHTML()
		{
			var html = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'];
			for(var i=0;i<20;i++)
			{
				html.push('<div class="gap-line">\
					<div class="gap-1"></div>\
					<div class="gap-2"></div>\
					<div class="gap-3"></div>\
				</div>');
			}
			html.push('</div>');
			return html.join('');
		}

		function hasMonth2()
		{
			return ( !opt.singleDate && !opt.singleMonth);
		}

		function attributesCallbacks(initialObject,callbacksArray,today)
		{
			var resultObject = jQuery.extend(true, {}, initialObject);

			jQuery.each(callbacksArray, function(cbAttrIndex, cbAttr){
				var addAttributes = cbAttr(today);
				for(var attr in addAttributes){
					if(resultObject.hasOwnProperty(attr)){
						resultObject[attr] += addAttributes[attr];
					}else{
						resultObject[attr] = addAttributes[attr];
					}
				}
			});

			var attrString = '';

			for(var attr in resultObject){
				if(resultObject.hasOwnProperty(attr)){
					attrString += attr + '="' + resultObject[attr] + '" ';
				}
			}

			return attrString;
		}

		function daysFrom1970(t)
		{
			return Math.floor(toLocalTimestamp(t) / 86400000);
		}

		function toLocalTimestamp(t)
		{
			if (moment.isMoment(t)) t = t.toDate().getTime();
			if (typeof t == 'object' && t.getTime) t = t.getTime();
			if (typeof t == 'string' && !t.match(/\d{13}/)) t = moment(t,opt.format).toDate().getTime();
			t = parseInt(t, 10) - new Date().getTimezoneOffset()*60*1000;
			return t;
		}

		function createMonthHTML(d)
		{
			var days = [];
			d.setDate(1);
			var lastMonth = new Date(d.getTime() - 86400000);
			var now = new Date();

			var dayOfWeek = d.getDay();
			if((dayOfWeek == 0) && (opt.startOfWeek == 'monday')) {
				// add one week
				dayOfWeek = 7;
			}

			if (dayOfWeek > 0)
			{
				for (var i = dayOfWeek; i > 0; i--)
				{
					var day = new Date(d.getTime() - 86400000*i);
					var valid = isValidTime(day.getTime());
					if (opt.startDate && compare_day(day,opt.startDate) < 0) valid = false;
					if (opt.endDate && compare_day(day,opt.endDate) > 0) valid = false;
					days.push(
					{
						date: day,
						type:'lastMonth',
						day: day.getDate(),
						time:day.getTime(),
						valid:valid
					});
				}
			}
			var toMonth = d.getMonth();
			for(var i=0; i<40; i++)
			{
				var today = moment(d).add(i, 'days').toDate();
				var valid = isValidTime(today.getTime());
				if (opt.startDate && compare_day(today,opt.startDate) < 0) valid = false;
				if (opt.endDate && compare_day(today,opt.endDate) > 0) valid = false;
				days.push(
				{
					date: today,
					type: today.getMonth() == toMonth ? 'toMonth' : 'nextMonth',
					day: today.getDate(),
					time:today.getTime(),
					valid:valid
				});
			}
			var html = [];
			for(var week=0; week<6; week++)
			{
				if (days[week*7].type == 'nextMonth') break;
				html.push('<tr>');
				for(var day = 0; day<7; day++)
				{
					var _day = (opt.startOfWeek == 'monday') ? day+1 : day;
					var today = days[week*7+_day];
					var highlightToday = moment(today.time).format('L') == moment(now).format('L');
					today.extraClass = '';
					today.tooltip = '';
					if(today.valid && opt.beforeShowDay && typeof opt.beforeShowDay == 'function')
					{
						var _r = opt.beforeShowDay(moment(today.time).toDate());
						today.valid = _r[0];
						today.extraClass = _r[1] || '';
						today.tooltip = _r[2] || '';
						if (today.tooltip != '') today.extraClass += ' has-tooltip ';
					}

					var todayDivAttr = {
						time: today.time,
						'data-tooltip': today.tooltip,
						'class': 'day '+today.type+' '+today.extraClass+' '+(today.valid ? 'valid' : 'invalid')+' '+(highlightToday?'real-today':'')
					};

					if (day == 0 && opt.showWeekNumbers)
					{
						html.push('<td><div class="week-number" data-start-time="'+today.time+'">'+opt.getWeekNumber(today.date)+'</div></td>');
					}

					html.push('<td ' + attributesCallbacks({},opt.dayTdAttrs,today) + '><div ' + attributesCallbacks(todayDivAttr,opt.dayDivAttrs,today) + '>'+showDayHTML(today.time, today.day)+'</div></td>');
				}
				html.push('</tr>');
			}
			return html.join('');
		}

		function showDayHTML(time, date)
		{
			if (opt.showDateFilter && typeof opt.showDateFilter == 'function') return opt.showDateFilter(time, date);
			return date;
		}

		function getLanguages()
		{
			if (opt.language == 'auto')
			{
				var language = navigator.language ? navigator.language : navigator.browserLanguage;
				if (!language) return $.dateRangePickerLanguages['default'];
				var language = language.toLowerCase();
				for(var key in $.dateRangePickerLanguages)
				{
					if (language.indexOf(key) != -1)
					{
						return $.dateRangePickerLanguages[key];
					}
				}
				return $.dateRangePickerLanguages['default'];
			}
			else if ( opt.language && opt.language in $.dateRangePickerLanguages)
			{
				return $.dateRangePickerLanguages[opt.language];
			}
			else
			{
				return $.dateRangePickerLanguages['default'];
			}
		}

		/**
		 * translate language string
		 */
		function lang(t)
		{
			var _t = t.toLowerCase();
			var re = (t in langs) ? langs[t] : ( _t in langs) ? langs[_t] : null;
			var defaultLanguage = $.dateRangePickerLanguages['default'];
			if (re == null) re = (t in defaultLanguage) ? defaultLanguage[t] : ( _t in defaultLanguage) ? defaultLanguage[_t] : '';
			return re;
		}


	};
}));

/* ----- formstone for scroll ----- */

/*! formstone v0.8.35 [core.js] 2015-12-28 | MIT License | formstone.it */

var Formstone=window.Formstone=function(a,b,c){"use strict";function d(a){m.Plugins[a].initialized||(m.Plugins[a].methods._setup.call(c),m.Plugins[a].initialized=!0)}function e(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function f(){var a,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},d=["transition","-webkit-transition"],e={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},f="transitionend",g="",h="",i=c.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in i.style){f=b[a],m.support.transition=!0;break}p.transitionEnd=f+".{ns}";for(a in d)if(d.hasOwnProperty(a)&&d[a]in i.style){g=d[a];break}m.transition=g;for(a in e)if(e.hasOwnProperty(a)&&e[a]in i.style){m.support.transform=!0,h=e[a];break}m.transform=h}function g(){m.windowWidth=m.$window.width(),m.windowHeight=m.$window.height(),q=l.startTimer(q,r,h)}function h(){for(var a in m.ResizeHandlers)m.ResizeHandlers.hasOwnProperty(a)&&m.ResizeHandlers[a].callback.call(b,m.windowWidth,m.windowHeight)}function i(){if(m.support.raf){m.window.requestAnimationFrame(i);for(var a in m.RAFHandlers)m.RAFHandlers.hasOwnProperty(a)&&m.RAFHandlers[a].callback.call(b)}}function j(a,b){return parseInt(a.priority)-parseInt(b.priority)}var k=function(){this.Version="0.8.35",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=b,this.$window=a(b),this.document=c,this.$document=a(c),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=b.navigator.userAgent||b.navigator.vendor||b.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(b.File&&b.FileList&&b.FileReader),history:!!(b.history&&b.history.pushState&&b.history.replaceState),matchMedia:!(!b.matchMedia&&!b.msMatchMedia),pointer:!!b.PointerEvent,raf:!(!b.requestAnimationFrame||!b.cancelAnimationFrame),touch:!!("ontouchstart"in b||b.DocumentTouch&&c instanceof b.DocumentTouch),transition:!1,transform:!1}},l={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(c){}},startTimer:function(a,b,c,d){return l.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(a,10)-parseInt(b,10)},sortDesc:function(a,b){return parseInt(b,10)-parseInt(a,10)},decodeEntities:function(a){var b=m.document.createElement("textarea");return b.innerHTML=a,b.value},parseQueryString:function(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}},m=new k,n=a.Deferred(),o={base:"{ns}",element:"{ns}-element"},p={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"};k.prototype.NoConflict=function(){m.DontConflict=!0;for(var b in m.Plugins)m.Plugins.hasOwnProperty(b)&&(a[b]=m.Conflicts[b],a.fn[b]=m.Conflicts.fn[b])},k.prototype.Plugin=function(c,f){return m.Plugins[c]=function(c,d){function f(b){var e,f,g,i="object"===a.type(b),j=this,k=a();for(b=a.extend(!0,{},d.defaults||{},i?b:{}),f=0,g=j.length;g>f;f++)if(e=j.eq(f),!h(e)){var l="__"+d.guid++,m=d.classes.raw.base+l,n=e.data(c+"-options"),o=a.extend(!0,{$el:e,guid:l,rawGuid:m,dotGuid:"."+m},b,"object"===a.type(n)?n:{});e.addClass(d.classes.raw.element).data(s,o),d.methods._construct.apply(e,[o].concat(Array.prototype.slice.call(arguments,i?1:0))),k=k.add(e)}for(f=0,g=k.length;g>f;f++)e=k.eq(f),d.methods._postConstruct.apply(e,[h(e)]);return j}function g(){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(s)}function h(a){return a.data(s)}function i(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:f.apply(this,arguments)}}function k(c){var e=d.utilities[c]||d.utilities._initialize||!1;return e?e.apply(b,Array.prototype.slice.call(arguments,"object"===a.type(c)?0:1)):void 0}function n(b){d.defaults=a.extend(!0,d.defaults,b||{})}function q(b){for(var c=this,d=0,e=c.length;e>d;d++){var f=c.eq(d),g=h(f)||{};"undefined"!==a.type(g.$el)&&b.apply(f,[g].concat(Array.prototype.slice.call(arguments,1)))}return c}var r="fs-"+c,s="fs"+c.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=e("classes",r,o,d.classes),d.events=e("events",c,p,d.events),d.functions=a.extend({getData:h,iterate:q},l,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_postConstruct:a.noop,_destruct:a.noop,_resize:!1,destroy:g},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:n},d.utilities),d.widget&&(m.Conflicts.fn[c]=a.fn[c],a.fn[s]=i,m.DontConflict||(a.fn[c]=a.fn[s])),m.Conflicts[c]=a[c],a[s]=d.utilities._delegate||k,m.DontConflict||(a[c]=a[s]),d.namespace=c,d.namespaceClean=s,d.guid=0,d.methods._resize&&(m.ResizeHandlers.push({namespace:c,priority:d.priority,callback:d.methods._resize}),m.ResizeHandlers.sort(j)),d.methods._raf&&(m.RAFHandlers.push({namespace:c,priority:d.priority,callback:d.methods._raf}),m.RAFHandlers.sort(j)),d}(c,f),n.then(function(){d(c)}),m.Plugins[c]};var q=null,r=20;return m.$window.on("resize.fs",g),g(),i(),a(function(){m.$body=a("body"),n.resolve(),m.support.nativeMatchMedia=m.support.matchMedia&&!a("html").hasClass("no-matchmedia")}),p.clickTouchStart=p.click+" "+p.touchStart,f(),m}(jQuery,window,document);

/*! formstone v0.8.35 [touch.js] 2015-12-28 | MIT License | formstone.it */

!function(a,b){"use strict";function c(a){a.touches=[],a.touching=!1,this.on(q.dragStart,r.killEvent),a.swipe&&(a.pan=!0),a.scale&&(a.axis=!1),a.axisX="x"===a.axis,a.axisY="y"===a.axis,b.support.pointer?(n(this,"none"),this.on(q.pointerDown,a,e)):this.on(q.touchStart,a,e).on(q.mouseDown,a,f)}function d(){this.off(q.namespace),n(this,"")}function e(a){a.preventManipulation&&a.preventManipulation();var b=a.data,c=a.originalEvent;if(c.type.match(/(up|end|cancel)$/i))return void j(a);if(c.pointerId){var d=!1;for(var e in b.touches)b.touches[e].id===c.pointerId&&(d=!0,b.touches[e].pageX=c.clientX,b.touches[e].pageY=c.clientY);d||b.touches.push({id:c.pointerId,pageX:c.clientX,pageY:c.clientY})}else b.touches=c.touches;c.type.match(/(down|start)$/i)?f(a):c.type.match(/move$/i)&&g(a)}function f(c){var d=c.data,f="undefined"!==a.type(d.touches)?d.touches[0]:null;d.touching||(d.startE=c.originalEvent,d.startX=f?f.pageX:c.pageX,d.startY=f?f.pageY:c.pageY,d.startT=(new Date).getTime(),d.scaleD=1,d.passed=!1),d.$links&&d.$links.off(q.click);var h=k(d.scale?q.scaleStart:q.panStart,c,d.startX,d.startY,d.scaleD,0,0,"","");if(d.scale&&d.touches&&d.touches.length>=2){var i=d.touches;d.pinch={startX:l(i[0].pageX,i[1].pageX),startY:l(i[0].pageY,i[1].pageY),startD:m(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},h.pageX=d.startX=d.pinch.startX,h.pageY=d.startY=d.pinch.startY}d.touching||(d.touching=!0,d.pan&&s.on(q.mouseMove,d,g).on(q.mouseUp,d,j),b.support.pointer?s.on([q.pointerMove,q.pointerUp,q.pointerCancel].join(" "),d,e):s.on([q.touchMove,q.touchEnd,q.touchCancel].join(" "),d,e),d.$el.trigger(h))}function g(b){var c=b.data,d="undefined"!==a.type(c.touches)?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,h=f-c.startY,i=g>0?"right":"left",n=h>0?"down":"up",o=Math.abs(g)>t,p=Math.abs(h)>t;if(!c.passed&&c.axis&&(c.axisX&&p||c.axisY&&o))j(b);else{!c.passed&&(!c.axis||c.axis&&c.axisX&&o||c.axisY&&p)&&(c.passed=!0),c.passed&&(r.killEvent(b),r.killEvent(c.startE));var s=!0,u=k(c.scale?q.scale:q.pan,b,e,f,c.scaleD,g,h,i,n);if(c.scale)if(c.touches&&c.touches.length>=2){var v=c.touches;c.pinch.endX=l(v[0].pageX,v[1].pageX),c.pinch.endY=l(v[0].pageY,v[1].pageY),c.pinch.endD=m(v[1].pageX-v[0].pageX,v[1].pageY-v[0].pageY),c.scaleD=c.pinch.endD/c.pinch.startD,u.pageX=c.pinch.endX,u.pageY=c.pinch.endY,u.scale=c.scaleD,u.deltaX=c.pinch.endX-c.pinch.startX,u.deltaY=c.pinch.endY-c.pinch.startY}else c.pan||(s=!1);s&&c.$el.trigger(u)}}function h(b,c){b.on(q.click,c,i);var d=a._data(b[0],"events").click;d.unshift(d.pop())}function i(a){r.killEvent(a,!0),a.data.$links.off(q.click)}function j(b){var c=b.data,d="undefined"!==a.type(c.touches)?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,i=f-c.startY,j=(new Date).getTime(),l=c.scale?q.scaleEnd:q.panEnd,m=g>0?"right":"left",n=i>0?"down":"up",o=Math.abs(g)>1,p=Math.abs(i)>1;if(c.swipe&&Math.abs(g)>t&&j-c.startT<u&&(l=q.swipe),c.axis&&(c.axisX&&p||c.axisY&&o)||o||p){c.$links=c.$el.find("a");for(var r=0,v=c.$links.length;v>r;r++)h(c.$links.eq(r),c)}var w=k(l,b,e,f,c.scaleD,g,i,m,n);s.off([q.touchMove,q.touchEnd,q.touchCancel,q.mouseMove,q.mouseUp,q.pointerMove,q.pointerUp,q.pointerCancel].join(" ")),c.$el.trigger(w),c.touches=[],c.scale,c.touching=!1}function k(b,c,d,e,f,g,h,i,j){return a.Event(b,{originalEvent:c,bubbles:!0,pageX:d,pageY:e,scale:f,deltaX:g,deltaY:h,directionX:i,directionY:j})}function l(a,b){return(a+b)/2}function m(a,b){return Math.sqrt(a*a+b*b)}function n(a,b){a.css({"-ms-touch-action":b,"touch-action":b})}var o=!b.window.PointerEvent,p=b.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1},methods:{_construct:c,_destruct:d},events:{pointerDown:o?"MSPointerDown":"pointerdown",pointerUp:o?"MSPointerUp":"pointerup",pointerMove:o?"MSPointerMove":"pointermove",pointerCancel:o?"MSPointerCancel":"pointercancel"}}),q=p.events,r=p.functions,s=b.$window,t=10,u=50;q.pan="pan",q.panStart="panstart",q.panEnd="panend",q.scale="scale",q.scaleStart="scalestart",q.scaleEnd="scaleend",q.swipe="swipe"}(jQuery,Formstone);

/*! formstone v0.8.35 [scrollbar.js] 2015-12-28 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){q=b.$body}function d(){v.iterate.call(w,i)}function e(){w=a(s.base)}function f(a){var b="";b+='<div class="'+t.bar+'">',b+='<div class="'+t.track+'">',b+='<span class="'+t.handle+'"></span>',b+="</div></div>",a.paddingRight=parseInt(this.css("padding-right"),10),a.paddingBottom=parseInt(this.css("padding-bottom"),10),this.addClass([t.base,a.customClass,a.horizontal?t.horizontal:""].join(" ")).wrapInner('<div class="'+t.content+'" />').prepend(b),a.$content=this.find(s.content),a.$bar=this.find(s.bar),a.$track=this.find(s.track),a.$handle=this.find(s.handle),a.trackMargin=parseInt(a.trackMargin,10),a.$content.on(u.scroll,a,j),a.mouseWheel&&a.$content.on("DOMMouseScroll"+u.namespace+" mousewheel"+u.namespace,a,k),a.$track.fsTouch({axis:a.horizontal?"x":"y",pan:!0}).on(u.panStart,a,m).on(u.pan,a,n).on(u.panEnd,a,o),i(a),e()}function g(a){a.$track.fsTouch("destroy"),a.$bar.remove(),a.$content.off(u.namespace).contents().unwrap(),this.removeClass([t.base,t.active,a.customClass].join(" ")).off(u.namespace)}function h(b,c,d){var e=d||b.duration,f={};if("number"!==a.type(c)){var g=a(c);if(g.length>0){var h=g.position();c=b.horizontal?h.left+b.$content.scrollLeft():h.top+b.$content.scrollTop()}else c="top"===c?0:"bottom"===c?b.horizontal?b.$content[0].scrollWidth:b.$content[0].scrollHeight:b.$content.scrollTop()}f[b.horizontal?"scrollLeft":"scrollTop"]=c,b.$content.stop().animate(f,e)}function i(a){a.$el.addClass(t.isSetup);var b={},c={},d={},e=0,f=!0;if(a.horizontal){a.barHeight=a.$content[0].offsetHeight-a.$content[0].clientHeight,a.frameWidth=a.$content.outerWidth(),a.trackWidth=a.frameWidth-2*a.trackMargin,a.scrollWidth=a.$content[0].scrollWidth,a.ratio=a.trackWidth/a.scrollWidth,a.trackRatio=a.trackWidth/a.scrollWidth,a.handleWidth=a.handleSize>0?a.handleSize:a.trackWidth*a.trackRatio,a.scrollRatio=(a.scrollWidth-a.frameWidth)/(a.trackWidth-a.handleWidth),a.handleBounds={left:0,right:a.trackWidth-a.handleWidth},a.$content.css({paddingBottom:a.barHeight+a.paddingBottom});var g=a.$content.scrollLeft();e=g*a.ratio,f=a.scrollWidth<=a.frameWidth,b={width:a.frameWidth},c={width:a.trackWidth,marginLeft:a.trackMargin,marginRight:a.trackMargin},d={width:a.handleWidth}}else{a.barWidth=a.$content[0].offsetWidth-a.$content[0].clientWidth,a.frameHeight=a.$content.outerHeight(),a.trackHeight=a.frameHeight-2*a.trackMargin,a.scrollHeight=a.$content[0].scrollHeight,a.ratio=a.trackHeight/a.scrollHeight,a.trackRatio=a.trackHeight/a.scrollHeight,a.handleHeight=a.handleSize>0?a.handleSize:a.trackHeight*a.trackRatio,a.scrollRatio=(a.scrollHeight-a.frameHeight)/(a.trackHeight-a.handleHeight),a.handleBounds={top:0,bottom:a.trackHeight-a.handleHeight};var h=a.$content.scrollTop();e=h*a.ratio,f=a.scrollHeight<=a.frameHeight,b={height:a.frameHeight},c={height:a.trackHeight,marginBottom:a.trackMargin,marginTop:a.trackMargin},d={height:a.handleHeight}}f?a.$el.removeClass(t.active):a.$el.addClass(t.active),a.$bar.css(b),a.$track.css(c),a.$handle.css(d),a.panning=!1,p(a,e),j({data:a}),a.$el.removeClass(t.setup)}function j(a){v.killEvent(a);var b=a.data,c={};if(!b.panning){if(b.horizontal){var d=b.$content.scrollLeft();0>d&&(d=0),b.handleLeft=d/b.scrollRatio,b.handleLeft>b.handleBounds.right&&(b.handleLeft=b.handleBounds.right),c={left:b.handleLeft}}else{var e=b.$content.scrollTop();0>e&&(e=0),b.handleTop=e/b.scrollRatio,b.handleTop>b.handleBounds.bottom&&(b.handleTop=b.handleBounds.bottom),c={top:b.handleTop}}b.$handle.css(c)}}function k(a){var b,c,d=a.data;if(d.horizontal){var e=d.$content[0].scrollLeft,f=d.$content[0].scrollWidth,g=d.$content.outerWidth();if(b="DOMMouseScroll"===a.type?-40*a.originalEvent.detail:a.originalEvent.wheelDelta,c=b>0?"right":"left","left"===c&&-b>f-g-e)return d.$content.scrollLeft(f),l(a);if("right"===c&&b>e)return d.$content.scrollLeft(0),l(a)}else{var h=d.$content[0].scrollTop,i=d.$content[0].scrollHeight,j=d.$content.outerHeight();if(b="DOMMouseScroll"===a.type?-40*a.originalEvent.detail:a.originalEvent.wheelDelta,c=b>0?"up":"down","down"===c&&-b>i-j-h)return d.$content.scrollTop(i),l(a);if("up"===c&&b>h)return d.$content.scrollTop(0),l(a)}}function l(a){return v.killEvent(a),a.returnValue=!1,!1}function m(a){var b,c=a.data,d=c.$track.offset();c.panning=!0,b=c.horizontal?c.handleLeft=a.pageX-d.left-c.handleWidth/2:c.handleTop=a.pageY-d.top-c.handleHeight/2,p(c,b)}function n(a){var b,c=a.data;b=c.horizontal?c.handleLeft+a.deltaX:c.handleTop+a.deltaY,p(c,b)}function o(a){var b=a.data;b.panning=!1,b.horizontal?b.handleLeft+=a.deltaX:b.handleTop+=a.deltaY}function p(a,b){var c={};a.horizontal?(b<a.handleBounds.left&&(b=a.handleBounds.left),b>a.handleBounds.right&&(b=a.handleBounds.right),c={left:b},a.$content.scrollLeft(Math.round(b*a.scrollRatio))):(b<a.handleBounds.top&&(b=a.handleBounds.top),b>a.handleBounds.bottom&&(b=a.handleBounds.bottom),c={top:b},a.$content.scrollTop(Math.round(b*a.scrollRatio))),a.$handle.css(c)}var q,r=b.Plugin("scrollbar",{widget:!0,defaults:{customClass:"",duration:0,handleSize:0,horizontal:!1,mouseWheel:!0,trackMargin:0},classes:["content","bar","track","handle","horizontal","setup","active"],methods:{_setup:c,_construct:f,_destruct:g,_resize:d,scroll:h,resize:i}}),s=r.classes,t=s.raw,u=r.events,v=r.functions,w=(b.$window,[])}(jQuery,Formstone);