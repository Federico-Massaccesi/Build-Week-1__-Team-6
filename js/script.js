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

timer.textContent = formatTime(timeLeft);

if (timeLeft < 60) {
circle.classList.add("high");
};
if (timeLeft < 45) {
circle.classList.add("mid");
};
if (timeLeft < 30) {
circle.classList.add("medium");
};
if (timeLeft < 15) {
circle.classList.add("low");
};
if (timeLeft === 0) {
clearInterval(interval);
}
}
let interval = setInterval(updateTimer, 1000);

/*FINE SCRIPT TIMER*/