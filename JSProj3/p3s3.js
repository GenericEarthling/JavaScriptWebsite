/**
 * @author Sharon Tender
 * Commission: The user inputs unlimited amount of sales items.
 * The script will calculate commission on items and add it to the salespersons earnings.
 */


// variables
var amt, empName, item;
var totalCom = 0;
var com = .09;
var salary = 200;
var flag = 0;
var i = 0;

// get user input for salesperson's name
empName = prompt("Enter name.");

// for loop for user input
while (flag != -1) {

		item = prompt("Enter item number");
		var amount = prompt("Enter amount");
		amt = parseFloat(amount);

		function NewItem(item,amt,com) {
			var itemNum = item;
			var itemAmt = amt;
			var itemcom = com;
			this.getCom = function() {
				return itemAmt * itemcom;
			};
		}
		// create instance of object
		var result = new NewItem(item, amt, com);
		console.log( result.getCom() );

		// add commission to current commission amount
		totalCom += result.getCom();
		document.writeln("<br><br>Item: " + item );
		document.writeln("<br>Amount: " + amt );
		document.writeln("<br>Current Commission: " + result.getCom().toFixed(2) );
		document.writeln("<br>Total Commission: " + totalCom.toFixed(2) );



	flag = prompt("Enter -1 finish.");


}
// commission + salary
comPlusSalary = totalCom + salary;
document.writeln("<br><br><strong class='warning'>Employee: </strong>" + empName );
document.writeln("<br><strong class='warning'>Total Commission: </strong>$" + totalCom.toFixed(2) );
document.writeln("<br><strong class='warning'>Total Commission plus salary: </strong>$" + comPlusSalary.toFixed(2) );



/*


// Create the template for objects that are items
function NewItem(item, amount, com) {
  this.item = item;
  this.amount = amount;
  this.comm = com;
  this.getComm = function() {
    return this.amount * this.comm;
  };
}


// Create two hotel objects
var newItem1 = new NewItem('ab123', 10, .09);
var newItem2 = new NewItem('ab124', 12, .09);

document.write(newItem1.getComm());









var salesCom = {
	id: 123,
	amt: 12,
	com: .09,
	comAmt: amt * com

};

//var id = 123;
//var amt = 10;

document.writeln("result: " + salesCom.comAmt);




function Sale(amt) {
	this.amt = amt;
	this.com = .09;
	this.totalCom = function() {
		return this.amt * this.com;
	};
}
var amount = prompt("enter amt");
amt = parseFloat(amount);

var salesPerson = new Sale(amt);

document.writeln("result: " + salesPerson);  // result: [objectObject]

var empName, itemNum, amt, totalCom, flag, index;
var salary = 200;
var sale = new Array();

// prompt for name
//empName = prompt("Enter employee name:");


// loop for user input
while (flag !== -1) {
	for (var i=0; i< sale.length; i++) {

	}

	//itemNum = prompt("Enter item number:");
	var salesAmount = prompt("Enter sales amount:");
	amt = parseFloat(salesAmount);

	totalCom += calcCommission();
}




//totalCom += getCom(salesAmt);









var sales = new Object();
//sales.item = item;
sales.amt = amt;
sales.comm = .09;
sales.calcCommission = function() {
	return sales.amt * sales.comm;
};
// need to calculate total commision + salary


document.write("commission" + sales.calcCommission());

// calculations


//display
//document.writeln("<br>totalCom: " + totalCom);

//document.writeln("itemNum: " + itemNum + "<br>salesAmt: " + salesAmt + "<br>commission: " + commission +

// function to calculate sales
function getCom(salesAmt) {
	var commission = .09;
	return salesAmt * commission;
}
*/



