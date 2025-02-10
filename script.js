//Alert when window loads
window.alert('Welcome to Rock, Paper, Scissors!');

//global variables
const choices = ['r', 'p', 's'];
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

//get player's choice
function getPlayerChoice() {
  //alert so player can input their choice
  playerChoice = window.prompt('Choose your weapon: R, P, or S!');
  //failsafe for invalid choices 
  if (!choices.includes(playerChoice)) {
    window.prompt('You can only choose from R, P, or S...try again...');
  }
};
getPlayerChoice();

//computer choice - random
function randomComputerChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};
randomComputerChoice();

//figure out the winner
function determineWinner() {
  //tie
  if (playerChoice === computerChoice) {
    window.alert(`It's a tie!`);
    //player wins
  } else if (
    (playerChoice === 'r' && computerChoice === 's') ||
    (playerChoice === 'p' && computerChoice === 'r') ||
    (playerChoice === 's' && computerChoice === 'p')
  ) {
    window.alert('You win!');
    //computer wins
  } else {
    window.alert(`Computer Wins!`)
  }
};
determineWinner();

//play again?
function playagain() {
  window.prompt(`Would you like to play again?` === `y`){
    reload();
  }else {
    window.alert('Thanks for playing!');
  }
};
