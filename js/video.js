'use strict'

const video = document.querySelector('.video');
let time = document.querySelector('.time');

video.addEventListener('timeupdate', setTime);

function setTime() {
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime - minutes * 60);
    const msec = Math.floor(video.currentTime * 1000);

    const minuteValue = minutes.toString().padStart(2, '0');
    const secondValue = seconds.toString().padStart(2, '0');
    const msecValue = msec.toString().padStart(3, '0').substr(-3, 3);

    time.textContent = `${minuteValue}:${secondValue}:${msecValue}`;
}

video.addEventListener("ended", function (){
    this.currentTime = 0
});
