const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
// Type alias
type Drink = [string, boolean, number];
const pepsi = ['brown', true, 40];
const sprite = ['clear', true, 40];
const tea = ['brown', false, 0];
const coke = ['brown', true, 40];
const fanta = ['orange', true, 40];
const water = ['clear', false, 0];

console.table([pepsi, sprite, tea, coke, fanta, water]);