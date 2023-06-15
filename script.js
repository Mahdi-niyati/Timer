let startBox = document.querySelector('.start-box');
let inputCounter = document.querySelector('#input-counter');
let startCounter = document.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');


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
})