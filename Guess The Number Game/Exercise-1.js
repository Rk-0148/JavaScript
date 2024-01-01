// GENERATING A RANDOM NUMBER IN JS CAN BE DONE USING "Math.random() *X"
//method where x can be 1,10,11,100,101,etc

const prompt = require("prompt-sync")();

let OriginalNumber = Math.floor(Math.random() * 101);
let guess;
let noOfGuesses = 0;
do {
  guess = prompt("Guess the number : "); // returns random number between 1 to 100
  if (guess < OriginalNumber)
    console.log("your guess is smaller than target number");
  else if (guess > OriginalNumber)
    console.log("your guess is greater than target number");
  else console.log("your guess is correct congratulations");
  noOfGuesses++;
} while (guess != OriginalNumber);
console.log("number of guesses required : ", noOfGuesses);
