import * as Triangle from './../js/triangle.js';
import 'bootstrap/dist/css/bootstrap.min.css';

if(process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in the development mode!');
}

$(document).ready(function () {
	$('#triangleSideLengths').submit(function (event) {
		event.preventDefault();
		var sideOneInput = parseInt($("#sideA").val());
		var sideTwoInput = parseInt($("#sideB").val());
		var sideThreeInput = parseInt($("#sideC").val());

		event.preventDefault();
		if(Triangle.isNotTriangle(sideOneInput, sideTwoInput, sideThreeInput)) {
			$("#formOutput").text("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.");
		} else if(Triangle.isEquilateral(sideOneInput, sideTwoInput, sideThreeInput)) {
			$("#formOutput").text("Equilateral: All sides are equal.");
		} else if(Triangle.isIsosceles(sideOneInput, sideTwoInput, sideThreeInput)) {
			$("#formOutput").text("Isosceles: Exactly 2 sides are equal.");
		} else if(Triangle.isScalene(sideOneInput, sideTwoInput, sideThreeInput)) {
			$("#formOutput").text("Scalene: No sides are equal.");
		} else {
			console.log("else");
		}
	});
});
