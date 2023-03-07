function getCompChoice() {
  let choiceNumber = Math.floor(Math.random() * (4 - 1)) + 1;
  if (choiceNumber == 1) {
    compChoice = "ROCK";
  } else if (choiceNumber == 2) {
    compChoice = "PAPER";
  } else if (choiceNumber == 3) {
    compChoice = "SCISSOR";
  }
  return compChoice;
}

function getPlayerChoice() {
  var playerPrompt = prompt("Which do you choose, ROCK, PAPER or SCISSOR?");
  var playerChoice = playerPrompt.toUpperCase();
  return playerChoice;
}

function oneRound(compChoice, playerChoice) {
  if (compChoice == playerChoice) {
    console.log("Bad luck!That's a draw!");
  } else if (compChoice == "ROCK" && playerChoice == "PAPER") {
    console.log("Well done, Paper beats Rock!");
  } else if (compChoice == "SCISSOR" && playerChoice == "PAPER") {
    console.log("Unlucky, Paper loses to Scissor!");
  } else if (compChoice == "PAPER" && playerChoice == "ROCK") {
    console.log("Unlucky, Rock loses to Paper...");
  } else if (compChoice == "SCISSOR" && playerChoice == "ROCK") {
    console.log("Well done, Rock beats Scissors!");
  } else if (compChoice == "PAPER" && playerChoice == "SCISSOR") {
    console.log("Well done, Scissor beats Paper!");
  } else if (compChoice == "ROCK" && playerChoice == "SCISSOR") {
    console.log("Unlucky, Scissor loses to Rock, you lose!");
  }
}

var compChoice = getCompChoice();
var playerChoice = getPlayerChoice();
oneRound(compChoice, playerChoice);
console.log(oneRound(compChoice, playerChoice));
