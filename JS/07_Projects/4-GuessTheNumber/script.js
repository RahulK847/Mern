let randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resetButton = document.querySelector('#reset');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100.');
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (numGuess === 11) {
      displayMessage(`Game Over. The Number was ${randomNum}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  let difference = Math.abs(randomNum - guess);
  
  if (guess === randomNum) {
    displayMessage('You guessed it right! 🎉');
    endGame();
  } else if (guess > randomNum) {
    displayMessage(difference > 10 ? 'TOOO High! 📈' : 'High! 📈');
  } else {
    displayMessage(difference > 10 ? 'TOOO Low! 📉' : 'Low! 📉');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  resetButton.style.display = 'block';
  playGame = false;
}

resetButton.addEventListener('click', () => {
  randomNum = Math.floor(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = '10';
  lowOrHi.innerHTML = '';
  userInput.removeAttribute('disabled');
  resetButton.style.display = 'none';
  playGame = true;
});
