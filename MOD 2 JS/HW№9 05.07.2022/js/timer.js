let sec = document.querySelector("span:nth-child(3)");
let min = document.querySelector("span:nth-child(2)");
let hour = document.querySelector("span:nth-child(1)");
let startCount;
let countSec = 0;
let countMin = 0;
let countHour = 0;
const second = () => {
    countSec++;
    if (countSec < 10) {
        sec.innerText = `0${countSec}`;
    } if (countSec >= 10) {
        sec.innerText = countSec;
    }
    if (countSec === 60) {
        countSec = 0;
        sec.innerText = `0${countSec}`;
        countMin++;
        if (countMin < 10) {
            min.innerText = `0${countMin}`;
        }
        if (countMin >= 10) {
            min.innerText = countMin;

        }
    }
    if (countMin === 60) {
        countMin = 0;
        min.innerText = `0${countMin}`;
        countHour++;
        if (countHour < 10) {
            hour.innerText = `0${countHour}`;
        }
        if (countHour >= 10) {
            hour.innerText = countHour;
        }

    }
    if(countHour === 60){
        countHour = 0;
        hour.innerText = `0${countHour}`;
    }
}
let start = document.querySelector(".stopwatch-control button:nth-child(1)");
let display = document.querySelector(".stopwatch-display");
start.onclick = () =>{
    startCount = setInterval(second, 1000);
    display.style.background = 'rgba(39, 211, 76, 0.5)';
}
let stop = document.querySelector(".stopwatch-control button:nth-child(2)");
stop.onclick = () =>{
    clearInterval(startCount);    
    display.style.background = 'rgba(231, 40, 40, 0.5)';
}
let reset = document.querySelector(".stopwatch-control button:nth-child(3)");
reset.onclick = () =>{
    clearInterval(startCount);
    countSec = 0;
    countMin = 0;
    countHour = 0;
    sec.innerText = `0${countSec}`;
    min.innerText = `0${countMin}`;
    hour.innerText = `0${countHour}`;
    display.style.background =  'rgba(88, 88, 88, .5)';
}
