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

// BOTTONE



// FINE FEEDBACK JS

