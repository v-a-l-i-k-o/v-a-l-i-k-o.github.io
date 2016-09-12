document.addEventListener("DOMContentLoaded", function(event) { 

	var rope      = document.getElementsByClassName('rope')[0],
		phone     = document.getElementsByClassName('phone-Le2')[0],
		planet    = document.getElementsByClassName('planet')[0],
		price     = {
			el    : document.querySelector('.total-price span'),
			value : document.querySelector('.total-price span').textContent
		},
		discount  = {
			el    : document.querySelector('.price-dec span'),
			max   : document.querySelector('.price-dec').getAttribute('data-max-discount')
		},
		topOffset    = null,
		bottomOffset = document.body.clientHeight-50,
		pathLenght   = dc = null;

	// console.log(topOffset); return;

	// target elements with the "draggable" class
	interact('.ring')
	  .draggable({
	    // enable inertial throwing
	    inertia: true,
	    // keep the element within the area of it's parent
	    restrict: {
	      restriction: "parent",
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
	  		// topOffset = event.clientY0;
	  		topOffset = target.getBoundingClientRect().top;
	  		pathLength = bottomOffset - topOffset;
	  		dc = discount.max/pathLength;

	  		document.getElementsByClassName('price-down')[0].classList.toggle('on', false);
	  		document.getElementsByClassName('price-dec')[0].classList.toggle('off', false);
	  	}

	  	target.getBoundingClientRect();
	  	// console.log(target.getBoundingClientRect());
	  };
	  function dragEndListener (event){};

	  function dragMoveListener (event) {
	  	// console.log(event);
	    var target = event.target,
	    	direction = event.dy > 0 ? 'bottom' : 'top';
	        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        if (event.clientY >= topOffset) {

        	target.style.webkitTransform =
        	target.style.transform =
        	rope.style.webkitTransform =
        	rope.style.transform =
        	'translateY(' + y + 'px)';
        	target.setAttribute('data-y', y);

        	phone.style.webkitTransform =
        	phone.style.transform = 'translateY(' + (-y*0.12) + 'px)';
        	// console.log(Math.floor(y*dc));
        	planet.style.height = planet.clientHeight + event.dy*0.25 + 'px';
        	discount.el.textContent = Math.floor(y*dc);
        	price.el.textContent = price.value - Math.floor(y*dc);

        	if (direction == 'bottom' ) {

        		if (event.clientY >= bottomOffset) {
        			discount.el.textContent = discount.max;
		        	price.el.textContent = price.value - discount.max;
        			document.getElementsByClassName('banner')[0].classList.toggle('finished', true);
        			return;
        		}
        	}

        	if (direction == 'top') {

	        	
        	}
        }

	  }

	  // this is used later in the resizing and gesture demos
	  window.dragMoveListener = dragMoveListener;


});
