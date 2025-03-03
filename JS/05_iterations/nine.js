const myNums = [1, 2, 3];

// Reduce to sum array elements
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal); // Output: 6

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
];

// Calculate total price
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // Output: 22996
