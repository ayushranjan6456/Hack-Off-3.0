!function(s,t,e) {
    "use strict";function n() {
        if(s(".vc_row[id]").length) {
            var n=s(t).scrollTop();s(".vc_row[id]").each(function() {
                var e=s(this).attr("id");2<e.length&&(n>=s(this).offset().top-s(".header_trans-fixed").outerHeight()-s("#wpadminbar").outerHeight()&&s(".site-main-menu li:not(.menu-item-has-children) > a").closest("li:not(.menu-item-has-children)").addClass("active").siblings().removeClass("active"))}

            )}
    }

    function a() {
        var e,n=s(".site-header").not(".header_trans-fixed").outerHeight(),a=s(".menu-wrapper").data("top"),i=s("#wpadminbar").outerHeight();s("#wpadminbar").length?(e=i+n,s(".site-header").css("margin-top",i)): e=n,s(t).width()<a?s(".menu-wrapper").css("padding-top",e+"px"):s("#wpadminbar").length&&s(".site-header").hasClass("header_trans-fixed")?s(".menu-wrapper").css("padding-top",i+"px"):s(".menu-wrapper").css("padding-top","0"),s("#wpadminbar").length&&s(t).width()<768&&s("#wpadminbar").css( {
            position:"fixed",top:"0"
        }

        )}

    function i() {
        var e=s(".menu-wrapper").attr("data-top");t.outerWidth<e||s(".site-header").hasClass("topmenu-arrow")?(s(".menu-item-has-children i").length||(s("header .menu-item-has-children").append('<i class="fa fa-angle-down"></i>'),s("header .menu-item-has-children i").addClass("hide-drop")),s("header .menu-item-has-children i").on("click",function() {
            s(this).hasClass("animation")||(s(this).parent().toggleClass("is-open"),s(this).addClass("animation"),s(this).parent().siblings().removeClass("is-open").find(".fa").removeClass("hide-drop").prev(".sub-menu").slideUp(250),s(this).hasClass("hide-drop")?(s(this).closest(".sub-menu").length||s(".menu-item-has-children i").addClass("hide-drop").next(".sub-menu").hide(250),s(this).removeClass("hide-drop").prev(".sub-menu").slideToggle(250)): s(this).addClass("hide-drop").prev(".sub-menu").hide(100).find(".menu-item-has-children a").addClass("hide-drop").prev(".sub-menu").hide(250)),setTimeout(function() {
                s("header .site-main-menu i").removeClass("animation")
            }

            ,250)}

        )):s("header .menu-item-has-children i").remove()}

   

    s(t).on("scroll load",function() {
        30<=s(this).scrollTop()?(s(".site-header.header_trans-fixed").length&&(s(".site-header.header_trans-fixed").not(".fixed-dark").addClass("pix-header-fixed"),s(".fixed-dark").addClass("bg-fixed-dark"),s(".sticky-logo, .header-button-scroll").show(),s(".main-logo, .header-button-default").hide()),s(".right-menu.modern").length&&s(".right-menu.modern").closest(".fixed-header").addClass("fixed-header-scroll")): (s(".site-header.header_trans-fixed").length&&(s(".site-header.header_trans-fixed").not(".fixed-dark").removeClass("pix-header-fixed"),s(".fixed-dark").removeClass("bg-fixed-dark"),s(".sticky-logo, .header-button-scroll").hide(),s(".main-logo, .header-button-default").show()),s(".right-menu.modern").length&&s(".right-menu.modern").closest(".fixed-header").removeClass("fixed-header-scroll"))
    }

    ),s(t).width()>=s(".menu-wrapper").data("top")&&s('.site-main-menu li:not(.menu-item-has-children) > a[href^="#"]').on("click",function(e) {
        ;s(n).length&&s("html,body").animate( {
            scrollTop: s(n).offset().top-s(".header_trans-fixed").outerHeight()-s("#wpadminbar").outerHeight()
        }

        ,"slow")}

    ),s(".open-search").on("click",function() {
        s("body").css("overflow","hidden"),s(".site-search").addClass("open")}

    ),s(".close-search").on("click",function() {
        s("body").css("overflow",""),s(".site-search").removeClass("open")}

    ),s(".toggle-menu").on("click",function(e) {
        e.preventDefault();s('<div class="mask-overlay">').hide().appendTo("body").fadeIn("fast"),s("html").addClass("no-scroll sidebar-open").height(t.innerHeight+"px"),s("#wpadminbar").length?s(".sidebar-open .site-nav").css("top","46px"): s(".sidebar-open .site-nav").css("top","0")
    }

    ),s(".close-menu, .mask-overlay").on("click",function(e) {
        e.preventDefault(),s("html").removeClass("no-scroll sidebar-open").height("auto"),s(".mask-overlay").remove()}

    ),s(".search-icon-wrapper.ico-style .close-search").on("click",function() {
        s(this).parent().toggleClass("is-active"),s(this).parent().hasClass("is-active")&&setTimeout(function() {
            s(".search-icon-wrapper.ico-style .search-field").focus()}

        ,300)}

    ),s(e).on("click",function(e) {
        s(e.target).closest(".search-icon-wrapper.ico-style").length||s(".ico-style .close-search").parent().removeClass("is-active"),e.stopPropagation()}

    ),s(".additional-nav").on("click",function(e) {
        e.preventDefault(),s(".additional-menu-wrapper").addClass("menu-open"),s(".menu-wrapper").addClass("additional-menu-open")}

    ),s(".additional-nav-close, .additional-menu-overlay").on("click",function() {
        s(".additional-menu-wrapper").removeClass("menu-open"),s(".menu-wrapper").removeClass("additional-menu-open")}

    ),s(t).on("load",function() {
        !function() {
            s(".aside-nav").on("click",function() {
                return s(".aside-menu").toggleClass("active-menu"),s(".site-header").toggleClass("active-menu"),!1}

            ),s(".menu-wrapper:not(.unit) .menu-item-has-children > a").on("click",function(e) {
                }

            );var e=s(".menu-wrapper").data("top");if(t.outerWidth>=e?(s(".menu-wrapper").on("click",function(e) {
                e.target.closest(".aside-menu")||s(".sub-menu-open").slideUp(250)}

            ),s(".aside-menu .menu-item-has-children a").addClass("hide-drop"),s(".aside-menu .menu-item a").on("click",function() {
                s(this).parent().hasClass("menu-item-has-children")&&(s(this).hasClass("hide-drop")?s(this).closest(".sub-menu").length?(s(this).removeClass("hide-drop").next(".sub-menu").slideDown(250).removeClass("sub-menu-open"),s(this).parent().siblings().find(".sub-menu").slideUp(250).addClass("sub-menu-open")): (s(".menu-item-has-children a").addClass("hide-drop").next(".sub-menu").hide(250).removeClass("sub-menu-open"),s(this).removeClass("hide-drop").next(".sub-menu").slideToggle(250).toggleClass("sub-menu-open")):(s(this).addClass("hide-drop").next(".sub-menu").hide(250).find(".menu-item-has-children a").addClass("hide-drop").next(".sub-menu").hide(250),s(this).next(".sub-menu").removeClass("sub-menu-open")))
            }

            )):s(".menu-item-has-children a").removeClass("hide-drop"),s(".aside-fix").length&&s(t).width()>e) {
                var n=s(".logo span, .logo img").outerWidth();s(".logo").css("top",n+"px")}
        }

        ()}

    ),s(t).on("scroll",function() {
        n()}

    ),s(t).on("load resize",function() {
        a(),i(),n()}

    ),t.addEventListener("orientationchange",function() {
        a(),i()}

    )}

(jQuery,window,document);