<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a logarithmically spaced numeric array.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-logspace
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var logspace = require( '@stdlib/array-logspace' );
```

#### logspace( a, b\[, length] )

Generates a logarithmically spaced numeric `array` between `10^a` and `10^b`. If a `length` is not provided, the default output `array` length is `10`.

```javascript
var arr = logspace( 0, 2, 6 );
// returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output `array` includes the values `10^a` and `10^b`. **Beware** of floating point errors, including for the first and last `array` elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logspace = require( '@stdlib/array-logspace' );
var out;

// Default behavior:
out = logspace( 0, 3 );
console.log( out.join( '\n' ) );

// Specify length:
out = logspace( 0, 3, 100 );
console.log( out.join( '\n' ) );

// Create an array with decremented values:
out = logspace( 3, 0, 10 );
console.log( out.join( '\n' ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/incrspace`][@stdlib/array/incrspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array using a provided increment.</span>
-   <span class="package-name">[`@stdlib/array/linspace`][@stdlib/array/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-logspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-logspace

[test-image]: https://github.com/stdlib-js/array-logspace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-logspace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-logspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-logspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-logspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-logspace/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-logspace/tree/deno
[umd-url]: https://github.com/stdlib-js/array-logspace/tree/umd
[esm-url]: https://github.com/stdlib-js/array-logspace/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-logspace/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/incrspace]: https://github.com/stdlib-js/array-incrspace

[@stdlib/array/linspace]: https://github.com/stdlib-js/array-linspace

<!-- </related-links> -->

</section>

<!-- /.links -->
