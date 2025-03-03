let index = 0;
// While loop - Runs until condition is false
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2; // Increments by 2
// }

let myArray = ['flash', "batman", "superman"];

let arr = 0;
// While loop iterating over an array
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`); // Prints each superhero name
    arr = arr + 1; // Moves to the next index
}

let score = 11;
// Do-while loop - Executes at least once, even if condition is false
do {
    console.log(`Score is ${score}`); // Prints the score before checking the condition
    score++; // Increments score
} while (score <= 10); // Condition is false initially, so runs only once
