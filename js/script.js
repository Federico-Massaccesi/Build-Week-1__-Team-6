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

console.log(divBenchmarkBtn);

//div che contiene h2 con la domanda

let divDomanda = document.querySelector('.scritte')

let punteggio = 0

let questionNumber = document.querySelector('.nDomande p')





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
        let datiResultsCopia = [...dati.results]

        console.log(datiResultsCopia);

        function shuffle(array) {

            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }


        let arrayShuffle = shuffle(dati.results)

        console.log(dati.results);



        let h2 = document.querySelector('#domanda')
        let benchmarkBtn;
        let domandaAttuale = 0
    
        function mandaDomande() {

            let risposteTotali;
                
                let domanda = arrayShuffle[domandaAttuale].question

                console.log(domanda);

                h2.innerHTML = domanda

                divDomanda.append(h2)

                questionNumber.innerHTML = `QUESTION ${domandaAttuale+1} <span id="rosa">/10</span>`;

                let risposteSbagliate = arrayShuffle[domandaAttuale].incorrect_answers

                console.log(risposteSbagliate);

                let rispostaGiusta = arrayShuffle[domandaAttuale].correct_answer

                console.log(rispostaGiusta);

                risposteTotali = risposteSbagliate.concat(rispostaGiusta)
            
            domandaAttuale++;
            
            
            let shuffleRisposte = shuffle(risposteTotali)

            console.log(shuffleRisposte);

            for (let i = 0; i < shuffleRisposte.length; i++) {

                benchmarkBtn = document.createElement("button")
                benchmarkBtn.classList.add("risp")
                benchmarkBtn.innerHTML = shuffleRisposte[i]
                divBenchmarkBtn.append(benchmarkBtn)

                console.log(benchmarkBtn);

                benchmarkBtn.addEventListener('click', (event) => {
                    buttonColor(event.target);
                });

            }

            

            console.log(domandaAttuale);
        }

        function buttonColor(btn) {

            btn.style.backgroundColor = '#D20094'

            setTimeout(function () {
                btn.style.backgroundColor = ""
                divBenchmarkBtn.innerHTML = ""
                divDomanda.innerHTML = ""
                mandaDomande();
                // Ripristina il colore del pulsante
            }, 1000); // Intervallo di 1 secondo per ripristinare il colore del pulsante


        }
    }

    )

