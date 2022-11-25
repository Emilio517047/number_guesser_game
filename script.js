let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, target) {
  if (Math.abs(human)-Math.abs(target) < Math.abs(computer)-Math.abs(target)) {
    return true;
  } else if (Math.abs(human)-Math.abs(target) > Math.abs(computer)-Math.abs(target)) {
    return false;
  } else {
    return true;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  }
  else {
    computerScore += 1;
  }
}

function advanceRound() {
  return currentRoundNumber += 1;
}
