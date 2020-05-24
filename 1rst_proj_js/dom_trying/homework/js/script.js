let li = document.querySelectorAll('.menu-item'),
    nav = document.querySelectorAll('.menu')[0],
    img = document.querySelector('.column'),
    new_li = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column')[1],
    prom = prompt('Ваше отношение к технике?'),
    prom_div = document.querySelector('#prompt');
// console.log(li);
// console.log(nav);
// console.log(img);

li[1].textContent = 'Второй пункт';
li[2].textContent = 'Третий пункт';
new_li.classList.add('menu-item');
// document.nav.appendChild(new_li);
new_li.textContent = 'Пятый пункт';
nav.appendChild(new_li);
img.style.background = "url('../homework/img/apple_true.jpg')";
title.textContent = 'Мы продаем только подлинную технику Apple';
column.removeChild(adv);
prom_div.textContent = prom;