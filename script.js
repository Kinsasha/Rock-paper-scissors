function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);
    if (guess === 0) {
       return "Rock";
    }  else if (guess === 1) {
       return "Paper";
    } else {
       return "Scissors";
    }
   };
   //console.log(getComputerChoice());

   function getHumanChoice() {
    let choice = prompt('Input your choice', '');
    if (choice.toLowerCase() === 'rock') {
       return 'rock';
    } else if (choice.toLowerCase() === 'paper')  {
       return 'paper';
    } else if (choice.toLowerCase() === 'scissors')  {
       return 'scissors';
    } else {
       return 'we only do rock or paper or scissors here'
    }
   }
   //console.log(getHumanChoice())



   function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for ( let i = 0; i < 5; i++) {
       function playRound (humanChoice, computerChoice) {
       if (humanChoice === computerChoice) {
          return 'tie';
       } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
          return 'rock crushes scissors';
          humanScore++;
       } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
          return 'scissors cuts paper';
          computerScore++;
       } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
          return 'rock crushes scissors';
          computerScore++;
       } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
          return 'scissors cuts paper';
          humanScore++;
       } else if (humanChoice === 'rock' && computerChoice === 'paper') {
          return 'paper covers rock';
          computerScore++;
       } else if (humanChoice === 'paper' && computerChoice === 'rock') {
          return 'paper covers rock';
          humanScore++;
       } 
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

   playRound(humanSelection, computerSelection);

    }
   }

   playGame()
