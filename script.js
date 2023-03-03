console.log("Zehahahaha");
let choiceNumber = Math.floor(Math.random() * (4 - 1)) + 1;
console.log(choiceNumber);
function getCompChoice(choiceNumber) {
  if (choiceNumber == 1) {
    console.log("Rock");
  } else if (choiceNumber == 2) {
    console.log("Paper");
  } else if (choiceNumber == 3) {
    console.log("Scissor");
  }
}

var playerChoice = prompt("Which do you choose, Rock, Paper or Scissors?");

getCompChoice(choiceNumber);
console.log(playerChoice);
