import * as Triangle from './../js/triangle.js';

if ( process.env.NODE_ENV !== 'production' ) {
	console.log( 'Looks like we are in the development mode!' );
}
console.log( "index.js successfully run" );

function component() {
	// This line creates the html div element that webpack gets to control.
	let element = document.createElement( 'pre' );

	element.innerHTML = [ 'Hello webpack!' ];

	return element;
}

document.body.append( component() );

/*
$("#triangleSideLengths").submit(function(event) {
var sideOneInput = parseInt($("#sideOne").val());
var sideTwoInput = parseInt($("#sideTwo").val());
var sideTwoInput = parseInt($("#sideTwo").val());
var sideThreeInput = parseInt($("#sideThree").val());

event.preventDefault();
if (isNotTriangle(sideOneInput, sideTwoInput, sideThreeInput)) {
$("#formOutput").text("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.");
} else if (isEquilateral(sideOneInput, sideTwoInput, sideThreeInput)) {
$("#formOutput").text("Equilateral: All sides are equal.");
} else if (isIsosceles(sideOneInput, sideTwoInput, sideThreeInput)) {
$("#formOutput").text("Isosceles: Exactly 2 sides are equal.");
} else if (isScalene(sideOneInput, sideTwoInput, sideThreeInput)) {
$("#formOutput").text("Scalene: No sides are equal.");
} else {
console.log("else");
}
});
});
*/
