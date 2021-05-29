//--------STEPS---------
//When user click
//generate a random choice of the computer language. 
//It should compare the computer choice with user choice.
//It should show a message about.
//It should update the score.

function clicked(i) {
    let choices = ["Rock","Paper","Scissors"];
    let randomNumber = Math.trunc(Math.random() * 3); //trunc removes the fraction part of any number and gives the int value
    
    let userChoice = document.getElementById("userChoice").innerText = `Computer choose <span>${choices[randomNumber].toUpperCase()}</span>`;   //innerHtml is use when we use to replace any tag etc. but innertext is used to update or change the content of the tag.
    let compChoice = document.getElementById("compChoice").innerText = `You choose <span>${input.toUpperCase()}</span>``;
}