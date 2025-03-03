// Comparison operators
// console.log(2 > 1);  // true
// console.log(2 >= 1); // true
// console.log(2 < 1);  // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// JavaScript automatically converts strings to numbers when comparing
// console.log("2" > 1);  // true (string "2" is converted to number 2)
// console.log("02" > 1); // true (string "02" is converted to number 2)

// Null comparisons
console.log(null > 0);  // false (null is converted to 0 in comparisons)
console.log(null == 0); // false (null only equals null or undefined)
console.log(null >= 0); // true  (null is converted to 0 in >= and <= operations)

/*
    Explanation:
    - In `null > 0`, null is converted to 0, so 0 > 0 is false.
    - In `null >= 0`, null is converted to 0, so 0 >= 0 is true.
    - In `null == 0`, null is NOT converted to a number; it's only equal to null or undefined.
*/

// Undefined comparisons
console.log(undefined == 0); // false (undefined only equals null or itself)
console.log(undefined > 0);  // false (undefined cannot be converted to a valid number)
console.log(undefined < 0);  // false (undefined cannot be compared meaningfully)

// Strict equality (===) checks both value and type
console.log("2" === 2); // false (string "2" is not the same type as number 2)
