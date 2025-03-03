function multiBy5(num) {
    return num * 5;
}

// Adding properties to the function
multiBy5.description = "Multiplies a number by 5";
multiBy5.factor = 5;

console.log(multiBy5.description); // Multiplies a number by 5
console.log(multiBy5.factor);      // 5
console.log(multiBy5(10));         // 
multiBy5.prototype.increment = ()=> this.num++
const newNum = new multiBy5(5)
newNum.increment()
console.log(newNum);

