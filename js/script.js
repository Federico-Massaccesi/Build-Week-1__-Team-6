//SELEZIONE BUTTON WELCOME PAGE
let button = document.querySelector("#btnNeonWelcomePage")

//SELEZIONE WELCOME PAGE
let divWelcomePage = document.querySelector("#Welcome-page")

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

let pages = [divBenchmarkPage, divResultsPage, divfeedbackPage]

for (let i = 0; i < pages.length; i++) {

    pages[i].classList.add("display")

}


//BENCHMARK PAGE

let divBenchmarkBtn = document.querySelector('.risposte') //div che contiene i button

//div che contiene h2 con la domanda

let domanda = document.querySelector('.scritte')

let punteggio = 0

let questionNumber = document.querySelector('.nDomande')






fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
    .then(response => response.json())
    .then(dati => {

        button.addEventListener('click', () => {
            display();
            mandaDomande();
        });
        
        
        function display() {
            if (checkbox.checked) {
                divWelcomePage.classList.add("display")
                divBenchmarkPage.classList.remove("display")
            } else {
                divCheck.innerText = "Obbligatorio!"
                divCheck.style.marginLeft = '100px'
                divCheck.style.color = "red"
            }
        }

        function mandaDomande() {

            let random = dati.results[Math.floor(Math.random() * dati.results.length)]

            let risposteSbagliate = random.incorrect_answers

            let rispostaGiusta = random.correct_answer
            console.log(rispostaGiusta);

            let risposteTotali = risposteSbagliate.push(rispostaGiusta)
            console.log(risposteTotali);

            let domandaSingola = random.question

            let h2 = document.querySelector('#domanda')

            h2.innerHTML = domandaSingola

            domanda.append(h2)

            console.log(domanda);

            for (let i = 1; i < risposteTotali.length; i++) {
                let benchmarkBtn = document.createElement("button")
                benchmarkBtn.classList.add("risp")
                divBenchmarkBtn.append(benchmarkBtn)
            }

            //ARRAY BUTTON
            let allButtonBenchmark = querySelectorAll(".risp")

            //SELEZIONE BUTTON CASUALE
            let randomButton = allButtonBenchmark[Math.floor(Math.random() * allButtonBenchmark.length)]

            //SELEZIONE RISPOSTA SBAGLIATA CASUALE
            let rispostaSbagliataRandom = risposteSbagliate[Math.floor(Math.random() * risposteSbagliate.length)]

            for (let i = 0; i < allButtonBenchmark.length; i++) {
                randomButton.innerHTML = rispostaSbagliataRandom

                if (randomButton.innerHTML = rispostaSbagliataRandom) {
                    randomButton.innerHTML = rispostaSbagliataRandom
                }

            }

            console.log(randomButton);

            console.log(rispostaSbagliataRandom);
            /*do {
                domandaSingola
            } while (domandeUscite.includes(domandaSingola));
            domandeUscite.push(domandaSingola)
            return domandeUscite*/

            for (let i = 0; i < allButtonBenchmark.length; i++) {

                allButtonBenchmark[i].addEventListener('click', buttonColor)

                function buttonColor() {

                    allButtonBenchmark[i].style.backgroundColor = '#D20094'

                    setTimeout(function () {

                        mandaDomande();

                        setTimeout(function () {

                            allButtonBenchmark[i].style.backgroundColor = ''; // Ripristina il colore del pulsante
                        }, 0); // Intervallo di 1 secondo per ripristinare il colore del pulsante
                    }, 800);

                }


            }


        }

    })

