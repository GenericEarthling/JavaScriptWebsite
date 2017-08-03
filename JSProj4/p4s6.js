/**
 * @author Sharon Tender
 * Temperature: This script will convert celsius to fahrenheit and visa versa.
 */



function start() {
	var cButton = document.getElementById( "celsiusBtn" );
	cButton.addEventListener("click", celsiusConvert, false);

	var fButton = document.getElementById("farenheitBtn");
	fButton.addEventListener("click", farenheitConvert, false);
}

function celsiusConvert() {
	var inputTemp = document.getElementById( "userTemp" );
	var fTemp = parseInt(inputTemp.value);
	var cTemp = ( (fTemp - 32)/9 ) * 5;

	var result = document.getElementById( "result" );
	result.innerHTML = "Celsius temperature is: " + cTemp.toFixed(0);
}

function farenheitConvert() {
	var inputTemp = document.getElementById( "userTemp" );
	var cTemp = parseInt(inputTemp.value);
	var fTemp = ( (cTemp * 9)/5 ) + 32;

	var result = document.getElementById( "result" );
	result.innerHTML = "Farenheit temperature is: " + fTemp.toFixed(0);
}

window.addEventListener( "load", start, false );