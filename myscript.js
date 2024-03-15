// Stored Variables
let playerScore = 0;
let computerScore = 0;

// Get a random choice 
function getRandomChoice(){
    
    let choice = ["rock", "paper", "scissors"];
    let numericalChoice = Math.floor(Math.random()*3);   
    return choice[numericalChoice];

}
// Print the scores of the player and computer
function printScore(){
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}

// Play 1 full round of Rock paper scissors
function playRound(playerSelection, computerSelection){
    
    // If player and computer have the same answer
    if(playerSelection === computerSelection){
        console.log("Its a draw!");
        return;
    }
    // If player chooses rock
    else if(playerSelection === "rock"){
       
        // and computer chooses scissors
        if(computerSelection === "scissors"){
            console.log("You Win! Rock beats Scissors");
            playerScore++;
            return;
        }

        // and computer chooses paper
        if(computerSelection === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
            return;
        }
    }
    else if(playerSelection === "paper"){
       
        // and computer chooses scissors
        if(computerSelection === "rock"){
            console.log("You Win! Paper beats Rock");
            playerScore++;
            return;
        }

        // and computer chooses paper
        if(computerSelection === "scissors"){
            console.log("You lose! Scissors beats paper");
            computerScore++;
            return;
        }
    }
    else if(playerSelection === "scissors"){
       
        // and computer chooses scissors
        if(computerSelection === "paper"){
            console.log("You Win! Scissors beats Paper");
            playerScore++;
            return;
        }

        // and computer chooses paper
        if(computerSelection === "rock"){
            console.log("You lose! Rock beats scissors");
            computerScore++;            
            return;
        }
    }
    else {
        console.log("Idk what you inputted, but I dont get");
    }

}

// Player X amount of rounds of Rock Paper Scissors
function playGame(rounds){

    for(let i = 0; i < rounds; i++){

        if(playerScore === 3 || computerScore === 3){
            if(playerScore>computerScore){
                console.log("Player wins!")
            }
            else {
                console.log("Computer wins!")
            }
            return; 
        } 

        console.log("ROUND: " + (i+1)); 
        playerSelection = window.prompt("Choose Rock, Paper or Scissors").toLowerCase();
        computerSelection = getRandomChoice();
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        playRound(playerSelection, computerSelection);
        printScore();
        console.log(" ");
    }
}

console.log(playGame(10));
