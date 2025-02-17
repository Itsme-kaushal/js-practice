var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// parent class
var Vehicle = /** @class */ (function () {
    // to pass an argument in the parent class we need to use constructor
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log('Horning');
    };
    return Vehicle;
}());
//child class
// extends keyword is used to inherit the properties of parent class and child class can also have its own properties and ovveride the parent class properties
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color, wheels) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.wheels = wheels;
        return _this;
    }
    //overriding the parent class function
    // if we are ovveriding the function then we have to use the same return type as parent class and we cannot change the access modifier of the parent class function
    Car.prototype.drive = function () {
        console.log('Car Driving');
    };
    //methods which can change a lot of content of the class should be private and methods which can be used by other classes should be public to ensure the security of the class
    // protected methods can be used by the child class and can be override the access modifier of the parent class by same or less restrictive access modifier
    Car.prototype.honk = function () {
        console.log('beep');
    };
    return Car;
}(Vehicle));
var Car1 = new Car("blue", 4);
// Car1.drive(); error as drive is private
console.log(Car1.color);
console.log(Car1.wheels);
Car1.honk();
