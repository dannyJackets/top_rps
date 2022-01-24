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

function playerSelection(error = 0){    //set default error case to 0 (e.g. for first input), will recursively run until valid input provided
    let userSelection;
    
    if(!error){ //prompt message based on whether user input was error or first time
        userSelection = prompt("Enter a selection of rock, paper, or scissors:");
    }
    else{
        userSelection = prompt("ERROR! Invalid input. \n\nPlease enter rock, paper, or scissors:")
    }
    error = 0;  //reset error flag
    userSelection = userSelection.toLowerCase();

    if(userSelection == "rock" || userSelection == "paper" || userSelection == "scissors"){
        return(userSelection);
    }
    else{
        playerSelection(-1);    //error in user input
    }
}

function round(){   //plays a round of r,p,s and returns the outcome of the round win/lose. re-runs for tie.
    let computerPick = computerPlay();
    let userPick = playerSelection();
    let outcome;

    if(computerPick == userPick){   //tie case, recurse round
        console.log("Tie! Replay the Round.")
        outcome = round();
    }
    else if((userPick == "rock" && computerPick == "paper") || 
            (userPick == "paper" && computerPick == "scissors") ||
            (userPick == "scissors" && computerPick == "rock")){
        outcome = "lose";
        console.log("The computer played " + computerPick + " and you played " + userPick + ". You lose.... :(");
    }
    else{
        outcome = "win";
        console.log("The computer played " + computerPick + " and you played " + userPick + ". You win!");
    }

    return(outcome);
}

function game(){
    console.log("Rock, Paper, Scissors vs. the computer \nBest " + Math.round(ROUNDS / 2) + " of " + ROUNDS + " rounds" + "\nGood Luck!");

    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i < ROUNDS; i++){
        let outcome = round();
        if(outcome == "win"){
            playerWins++;
        }
        else{
            computerWins++;
        }
        console.log("The score is You: " + playerWins + ", Computer: " + computerWins);
        if(playerWins == Math.round(ROUNDS / 2)){
            console.log("Congrats, you're better than the computer. Now go find some friends and stop playing alone.");
            break;
        }
        else if(computerWins == Math.round(ROUNDS /2)){
            console.log("Sorry bud, the computer is superior.");
            break;
        }
    }
}

game();