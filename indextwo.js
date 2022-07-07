let computerOptions = ['rock', 'paper', 'scissors'];
let computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];

// alert('The computer chooses' + ` ${computerSelection}...`)
// code above creates a box that shows the computer selection
function gameRound(computerSelection, playerSelection) {
    console.log(computerSelection);
}
gameRound(computerSelection);

// code above is isolating the computerSelection variable outside of the function, and then calling it 

function playerSelection () {
        input = prompt('1...2...3...');
        var playerDefault = "You don\'t play well with others, do you?";
        var playerChoice = input.toLowerCase();
        console.log(playerChoice);
        
        if (playerChoice === computerSelection){
            alert('Tie Game!');
        } if (playerChoice != ('rock' || 'paper' || 'scissors')){
            alert('Try again....');
            playerSelection();
        }  else if ((playerChoice === 'rock') && (computerSelection === 'paper')){
            alert('You lose! Paper covers rock!');
        } else if ((playerChoice === 'rock') && (computerSelection === 'scissors')){
            alert('You win! Rock smashes scissors!');
        } else if ((playerChoice === 'paper') && (computerSelection === 'rock')){
            alert('You win! Paper covers rock.');
        } else if ((playerChoice === 'paper') && (computerSelection === 'scissors')){
            alert('Your lose! Scissors cut paper.');
        } else if ((playerChoice === 'scissors') && (computerSelection === 'rock')){
            alert('You lose! Rock smashes scissors.');
        } else if ((playerChoice === 'scissors') && (computerSelection === 'paper')){
            alert('You win! Scissors cut paper!');
        } else if ((playerChoice === (null || undefined))){
            return 'Game Over';
        }


        // playerSelection = input.toLowerCase();
        
}
playerSelection();
// code above correctly prompts for user input and converts the result to lower case for proper comparison efforts