console.log('-----Q1-----');
// a. Write a class called `Person` that has 3 properties: a first name,
// a last name and a middle name. Create 2 instances of a `Person`.
// Print one of their first names.

// b. Write a method in `Person` called `fullName` that will return a formatted
// string of an instance's full name. Call this method on both the instances
// you created in part a.
class Person{
  constructor(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }

  fullName() {
    console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
  }
}

let steve = new Person('Steven', 'Rene', 'Louis');
let chrissy = new Person('Christina', 'Rene', 'Taylor');
console.log(steve);

steve.fullName();
chrissy.fullName();

console.log('-----Q2-----');

// a. Create a class called `Book` that has properties `title`, `author` and
//`rating`. Create some instances of `Book`. // b. Add a method to `Book`
//called `isGood` that returns `true` if its rating is greater than or
//equal to 7.
class Book{
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  isGood() {
    if (this.rating >= 7) {
      return true;
    } else {
      return false;
    }
  }
}

let shook = new Book('Shook Ones', 'Charlamagne tha God', 7);
let power = new Book('The 48 Laws of Power', 'Robert Greene', 5);
let principles = new Book('principles: Life and Work', 'Ray Dalio', 6);
let actof = new Book('Act of Faith', 'Iyanla Vanzant', 9);
console.log(shook);
console.log(shook.isGood());
console.log(power);
console.log(power.isGood());

console.log('-----Q3-----');
// a. Create a `Dog` class with four properties: `name (string),
// breed (string), mood (string), and hungry (boolean)`.
//
// b. Add a method called `playFetch`. It should set the dog's `hungry`
// property to `true`, set its mood property to `playful`, and log "Ruff!"
//
// c. Add a method called `feed`. If the dog is hungry, it should set
// `hungry` to `false` and print "Woof!" If the dog is not hungry, it
// should log "The dog doesn't look hungry"
//
// d. Add a method called `toString` that returns a description of the dog:

class Dog{
  constructor(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }

  playFetch() {
    this.hungry = true;
    this.mood = 'playful';
    console.log('Ruff!');
  }

  feed() {
    if (this.hungry === true) {
      this.hungry = false;
      console.log("Woof!");
    } else {
      console.log("This dog doesn't look hungry");
    }
  }

  toString() {
    console.log(`My name is ${this.name} and I am a ${this.breed}. I am extremely ${this.mood} when I get hungry. Do you think that is true or false. The answer is ${this.hungry}!`);
  }
}
let cookie = new Dog('Cookie', 'Porkie', 'hyper', true);
let benji = new Dog('Benji', 'Morkie', 'lazy', false);
benji.toString();
cookie.playFetch();

console.log('-----Q4-----');
// a. Make an object called `freezingPoint` that has three properties:
// `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the
// freezing point of water.

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273
}

// b. Make a class called `Celsius` that has one property: `celsius`,
// and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
// ```js

// c. Give `Celsius` a method called `isBelowFreezing` that returns
// a `Bool` (true if the temperature is below freezing).


// ```

class Celsius {
  constructor (celsius) {
    this.celsius = celsius;
  }

  //I need a function that will convert celsius to fahrenheit
  getFahrenheitTemp() {
    return this.celsius * 1.8 + 32;
  }

  //I need to do so the same for kelvin
  getKelvinTemp() {
    return this.celsius + 273;
  }

  isBelowFreezing() {
    if (this.celsius < 0) {
      return true;
    } else {
      return false;
    }
  }
}

let outsideTempt = new Celsius(10.0);
console.log('celsius degree is equal to', outsideTempt.celsius);
console.log(`celsius to kelvin is equal to ${outsideTempt.getKelvinTemp()}`); //returns 283.0
console.log('celsius to fahrenheit is equal to', outsideTempt.getFahrenheitTemp()); //returns 50.0
console.log(`is the temperature below frezzing? ${outsideTempt.isBelowFreezing()}`);
console.log('----Q5-----');

// a. Create a class called `Movie` that has properties for `name`, `year`,
// `genre`, `cast`, and `description`. Create an instance of your `Movie`

class Movie{
  constructor(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }

  blurb(){
    console.log(`${this.name} is a classic ${this.genre} movie that was released back in ${this.year}. The main cast member is ${this.cast} and its focus on ${this.description}`)
  }
}

//b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.

//Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."

let movie1 = new Movie('Coming to America', 1988, 'comedy', 'Eddie Murphy', 'an African prince that breaks tradition and travel to America in search for his bride');
movie1.blurb();

console.log('----Q6-----');
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
function Vector (x, y){
  this.x = x;
  this.y = y;
}

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
Vector.prototype.plus = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};

Vector.prototype.minus = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html
Vector.prototype.getLength = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};


// ```js
var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);
console.log(v1.plus(v2));
//=> Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5
// ```
console.log('----Q7-----');

// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
let myNissan = new Car('Nissan', 'Altima');
console.log(myNissan);

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
//
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).
// Why does it make sense for this to be a static method instead of an instance method?

class Bike {
  constructor(gears, hasBell) {
    this.gears = gears;
    this.hasBell = hasBell;
  }

  static numberOfWheels(wheels) {
    if (wheels === 2) {
      return `This has ${wheels} wheels, this is a bike`;
    } else {
      return `This has ${wheels} wheels, this is a car`;
    }
  }
}
let bmx = new Bike(4, true);

// c. Give each class a static method called `numberOfWheels`
//that returns the number of wheels (2 for bikes, 4 for cars).
//Why does it make sense for this to be a static method instead of an instance method?

//Static method apply's to all instances

console.log('----Q8----');
// a. Make a class called `Vehicle` with properties `color` and `name`.
// Give it a method called `makeSound` which logs "WHHOOSSSH" to the console

class Vehicle {
 constructor(color,name) {
   this.color = color;
   this.name = name;
 }
 makeSound(){
   console.log('WHHOOSSSH');
 }
}

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the
// `Vehicle` class.

class Car2 extends Vehicle {
 constructor(color,name,make,model) {
   super(color, name);
   this.make = make;
   this.model = model;
 }
}

class Bike2 extends Vehicle {
 constructor(color,name,gears,hasBell) {
   super(color,name);
   this.gears = gears;
   this.hasBell = hasBell;
 }
}

// c. Create a new `Bike` instance that has a `color` of "green" and `name`
// "Bikey McBikeface"


d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
