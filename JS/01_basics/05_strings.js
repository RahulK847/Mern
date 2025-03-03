const name = "Rahul";
const repoCount = 50;

// Template literals (modern & recommended way)
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

// Creating a string object (not commonly used)
const gameName = new String("rahul-rk-com");

// Accessing characters using index
console.log(gameName[0]); // Output: 'r'

// Checking the prototype of a string
console.log(gameName.__proto__);

// String properties and methods
console.log(gameName.length); // Output: 13
console.log(gameName.toUpperCase()); // Output: "RAHUL-RK-COM"

// Character at a specific index
console.log(gameName.charAt(2)); // Output: 'h'

// Finding the index of a character
console.log(gameName.indexOf('r')); // Output: 0
console.log(gameName.indexOf('t')); // Output: -1

// Extracting substring
console.log(gameName.substring(0, 4)); // Output: "rahu"

// Extracting substring using slice
console.log(gameName.slice(-8, -4)); // Output: "rk"

// Trimming whitespace
const newStringOne = "   rahul    ";
console.log(newStringOne.trim()); // Output: "rahul"

// Replacing parts of a string
const url = "https://rahul.com/rahul%20shah";
console.log(url.replace("%20", "-")); // Output: "https://rahul.com/rahul-shah"

// Checking if a substring exists
console.log(url.includes("sundar")); // Output: false

// Splitting a string into an array based on a delimiter
console.log(gameName.split("-")); // Output: ["rahul", "rk", "com"]
