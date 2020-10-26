$(".button_open").click(function(){
    $(".alert").text("通知だよ 通知だよ 通知だよ 通知だよ 通知だよ");
    $(".alert-box")
    .slideDown()
    .delay(3000)
    .fadeOut();
});

$(".button_close").click(function(e){
    $(".alert-box")
    .stop(true)
    .fadeOut();
});