
const name = 'kaushal'

const repo = 50


//outdated way to use string concatenation instead use string interpolation
// console.log(name +" "+ repo)

//we use backticks to use string interpolation
console.log(`My name is ${name} and I have ${repo} repositories. `)

const game = new String('Mario Kart');
console.log(game);
console.log(game.__proto__); // Access the prototype of the String object

// String methods
console.log(game.length); // Length of the string
console.log(game.toUpperCase()); // Convert to uppercase
console.log(game.toLowerCase()); // Convert to lowercase
console.log(game.indexOf('Kart')); // Find the index of a substring
console.log(game.charAt(0)); // Get character at index 0
console.log(game.substring(0, 5)); // Get substring from index 0 to 5
console.log(game.split(' ')); // Split the string into an array by spaces
console.log(game.replace('Mario', 'Luigi')); // Replace a substring
//original string remains unchanged
console.log(game); // Output: Mario Kart

// String immutability
const originalString = 'Hello';
const modifiedString = originalString.replace('H', 'J');
console.log(originalString); // Output: Hello
console.log(modifiedString); // Output: Jello
