// script.js

secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0

// References to elements
const guessInput = document.getElementById('guessinput')
const guessButton = document.getElementById('guessbutton')
const feedback = document.getElementById('feedback')
const attemptsDisplay = document.getElementById('attempts')
const restartButton = document.getElementById('restartbutton')

// Guess function
guessButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value, 10)
  attempts++

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.'
    feedback.style.color = 'red'
    return
  }

  if (userGuess === secretNumber) {
    feedback.textContent = '🎉 Correct! You guessed the number!'
    feedback.style.color = 'green'
    guessButton.disabled = true
    restartButton.style.display = 'inline-block'
  } else if (userGuess < secretNumber) {

    feedback.textContent =  '😜 Too Low!'
    feedback.style.color = 'blue'
  } else {
    feedback.textContent = '😝 Too High!'
    feedback.style.color = 'orange'
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`
  guessInput.value = ''
  if (attempts === 10) {
    feedback.textContent = '😢 Game over'
    feedback.style.color = 'green'
    guessButton.disabled = true
    restartButton.style.display = 'inline-block'
  }
    
})

// Restart function
restartButton.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0
  feedback.textContent = ''
  attemptsDisplay.textContent = ''
  guessInput.value = ''
  guessButton.disabled = false
  restartButton.style.display = 'none'
})
