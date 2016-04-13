////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either rock, paper, or scissors.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === "rock" && computerMove === "scissors"){
        return "Player";
    }
    else if (computerMove === "rock" && playerMove === "scissors"){
        return "Computer";
    }
    else if (playerMove === "paper" && computerMove === "rock"){
        return "Player";
    }
    else if (computerMove === "paper" && playerMove === "rock"){
        return "Computer";
    }
    else if (playerMove === "scissors" && computerMove === "paper"){
        return "Player";
    }
    else if (computerMove === "scissors" && playerMove === "paper"){
        return "Computer";
    }
    else if (computerMove === playerMove) {
        return "Tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
     // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times //
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);

            if (winner === "Player") {
                playerWins++;
                
            }
            else if (winner === "Computer") {
                computerWins++;
            }
            else if (winner === "Tie") {
                computerWins + 0 && playerWins + 0;
                console.log('This round was a tie!')
            }

            console.log('You chose ' + playerMove + '. Computer chose ' + computerMove + ".");
            console.log('The score is ' + playerWins + ' to ' + computerWins + '\n');
            
     } 
    return [playerWins, computerWins];
}
playToFive()
