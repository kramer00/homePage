var homePage = function () {
    $('#btn-test').on('click', function scroll_to(div) {
        $('html, body').animate({
            scrollTop: $('#scrollStop').offset().top
        }, 1000);
    });
}