$(document).ready(function () {
    $('.main_btna').on('click', function () {
        $('.overlay').animate(
            {
                opacity: 'toggle',
                display: 'block',
            },500
        );
        $('.modal').animate(
            {
                display: 'block',
                height: 'toggle',
            },500
        );
    });

    $('.close').on('click', function () {
        $('.overlay').animate(
            {
                opacity: 'toggle',
                display: 'none',
            },500
        );
        $('.modal').animate(
            {
                display: 'none',
                height: 'toggle',
            },500
        );
    })



    $('.main_btn').on('click', function () {


    });
    $('nav>ul>li:eq(2)').on('click', function () {


    });


});