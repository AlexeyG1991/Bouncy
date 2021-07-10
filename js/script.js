$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
    });

    $('.team-slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 6000,
    });

    $('.team-slider__latest').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 6000,
        vertical: true,
        verticalSwiping: true,
    });
});


$('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    $('html, body').animate({ scrollTop: dn }, 1000);
    /*
    * 1000 скорость перехода в миллисекундах
    */
});



let jsTriggers = document.querySelectorAll('._tabs-item'),
    jsContents = document.querySelectorAll('._tabs-block');
jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        let id = this.getAttribute('data-tab'),
            content = document.querySelector('._tabs-block[data-tab="' + id + '"]'),
            activeTrigger = document.querySelector('._tabs-item._active'),
            activeContent = document.querySelector('._tabs-block._active');

        activeTrigger.classList.remove('_active'); // 1
        trigger.classList.add('_active'); // 2

        activeContent.classList.remove('_active'); // 3
        content.classList.add('_active'); // 4
    });
});

let jsTrigger = document.querySelectorAll('._tab-item'),
    jsContent = document.querySelectorAll('._tab-block');
jsTrigger.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        let id = this.getAttribute('data-tab'),
            content = document.querySelector('._tab-block[data-tab="' + id + '"]'),
            activeTrigger = document.querySelector('._tab-item._active'),
            activeContent = document.querySelector('._tab-block._active');

        activeTrigger.classList.remove('_active'); // 1
        trigger.classList.add('_active'); // 2

        activeContent.classList.remove('_active'); // 3
        content.classList.add('_active'); // 4
    });
});

let jsTriggerWorks = document.querySelectorAll('._item'),
    jsContentWorks = document.querySelectorAll('._block');
jsTriggerWorks.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        let id = this.getAttribute('data-tab'),
            content = document.querySelector('._block[data-tab="' + id + '"]'),
            activeTrigger = document.querySelector('._item._active'),
            activeContent = document.querySelector('._block._active');

        activeTrigger.classList.remove('_active'); // 1
        trigger.classList.add('_active'); // 2

        activeContent.classList.remove('_active'); // 3
        content.classList.add('_active'); // 4
    });
});