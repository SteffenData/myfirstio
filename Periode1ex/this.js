/**
 * Created by steffen on 15-02-2016.
 */

//when we use this, the this change in the fact, what the function recive.
    // i dont have to write Person.name to acces the name variable
    // we can not be sure that this will be the same as Person, so dont let that fool you
    // here fx will fail with this inside the function

var Person = {
    name: "Tim",
    age: 28,
    greeting: function () {
        return "Hello " + this.name + ".  Wow, you are " + this.age + " years old.";
    }
};

var Dog = {
    name: "Alfred",
    age: 110,
    greeting: Person.greeting
}


// global scope
var greeting = Person.greeting;
greeting();
console.log(Person.greeting())
console.log(greeting())
console.log(Dog.greeting())

