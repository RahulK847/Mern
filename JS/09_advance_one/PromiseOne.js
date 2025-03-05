// Promise 1: Basic resolve example
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log('Promise Consumed');
});

// Promise 2: Another async task
new Promise((yes, no) => {
    setTimeout(() => {
        console.log('Async task 2');
        yes();
    }, 1000);
}).then(() => console.log("Async 2 resolved"));

// Promise 3: Resolving with an object
const promiseThree = new Promise((yo, no) => {
    setTimeout(() => {
        yo({ username: "coffeeLover", email: "JOB@givemejob.com" });
    }, 10000);
});

promiseThree.then((user) => console.log(user));

// Promise 4: Handling resolve, reject, and finally
const promiseFour = new Promise((yup, nope) => {
    setTimeout(() => {
        let error = false; // Change to `true` to test rejection
        if (!error) {
            yup({ username: "rahul", email: "JOB@givemejob.com" });
        } else {
            nope("ERROR: Something went wrong");
        }
    }, 1000);
});

// Consuming promiseFour properly with then, catch, and finally
promiseFour
    .then((user) => {
        console.log(user.username); // Logs "rahul"
        return user.username; // Return username for next `.then()`
    })
    .then((username) => {
        console.log("Stored username:", username);
    })
    .catch((error) => {
        console.log(error); // Logs "ERROR: Something went wrong" if error is true
    })
    .finally(() => {
        console.log("Promise Four execution completed."); // Runs no matter what
    });

// Promise 5: New Promise handling resolve/reject
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true; // Change to `false` to test resolve
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

// Async function to consume promiseFive with proper error handling
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response); // Logs resolved object if no error
    } catch (error) {
        console.log(error); // Catches and logs rejection error
    }
}

consumePromiseFive();



//getAllUsers()

fetch("https://randomuser.me/api/") // ✅ Correct API URL
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("❌ Fetch Error:", error));

