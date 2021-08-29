const button = document.querySelector(".dark-mode");
const p = document.querySelector(".p-text");
const container = document.querySelector(".container");
const gameHeading = document.querySelector(".title");


button.addEventListener("click", () => {
    body();
    socialButtons();
    navBarP();
    mainContainer();
    heading();
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