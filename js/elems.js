'use strict'

const clickElems = document.querySelector('.click-elems');
const elems = document.querySelector('.list-of-elems');


function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
            timerId = null;
        }, delay);
    };
}


const firstEl = () => {
    elems.innerHTML += `<div class="firstEl"></div>`
}

const secondEl = () => {
    elems.innerHTML += `<div class="firstEl"></div>`
}

const thirdEl = () => {
    elems.innerHTML += `<div class="firstEl"></div>`
}

let firstElem = debounce(firstEl, 300);
let secondElem = debounce(secondEl, 600);
let thirdElem = debounce(thirdEl, 900);


clickElems.addEventListener('click', () => {
    if (elems.innerHTML === '') {
        firstElem();
        secondElem();
        thirdElem();
    } else {
        elems.innerHTML = ''
    }
});




