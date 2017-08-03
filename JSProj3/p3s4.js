/**
 * @author Sharon Tender
 * Payday: The user inputs employee's ID, hours worked, and pay rate for three employees.
 * The script will calculate regular pay and overtime pay if applicable.
 */


// variables
var empNum = new Array(3);
var empHours = new Array(3);
var empRate = new Array(3);
var empPay = new Array(3);

// gather user input
for (var i=0; i<3; i++) {
	empNum[i] = prompt("Enter employee number: ", "Type employee number here");
	var hours = prompt("Enter hours worked", "hours" );
	empHours[i] = parseFloat(hours);
	var rate = prompt("Enter pay rate:", "rate");
	empRate[i] = parseFloat(rate);
	if (empHours[i] <= 40 ) {
		empPay[i] = empHours[i] * empRate[i];
		console.log(empNum[i], empRate[i], empPay[i]);
	} else {
		var overTime = empHours[i] - 40;
		empPay[i] = ( (empRate[i] * 1.5) * overTime )+(40 * empRate[i]);
		console.log(empNum[i], empRate[i], empPay[i], overTime);
	}
}

// display results
for (var i=0; i<3; i++) {
	document.writeln("<br><br>Employee Number: " + empNum[i]);
	document.writeln("<br>Hours Worked: " + empHours[i]);
	document.writeln("<br>Payrate: $" + empRate[i].toFixed(2));
	document.writeln("<br>Pay: $" + empPay[i].toFixed(2));
}
