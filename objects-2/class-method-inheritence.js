// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
// and inherit the properties of animal
Penguin.prototype = new Animal();


// Test that the Animal methods (i.e. sayName) work
// with the new class as it should inherit that abiltiy
// from the animal class --> It's parent
var penguin = new Penguin("Steve");
penguin.sayName()