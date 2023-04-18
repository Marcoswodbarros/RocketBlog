let body = document.querySelector('body');
let header = document.querySelector('header');
let sectionIntro = document.querySelector('#main__section--intro');
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');

sun.addEventListener("click", sunOff);
moon.addEventListener("click", sunOn);

function sunOff() {
    sun.style.display = "none";
    moon.style.display = "inline";
    header.style.background = "black";
    sectionIntro.style.background = "black";
    body.style.backgroundColor = "black";
    body.style.color = "white";

    const nodeList = document.querySelectorAll("h2");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "#9e6dc2";
    }
}

function sunOn() {
    sun.style.display = "inline";
    moon.style.display = "none";
    header.style.background = "#290742";
    sectionIntro.style.background = "#290742";
    body.style.backgroundColor = "white";
    body.style.color = "black";

    const nodeList = document.querySelectorAll("h2");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "#290742";
    }
}

