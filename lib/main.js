/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var format = require( '@stdlib/string-format' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var gen = require( '@stdlib/array-base-logspace' );


// MAIN //

/**
* Generates a logarithmically spaced numeric array.
*
* @param {number} a - exponent of start value
* @param {number} b - exponent of end value
* @param {NonNegativeInteger} [len=10] - length of output array
* @throws {TypeError} first argument must be numeric
* @throws {TypeError} second argument must be numeric
* @throws {TypeError} third argument must be a nonnegative integer
* @returns {Array} logarithmically spaced numeric array
*
* @example
* var arr = logspace( 0, 2, 6 );
* // returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
*/
function logspace( a, b, len ) {
	if ( !isNumber( a ) || isnan( a ) ) {
		throw new TypeError( format( 'invalid argument. Exponent of start value must be numeric. Value: `%s`.', a ) );
	}
	if ( !isNumber( b ) || isnan( b ) ) {
		throw new TypeError( format( 'invalid argument. Exponent of stop value must be numeric. Value: `%s`.', b ) );
	}
	if ( arguments.length < 3 ) {
		len = 10;
	} else if ( !isNonNegativeInteger( len ) ) {
		throw new TypeError( format( 'invalid argument. Length must be a nonnegative integer. Value: `%s`.', len ) );
	}
	return gen( a, b, len );
}


// EXPORTS //

module.exports = logspace;
