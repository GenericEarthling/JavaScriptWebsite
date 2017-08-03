/**
 * @author Sharon Tender
 * Palindrome: The user will input five numbers.
 * The script will determine if the number is the same backwards as it is forwards.
 *
 */

// declare variables
var num=0;

num = prompt("Enter a five digit number.");


if ( ( num.charAt(0) === num.charAt(4) ) && ( num.charAt(1) === num.charAt(3) ) ) {
	document.write("Entered number: " + num);
	document.write("<br><strong class='warning'>The number is a palindrome.</strong>");
} else {
	document.write("Entered number: " + num);
	document.writeln("<br><strong class='warning'>The number is not a palidrome.</strong>");
}


