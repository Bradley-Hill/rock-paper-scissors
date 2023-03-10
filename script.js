// Written by Bradley Hill, 08/03/2023 for The Odin Project - Rock,Paper,Scissors exercise.

let score = 0;
let compChoice = null;

// Random selection for ComputerPlayer
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

// Player Selection for the game.
function getPlayerChoice() {
  var playerPrompt = prompt("Which do you choose, ROCK, PAPER or SCISSOR?");
  var playerChoice = playerPrompt.toUpperCase();
  return playerChoice;
}

// Outcomes and Outputs for a single round of the game.
function playOneRound(compChoice, playerChoice) {
  const resultDiv = document.querySelector(".results");

  if (compChoice == playerChoice) {
    resultDiv.textContent = "Bad luck!That's a draw!";
  } else if (compChoice == "ROCK" && playerChoice == "PAPER") {
    resultDiv.textContent = "Well done, Paper beats Rock!";
    score++;
  } else if (compChoice == "SCISSOR" && playerChoice == "PAPER") {
    resultDiv.textContent = "Unlucky, Paper loses to Scissor...";
  } else if (compChoice == "PAPER" && playerChoice == "ROCK") {
    resultDiv.textContent = "Unlucky, Rock loses to Paper...";
  } else if (compChoice == "SCISSOR" && playerChoice == "ROCK") {
    resultDiv.textContent = "Well done, Rock beats Scissors!";
    score++;
  } else if (compChoice == "PAPER" && playerChoice == "SCISSOR") {
    resultDiv.textContent = "Well done, Scissor beats Paper!";
    score++;
  } else if (compChoice == "ROCK" && playerChoice == "SCISSOR") {
    resultDiv.textContent = "Unlucky, Scissor loses to Rock, you lost...";
  }
  updateScore();
}

// 5 Rounds of the game with players final score.
// function playGame() {
//   for (let i = 0; i < 6; i++) {
//     getCompChoice();
//     let playerChoice = getPlayerChoice();
//     playOneRound(compChoice, playerChoice);
//   }
//   console.log("Congratulations, your final score is: " + score);
// }

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const computerChoice = getCompChoice();
    const playerChoice = button.value;
    playOneRound(computerChoice, playerChoice);
  });
});
const scoreElement = document.querySelector(".score");
scoreElement.textContent = `Score: ${score}`;

function updateScore() {
  scoreElement.textContent = `Score: ${score}`;
}
