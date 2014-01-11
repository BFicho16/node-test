

// Array to store bets
var myBets = []

// Function to print out a bet for easy viewing
function printBet(bet) {
	console.log(bet.sport + " - " + bet.date + " at " + bet.time + " you bet $" + 
								bet.amount + " on the " + bet.bet_choice + " " +bet.type )
}

// Function to add a bet to a table
function addBet(date, time, sport, type, bet_choice, amount) {
	var newBet = {
		date: date,
		time: time,
		sport: sport,
		type: type,
		bet_choice: bet_choice,
		amount: amount
	}
	myBets[myBets.length] = newBet
}


// Function to list all the bets in a table
function list() {
	for (i = 0; i < myBets.lenght; i++);
		printBet(myBets[i]);
}

// Running the code....
addBet("Nov. 5", "5:00pm", "NHL", "moneyline", "Blackhawks", 500);
addBet("Dec. 10", "6:30pm", "NBA", "over", "Bulls vs Raptors", 25);
list()
