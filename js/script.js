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

[
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#5F90F0"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "color": "#54831B"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "color": "#54831B"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#54831B"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#54831B"
            }
        ]
    }
]

var map;

function initialize() {
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(-45.401571434804836, 167.70995048973793),
        styles: style_array_here
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
