/**
 * @author Sharon Tender
 */

// Button click event
function start() {
	var button = document.getElementById( "reserve" );
	button.addEventListener( "click", confirmReservation, false );
	}

function confirmReservation () {
	var inputNum = document.getElementById( "classChoice" );
	var choice = inputNum.value;
	var mess1 = "Boarding Pass: First Class \nSeat Number: ";
	var mess2 = "Boarding Pass: Economy Class \nSeat Number: "
	var messFull = "The next flight leaves in 3 hrs";
	var messError = "ERROR: Entry must be a '1' or '2' to be valid."
	var seats = new Array(10);


	if (choice == "1") {
		for (var i=0; i<5; i++) {
			seats[i] = "1";
			var comments = document.getElementById("comments");
			comments.innerText = mess1 + seats[i];
			if (i>5) {
				var comments = document.getElementById("comments");
				comments.innerText = messFull;
			}
		}
	} else if (choice == "2") {
		for (var i=6; i<10; i++) {
			seats[i] = "2";
			var comments = document.getElementById("comments");
			comments.innerText = mess2 + seats[i];
			if (i>5) {
				var comments = document.getElementById("comments");
				comments.innerHTML = messFull;
			}
		}
	} else {
		var comments = document.getElementById("comments");
		comments.innerText = messError;
	}

}





window.addEventListener( "load", start, false );