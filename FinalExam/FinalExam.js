/**
 * @author Sharon Tender
 */

// the short way to write this is: $(function() { ... });
$(document).ready( function() {
	// add span element after each input element (for the red message to the right of the input box)
	$(":text").after("<span></span");

	// put todays date and time in the #date and #time <input> element (should this be span or textarea?)
	var today = new Date();
	var month = today.getMonth() +1;
	var day = today.getDate();
	var year = today.getFullYear();
	var hour = today.getHours();
	var amPM = (hour<12) ? "am" : "pm";
	hour = (hour>12) ? hour - 12 : hour;
	var min = today.getMinutes();
	var dateText = ((month<10) ? "0" + month: month) + "/";
	dateText += ((day<10)? "0" + day: day) + "/";
	dateText += year;
	var time = hour + ":" + min + amPM;

	// display date and time in the fields
	$("#date").val(dateText);
	$("#time").val(time);

	// decode button click
	$("#decodeButton").click(
		function(event) {
			event.preventDefault();
			var $inMessage = $("#inMessage").val().trim().toUpperCase();
			var $codeName = $("#codeName").val().trim().toUpperCase();

			// FUNCTION: validate user input
			validate($inMessage, $codeName);

			// FUNCTION: get the last letter of the code name
			var codeLetter = startLetter($codeName);

			// FUNCTION: encrypt message here
			decrypt($inMessage, codeLetter);

	}); // end decode button click

	// encode button click
	$("#encodeButton").click(
		function(event) {
			event.preventDefault();
			var $inMessage = $("#inMessage").val().trim().toUpperCase();
			var $codeName = $("#codeName").val().trim().toUpperCase();

			// FUNCTION: validate user input
			validate($inMessage, $codeName);

			// FUNCTION: get the last letter of the code name
			var codeLetter = startLetter($codeName);

			// FUNCTION: encrypt message here
			encrypt($inMessage, codeLetter);

	}); // end encode button click

	// encrypt() encryts each letter in the message
	function encrypt(message, startingChar) {
		var charArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".","#","-","?"];
		var aSize = charArray.length;
		var startChar = startingChar;
		var endChar;
		var result, indexStartChar, indexEndChar;
		var encryptedChars = "";
		var i = 0;

		console.log("orig message: " + message + " message length is: " + message.length);
		// find the endChar in the message
		// use charAt(counter) to find each posistion of the message
		// the message length will dictate how many times the for-loop will play
    	while (i < message.length) {
        	endChar=message.charAt(i);
        	console.log("ln 80; startChar before the arrayIndexValue(): " + startChar);
        	console.log("ln 81; endChar before the arrayIndexValue(): " + endChar);

        	// call arrayIndexValue() to find index values of start and end characters
        	// NOTE: instructions say start count one letter left of startChar, but that does not compute correctly
        	indexStartChar = arrayIndexValue(startChar);
			indexEndChar = arrayIndexValue(endChar);
			console.log("ln 87; indexStartChar: " + indexStartChar + " - indexEndChar: " + indexEndChar);

			// if stmt to find each encrypted character index position
			if (indexStartChar == indexEndChar) {
				result = aSize;
				// concatenate encryptedChar (not "-1" because -- I said so)
				encryptedChars += charArray[result-1];
				console.log("ln 94; result inside the if stmt 1: " + result-1);
			} else if (indexStartChar < indexEndChar) {
				// subtract indexStartChar from aSize to get remaining characters to the rt of startChar, then add indexEndChar
				result = indexEndChar-indexStartChar;
				// concatenate encryptedChar ("result -1" because array starts with 0)
				encryptedChars += charArray[result-1];
				console.log("ln 100; result inside the if stmt 2: " + result);
			} else  {
				// subtract indexStartChar from aSize to get remaining characters to the rt of startChar, then subtract indexEndChar
				result = (aSize - indexStartChar ) + indexEndChar;
				console.log(result + "=(" + aSize + "-" + indexStartChar + ")" + "+" + indexEndChar)
				// concatenate encryptedChar ("result -1" because array starts with 0)
				encryptedChars += charArray[result-1];
				console.log("ln 107; result inside the if stmt 3: " + result);
			} // end if stmt

			console.log("ln 110; encryptedChars: " + encryptedChars);

        	// save endChar to startChar
        	startChar = endChar;

        	// increment counter in while loop
        	i++;
		} // end while loop


	$("#outMessage").val(encryptedChars);
	}  // end encryp()








	// decrypt()
	function decrypt(message, startingChar) {
		var charArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".","#","-","?"];
		var aSize = charArray.length;
		var startChar = startingChar;
		var endChar;
		var indexDist, indexStartChar, indexEndChar;
		var decryptedChars = "";
		var i = 0;

		console.log("orig message: " + message);

    	while (i < message.length) {
        	endChar=message.charAt(i);
        	console.log("ln 137; startChar: " + startChar +"--- endChar: " + endChar);

        	indexStartChar = arrayIndexValue(startChar)-1;
			indexEndChar = arrayIndexValue(endChar)-1;
			console.log("ln 142; indexStartChar: " + indexStartChar + " --- indexEndChar: " + indexEndChar);

			if (indexStartChar < indexEndChar) {
				indexDist = indexEndChar - indexStartChar;
				decryptedChars += charArray[indexDist];
				console.log( indexDist + " = " + indexEndChar + " -" + indexStartChar );
				console.log("indexDist inside the if stmt 1: " + indexDist);
			} else {
				indexDist = indexStartChar - indexEndChar;
				decryptedChars += charArray[indexDist];
				console.log( indexDist + " = " + indexStartChar + "-" + indexEndChar);
				console.log("indexDist inside the if stmt 2: " + indexDist);
			}	// end if stmt


			console.log("ln 166; decryptedChars: " + decryptedChars);

        	// save endChar to startChar
        	startChar = endChar;

        	// increment counter in while loop
        	i++;
		} // end while loop

	// place result into htm file
	$("#outMessage").val(decryptedChars);
	}  // end decrypt()



	// arrayIndexValue(): return index value. Get the num of character positions from "A" to the startChar/endChar
	function arrayIndexValue(character) {
		var array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".","#","-","?"];
		var index;
		// find index value in the array and return index value
		for (var i = 0; i < array.length; i++) {              // not certain if this is the best type of loop
			if (character == array[i]) {
				index = i+1;
				break;                                        // not certain if this is the correct way out of loop
			}
		} // end of "for loop"
		return index;
	} // end of arrayIndexValue()

	// startLetter(): return startLtr. Get starting letter for code from code name
	function startLetter(name) {
		var startLtr;
		var length=name.length;
		startLtr = name.charAt(length-1);
		//console.log("startLetter(name) result: "+startLtr);
		return startLtr;
	} // end startLetter()

	// validate(): validate input values
	function validate(message, name) {
		if (message == "") {
			$("#inMessage").next().text("Required");
			// move focus to message box
			$("#inMessage").focus();
		} else {
			$("#inMessage").next().text("Accepted");
		} // end if

		// validate the code name input box for the button.click()
		if (name == "") {
			$("#codeName").next().text("Required");
			// move focus to code name
			$("#codeName").focus();
		} else {
			$("#codeName").next().text("Accepted");
		} // end if
	}  // end validate()

}); // end document ready

/*	// decrypt()
	function decrypt(message, startingChar) {
		var charArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".","#","-","?"];
		var message;
		var endChar = message.charAt(0);
		var result = "";
		var startChar = startingChar;
		var indexStartChar;
		var indexEndChar;

		console.log("L_75: message: " + message + " startChar: " + startChar + " endChar: " + endChar);

		for (var i = 0; i < message.length; i++) {
			console.log("i: " + i);
			endChar=message.charAt(i);

			indexStartChar = arrayIndexValue(startChar);
			indexEndChar = arrayIndexValue(endChar);
			console.log("L_82: startChar: " + startChar +" indexStartChar: " + indexStartChar + " endChar: "+endChar+" indexEndChar: "+indexEndChar);

			var distance = indexStartChar + indexEndChar;
			console.log("add index nums together: " + distance + " = " + indexStartChar + "+" + indexEndChar);
			if (distance > charArray.length) {
				distance = distance - charArray.length;
				console.log("inside if-- distance: " + distance);
			}
			result += charArray[distance-1];
			console.log("L_92: result: " + result + " charArray[distance-1]: " + charArray[distance-1]);

			startChar = endChar;

			//console.log("L_91 startChar: " + startChar + " endChar: " + endChar + " indexStartChar: " + indexStartChar + " indexEndChar: " + indexEndChar);


		} // end for loop
		$("#outMessage").val(result);
	} // end decrypt()

			result += charArray[ ( charArray.indexOf(message[i]) + charArray.indexOf(startChar) + 1) % charArray.length ];
			console.log("ln 79: " + result + " += charArray[ (" + charArray.indexOf(message[i]) + " + " + charArray.indexOf(startChar) + " + 1 ) % " + charArray.length + " ]" );
			console.log("startChar beginning: " + startChar + " index: " + charArray.indexOf(message[i]));
			startChar = message[i];
			console.log("startChar next: " + startChar + " index: " + charArray.indexOf(startChar));
			*/