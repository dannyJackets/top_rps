const COMPUTER_CHOICE = ["rock", "paper", "scissors"];  //constant choices for random pick by computer
const RANDOM_MIN = 0;   //indices for COMPUTER_CHOICE array
const RANDOM_MAX = 2;
const ROUNDS = 9;   //number of rounds to play
var playerWins = 0; //number of player round wins
var computerWins = 0;   //number of computer round wins

function computerPlay(){    //provides a random r, p, s choice for the computer
    return(COMPUTER_CHOICE[getRandomInt()]);
}

function getRandomInt(){    //provides a random number from RANDOM_MIN to RANDOM_MAX inclusively
    return(Math.floor(Math.random() * (RANDOM_MAX - RANDOM_MIN + 1) + RANDOM_MIN));
}

function playRound(userPick){   //plays a round of r,p,s and returns the outcome of the round win/lose.
    let computerPick = computerPlay();
    let outcome;

    if(computerPick == userPick){   //tie case, recurse round
        document.getElementById("message").innerHTML = "Tie! Replay the Round.";
        return;
    }
    else if((userPick == "rock" && computerPick == "paper") || 
            (userPick == "paper" && computerPick == "scissors") ||
            (userPick == "scissors" && computerPick == "rock")){
        outcome = "lose";
        document.getElementById("message").innerHTML = "The computer played " + computerPick + " and you played " + userPick + ". You lose.... :(";
    }
    else{
        outcome = "win";
        document.getElementById("message").innerHTML = "The computer played " + computerPick + " and you played " + userPick + ". You win!";
    }

    return(outcome);
}

function game(userPick){ 
    let outcome = playRound(userPick);
    if(outcome == "win"){
        playerWins++;
    }
    else if(outcome == "lose"){
        computerWins++;
    }
    document.getElementById("score").innerHTML = "The score is You: " + playerWins + ", Computer: " + computerWins;
    if(playerWins == Math.round(ROUNDS / 2)){
        document.getElementById("message").innerHTML = "Congrats, you're better than the computer. Now go find some friends and stop playing alone.... <br>Click another button to play again";
        playerWins = 0; 
        computerWins = 0;
    }
    else if(computerWins == Math.round(ROUNDS /2)){
        document.getElementById("message").innerHTML = "Sorry bud, the computer is superior. <br><i>Click another button to play again</i>";
        playerWins = 0;
        computerWins = 0;
    }
}

//user button event listeners
document.getElementById("rock").addEventListener("click", function(){
    game("rock");
});
document.getElementById("paper").addEventListener("click", function(){
    game("paper");
});
document.getElementById("scissors").addEventListener("click", function(){
    game("scissors");
});

//initial message content settings
document.getElementById("welcome").innerHTML = "Rock, paper, scissors vs. the RNG computer <br>Best " + Math.round(ROUNDS / 2) + " of " + ROUNDS + " rounds" + "<br>Good Luck!";
document.getElementById("message").innerHTML = "";
document.getElementById("score").innerHTML = "";