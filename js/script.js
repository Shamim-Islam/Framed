// for the navigation toggler btn //

$(document).ready(function () {
	'use strict';

	$('.nav-button').click(function () {

		$('.nav-button').toggleClass('change');

	});

});

// for the sticky navigation //

$(document).ready(function () {
	'use strict';

	$(window).scroll(function () {

		let position = $(this).scrollTop();

		if (position >= 200) {
			$('.nav-menu').addClass('cstm-navbar');

		} else {
			$('.nav-menu').removeClass('cstm-navbar');
		}

	});

});

// Highlight active menu on click //

$(document).ready(function () {
	'use strict';

	$('.navbar-nav li a').click(function () {
		'use strict';

		$('.navbar-nav li a').parent().removeClass('active');
		$(this).parent().addClass('active');

	});

});

// highlight active menu on scroll //

$(document).ready(function () {
	'use strict';

	$(window).scroll(function () {
		'use strict';

		$('section, header').each(function () {
			'use strict';

			var bb = $(this).attr('id'); // it's define the id of each section
			var hei = $(this).outerHeight();
			var grttop = $(this).offset().top - 70;

			if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

				$('.navbar-nav li a[href="#' + bb + '"]').parent().addClass('active');

			} else {

				$('.navbar-nav li a[href="#' + bb + '"]').parent().removeClass('active');

			}

		});

	});

});

// For the gallery //

$(document).ready(function () {
	'use strict';

	$('.gallery-list-item').click(function () {

		let value = $(this).attr('data-filter');

		if (value === 'all') {

			$('.filter').show(300);

		} else {

			$('.filter').not('.' + value).hide(300);
			$('.filter').filter('.' + value).show(300);
		}

	});

});

// For heilight active item //

$(document).ready(function () {

	$('.gallery-list-item').click(function () {
		$(this).addClass('active-item').siblings().removeClass('active-item');
	});

});

// Smooth Scrolling //

$(document).ready(function () {
	'use strict';

	$('.nav-link, .navbar-brand, .footer-link').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
			location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

});


// Add animations & initialize wow //

$(document).ready(function () {

	'use strict';
	new WOW().init();

});