// include Header
$(function () {
    $("#header").load("layout/header.html");
    $("#footer").load("layout/footer.html");
});
// include Header
// header color change
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 70) {
            $(".NavbarMain").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".NavbarMain").removeClass("active");
        }
    });
});
// header color change

// owl
$('.owl-carousel').owlCarousel({
    loop: true,
    autoWidth: true,
    autoHeight: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoHeightClass: 'owl-height',
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
