const score = 10;
const balance = new Number(100.5);
console.log(score); // Output: 10
console.log(balance); // Output: [Number: 100.5]

console.log(balance.toFixed(2));// Output: "100.5"
console.log(balance.toString().length); // Output: 5
console.log(balance.valueOf()); // Output: 100.5

console.log(Number.isInteger(score)); // Output: true
console.log(Number.isInteger(balance)); // Output: false
console.log(balance.toPrecision(3)); // Output: "100" (3 significant digits)


// --------------------------------------------------------------------------------
// Math object usage
console.log(Math);

console.log(Math.abs(-4));
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.floor(4.8)); // Output: 4
console.log(Math.round(4.5)); // Output: 5
console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1

console.log(Math.sqrt(16)); // Output: 4
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E); // Output: 2.718281828459
console.log(Math.trunc(4.9)); // Output: 4 (removes decimal part)


console.log(Math.random()); // Output: Random number between 0 and 1
console.log(Math.floor(Math.random() * 10)+1); // Output: Random number between 1 and 10

// find the number between  max and min
function getRandomNumberBetween(max, min) {
    return Math.floor(Math.random() * (max- min+ 1)) + min;
}
console.log(getRandomNumberBetween(5, 15)); // Output: Random number between 5 and 15