// ********* Arrays in JavaScript *********

const myArr = [0, 1, 2, 3, 4, 5]; // Standard array
const myHeors = ["shaktiman", "naagraj"]; // String array
const myArr2 = new Array(1, 2, 3, 4); // Using `new Array`

// ********* Array Methods *********

// Adding/removing elements
// myArr.push(6); // Add to end
// myArr.pop(); // Remove last
// myArr.unshift(9); // Add to start
// myArr.shift(); // Remove first

// Checking elements
// console.log(myArr.includes(9)); // true/false
// console.log(myArr.indexOf(3)); // Index of 3 (-1 if not found)

// Convert to string
// const newArr = myArr.join(); // "0,1,2,3,4,5"

// ********* Slice vs Splice *********

console.log("A ", myArr);

// Slice (Returns a portion, original remains unchanged)
const myn1 = myArr.slice(1, 3); // [1, 2]
console.log(myn1);
console.log("B ", myArr);

// Splice (Removes & modifies original)
const myn2 = myArr.splice(1, 3); // Removes [1, 2, 3]
console.log("C ", myArr);
console.log(myn2);
