// Owlcarousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $(window).resize(function () {
        if (window.matchMedia('(max-width: 600px)').matches) {
            $('.navbar-brand').html("<b>D S</b>");
        } else if (window.matchMedia('(min-width: 600px)').matches) {
            $('.navbar-brand').html("<b>Duta Sayoga</b>");
        }
    });

    $('.nav-about').click(function () {
        $('.nav-about').addClass('active');
        $('.nav-home').removeClass('active');
        $('.nav-contact').removeClass('active');
        $('.nav-project').removeClass('active');
        $('.navbar').addClass('bg-dark');
        $('.navbar').addClass('navbar-dark');
        //$('.navbar').removeClass('navbar-light');

    })

    $('.nav-home').click(function () {
        $('.nav-about').removeClass('active');
        $('.nav-home').addClass('active');
        $('.nav-contact').removeClass('active');
        $('.nav-project').removeClass('active');
        $('.navbar').removeClass('bg-dark');
        $('.navbar').removeClass('navbar-dark');
    })

    $('.nav-contact').click(function () {
        $('.nav-about').removeClass('active');
        $('.nav-home').removeClass('active');
        $('.nav-contact').addClass('active');
        $('.nav-project').removeClass('active');
        $('.navbar').removeClass('bg-dark');
        $('.navbar').removeClass('navbar-dark');
    })

    $('.nav-project').click(function () {
        $('.nav-about').removeClass('active');
        $('.nav-home').removeClass('active');
        $('.nav-contact').removeClass('active');
        $('.nav-project').addClass('active');
        $('.navbar').removeClass('bg-dark');
        $('.navbar').removeClass('navbar-dark');
    })

    $('.img-popup').click(function () {
        $("#show_image_popup").show()
    })

    $(".close-btn").click(function(){
        // $("#show_image_popup").fadeOut()
        $("#show_image_popup").hide()
    })

    $(window).on('load',function() {
        setTimeout( function(){
           $('.preloader').slideUp('slow'); 
         }, 2000 )
         //$('.preloader').fadeOut('slow'); 

    })
});

