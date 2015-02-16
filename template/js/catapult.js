/*
	Catapult JS
*/

/* Preloader*/
$(window).on('load', function(){
	"use strict";
	$('.catapult-preload-spinner').fadeIn(200);
	setTimeout(function(){
		$('.catapult-preload-spinner').fadeOut(400, function(){
				$('.catapult-preload').fadeOut(700);
			});
	}, 400);
});


$(document).ready(function() {
	"use strict";
	/* Countdown */
	$(".catapult-countdown").TimeCircles({
		fg_width: 0.02,
		bg_width: 0.3,
		circle_bg_color: '#ffffff',
		time: {
			Days: { color: '#D45661' },
			Hours: { color: '#D45661' },
			Minutes: { color: '#D45661' },
			Seconds: { color: '#D45661' }
		},
		count_past_zero: false
	});

	/* Background Slider */
	var n = $( "#catapultBG li" ).length;
	if(n > 1){
		$('.catapultImages').bxSlider({
			auto: true,
			mode: 'fade',
			captions: false,
			randomStart: true,
			pager: false,
			controls: false,
			pause: 7000

		});
	}

	/* Notify Form Validation */
	$( "#cp-form" ).validate({
		rules: {
				cpEmail: { required: true, email: true }
			},

			submitHandler: function(form){
				$(form).fadeOut(100);
				$.post($(form).attr('action'), $(form).serialize());
   				$('.cp-ok').fadeIn(500);
				return false;
			}
	});

	/* About info Toggle */
	$('.cp-info').hide();
	$('.cp-info2').hide();
	$('.cp-toggle').click(function(event) {
		event.preventDefault();
		var cptoggle = $(this).data('toggle');
		$( ".cp-info2" ).hide();
		if (cptoggle) {
			$( ".cp-info" ).hide();
			$( ".cp-info2" ).hide();
			$( ".cp-countdown, .cp-notify" ).fadeIn(200);
			$(".cp-toggle").removeClass('cp-info-open');
		} else {
			$( ".cp-countdown, .cp-notify" ).hide();
			$( ".cp-info" ).hide().fadeIn(200);;
			$(".cp-toggle").addClass('cp-info-open');
		}
		$(this).data("toggle", !cptoggle);
	});


	//  TEST TEST TEST TEST 
	
	$('.cp-testt').click(function(event) {
		$( ".cp-info" ).hide();
		event.preventDefault();
		var cptoggle = $(this).data('toggle');
		if (cptoggle) {
			$( ".cp-info2" ).hide().fadeIn(200);;
		} else {
			$( ".cp-countdown, .cp-notify" ).hide();
			$( ".cp-info2" ).hide().fadeIn(200);
			$(".cp-toggle").addClass('cp-info2-open');
		}
		$(this).data("toggle", !cptoggle);
	}); 

	/* Show Year in Footer*/
	$(".cp-year").text( (new Date).getFullYear() );

});

/* Rebuild Countdown (Responsive) */
$(window).resize(function(){
	"use strict";
	$(".catapult-countdown").TimeCircles().rebuild();
});

