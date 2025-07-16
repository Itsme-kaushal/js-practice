const marvel_heroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Spider-Man"
];

const dc_heroes = [
  "Superman",
  "Batman",
  "Wonder Woman"
];

const all_heroes = marvel_heroes.concat(dc_heroes);//concatenate the two arrays meaning combine them into one array resulting in a new array
console.log(all_heroes); 
//spread operator
const all_heroes_spread = [...marvel_heroes, ...dc_heroes];//spread operator is used to expand the elements of an array into another array
//it is a mre modern way to combine arrays and is often preferred for its readability and simplicity
console.log(all_heroes_spread);

const complex_array = new Array([1,2,[3,4,[5,6]],7,8]);
const depth = 2;
//print the complex array
console.log("complex array :"+complex_array);// [1, 2, [3,
//flattening the array
// const flattened_array = complex_array.flat(depth);
// console.log("flattened array :"+flattened_array);// flattens the array to the specified depth, which is 2 in this case