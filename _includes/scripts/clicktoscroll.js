$("btn-next").click(function() {
    $('html,body').animate({
        scrollTop: $(".latest-blog").offset().top},
        'slow');
});