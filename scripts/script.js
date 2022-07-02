//--------STEPS---------
//When user click
//generate a random choice of the computer language. 
//Display choices.
//It should show a message about.
//It should compare the computer choice with user choice.

//It should update the score.

// starting message
// setTimeout( () => {
//     alert("This is Rock Paper Scissors Lizard Spock game. You can start playing with computer by clicking the icons. ")
// }, 2000);



const result = document.getElementById("result");
let [comp_score, user_score] = [0,0];


let gameRules = {
    Rock: {
        Rock: 'draw',
        Scissors: 'lose',
        Paper: 'win',
        Spock: 'win',
        Lizard: 'lose'
    },
    Paper: {
        Paper: 'draw',
        Rock: 'lose',
        Scissors: 'win',
        Lizard: 'win',
        Spock: 'lose'
    },
    Scissors: {
        Scissors: 'draw',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'lose',
        Spock: 'win'
    },
    Lizard: {
        Scissors: 'win',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'draw',
        Spock: 'lose'
    },
    Spock: {
        Scissors: 'lose',
        Paper: 'win',
        Rock: 'lose',
        Lizard: 'win',
        Spock: 'draw'
    }
}

function clicked(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.trunc(Math.random() * 5); //trunc removes the fraction part of any number and gives the int value
    let comp_choice = choices[randomNumber];
    
    console.log(randomNumber);
    document.getElementById("userChoice").innerHTML = `Computer choose <span>${comp_choice.toUpperCase()}</span>`;   //innerHtml is use when we use to replace any tag etc. but innertext is used to update or change the content of the tag.
    document.getElementById("compChoice").innerHTML = `You choose <span>${input.toUpperCase()}</span>`;

    console.log('input', input, 'comp- choice', comp_choice);
    switch(gameRules[comp_choice][input]) {
        case 'win':
            result.innerText = `You win`;
            result.style.cssText = "background-color: rgb(128, 247, 128)";
            user_score++;
            break;
        case 'lose':
            result.innerText = `You lose`;
            result.style.cssText = "background-color: rgb(240, 124, 124)";
            comp_score++;
            break;
        case 'draw':
            result.innerText = `You draw`;
            result.style.cssText = "background-color: rgb(102, 102, 102)";
            break;   
    }
    
    localStorage.setItem('userInputValue', JSON.stringify(user_score));
    localStorage.setItem('compInputValue', JSON.stringify(comp_score));
    
    setLocalStorageData();
    // console.log(localStorage.getItem('userInputValue'), localStorage.getItem('compInputValue'));

 
//todo:  For user wins and computer wins
      
    if(user_score === 10) {
      checkTheme();
       
       
    }
    else if(comp_score === 10) {
      checkTheme();
       document.querySelector(".genral-popup-text").innerHTML = `Computer <span>Won</span> the match😐`;
    }  
}


  const checkTheme = () => {
    if (document.querySelector('.dark-mode-body')) {
      // window.location.reload(); //for reloding
      generalPopupForDark();  //*this function is in popup.css file
    }
    else{
      
      generalPopupForLight();
      // openLightPopup();
    }

  }



//!for general popup ends



// ! implementing local storage
const setLocalStorageData = () => {
  document.getElementById('comp_score').innerHTML = localStorage.getItem('compInputValue');
  document.getElementById('user_score').innerHTML = localStorage.getItem('userInputValue'); 
} 
setLocalStorageData();