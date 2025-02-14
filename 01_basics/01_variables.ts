const accountId = 144553
let accountEmail = "kaushal@gmail.com"
var accountPassword = "12345678"
//type annotations when we declare a variable on one line then initialize it later

let apples : number = 5;
let speet :string = 'fast';
let nothing: undefined = undefined;
let now: Date = new Date()
let colors: string[]  = ['red','green']
let myNumbers: number[] = [1,2,3]
console.table([accountEmail,apples,speet,nothing,accountPassword,Date,colors,myNumbers]);
let point :{ x : number; y :number} = {
    x:10,
    y:20
}
