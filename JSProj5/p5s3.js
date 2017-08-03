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

	// round to integer --- I don't understand why i have to have multiply x with 1
	function roundToInteger(x) {
	  return Math.floor(x*1 +.5);
	}

	// round to tenths
	function roundToTenths(x) {
	  return Math.floor(x*10 +.5)/10;
	}

	// round to hundredths
	function roundToHundredths(x) {
	  return Math.floor(x*100 +.5)/100;
	}

	// round to thousands
	function roundToThousandths(x) {
	  return Math.floor(x*1000 +0.5)/1000;
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

