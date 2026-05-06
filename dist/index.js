"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=o(function(l,a){
var n=require('@stdlib/assert-is-number/dist').isPrimitive,v=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,t=require('@stdlib/error-tools-fmtprodmsg/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/array-base-logspace/dist');function g(r,e,i){if(!n(r)||u(r))throw new TypeError(t('0152p',r));if(!n(e)||u(e))throw new TypeError(t('0152q',e));if(arguments.length<3)i=10;else if(!v(i))throw new TypeError(t('0152F',i));return m(r,e,i)}a.exports=g
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
