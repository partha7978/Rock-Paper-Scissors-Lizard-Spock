const button = document.querySelector(".dark-mode");
const p = document.querySelector(".p-text");
const container = document.querySelector(".container");
const gameHeading = document.querySelector(".title");
const score = document.querySelector(".score");
const choosingPartComp = document.querySelector(".choosing-part-comp");
const choosingPartUser = document.querySelector(".choosing-part-user");
const i = document.querySelector(".fas");

button.addEventListener("click", () => {

    
    darkModeIcon();
    body();
    socialButtons();
    navBarP();
    mainContainer();
    heading();
    scoreColor();
    choosingText();

    if(document.querySelector('.fa-sun')){
        console.log('sun detected');
        p.innerText = "Light Mode";
     }
     else
     {
         console.log('moon detected');
         p.innerText = "Dark Mode";
     }
})





const darkModeIcon = () => {
    let btn = document.querySelector(".dark-mode");
    btn.classList.toggle("nav-btn-color");
    btn.classList.toggle("dark-mode-button");

    i.classList.toggle("fa-moon-o");
    i.classList.toggle("fa-sun");
}

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

const choosingText = () => {
    choosingPartUser.classList.toggle("p-light");
    choosingPartUser.classList.toggle("p-dark");

    choosingPartComp.classList.toggle("p-light");
    choosingPartComp.classList.toggle("p-dark");
}



//for system theme detection and set the theme according to that
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // window.location.reload(); //for reloding

    
p.innerText = 'Light Mode';
 console.log("dark mode detected");   // dark mode
 
 darkModeIcon();
 body();
 socialButtons();
 navBarP();
 mainContainer();
 heading();
 scoreColor();
 choosingText();
}
else
{
    console.log("light mode detected"); // light mode
    p.innerText = 'Dark Mode';
  
}
