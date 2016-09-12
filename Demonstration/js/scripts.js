var animatron = {

	el: {},

	init: function($) {
	  this.el.ring = $('.ring');
	  this.el.rope = $('.rope');
      this.bindUIEvents();
      console.log(this.el);
    },

    bindUIEvents: function() {

      this.el.ring.on("touchstart", this.start);

      this.el.ring.on("touchmove", this.move);

      this.el.ring.on("touchend", this.end);

    },

    start: function(event) {console.log(event);},
    move: function(event) {console.log(event);},
    end: function(event) {console.log(event);},
}

document.addEventListener("DOMContentLoaded", function(event) { 

	// animatron.init(u);

	var rope = document.getElementsByClassName('rope')[0],
		phone = document.getElementsByClassName('phone-Le2')[0],
		planet = document.getElementsByClassName('planet')[0],
		topOffset = null,
		steps = [100, 120, 70],
		// steps = [130, 150, 120],
		badges = [document.getElementsByClassName('price-dec__1')[0], document.getElementsByClassName('price-dec__2')[0]];
		visibiles = [false, false];

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
	  		// var delta = event.clientY0 - (topOffset + target.clientHeight/2);
	  		steps[0] = topOffset + steps[0];
	  		steps[1] = steps[0] + steps[1];
	  		steps[2] = steps[1] + steps[2];

	  		document.getElementsByClassName('price-down')[0].classList.toggle('on', false);
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

        	// animate({
        	//   el: [target, rope],
        	//   translateY: y,
        	//   easing: 'linear',
        	//   duration: 0
        	// });
        	target.style.webkitTransform =
        	target.style.transform =
        	rope.style.webkitTransform =
        	rope.style.transform =
        	'translateY(' + y + 'px)';
        	target.setAttribute('data-y', y);

        	phone.style.webkitTransform =
        	phone.style.transform = 'translateY(' + y*0.1 + 'px)';
        	console.log(planet.style.height);
        	planet.style.height = planet.clientHeight + event.dy*0.2 + 'px';

        	if (direction == 'bottom' ) {

        		if (event.clientY >= steps[2]) {
        			document.getElementsByClassName('banner')[0].classList.toggle('finished', true);
        			return;
        		}

	        	if (event.clientY >= steps[1] && !visibiles[1]) {
	        		var offset = target.getBoundingClientRect().top + target.clientHeight/2;
	        		badges[1].style.top = offset - badges[1].clientHeight/2 + 'px';
	        		badges[0].classList.toggle('on', false);
	        		badges[0].classList.toggle('off', true);
	        		badges[1].classList.toggle('off', false);
	        		badges[1].classList.toggle('on', true);
	        		visibiles[1] = true; return;
	        	}

	        	if (event.clientY >= steps[0] && !visibiles[0]) {
	        		var offset = target.getBoundingClientRect().top + target.clientHeight/2;
	        		badges[0].style.top = offset - badges[0].clientHeight/2 + 'px';
	        		badges[0].classList.toggle('off', false);
	        		badges[0].classList.toggle('on', true);
	        		visibiles[0] = true; return;
	        	}
        	}

        	if (direction == 'top') {

	        	if (event.clientY <= steps[0] && visibiles[0]) {
	        		badges[0].classList.toggle('on', false);
	        		badges[0].classList.toggle('off', true);
	        		visibiles[0] = false; return;
	        	}

	        	if (event.clientY <= steps[1] && visibiles[1]) {
	        		badges[1].classList.toggle('on', false);
	        		badges[1].classList.toggle('off', true);
	        		badges[0].classList.toggle('off', false);
	        		badges[0].classList.toggle('on', true);
	        		visibiles[1] = false; return;
	        	}
        	}
        }

	  }

	  // this is used later in the resizing and gesture demos
	  window.dragMoveListener = dragMoveListener;


});
