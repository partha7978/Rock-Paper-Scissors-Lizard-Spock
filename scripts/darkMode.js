const button = document.querySelector(".dark-mode");
const p = document.querySelector(".p-text");
const container = document.querySelector(".container");
const gameHeading = document.querySelector(".title");
const score = document.querySelector(".score");



button.addEventListener("click", () => {
    body();
    socialButtons();
    navBarP();
    mainContainer();
    heading();
    scoreColor();
})

const body = () => {
    let element = document.body;
    element.classList.toggle("dark-mode-body");
}

const socialButtons = () => {
    let button = document.querySelector(".social-btn");
    button.classList.toggle("nav-btn-color");
    button.classList.toggle("dark-mode-button");
}

const navBarP = () => {
    p.classList.toggle("p-color");
    p.classList.toggle("p-color-dark");
    
}

const mainContainer = () => {
    container.classList.toggle("container-light");
    container.classList.toggle("container-dark");
}

const heading = () => {
    gameHeading.classList.toggle("title-light");
    gameHeading.classList.toggle("title-dark");
}

const scoreColor = () => {
    score.classList.toggle("score-light");
    score.classList.toggle("score-dark");
}