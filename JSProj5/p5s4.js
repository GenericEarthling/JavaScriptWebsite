/**
 * @author Sharon Tender
 *
 */
function start() {
	var button = document.getElementById( "roundBtn" );
	button.addEventListener( "click", round, false );
}

// button click event
function round() {
	var num = document.getElementById("input");
	var floatNum = num.value;
	var msg = "Rounded to ";
	var x;

	// round to integer
	function roundToInteger(x) {
	  return Math.round(x);
	}

	// round to tenths
	function roundToTenths(x) {
	  return Math.round(x*10)/10;
	}

	// round to hundredths
	function roundToHundredths(x) {
	  return Math.round(x*100)/100;
	}

	// round to thousands
	function roundToThousandths(x) {
	  return Math.round(x*1000)/1000;
	}

	// display results
	var result = document.getElementById("results");
	result.innerText =
	msg + "integer: " + roundToInteger(floatNum) + "\n"
	+ msg + "tenths: " + roundToTenths(floatNum) + "\n"
	+ msg + "hundredths: " + roundToHundredths(floatNum) + "\n"
	+ msg + "thousandths: " + roundToThousandths(floatNum);
}

window.addEventListener( "load", start, false );

