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
  highlightRules(userChoice2, computerChoice);
}

function updateScore() {
  document.getElementById('score').innerText = "Your Score: " + userScore + " - Computer Score: " + computerScore;
}

//Highlight the rules -- Coming Up
function highlightRules(...args){

  if((userChoice2 == 'scissors' && computerChoice == 'paper') || (userChoice2 == 'paper' && computerChoice == 'scissors')){
    document.getElementById("rule1").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule1").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'paper' && computerChoice == 'rock') || (userChoice2 == 'rock' && computerChoice == 'paper')){
    document.getElementById("rule2").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule2").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'rock' && computerChoice == 'lizard') || (userChoice2 == 'lizard' && computerChoice == 'rock')){
    document.getElementById("rule3").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule3").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'lizard' && computerChoice == 'spock') || (userChoice2 == 'spock' && computerChoice == 'lizard')){
    document.getElementById("rule4").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule4").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'spock' && computerChoice == 'scissors') || (userChoice2 == 'scissors' && computerChoice == 'spock')){
    document.getElementById("rule5").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule5").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'scissors' && computerChoice == 'lizard') || (userChoice2 == 'lizard' && computerChoice == 'scissors')){
    document.getElementById("rule6").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule6").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'lizard' && computerChoice == 'paper') || (userChoice2 == 'paper' && computerChoice == 'lizard')){
    document.getElementById("rule7").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule7").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'paper' && computerChoice == 'spock') || (userChoice2 == 'spock' && computerChoice == 'paper')){
    document.getElementById("rule8").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule8").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'spock' && computerChoice == 'rock') || (userChoice2 == 'rock' && computerChoice == 'spock')){
    document.getElementById("rule9").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule9").style.backgroundColor = "beige";
    }, 750);
  }
  else if((userChoice2 == 'rock' && computerChoice == 'scissors') || (userChoice2 == 'scissors' && computerChoice == 'rock')){
    document.getElementById("rule5").style.backgroundColor = "lightgrey";
    setTimeout(function() {
      document.getElementById("rule5").style.backgroundColor = "beige";
    }, 750);
  }
  else{
    document.getElementById("rule1").style.backgroundColor = "beige";
    document.getElementById("rule2").style.backgroundColor = "beige";
    document.getElementById("rule3").style.backgroundColor = "beige";
    document.getElementById("rule4").style.backgroundColor = "beige";
    document.getElementById("rule5").style.backgroundColor = "beige";
    document.getElementById("rule6").style.backgroundColor = "beige";
    document.getElementById("rule7").style.backgroundColor = "beige";
    document.getElementById("rule8").style.backgroundColor = "beige";
  }
}
