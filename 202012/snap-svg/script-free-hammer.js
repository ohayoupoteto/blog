let $svgParts1_com = Snap(".complete #svg-move-parts1");
let $svgParts2_com = Snap(".complete #svg-move-parts2");
let $svgParts3_com = Snap(".complete #svg-move-parts3");
let svgBody_com = $(".complete #js-svg");
let svgParts3_com = $(".complete #svg-move-parts3");
let SPEED_com = 320;
let EASEIN_com = mina.easein;
let direction_com = true; //アニメーションの向き(trueが振り下ろす時)
let animationCount_com = 0;
function humerAnimation0_com() {
    direction_com = true;
    svgBody_com.css("opacity", "1");
    $svgParts1_com.animate({ x: "60.63957", y: "155.39365", width: "189.22245", height: "5", rx: "2.5", transform: "translate(-105.38649 -14.71627) rotate(-21.37376)" }, SPEED_com, EASEIN_com);
    $svgParts2_com.animate({ d: "M105.05159,208.94745A28.47838,28.47838,0,0,1,80.09194,218.716Q69.30588,191.15637,58.5198,163.59674a22.33592,22.33592,0,0,1,24.95965-9.76849Q94.26553,181.38786,105.05159,208.94745Z" }, SPEED_com, EASEIN_com);
    $svgParts3_com.animate({ cx: "71.20314", cy: "159.23249", rx: "13.40157", ry: "5.02559", transform: "translate(-111.6555 -45.25486) rotate(-21.374)" }, SPEED_com, EASEIN_com, humerAnimation1_com);
}

function humerAnimation1_com() {
    let waitSecond = 200;//最初の待つ時間
    if (animationCount_com == 0) {
        waitSecond = 0;
    }
    if (direction_com) {
        setTimeout(function () {
            svgBody_com.css("opacity", ".1");
            svgParts3_com.css("display", "none");
            $svgParts1_com.animate({ x: "75", y: "34", width: "189.22245", height: "5", rx: "2.5", transform: "translate(137.27166 -126.41038) rotate(77.23189)" }, SPEED_com - 200, EASEIN_com);
            $svgParts2_com.animate({ d: "M156.4867,71.15524a28.47835,28.47835,0,0,1-5.92376-26.14034l57.72658-13.08162a22.33593,22.33593,0,0,1,5.92373,26.14033Z" }, SPEED_com - 200, EASEIN_com);
            $svgParts3_com.animate({ cx: "246", cy: "15", rx: "5.02559", ry: "13.40157", transform: "translate(-148.11801 15.75089) rotate(-12.76835)" }, SPEED_com - 200, EASEIN_com, humerAnimation2_com);
        }, waitSecond);
    }
    else {
        setTimeout(function () {
            svgBody_com.css("opacity", ".1");
            svgParts3_com.css("display", "none");
            $svgParts1_com.animate({ x: "75", y: "34", width: "189.22245", height: "5", rx: "2.5", transform: "translate(137.27166 -126.41038) rotate(77.23189)" }, SPEED_com - 200, EASEIN_com);
            $svgParts2_com.animate({ d: "M156.4867,71.15524a28.47835,28.47835,0,0,1-5.92376-26.14034l57.72658-13.08162a22.33593,22.33593,0,0,1,5.92373,26.14033Z" }, SPEED_com - 200, EASEIN_com);
            $svgParts3_com.animate({ cx: "246", cy: "15", rx: "5.02559", ry: "13.40157", transform: "translate(-148.11801 15.75089) rotate(-12.76835)" }, SPEED_com - 200, EASEIN_com, humerAnimation0_com);
        }, 100);
    }
}
function humerAnimation2_com() {
    direction_com = false;
    svgBody_com.css("opacity", "1");
    $svgParts1_com.animate({ width: "189.22245", height: "5", rx: "2.5", transform: "translate(385 145) rotate(174.6146)" }, SPEED_com, EASEIN_com);
    $svgParts2_com.animate({ d: "M329.75652,173.71985a28.47841,28.47841,0,0,1,26.68481-2.51572q2.77778,29.46448,5.55553,58.929a22.336,22.336,0,0,1-26.68481,2.51569Q332.53429,203.18431,329.75652,173.71985Z" }, SPEED_com, EASEIN_com, humerAnimation1_com);
    $svgParts3_com.animate({ cx: "433", cy: "240", rx: "13.40157", ry: "5.02559", transform: "translate(-163.48199 -48.41855) rotate(-5.38564)" }, SPEED_com, EASEIN_com, svgParts3UnVanish_com);
    animationCount_com++;
}
function svgParts3UnVanish_com() {
    svgParts3_com.css("display", "initial");
}
//アニメーションスタート
humerAnimation1_com();


//----------------------------
let $svgParts1_deve = Snap(".development #svg-move-parts1");
let $svgParts2_deve = Snap(".development #svg-move-parts2");
let $svgParts3_deve = Snap(".development #svg-move-parts3");
let svgParts3_deve = $(".development #svg-move-parts3");
function humerAnimation0_deve() {

    $svgParts1_deve.animate({ x: "75", y: "34", width: "189.22245", height: "5", rx: "2.5", transform: "translate(137.27166 -126.41038) rotate(77.23189)" }, SPEED_com, mina.easein);
    $svgParts2_deve.animate({ d: "M156.4867,71.15524a28.47835,28.47835,0,0,1-5.92376-26.14034l57.72658-13.08162a22.33593,22.33593,0,0,1,5.92373,26.14033Z" }, SPEED_com, mina.easein);
    $svgParts3_deve.animate({ cx: "246", cy: "15", rx: "5.02559", ry: "13.40157", transform: "translate(-148.11801 15.75089) rotate(-12.76835)" }, SPEED_com, mina.easein, humerAnimation0_deve);
}
humerAnimation0_deve();



let reload = document.querySelector(".reload");
reload.addEventListener("click", function () {
    location.reload();
});

