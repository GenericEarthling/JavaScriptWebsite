/**
 * @author Sharon Tender
 * Reversed: This script will reverse a number that is entered by the user.
 */

function start() {
	var button = document.getElementById( "reverseBtn" );
	button.addEventListener( "click", reverseNum, false );

	var button2 = document.getElementById( "reverseBtn2" );
	button2.addEventListener( "click", reverseNum2, false );
}

function reverseNum2() {
	var num = document.getElementById( "userNumber" );   // right
	var startNum = num.value;                             // right
	var endNum = "";
	var digitCount;
	var currDigit;                               // right
	digitCount = startNum.length;
	var x = digitCount-1;

	for ( x; x>-1; --x) {

		currDigit = startNum.substr(x,1);
		console.log(startNum + " <-startNum " + currDigit + " <-current " + x + " <-x ");         // wrong
		endNum = endNum + currDigit;           // concatenates the numbers as a string
		console.log(endNum);
	}
	console.log(endNum);
	var result = document.getElementById( "result" );
	result.innerHTML = "Your number reversed: " + endNum;


}

function reverseNum() {
	var inputNum = document.getElementById( "userNumber" );
	var num = inputNum.value;
	//var numString = num.toString();
	var numSplit = num.split('');
	var reversed = numSplit.reverse();

    // could not get the comas out of the answer after splitting
	var result = document.getElementById( "result" );
	result.innerHTML = "Your number reversed: " + reversed + "<br>Could not find a way to get commas out. :/";
}

window.addEventListener( "load", start, false );




