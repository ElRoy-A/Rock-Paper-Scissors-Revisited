// Store DOM elements
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');

const result = document.getElementById('result-text');

// Global variables
let currentPlayerScore = 0;
let currentComputerScore = 0;


// Function for random computer choice
function computerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];

    if (choice === 'Rock') {
        document.getElementById('computer-rock').style.transform = "scale(1.5)";
        document.getElementById('computer-paper').style.transform = "scale(1)";
        document.getElementById('computer-scissors').style.transform = "scale(1)";
    }
    else if (choice === 'Paper') {
        document.getElementById('computer-paper').style.transform = "scale(1.5)";
        document.getElementById('computer-rock').style.transform = "scale(1)";
        document.getElementById('computer-scissors').style.transform = "scale(1)";
    }
    else if (choice === 'Scissors') {
        document.getElementById('computer-scissors').style.transform = "scale(1.5)";
        document.getElementById('computer-rock').style.transform = "scale(1)";
        document.getElementById('computer-paper').style.transform = "scale(1)";
    }


    return choice;
}

// Function for player choice button click
function playerChoice() {
    rock_btn.addEventListener('click', function() {
        game('Rock');
    })
    paper_btn.addEventListener('click', function() {
        game('Paper');
    })
    
    scissors_btn.addEventListener('click', function() {
        game('Scissors');
    })
}

// Function to start the game after player choice is made
function game(choice) {
    let playerChoice = choice;
    let compChoice = computerChoice();

    playRound(playerChoice, compChoice);

    if(currentPlayerScore === 5) {
        endGame('player');
    }

    if(currentComputerScore === 5) {
        endGame('computer');
    }
}

// Function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draw();
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            win();
        }
        else {
            lose();
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            lose();
        }
        else {
            win();
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            win();
        }
        else {
            lose();
        }
    }
}

// Functions: game results
function win() {
    currentPlayerScore++;
    playerScore.textContent = currentPlayerScore;
    result.textContent = 'Player wins.';
}
function lose() {
    currentComputerScore++;
    computerScore.textContent = currentComputerScore;
    result.textContent = 'Computer wins';
}
function draw() {
    result.textContent = 'Its a TIE!';
}

// Function to announce game winner and turn on endgame overlay screen
function endGame(winner) {
    if(winner === 'player') {
        result.textContent = 'GAME ENDED - PLAYER WINS';
    }
    else {
        result.textContent = 'GAME ENDED - COMPUTER WINS';
    }
    on();
}

// Turn overlay on after 5 wins
function on() {
    document.getElementById("overlay").style.display = "block";
}
// turn overlay off after player clicks 'new game'
function off() {
    document.getElementById("overlay").style.zIndex = "block";
}


playerChoice();