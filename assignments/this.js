/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding -is when you call a variable inside of a object with out            refering to the object its self.
* 2. Implicite Binding is the when you use 'this' keyword to refer to a object          directly
* 3. Explicit Binding -
    happens when you use methods like .call() or .bind() or .apply()
* 4. New Binding is when you create a constructor function and bind this to it         using the new keyword.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// const person = {
//   name: 'Samwise',

//   hello: function() {
//     // with window binding, food cannot be found!
//     console.log(`hello my name is ${name} `);
//   }
// };

// person.hello();
// Principle 2

// code example for Implicit Binding

const person = {
  name: 'susuan',
  age: '32',
  speak: function() {
    console.log(`${this.name} says hello i am ${this.age}`);
  }
};

person.speak();

// Principle 3

// code example for New Binding

function CrazyPerson(verb, bodyPart) {
  this.verb = verb;
  this.saying = 'Blaha ffud';
  this.bodyPart = bodyPart;
}
CrazyPerson.prototype.speak = function() {
  console.log(
    `${this.saying} says the crazy person, dont be fooled by the ${
      this.bodyPart
    } it will ${this.verb} at you in a heart beat.
    }`
  );
};

const jonas = new CrazyPerson('yell', 'eyeball');

jonas.speak();
// Principle 4

// code example for Explicit Binding

const tacos = {
  corn: 'Hard Shell',
  flower: 'Soft Shell'
};

const type = ['Beef', 'Chicken', 'Pork'];
('use strict');

function tacoOrder(type1, type2, type3) {
  console.log(
    `Hello I would like one ${this.corn} and one ${
      this.flower
    } and make them all ${type3}, `
  );
}

tacoOrder.call(tacos, ...type);
