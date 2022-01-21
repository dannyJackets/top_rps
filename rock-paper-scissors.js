//computerPlay function to have computer return rock, paper, scissors choice randomly
//playerSelection function to handle case-insensitive user input of rock, paper, scissors
    //use *prompt* to get input from user
//write function *round* to play a single round using computerPlay and playerSelection
//write function called *game* to play 5 rounds

const COMPUTER_CHOICE = ['rock', 'paper', 'scissors'];  //constant choices for random pick by computer
const RANDOM_MIN = 0;   //indices for COMPUTER_CHOICE array
const RANDOM_MAX = 2;


function computerPlay(){    //provides a random r, p, s choice for the computer
    return(COMPUTER_CHOICE[getRandomInt()]);
}

function getRandomInt(){    //provides a random number from RANDOM_MIN to RANDOM_MAX inclusively
    return(Math.floor(Math.random() * (RANDOM_MAX - RANDOM_MIN + 1) + RANDOM_MIN));
}


