// TK305 - JAVASCRIPT


// global vars
// ------------------------------------------------------------

// screen handler vars
var mobile = false;
var vw = Number;
var vh = Number;

// settings on scroll
var heroBottom = Number;
var triggerHook = Number;




// screen sizes handler
// ------------------------------------------------------------	

// update screen
function updateWindowSize() {
    vh = window.innerHeight;
    vw = window.innerWidth;
    heroBottom = Math.round(vw * .625);

    // set breakpoints
    if (vw > 912) {
        mobile = false;
        triggerHook = 0.8;
    } else {
        mobile = true;
        triggerHook = 0.9;
    };
};
updateWindowSize();

// update when resizing
$(window).resize(function () {
    updateWindowSize();
});





// scroll magic
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        duration: 99999,
    },
});

// generic scrollmagic constructor
// -----------------------------------------------------------------
function scrollTrig(i) {
    var id = document.getElementById("scrll-section-" + i);
    var el = "#scrll-section-" + i;
    if (id) {
        var scrll = new ScrollMagic.Scene({
                triggerElement: el,
            })
            .triggerHook(triggerHook)
            .offset(0)
            .on("start", function () {
                $(el + " .js-tr").toggleClass("is-active");
            })
            //.addIndicators()
            .addTo(controller);
    };
};
// init section scroll events
$(function () {
    var sections = $(".js-scrll-section");
    sections.each(function (i) {
        $(this).attr("id", "scrll-section-" + i);
        scrollTrig(i);
    });
});


// constructor for navbar color change
// ----------------------------------------------------------------
function navColorChange(id) {
    var selector = document.getElementById("js-hero-" + id);
    if (selector) {
        var scrll = new ScrollMagic.Scene({
                triggerElement: selector,
            })
            .offset(heroBottom - 28)
            .triggerHook(0)
            .setClassToggle("#js-navbar", "navbar-color--" + id)
            //.addIndicators()
            .addTo(controller);
    };
};
$(function () {
    navColorChange("wn");
    navColorChange("ar");
});





// image loader
// ------------------------------------------------------------
function imgLoader(page) {
    TweenLite.delayedCall(.05, function () {
        $(".js-loader-item-" + page).Lazy({
            threshold: 99999,
        });
    });
};





// functionality that"s on linked on scroll
// ------------------------------------------------------------	
var scrolled = false;

$(window).scroll(function () {
    scrolled = true;
    if (scrolled && mobile == false) {
        requestAnimationFrame(scroll);
    };
});

function scroll() {
    var pos = $(window).scrollTop();

    // parallax
    if (pos < vh) {
        $(".js-parallax").css({
            "transform": "translate3d(0," + Math.round(0 - pos / 5.5) + "px ,0)"
        });
    };

    // show hide hero specs on scroll
    if (pos > vh - (vh - heroBottom)) {
        $(".js-hero-gradient, .js-specs").addClass("is-active");
    } else {
        $(".js-hero-gradient, .js-specs").removeClass("is-active");
    };

    scrolled = false;
};






// router
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function router() {

    // put all pages in array
    var routes = [
        "home",
        "work",
        "about",
        "ns",
        "wn",
        "ar",
        "cg",
    ];

    // put current page in var
    var currentPage = routes[0];

    // hide all pages by default
    $(".js-page").hide();

    // show current page
    $(".js-page--" + currentPage).show();


    // case buttons
    // ----------------------
    function toggleCases(i) {
        var btn = ".js-case--" + i;
        var page = ".js-page--" + i;

        // make work tiles clickable
        $(btn).click(function () {

            // hide all pages
            TweenLite.set(".js-page", {
                autoAlpha: 0,
                display: "none",
            });
            // show current new page
            TweenLite.set(page, {
                autoAlpha: 1,
                display: "block"
            });

            // reset navbar, FX and page scroll position
            removeFX(true);
            $(".js-nav--work").removeClass("is-active");
            $(".js-nav--about").removeClass("is-active");
            $(window).scrollTop(0);

            // loop through pages on click to match the current page
            for (n = 0; n < routes.length; n++) {
                var r = routes[n];
                if (i === r) {
                    $("#js-navbar").removeClass().addClass("navbar navbar--" + r);
                    $("body").removeClass().addClass("bg--" + r);
                    splitText(".js-split-txt", 0.08);
                    imgLoader(r);
                    currentPage = r;
                };
            };
        });
    };

    // loop trough all pages
    for (i = 3; i < routes.length; i++) {
        toggleCases(routes[i]);
    };


    // helper functions
    // ------------------------

    // base function to trigger page transition
    function pageTransition(s, page) {
        // set current page
        currentPage = page;

        // fade out page
        TweenLite.to(".js-page", s, {
            autoAlpha: 0,
            display: "none",
            onComplete: function () {
                // fade in page
                TweenLite.set(".js-page--" + page, {
                    autoAlpha: 1,
                    display: "block",
                });
                splitText(".js-split-txt", 0.08);
                splitText(".js-split-txt-about", 0.08);
                // set body background color to page color properties
                $("body").removeClass().addClass("bg--" + page);
            },
        });
    };

    // add FX
    function addFX() {
        // add FX in the background
        $(".js-line").removeClass("is-active");
        TweenLite.set(".js-line, .js-ao", {
            autoAlpha: 1,
            display: "block",
        });
    };

    // remove FX
    function removeFX(rA) {
        if (rA) {
            $(".js-line").removeClass("is-active");
        };
        TweenLite.to(".js-line, .js-ao", .6, {
            ease: Power3.easeInOut,
            autoAlpha: 0,
            display: "none",
        });
    };


    // main navigation
    // ------------------------

    // main call to action button on home
    $(".js-checkout-button").click(function () {
        $(".js-line").addClass("is-active");
        $("#js-navbar").removeClass().addClass("navbar");
        TweenLite.to("#js-navbar", .55, {
            ease: Power3.easeInOut,
            autoAlpha: 0,
        });
        imgLoader("ns");
        setTimeout(function () {
            removeFX();
            $(window).scrollTop(0);
        }, 600);
        setTimeout(function () {
            $("#js-navbar").addClass("navbar--ns");
            TweenLite.to("#js-navbar", .7, {
                ease: Power3.easeInOut,
                autoAlpha: 1,
            });
        }, 900);
        pageTransition(.6, "ns");
    });

    // navbar items constructor
    function navbarItem(i, r) {
        $(".js-nav--" + i).click(function () {
            if (currentPage !== i) {
                // remove line under nav item
                $(".js-nav").removeClass("is-active");

                // fade out navbar
                if (currentPage !== "home" && currentPage !== r) {
                    TweenLite.to("#js-navbar", .25, {
                        ease: Power3.easeInOut,
                        autoAlpha: 0,
                    });
                };

                if (i === "about") {
                    $(".js-about-img").Lazy({
                        threshold: 99999,
                    });
                };

                // if page is slightly scrolled down animate logo in (on mobile only)
                if ($(window).scrollTop() >= 40 && mobile == true) {
                    TweenLite.fromTo(".js-logo", .25, {
                        ease: Power3.easeInOut,
                        autoAlpha: 0,
                    }, {
                        delay: 0.3,
                        autoAlpha: 1,
                    });
                };

                setTimeout(function () {
                    // add line under nav item
                    $(".js-nav--" + i).addClass("is-active");

                    // fade in navbar if on case page or scrolled down
                    if (currentPage !== "home" && currentPage !== r) {
                        $("#js-navbar").removeClass().addClass("navbar navbar--" + i);
                        TweenLite.to("#js-navbar", .7, {
                            ease: Power3.easeInOut,
                            autoAlpha: 1,
                        });
                    };

                    // add FX in the background
                    addFX();

                    // scroll to top
                    $(window).scrollTop(0);
                }, 300);
                pageTransition(.25, i);

                // if page is the same as current page scroll up
            } else {
                if ($(window).scrollTop() >= 480) {
                    splitText(".js-split-txt-about", 0.3);
                };
                TweenLite.to(window, 0.5, {
                    ease: Power3.easeInOut,
                    scrollTo: {
                        y: 0,
                        autoKill: false,
                    },
                });
            };
        });
    };
    navbarItem("work", "about");
    navbarItem("about", "work");
};
$(function () {
    router();
});





// include html
// ------------------------------------------------------------
function include_html() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    };
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    };
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("include");
                    include_html();
                };
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        };
    };
};
include_html();



// split text
// ------------------------------------------------------------
function splitText(className, delay) {
    if ($(className)[0]) {
        var tl = new TimelineLite,
            mySplitText = new SplitText(className, {
                type: "words,chars"
            }),
            //an array of all the divs that wrap each character
            chars = mySplitText.chars;

        tl.staggerFrom(chars, 0.7, {
            opacity: 0,
            x: 80,
            ease: Back.easeOut,
            delay: delay,
        }, 0.01, "+=0");
    };
};

// preloader
// ------------------------------------------------------------	
function loader() {
    // init loader view
    TweenMax.to(".loader", 0.1, {
        opacity: 1
    });

    // loader animation - draw svg
    var tween = TweenMax.fromTo(".loader__path", 0.7, {
        drawSVG: "0% 20%"
    }, {
        repeat: -1,
        ease: SlowMo.ease.config(0.1, 0.2, false),
        drawSVG: "90% 100%"
    });

    // load website
    window.addEventListener("load", function () {
        TweenLite.to(".loader", 0.3, {
            delay: 0.7,
            ease: Power3.easeInOut,
            autoAlpha: 0,
            display: "none",
            onComplete: function () {
                TweenLite.set("#app", {
                    display: "block",
                });
                tween.kill();
                splitText(".js-split-txt", 0.35);
            }
        });
    });
};
loader();