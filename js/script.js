let circleProgress = document.querySelector('.circle'),
centro = document.querySelector('.Centro');

let centroStartValue = 0,
    centroEndValue = 66,
    speed = 100;

let progress = setInterval(() => {
    centroStartValue++;

    circleProgress.style.background = `conic-gradient(#00FFFF ${centroStartValue * 3.6}deg, #D20094 0deg)`

    if(centroStartValue === centroEndValue){
        clearInterval(progress);
    }
}, speed);


