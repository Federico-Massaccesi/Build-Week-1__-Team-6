// let centroEndValue;
//SELEZIONE DIV DIFFICULTY BUTTON
let divDifficultyBtn = document.querySelector("#div_difficulty_btn")

//SELEZIONE DIFFICULTY BUTTON

let difficolta = ""
let easyBtn = document.querySelector("#easy_Btn")
let mediumBtn = document.querySelector("#medium_Btn")
let hardBtn = document.querySelector("#hard_Btn")

easyBtn.addEventListener("click", domandeEasy)

mediumBtn.addEventListener("click", domandeMedium)

hardBtn.addEventListener("click", domandeHard)


//SELEZIONE BUTTON WELCOME PAGE
let button = document.querySelector("#btnNeonWelcomePage")

//SELEZIONE WELCOME PAGE
let divWelcomePage = document.querySelector("#Welcome-page")

//SELEZIONE DIFFICULTY PAGE
let divDifficultyPage = document.querySelector("#Difficulty-page")
//SELEZIONE BENCHMARK PAGE
let divBenchmarkPage = document.querySelector("#Benchmark-page")

//SELEZIONE RESULTS PAGE
let divResultsPage = document.querySelector("#Results-page")

//SELEZIONE FEEDBACK PAGE
let divfeedbackPage = document.querySelector("#Feedback-page")

//SELEZIONE CHECKBOX
let checkbox = document.querySelector('#agree_terms')

//SELEZIONE DIV CHECKBOX
let divCheck = document.querySelector('#div-check')

let rateUs = document.querySelector('#Btn')

//BENCHMARK PAGE

let divBenchmarkBtn = document.querySelector('.risposte') //div che contiene i button
let h2 = document.querySelector('#domanda')

console.log(divBenchmarkBtn);

//div che contiene h2 con la domanda

let divDomanda = document.querySelector('.scritte')

let questionNumber = document.querySelector('.nDomande p')

function display() {
    if (checkbox.checked) {
        divWelcomePage.classList.add("display")
        divDifficultyPage.classList.remove("display")
    } else {
        divCheck.innerText = "Obbligatorio!"
        divCheck.style.marginLeft = '100px'
        divCheck.style.color = "red"
    }
}

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//formatta il tempo in SS
function formatTime(time) {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return seconds;
}

let interval;
let timeLeft = 60;

function updateTimer(timeLeft) {
    timer.classList.remove("high", "mid", "medium", "low");

    const scritte = document.querySelector(".inside")
    // decreaseOpacity(scritte)
    timer.textContent = formatTime(timeLeft);
    if (timeLeft < 60) {
        timer.classList.add("high");
        scritte.style.color = "rgb(3, 198, 3)"


    };

    if (timeLeft < 45) {
        timer.classList.remove("high");
        timer.classList.add("mid");
        scritte.style.color = "#ffff00"
        scritte
    };

    if (timeLeft < 30) {
        timer.classList.remove("mid");
        timer.classList.add("medium");
        scritte.style.color = "rgb(255, 149, 0)"
    }

    if (timeLeft < 15) {
        timer.classList.remove("medium");
        timer.classList.add("low");
        scritte.style.color = "red"
    };

    if (timeLeft === 0) {
        stopInterval();
    }


    circle(timeLeft);


}

// function decreaseOpacity(element) {
//     let opacity = 1
//         const decreaseInterval = setInterval(() => {
//             opacity -= 0.1; // Decremento graduale dell'opacità
//             element.style.opacity = opacity;
//             if (opacity <= 0) {
//                 clearInterval(decreaseInterval); // Fermare l'intervallo quando l'opacità raggiunge zero
//                 element.style.opacity = 1;
//             }
//         }, timeLeft * 1000 / 10); // Intervallo di aggiornamento dell'opacità
// }
/*INIZIO SCRIPT CERCHIO*/

function circle(timeLeft) {
    let circleProgress = document.querySelector('.cerchio')
    const step = 100 / 60;
    circleProgress.style.background = `conic-gradient(#00FFFF ${step * timeLeft}%, transparent 0%)`
}


let domandaAttuale = 0
let arrayShuffle;
function stopInterval() {
    timer.classList.remove("low");

    if (interval) {
        clearInterval(interval);
        interval = undefined;
        timeLeft = 60;
        updateTimer(timeLeft);
    }

    domandaAttuale++;
    const currentQuestion = arrayShuffle[domandaAttuale]
    mandaDomande(currentQuestion);
}

function resetHtml() {
    divBenchmarkBtn.innerHTML = '';
    divDomanda.innerHTML = '';
}

/*FINE SCRIPT CERCHIO*/

//eventlistener Btn rate us

rateUs.addEventListener('click',feedbackPage)

function feedbackPage(){

    divResultsPage.classList.add('display')
    divfeedbackPage.classList.remove('display')


}

let totaleRisposteSbagliate = 0
let punteggio = 0

function mandaDomande(oggettoDomanda) {
    let benchmarkBtn;
    console.log(oggettoDomanda);
    /*INIZIO SCRIPT TIMER*/
    interval = setInterval(() => {
        timeLeft--;
        updateTimer(timeLeft)
    }, 1000);
    /*FINE SCRIPT TIMER*/


    resetHtml();

    let risposteTotali;

    let domanda = oggettoDomanda.question

    console.log(domanda);

    h2.innerHTML = domanda

    divDomanda.append(h2)

    questionNumber.innerHTML = `QUESTION ${domandaAttuale + 1} <span id="rosa">/10</span>`;

    let risposteSbagliate = oggettoDomanda.incorrect_answers

    console.log(risposteSbagliate);

    let rispostaGiusta = oggettoDomanda.correct_answer

    console.log(rispostaGiusta);

    risposteTotali = risposteSbagliate.concat(rispostaGiusta)



    let shuffleRisposte = shuffle(risposteTotali)

    console.log(shuffleRisposte);

    for (let i = 0; i < shuffleRisposte.length; i++) {

        benchmarkBtn = document.createElement("button")
        benchmarkBtn.classList.add("risp")
        benchmarkBtn.innerHTML = shuffleRisposte[i]
        divBenchmarkBtn.append(benchmarkBtn)

        console.log(benchmarkBtn);

        benchmarkBtn.addEventListener('click', (event) => {
            //buttonColor(event.target);
            stopInterval();

            if (event.target.innerHTML == rispostaGiusta) {
                punteggio += 10;
                // updateCentroEndValue();
            } else {
                totaleRisposteSbagliate++;
            }
            console.log(punteggio);
            console.log(totaleRisposteSbagliate);
        });

    }
    //PASSARE A RESULTS PAGE MA DA FARE MEGLIO
    if (questionNumber.innerHTML == `QUESTION 10 <span id="rosa">/10</span>`) {
        divBenchmarkPage.classList.add("display")
        divResultsPage.classList.remove("display")
    }

    console.log(domandaAttuale);
}


function domandeEasy() {
    difficolta = "easy"
    fetchDomande("easy");
}

function domandeMedium() {
    difficolta = "medium"
    fetchDomande("medium");
}

function domandeHard() {
    difficolta = "hard"
    fetchDomande("hard");
}

button.addEventListener('click', () => {
    display();
    const currentQuestion = arrayShuffle[domandaAttuale]
    mandaDomande(currentQuestion);
});
function fetchDomande(difficulty) {
    divDifficultyPage.classList.add("display")
    divBenchmarkPage.classList.remove("display")
    fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficolta}`)
        .then(response => response.json())
        .then(dati => {

            let datiResultsCopia = [...dati.results]
            console.log(datiResultsCopia);
            arrayShuffle = shuffle(dati.results)

            mandaDomande(dati.results[0]);





            // function buttonColor(btn) {

            //     btn.style.backgroundColor = '#D20094'

            //     setTimeout(function () {
            //         btn.style.backgroundColor = ""
            //         mandaDomande();
            //         // Ripristina il colore del pulsante
            //     }, 1000); // Intervallo di 1 secondo per ripristinare il colore del pulsante


            // }
        }

        )
}

// INIZIO FEEDBACK JS

// STELLE

let svgs = document.querySelectorAll('.mySvg');

function changeColor(event) {
    let selectedSVG = event.currentTarget;

    svgs.forEach(function(svg, index) {
        let paths = svg.querySelectorAll('path');
        paths.forEach(function(path) {
            if (index <= Array.from(svgs).indexOf(selectedSVG)) {
                path.setAttribute('fill', '#00FFFF');
            } else {
                path.setAttribute ('fill', '#384075')
            }
        });
    });
}

svgs.forEach(function(svg) {
    svg.addEventListener('click', changeColor);
});

// BOTTONE + ERRORE INPUT

let buttonFB = document.querySelector('.btnNeonFb');
let errore = document.querySelector(".errore");


buttonFB.addEventListener('click', function() {
    let inputValue = document.querySelector(".feed").value;
    if (inputValue.trim('antistronzi') === "") {
        errore.style.display = "block";
    } else {
        errore.style.display = "none";
    }
});

// FINE FEEDBACK JS

//TENTATIVO CIRCLE PROGRESS CON LE VARIABILI
// let circleProgress = document.querySelector('.circle'),
//     centro = document.querySelector('.Centro');

// let centroStartValue = 0,
//     centroEndValueCerchio = 0,    
//     speed = 100;

//     function updateCentroEndValue() {
//         centroEndValueCerchio = punteggio
//         console.log(centroEndValueCerchio);
//     }


// let progress = setInterval(() => {
//     centroStartValue++;

//     circleProgress.style.background = `conic-gradient(#00FFFF ${centroStartValue * 3.6}deg, #D20094 0deg)`
//     if (centroStartValue === centroEndValueCerchio) {
//         clearInterval(progress);
//     }
// }, speed);


//CODICE LORENZO

// //grazie al count poi in entrata il grafico a torta viene modificato di conseguenza
// const donutSegment = document.querySelector(".donut-segment1");

// const editPie = function () {
//     countPoint *= 10;

//     let wrongAnswer = 100 - countPoint;

//     donutSegment.setAttribute(
//         "stroke-dasharray",
//         ${ wrongAnswer } ${ countPoint }
//     );

//     //prende la zona di sinistra corretta e la modifica in base al risultato
//     const correctPercent = document.getElementById("correct");
//     const correctPercent1 = document.getElementById("correct-1");

//     correctPercent.innerText = countPoint + "%";
//     correctPercent1.innerText = countPoint / 10 + "/10 questions";

//     //prende la zona di destra sbagliata e la modifica in base al risultato

//     const wrongPercent = document.getElementById("wrong");
//     const wrongPercent1 = document.getElementById("wrong-1");
//     console.log(wrongPercent1);

//     wrongPercent.innerText = wrongAnswer + "%";
//     wrongPercent1.innerText = wrongAnswer / 10 + "/10 questions";

//     //per modificare pie text

//     const textPie1 = document.getElementById("result-pie");
//     console.log(textPie1.textContent);

//     const textPie2 = document.getElementById("result-pie2");
//     console.log(textPie2.textContent);

//     const textPie3 = Array.from(document.querySelectorAll("#result-pie2 ~ text"));
//     console.log(textPie3);

//     if (countPoint < 60) {
//         textPie1.textContent = "Ci dispiace!!";
//         textPie2.textContent = "Hai fallito l'esame";
//         textPie3.forEach(text => (text.textContent = ""));

//         textPie2.setAttribute("y", 22);
//         textPie2.setAttribute("font-size", 3);
//         textPie2.setAttribute("fill", "red");
//         textPie2.setAttribute("y", 22);
//     }
// };
// // pulsante che manda al feedback

// const rateUsBtn = document.getElementsByClassName("rate-us-button")[0];
// rateUsBtn.onclick = function () {
//     window.location.href = "feedback.html";
// };