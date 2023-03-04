var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const choice = ["r", "p", "s"];

const smallUserWord = "user".fontsize(3).sub();
const smallcompWord = "comp".fontsize(3).sub();

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function userWin(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallcompWord}. You Win! 🔥`;

  console.log("Computer " + computerChoice);
  console.log("User  " + userChoice);

  console.log("User Wins");
  console.log(userScore);
}

function userLose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(
    computerChoice
  )}${smallcompWord}. You Lose!😒`;

  console.log("Computer " + computerChoice);
  console.log("User  " + userChoice);
  console.log("User Loses");
}

function userDraw(userChoice, computerChoice) {

    result_div.innerHTML = `${convertToWord(
        userChoice
      )}${smallUserWord} meets ${convertToWord(
        computerChoice
      )}${smallcompWord}. Its a draw! 🤔`;

  console.log("Computer " + computerChoice);
  console.log("User  " + userChoice);
  console.log("Its a draw");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "pr":
    case "sp":
    case "rs":
      userWin(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      userLose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      userDraw(userChoice, computerChoice);
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
