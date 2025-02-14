const carmakers =['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
const car = carmakers[0];
const myCar = carmakers.pop();
carmakers.push('bmw');

//help with map
carmakers.map((car: string): string => {
    return car.toUpperCase();
});
//flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
console.log(importantDates);

// Help with inference when extracting values

