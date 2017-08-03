/**
 * @author Sharon Tender
 * Dice
 */

// array to hold the value of the dice for each roll
var frequencyArray = new Array(13);
var dice1, dice2, totalDice;

// button click event
function start() {
	var button = document.getElementById( "throwButton" );
	button.addEventListener( "click", throwDice, false );
}

// after clicking button, throw the dice
function throwDice() {
	for (var i=0; i<13; i++) {
		frequencyArray[i]=0;
		for (var roll=1; roll<10; roll++) {
			dice1 = Math.floor( 1+Math.random() * 6 );
			dice2 = Math.floor( 1+Math.random() * 6 );
			totalDice = dice1 + dice2;
			for (var j=2; j<13; j++) {
				if (totalDice == j) {
					frequencyArray[j] += 1;              // adds 1 to the current number of times
					                                     // the dice rolled that number
				}
            }
         }

	}
	// display results in a table

	document.writeln("<table>");
	document.writeln("<tr><th>Dice Total</th>");
	document.writeln("<th>Frequency</th></tr>");
	for (i=2; i<13; i++){
		document.writeln("<tr><td>" + i + "</td>");
		document.writeln("<td>" + frequencyArray[i] + "</td></tr>")
   }
   document.writeln("</table>")

}



window.addEventListener( "load", start, false );

