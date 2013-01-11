
	/*--------------------------------------------------------------------------
	
		JS Scroll Check

		Allows you to define a scroll_start and scroll_stop callback function
	
		The general idea for this script was borrowed from StackOverflow:
		http://stackoverflow.com/questions/3515446/jquery-mousewheel-detecting-when-the-wheel-stops#answer-3515490
		It has been modified

		It uses an implementation of the Revealing Module Pattern described here:
		http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/
		It is under Revealing Module Pattern (Public & Private)


		JSFiddle: http://jsfiddle.net/allenericr/nF5gx/

		//public method added for callback from scroll start
		scroll_check.on_start = function() {
			//console.log('scroll started');
		}

		//public method added for callback from scroll end
		scroll_check.on_end = function() {
			//console.log('scroll stopped');
		}

		$(window).scroll(function() {
			//run the check on window scroll
			scroll_check.check_scroll();
		});

	--------------------------------------------------------------------------*/
	
	var scroll_check = (function() {
		
		//private vars
		var scroll_timeout = 300;
		var scrolling = false;

		//object for public vars and methods
		var pub = [];

		//public vars for scroll status
		pub.start = false;
		pub.end = false;

		//public method to see if we're starting, stopping, or just scrolling
		pub.check_scroll = function() {
			//if we aren't already scrolling
			if(!scrolling) {
				scrolling = true;
				scroll_check.start = true;
				scroll_check.end = false;
				//run scroll start method if it exists
				if(typeof scroll_check.on_start === 'function') {
					scroll_check.on_start();
				}
			//if we were
			} else {
				//remove timer
				clearTimeout($.data(this, 'timer'));
			}
			
			//start timer
			$.data(this, 'timer',
				setTimeout(
					function() {
						scroll_completed();
					},
					scroll_timeout
				)
			);
		};

		//private method to see if we stopped scrolling and the timeOut finished
		function scroll_completed() {
			scrolling = false;
			scroll_check.start = false;
			scroll_check.end = true;
			//run scroll end method if it exists
			if(typeof scroll_check.on_end === 'function') {
				scroll_check.on_end();
			}
		}
		
		//return public methods and vars
		return pub;
	}());