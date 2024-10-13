(function($) {
    'use strict';

    // Document Ready
    jQuery(document).ready(function() {

        /* START MENU-JS */
        $('.nav a').on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top - 50
            }, 1500);
        });

        $(window).scroll(function() {
            $('.menu-top').toggleClass('menu-shrink', $(this).scrollTop() > 100);
        });

        $(document).on('click', '.navbar-collapse.in', function(event) {
            if ($(event.target).is('a') && !$(event.target).hasClass('dropdown-toggle')) {
                $(this).collapse('hide');
            }
        });
        /* END MENU-JS */

        /* START MOBILE-MENU */
        if ($.fn.slicknav) {
            $('.main_menu').slicknav({
                prependTo: ".mobile-nav"
            });
        }
        /* END MOBILE-MENU */

        /* START ISOTOPE JS */
        if ($.fn.isotope) {
            var $grid = $('.work_content_area').isotope({});
            $('.work_filter').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
        /* END ISOTOPE JS */

        /* START LIGHTBOX */
        if (typeof lightbox !== 'undefined') {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true
            });
        }
        /* END LIGHTBOX JS */

        /* START COUNTDOWN JS */
        if ($.fn.inView) {
            $('#counter_area').on('inview', function(event, isVisible) {
                if (isVisible) {
                    $(this).find('.counter').each(function() {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 5000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).off('inview'); // Unbind to prevent repeated triggers
                }
            });
        }
        /* END COUNTDOWN JS */
    });

    /* PRELOADER JS */
    $(window).on('load', function() {
        $('.spinner').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
    });
    /* END PRELOADER JS */

    /* WOW Animation */
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

})(jQuery);
