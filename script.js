//Alert when window loads
window.alert('Welcome to Rock, Paper, Scissors!');

//global variables
const choices = ['r', 'p', 's'];
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
const tracking = {
  wins: 0,
  losses: 0,
  ties: 0,
  rock: 0,
  paper: 0,
  scissors: 0
};


function game() {
  //get player's choice
  function getPlayerChoice() {
    //alert so player can input their choice
    playerChoice = window.prompt('Choose your weapon: R, P, or S!');
    //failsafe for invalid choices 
    if (!choices.includes(playerChoice)) {
      window.prompt('You can only choose from R, P, or S...try again...');
    };

    //tracks choices made by player
    function tracking() {
      if (playerChoice === 'r') {
        tracking.rock++;
      } else if (playerChoice === 'p') {
        tracking.paper++;
      } else {
        tracking.scissors++;
      }
      return;
    };
    tracking();
  };
  getPlayerChoice();

  //computer choice - random
  const compRandom = Math.floor(Math.random() * choices.length);
  computerChoice = choices[compRandom];
  window.alert(`Computer chose: ${computerChoice}!`);


  //figure out the winner
  function determineWinner() {
    //tie
    if (playerChoice === computerChoice) {
      window.alert(`It's a tie!`);
      tracking.ties++;
      //player wins
    } else if (
      (playerChoice === 'r' && computerChoice === 's') ||
      (playerChoice === 'p' && computerChoice === 'r') ||
      (playerChoice === 's' && computerChoice === 'p')
    ) {
      window.alert('You win!');
      tracking.wins++;
      //computer wins
    } else {
      window.alert(`Computer Wins!`)
      tracking.losses++;
    }
  };
  determineWinner();

  //play again?
  function playagain() {
    if (window.confirm(`Would you like to play again?`)) {
      game();
    } else {
      window.alert('Thanks for playing!');
    }
  };
  playagain();
};
game();
