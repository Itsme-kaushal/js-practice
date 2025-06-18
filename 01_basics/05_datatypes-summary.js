//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//types of memory

//stack(primitive )for eg number,bolean copy of data we get 
//heap(non-primitive) real data refrence

let myName = 'kaushal'

let anotherName = myName

anotherName = 'shailesh'
// no change in actual name since it is stored in stack memory
console.log(myName);

console.log(anotherName);

let userOne = {
    email: "user@google.com"

}

let userTwo = userOne

userTwo.email = 'kaushal@gmail.com'

//output -> userone.email = usertwo.email since it is stored in heap memory
// data is passes by refrence 
console.log(userOne.email);
console.log(userTwo.email);

