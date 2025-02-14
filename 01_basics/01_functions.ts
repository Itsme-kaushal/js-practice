// there is no types infernce on arguments 
// however there is a type inferences on return value

const add = (a:number , b:number) :number => {
    return a+b;
}
const sub = (a:number , b:number) :number => {
     return a-b;
}
console.log(add(4,5));
console.log(sub(7,6));