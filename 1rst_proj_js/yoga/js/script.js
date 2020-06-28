window.addEventListener('DOMContentLoaded',function () {
    'use strict';

 /*  ПОДСКАЗОНЬКА
  info-header   - Родитель всего
    info-header-tab    - заголовок таба
    info-tabcontent    - тело таба

 */

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        descrbtn = document.querySelectorAll('.description-btn');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
//скрыть все, кроме первого
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }



    info.addEventListener('click',function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    //timer->
    let deadLine = '2020-09-02';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor(((t / 1000 / 60) % 60)),
            hours = Math.floor((t / (1000 * 60 * 60)));
            // hours = Math.floor(t / (1000 / 60 / 60) % 24 ),
        return {
          'total': t,
          'hours': hours,
            'minutes': minutes,
          'seconds': seconds,
        };
    }
    
    function setClock(id, endTime) {
        let time = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = time.querySelector('.minutes'),
            seconds = time.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadLine);


    //modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = 'scroll';
    });

    descrbtn.forEach((el,i,arr)=>{
        el.addEventListener('click', function () {
            overlay.style.display = 'block';
            more.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });




    //Form - отправка на сервер
    let message = {
        loading: 'Загрузка',
        success: 'Спасибос! скоро вам позвонят',
        failure: 'что-то пошло не так'
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();//отменяем перезагрузку страницы при отправки
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // для JSON request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        //для JSona
       /* let obj = {};
        formData.forEach(function (value,key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        equest.send(json);
        */

        request.send(formData);
        //отслеживаем изменения состояния запросов
        request.addEventListener('readystatechange',function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
    //Form - отправка на сервер  КОНЕЦ - важная штука



// домашка делаю в JSOn  подтягиваю многие вещи сверху
    let form_bot = document.querySelector('#form');

    form_bot.addEventListener('submit', function (event) {
        event.preventDefault();
        form_bot.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formDataBot = new FormData(form_bot);


            let obj = {};
        formDataBot.forEach(function (value,key) {
             obj[key] = value;
         });
         let json = JSON.stringify(obj);
         request.send(json);

        //отслеживаем изменения состояния запросов
        request.addEventListener('readystatechange',function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });





//slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex +=n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1;i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    })

    //calculator

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            personsSum =+this.value;
            total = (daysSum + personsSum) * 4000;
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function () {
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            daysSum =+this.value;
            total = (daysSum + personsSum) * 4000;
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let buffer = total;
            totalValue.innerHTML = buffer * this.options[this.selectedIndex].value;
        }
    })




})