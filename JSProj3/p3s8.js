/**
 * @author Sharon Tender
 * Decryption: This script will undo Script 7.
 *
 */

// variables
var splitNum, splitNumbers, i, holder, firstNum, secondNum, thirdNum, zeroNum;

// encryption function
function encrypt(num) {
	num = parseInt(num);
	return (num + 7) % 10;
}
// decryption function
function decrypt(num) {
  // find the modulus and divide by that num? 7 - num
  num = num.toString();

  num = (.1 * num)
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

// switch back the encrypted numbers
holder = zeroNum;
zeroNum = secondNum;
secondNum = holder;
holder = firstNum;
firstNum = thirdNum;
thirdNum = holder;
console.log("unswitched numbers:" + zeroNum + firstNum + secondNum + thirdNum);

// index 0 decryption
zeroDecrypted = decrypt(zeroNum);

// index 1
firstDecrypted = decrypt(firstNum);

// index 2
secondDecrypted = decrypt(secondNum);

// index 3
thirdDecrypted = decrypt(thirdNum);

// display the decrypted number
document.writeln("<br>The decrypted number is: " + zeroDecrypted + firstDecrypted + secondDecrypted + thirdDecrypted);



