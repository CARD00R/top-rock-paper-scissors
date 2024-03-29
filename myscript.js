// Stored Variables
let playerScore = 0;
let computerScore = 0;
let resultText = "Result: ";
let bShouldGameReset = false;
// Get a random choice 
function getRandomChoice(){
    
    let choice = ["rock", "paper", "scissors"];
    let numericalChoice = Math.floor(Math.random()*3);   
    return choice[numericalChoice];

}
// Update the scores of the player and computer
function UpdateScore(aResult){
    
    let resultEl = document.getElementById('result');
    let playerScoreEl = document.getElementsByClassName('scoreContainer')[0].childNodes[1];
    let computerScoreEl = document.getElementsByClassName('scoreContainer')[0].childNodes[3];

    if(playerScore!=5 && computerScore!=5){
        
        resultEl.textContent = "RESULT: " + aResult;
        playerScoreEl.textContent = "Player Score: " + playerScore;
        computerScoreEl.textContent = "Computer Score: " + computerScore;
    }
    else {
        if(playerScore==5) resultEl.textContent = "RESULT: PLAYER WINS THE GAME!!! ";
        else resultEl.textContent = "RESULT: COMPUTER WINS THE GAME!!! ";
        
        playerScoreEl.textContent = "Player Score: " + playerScore;
        computerScoreEl.textContent = "Computer Score: " + computerScore;

        bShouldGameReset=true;
    }


}

// Play 1 full round of Rock paper scissors
function playRound(playerSelection, computerSelection){
    console.log(computerSelection)
    // If player and computer have the same answer
    if(playerSelection === computerSelection){
        UpdateScore("A DRAW!");
        return;
    }
    // If player chooses rock
    else if(playerSelection === "rock"){
       
        // and computer chooses scissors
        if(computerSelection === "scissors"){
            playerScore++;
            UpdateScore("PLAYER Wins! Rock beats Scissors");
            return;
        }

        // and computer chooses paper
        if(computerSelection === "paper"){
            computerScore++;
            UpdateScore("COMPUTER Wins! Paper beats Rock");
            return;
        }
    }
    else if(playerSelection === "paper"){
       
        // and computer chooses scissors
        if(computerSelection === "rock"){
            playerScore++;
            UpdateScore("PLAYER Wins! Paper beats Rock");
            return;
        }

        // and computer chooses paper
        if(computerSelection === "scissors"){
            computerScore++;
            UpdateScore("COMPUTER Wins! Scissors beats paper");
            return;
        }
    }
    else if(playerSelection === "scissors"){
       
        // and computer chooses scissors
        if(computerSelection === "paper"){
            playerScore++;
            UpdateScore("PLAYER Wins! Scissors beats Paper");
            return;
        }

        // and computer chooses paper
        if(computerSelection === "rock"){
            computerScore++;            
            UpdateScore("COMPUTER Wins! Rock beats scissors");
            return;
        }
    }
    else {
        console.log("Bad Input");
    }

}

function gameReset(){
    playerScore = 0;
    computerScore = 0;
    bShouldGameReset=false;   
}
// declare btn object
let btnContainer = document.getElementsByClassName('playerInput')[0];
// add event listener event to the container (#Bubbling)
if(btnContainer){
    btnContainer.addEventListener('click', (Event) =>{
        let target = Event.target;

        switch(target.id){
            case 'rock':
                if(bShouldGameReset) gameReset()
                playRound('rock', getRandomChoice())
                break;
            case 'paper':
                if(bShouldGameReset) gameReset()
                playRound('paper', getRandomChoice())
                break;
            case 'scissors':
                if(bShouldGameReset) gameReset()
                playRound('scissors', getRandomChoice())
                break;
            default:
                console.log("no matching ID found")
        }
        
    });
}









