let startBox = document.querySelector('.start-box');
let inputCounter = document.querySelector('#input-counter');
let startCounter = document.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');
let timerNum = document.querySelector('.c100 > span');
let loadingMessage = document.querySelector('.message > .loading');
let successMessage = document.querySelector('.message > .success');


startCounter.addEventListener("click", function(e){
    let seconds = +inputCounter.value;
    if(seconds == 0){
        errorElement.innerHTML = 'زمان را به درستی وارد کنید';
        errorElement.classList.add('active');
        return;
    }

    errorElement.classList.remove('active');
    startBox.style.display = 'none'
    timerCircle.style.display = 'block';
    timerNum.innerText = seconds ;
    loadingMessage.style.display = "block";
    successMessage.style.display = "none";

    let originalSeconds = seconds ;
    let lastPercent = '';
    let timerId = setInterval(() => {
        if(lastPercent) timerCircle.classList.remove(lastPercent);
        if(seconds <= 0){
            clearInterval(timerId);
            startBox.style.display = "block"
            timerCircle.style.display = "none"
            inputCounter.value = '';
            successMessage.style.display = "block";
            loadingMessage.style.display = "none";
            return
        }
        seconds -= 1 ;
        let percent = Math.floor(((originalSeconds - seconds) / originalSeconds * 100));
        lastPercent = `p${percent}`
        console.log(percent);
        timerCircle.classList.add(`p${percent}`);
        timerNum.innerText = seconds ;
    }, 1000);
    
     
})