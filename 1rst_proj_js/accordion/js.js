// на jquery

$(document).ready(function () {
    $('.accordion-item__trigger').click(function () {
        //$(this).next('.accordion-item__content').slideToggle();
        //$(this).parent('.accordion-item').toggleClass('accordion-item--active');


        //чтобы активна была одна вкладка
        const parent = $(this).parent();
        if (parent.hasClass('accordion-item--active')){
            parent.removeClass('accordion-item--active')
        } else {
            $('.accordion-item').removeClass('accordion-item--active');
            parent.addClass('accordion-item--active');
        }

    });

});


// на чистом JS
document.querySelectorAll('.accordion-item__trigger').forEach((item)=>
item.addEventListener('click',()=>{
    const parent=item.parentNode;
    if (parent.classList.contains('accordion-item--active')) {
        parent.classList.remove('accordion-item--active');
    }else{
        document
            .querySelectorAll('.accordion-item')
            .forEach((child)=>child.classList.remove('accordion-item--active'));
        parent.classList.add('accordion-item--active');
    }

}))