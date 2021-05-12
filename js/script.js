$(function (){

    // burger
    // ==========
    var $nav = $('.nav-area')
    var $btn = $('.header__burger')
    var $mask = $('.header__overlay')
    var $navLink = $('.header__nav-link')
    var open = 'open' // class

    // menu open close
    $btn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    })
    // overlay close
    $mask.add($navLink).on('click', function () {
        $nav.removeClass(open);
    })


    // header-color
    $(window).on('scroll', function () {
        if ($('.header').height() < $(this).scrollTop()) {
            $('.header').addClass('change-color')
        } else {
            $('.header').removeClass('change-color')
        }
    })

    // smooth scroll
    $('a[href^="#"]').click(function () {
        var speed = 500
        var href = $(this).attr("href")
        var target = $(href == "#" || href == "" ? 'html' : href)
        var position = target.offset().top
        $("html, body").animate(
            {
                scrollTop: position - $('#header').outerHeight()
            },
            speed, "swing")
        return false
    })

    // totop表示切替
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 300) {
            $('.totop').fadeIn(400)
        } else {
            $('.totop').fadeOut(400)
        }
    })

    // swiper
    new Swiper( '.swiper-container', {
        centeredSlides: true,
        effect: 'fade',
        speed: 400,
        loop: true,
        autoResize: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
    // swiper ホバーしたら矢印が出る
    $('.works__slider').hover(
        function () {
            $(".swiper-button-prev, .swiper-button-next").fadeIn()
        },
        function() {
            $(".swiper-button-prev, .swiper-button-next").fadeOut()
        }
    )

    // wow
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100,
            callback: function (box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
    );
    wow.init();
    document.getElementById('moar').onclick = function () {
        var section = document.createElement('section');
        section.className = 'section--purple wow fadeInDown';
        this.parentNode.insertBefore(section, this);
    };

    // pager
    var $pagerBtn = $('.pager-btn')
    var active = 'active'

    $pagerBtn.on('click', function () {
        if(!$(this).childlen('a'),hasClass(active)) {
            $(this).childlen('a').addClass(active)
        }
        $(this).not().childlen('a').removeClass(active)
    })

    // radio
    var $inputRadio = $('input[type="radio", name="type"]')

    $inputRadio.on('click', function () {
        if($(this).prop('checked',true)){
            return false
        }else {
            return true
        }
    })


})