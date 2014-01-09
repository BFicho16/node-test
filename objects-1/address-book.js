// An address book and functions for add, searching, and printing
// names.  


// start with 2 contacts in the address book
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];


// Add a new contact directly to the array at the end position
// and prints it out
function add(firstName, lastName, phoneNumber, email) {
    var newContact = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
    contacts[contacts.length] = newContact
    printPerson(newContact)
}


// a function that can print a perons full name
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}


// a function that can list all the members of an address book
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}


// a function that can search by last name and print the full name if found
function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        }
    }
}

// testing the functions
search("Jones");
add("Brian", "Ficho", "847-404-3159", "brian@gmail.com")