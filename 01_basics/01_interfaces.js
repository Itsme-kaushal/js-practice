var audiold = {
    name: 'A6',
    year: 2019,
    isElectric: false,
    color: 'black',
    turnOn: function () {
        console.log('Engine is on');
    },
    turnOff: function () {
        console.log('Engine is off');
    }
};
var printVehicle = function (Vehicle) {
    console.log("Name: ".concat(Vehicle.name));
    console.log("Year: ".concat(Vehicle.year));
    console.log("Electric: ".concat(Vehicle.isElectric));
    console.log("Color: ".concat(Vehicle.color));
    Vehicle.turnOn();
    Vehicle.turnOff();
};
printVehicle(audiold);
