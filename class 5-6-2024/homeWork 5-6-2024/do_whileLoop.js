var prompt1 = require("prompt-sync")({ sigint: true });
var prompt2 = require("prompt-sync")({ sigint: true });
function guessNumber() {
    var correctAnswer = Math.floor(Math.random() * 10) + 1;
    console.log(correctAnswer);
    var playAgin = "";
    var userGuess;
    do {
        userGuess = parseInt(prompt1("Enter a number between 1 and 10  "));
        if (userGuess === correctAnswer) {
            console.log("Congratulation! You Won....");
            playAgin = prompt2("Do you want to play again? (y/n)").toLowerCase();
        }
        else {
            console.log("Incorrect number, try again.... ");
        }
    } while (playAgin === "y");
}
guessNumber();
