/**
 * @author Sharon Tender
 * Search text using .indexOf() to find a character and deterimine the number of occurrences of it in the text.
 */

function start() {
	var button = document.getElementById( "searchBtn" );
	button.addEventListener( "click", search, false );
}

function search () {
	var stringInput = document.getElementById("inputString");
	var string = stringInput.value.toLowerCase();
	var character = document.getElementById("inputCharacter");
	var letter = character.value.toLowerCase();

	// find the first position of the character searching for
	var charPosition = string.indexOf(letter, 0);
	var count = 0;

	// starting at the first found letter from line 18,
	// loop through each char of the string to find the next position of the char
	// until you get false response (-1), most of this was found on the mdn website
	while (charPosition !== -1) {
		count++;
		charPosition = string.indexOf(letter, charPosition + 1);
		console.log(charPosition);
	}


	// display results
	var result = document.getElementById("results");
	result.innerText =
	"You entered the letter '" + letter + "'.\n"
	+ "It occurs " + count + " times in the textbox above.";
	console.log(count);
}

window.addEventListener( "load", start, false );

