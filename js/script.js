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
    divCheck.style.border= '2px solid white'
    divCheck.style.padding ='5px'
}
}

