let body = document.querySelector('body');
let header = document.querySelector('header');
let sectionIntro = document.querySelector('#main__section--intro');
let sectionTwo = document.querySelector('#main__section--two');
let sectionThree = document.querySelector('#main__section--three');
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');

sun.addEventListener("click", sunOff);
moon.addEventListener("click", sunOn);

function sunOff () {
    sun.style.display = "none";
    moon.style.display = "inline";
    header.style.background = "black";
    sectionIntro.style.background = "black";
    body.style.backgroundColor = "black";
    body.style.color = "white";
}

function sunOn () {
    sun.style.display = "inline";
    moon.style.display = "none";
    header.style.background = "#290742";
    sectionIntro.style.background = "#290742";
    body.style.backgroundColor = "white";
    body.style.color = "black";
}