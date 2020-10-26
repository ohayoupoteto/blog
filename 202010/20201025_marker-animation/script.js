$(window).scroll(function () {
    $('.marker-sentence').each(function () {
        let marker_position = $(this).offset().top;
        let diff = marker_position - $(window).height();
        if ($(window).scrollTop() > diff) {
            $(this).addClass("marker-move");
        } else {
            $(this).removeClass("marker-move");
        }
    });
});
