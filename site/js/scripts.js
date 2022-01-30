// all functions ------------------
function initKPN() {
    "use strict";
    $(".loader").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
    });
    if ($("header").hasClass("flat-header")) $('<div clas="height-emulator"></div>').prependTo("#wrapper").css({
        height: $("header").outerHeight(true)
    });
    function a() {
        $(".hero-title").css({
            "margin-top": -1 * $(".hero-title").height() / 2 + "px"
        });
        $(".carousel-link-holder").css({
            "margin-top": -1 * $(".carousel-link-holder").height() / 2 + "px"
        });
        $(".full-height").css({
            height: $(window).outerHeight(true)
        });
    }
    a();
	// magnificPopup------------------
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: false,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom",
        image: {
            verticalFit: false
        }
    });
    $(".popup-youtube, .popup-vimeo , .show-map").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        fixedContentPos: true,
        fixedBgPos: true,
        tLoading: "Loading image #%curr%...",
        removalDelay: 600,
        closeBtnInside: true,
        mainClass: "my-mfp-slide-bottom",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [ 0, 1 ]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $(".popup-with-move-anim").magnificPopup({
        type: "ajax",
        alignTop: false,
        overflowY: "scroll",
        fixedContentPos: true,
        fixedBgPos: true,
        closeBtnInside: false,
        midClick: true,
        modal: true,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(document).on("click", ".popup-modal-dismiss", function(a) {
        a.preventDefault();
        $.magnificPopup.close();
    });
	// owl carousel  ------------------
    var b = $(".fullscreen-slider");
    b.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: true
    });
    $(".fullscreen-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".fullscreen-slider-holder").find(b).trigger("owl.next");
    });
    $(".fullscreen-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".fullscreen-slider-holder").find(b).trigger("owl.prev");
    });
    var c = $(".testimonials-slider");
    c.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: false
    });
    $(".testimonials-holder a.next-slide").on("click", function() {
        $(this).closest(".testimonials-holder").find(c).trigger("owl.next");
    });
    $(".testimonials-holder a.prev-slide").on("click", function() {
        $(this).closest(".testimonials-holder").find(c).trigger("owl.prev");
    });
    $(".slideshow-container").superslides({
        animation: "fade",
        play: 6000
    });	
    var d = $(".fullheight-carousel");
    d.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 4,
        pagination: false,
        autoHeight: true
    });
    $(".fullheight-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".fullheight-carousel-holder").find(d).trigger("owl.next");
    });
    $(".fullheight-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".fullheight-carousel-holder").find(d).trigger("owl.prev");
    });
    $(".carousel-link-holder").hover(function() {
        $(this).parent(".carousel-item").addClass("vis-decor");
    }, function() {
        $(this).parent(".carousel-item").removeClass("vis-decor");
    });
    var e = $(".single-slider");
    e.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: false,
        pagination: true,
        responsiveRefreshRate: 200,
        autoHeight: true
    });
    $(".single-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(e).trigger("owl.next");
    });
    $(".single-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(e).trigger("owl.prev");
    });
    var f = $(".product-slider");
    f.owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        afterInit: g
    });
    $(".product-image a.next-slide").on("click", function() {
        $(this).closest(".product-image").find(f).trigger("owl.next");
    });
    $(".product-image a.prev-slide").on("click", function() {
        $(this).closest(".product-image").find(f).trigger("owl.prev");
    });
    function g() {
        $(".owl-controls .owl-page").append('<a class="item-link" href="#"/>');
        var a = $(".owl-controls .item-link");
        $.each(this.owl.userItems, function(b) {
            $(a[b]).css({
                background: "url(" + $(this).find("img").attr("src") + ") center center no-repeat",
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                "background-size": "cover"
            }).click(function(a) {
                a.preventDefault();
                owl.trigger("owl.goTo", b);
            });
        });
    }
    $("#twitter-feed").tweet({
        username: "katokli3mmm",
        join_text: "auto",
        avatar_size: 0,
        count: 4
    });
    $("#twitter-feed").find("ul").addClass("twitter-slider");
    $("#twitter-feed").find("ul li").addClass("item");
    var h = $(".twitter-slider");
    h.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        pagination: false,
        autoHeight: false,
        singleItem: true
    });
    $(".twitter-holder .next-slide").on("click", function() {
        h.trigger("owl.next");
    });
    $(".twitter-holder .prev-slide").on("click", function() {
        h.trigger("owl.prev");
    });
	// tabs------------------
    $(".tabs-menu a").on("click", function(a) {
        a.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var b = $(this).attr("href");
        $(".tab-content").not(b).css("display", "none");
        $(b).fadeIn();
    });
	// one page nav ------------------
    $(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 90,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link"
    });
	// youtube video------------------
    var i = $(".background-video").data("vid");
    var j = $(".background-video").data("mv");
    $(".background-video").YTPlayer({
        fitToBackground: true,
        videoId: i,
        pauseOnScroll: true,
        mute: j,
        callback: function() {
            var a = $(".background-video").data("ytPlayer").player;
        }
    });
	// isotope ------------------
    function k() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
        }
    }
    k();
	// scroll------------------
    $(".to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1200, "easeInOutExpo");
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 74;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
	// map ------------------
    if ($("#map-canvas").length > 0) {
    $("#map-canvas").gmap3({
        action: "init",
        marker: {
			// markers and locations------------------
            values: [ {
                latLng: [ 40.7143528, -74.0059731 ],
                data: "KPN  - New York City",
                options: {
                    icon: "site/images/marker.png"
                }
            }, {
                latLng: [ 40.7168183, -73.9973402 ],
                data: "KPN - Washington",
                options: {
                    icon: "site/images/marker.png"
                }
            }, {
                latLng: [ 40.73334016, -73.99330616 ],
                data: "KPN - Florida",
                options: {
                    icon: "site/images/marker.png"
                }
            } ],
            options: {
                draggable: false
            },
            events: {
                mouseover: function(a, b, c) {
                    var d = $(this).gmap3("get"), e = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (e) {
                        e.open(d, a);
                        e.setContent(c.data);
                    } else $(this).gmap3({
                        infowindow: {
                            anchor: a,
                            options: {
                                content: c.data
                            }
                        }
                    });
                },
                mouseout: function() {
                    var a = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (a) a.close();
                }
            }
        },
        map: {
            options: {
                zoom: 14,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                scrollwheel: false,
                streetViewControl: true,
                draggable: true,
                styles: [ {
                    featureType: "all",
                    elementType: "labels.text",
                    stylers: [ {
                        weight: "0.04"
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "administrative.locality",
                    elementType: "all",
                    stylers: [ {
                        hue: "#C59D5F"
                    }, {
                        saturation: 7
                    }, {
                        lightness: 19
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "administrative.locality",
                    elementType: "labels.text",
                    stylers: [ {
                        hue: "#ffde00"
                    } ]
                }, {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [ {
                        hue: "#ffffff"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 100
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [ {
                        hue: "#C59D5F"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 100
                    }, {
                        visibility: "off"
                    } ]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [ {
                        hue: "#C59D5F"
                    }, {
                        saturation: -93
                    }, {
                        lightness: 31
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [ {
                        hue: "#C59D5F"
                    }, {
                        saturation: -93
                    }, {
                        lightness: 31
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels",
                    stylers: [ {
                        hue: "#C59D5F"
                    }, {
                        saturation: -93
                    }, {
                        lightness: -2
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [ {
                        hue: "#C59D5F"
                    }, {
                        saturation: -90
                    }, {
                        lightness: -8
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [ {
                        hue: "#C59D5F"
                    }, {
                        saturation: 10
                    }, {
                        lightness: 69
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [ {
                        hue: "#C59D5F"
                    }, {
                        saturation: -78
                    }, {
                        lightness: 67
                    }, {
                        visibility: "simplified"
                    } ]
                } ]
            }
        }
    });
	}
 	$('.chosen-select').niceSelect();
	// contact form------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message2").slideUp(750, function() {
            $("#message2").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contactform .name").val(),
                email: $("#contactform .email").val(),
                phone: $("#contactform .phone").val(),
                comments: $("#contactform .comments").val()
            }, function(a) {
                document.getElementById("message2").innerHTML = a;
                $("#message2").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message2").slideUp(1500);
    });
	// reservation form------------------
    $("#reservation-form").submit(function() {
        var a = $(this).attr("action");

        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit-res").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                phone: $("#phone").val(),
                resdate: $("#resdate").val(),
                restime: $("#restime").val(),
                resrest: $("#resrest").val(),
                numperson: $("#numperson").val(),
                comments: $("#comments").val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit-res").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#reservation-form input, #reservation-form textarea ").keyup(function() {
        $("#message").slideUp(1500);
    });
    $("#resdate").ionDatePicker();
	// subscribe form------------------
    $("#subscribe").ajaxChimp({
        language: "eng",
        url: "https://gmail.us1.list-manage.com/subscribe/post?u=1fe818378d5c129b210719d80&amp;id=a2792f681b"
    });
    $.ajaxChimp.translations.eng = {
        submit: "Submitting...",
        0: '<i class="fa fa-check"></i> We will be in touch soon!',
        1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
        2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    };
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $("header").addClass("sticky");
            setTimeout(function() {
                $(".logo-holder").addClass("logo-sticky");
            }, 350);
        } else {
            $("header").removeClass("sticky");
            setTimeout(function() {
                $(".logo-holder").removeClass("logo-sticky");
            }, 350);
        }
    });
	// video ------------------
    $(".video-container").css("width", $(window).width() + "px");
    $(".video-container ").css("height", parseInt(720 / 1280 * $(window).width()) + "px");
    if ($(".video-container").height() < $(window).height()) {
        $(".video-container ").css("height", $(window).height() + "px");
        $(".video-container").css("width", parseInt(1280 / 720 * $(window).height()) + "px");
    }
    $(".video-holder").height($(".media-container").height());
    if ($(window).width() > 1024) {
        if ($(".video-holder").length > 0) if (($(".media-container").height() + 150) / 9 * 16 > $(".media-container").width()) {
            $("iframe ").height($(".media-container").height() + 150).width(($(".media-container").height() + 150) / 9 * 16);
            $("iframe").css({
                "margin-left": -1 * $("iframe").width() / 2 + "px",
                top: "-75px",
                "margin-top": "0px"
            });
        } else {
            $("iframe").width($(window).width()).height($(window).width() / 16 * 9);
            $("iframe ").css({
                "margin-left": -1 * $("iframe").width() / 2 + "px",
                "margin-top": -1 * $("iframe").height() / 2 + "px",
                top: "50%"
            });
        }
    } else if ($(window).width() < 760) {
        $(".video-holder").height($(".media-container").height());
        $("iframe").height($(".media-container").height());
    } else {
        $(".video-holder").height($(".media-container").height());
        $("iframe").height($(".media-container").height());
    }
    var l = $(".vimeo-player")[0], m = $f(l), n = $(".status");
    m.addEvent("ready", function() {
        m.api("setVolume", 0);
    });
    $(".triangle-decor").append('<svg x="0px" y="0px" width="100%" height="15px"><defs><pattern id="bottom-divider" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M7.504-0.008l7.504,7.504L7.504,15L0,7.496L7.504-0.008z"></path></pattern></defs><rect x="0" y="0" width="100%" height="15" fill="url(#bottom-divider)"></rect></svg>');
    $(".header-inner .container").append('<div class="nav-button-holder"><div class="nav-button vis-m"><span></span><span></span><span></span></div></div>');
	$(".hero-content").append('<div class="hero-line"></div>');
	// navigation------------------
    var o = $(".nav-button"), p = $(".nav-holder"), q = $(".nav-holder ,.nav-button ");
    function r() {
        o.removeClass("vis-m");
        p.slideDown(500);
    }
    function s() {
        o.addClass("vis-m");
        p.slideUp(500);
    }
    o.on("click", function() {
        if ($(this).hasClass("vis-m")) r(); else s();
    });
    $(window).on("resize", function() {
        a();
    });
	$(".scroll-nav a").on("click",function(){
	var ww = $(window).width();
		if (ww < 1036) {
			s();	
		}		
	});
}

function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = $("#main");
        b.find("[data-top-bottom]").length > 0 && b.waitForImages(function() {
            s = skrollr.init();
            s.destroy();
            skrollr.init({
                forceHeight: !1,
                easing: "outCubic",
                mobileCheck: function() {
                    return !1;
                }
            });
        });
    }
    if (trueMobile) { $(".video-container video , .video-holder iframe , .background-video").remove();}
}
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});  
$(document).ready(function() {
    initKPN();
    initparallax();
});