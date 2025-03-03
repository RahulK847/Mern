// Block scope vs Global scope

let a = 300; // Global scope

if (true) {
    let a = 10; // Block-scoped
    const b = 20; // Block-scoped
    // console.log("INNER:", a); // Output: 10
}

// console.log(a); // Output: 300 (global `a`)
// console.log(b); // Error: `b` is not defined outside the block
// console.log(c); // Error: `c` is not defined (uncommented `var c = 300` is missing)

// Nested functions & lexical scope
function one() {
    const username = "Rahul";

    function two() {
        const website = "GFG";
        console.log(username); // Accessible (lexical scope)
    }
    // console.log(website); // Error: `website` is not accessible outside `two()`
    
    two();
}

// one();

if (true) {
    const username = "Rahul";
    if (username === "Rahul") {
        const website = " GFG";
        // console.log(username + website); // Output: "Rahul GFG"
    }
    // console.log(website); // Error: `website` is not defined outside the inner block
}

// console.log(username); // Error: `username` is block-scoped

// ++++++++++++++++++ Hoisting ++++++++++++++++++

console.log(addOne(5)); // Output: 6 (Function declaration is hoisted)

function addOne(num) {
    return num + 1;
}

// addTwo(5); // Error: Cannot access `addTwo` before initialization

const addTwo = function (num) {
    return num + 2;
};

