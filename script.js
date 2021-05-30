//--------STEPS---------
//When user click
//generate a random choice of the computer language. 
//Display choices.
//It should show a message about.
//It should compare the computer choice with user choice.

//It should update the score.

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

}





//For image button
// let button = document.getElementById("buttonClick");
// let divImage = document.getElementById("clickImage");
// button.addEventListener("click", function() {
//     console.log('click');
//     let img = document.createElement("img");

//     img.className = "imageclass";
//     img.height = "400";
//     img.width = "400";
//     img.src = "https://4.bp.blogspot.com/-UDygmyRud_M/U1mhXYASEwI/AAAAAAAAPsY/DQdK7GNHnOw/s1600/rock%20paper%20scissors%20spock%20lizard%20devil%20love%20rules%20explained%20short%20hand.jpg";        
//     divImage.appendChild(img);

// })



function myFunction(){
    let s = document.getElementById('sss');
    if(s.style.display === 'block'){
      s.style.display = 'none';
    } else{
      s.style.display = 'block';
    }
  }