var getReview = function (movie) {
	prompt("Enter your fav movie!").toLowerCase();
	switch(movie) {
		case "matrix":
			console.log("good trip out");
			break;
		case "princess bride":
			console.log("awesome date night movie");
		  break;
		case "welcome to america":
			console.log("Amjad's favorite");
			break;
		case "remember the titans":
			console.log("love the sports");
			break;
		case "why do i look like i'm 12?":
			console.log("The Ryan and Zach Story");
			break;
		case "fighting kangaroos in the wild":
			console.log("Token Australian movie for Leng");
			break;
		default:
			console.log("I don't know");
	}
}

getReview("Remember the Titans")


/* Imagine you have a movie collection and you want to write some code that 
assigns your review to each of them. Obviously each review differs 
depending on the movie. Below are the movies and your review. Use a 
structure learned in an earlier lesson to write code for the information below:

"Matrix" - "good trip out"
"Princess Bride" - "awesome date night movie"
"Welcome to America" - "Amjad's favorite"
"Remember the Titans" - "love the sports"
"Why do I look like I'm 12?" - "The Ryan and Zach story"
"Fighting Kangaroos in the wild" - "Token Australian movie for Leng"

getReview should be a function that takes a movie name and returns 
its review based on the information above. If given a movie name not 
found just return "I don't know!". */





