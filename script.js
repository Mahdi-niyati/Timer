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
    console.log(seconds);
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

    let timerId = setInterval(() => {
        if(seconds <= 1){
            clearInterval(timerId);
            startBox.style.display = "block"
            timerCircle.style.display = "none"
            inputCounter.value = '';
            successMessage.style.display = "block";
            loadingMessage.style.display = "none";
        }
        seconds -= 1 ;
        timerNum.innerText = seconds ;
    }, 1000);
})