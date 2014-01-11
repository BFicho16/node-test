// Run through all the properties of an object
// using the for / in loop

var nyc = {
    fullName: "New York City",
    mayor: "Michael Bloomberg",
    population: 8000000,
    boroughs: 5
};


// prints the property names
for ( var property in nyc ) {
    console.log(property);
}

// prints the property value
for ( var x in nyc ) {
    console.log(nyc[x]);
}