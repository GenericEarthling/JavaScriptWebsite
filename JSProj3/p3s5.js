/**
 * @author Sharon Tender
 * Payday: The user inputs employee's ID, hours worked, and pay rate for three employees.
 * The script will calculate regular pay and overtime pay if applicable.
 *
 * For some unknown reason you have to enter two digits for this to work.
 */

var numbers = new Array(10);

for (var i=0; i<10; i++) {
	var num = prompt("Enter a two digit number: ");
	numbers[i] = parseInt(num);
}
numbers.sort();
document.writeln("The largest number is: " + numbers[9]);