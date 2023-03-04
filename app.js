const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computerScore-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const choice = ["r", "p", "s"];

function userWin() {
  console.log("User Wins");
}

function userLose() {
  console.log("User Loses");
}

function userDraw() {
  console.log("Its a draw");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("Computer " + computerChoice);
  console.log("User  " + userChoice);

  switch (userChoice + computerChoice) {
    case "pr":
    case "sp":
    case "rs":
      userWin();
      break;
    case "rp":
    case "ps":
    case "sr":
      userLose();
      break;
    case "rr":
    case "pp":
    case "ss":
      userDraw();
      break;
  }
}

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

getComputerChoice();

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
