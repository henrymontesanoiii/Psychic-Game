// alphabet array
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// wins count
var wins = 0;
// losses count
var losses = 0;
// Guesses left 
var guessesLeft = 10;
// User's Guesses
var guessesSoFar = [];

// Grab reference HTML elements I'll be writing to
var gameHTML = document.getElementById("game");

// reset game function
function resetGame() {
  // reset game variables
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log("new guess:"+computerGuess);
  guessesLeft = 9;
  guessesSoFar = [];
}

// randomly pick a letter for the computer
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// Here we take the guesses the user has tried -- then display it as letters separated by commas. 
document.onkeydown = function (letter) {
    
  var keyPress;

  if (typeof event !== 'undefined') {
    keyPress = event.keyCode;
  }
  else if (letter) {
    keyPress = letter.which;
  }

  guessesSoFar.push(String.fromCharCode(keyPress));

  
};

// Whenever a key is pressed, alert "pressed a button".
document.onkeyup = function (event) {

  console.log(event);

  // Read user's guess
  var userGuess = event.key;
  console.log(userGuess);



  // compare user's guess to the computer's guess and run with win/loss logic
  if (userGuess === computerGuess) {
    // you guess correctly
    wins++;
    resetGame();
  
    
  } else if (userGuess !== computerGuess) {
    // you guess incorrectly
    guessesLeft--;
  }

  if (guessesLeft === 0) {
    resetGame();
    losses++;
    
    
  }

  // write result to the HTML 
  gameHTML.innerHTML = 
    "<h3>Wins: " 
    + wins + "</h3><h3>Losses: " 
    + losses + "</h3><h3>Guesses Left: "
    + guessesLeft + "</h3><h3>Guesses So Far: "
    + guessesSoFar;


}