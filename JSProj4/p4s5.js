/**
 * @author Sharon Tender
 * Distance with Pythagorean Theorem: This script will determine the distance between two coordinates entered by user.
 */
var ax, ay, bx, by, cx, cy, c;

function start() {
	var buttonCalcDist = document.getElementById('calculate_distance');
	buttonCalcDist.addEventListener("click", distance, false);
}

// math function
function distance() {
	var elementAx = document.getElementById('point-Ax');
	ax = parseInt(elementAx.value);

	var elementAy = document.getElementById('point-Ay');
	ay = parseInt(elementAy.value);

	var elementBx = document.getElementById('point-Bx');
	bx = parseInt(elementBx.value);

	var elementBy = document.getElementById('point-By');
	by = parseInt(elementBy.value);

	// math (ax - bx)sq + (ay - by)sq = (c)sq
	cx = ax - bx;
	cy = ay - by;
	console.log(cx, cy);
	cx2 = cx * cx;
	cy2 = cy * cy;
	console.log(cx2, cy2);
	c = cx2 + cy2;
	console.log(c);
	c2 = c * c;
	console.log(c2);

	var result = document.getElementById( "result" );
	result.innerHTML = "The distance between A and B is: " + Math.sqrt(c2).toFixed(1);
}


window.addEventListener( "load", start, false );