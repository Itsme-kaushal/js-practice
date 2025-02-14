const audiold = {
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
interface Vehicle {

    name: string;
    year: number;
    isElectric: boolean;
    color: string;
    turnOn(): void;
    turnOff(): void;
}
const printVehicle = (Vehicle: Vehicle) => {
    console.log(`Name: ${Vehicle.name}`);
    console.log(`Year: ${Vehicle.year}`);
    console.log(`Electric: ${Vehicle.isElectric}`);
    console.log(`Color: ${Vehicle.color}`);
    Vehicle.turnOn();
    Vehicle.turnOff();
}
printVehicle(audiold);

