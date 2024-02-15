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

let button = document.querySelector('.btnNeonFb');
let errore = document.querySelector(".errore");


button.addEventListener('click', function() {
    let inputValue = document.querySelector(".feed").value;
    if (inputValue.trim('antistronzi') === "") {
        errore.style.display = "block";
    } else {
        errore.style.display = "none";
    }
});

// ERRORE STELLE

button.addEventListener('click', function() {
    for (let i = 0; i < svgs.length; i++) {
        if (selectedSVG === -1) {
            errore.style.display = "block";
        } else {
            errore.style.display = "none";
        }
    }
});