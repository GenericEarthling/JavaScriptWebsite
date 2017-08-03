/**
 * @author Sharon Tender
 */

var prodNum;
var prodName;
var qty;
var subTotal, total;
var price;
var grandTotal=0;
var validInput = true;
var index = 0;

var count = prompt("Enter the number of items: ");
numItems = parseInt(count);

do {
   prodNum = prompt( "Enter the item number between 1 and 5", "1" );
   var quantity = prompt("Enter the quantity. ", "1");
   qty = parseInt(quantity);

   switch ( prodNum )
   {
      case "1":
         prodName = "Coffee";
         price = 2.98;
         subTotal = qty * price;
         break;
      case "2":
         prodName = "Donuts";
         price = 4.5;
         subTotal = qty * price;
         break;
      case "3":
         prodName = "Cake";
         price = 9.98;
         subTotal = qty * price;
         break;
      case "4":
         prodName = "Muffin";
         price = 4.49;
         subTotal = qty * price;
         break;
      case "5":
         prodName = "Ice Cream";
         price = 6.87;
         subTotal = qty * price;
         break;
      default:
         validInput = false;
         break;
   }
   grandTotal += subTotal;

   if ( validInput === true ) {
      document.writeln( prodName + ":  " + qty + "qty.  $" + price.toFixed(2) + "/ea. Subtotal: $" + subTotal.toFixed(2) + "<br>");
   } else {
      document.writeln( "Invalid choice: " + prodNum );
   }

index ++;
} while (index < numItems );

document.writeln( "<br>Grand Total: $" + grandTotal.toFixed(2) );



