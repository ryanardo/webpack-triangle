// export class Triangle {
// 	constructor( sideA, sideB, sideC ) {
// 		this.sideA = sideA;
// 		this.sideB = sideB;
// 		this.sideC = sideC;
// 		this.type = checkType( sideA, sideB, sideC );
// 	}
// }

export function checkType( sideA, sideB, sideC ) {
	if ( isNotTriangle( sideA, sideB, sideC ) ) {
		return "not a triangle";
	} else if ( isScalene( sideA, sideB, sideC ) ) {
		return "Scalene";
	} else if ( isEquilateral( sideA, sideB, sideC ) ) {
		return "Equilateral";
	} else if ( isIsosceles( sideA, sideB, sideC ) ) {
		return "Isosceles";
	} else {
		return "invalid input";
	}
}


export function isNotTriangle( sideA, sideB, sideC ) {
	if ( ( sideA > sideB + sideC ) || ( sideB > sideA + sideC ) || ( sideC > sideA + sideB ) ) {
		return true;
	} else {
		return false;
	}
}

export function isScalene( sideA, sideB, sideC ) {
	if ( sideA !== sideB && sideB !== sideC ) {
		return true;
	} else {
		return false;
	}
}

export function isEquilateral( sideA, sideB, sideC ) {
	if ( sideA === sideB && sideB === sideC ) {
		return true;
	} else {
		return false;
	}
}

export function isIsosceles( sideA, sideB, sideC ) {
	if ( ( sideA === sideB ) || ( sideB === sideC ) || ( sideA === sideC ) ) {
		return true;
	} else {
		return false;
	}
}
