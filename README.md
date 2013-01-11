js-scroll-checker
=================

A simple JS scroll-checker that allows for user-defined scroll_stop and scroll_start callbacks.

Use
===

JSFiddle: http://jsfiddle.net/allenericr/nF5gx/

Just define the `scroll_check.on_start()` and `scroll_check.on_end()` methods and run the `scroll_check.check_scroll()` method when scrolling the window.

		//public method added for callback from scroll start
		scroll_check.on_start = function() {
			//console.log('scroll started');
		}

		//public method added for callback from scroll end
		scroll_check.on_end = function() {
			//console.log('scroll stopped');
		}

		//on window scroll
		$(window).scroll(function() {
			//run the check on window scroll
			scroll_check.check_scroll();
		});

Credits
=======

The general idea for this script was borrowed from StackOverflow and modified as needed.

StackOverflow: http://stackoverflow.com/questions/3515446/jquery-mousewheel-detecting-when-the-wheel-stops#answer-3515490
		
It uses an implementation of the Revealing Module Pattern described at the link below (listed under Revealing Module Pattern (Public & Private)).
		
http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/