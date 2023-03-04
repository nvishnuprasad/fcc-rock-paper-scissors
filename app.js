const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computerScore-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

main();

function main() {
  rock_div.addEventListener("click", function () {
    console.log("You clicked on rock");
  });

  paper_div.addEventListener("click", function () {
    console.log("You clicked on paper");
  });

  scissors_div.addEventListener("click", function () {
    console.log("You clicked on scissor");
  });
}
