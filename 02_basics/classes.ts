// parent class
class Vehicle {
    // always define return type of the function in ts
    // by default all the properties of the class are public
    color: string;
    // to pass an argument in the parent class we need to use constructor
    constructor(color: string) {
        this.color = color;
    }
    protected honk(): void {
        console.log('Horning');
    }
}
//child class
// extends keyword is used to inherit the properties of parent class and child class can also have its own properties and ovveride the parent class properties
class Car extends Vehicle {
    //overriding the parent class function
    // if we are ovveriding the function then we have to use the same return type as parent class and we cannot change the access modifier of the parent class function
    
   private drive(): void {
        console.log('Car Driving');
    }
    // to pass an argument in the child class we need to use super keyword and pass the argument to the parent class constructor
    constructor( public color: string, public wheels: number) {
        super(color);
    }
    //methods which can change a lot of content of the class should be private and methods which can be used by other classes should be public to ensure the security of the class
    // protected methods can be used by the child class and can be override the access modifier of the parent class by same or less restrictive access modifier
    
   public honk(): void {
        console.log('beep');
    }
    //example if parent class has protected method then child class can override it by protected or public but not by private
}
const Car1 = new Car("blue", 4);
// Car1.drive(); error as drive is private
console.log(Car1.color);
console.log(Car1.wheels);
Car1.honk();
