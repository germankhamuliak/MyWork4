'use strict';
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const close = document.querySelector('header .close');

const tab = document.querySelectorAll(".benefits-btn");
const tabContent = document.querySelectorAll(".benefits .slide");

const cardsBox = document.querySelector(".info .cards");
const cards = document.querySelectorAll(".info .card");

const nextSlide2 = document.querySelector(".testimonials .next");
const prevSlide2 = document.querySelector(".testimonials .prev");
const slider2 = document.querySelectorAll(".testimonials .card");

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.burger') || e.target.closest('nav a')) {
        header.classList.remove('active');
    }
});
document.addEventListener('scroll', (e) => {
    if (header.classList.contains('active') && document.documentElement.clientWidth > 768) {
        header.classList.remove('active');
    }
});
burger.addEventListener('click', () => {
    header.classList.toggle('active');
});
document.querySelector('.benefits').addEventListener('click', (e) => {
    if (!e.target.closest('.benefits-btn')) {
        return;
    }
    tab.forEach((item, index) => {
        if (e.target == item) {
            item.classList.add('active');
            tabContent[index].classList.add('active');
        } else {
            item.classList.remove('active');
            tabContent[index].classList.remove('active');
        }
    });
});



cardsBox.addEventListener('click', (e) => {
    if (!e.target.closest('.card')) {
        return;
    }
    cards.forEach(item => {
        if (e.target.closest('.card').querySelector('p') == item.querySelector('p')) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active');
        }
    });
});



let x = 0;
nextSlide2.addEventListener("click", () => {
    x += 100;
    if (x == slider2.length * 100) {
        x = 0;
    }
    slider2.forEach(e => {
        e.style.left = `-${x}%`;
    });
});
prevSlide2.addEventListener("click", () => {
    x -= 100;
    if (x == -100) {
        x = (slider2.length - 1) * 100;
    }
    slider2.forEach(e => {
        e.style.left = `${-x}%`;
    });
});


function myPromoSlider(slider) {
    const mainSliderScroll = slider.querySelector('.items');
    const mainSliderSlids = slider.querySelectorAll('.slide');
    const dotsContainer = slider.querySelector('.bubbles');
    let i = 0;
    let scrollPosition = 0;
    //отрисовка баблсов
    for (let z = 0; z < mainSliderSlids.length; z++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.append(dot);
    }
    const dots = slider.querySelectorAll('.bubbles .dot');
    //управление баблсами
    const dotsCarusel = () => {
        dots.forEach((e, index) => {
            e.classList.remove('selected');
            e.addEventListener('click', () => {
                i = index;
                mainSliderScroll.scrollLeft = mainSliderScroll.offsetWidth * i;
            });
        });
        dots[i].classList.add('selected');
    }
    //выравнивание слайдера
    function slideCorect() {
        if (!scrollPosition % mainSliderScroll.offsetWidth == 0) {
            mainSliderScroll.scrollLeft = mainSliderScroll.offsetWidth * i;
        }
    }
    mainSliderScroll.addEventListener('touchend', () => {
        setTimeout(slideCorect, 1000);
    })
    //управление слайдером
    mainSliderScroll.addEventListener('scroll', () => {
        scrollPosition = mainSliderScroll.scrollLeft;
        i = Math.round(scrollPosition / mainSliderScroll.offsetWidth)
        dotsCarusel()
    });
    slider.addEventListener('click', (e) => {
        if (e.target.closest('.next')) {
            if (i < mainSliderSlids.length - 1) {
                i++;
                mainSliderScroll.scrollLeft = mainSliderScroll.offsetWidth * i;
            }
        }
        if (e.target.closest('.prev')) {
            if (i > 0) {
                i--;
                mainSliderScroll.scrollLeft = mainSliderScroll.offsetWidth * i;
            }
        }
    })

    dotsCarusel();
}

if (document.querySelector('.slider')) {
    myPromoSlider(document.querySelector('.slider'));
}