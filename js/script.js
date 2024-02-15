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

        let datiResultsCopia = [...dati.results]

        console.log(datiResultsCopia);

        const shuffle = (array) => {

            for (let i = array.length - 1; i > 0; i--) {

                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];

            }
            return array
        }

        
        let arrayShuffle = shuffle(dati.results)

        console.log(dati.results);

         let domandaAttuale = 0
         let h2 = document.querySelector('#domanda')
         let risposteTotali;
        function mandaDomande() {
            
            for (let i = 0; i < arrayShuffle.length; i++) {
    
                let domande = arrayShuffle[domandaAttuale].question

                console.log(domande);

                h2.innerHTML = domande
    
                domanda.append(h2)

                let risposteSbagliate = arrayShuffle[domandaAttuale].incorrect_answers

                console.log(risposteSbagliate);

                let rispostaGiusta = arrayShuffle[domandaAttuale].correct_answer

                console.log(rispostaGiusta);

                risposteTotali = risposteSbagliate.concat(rispostaGiusta)

                
                 // append dei bottoni con le risposte
            }

            domandaAttuale++; 
            if (domandaAttuale >= arrayShuffle.length) {
                domandaAttuale = 0;

            }//fine

            let shuffleRisposte = shuffle(risposteTotali)

            for (let i = 0; i < shuffleRisposte.length; i++) {

                let benchmarkBtn = document.createElement("button")
                benchmarkBtn.classList.add("risp")
                benchmarkBtn.innerHTML = shuffleRisposte[i]
                divBenchmarkBtn.append(benchmarkBtn)
                console.log(benchmarkBtn);

                benchmarkBtn.addEventListener('click', () => {
                    buttonColor();
                    mandaDomande();
                });
                
            }
            
            function buttonColor() {

            allButtonBenchmark[i].style.backgroundColor = '#D20094'

            setTimeout(function () {

                mandaDomande();

                setTimeout(function () {

                    allButtonBenchmark[i].style.backgroundColor = ''; // Ripristina il colore del pulsante
                }, 0); // Intervallo di 1 secondo per ripristinare il colore del pulsante
            }, 800);

        }
            


           
            //let allButtonBenchmark = querySelectorAll(".risp")

            //ARRAY BUTTON

            //SELEZIONE BUTTON CASUALE
            /*let randomButton = allButtonBenchmark[Math.floor(Math.random() * allButtonBenchmark.length)]

            //SELEZIONE RISPOSTA SBAGLIATA CASUALE
            let rispostaSbagliataRandom = risposteSbagliate[Math.floor(Math.random() * risposteSbagliate.length)]

            for (let i = 0; i < allButtonBenchmark.length; i++) {
                randomButton.innerHTML = rispostaSbagliataRandom

                if (randomButton.innerHTML = rispostaSbagliataRandom) {
                    randomButton.innerHTML = rispostaSbagliataRandom
                }

            }*/




            /*do {
                domandaSingola
            } while (domandeUscite.includes(domandaSingola));
            domandeUscite.push(domandaSingola)
            return domandeUscite*/

            


        }

    })

