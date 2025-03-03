// Function without parameters
function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

// sayMyName();

// Function with parameters & return value
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result:", result);

// Default parameter in function
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Rahul"));
// console.log(loginUserMessage());

// Rest parameters (collects extra arguments as an array)
function calculateCartPrice(val1, val2, ...prices) {
    return prices;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Rahul",
    price: 199
};

// Function handling an object
function handleObject(obj) {
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

// handleObject(user);
handleObject({ username: "sam", price: 399 });

const myNewArray = [200, 400, 100, 600];

// Function returning the second value of an array
function returnSecondValue(arr) {
    return arr[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
