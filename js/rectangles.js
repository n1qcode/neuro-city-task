'use strict'

const clickRecs = document.querySelector('.click-rectangles');
const listRecs = document.querySelector('.list-of-rectangles');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


let val = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


clickRecs.addEventListener('click', () => {
    let valAll = val(10, 100);
    listRecs.innerHTML = '';
        for (let i = 0; i <= valAll; i++) {
            listRecs.innerHTML += `<div class="rec" style="background: ${getRandomColor()}"></div>`;
        }
})
