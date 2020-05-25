let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function () {
//     alert('нажата первая кнопка');
// }

btn[0].addEventListener('click', function (event) {
    // console.log(event);
    // let target = event.target;
    // target.style.display = 'none';
    console.log('shit happens: ' + event.type + ' on element'
        + event.target);

});

wrap.addEventListener('click',function (event) {
    console.log('shit happens: ' + event.type + ' on element'
        + event.target);
})

link.addEventListener('click',function (event) {
    event.preventDefault();
    console.log('shit happens: ' + event.type + ' on element'
        + event.target);
})
// btn[0].addEventListener('mouseenter', function () {
//     alert('пошел нахуй');
// })
btn.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log('вышлии из кнопки: ' + item);
    })
})
