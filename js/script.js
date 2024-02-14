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
let checkbox= document.querySelector('#agree_terms')

//SELEZIONE DIV CHECKBOX

let divCheck = document.querySelector('#div-check')

let pages =[divBenchmarkPage, divResultsPage, divfeedbackPage]

for (let i = 0; i < pages.length; i++) {

    pages[i].classList.add("display")

}

button.addEventListener("click", display)

function display() {
    if(checkbox.checked){
    divWelcomePage.classList.add("display")
    divBenchmarkPage.classList.remove("display")
}else{
    divCheck.innerText = "Obbligatorio!"
    divCheck.style.marginLeft = '100px'
    divCheck.style.color = "red"
}
}
//BENCHMARK PAGE

let divBenchmarkBtn = document.querySelectorAll('.risposte') //div che contiene i button

//selezione btn benchmark page 

let benchmarkBtn1 = document.querySelector('#risp1')

let benchmarkBtn2 = document.querySelector('#risp2')

let benchmarkBtn3 = document.querySelector('#risp3')

let benchmarkBtn4 = document.querySelector('#risp4')

//ARRAY BUTTON

let allButtonBenchmark = [benchmarkBtn1,benchmarkBtn2,benchmarkBtn3,benchmarkBtn4]

 //div che contiene h2 con la domanda

let domanda = document.querySelector('.scritte') 

let punteggio = 0

let questionNumber = document.querySelector('.nDomande')

fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
  .then(response => response.json())
  .then(dati => {

    console.log(dati.results);
    
    function mandaDomande(){
    
    let random = dati.results[Math.floor(Math.random()*dati.results.length )]
    
    let domandaSingola = random.question
    
    let testo = document.createElement('h2')
    
    let h2 = document.querySelector('h2')
    
    h2.innerHTML = domandaSingola
    
    domanda.append(h2)
    
    /*do {
        domandaSingola
    } while (domandeUscite.includes(domandaSingola));
    domandeUscite.push(domandaSingola)
    return domandeUscite*/

    for (let i = 0; i < allButtonBenchmark.length; i++) {
        
        allButtonBenchmark[i].addEventListener('click',buttonColor)
        
        function buttonColor(){
    
            allButtonBenchmark[i].style.backgroundColor = '#D20094'

            setTimeout(function() {
    
                mandaDomande();
        
                setTimeout(function() {
    
                    allButtonBenchmark[i].style.backgroundColor = ''; // Ripristina il colore del pulsante
                }, 0); // Intervallo di 1 secondo per ripristinare il colore del pulsante
            }, 800);
            
        }
        
        
    }


}

mandaDomande();





})