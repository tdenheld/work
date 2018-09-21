// TK305 - JAVASCRIPT

$(document).ready(function () {

    // global vars
    // ------------------------------------------------------------

    // screen handler vars
    var mobile = false;
    var window_width = Number;
    var window_height = Number;

    // settings on scroll
    var hero_bottom = Number;
    var trigger_hook = Number;

    // animations
    var default_ease = Power3.easeInOut;





    // screen sizes handler
    // ------------------------------------------------------------	

    // update screen
    function update_window_size() {
        window_height = $(window).innerHeight();
        window_width = $(window).innerWidth();
        hero_bottom = Math.round(window_width * .625);

        // set breakpoints
        if (window_width > 912) {
            mobile = false;
            trigger_hook = 0.8;
        } else {
            mobile = true;
            trigger_hook = 0.9;
        };
    };
    update_window_size();

    // update when resizing
    $(window).resize(function () {
        update_window_size();
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
    function scroll_trig(i) {
        var id = document.getElementById("scrll-section-" + i);
        var el = "#scrll-section-" + i;
        if (id) {
            var scrll = new ScrollMagic.Scene({
                    triggerElement: el,
                })
                .triggerHook(trigger_hook)
                .offset(0)
                .on("start", function () {
                    $(el + " .js-tr").toggleClass("is-active");
                })
                //.addIndicators()
                .addTo(controller);
        };
    };
    // init section scroll events
    var sections = $(".js-scrll-section");
    sections.each(function (i) {
        $(this).attr("id", "scrll-section-" + i);
        scroll_trig(i);
    });

    // constructor for navbar color change
    // ----------------------------------------------------------------
    function navColorChange(id) {
        var selector = "#js-hero-" + id;
        var scrll = new ScrollMagic.Scene({
                triggerElement: selector,
            })
            .offset(hero_bottom - 28)
            .triggerHook(0)
            .setClassToggle("#js-navbar", "navbar-color--" + id)
            //.addIndicators()
            .addTo(controller);
    };
    navColorChange("wn");
    navColorChange("ar");





    // image loader
    // ------------------------------------------------------------
    function img_loader(page) {
        TweenLite.delayedCall(.05, function () {
            $(".js-loader-item-" + page).Lazy({
                threshold: 99999,
            });
        });
    };

    // load hero images sequentially to preload them after initial load
    function heroLoad(page) {
        var hero = ".js-loader-hero-" + page;
        $(hero).Lazy();
    };
    setTimeout(heroLoad("ns"), 1500);
    setTimeout(heroLoad("wn"), 2000);
    setTimeout(heroLoad("ar"), 2250);
    setTimeout(heroLoad("cg"), 2500);





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
        if (pos < window_height) {
            $(".js-parallax").css({
                "transform": "translate3d(0," + Math.round(0 - pos / 5.5) + "px ,0)"
            });
        };

        // show hide specs on scroll
        if (pos > window_height - (window_height - hero_bottom)) {
            $(".js-hero-gradient").addClass("is-active");
            $(".js-specs").addClass("is-active");
        } else {
            $(".js-hero-gradient").removeClass("is-active");
            $(".js-specs").removeClass("is-active");
        };

        scrolled = false;
    };






    // router
    // ----------------------------------
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
        // -------------------------------------------------------
        function toggle_cases(i) {
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
                        img_loader(r);
                        currentPage = r;
                    };
                };
            });
        };

        // loop trough all pages
        for (i = 3; i < routes.length; i++) {
            toggle_cases(routes[i]);
        };


        // helper functions
        // ------------------------------------------------------------------        
        // base function to trigger page transition
        function page_transition(s, page) {
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
        }

        // remove FX
        function removeFX(rA) {
            if (rA) {
                $(".js-line").removeClass("is-active");
            };
            TweenLite.to(".js-line, .js-ao", .6, {
                ease: default_ease,
                autoAlpha: 0,
                display: "none",
            });
        };


        // main navigation
        // ------------------------------------------------------------------   
        // main call to action button on home
        $(".js-checkout-button").click(function () {
            $(".js-line").addClass("is-active");
            $("#js-navbar").removeClass().addClass("navbar");
            TweenLite.to("#js-navbar", .55, {
                ease: default_ease,
                autoAlpha: 0,
            });
            img_loader("ns");
            setTimeout(function () {
                removeFX();
                $(window).scrollTop(0);
            }, 600);
            setTimeout(function () {
                $("#js-navbar").addClass("navbar--ns");
                TweenLite.to("#js-navbar", .7, {
                    ease: default_ease,
                    autoAlpha: 1,
                });
            }, 900);
            page_transition(.6, "ns");
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
                            ease: default_ease,
                            autoAlpha: 0,
                        });
                    };
                };

                if (i === "about") {
                    $(".js-about-img").Lazy({
                        threshold: 99999,
                    });
                };

                setTimeout(function () {
                    // add line under nav item
                    $(".js-nav--" + i).addClass("is-active");

                    // fade in navbar if on case page
                    if (currentPage !== "home" && currentPage !== r) {
                        $("#js-navbar").removeClass().addClass("navbar navbar--" + i);
                        TweenLite.to("#js-navbar", .7, {
                            ease: default_ease,
                            autoAlpha: 1,
                        });
                    };

                    // add FX in the background
                    addFX();

                    // scroll to top
                    $(window).scrollTop(0);
                }, 300);
                page_transition(.25, i);
            });
        };
        navbarItem("work", "about");
        navbarItem("about", "work");
    };
    router();





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

});