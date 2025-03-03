"use strict"; // Enforces modern JavaScript rules and prevents accidental errors. (treat all JS code as newer version)

// alert(3 + 3); // Works in browsers, not in Node.js.

console.log(3 
    +
     3) // This works, but it's better to keep code readability high by writing it in a single line.
console.log("Rahul"); // Logs "Rahul" to the console.

// Variable declarations
let name = "rahul";  // String
let age = 18;        // Number
let isLoggedIn = false; // Boolean
let state; // Undefined (not assigned a value)

/*
    JavaScript Data Types:
    - number  → Up to 2^53
    - bigint  → Large integers
    - string  → Text
    - boolean → true/false
    - null    → Represents "nothing"
    - undefined → Declared but unassigned
    - symbol  → Unique values (for object properties)
    - object  → Key-value pairs
*/

// Type checking
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object' (a known JS quirk)
