$(function () {
    //吹き出し画像の遅延読み込み
    $(".say .faceicon img").attr("loading", "lazy");

    //モバイルの追従目次
    $('#mobile-toc-widget-wrap label').on('click', function () {
        $('.menu-trigger').toggleClass('active');
    });
    $('#mobile-toc-widget-wrap .toc_widget_list a').on('click', function () {
        $('.menu-trigger').toggleClass('active');
    });
    $('#drawer__input').on('click', function () {
        if ($('#drawer__input').prop('checked')) {
            $('#mobile-toc-widget-wrap').css('display', 'none');
        } else {
            $('#mobile-toc-widget-wrap').css('display', 'block');
        }
    });
    $('#mobile-toc-widget-wrap .toc_widget_list a').click(function () {
        if ($('#mobile-toc-widget-wrap input').prop('checked')) {
            $('#mobile-toc-widget-wrap input').prop('checked', false);
        }
    });
    //記事冒頭くるみアニメーション
    if (document.getElementById("article-top-kurumi") != null) {
        let rEye = Snap("#r-eye");
        let lEye = Snap("#l-eye");
        let mouse = Snap("#mouse");
        let lEyePart1 = Snap("#l-eye-part1");
        let lEyeParts2 = Snap("#l-eye-parts2");
        let rEyePart1 = Snap("#r-eye-part1");
        let rEyeParts2 = Snap("#r-eye-parts2");
        let SPEED = 200; //動く速さ,
        let EASING = mina.easein; //snap.svgに用意されているeasing
        closeEye();
        closeMouse();
        function closeMouse() {
            mouse.animate({ d: "M 15,0 L 0,0 0,0 15,-2 Z", transform: "translate(75 120)", fill: "#430e00" }, 200, EASING, openMouse);
        }
        function openMouse() {
            mouse.animate({
                d: "M557.8,338.6c-1.7-.9-3.6-.8-6.6-.3s-6.3,1.2-6.7,2c-1.2,2.5,3.2,8.8,8,8.5,2.9-.1,4.9-2.6,5.4-3.3s2.7-3.5,1.5-5.6A3.3,3.3,0,0,0,557.8,338.6Z"
                , transform: "translate(-469 -224.3)", fill: "#de7d84", stroke: "#430e00", "stroke-miterlimit": "10", "stroke-width": "0.963779527559055px"
            }, 300, EASING, closeMouse)
        }
        function closeEye() {
            setTimeout(() => {
                lEyePart1.attr({
                    "opacity": "0"
                });
                lEyeParts2.attr({
                    "opacity": "0"
                });
                rEyePart1.attr({
                    "opacity": "0"
                });
                rEyeParts2.attr({
                    "opacity": "0"
                });
                rEye.animate({ d: "M 0,0 L 25,-2 25,-4 0,-2 Z", transform: "translate(90 94)" }, 30, EASING);
                lEye.animate({ d: "M 0,0 L 25,-2 25,-4 0,-2 Z", transform: "translate(45 99)" }, 30, EASING, openEye);
            }, 1000);
        }
        function openEye() {
            lEye.animate({
                d: "M538.8,317c.4-.4-.1-1.8-.5-2.6-2.6-5.1-10.5-6.8-10.5-6.8h0s-6.4-1.5-10.4,1-6.3,6.6-5.2,9.9,2.7,3.4,3.1,3.2-.5-1.5,0-3.2,1.1-2.2,1.6-2.1-1.1,5.9,1.5,10.5a10.4,10.4,0,0,0,9.4,5.2,10,10,0,0,0,8.4-6.3c.4-1.1.6-1.8-.5-10.4C535.7,315.4,538.2,317.4,538.8,317Z",
                transform: "translate(-469 -224.3)"
            }, SPEED, EASING);
            rEye.animate({
                d: "M559.9,315.2c-.5-.3,0-2.7,0-2.7s3.7-6,8.9-8.7c.9-.5,5.5-2.9,10.4-1s7.5,5.1,7.1,8.6-2,3.9-2.4,3.7.1-1.5-.7-3-1.5-2-1.9-1.8,2.2,5.6.5,10.6a10.4,10.4,0,0,1-8.1,6.9,10.1,10.1,0,0,1-9.5-4.4c-.6-1.1-.9-1.7-1.5-10.4C562.7,313,560.6,315.5,559.9,315.2Z"
                , transform: "translate(-469 -224.3)"
            }, SPEED, EASING, closeEye);
            lEyePart1.attr({
                "opacity": "1"
            });
            lEyeParts2.attr({
                "opacity": "1"
            });
            rEyePart1.attr({
                "opacity": "1"
            });
            rEyeParts2.attr({
                "opacity": "1"
            });
        }
    }
    //記事冒頭くるみアニメーションはここまで

    //記事下のSNSボタンの浮き上がり
    $(window).scroll(function () {
        let article_top_kurumi_balloon = $(".balloon1");
        let balloon_position = article_top_kurumi_balloon.offset().top;
        let balloon_position_diff = balloon_position - $(window).height();
        if ($(window).scrollTop() > balloon_position_diff) {
            article_top_kurumi_balloon.css("opacity", "1");
            article_top_kurumi_balloon.addClass("sns-shere-float");
        }
        else {
            article_top_kurumi_balloon.removeClass("sns-shere-float");
            article_top_kurumi_balloon.css("opacity", "0");
        }
        let sns_shere_button1 = $(".entry-content .sns-btn:not(.sns-dif) ul li:nth-child(1)");
        let sns_shere_button2 = $(".entry-content .sns-btn:not(.sns-dif) ul li:nth-child(2)");
        let sns_shere_button3 = $(".entry-content .sns-btn:not(.sns-dif) ul li:nth-child(4)");
        let sns_shere_mozi = $(".entry-content .sns-btn__title");
        let kizi_owari_thank = $(".kizi-owari-thank");
        $(".entry-content .sns-btn ul").each(function () {
            let sns_shere_position = $(this).offset().top;
            let sns_shere_diff = sns_shere_position - $(window).height();
            if ($(window).scrollTop() > sns_shere_diff) {
                sns_shere_button1.addClass("sns-shere-float");
                sns_shere_button2.addClass("sns-shere-float2");
                sns_shere_button3.addClass("sns-shere-float3");
                sns_shere_mozi.addClass("sns-shere-float-mozi");
                $(".entry-content .sns-dif").css("display", "none");
            } else {
                sns_shere_button1.removeClass("sns-shere-float");
                sns_shere_button2.removeClass("sns-shere-float2");
                sns_shere_button3.removeClass("sns-shere-float3");
                sns_shere_mozi.removeClass("sns-shere-float-mozi");
                $(".entry-content .sns-dif").css("display", "initial");
            }
        });
        $(".kizi-owari-thank").each(function () {
            let kizi_owari_thank_position = $(this).offset().top;
            let kizi_owari_thank_diff = kizi_owari_thank_position - $(window).height();
            if ($(window).scrollTop() > kizi_owari_thank_diff) {
                kizi_owari_thank.addClass("kizi-owari-thank-move");
            } else {
                kizi_owari_thank.removeClass("kizi-owari-thank-move");
            }
        });
    });
});