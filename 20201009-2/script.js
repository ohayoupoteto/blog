const mouse_area = document.querySelector("#mouse_area");
const message = document.querySelector("#message");
mouse_area.addEventListener("mousedown", () => {
    message.innerText = "ハンバーガーっていいよね";
});

const mouse_area2 = document.querySelector("#mouse_area2");
const message2 = document.querySelector("#message2");
mouse_area2.addEventListener("mouseup", () => {
    message2.innerText = "ハンバーガーに興味ない?";
});

const mouse_area3 = document.querySelector("#mouse_area3");
const message3 = document.querySelector("#message3");
mouse_area3.addEventListener("mousemove", () => {
    message3.innerText = "ハンバーガーに興味あるんでしょ?";
});

const mouse_area4 = document.querySelector("#mouse_area4");
const message4 = document.querySelector("#message4");
mouse_area4.addEventListener("mouseenter", () => {
    message4.innerText = "ハンバーガーって病みつきになるよね?";
});

const mouse_area5 = document.querySelector("#mouse_area5");
const message5 = document.querySelector("#message5");
mouse_area5.addEventListener("mouseleave", () => {
    message5.innerText = "ハンバーガーに興味ないの?";
});


const mouse_area6 = document.querySelector("#mouse_area6");
const message6 = document.querySelector("#message6");
mouse_area6.addEventListener("mouseover", () => {
    message6.innerText = "ハンバーガーに興味あるんだ?";
});

const mouse_area7 = document.querySelector("#mouse_area7");
const message7 = document.querySelector("#message7");
mouse_area7.addEventListener("mouseout", () => {
    message7.innerText = "ハンバーガーに興味ないの?";
});

setInterval(() => {
    messages = document.querySelectorAll(".message");
    messages.forEach((message) => {
        message.innerText = "・・・";
    });
}, 2000);

const mouse_area8 = document.querySelector("#mouse_area8");
mouse_area8.addEventListener("mousemove", (e) => {
    document.querySelector("#offsetX").innerText = e.offsetX;
    document.querySelector("#offsetY").innerText = e.offsetY;
    document.querySelector("#pageX").innerText = e.pageX;
    document.querySelector("#pageY").innerText = e.pageY;
    document.querySelector("#clientX").innerText = e.clientX;
    document.querySelector("#clientY").innerText = e.clientY;
    document.querySelector("#screenX").innerText = e.screenX;
    document.querySelector("#screenY").innerText = e.screenY;
});