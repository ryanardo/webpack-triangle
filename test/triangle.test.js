import * as Triangle from '../app/js/triangle.js';
const assert = require( 'assert' );

describe( 'Triangle', function () {

	describe( 'isNotTriangle', function () {
		it( 'should return false.', function () {
			assert.equal( true, Triangle.isNotTriangle( 5, 5, 95 ) );
		} );
	} );

	describe( 'isScalene', function () {
		it( 'should return square of input value', function () {
			assert.equal( true, Triangle.isScalene( 1, 2, 3 ) );
		} );
	} );

	describe( 'isEquilateral', function () {
		it( 'should return square of input value', function () {
			assert.equal( true, Triangle.isEquilateral( 3, 3, 3 ) );
		} );
	} );

	describe( 'isIsosceles', function () {
		it( 'should return square of input value', function () {
			assert.equal( true, Triangle.isIsosceles( 2, 2, 4 ) );
		} );
	} );

	describe( 'checkType', function () {
		it( "should tell me what kind of triangle has been input", function () {
			assert.equal( "Equilateral", Triangle.checkType( 5, 5, 5 ) );
		} );
	} );
} );
