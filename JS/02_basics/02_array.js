// ********* Merging Arrays *********

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ❌ Incorrect: push adds as a single element
// marvel_heros.push(dc_heros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); // "flash" (nested array)

// ✅ Correct: Using .concat()
const allHeros = marvel_heros.concat(dc_heros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
console.log(allHeros); 

// ✅ Best: Using spread operator (...)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// ********* Flattening Nested Arrays *********

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// ✅ Flatten array (removes nesting)
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); 

// ********* Array Utility Methods *********

console.log(Array.isArray("Rahul")); // false (checks if it's an array)
console.log(Array.from("Rahul")); // ['R', 'a', 'h', 'u', 'l'] (string → array)
console.log(Array.from({ name: "Rahul" })); // [] (Objects can't be directly converted)

// ********* Creating Arrays from Values *********

let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
