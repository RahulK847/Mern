// for of

// ["", "", ""]
// [{}, {}, {}]

// Using for...of loop to iterate over an array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);  // Prints each number in the array
}

// Iterating over a string using for...of
const greetings = "Hello world!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);  // Prints each character
}

// Maps - A collection of key-value pairs
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Duplicate key, will not be added

// console.log(map); // Prints the entire Map

// Iterating over a Map using for...of
for (const [key, value] of map) {
    // console.log(key, ':-', value); // Prints each key-value pair
}

// Objects are not directly iterable using for...of
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// This will throw an error as objects are not iterable with for...of
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
