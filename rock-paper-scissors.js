//computerPlay function to have computer return rock, paper, scissors choice randomly
//playerSelection function to handle case-insensitive user input of rock, paper, scissors
    //use *prompt* to get input from user
//write function *round* to play a single round using computerPlay and playerSelection
//write function called *game* to play 5 rounds

const COMPUTER_CHOICE = ["rock", "paper", "scissors"];  //constant choices for random pick by computer
const RANDOM_MIN = 0;   //indices for COMPUTER_CHOICE array
const RANDOM_MAX = 2;
const ROUNDS = 5;   //number of rounds to play

function computerPlay(){    //provides a random r, p, s choice for the computer
    return(COMPUTER_CHOICE[getRandomInt()]);
}

function getRandomInt(){    //provides a random number from RANDOM_MIN to RANDOM_MAX inclusively
    return(Math.floor(Math.random() * (RANDOM_MAX - RANDOM_MIN + 1) + RANDOM_MIN));
}

function playRound(userPick){   //plays a round of r,p,s and returns the outcome of the round win/lose. re-runs for tie.
    let computerPick = computerPlay();
    let outcome;

    if(computerPick == userPick){   //tie case, recurse round
        //console.log("Tie! Replay the Round.")
        document.getElementById("message").innerHTML = "Tie! Replay the Round.";
        return;
    }
    else if((userPick == "rock" && computerPick == "paper") || 
            (userPick == "paper" && computerPick == "scissors") ||
            (userPick == "scissors" && computerPick == "rock")){
        outcome = "lose";
        //console.log("The computer played " + computerPick + " and you played " + userPick + ". You lose.... :(");
        document.getElementById("message").innerHTML = "The computer played " + computerPick + " and you played " + userPick + ". You lose.... :(";
    }
    else{
        outcome = "win";
        //console.log("The computer played " + computerPick + " and you played " + userPick + ". You win!");
        document.getElementById("message").innerHTML = "The computer played " + computerPick + " and you played " + userPick + ". You win!";
    }

    return(outcome);
}

function game(userPick){
    
    let playerWins = 0;
    let computerWins = 0;
    
    let outcome = playRound(userPick);
    if(outcome == "win"){
        playerWins++;
    }
    else if(outcome == "lose"){
        computerWins++;
    }
    document.getElementById("score").innerHTML = "The score is You: " + playerWins + ", Computer: " + computerWins;
    if(playerWins == Math.round(ROUNDS / 2)){
        document.getElementById("message").innerHTML = "Congrats, you're better than the computer. Now go find some friends and stop playing alone. <br>Click another button to play again";
    }
    else if(computerWins == Math.round(ROUNDS /2)){
        document.getElementById("message").innerHTML = "Sorry bud, the computer is superior. <br>Click another button to play again";
    }
}

document.getElementById("rock").addEventListener("click", function(){
    game("rock");
});
document.getElementById("paper").addEventListener("click", function(){
    game("paper");
});
document.getElementById("scissors").addEventListener("click", function(){
    game("scissors");
});

document.getElementById("welcome").innerHTML = "Rock, paper, scissors vs. the RNG computer <br>Best " + Math.round(ROUNDS / 2) + " of " + ROUNDS + " rounds" + "<br>Good Luck!";