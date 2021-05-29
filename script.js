//--------STEPS---------
//When user click
//generate a random choice of the computer language. 
//Display choices.
//It should show a message about.
//It should compare the computer choice with user choice.

//It should update the score.

const result = document.getElementById("result");
let gameRules = {
    Rock: {
        Rock: 'draw',
        Scissors: 'win',
        Paper: 'lose'
    },
    Paper: {
        Paper: 'draw',
        Rock: 'win',
        Scissors: 'lose'
    },
    Scissors: {
        Scissors: 'draw',
        Paper: 'win',
        Rock: 'lose'
    }
}

function clicked(input) {
    let choices = ["Rock","Paper","Scissors"];
    let randomNumber = Math.trunc(Math.random() * 3); //trunc removes the fraction part of any number and gives the int value
    let comp_choice = choices[randomNumber];
    
    document.getElementById("userChoice").innerHTML = `Computer choose <span>${comp_choice.toUpperCase()}</span>`;   //innerHtml is use when we use to replace any tag etc. but innertext is used to update or change the content of the tag.
    document.getElementById("compChoice").innerHTML = `You choose <span>${input.toUpperCase()}</span>`;


    switch(gameRules[input][comp_choice]) {
        case 'win':
            result.innerText = `You win`;
            break;
        case 'lose':
            result.innerText = `You lose`;
            break;
        case 'lose':
            result.innerText = `You lose`;
            break;   
    }
}