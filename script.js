// Initialize scores
let userScore = 0;
let computerScore = 0;
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let computerChoice;
let userChoice2;

// Display initial scores
updateScore();

function play(userChoice) {
  
  computerChoice = choices[Math.floor(Math.random() * 5)];
  userChoice2 = userChoice;

  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (userChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (userChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
  ) {
    result = "You win!";
    userScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  // Display result and update scores
  document.getElementById('result').innerText = "You chose " + userChoice + ", computer chose " + computerChoice + ". " + result;
  updateScore();
  // highlightRules(userChoice2, computerChoice);
}

function updateScore() {
  document.getElementById('score').innerText = "Your Score: " + userScore + " - Computer Score: " + computerScore;
}

//Highlight the rules -- Coming Up
function highlightRules(...args){

  if(userChoice2 == 'scissors' && computerChoice == 'paper'){
  }

}
