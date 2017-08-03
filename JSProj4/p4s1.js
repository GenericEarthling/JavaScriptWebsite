/**
 * @author Sharon Tender
 * Smallest Number: This script will find the smallest number entered by the user.
 */

var parsedNum;
var parsedInteger = new Array();
var smallest = 999;

var num = prompt("Enter the number of integers you wish to enter.");
parsedNum = parseInt(num);

for (var i=0; i<parsedNum; i++) {
	var num2 = prompt("Enter a number less than 1,000: ");
	parsedInteger[i] = parseInt(num2);
	if ( parsedInteger[i] <= smallest) {
		smallest = parsedInteger[i];
		smIndex = i+1;
	}
	//console.log(smallest + ": smallest number... " + parsedInteger[i] + ": number entered." + i + ": index value");
}

document.writeln( smallest + " was the smallest number entered.");
