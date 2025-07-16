/**
 * Demonstrates basic array operations in JavaScript.
 *
 * - Creates arrays using literal and constructor syntax.
 * - Accesses array elements by index.
 * - Uses array methods:
 *   - `length`: Gets the number of elements.
 *   - `push`: Adds an element to the end.
 *   - `pop`: Removes the last element.
 *   - `unshift`: Adds an element to the beginning.
 *   - `shift`: Removes the first element.
 *   - `indexOf`: Finds the index of an element.
 *   - `includes`: Checks if an element exists.
 *   - `reverse`: Reverses the array.
 *   - `sort`: Sorts the array.
 *   - `slice`: Returns a shallow copy of a portion of the array.
 *   - `splice`: Removes or replaces elements.
 *
 * Logs the results of each operation to the console.
 */
// array

const myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5]

/**
 * An array containing the numbers 1 through 5.
 * @type {number[]}
 */
const myArray2 = new Array(1, 2, 3, 4, 5);
console.log(myArray2); // [1, 2, 3, 4, 5]   
console.log(myArray2[0]); // 1
console.log(myArray[1]); // 2

// array functions
console.log(myArray2.length); // 5
console.log(myArray2.push(6)); // 6
console.log(myArray2); // [1, 2, 3, 4, 5, 6]
console.log(myArray2.pop()); // 6
console.log(myArray2); // [1, 2, 3, 4, 5]
console.log(myArray2.unshift(0)); // 6 // adds 0 at the beginning
console.log(myArray2); // [0, 1, 2, 3, 4, 5]
console.log(myArray2.shift()); // 0// removes the first element
console.log(myArray2); // [1, 2, 3, 4, 5]
console.log(myArray2.indexOf(3)); // 2
console.log(myArray2.includes(3)); // true
console.log(myArray2.includes(6)); // false
console.log(myArray2.reverse()); // [5, 4, 3, 2, 1]
console.log(myArray2.sort()); // [1, 2, 3, 4, 5]
console.log(myArray2.slice(1, 3)); // [2, 3]
console.log(myArray.slice(1)); // [2, 3, 4, 5]

console.log("removes 2 elements from index 1 :"+myArray2.splice(1, 2)); // [2, 3]// removes 2 elements starting from index 1
console.log(myArray2); // [1, 4, 5]