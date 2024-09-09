const   hourArrow   = document.querySelector('.h'),
        minuteArrow = document.querySelector('.m'),
        secondArrow = document.querySelector('.s'),
        hoursBox    = document.querySelector('.hours'),
        minutesBox  = document.querySelector('.minutes');
        
function watch() {
    
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours   = time.getHours()
        
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
        minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
        
        setTimeout(() => watch(), 1000)
        
}
watch()


// рекурсия - самозапускающаяся функция
// setTimeout() - функция запускающая что-то с указанной задержкой

// let i = 0;

// function qwerty() {
//     if(i < 10) {
//         console.log(i);
//         i++
//         setTimeout(() =>  qwerty(), 1000)
       
//     }
// }
// qwerty()

// ДЗ

const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    (function(i) {
        links[i].onclick = function() {
            for (let a = 0; a < links.length; a++) {
                links[a].classList.remove('active');
                tabs[a].classList.remove('active');
            }
            links[i].classList.add('active');
            tabs[i].classList.add('active');
        };
    })(i);
}


const hoursBlock = document.querySelector('.stopwatch__hours');
const minutesBlock = document.querySelector('.stopwatch__minutes');
const secondsBlock = document.querySelector('.stopwatch__seconds');
const btn = document.querySelector('.stopwatch__btn');
const span = document.querySelector('.tabsLink__span');

let timer = ''; 
let seconds = 0;
let minutes = 0;
let hours = 0;

btn.onclick = function() {
    if (btn.textContent == 'start') {
        btn.textContent = 'stop';
        span.classList.add('active');
        timer = setInterval(function() {
            seconds++;
            if (seconds > 59) {
                seconds = 0;
                minutes++;
                if (minutes > 59) {
                    minutes = 0;
                    hours++;
                }
            }
            secondsBlock.textContent = (seconds < 10 ? '0' : '') + seconds;
            minutesBlock.textContent = (minutes < 10 ? '0' : '') + minutes;
            hoursBlock.textContent = (hours < 10 ? '0' : '') + hours;
        }, 50);
    } else if (btn.textContent == 'stop') {
        btn.textContent = 'clear';
        span.classList.remove('active');
        span.classList.add('active_clear');
        clearInterval(timer); 
    } else {
        btn.textContent = 'start';
        span.classList.remove('active_clear');
        clearInterval(timer); 
        seconds = 0;
        minutes = 0;
        hours = 0;
        secondsBlock.textContent = '00';
        minutesBlock.textContent = '00';
        hoursBlock.textContent = '00';
    }
};

// setInterval - добавление таймера, а clearInterval - удаление
// onclick - альтернатива addEvenListener