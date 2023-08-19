// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-logspace@esm/index.mjs";function n(n,m,o){if(!s(n)||t(n))throw new TypeError(r("0152p,Mj",n));if(!s(m)||t(m))throw new TypeError(r("0152q,Mk",m));if(arguments.length<3)o=10;else if(!e(o))throw new TypeError(r("0152F,MZ",o));return i(n,m,o)}export{n as default};
//# sourceMappingURL=index.mjs.map
