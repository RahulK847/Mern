const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach with a function
// coding.forEach(function (val) {
//     console.log(val);
// });

// Arrow function in forEach
// coding.forEach((item) => console.log(item));

// Function reference in forEach
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// Accessing value, index, and the array in forEach
// coding.forEach((item, index, arr) => console.log(item, index, arr));

// Array of objects
const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: "java" },
    { languageName: "python", languageFileName: "py" },
];

// Extracting language names
myCoding.forEach((item) => console.log(item.languageName));
