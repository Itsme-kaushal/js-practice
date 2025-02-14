import promptSync from 'prompt-sync';

const prompt = promptSync();
// import ptompt from 'prompt-sync'; for taking input from user in node js

const message = prompt('Enter your name`: ');

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

function logger(message: string) {
    console.log( `hello ${message}`);
}



logger(message);
const forecast = {  
    date: new Date(),
    weather: 'sunny'
};

const logweather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}
logweather(forecast);


console.log(add(4, 5));
console.log(sub(7, 6));
console.log(mul(7, 6));
console.log(div(7, 6));
