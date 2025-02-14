"use strict";
const accountId = 144553;
let accountEmail = "kaushal@gmail.com";
var accountPassword = "12345678";
//type annotations when we declare a variable on one line then initialize it later
//when functions return any type and we need to clarify the value
// when we want a variable whose type should not  be inferred
let apples = 5;
let speet = 'fast';
let nothing = undefined;
let now = new Date();
let colors = ['red', 'green'];
let myNumbers = [1, 2, 3];
console.table([accountEmail, apples, speet, nothing, accountPassword, Date, colors, myNumbers]);
let point = {
    x: 10,
    y: 20
};
// 1) function that returns any type    
const json = '{"x": 10, "y": 20}';
//json.parse return any type but we can explicitly declare type of variable
const coordinates = JSON.parse(json);
console.log(coordinates);
// console.log(typeof "x");
//2) when we declare intially and intialise variable later
let words = ['red', 'green', 'blue'];
let isgreenfound;
for (let i = 0; i < words.length; i++) {
    if (words[i] == 'green') {
        isgreenfound = true;
        console.log(isgreenfound);
    }
}
console.log(typeof isgreenfound);
// variables whose type cant be inferred correclty even if intialization and declaration on the same line 
let num = [-10, -1, 12];
let numabovezero = false;
console.log(typeof numabovezero);
for (let index = 0; index < num.length; index++) {
    if (num[index] > 0) {
        numabovezero = num[index];
    }
}
console.log(typeof numabovezero);
console.log(numabovezero);
