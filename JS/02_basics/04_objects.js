// Object creation
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// Nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: { userfullname: { firstname: "Rahul", lastname: "Kumar Shah" } }
};
console.log(regularUser.fullname.userfullname.firstname);

// Merging objects
const obj1 = {1: "a", 2: "b"}, obj2 = {3: "a", 4: "b"}, obj4 = {5: "a", 6: "b"};
const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

// Array of objects
const users = [{ id: 1, email: "h@gmail.com" }, { id: 2, email: "a@gmail.com" }];
console.log(users[1].email);

// Object methods
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructuring
const course = { coursename: "js", price: "999", courseInstructor: "rahul" };
const { courseInstructor: instructor } = course;
console.log(instructor);

// JSON example
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Array of objects (JSON)
[
    {},
    {},
    {}
]
