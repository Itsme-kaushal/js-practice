let myDate = new Date();
console.log(`normal way of date : ${myDate}`); // Current date and time
console.log(`ISO format of date : ${myDate.toISOString()}`); // ISO format
console.log(`Date in UTC : ${myDate.toUTCString()}`); // Date in UTC
console.log(`Date in local time : ${myDate.toLocaleString()}`); // Date in local time
console.log(`Date in local time with options : ${myDate.toLocaleString({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`); // Date in local time with options
console.log(`Date in local time with options : ${myDate.toLocaleDateString()}`); // Date in local time with options
console.log(`Time in local time : ${myDate.toLocaleTimeString()}`); // Time in local time
console.log(`Date in local time with options : ${myDate.toLocaleTimeString({ hour: '2-digit', minute:'  2-digit', second: '2-digit' })}`); // Time in local time with options
console.log(`Date in local time with options : ${myDate.toLocaleTimeString({ hour: '2-digit', minute:'  2-digit', second: '2-digit', hour12: true })}`); // Time in local time with options (12-hour format)
console.log(`date is json : ${myDate.toJSON()}`); // Date in JSON format
let mydate2 = new Date(2024,0,23,5,4); // Create a date from a string
console.log(`date from string : ${mydate2.toDateString()}`); // Date from string

//date in seconds
console.log(`date in seconds : ${Math.floor(myDate.getTime() / 1000)}`); // Date in seconds since epoch
//date methods
console.log(`getFullYear : ${myDate.getFullYear()}`); // Get full year
console.log(`getMonth : ${myDate.getMonth()}`); // Get month (0-11)
console.log(`getDate : ${myDate.getDate()}`); // Get date
console.log(`getDay : ${myDate.getDay()}`); // Get day of the week (0-6, 0 is Sunday)

mydate2.toLocaleString('default', { timeZone: 'Asia/Kolkata' }); // Convert to a specific timezone
console.log(`date in Asia/Kolkata timezone : ${mydate2.toLocaleString('default', { timeZone: 'Asia/Kolkata' })}`); // Date in Asia/Kolkata