// Simple for loop
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        // console.log("5 is best number");
    }
    // console.log(i);
}

// Nested loops (Multiplication table)
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

let myArray = ["flash", "batman", "superman"];
// Looping through an array
for (let index = 0; index < myArray.length; index++) {
    // console.log(myArray[index]);
}

// ***** break & continue ***** 

// Break: Stops loop when condition met
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        break; // Exits loop
    }
    console.log(`Value of i is ${index}`);
}

// Continue: Skips iteration when condition met
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue; // Skips this iteration
    }
    console.log(`Value of i is ${index}`);
}
