


// sets i to 0 initially
var i = 0;

/////////////////////////////////////////////////////////////////

function processForm() {

		// increments i by 1 everytime the function is run
    i++;

    // sets a variable listItem = the the value of the text submitted
    // in the form by the user
    var listItem = document.myCheckListForm.checklistItem.value;
		
		// prints out the value, adds a checkbox to each item listed, 
		// gives it a unique numerical id based on the i value, applies 
		// the crossedOut function on click, and prints the value out
		var listed = '<div id="item' + i + '"><input type="checkbox" 
					onclick="crossedOut(\'item'+ i + '\')" />' + listItem + '</div>';
	
		// grabs the dv with ID checkList and sets its value using
		// .innerHTML equal to the variable (above) of "listed"
		document.getElementById("checkList").innerHTML += listed;

}

/////////////////////////////////////////////////////////////////

// applies a CSS class called checked-off when the crossedOut
// function is executed
function crossedOut(item) {
	document.getElementById(item).className = "checked-off";
}