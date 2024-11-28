// script.js

let secretNumber = 42;
let attempts = 0;

// References to elements
const guessInput = document.getElementById("guessinput");
const guessButton = document.getElementById("guessbutton");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const restartButton = document.getElementById("restartbutton");

// Guess function
guessButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value, 10);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (userGuess === secretNumber) {
    feedback.textContent = "🎉 Correct! You guessed the number!";
    guessButton.disabled = true;
    restartButton.style.display = "inline-block";
  } else if (userGuess < secretNumber) {
    feedback.textContent = "Too Low!";
  } else {
    feedback.textContent = "Too High!";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
});

// Restart function
restartButton.addEventListener("click", () => {
  attempts = 0;
  feedback.textContent = "";
  attemptsDisplay.textContent = "";
  guessInput.value = "";
  guessButton.disabled = false;
  restartButton.style.display = "none";
});
