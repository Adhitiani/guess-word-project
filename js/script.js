const guessLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordProgess = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

function addPlaceholderLetter(word) {
  wordProgess.innerText = '● '.repeat(word.length);
}

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  let inputLetter = guessInput.value;
  console.log(inputLetter)

})

addPlaceholderLetter(word)