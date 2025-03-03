// ********* Object Creation *********

// Singleton: const user = Object.create(null);

const mySym = Symbol("key1"); // Unique property key

const JsUser = {
    name: "Rahul",
    "full name": "Rahul Kumar Shah", // Must use bracket notation
    [mySym]: "mykey1", // Symbol property
    age: 18,
    location: "Patna",
    email: "Rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// ********* Accessing Properties *********

console.log(JsUser.email);  // Dot notation
console.log(JsUser["email"]); // Bracket notation
console.log(JsUser["full name"]); // Required for spaced properties
console.log(JsUser[mySym]);  // Symbol property

// ********* Modifying Properties *********

JsUser.email = "Rahul@chatgpt.com";
// Object.freeze(JsUser); // Prevents modifications
JsUser.email = "Rahul@microsoft.com"; // Won't change if frozen
console.log(JsUser.email);

// ********* Adding Methods *********

JsUser.greeting = function () {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling methods
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());
