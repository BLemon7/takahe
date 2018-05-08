$(document).ready(function () {

    // animate the anchor click
    $('a[href^="#project"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // when the page scrolls animate the scroll to top button to fade in or out
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    //click to scroll to top
    $('.scroll-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // hide .navbar first
    $(".navbar.home").hide();
    $(".opacity-layer").hide();
    $('.opacity-layer').slideDown(1000, animateFirstText);



    function animateFirstText() {
        $('.slide:first').slideDown(200, animateSlideText);
    }

    function animateSlideText() {
        $(this).next('.slide').slideDown(500, animateSlideText);
    }


    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('.navbar.home').fadeIn();
            } else {
                $('.navbar.home').fadeOut();
            }
        });
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


});

$(window).scroll(function () {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();

    $('.sky').css('background-position', 'center' + (wScroll * 4) + 'px')
}


$(document).ready(function () {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    $(".silhouette").click(function (e) {
        $(".silhouette").fadeOut('slow', function () {
            $(".the-takahe").fadeIn('slow');
            $(".the-takahe").css({
                "display": "block",
                "color": "white"
            });
        });
    });
});
