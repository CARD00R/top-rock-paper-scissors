// Stored Variables
let playerScore = 0;
let computerScore = 0;
let resultText = "Result: ";

// Get a random choice 
function getRandomChoice(){
    
    let choice = ["rock", "paper", "scissors"];
    let numericalChoice = Math.floor(Math.random()*3);   
    return choice[numericalChoice];

}
// Update the scores of the player and computer
function UpdateScore(aResult){
    
    let resultEl = document.getElementById('result');
    resultEl.textContent = "RESULT: " + aResult;

    let playerScoreEl = document.getElementsByClassName('scoreContainer')[0].childNodes[1];
    playerScoreEl.textContent = "Player Score: " + playerScore;

    let computerScoreEl = document.getElementsByClassName('scoreContainer')[0].childNodes[3];
    computerScoreEl.textContent = "Computer Score: " + computerScore;
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



let btnContainer = document.getElementsByClassName('playerInput')[0];
if(btnContainer){
    btnContainer.addEventListener('click', (Event) =>{
        let target = Event.target;

        switch(target.id){
            case 'rock':
                playRound('rock', getRandomChoice())
                break;
            case 'paper':
                playRound('paper', getRandomChoice())
                break;
            case 'scissors':
                playRound('scissors', getRandomChoice())
                break;
            default:
                console.log("no matching ID found")
        }
        
    });
}

UpdateScore(' ');



// // Player X amount of rounds of Rock Paper Scissors
// function playGame(rounds){

//     for(let i = 0; i < rounds; i++){

//         if(playerScore === 3 || computerScore === 3){
//             if(playerScore>computerScore){
//                 console.log("Player wins!")
//             }
//             else {
//                 console.log("Computer wins!")
//             }
//             return; 
//         } 

//         console.log("ROUND: " + (i+1)); 
//         playerSelection = window.prompt("Choose Rock, Paper or Scissors").toLowerCase();
//         computerSelection = getRandomChoice();
//         console.log("Player: " + playerSelection);
//         console.log("Computer: " + computerSelection);
//         playRound(playerSelection, computerSelection);
//         printScore();
//         console.log(" ");
//     }
// }








