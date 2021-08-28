const button = document.querySelector(".dark-mode");

button.addEventListener("click", () => {
    body();
    socialButtons();
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