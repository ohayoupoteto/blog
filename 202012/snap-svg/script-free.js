let $svgMouth1 = Snap(".svg-move1");
let $svgMouth2 = Snap(".svg-move2");
let $svgMouth3 = Snap(".svg-move3");
let $svgMouth4 = Snap(".svg-move4");
let $svgMouth5 = Snap(".svg-move5");
let $svgMouth6 = Snap(".svg-move6");
let $svgMouth7 = Snap(".svg-move7");
let svgBody = $("#js-svg");
let svgMoveParts = $(".svg-move-parts");
let svgStar = $(".star-svg-animation");
let svgMouth1 = $(".svg-move1");
let svgMouth2 = $(".svg-move2");
let svgMouth3 = $(".svg-move3");
let svgMouth4 = $(".svg-move4");
let svgMouth5 = $(".svg-move5");
let svgMouth6 = $(".svg-move6");
let svgMouth7 = $(".svg-move7");
let svgShadow = $(".svg-shadow");
let SPEED = 210; //動く速さ,
let EASING = mina.easein; //snap.svgに用意されているeasing
let direction = true; //正の向き
let animationCount = 0;

function humerAnimation0() {
    svgMoveParts.css("opacity", "1");
    direction = true;
    $svgMouth1.animate({ d: "M121.69671,169.58207l9.93381,1.14868c-.51312,1.82356-3.55414,13.33728,3.31832,23.537,6.56106,9.73753,19.47,14.28862,32.13123,11.0463q1.96946,4.74137,3.939,9.48274c-5.67131.82857-15.9039,1.626-26.067-1.96517a36.65524,36.65524,0,0,1-15.868-11.06777C118.48016,188.87263,121.16636,172.50565,121.69671,169.58207Z" }, SPEED, EASING);
    $svgMouth2.animate({ d: "M227.938,125.91954q.4113,4.509.82256,9.01795a34.20714,34.20714,0,0,1,30.68,20.26668c7.22388,16.63964-2.68745,31.72048-3.34221,32.68006q3.41348,3.83507,6.827,7.6701a50.39039,50.39039,0,0,0,7.95782-24.31683c.137-2.47917.54665-11.38239-3.02538-19.79512C258.74777,129.98693,229.865,126.14793,227.938,125.91954Z" }, SPEED, EASING);
    $svgMouth4.animate({ cx: "228.19176", cy: "130.61937", rx: "9.96723", ry: "7.8657", transform: "translate(-80.05477 -33.81432) rotate(-11.55193)" }, SPEED, EASING);
    $svgMouth3.animate({ cx: "125.18411", cy: "170.38952", rx: "11.0825", ry: "8.74583", transform: "translate(-90.10555 -53.63661) rotate(-11.55193)" }, SPEED, EASING);
    $svgMouth5.animate({ x: "60.63957", y: "155.39365", width: "189.22245", height: "5", rx: "2.5", transform: "translate(-105.38649 -14.71627) rotate(-21.37376)" }, SPEED, EASING);
    $svgMouth6.animate({ d: "M105.05159,208.94745A28.47838,28.47838,0,0,1,80.09194,218.716Q69.30588,191.15637,58.5198,163.59674a22.33592,22.33592,0,0,1,24.95965-9.76849Q94.26553,181.38786,105.05159,208.94745Z" }, SPEED, EASING);
    $svgMouth7.animate({ cx: "71.20314", cy: "159.23249", rx: "13.40157", ry: "5.02559", transform: "translate(-111.6555 -45.25486) rotate(-21.374)" }, SPEED, EASING, humerAnimation1);
    //足
    //$svgFootL.animate({ d: "M238.74234,260.10335a.66462.66462,0,0,0,.17864,1.14219L267.294,275.34479a3.16655,3.16655,0,0,1,1.28971,1.364l7.02208,16.37214a1.03332,1.03332,0,0,0,1.32266.54764l13.143-5.25722a.82632.82632,0,0,0,.414-1.22888l-1.971-3.285a1.30413,1.30413,0,0,0-1.46246-.53912l-5.31506,1.785a.98692.98692,0,0,1-1.25369-.63375l-4.5402-14.13985a3.05647,3.05647,0,0,0-1.16645-1.46119l-27.1511-16.05825a1.38461,1.38461,0,0,0-1.57761.18812Z" }, SPEED, EASING);
    //$svgFootR.animate({ d: "M196.302,264.63893a2.9928,2.9928,0,0,0-.23546,1.85008l4.62074,18.645a.75439.75439,0,0,1-.75941.97887l-28.46025.23427a1.05025,1.05025,0,0,0-1.02985,1.00778l-.40792,13.64549a1.14854,1.14854,0,0,0,.96007,1.141l5.0201.71716a1.02394,1.02394,0,0,0,1.14831-.846l1.33237-8.3075a1.12389,1.12389,0,0,1,1.15626-.9225l28.86827,1.8769a.89053.89053,0,0,0,.96458-.93457l-1.05752-31.72551A1.04417,1.04417,0,0,0,207.389,261h-8.11732a1.85323,1.85323,0,0,0-1.476.87944Z" }, SPEED, EASING);
    setTimeout(function () {
        svgStar.toggleClass("star-svg-animation2");
    }, 500);

}

function humerAnimation1() {
    let waitSecond = 200;//最初の待つ時間
    if (animationCount == 0) {
        waitSecond = 0;
    }
    if (direction) {
        setTimeout(function () {
            svgMoveParts.css("opacity", ".1");
            svgMouth7.css("display", "none");
            $svgMouth1.animate({ d: "M199.1517,126.82442q1.677,4.71036,3.35407,9.42074a44.61533,44.61533,0,0,0-19.65525,13.36678C167.4438,168.10114,174.2682,192.53409,175,195l-14,2a70.74216,70.74216,0,0,1,4-36,62.86447,62.86447,0,0,1,7-13A62.20531,62.20531,0,0,1,199.1517,126.82442Z" }, SPEED - 200, EASING);
            $svgMouth2.animate({ d: "M207.81706,175.47509q1.91883,4.101,3.83767,8.202a34.20715,34.20715,0,0,1,35.74081,8.63678c12.4478,13.19524,8.25016,30.74648,7.96039,31.87145l9.02688,4.89418a50.39027,50.39027,0,0,0-.77777-25.574c-.7135-2.37824-3.35329-10.891-9.57122-17.58954C238.17589,168.8322,209.70705,175.03513,207.81706,175.47509Z" }, SPEED - 200, EASING);
            $svgMouth3.animate({ cx: "295", cy: "140", rx: "8.74583", ry: "11.0825", transform: "matrix(0.79074, -0.61215, 0.61215, 0.79074, -181.48889, 117.13281)" }, SPEED - 200, EASING);
            $svgMouth4.animate({ cx: "305", cy: "181", rx: "9.96723", ry: "7.8657", transform: "translate(-206.34529 103.70156) rotate(-31.4149)" }, SPEED - 200, EASING);
            $svgMouth5.animate({ x: "75", y: "34", width: "189.22245", height: "5", rx: "2.5", transform: "translate(137.27166 -126.41038) rotate(77.23189)" }, SPEED - 200, EASING);
            $svgMouth7.attr({ cx: "246", cy: "15", rx: "5.02559", ry: "13.40157", transform: "translate(-148.11801 15.75089) rotate(-12.76835)" }, SPEED - 200, EASING);
            if (direction) {
                $svgMouth6.animate({ d: "M156.4867,71.15524a28.47835,28.47835,0,0,1-5.92376-26.14034l57.72658-13.08162a22.33593,22.33593,0,0,1,5.92373,26.14033Z" }, SPEED - 200, EASING, humerAnimation2);
            }
            else {
                $svgMouth6.animate({ d: "M156.4867,71.15524a28.47835,28.47835,0,0,1-5.92376-26.14034l57.72658-13.08162a22.33593,22.33593,0,0,1,5.92373,26.14033Z" }, SPEED - 200, EASING, humerAnimation0);
            }
            bodyAnimation();
        }, waitSecond);
    }
    else {
        setTimeout(function () {
            svgMoveParts.css("opacity", ".1");
            svgMouth7.css("display", "none");
            $svgMouth1.animate({ d: "M199.1517,126.82442q1.677,4.71036,3.35407,9.42074a44.61533,44.61533,0,0,0-19.65525,13.36678C167.4438,168.10114,174.2682,192.53409,175,195l-14,2a70.74216,70.74216,0,0,1,4-36,62.86447,62.86447,0,0,1,7-13A62.20531,62.20531,0,0,1,199.1517,126.82442Z" }, SPEED - 200, EASING);
            $svgMouth2.animate({ d: "M207.81706,175.47509q1.91883,4.101,3.83767,8.202a34.20715,34.20715,0,0,1,35.74081,8.63678c12.4478,13.19524,8.25016,30.74648,7.96039,31.87145l9.02688,4.89418a50.39027,50.39027,0,0,0-.77777-25.574c-.7135-2.37824-3.35329-10.891-9.57122-17.58954C238.17589,168.8322,209.70705,175.03513,207.81706,175.47509Z" }, SPEED - 200, EASING);
            $svgMouth3.animate({ cx: "295", cy: "140", rx: "8.74583", ry: "11.0825", transform: "matrix(0.79074, -0.61215, 0.61215, 0.79074, -181.48889, 117.13281)" }, SPEED - 200, EASING);
            $svgMouth4.animate({ cx: "305", cy: "181", rx: "9.96723", ry: "7.8657", transform: "translate(-206.34529 103.70156) rotate(-31.4149)" }, SPEED - 200, EASING);
            $svgMouth5.animate({ x: "75", y: "34", width: "189.22245", height: "5", rx: "2.5", transform: "translate(137.27166 -126.41038) rotate(77.23189)" }, SPEED - 200, EASING);
            $svgMouth7.attr({ cx: "246", cy: "15", rx: "5.02559", ry: "13.40157", transform: "translate(-148.11801 15.75089) rotate(-12.76835)" }, SPEED - 200, EASING);
            if (direction) {
                $svgMouth6.animate({ d: "M156.4867,71.15524a28.47835,28.47835,0,0,1-5.92376-26.14034l57.72658-13.08162a22.33593,22.33593,0,0,1,5.92373,26.14033Z" }, SPEED - 200, EASING, humerAnimation2);
            }
            else {
                $svgMouth6.animate({ d: "M156.4867,71.15524a28.47835,28.47835,0,0,1-5.92376-26.14034l57.72658-13.08162a22.33593,22.33593,0,0,1,5.92373,26.14033Z" }, SPEED - 200, EASING, humerAnimation0);
            }
        }, 100);
    }
}
function humerAnimation2() {
    svgMoveParts.css("opacity", "1");
    direction = false;
    $svgMouth1.animate({
        d: "M263.79213,216.36179q-2.29734-.95556-4.59466-1.9111c.49541-.802,3.52832-5.89309,1.63874-11.71439-1.804-5.5575-7.35549-9.504-13.85676-9.68842q-.29226-2.53811-.58453-5.07623a27.71669,27.71669,0,0,1,12.20047,4.513,18.24066,18.24066,0,0,1,6.07384,7.46954C267.975,207.57451,264.44656,215.03591,263.79213,216.36179Z"
    }, SPEED, EASING);
    $svgMouth2.animate({
        d: "M189.41769,219.73946l.56654-2.97649a11.44568,11.44568,0,0,1-8.00056-9.34644c-.79-6.018,3.78787-9.95539,4.08692-10.2037l-1.489-3.09632a16.86057,16.86057,0,0,0-4.80077,7.08823,15.40561,15.40561,0,0,0-.85124,6.64605C179.88241,215.59164,188.8189,219.48839,189.41769,219.73946Z"
    }, SPEED, EASING);
    $svgMouth3.animate({ cx: "279", cy: "294", rx: "8.74583", ry: "11.0825", transform: "translate(-104.05213 380.79518) rotate(-85.56357)" }, SPEED, EASING);
    $svgMouth4.animate({ cx: "197", cy: "298", rx: "7.8657", ry: "9.96723", transform: "translate(-182.68765 305.54063) rotate(-85.56357)" }, SPEED, EASING);
    $svgMouth5.animate({ width: "189.22245", height: "5", rx: "2.5", transform: "translate(385 145) rotate(174.6146)" }, SPEED, EASING, steakOpacity);
    $svgMouth6.animate({ d: "M329.75652,173.71985a28.47841,28.47841,0,0,1,26.68481-2.51572q2.77778,29.46448,5.55553,58.929a22.336,22.336,0,0,1-26.68481,2.51569Q332.53429,203.18431,329.75652,173.71985Z" }, SPEED, EASING, starAnimation);
    $svgMouth7.animate({ cx: "433", cy: "240", rx: "13.40157", ry: "5.02559", transform: "translate(-163.48199 -48.41855) rotate(-5.38564)" }, SPEED, EASING, humerAnimation1);
    svgMouth7.css("display", "initial");
    animationCount++;
}
//アニメーションスタート
humerAnimation1();

function steakOpacity() {
    svgMouth5.css({
        "opacity": "1"
    });
}
function bodyAnimation() {
    svgBody.removeClass("body-animation");
    svgBody.addClass("body-animation");
}
function starAnimation() {
    svgStar.toggleClass("star-svg-animation2");
    let svgStar2 = $(".star-svg-animation2");
    let windowSize = $(window).width(); //ウィンドウサイズ
    if (windowSize <= 480) {
        svgStar2.css("font-size", ".6em");
        //mobileStarHeight = 27;
        //mobileStarWidth = 25;
    }
    //svgStar2.offset({
    //top: humerTopPosition.top + windowSize / 4.8 + mobileStarHeight,
    //left: humerTopPosition.left + windowSize / 12 + mobileStarWidth,
    //});
}