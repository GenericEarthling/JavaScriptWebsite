/**
 * @author Sharon Tender
 * Encryption: The user will input four numbers.
 * The script will encrypt the number then display the original number and the encrypted number.
 *
 */

// variables
var splitNum, splitNumbers, i, holder, firstNum, secondNum, thirdNum, zeroNum;

// encryption function
function encrypt(num) {
	num = parseInt(num);
	return (num + 7) % 10;
}

var string = prompt("Enter 4 digit number.");
splitNumbers = string.split("",4);

// index 0 encryption
var numZero = splitNumbers[0];
zeroNum = encrypt(numZero);

// index 1
var numOne = splitNumbers[1];
firstNum = encrypt(numOne);

// index 2
var numTwo = splitNumbers[2];
secondNum = encrypt(numTwo);

// index 3
var numThree = splitNumbers[3];
thirdNum = encrypt(numThree);

// the switch: 0 with 2 and 1 with 3
holder = zeroNum;
zeroNum = secondNum;
secondNum = holder;
holder = firstNum;
firstNum = thirdNum;
thirdNum = holder;

//display orig number
document.writeln("The original number was: " + string);

// display the encrypted number
document.writeln("<br>The encrypted number is: " + zeroNum + firstNum + secondNum + thirdNum);


/*
// declare variables
var splitNum, i, holder, firstNum, secondNum, thirdNum, zeroNum;

var string = prompt("Enter 4 digit number.");
splitNumbers = string.split("",4);

var numZero = splitNumbers[0];
zeroNum = parseInt(numZero);
console.log("orig num" + zeroNum);
zeroNum = (zeroNum + 7) % 10;
console.log(zeroNum);

var numOne = splitNumbers[1];
firstNum = parseInt(numOne);
console.log("orig num" + firstNum);
firstNum = (firstNum + 7) % 10;
console.log(firstNum);

var numTwo = splitNumbers[2];
secondNum = parseInt(numTwo);
console.log("orig num" + secondNum);
secondNum = (secondNum + 7) % 10;
console.log(secondNum);

var numThree = splitNumbers[3];
thirdNum = parseInt(numThree);
console.log("orig num" + thirdNum);
thirdNum = (thirdNum + 7) % 10;
console.log(thirdNum);

// the switch: 0 with 2 and 1 with 3
holder = zeroNum;
zeroNum = secondNum;
secondNum = holder;
holder = firstNum;
firstNum = thirdNum;
thirdNum = holder;

//display orig number
document.writeln("The original number was: " + string);

// display the encrypted number
document.writeln("<br>The encrypted number is: " + zeroNum + firstNum + secondNum + thirdNum);


*/


