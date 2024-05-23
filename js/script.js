const guessLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordProgess = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Display our symbols as placeholders for the chosen word's letters

function addPlaceholderLetter(word) {
  wordProgess.innerText = '● '.repeat(word.length);
}

addPlaceholderLetter(word);


guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = "";

  let inputLetter = guessInput.value;
  let goodGuess = validateInput(inputLetter);


  if (goodGuess) {
    makeGuess(inputLetter)
  }
  inputLetter.value = "";
});


function validateInput(input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (!input) {
    message.innerText = '"please enter a letter."';
  } else if (input.length !== 1) {
    message.innerText = '"Please only enter one letter."'
  } else if (!input.match(acceptedLetter)) {
    message.innerText = '"please only enter a letter from a to z, no number or symbol."'
  } else {
    return input
  }
};


function makeGuess(letter) {
  letter = letter.toUpperCase();
  if (guessedLetters.includes(letter)) {
    message.innerText = "You have entered the same letter";
  } else {
    guessedLetters.push(letter);
    console.log(guessedLetters);
  }
}




