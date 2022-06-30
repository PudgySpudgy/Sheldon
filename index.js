function computerPlay() {
//   This creates an array of the options for the game.
    var computerOptions = ["rock", "paper", "scissors", "lizard", "Spock"];
//    I am asking for a new variable to be randomly generated out of the listed array. Additionally, I am adding a math.floor component(to round down) and a *length designation to limit based on the amount of items in the array.
    var computerRandom = computerOptions[Math.floor(Math.random()*computerOptions.length)];
// This is storing the results of the random var as "computerPlay" to be called by the main program
    return (`${computerRandom}`); 

}
// computerPlay();
// This has been commented out to see if it is necessary.

function gameRound () {
    let playerSelection = computerPlay();
    console.log(playerSelection);
    let computerSelection = computerPlay();
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    }
    // while (playerSelection !== computerSelection) 
    //     if ((playerSelection === "rock") && (computerSelection === "paper")){
    //     console.log("You lose! Paper covers rock!");
    //     break;
    // } if ((playerSelection === "rock") && (computerSelection === "scissors")){
    //     console.log("You win! Rock smashes scissors!");
    //     // break;
    // } if ((playerSelection === "rock") && (computerSelection === "lizard")){
    //     console.log("You win! Rock crushes lizard!");
    //     // break;
    // } if ((playerSelection === "rock") && (computerSelection === "Spock")){
    //     console.log("You lose! Spock vaporizes rock!");
    //     // break;
    // } if ((playerSelection === "paper") && (computerSelection === "rock")){
    //     console.log("You win! Paper covers rock!");
    //     // break;
    // } if ((playerSelection === "paper") && (computerSelection === "scissors")){
    //     console.log("You lose! Scissors cut paper!");
    //     // break;
    // } if ((playerSelection === "paper") && (computerSelection === "lizard")){
    //     console.log("You lose! Lizard eats paper!");
    //     // break;
    // } if ((playerSelection === "paper") && (computerSelection === "Spock")){
    //     console.log("you win! Paper disproves Spock!");
    //     // break;
    } 

// I think I need to evaluate the type of loop I need to be using to complete this program. Nested 'if' statements seem to break the code. Is this because I led with a 'while' statement? I have commented out all of the offending code, and will reevaluate in the morning.















    
 gameRound();