// script.js
let OriginalNumber = Math.floor(Math.random() * 101);
let guess;
let noOfGuesses = 0;
let maxGuesses = 10; // Set the maximum number of guesses
let previousGuesses = [];

function checkGuess() {
  if (noOfGuesses >= maxGuesses) {
    document.getElementById("result-message").innerText =
      "You lost the game. The correct number was " + OriginalNumber;
    disableInputAndButton();
    return;
  }

  guess = parseInt(document.getElementById("user-input").value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  if (guess < OriginalNumber) {
    document.getElementById("result-message").innerText =
      "Your guess is smaller than the target number.";
  } else if (guess > OriginalNumber) {
    document.getElementById("result-message").innerText =
      "Your guess is greater than the target number.";
  } else {
    document.getElementById("result-message").innerText =
      "Your guess is correct! Congratulations!";
    disableInputAndButton();
  }

  previousGuesses.push(guess);
  updatePreviousGuesses();

  noOfGuesses++;
  document.getElementById("guess-count").innerText =
    "Number of guesses: " + noOfGuesses;
}

function updatePreviousGuesses() {
  const list = document.getElementById("previous-guesses");
  list.innerHTML = "<strong>Previous Guesses:</strong>";
  previousGuesses.forEach((previousGuess) => {
    const listItem = document.createElement("li");
    listItem.textContent = previousGuess;
    list.appendChild(listItem);
  });
}

function disableInputAndButton() {
  document.getElementById("user-input").setAttribute("disabled", "disabled");
  document.querySelector("button").setAttribute("disabled", "disabled");
}