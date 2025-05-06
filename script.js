//creating computer choice
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//importing the icons
const iconOne = document.querySelector("#rock");
const iconTwo = document.querySelector("#paper");
const iconThree = document.querySelector("#scissors");

iconOne.addEventListener("click", forRock);
iconTwo.addEventListener("click", forPaper);
iconThree.addEventListener("click", forScissors);

function forRock() {
  playgame("rock");
}
function forPaper() {
  playgame("paper");
}
function forScissors() {
  playgame("scissors");
}

const winText = document.querySelector(".win-text");
const loseText = document.querySelector(".lose-text");
const tieText = document.querySelector(".tie-text");

let winScore = 0;
let loseScore = 0;
let tieScore = 0;

function playgame(humanChoice) {
  let humanSelection = humanChoice;
  const compVal = getComputerChoice();

  if (humanSelection === compVal) {
    tieScore;
    winText.textContent = "";
    loseText.textContent = "";
    tieText.textContent = "";
    tieText.textContent = "Tie";
  } else if (
    (humanSelection === "rock" && compVal === "scissors") ||
    (humanSelection === "scissors" && compVal === "paper") ||
    (humanSelection === "paper" && compVal === "rock")
  ) {
    winText.textContent = "";
    loseText.textContent = "";
    tieText.textContent = "";
    winText.textContent = `You win, ${humanSelection} beats ${compVal}`;

    winScore += 1;
  } else if (
    (humanSelection === "paper" && compVal === "scissors") ||
    (humanSelection === "scissors" && compVal === "rock") ||
    (humanSelection === "rock" && compVal === "paper")
  ) {
    winText.textContent = "";
    loseText.textContent = "";
    tieText.textContent = "";
    loseText.textContent = `You lose, ${compVal} beats ${humanSelection}`;

    loseScore += 1;
  }

  const compScoreDisplay = document.querySelector(".comp-score");
  const humanScoreDisplay = document.querySelector(".human-score");

  humanScoreDisplay.textContent = winScore;
  compScoreDisplay.textContent = loseScore;

  winnerCheck();
}

const finalWinner = document.querySelector(".final-winner");
const roundWinner = document.querySelector(".round-winner-text");

function winnerCheck() {
  if (winScore === 5) {
    finalWinner.textContent = "You won";
    roundWinner.textContent =
      "End of this round. Click on the restart button to start again.";
    endgame();
  } else if (loseScore === 5) {
    finalWinner.textContent = "You lost";
    roundWinner.textContent =
      "End of this round. Click on the restart button to start again.";
    endgame();
  }
}

function endgame() {
  iconOne.removeEventListener("click", forRock);

  iconTwo.removeEventListener("click", forPaper);

  iconThree.removeEventListener("click", forScissors);
}
