// there is no types infernce on arguments 
// however there is a type inferences on return value

const add = (a:number , b:number) :number => {
    return a+b;
}
const sub = (a:number , b:number) :number => {
     return a-b;
}
const mul  =(a:number , b:number) :number => {
    return a*b;
}
const div = (a:number , b:number) :number => {
    return a/b;
}

const logger = (message : string) :void => {
    console.log(message);
};

const throwError = (message : string) :void => {
    
    if(!message) {
        throw new Error(message);
    }
}

console.log(add(4,5));
console.log(sub(7,6));
console.log(mul(7,6));
console.log(div(7,6));
