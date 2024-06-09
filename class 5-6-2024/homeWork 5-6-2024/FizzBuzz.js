/*write number 1 to 100, those which are divisible by 3 should print Fizz, those which are divisible by 5 should print Buzz, those which are divisible by both 3 and 5 should print FizzBuzz */
function FizBuzz(number) {
    for (var i = 0; i <= number; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}
FizBuzz(100);
var y = prompt("Enter your name?");
