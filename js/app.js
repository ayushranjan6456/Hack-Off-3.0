var PIXELSIGNS = PIXELSIGNS || {};
!function(d) {
    "use strict";
    PIXELSIGNS.initialize = {
        init: function() {
            PIXELSIGNS.initialize.general(),
            PIXELSIGNS.initialize.tab(),
            PIXELSIGNS.initialize.sectionBackground(),
            PIXELSIGNS.initialize.sectionSwitch(),
            PIXELSIGNS.initialize.portfolio(),
            PIXELSIGNS.initialize.countUp(),
            PIXELSIGNS.initialize.swiperSlider(),
            PIXELSIGNS.initialize.googleMap(),
            PIXELSIGNS.initialize.contactFrom()
        },
        general: function() {
            d(".saaspik-dropdown li").on("click", function(t) {
                var e = d(t.target)
                  , i = e.closest(".saaspik-dropdown")
                  , a = i.find("label")
                  , n = a.find("span")
                  , s = i.find("input");
                (i.hasClass("init") || s.is(":checked") && !e.hasClass("selected")) && (i.removeClass("init"),
                i.find("li.selected").removeClass("selected"),
                e.addClass("selected"),
                i.attr("data-val", e.attr("data-val") || "" == e.attr("data-val") ? e.attr("data-val") : e.text().trim()),
                n.text(e.attr("data-text") ? e.attr("data-text") : e.text().trim()),
                a.css("width", n.width() + 20 + "px"),
                s.prop("checked", !1))
            }),
            d(".saaspik-select").on("click", ".placeholder", function() {
                var t = d(this).closest(".saaspik-select");
                t.hasClass("is-open") ? t.removeClass("is-open") : (t.addClass("is-open"),
                d(".saaspik-select.is-open").not(t).removeClass("is-open"))
            }).on("click", "ul>li", function() {
                d(this).closest(".saaspik-select").removeClass("is-open").find(".placeholder").text(d(this).text())
            }),
            d(".lng-dropdown.init li:first-child").click(),
            new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !1,
                live: !0,
                scrollContainer: null
            }).init(),
            d(".faq .card").each(function() {
                var i = d(this);
                i.on("click", function(t) {
                    var e = i.hasClass("active");
                    d(".faq .card").removeClass("active"),
                    e ? i.removeClass("active") : i.addClass("active")
                })
            }),
            d(".popup-video").each(function() {
                d(".popup-video").magnificPopup({
                    type: "iframe"
                })
            }),
            d(".pricing-tab-switcher, .tab-btn").on("click", function() {
                d(".pricing-tab-switcher, .tab-btn").toggleClass("active"),
                d(".pricing-tab").toggleClass("seleceted"),
                d(".pricing-amount").toggleClass("change-subs-duration")
            }),
            d(".tabs-box").length && d(".tabs-box .pricing-tab  .tab-btn").on("click", function(t) {
                t.preventDefault();
                var e = d(d(this).attr("data-tab"));
                if (d(e).is(":visible"))
                    return !1;
                e.parents(".tabs-box").find(".pricing-tab ").find(".tab-btn").removeClass("active-btn"),
                d(this).addClass("active-btn"),
                e.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0),
                e.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab animated fadeIn"),
                d(e).fadeIn(300),
                d(e).addClass("active-tab animated fadeIn")
            }),
            d("#pix-tabs-nav li:nth-child(2)").addClass("active"),
            d("#pix-tabs-content .content").hide(),
            d("#pix-tabs-content .content:nth-child(2)").show(),
            d("#pix-tabs-nav li").on("click", function() {
                d("#pix-tabs-nav li").removeClass("active"),
                d(this).addClass("active"),
                d("#pix-tabs-content .content").hide();
                var t = d(this).find("a").attr("href");
                return d(t).fadeIn(400),
                !1
            }),
            d(".site-main-menu li a").each(function() {
                d(this).attr("href") == location.href.split("/").slice(-1) && d(this).addClass("current_page"),
                d(this).on("click", function(t) {
                    d("body").removeClass("open-menu")
                })
            }),
            d("body").on("contextmenu", function(t) {
                return t.preventDefault(),
                t.stopPropagation(),
                !1
            })
        },
        swiperSlider: function() {
            d(".swiper-container").each(function() {
                var t = d(this)
                  , e = (d(this).attr("id"),
                d(this).data("perpage") || 1)
                  , i = d(this).data("loop") || !0
                  , a = d(this).data("speed") || 700
                  , n = d(this).data("autoplay") || 5e3
                  , s = d(this).data("slidegroup") || 1
                  , o = d(this).data("space") || 0
                  , l = d(this).data("effect")
                  , c = d(this).data("direction") || "horizontal"
                  , r = d(this).data("breakpoints");
                new Swiper(t,{
                    slidesPerView: e,
                    spaceBetween: o,
                    slidesPerGroup: s,
                    loop: i,
                    speed: a,
                    effect: l,
                    direction: c,
                    breakpoints: r,
                    watchSlidesVisibility: !0,
                    slideVisibleClass: "swiper-slide-visible",
                    autoplay: {
                        delay: n,
                        disableOnInteraction: !1
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                })
            })
        },
        portfolio: function() {
            if (void 0 !== d.fn.imagesLoaded && void 0 !== d.fn.isotope) {
                d(".pixsass-portfolio-items").imagesLoaded(function() {
                    var e = d(".pixsass-portfolio-items");
                    e.isotope({
                        itemSelector: ".pixsass-portfolio-item",
                        percentPosition: !0,
                        transitionDuration: "0.5s",
                        masonry: {
                            columnWidth: ".grid-sizer",
                            layoutMode: "masonry"
                        }
                    }),
                    d(".pixsass-isotope-filter a").on("click", function() {
                        d(".pixsass-isotope-filter").find(".current").removeClass("current"),
                        d(this).parent().addClass("current");
                        var t = d(this).attr("data-filter");
                        return e.isotope({
                            filter: t
                        }),
                        !1
                    }),
                    d(window).resize(function() {
                        e.isotope(),
                        t.masonry()
                    })
                });
                var t = d(".blog-items");
                t.masonry({
                    itemSelector: ".blog-item",
                    percentPosition: !0
                })
            }
        },
        mobileMenu: function() {
            d(window).width() < 991 && (d(".site-main-menu li.active").addClass("open").children("ul").show(),
            d(".site-main-menu li.menu-item-has-children>a").on("click", function() {
                d(this).removeAttr("href");
                var t = d(this).parent("li");
                t.hasClass("open") ? (t.removeClass("open"),
                t.find("li").removeClass("open"),
                t.find("ul").slideUp(400)) : (t.addClass("open"),
                t.children("ul").slideDown(400),
                t.siblings("li").children("ul").slideUp(400),
                t.siblings("li").removeClass("open"),
                t.siblings("li").find("li").removeClass("open"),
                t.siblings("li").find("ul").slideUp(400))
            })),
            d(".toggle-menu").on("click", function(t) {
                t.preventDefault();
                d("body").toggleClass("open-menu"),
                d('<div class="mask-overlay">').hide().appendTo("body").fadeIn("fast"),
                d(".mask-overlay, .close-menu").on("click", function() {
                    d("body").removeClass("open-menu"),
                    d(".mask-overlay").remove()
                })
            })
        },
        sectionBackground: function() {
            d("[data-bg-image]").each(function() {
                var t = d(this).data("bg-image");
                d(this).css({
                    backgroundImage: "url(" + t + ")"
                })
            })
        },
        sectionSwitch: function() {
            d('[data-type="section-switch"], #menu-home li a, .scroll-btn').on("click", function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var t = d(this.hash);
                    if (0 < t.length)
                        return t = t.length ? t : d("[name=" + this.hash.slice(1) + "]"),
                        d("html,body").animate({
                            scrollTop: t.offset().top
                        }, 1e3),
                        !1
                }
            })
        },
        tab: function() {
            d(".tab-nav-item > .acc-btn").on("click", function() {
                d(this).hasClass("active") ? (d(this).removeClass("active"),
                d(this).siblings(".content").slideUp(400),
                d(".tab-nav-item > .acc-btn i").removeClass("fa-minus").addClass("fa-plus")) : (d(".tab-nav-item > .acc-btn i").removeClass("fa-minus").addClass("fa-plus"),
                d(this).find("i").removeClass("fa-plus").addClass("fa-minus"),
                d(".tab-nav-item > .acc-btn").removeClass("active"),
                d(this).addClass("active"),
                d(".content").slideUp(400),
                d(this).siblings(".content").slideDown(400))
            });
            var s = d(".gp-tabs-navigation li")
              , o = d(".gp-tabs-content");
            function t(t) {
                var e = parseInt(t.children(".gp-tabs-navigation").width())
                  , i = parseInt(t.width());
                t.scrollLeft() >= e - i ? t.parent(".gp-tabs").addClass("is-ended") : t.parent(".gp-tabs").removeClass("is-ended")
            }
            s.on("click", function(t) {
                t.preventDefault();
                var e = d(this);
                if (!e.hasClass("active-tab")) {
                    var i = e.data("content")
                      , a = o.find('.pix-tab-item[data-content="' + i + '"]')
                      , n = a.innerHeight();
                    s.removeClass("active-tab"),
                    e.addClass("active-tab"),
                    a.addClass("active-tab").siblings(".pix-tab-item").removeClass("active-tab"),
                    o.animate({
                        height: n
                    }, 500)
                }
            }),
            t(d(".gp-tabs nav")),
            d(window).on("resize", function() {
                t(d(".gp-tabs nav")),
                o.css("height", "auto")
            }),
            d(".gp-tabs nav").on("scroll", function() {
                t(d(this))
            })
        },
        countUp: function() {
            var i = {
                useEasing: !0,
                useGrouping: !0,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: ""
            }
              , t = d("[data-counter]");
            t && t.each(function() {
                var t = d(this).data("counter")
                  , e = new CountUp(this,0,t,0,2.5,i);
                d(this).appear(function() {
                    e.start()
                }, {
                    accX: 0,
                    accY: 0
                })
            })
        },
        googleMap: function() {
            d(".gmap3-area").each(function() {
                var t = d(this)
                  , e = (t.data("key"),
                t.data("lat"))
                  , i = t.data("lng")
                  , a = t.data("mrkr");
                t.gmap3({
                    center: [e, i],
                    zoom: 8,
                    scrollwheel: !1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [{
                        featureType: "administrative.country",
                        elementType: "geometry.fill",
                        stylers: [{
                            visibility: "on"
                        }]
                    }]
                }).marker(function(t) {
                    return {
                        position: t.getCenter(),
                        icon: a
                    }
                })
            })
        },
        contactFrom: function() {
            d("[data-pixsaas]").each(function() {
                var e = d(this);
                d(".form-result", e).css("display", "none"),
                e.submit(function() {
                    d('button[type="submit"]', e).addClass("clicked");
                    var a = {};
                    return d("[name]", e).each(function() {
                        var t = d(this)
                          , e = t.attr("name")
                          , i = t.val();
                        a[e] = i
                    }),
                    d.ajax({
                        url: e.attr("action"),
                        type: "POST",
                        data: a,
                        success: function(t) {
                            1 == t.error ? d(".form-result", e).addClass("alert-warning").removeClass("alert-success alert-danger").css("display", "block") : d(".form-result", e).addClass("alert-success").removeClass("alert-warning alert-danger").css("display", "block"),
                            d(".form-result > .content", e).html(t.message),
                            d('button[type="submit"]', e).removeClass("clicked")
                        },
                        error: function() {
                            d(".form-result", e).addClass("alert-danger").removeClass("alert-warning alert-success").css("display", "block"),
                            d(".form-result > .content", e).html("Sorry, an error occurred."),
                            d('button[type="submit"]', e).removeClass("clicked")
                        }
                    }),
                    !1
                })
            })
        }
    },
    PIXELSIGNS.documentOnReady = {
        init: function() {
            PIXELSIGNS.initialize.init()
        }
    },
    PIXELSIGNS.documentOnLoad = {
        init: function() {
            d(".page-loader").fadeOut("slow")
        }
    },
    PIXELSIGNS.documentOnResize = {
        init: function() {}
    },
    PIXELSIGNS.documentOnScroll = {
        init: function() {
            PIXELSIGNS.initialize.sectionBackground(),
            300 < d(window).scrollTop() ? d(".return-to-top").addClass("back-top") : d(".return-to-top").removeClass("back-top")
        }
    },
    d(document).ready(PIXELSIGNS.documentOnReady.init),
    d(window).on("load", PIXELSIGNS.documentOnLoad.init),
    d(window).on("resize", PIXELSIGNS.documentOnResize.init),
    d(window).on("scroll", PIXELSIGNS.documentOnScroll.init)
}(jQuery);

faq_nav = document.querySelectorAll('.faqs .nav-link');
list1 = document.querySelector('#Register')
list2 = document.querySelector('#Hackathon')
faq_nav.forEach(element => {
    element.addEventListener('click', function(){
        if(this.id=='design-tab'){
            list1.classList.add('show');
            list2.classList.remove('show');
            list1.classList.add('active');
            list2.classList.remove('active');
        }
        else{
            list2.classList.add('show');
            list1.classList.remove('show');
            list2.classList.add('active');
            list1.classList.remove('active');
        }
    })      
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let start = null;
   
    window.requestAnimationFrame(step);
  
    function step(now) { 
      if (!start) 
        start = now;
      const timeTaken = now - start;
      window.scrollTo(0, ease(timeTaken, startPosition, distance, duration));
      if (timeTaken < duration) 
        window.requestAnimationFrame(step);
    }

    function ease(t, b, c, d) {
        t /= d;
	return -c * t*(t-2) + b;
    };
  }

var links = document.querySelectorAll(".nav");

links.forEach(elem => elem.addEventListener("click", smoothScroll));   

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        items:1,
        lazyLoad:true,
        loop:true,
        margin:10,
    });
  });

  $(function(){
  
    var swiper = new Swiper('.carousel-gallery .swiper-container', {
      effect: 'slide',
      speed: 900,
      slidesPerView: 5,
      spaceBetween: 20,
      simulateTouch: true,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: '.carousel-gallery .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        // when window width is <= 320px
        375: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    }); /*http://idangero.us/swiper/api/*/
  
    
  
});

var swiper = new Swiper('#prev-speakers .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    lazyLoading: true,
    lazy: {
        loadPrevNext: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });