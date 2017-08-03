/**
 * @author Sharon Tender
 * Date Object: Various ways to display user entered date and time.
 */

function start() {
	var button = document.getElementById( "dateBtn" );
	button.addEventListener( "click", dateVariations, false );
}

function dateVariations() {
	var userInput = document.getElementById("inputDate");
	var d = userInput.value;
	var userDate = new Date(d);
	console.log(userDate);
	console.log(d);

	// display results
	var result = document.getElementById("results");
	result.innerText =
	"toLocalString: " + userDate.toLocaleString() + "\n"
	+ "toUTCString: " + userDate.toUTCString() + "\n"
	+ "toDateString: " + userDate.toDateString() + "\n"
	+ "valueOf: " + userDate.valueOf() + "\n\n"
	+ "The Date Get Methods.............................................................\n"
	+ "[  NOTE: On methods that start with zero, add 1. EXAMPLE: (userDate.getMonth()+1)  ]\n"
	+ "getDate() - get day as a number: " + userDate.getDate() + "\n"
	+ "getDay()+1 - get weekday as a number (0-6): " + (userDate.getDay()+1) + "\n"
	+ "getFullYear() - get 4-digit year: " + userDate.getFullYear() + "\n"
	+ "getHours()+1 - get the hour (0-23): " + (userDate.getHours()+1) + "\n"
	+ "getMilliseconds()+1 - get milliseconds (0-999): " + (userDate.getMilliseconds()+1) + "\n"
	+ "getMinutes()+1 - get minutes (0-59): " + (userDate.getMinutes()+1) + "\n"
	+ "getMonth()+1 - get month (0-11): " + (userDate.getMonth()+1) + "\n"
	+ "getSeconds()+1 - get seconds(0-59): " + (userDate.getSeconds()+1) + "\n"
	+ "getTime() - get the time (milliseconds since Jan 1, 1970): " + userDate.getTime() + "\n\n"

	/*  the setter does not work. I don't know why.  */
	+ "The Date Set Methods.............................................................\n"
	+ "[  NOTE: I cannot get this to work and I don't know why???  ]\n"
	+ "setDate() - set day as a number: " + userDate.setDate() + "\n"
	+ "setFullYear() - set 4-digit year (optionally month and day):" + userDate.setFullYear() + "\n"
	+ "setHours() - set the hour (0-23): " + userDate.setHours() + "\n"
	+ "setMilliseconds() - set milliseconds (0-999): " + userDate.setMilliseconds() + "\n"
	+ "setMinutes() - set minutes (0-59): " + userDate.setMinutes() + "\n"
	+ "setMonth() - set month (0-11): " + userDate.setMonth() + "\n"
	+ "setSeconds() - set seconds(0-59): " + userDate.setSeconds() + "\n"
	+ "setTime() - set the time (milliseconds since Jan 1, 1970): " + userDate.setTime() + "\n";

}

window.addEventListener( "load", start, false );

// 09/30/16 11:12:30 AM