const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

// Iterating over object keys
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

// Iterating over array indices
for (const key in programming) {
    // console.log(programming[key]);
}

// Map (stores key-value pairs with unique keys)
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// for-in does not work with Map (it is not iterable that way)
// for (const key in map) {
//     console.log(key); // This won't output anything
// }

// Use forEach or for-of for Maps
// map.forEach((value, key) => console.log(`${key} -> ${value}`));
