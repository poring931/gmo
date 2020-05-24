let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper'),
    heart2 = document.querySelector('.heart');

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'blue';
circle[2].style.backgroundColor = 'yellow';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }
//
// heart.forEach(function (item, i,heart_mass) {
//     item.style.backgroundColor = 'black';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут просто текст');

div.classList.add('black');

// div.innerHTML = '<h1>Hello blya</h1>';
div.textContent = ' Hello blya'

// document.body.appendChild(div);
wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]);

