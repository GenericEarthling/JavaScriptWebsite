/**
 * @author Sharon Tender
 * Parking Garage: This script will calculate the garage parking fees using a function.
 */

var hours;

function calculateCharges(hours) {
	var hrRate = .5, charges, minCharge = 2, maxCharge = 10, minHours = 3, maxHours = 19;
	if (hours <= minHours) {
		charges = minCharge;
	} else if ( (hours > minHours) && (hours <= maxHours) ) {
		charges = minCharge + ( (hours - minHours) * hrRate );
	} else {
		charges = maxCharge;
	}
	return charges;
}

var hrs = prompt("Enter number of hours parked in garage: ", "hours");
hours = parseInt(hrs);

var calculations = calculateCharges(hours);


document.writeln("Hours parked: " + hours + "<br> Charges: $" + calculations.toFixed(2));
