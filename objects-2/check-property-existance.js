// Let's get some practice working with hasOwnProperty. 
// It is an invaluable tool when working with objects!

// Try to run the code in the editor as it is. 
// You should get an error because shorts is not a 
// property of the suitcase object.

// Let's write some code to test for this so we can 
// avoid this nasty error later.


var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "Seersucker"
}