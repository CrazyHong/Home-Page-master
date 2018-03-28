(function ($) {
    'use strict';

    jQuery(document).ready(function () {                          

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.menu-top').addClass('menu-shrink');
                $(".back-to-top").addClass("action-show");
            } else {
                $('.menu-top').removeClass('menu-shrink');
                $(".back-to-top").removeClass("action-show");
            }
        });

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });       
       
        $('.carousel').carousel({
            interval: 5000,
            pause: 'false',
        });         
                  
        $(".back-to-top").on("click", function () {
            $('body,html').animate({ scrollTop: 0 }, 300);
            return false;
        });
    });         

})(jQuery);




