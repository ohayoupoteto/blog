$(function () {
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
});