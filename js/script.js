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

//SELEZIONE DIV CHECKBOX
let divCheck = document.querySelector('#div-check')

let rateUs = document.querySelector('#Btn')

//SELEZIONE FAKE CHECKBOX
let fakeCheckbox = document.querySelector("#agree_terms")

//SELEZIONE LABEL
let labelWelcome = document.querySelector("#labelWelcome")


fakeCheckbox.addEventListener("click", addClass)
labelWelcome.addEventListener("click", addClass)


function addClass() {
    if (fakeCheckbox.classList.contains("click")) {
        fakeCheckbox.classList.remove("click")
        fakeCheckbox.innerText = ""
    }else{
    fakeCheckbox.classList.add("click")
    fakeCheckbox.innerText = "✔"
}
}

//BENCHMARK PAGE

let divBenchmarkBtn = document.querySelector('.risposte') //div che contiene i button
let h2 = document.querySelector('#domanda')

//div che contiene h2 con la domanda

let divDomanda = document.querySelector('.scritte')

let questionNumber = document.querySelector('.nDomande p')

//SELEZIONE H2 RESULTS PAGE 

let correct = document.querySelector('#correct')

let wrong = document.querySelector('#wrong')

//selezione p result page
let pCorrect = document.querySelector('.Sinistra p')
let pWrong = document.querySelector('.Destra p')

//SELEZIONE CAMPI SUPERAMENTO TEST
let h3CampiTest = document.querySelector(".Centro h3")
let h4CampiTest = document.querySelector(".Centro h4")
let pCampiTest = document.querySelector(".Centro p")


function display() {
    if (fakeCheckbox.classList.contains("click")) {
        divWelcomePage.classList.add("display")
        divDifficultyPage.classList.remove("display")
    } else {
        divCheck.innerText = "Obbligatorio!"
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
        totaleRisposteSbagliate += 10;
    }


    circle(timeLeft);


}

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

rateUs.addEventListener('click', feedbackPage)

function feedbackPage() {

    divResultsPage.classList.add('display')
    divfeedbackPage.classList.remove('display')


}

let totaleRisposteSbagliate = 0
let punteggio = 0


function mandaDomande(oggettoDomanda) {

    if (fineQuiz(oggettoDomanda)) return


    if (punteggio >= 60) {
        h3CampiTest.innerText = "Congratulations!"
        h4CampiTest.innerText = "You passed the exam."
        h4CampiTest.style.color = "#00FFFF"
        pCampiTest.innerText = "We'll send the certificate in few minutes. Check your email (including promotions/spam folder)"
    } else {
        h3CampiTest.innerText = "We are sorry!"
        h4CampiTest.innerText = "You failed the exam."
        h4CampiTest.style.color = "red"
        pCampiTest.innerText = "You need to repeat the quiz again! We will contact, check your email (including promotions/spam folder)"

    }
    let benchmarkBtn;

    /*INIZIO SCRIPT TIMER*/
    interval = setInterval(() => {
        timeLeft--;
        updateTimer(timeLeft)
    }, 1000);
    /*FINE SCRIPT TIMER*/


    resetHtml();

    let risposteTotali;

    let domanda = oggettoDomanda.question


    h2.innerHTML = domanda

    divDomanda.append(h2)

    questionNumber.innerHTML = `QUESTION ${domandaAttuale + 1} <span id="rosa">/10</span>`;

    let risposteSbagliate = oggettoDomanda.incorrect_answers


    let rispostaGiusta = oggettoDomanda.correct_answer


    risposteTotali = risposteSbagliate.concat(rispostaGiusta)



    let shuffleRisposte = shuffle(risposteTotali)


    for (let i = 0; i < shuffleRisposte.length; i++) {

        benchmarkBtn = document.createElement("button")
        benchmarkBtn.classList.add("risp")
        benchmarkBtn.innerHTML = shuffleRisposte[i]
        divBenchmarkBtn.append(benchmarkBtn)


        benchmarkBtn.addEventListener('click', (event) => {
            //buttonColor(event.target);
            stopInterval();

            if (event.target.innerHTML == rispostaGiusta) {
                punteggio += 10;
                aggiornaCentroEndValue()
            } else {
                totaleRisposteSbagliate += 10;
            }

            aggiornaConteggio();
        });

    }

}

function aggiornaConteggio() {
    correct.innerText = `${punteggio}%`
    wrong.innerText = `${totaleRisposteSbagliate}%`
    pWrong.innerText = totaleRisposteSbagliate / 10 + '/10'
    pCorrect.innerText = punteggio / 10 + '/10'
}

function fineQuiz(oggettoDomanda) {
    if (!oggettoDomanda) {
        divBenchmarkPage.classList.add("display")
        divResultsPage.classList.remove("display")
        return true
    }
    return false;
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

            arrayShuffle = shuffle(dati.results)

            mandaDomande(dati.results[0]);
        }

        )
}

// INIZIO FEEDBACK JS

// STELLE

let svgs = document.querySelectorAll('.mySvg');

function changeColor(event) {
    let selectedSVG = event.currentTarget;

    svgs.forEach(function (svg, index) {
        let paths = svg.querySelectorAll('path');
        paths.forEach(function (path) {
            if (index <= Array.from(svgs).indexOf(selectedSVG)) {
                path.setAttribute('fill', '#00FFFF');
            } else {
                path.setAttribute('fill', '#384075')
            }
        });
    });
}

svgs.forEach(function (svg) {
    svg.addEventListener('click', changeColor);
});

// BOTTONE + ERRORE INPUT

let buttonFB = document.querySelector('.btnNeonFb');
let errore = document.querySelector(".errore");


buttonFB.addEventListener('click', function () {
    let inputValue = document.querySelector(".feed").value;
    if (inputValue.trim('antistronzi') === "") {
        errore.style.display = "block";
    } else {
        errore.style.display = "none";
    }
});

// FINE FEEDBACK JS

//TENTATIVO CIRCLE PROGRESS CON LE VARIABILI 
let circleProgress = document.querySelector('.circle'),
    centro = document.querySelector('.Centro');

let centroStartValue = 0,
    centroEndValue = 0,
    speed = 100;

function aggiornaCentroEndValue() {

    centroEndValue = punteggio

}


let progress = setInterval(() => {
    centroStartValue++;

    circleProgress.style.background = `conic-gradient(#00FFFF ${centroEndValue * 3.6}deg, #D20094 0deg)`
    if (centroStartValue === centroEndValue) {
        clearInterval(progress);
    }
}, speed);
