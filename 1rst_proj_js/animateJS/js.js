// let timerID = setTimeout(seyHello, 3000);
// clearTimeout(timerID);

// let timerID = setInterval(seyHello, 3000);
//
// function seyHello() {
//     console.log('hello');
// }

// let timerID = setTimeout(function log() {
//     console.log('hello');
//     setTimeout(log, 200);
// })

let btn = document.querySelector('.btn'),
    elem1 = document.querySelector('.box');

function myAnimations() {
    let pos = 0;
    let id = setInterval(frame, 2);
    function frame() {
        if (pos >= 500) {
            pos ++;
            if (pos <= 700) {
                console.log(pos);
                elem1.style.left = pos + 'px';
            } else{
                clearInterval();
            }
        } else {
            pos ++;
            elem1.style.top = pos + 'px';
            elem1.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click',myAnimations);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('jerjejrjfsdfs');
    }
})

function animate({duration, draw, timing}) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction)

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}