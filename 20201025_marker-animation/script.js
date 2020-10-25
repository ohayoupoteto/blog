$(window).scroll(function () {
    $('.marker-sentence').each(function () {
        let top = $(this).offset().top;
        let marker_position = top - $(window).height();
        if ($(window).scrollTop() > marker_position) {
            $(this).addClass("marker-move");
        } else {
            $(this).removeClass("marker-move");
        }
    });
});
