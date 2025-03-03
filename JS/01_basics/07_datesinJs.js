// Dates in JavaScript

let myDate = new Date(); // Current date & time

console.log(myDate.toString());       // Full date-time
console.log(myDate.toDateString());   // Readable date
console.log(myDate.toLocaleString()); // Localized format
console.log(typeof myDate);           // "object" (Date is an object)

// Creating dates
// let myCreatedDate = new Date(2023, 0, 23);      // Jan 23, 2023 (0-based months)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // With time (5:03 AM)
// let myCreatedDate = new Date("2023-01-14");    // ISO format
let myCreatedDate = new Date("01-14-2023"); // MM-DD-YYYY (US format)

console.log(myCreatedDate.toLocaleString()); // "1/14/2023, 12:00:00 AM"

// Timestamps (ms since Jan 1, 1970)
let myTimeStamp = Date.now(); 

// console.log(myTimeStamp);               // Current timestamp
// console.log(myCreatedDate.getTime());   // Timestamp for a date
// console.log(Math.floor(Date.now() / 1000)); // Convert to seconds

// Extracting date values
let newDate = new Date();
console.log(newDate);          
console.log(newDate.getMonth() + 1); // Current month (1-based)
console.log(newDate.getDay());       // Day of the week (0 = Sun, 6 = Sat)

// Formatting with toLocaleString()
console.log(newDate.toLocaleString('default', { weekday: "long" })); // Full weekday name
