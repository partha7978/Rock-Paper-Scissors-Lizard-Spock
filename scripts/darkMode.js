const button = document.querySelector(".dark-mode");
let p = document.querySelector(".p-text");

button.addEventListener("click", () => {
    body();
    socialButtons();
    navBarP();
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