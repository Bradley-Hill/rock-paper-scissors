console.log("Zehahahaha");
let choiceNumber = Math.floor(Math.random() * (4 - 1)) + 1;

function getCompChoice(choiceNumber) {
  if (choiceNumber == 1) {
    compChoice = "Rock";
    console.log("Rock");
  } else if (choiceNumber == 2) {
    compChoice = "Paper";
    console.log("Paper");
  } else if (choiceNumber == 3) {
    compChoice = "Scissors";
    console.log("Scissors");
  }
}
function oneRound(compChoice, playerChoice) {
  if (compChoice == playerChoice) {
    console.log("Bad luck!That's a draw!");
  }
}

var playerChoice = prompt("Which do you choose, Rock, Paper or Scissors?");

getCompChoice(choiceNumber);
console.log(playerChoice);
