/**
 * @author Sharon Tender
 * Date Object: Various ways to display user entered date and time.
 */






function start() {
	var button = document.getElementById( "validateButton" );
	button.addEventListener( "click", validate, false );
}

function validate () {
	var email, url, age, areaCode, state, message1="", message2="";
	var noErr = "Success! All entries are valid";

	// validate domain name for the email
	try {
		var mail = document.getElementById("email");
		email = mail.value;
		console.log(email);                                  // check value of entry

		var n = email.search(/.com/i);                      // using search() from w3Schools online
		console.log(n);										// check value of search result

		if(email == "") throw "is empty.";                  // check for empty box
		if(n == -1) throw "in need of a domain."            // check for no domain
	}
	catch(err) {
		message1.innerHTML = "Email address is " + err;
	}



	// validate domain name for the url

	// validate age is over 21
	//if(isNaN(x)) throw "is not a number";
		//x = Number(x);
		//if(x > 10) throw "is too high";

	// validate area code is 813 or 727
	var area = document.getElementById("phone");
	ac = area.substring(0, 2);
	console.log(ac);
	try {
		if (ac == "") throw "is empty.";
		if ((ac !== 813) || (ac !== 727)) throw "should be 813 or 727.";
	}
	catch(err) {
		message2.innerHTML = "Area Code ";
	}


	// validate state is 2 letters and one of the 50 states includeing Puerto Rico (PR)

}


window.addEventListener( "load", start, false );

// test data
// sha@there.com
// 345-123-4444
// Tx   http://www.urladdress.com