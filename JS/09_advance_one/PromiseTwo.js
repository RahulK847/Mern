// 📌 Before Promises: Callbacks led to "Callback Hell" (nested, hard-to-read code).
// Promises solve this by making asynchronous code more structured and readable.


// 🔹 1. Chaining Promises (Step-by-Step Execution)
new Promise((resolve) => {
    setTimeout(() => resolve("✅ Step 1: Data Fetched"), 1000);
})
.then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => resolve("✅ Step 2: Data Processed"), 1000);
    });
})
.then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => resolve("✅ Step 3: Data Saved"), 1000);
    });
})
.then((message) => console.log(message))
.catch((error) => console.log("❌ Error:", error));


// 🔹 2. Running Multiple Promises in Parallel (Promise.all)
// Executes all promises simultaneously. If one fails, the entire Promise.all() fails.
const task1 = new Promise(resolve => setTimeout(() => resolve("🏃 Task 1 Done"), 1000));
const task2 = new Promise(resolve => setTimeout(() => resolve("🏃 Task 2 Done"), 2000));
const task3 = new Promise(resolve => setTimeout(() => resolve("🏃 Task 3 Done"), 1500));

Promise.all([task1, task2, task3])
    .then(results => console.log("✅ All Tasks Done:", results))
    .catch(error => console.log("❌ Error:", error));


// 🔹 3. Handling Partial Failures (Promise.allSettled)
// Even if one task fails, others continue, and we get their status (fulfilled/rejected).
const job1 = new Promise(resolve => setTimeout(() => resolve("🏃 Job 1 Done"), 1000));
const job2 = new Promise((_, reject) => setTimeout(() => reject("❌ Job 2 Failed"), 2000));
const job3 = new Promise(resolve => setTimeout(() => resolve("🏃 Job 3 Done"), 1500));

Promise.allSettled([job1, job2, job3])
    .then(results => console.log("📌 Promise.allSettled Results:", results));


// 🔹 4. Using async/await for Cleaner Code
// Instead of .then() chaining, async/await makes code more readable.
function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("✅ Data Received"), 2000));
}

async function processData() {
    console.log("⏳ Fetching...");
    let data = await fetchData();
    console.log(data);
    console.log("✅ Processing Complete!");
}

processData();


// 🔹 5. Handling Errors in async/await (try...catch)
// Using try...catch to handle rejected promises gracefully.
function fetchDataWithError() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("❌ Data Fetch Failed"), 2000);
    });
}

async function processWithErrorHandling() {
    try {
        console.log("⏳ Fetching...");
        let data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.log("⚠️ Error:", error);
    }
}

processWithErrorHandling();

// 📌 Expected Output:
// ✅ Step 1: Data Fetched
// ✅ Step 2: Data Processed
// ✅ Step 3: Data Saved
// ✅ All Tasks Done: [ '🏃 Task 1 Done', '🏃 Task 3 Done', '🏃 Task 2 Done' ]
// 📌 Promise.allSettled Results: [
//   { status: 'fulfilled', value: '🏃 Job 1 Done' },
//   { status: 'rejected', reason: '❌ Job 2 Failed' },
//   { status: 'fulfilled', value: '🏃 Job 3 Done' }
// ]
// ⏳ Fetching...
// ✅ Data Received
// ✅ Processing Complete!
// ⏳ Fetching...
// ⚠️ Error: ❌ Data Fetch Failed
