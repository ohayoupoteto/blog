const textarea = document.querySelector("#textarea");
const text_count = document.querySelector("#text_count");

textarea.addEventListener("keyup", function () {
    text_count.innerText = textarea.value.length;
});