// In addition to making arrays of Objects, we can use objects 
// as parameters for functions as well. That way, these functions 
// can take advantage of the methods and properties that a 
// certain object type provides.

// To see an example, take a look at the console. In addition to 
// our Person constructor we have introduced a new function, 
// ageDifference (line 9). This function takes two Person objects 
// as parameters, and returns the difference in age between the 
// two people.

// Notice we would be in trouble here if we tried to call 
// ageDifference and passed in strings instead of people, because 
// strings don't have an age property. But because we know from our 
// constructor that all Person objects will have an age property, 
// we can pass any Person into ageDifference. We must be careful 
// not to pass anything but Person objects into ageDifference.


// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
        return person1.age;
    } else {
        return person2.age;
    }
}

// Define two people, using the Person constructor, to use as test cases
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// try out our functions
var diff = ageDifference(alice, billy);
var older = olderAge(alice, billy);

// try out our functions within a text printout
console.log("The difference in ages is " + ageDifference(alice, billy));
console.log("The older person is " + olderAge(alice, billy));