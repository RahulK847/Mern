// ********* Primitive Data Types *********

// 7 primitive types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;       // Number
const scoreValue = 100.3; // Number (float)

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null (intentional empty value)
let userEmail;            // Undefined (not assigned)

// Symbol - Unique identifier
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false (Symbols are unique)

// BigInt - For very large numbers
// const bigNumber = 3456543576654356754n;

// ********* Reference (Non-Primitive) Data Types *********

// Array - List of values
const heros = ["shaktiman", "naagraj", "doga"];

// Object - Key-value pairs
let myObj = { name: "Rahul", age: 22 };

// Function - Executable block
const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof anotherId); // 'symbol'

// ECMAScript Docs: https://262.ecma-international.org/5.1/#sec-11.4.3
