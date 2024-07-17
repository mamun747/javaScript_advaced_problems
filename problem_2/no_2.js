//! 1no

const person = {
    name: "muntasir",
    age: 15
}

let {name, age} = person;
console.log(name);
console.log(age);

// ! 3no

class Rectangle {
    constructor (width, height) {
        this.width = width
        this.height = height
    }
    calculation(){
        return `The calculation of the ${this.width} and ${this.height} is ${this.width * this.height}`;
    }
}

const a  = new Rectangle(200, 200);
console.log(a.calculation());

// ! 4no

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    // here is not any task for setter mr. nasif rahman
}

let fullname = new Person("Muntasir", 'Mamun');
console.log(fullname.fullName);

// ! 5no

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
};

const myCircle = new Circle(5);
console.log(`The circumference of the circle is ${myCircle.calculateCircumference()}`);

// ! 6no

let x = "name";
let y = "model";

const car = {
    [x]: "TOTOTA",
    [y]: 2017
};
console.log(car);

// ! 7no

class Animal {
    constructor(name){
        this.name = name
    }
    walk(){
        console.log("the " + this.name + " is walking");
    }
};

class Dog extends Animal{
    constructor(){
        super(name);
    }
}

let dog = new Animal("jack");
dog.walk();


// ! 8no

class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Cannot instantiate abstract class Shape.');
        }
    }
    calculateArea() {
        throw new Error('Method calculateArea must be implemented.');
    }
}

class Circle2 extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Implementation of abstract method
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

// This will throw an error because Shape cannot be instantiated directly
// let shape = new Shape();

// Create instances of derived classes
let circle = new Circle2(5);
console.log(circle.calculateArea());


// ! 9no
class mathUntil{
    static square(number){
        return number * number
    }
}
let number2 = 6;
let calculate = mathUntil.square(number2);
console.log(calculate);

// ! 10no
const mySymbol = Symbol("description");

const obj = {
    [mySymbol]: "Value associated with symbol"
};

console.log(obj[mySymbol]);
console.log(obj);
