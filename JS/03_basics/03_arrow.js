const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this); // `this` refers to the `user` object
    }
};

// user.welcomeMessage(); 
// user.username = "Sam";
// user.welcomeMessage(); 

// console.log(this); // In global scope, `this` refers to the global object (window in browsers, empty object in Node.js)

// Regular function (not bound to object)
function chai() {
    let username = "Rahul";
    console.log(this.username); // `this` is undefined in a function (strict mode)
}

// chai();

// Arrow function (does not bind `this`)
const chai = () => {
    let username = "Rahul";
    console.log(this); // `this` refers to the surrounding lexical scope (global/window)
};

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Arrow function syntax variations
// const addTwo = (num1, num2) => num1 + num2; // Implicit return

// const addTwo = (num1, num2) => ({ username: "Rahul" }); // Returning an object (needs parentheses)

console.log(addTwo(3, 4)); // Output: { username: "Rahul" }

// Array method example
const myArray = [2, 5, 3, 7, 8];
myArray.forEach((num) => console.log(num)); // Iterates and prints each element
