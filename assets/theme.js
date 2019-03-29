(function($) {
    "use strict";

	jQuery(document).ready(function(){


	 /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });

    /* Cart */
    $(".language-click , .icon-cart , .icon-setting").on("click", function() {
        $(this).parent().find('.language-dropdown , .shopping-cart-content , .setting-wrapper').slideToggle('medium');
    })

    /* Best selling active 2 */
    $('.best-selling-active-2').owlCarousel({
        loop: true,
        nav: false,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1100: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })



    /*---------------------
        Countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });


    /* Hover 3d init for tilt */
    if ($('.tilter').length > 0) {
        $('.tilter').tilt({
            maxTilt: 40,
            perspective: 800,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 800,
            transition: true,
        });
    }

    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------ Wow Active ----*/
    new WOW().init();

    /* counterUp */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*-------------------------------------
        Thumbnail Product activation
    --------------------------------------*/
    $('.thumb-menu').owlCarousel({
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    $('.thumb-menu a').on('click', function () {
        $('.thumb-menu a').removeClass('active');
    })


    /*---------------------
    shop grid list
    --------------------- */
    $('.view-mode li a').on('click', function() {
        var $proStyle = $(this).data('view');
        $('.view-mode li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.product-view').removeClass('product-grid product-list').addClass($proStyle);
    })

    /* isotop active */
    // filter items on button click
    $('.blog-area').imagesLoaded(function() {
        $('.portfolio-menu-active').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.blog-grid').isotope({
            itemSelector: '.blog-grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.blog-grid-item',
            }
        });
    });

    /*--------------------------
        Product Zoom
	---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });



  /* Ajax Cart */
    $(".cart-item").on('click', function(){
      $(this).addClass("loading add-item");
      setTimeout(function () {
        $(".cart-item").removeClass("loading");
      },1000);
      setTimeout(function () {
        $(".cart-item").removeClass("add-item");
      },2000);

    });

    /* Ajax Wishlist */
    $(".action--wishlist").on('click', function(){
      $(this).addClass("loading-wishlist add-wishlist");
      setTimeout(function () {
        $(".action--wishlist").removeClass("loading-wishlist");
      },1000);
      setTimeout(function () {
        $(".add-wishlist").removeClass("add-wishlist");
      },2000);

    });


	/* preloader */
    $(window).on('load', function() {
      $('#preloader_active').fadeOut('slow');
    });


    /* Match Heigh */
    $(function() {
		$('.item').matchHeight();
	});

    });

})(jQuery);
