let score = "Rahul";

// Type conversion: String to Number
let valueInNumber = Number(score);
// console.log(valueInNumber); // NaN (Not a Number)

/*
    Type Conversion:
    - "33" → 33
    - "33abc" → NaN
    - true → 1, false → 0
*/

// Boolean conversion
let isLoggedIn = "Rahul"; // Truthy (non-empty string)
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

/*
    Boolean Conversion:
    - 1 → true, 0 → false
    - "" → false
    - "rahul" → true
*/

// String conversion
let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber); // 'string'

// ********** Operations **********

let value = 3;
let negValue = -value; // Negation
// console.log(negValue); // -3

// Arithmetic
// console.log(2 + 2); // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 ** 3); // 8 (exponentiation)
// console.log(2 / 3); // 0.666...
// console.log(2 % 3); // 2 (remainder)

// String concatenation
let str1 = "hello", str2 = " Rahul", str3 = str1 + str2;
// console.log(str3); // "hello Rahul"

// Type coercion
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// Operator precedence
// console.log((3 + 4) * 5 % 3); // 2

// Unary operators
// console.log(+true); // 1
// console.log(+""); // 0

// Multiple assignment
let num1, num2, num3
