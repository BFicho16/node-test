// Go ahead and do three things:

// 1.Create a variable called xhr and set it equal 
// to new XMLHttpRequest().

// 2.Call open xhr and pass it three arguments: 
// "GET" (the type of request you'd like to make), 
// "http://www.codecademy.com/" (the URL), and false 
// (this means the exercise will wait until it gets a 
// response from the server).

// 3.Call .send() on xhr. We've already taken care of 
// the console.log()s for you!


// Add your code below this line!
xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);

xhr.send()


// Add your code above this line!

console.log(xhr.status);
console.log(xhr.statusText);