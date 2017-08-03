/**
 * @author Sharon Tender
 * Odd Table: This script will create a table with the product of all the odd numbers up to number 15.
 *
 */
document.writeln( "<table>" );

for ( var i = 1; i <= 15; i+=2 ) {
	document.writeln( "<tr>" );

	for ( var j = 1; j <= 15; j+=2 )
	document.writeln( "<td>&nbsp;" + j + " x " + i + " = " + j*i + "&nbsp;</td>" );
	document.writeln( "</tr>" );
}
document.writeln( "</table>" );