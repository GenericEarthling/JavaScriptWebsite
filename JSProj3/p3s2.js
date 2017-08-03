/**
 * @author Sharon Tender
 * calculate credit balance, display message if over credit limit
 */

// declare variables
var balance, debit, credit, limit, currentBalance;
var today = new Date();

// prompt useraccount ID, beginning balance, new charges, applied credit, credit limit
var accountID = prompt("Enter account id number: ");

var beginBalance = prompt("Enter beginning balance: ");
balance = parseFloat(beginBalance);

var newCharges = prompt("Enter new merchandised charges: ");
debit = parseFloat(newCharges);

var appliedCredit = prompt("Enter current credits: ");
credit = parseFloat(appliedCredit);

var creditLimit = prompt("Enter credit limit: ");
limit = parseFloat(creditLimit);

// do the math
currentBalance = (balance + debit) - credit;

// display the user imput numbers and current balance
document.writeln("<br><br>Account ID: " + accountID + "<br>Current Balance: " + balance.toFixed(2) + "<br>New Charges: " + debit.toFixed(2) + "<br>Current Credit: " + credit.toFixed(2) + "<br>Credit Limit: " + limit.toFixed(2));
document.writeln("<br>Account balance for " + today.toDateString() + ": $" + currentBalance.toFixed(2));

// compare balance with the limit
if (currentBalance > limit) {
	var bal = currentBalance - limit;
	document.writeln("<br><strong class='warning'>Credit Limit exceeded!</strong> $" + bal.toFixed(2) + " over the limit" );
}
