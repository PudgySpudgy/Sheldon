function computerPlay() {
//   This creates an array of the options for the game.
    var computerOptions = ["rock", "paper", "scissors"]; // add "lizard", and "Spock" at a later date
//    I am asking for a new variable to be randomly generated out of the listed array. Additionally, I am adding a math.floor component(to round down) and a *length designation to limit based on the amount of items in the array.
    var computerRandom = computerOptions[Math.floor(Math.random()*computerOptions.length)];
// This is storing the results of the random var as "computerPlay" to be called by the main program
    return (`${computerRandom}`); 

}
// computerPlay();
// This has been commented out to see if it is necessary.

// function gameRound () {
    
//     let playerSelection = computerPlay();
//     console.log(playerSelection);
//     let computerSelection = computerPlay();
//     console.log(computerSelection);

//         if (playerSelection === computerSelection){
//             console.log("It`s a tie!");
//         } else {
//             console.log('Who will win?');
//     };
// }
// gameRound();

// Above is workable code that only has a simple T/F check. Commented out to proceed with the entirety of the problem.

function gameRound () {
    
    let playerSelection = computerPlay();
    // console.log(playerSelection);
    let computerSelection = computerPlay();
    // console.log(computerSelection);

        if (playerSelection === computerSelection){
            console.log("It`s a tie!");
        } else if  ((playerSelection == 'rock') && (computerSelection === 'paper')) {
            console.log('You lose. Paper covers rock!');
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
            console.log('You win. Rock smashes scissors!');
        } else if ((playerSelection === 'paper') && (computerSelection === 'rock')){
            console.log('You win. Paper covers rock!');
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')){
            console.log('You lose. Scissors cut paper!');
        } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')){
            console.log('Your lose. Rock smashes scissors!');
        } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')){
            console.log('You win. Scissors cut paper!');
    
        }
    
        

    }
gameRound();