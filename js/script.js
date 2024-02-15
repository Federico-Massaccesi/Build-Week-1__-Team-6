/*INIZIO SCRIPT TIMER*/

let timeLeft = 60;

let timer = document.getElementById("timer");

let circle = document.querySelector(".cerchio");

//formatta il tempo in SS
function formatTime(time) {

let minutes = Math.floor(time / 60);
let seconds = time % 60;

if (seconds < 10) {
seconds = "0" + seconds;
}
return seconds;
}

function updateTimer() {
// Diminuisce il tempo di un secondo
timeLeft--;

const scritte = document.querySelector(".inside")

timer.textContent = formatTime(timeLeft);
if (timeLeft < 60) {
timer.classList.add("high");
scritte.style.color = "rgb(3, 198, 3)"
};

if (timeLeft < 45) {
timer.classList.add("mid");
scritte.style.color = "#ffff00"
};

if (timeLeft < 30) {
timer.classList.add("medium");
scritte.style.color = "rgb(255, 149, 0)"
}

if (timeLeft < 15) {
timer.classList.add("low");
scritte.style.color = "red"
};

if (timeLeft === 0) {
clearInterval(interval);
}
}
let interval = setInterval(updateTimer, 1000);
/*FINE SCRIPT TIMER*/



/*INIZIO SCRIPT CERCHIO*/
let circleProgress = document.querySelector('.cerchio'),
centro = document.querySelector('.inside');

let centroStartValue = 100,
    centroEndValue = 0,
    speed = 600;

let progress = setInterval(() => {
    centroStartValue--;

    circleProgress.style.background = `conic-gradient(#00FFFF ${centroStartValue * 3.6}deg, transparent 0deg)`

    if(centroEndValue === centroStartValue){
        clearInterval(progress);
    }
}, speed);