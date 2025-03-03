const score = 400;

// Number object (rarely used)
const balance = new Number(100); 
console.log(balance); // Output: [Number: 100]

// Convert to string & check length
// console.log(balance.toString().length); // 3

// Formatting
// console.log(balance.toFixed(1)); // "100.0"

// Precision (rounds to significant figures)
const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // "123.9"

// Large number formatting (Indian style)
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"

// +++++++++++++ Math Operations +++++++++++++

console.log(Math); // Math object

// Absolute value
console.log(Math.abs(-4)); // 4

// Rounding
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9)); // 4

// Min & Max
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

// Random numbers
console.log(Math.random()); // 0-1
console.log(Math.floor(Math.random() * 10) + 1); // 1-10

// Random in range (min-max)
const min = 10, max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// 10-20
