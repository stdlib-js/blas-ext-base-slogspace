<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# slogspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a single-precision floating-point strided array with logarithmically spaced values over a specified interval.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-slogspace
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var slogspace = require( '@stdlib/blas-ext-base-slogspace' );
```

#### slogspace( N, base, start, stop, endpoint, x, strideX )

Fills a single-precision floating-point strided array with logarithmically spaced values over a specified interval.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

slogspace( x.length, 10.0, 0.0, 5.0, true, x, 1 );
// x => <Float32Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **base**: base of the logarithmic scale.
-   **start**: exponent of the starting value, where the starting value is given by `base^start`.
-   **stop**: exponent of the final value, where the final value is given by `base^stop`.
-   **endpoint**: boolean indicating whether to include the `base^stop` value when writing values to the input array. If `true`, the input array is filled with logarithmically spaced values over the closed interval `[base^start, base^stop]`. If `false`, the input array is filled with logarithmically spaced values over the half-open interval `[base^start, base^stop)`.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

slogspace( 4, 10.0, 0.0, 3.0, true, x, 2 );
// x => <Float32Array>[ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0, 1000.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial array...
var x0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
slogspace( 3, 10.0, 0.0, 2.0, true, x1, 2 );
// x0 => <Float32Array>[ 0.0, 1.0, 0.0, 10.0, 0.0, 100.0 ]
```

#### slogspace.ndarray( N, base, start, stop, endpoint, x, strideX, offsetX )

Fills a single-precision floating-point strided array with logarithmically spaced values over a specified interval using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

slogspace.ndarray( x.length, 10.0, 0.0, 5.0, true, x, 1, 0 );
// x => <Float32Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

slogspace.ndarray( 3, 10.0, 0.0, 2.0, true, x, 1, x.length-3 );
// x => <Float32Array>[ 0.0, 0.0, 0.0, 1.0, 10.0, 100.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Let `M` be the number of generated values (which is either `N` or `N+1` depending on whether `endpoint` is `true` or `false`, respectively). The spacing between the exponents is thus given by

    ```text
    Δ = (stop-start)/(M-1)
    ```

    and the generated values are equal to `base^(start+Δ*i)` for `i = 0, 1, ..., M-1`.

-   When the number of generated values is greater than `1` and `endpoint` is `true`, the set of values written to a provided input array is guaranteed to include the `base^start` and `base^stop` values. Beware, however, that values between `base^start` and `base^stop` are subject to floating-point rounding errors. Hence,

    ```javascript
    var Float32Array = require( '@stdlib/array-float32' );

    var x = new Float32Array( [ 0.0, 0.0, 0.0 ] );

    slogspace( 3, 10.0, 0.0, 1.0, true, x, 1 );
    // x => <Float32Array>[ 1.0, ~3.16, 10.0 ]
    ```

    where `x[1]` is only guaranteed to be approximately equal to the square root of `10`.

-   When `N = 1` and `endpoint` is `false`, only the `base^start` value is written to a provided input array. When `N = 1` and `endpoint` is `true`, only the `base^stop` value is written to a provided input array.

-   If `start < stop`, the exponents are written to a provided input array in ascending order; otherwise, they are written in descending order.

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var slogspace = require( '@stdlib/blas-ext-base-slogspace' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( x );

slogspace( x.length, 10.0, 0.0, 9.0, true, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/slogspace.h"
```

#### stdlib_strided_slogspace( N, base, start, stop, endpoint, \*X, strideX )

Fills a single-precision floating-point strided array with logarithmically spaced values over a specified interval.

```c
#include <stdbool.h>

float x[] = { 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_slogspace( 4, 10.0f, 0.0f, 3.0f, true, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **base**: `[in] float` base of the logarithmic scale.
-   **start**: `[in] float` exponent of the starting value.
-   **stop**: `[in] float` exponent of the final value.
-   **endpoint**: `[in] bool` boolean indicating whether to include the `base^stop` value when writing values to the input array. If `true`, the input array is filled with logarithmically spaced values over the closed interval `[base^start, base^stop]`. If `false`, the input array is filled with logarithmically spaced values over the half-open interval `[base^start, base^stop)`.
-   **X**: `[out] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
void stdlib_strided_slogspace( const CBLAS_INT N, const float base, const float start, const float stop, const bool endpoint, float *X, const CBLAS_INT strideX );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_slogspace_ndarray( N, base, start, stop, endpoint, \*X, strideX, offsetX )

Fills a single-precision floating-point strided array with logarithmically spaced values over a specified interval using alternative indexing semantics.

```c
#include <stdbool.h>

float x[] = { 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_slogspace_ndarray( 4, 10.0f, 0.0f, 3.0f, true, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **base**: `[in] float` base of the logarithmic scale.
-   **start**: `[in] float` exponent of the starting value.
-   **stop**: `[in] float` exponent of the final value.
-   **endpoint**: `[in] bool` boolean indicating whether to include the `base^stop` value when writing values to the input array. If `true`, the input array is filled with logarithmically spaced values over the closed interval `[base^start, base^stop]`. If `false`, the input array is filled with logarithmically spaced values over the half-open interval `[base^start, base^stop)`.
-   **X**: `[out] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
void stdlib_strided_slogspace_ndarray( const CBLAS_INT N, const float base, const float start, const float stop, const bool endpoint, float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/slogspace.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
    // Create a strided array:
    float x[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Fill the array:
    stdlib_strided_slogspace( N, 10.0f, 0.0f, 7.0f, true, x, strideX );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %f\n", i, x[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-slogspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-slogspace

[test-image]: https://github.com/stdlib-js/blas-ext-base-slogspace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-slogspace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-slogspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-slogspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-slogspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-slogspace/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-slogspace/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-slogspace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-slogspace/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-slogspace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-slogspace/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-slogspace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-slogspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-slogspace/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
