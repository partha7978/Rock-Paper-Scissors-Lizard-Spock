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
    document.getElementById('comp_score').innerHTML = comp_score;
    document.getElementById('user_score').innerHTML = user_score;

//todo:  For user wins and computer wins
      
    if(user_score === 10) {
      checkTheme();
       
       
    }
    else if(comp_score === 10) {
      checkTheme();
       document.querySelector(".genral-popup-text").innerHTML = `Computer <span>Won</span> the match😐`;
    }  
}




// !For general popup content
let generalPopup = document.getElementById("generalPopup");
let generalPopupContent = generalPopup.querySelector(".popup-content-general");
let closeBtnGeneral = document.querySelector(".general-close-btn");
let blankDiv = document.querySelector(".blank-div");
let generalDiv = document.querySelector(".general-div");

const generalPopupForLight = () => {
    console.log("generalPopupFunforLight added");
    setTimeout(() => {
      generalPopup.style.display = "block";
      generalPopupContent.classList.add("animate__animated", "animate__fadeInUp"); //!   adding fade in animation when it appears
    }, 500);
  
    closeBtnGeneral.addEventListener("click", () => {
      generalPopupContent.classList.add(
        "animate__animated",
        "animate__fadeOutDown"
      );
      setTimeout(() => {
        generalPopup.style.display = "none";
        location.reload();
      }, 600);
    });
    window.onclick = function (e) {
      if (e.target == blankDiv || e.target == generalDiv) {
        generalPopupContent.classList.add(
          "animate__animated",
          "animate__fadeOutDown"
        );
        setTimeout(() => {
          generalPopup.style.display = "none";
          location.reload();
        }, 600);
      }
    };
  };

  const generalPopupForDark = () => {
    generalPopupForLight();
    console.log("general dark mode popup added");
    generalPopupContent.classList.toggle("darkModePopup");
    if(document.querySelector(".darkModePopup")) {
      document.querySelector(".general-close-btn").classList.add("dark-mode-btn");
    }
  }

  const checkTheme = () => {
    if (document.querySelector('.dark-mode-body')) {
      // window.location.reload(); //for reloding
      generalPopupForDark();
    }
    else{
      
      generalPopupForLight();
      // openLightPopup();
    }

  }



//!for general popup ends



