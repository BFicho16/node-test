// Remember that an object is just another type, like a string 
// or number but more complex. This means that just as we can 
// make arrays of numbers and strings, we can also make arrays 
// of objects.

// Here we have our Person constructor which should look familiar. 
// We can use this constructor to make an array of Person objects, 
// similar to how we might make an array of numbers but filling 
// in people instead.

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6)