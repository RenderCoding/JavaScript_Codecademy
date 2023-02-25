// STEP 1
const getUserChoice = (userInput) => {
    // STEP 2
    userInput = userInput.toLowerCase();
    // STEP 3
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      return `Error! The ${userInput} is invaild option`;
    }
  };
  // STEP 4
  //console.log(getUserChoice('paper'));
  // STEP 5
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  // STEP 6
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // STEP 7
  const determineWinner = (userChoice, computerChoice) => {
    // STEP 8 // STEP 9 // STEP 10
    if (userChoice === computerChoice) {
      return console.log("The game is a tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      userChoice === "bomb"
    ) {
      return console.log("You won! :)");
    } else {
      return console.log("You lost! :(");
    }
  };
  // STEP 11
  // console.log(determineWinner('paper', 'scissors'));
  // console.log(determineWinner('paper', 'paper'));
  // console.log(determineWinner('paper', 'rock'));
  // STEP 12
  const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    // STEP 13
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  // STEP 14
  