document.addEventListener("DOMContentLoaded", function(event) { 

	var rope      = document.getElementsByClassName('rope')[0],
		phone     = document.getElementsByClassName('phone-Le2')[0],
		planet    = document.getElementsByClassName('planet')[0],
		planet     = {
			el    : document.getElementsByClassName('planet')[0],
			minH  : document.getElementsByClassName('planet')[0].clientHeight
		},
		price     = {
			el    : document.querySelector('.total-price span'),
			value : document.querySelector('.total-price').getAttribute('data-start-price')
		},
		discount  = {
			el    : document.querySelector('.price-dec span'),
			max   : document.querySelector('.price-dec').getAttribute('data-max-discount')
		},
		body         = document.getElementsByTagName('body')[0],
		topOffset    = null,
		bottomOffset = document.body.clientHeight-70,
		pathLenght   = dc = null,
		isMoving     = false;

	interact('.ring')
	  .draggable({
	    // enable inertial throwing
	    inertia: true,
	    // keep the element within the area of it's parent
	    restrict: {
	      restriction: "parent",
	      endOnly: true,
	      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
	    },
	    // enable autoScroll
	    autoScroll: true,

	    onstart: dragStartListener,
	    onmove: dragMoveListener,
	    onend: dragEndListener,
	  });

	  function dragStartListener (event){

	  	var target = event.target;

	  	if (topOffset === null) {
	  		topOffset  = event.pageY;
	  		pathLength = bottomOffset - topOffset;
	  		dc         = discount.max/pathLength;
	  		document.getElementsByClassName('price-down')[0].classList.remove('on');
	  	}
  		document.getElementsByClassName('price-dec')[0].classList.remove('off');
  		body.classList.remove('touchEnd');
  		body.classList.add('touchStart');

	  }

	  function dragEndListener (event){

	  	if (document.getElementsByClassName('banner')[0].classList.contains('finished')) return;

	  	var delay = 0; isMoving = false;

	  	if ("ActiveXObject" in window) {
	  		delay = 2000;
	  	}

	  	setTimeout(dragEndCallback.bind(null, event), delay);
	  }

	  function dragEndCallback(event) {

	  	if (isMoving) return;

	  	body.classList.remove('touchStart');
	  	body.classList.add('touchEnd');

	  	event.target.style.webkitTransform =
	  	event.target.style.transform =
	  	rope.style.webkitTransform =
	  	rope.style.transform = 
	  	phone.style.webkitTransform =
    	phone.style.transform = '';
	  	event.target.setAttribute('data-y', 0);

	  	document.getElementsByClassName('price-dec')[0].classList.add('off');

	  	fillCounter(discount.el, number2digits(0));
	  	fillCounter(price.el, number2digits(price.value));
	  	planet.el.style.height = planet.minH + 'px';
	  }

	  function dragMoveListener (event) {

        isMoving = true;

	    var target = event.target,
	    	direction = event.dy > 0 ? 'bottom' : 'top';
	        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        if (event.pageY >= topOffset) {

        	target.style.webkitTransform =
        	target.style.transform =
        	rope.style.webkitTransform =
        	rope.style.transform =
        	'translateY(' + y + 'px)';
        	target.setAttribute('data-y', y);

        	phone.style.webkitTransform =
        	phone.style.transform = 'translateY(' + (-y*0.12) + 'px)';
        	planet.el.style.height = planet.minH + y*0.25 + 'px';
        	fillCounter(discount.el, number2digits(-Math.floor(y*dc)));
        	fillCounter(price.el, number2digits(price.value - Math.floor(y*dc)));

        	if (direction == 'bottom' ) {

        		if (event.pageY >= bottomOffset) {
		        	body.classList.remove('touchStart');
        			discount.el.textContent = discount.max;
		        	price.el.textContent = price.value - discount.max;
        			document.getElementsByClassName('banner')[0].classList.add('finished');
        			return;
        		}
        	}
        }

	  }

	  function number2digits (num) {
	  	var digits = [], 
		  	neg = false;
	  	if (num<0) {
	  		neg = true;
	  		num = -num;
	  	}
	  	for (var i = 0; num>0; i++) {
	  		digits[i] = num % 10;
	  		num = (num - digits[i])/10;
	  	}
	  	if (neg) digits.push('-');
	  	return digits;
	  }

	  function fillCounter (el, digits) {
	  	 cells = el.querySelectorAll('i');
	  	 var m = 0;
	  	 for(n=cells.length-1; n>=0; --n){
	  	 	if (m >= digits.length) 
	  	 		cells[n].textContent = '';
	  	 	else
		  	 	cells[n].textContent = digits[m++];
	  	 }
	  }

});
