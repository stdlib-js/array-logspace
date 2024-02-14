// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var S=String.fromCharCode,_=isNaN,j=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,f,l,s,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){return"string"==typeof r}function F(r){var e,t;if(!k(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[O(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var V=Object.prototype,N=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,G=V.__lookupGetter__,H=V.__lookupSetter__,L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};function W(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&X.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",B=Z()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[z],e=Y(r,z);try{r[z]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[z]=t:delete r[z],n}:function(r){return M.call(r)},D=Number,J=D.prototype.toString,K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return C(r)||Q(r)}W(rr,"isPrimitive",C),W(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,tr=D.NEGATIVE_INFINITY,nr=Math.floor;function ir(r){return nr(r)===r}function or(r){return r<er&&r>tr&&ir(r)}function ar(r){return C(r)&&or(r)}function ur(r){return Q(r)&&or(r.valueOf())}function cr(r){return ar(r)||ur(r)}function fr(r){return ar(r)&&r>=0}function lr(r){return ur(r)&&r.valueOf()>=0}function sr(r){return fr(r)||lr(r)}function pr(r){return r!=r}function yr(r){return ir(r/2)}function gr(r){return yr(r>0?r-1:r+1)}function dr(r){return r===er||r===tr}W(cr,"isPrimitive",ar),W(cr,"isObject",ur),W(sr,"isPrimitive",fr),W(sr,"isObject",lr);var vr=Math.sqrt;function hr(r){return Math.abs(r)}var br,wr=Object.prototype.toString,mr="function"==typeof Symbol?Symbol:void 0,Ar="function"==typeof mr?mr.toStringTag:"",Er=Z()?function(r){var e,t,n;if(null==r)return wr.call(r);t=r[Ar],e=Y(r,Ar);try{r[Ar]=void 0}catch(e){return wr.call(r)}return n=wr.call(r),e?r[Ar]=t:delete r[Ar],n}:function(r){return wr.call(r)},Sr="function"==typeof Uint32Array,_r="function"==typeof Uint32Array?Uint32Array:null,jr="function"==typeof Uint32Array?Uint32Array:void 0;br=function(){var r,e,t;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Sr&&t instanceof Uint32Array||"[object Uint32Array]"===Er(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Ur,xr=br,Ir=Object.prototype.toString,Tr="function"==typeof Symbol?Symbol:void 0,Or="function"==typeof Tr?Tr.toStringTag:"",kr=Z()?function(r){var e,t,n;if(null==r)return Ir.call(r);t=r[Or],e=Y(r,Or);try{r[Or]=void 0}catch(e){return Ir.call(r)}return n=Ir.call(r),e?r[Or]=t:delete r[Or],n}:function(r){return Ir.call(r)},Fr="function"==typeof Float64Array,Vr="function"==typeof Float64Array?Float64Array:null,Nr="function"==typeof Float64Array?Float64Array:void 0;Ur=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr([1,3.14,-3.14,NaN]),t=e,r=(Fr&&t instanceof Float64Array||"[object Float64Array]"===kr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Pr,$r=Ur,Gr="function"==typeof Uint8Array,Hr="function"==typeof Uint8Array?Uint8Array:null,Lr="function"==typeof Uint8Array?Uint8Array:void 0;Pr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr(e=[1,3.14,-3.14,256,257]),t=e,r=(Gr&&t instanceof Uint8Array||"[object Uint8Array]"===Er(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Wr,Cr=Pr,Rr="function"==typeof Uint16Array,Zr="function"==typeof Uint16Array?Uint16Array:null,Mr="function"==typeof Uint16Array?Uint16Array:void 0;Wr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Rr&&t instanceof Uint16Array||"[object Uint16Array]"===Er(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Xr,Yr={uint16:Wr,uint8:Cr};(Xr=new Yr.uint16(1))[0]=4660;var qr,zr,Br=52===new Yr.uint8(Xr.buffer)[0];!0===Br?(qr=1,zr=0):(qr=0,zr=1);var Dr={HIGH:qr,LOW:zr},Jr=new $r(1),Kr=new xr(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,t,n){return Jr[0]=r,e[n]=Kr[Qr],e[n+t]=Kr[re],e}function te(r){return ee(r,[0,0],1,0)}W(te,"assign",ee);var ne=!0===Br?0:1,ie=new $r(1),oe=new xr(ie.buffer);function ae(r,e){return ie[0]=r,oe[ne]=e>>>0,ie[0]}function ue(r){return 0|r}var ce,fe,le=2147483647,se=!0===Br?1:0,pe=new $r(1),ye=new xr(pe.buffer);function ge(r){return pe[0]=r,ye[se]}!0===Br?(ce=1,fe=0):(ce=0,fe=1);var de={HIGH:ce,LOW:fe},ve=new $r(1),he=new xr(ve.buffer),be=de.HIGH,we=de.LOW;function me(r,e){return he[be]=r,he[we]=e,ve[0]}var Ae=[0,0];function Ee(r,e){var t,n;return te.assign(r,Ae,1,0),t=Ae[0],t&=le,n=ge(e),me(t|=n&=2147483648,Ae[1])}var Se=!0===Br?1:0,_e=new $r(1),je=new xr(_e.buffer);function Ue(r,e){return _e[0]=r,je[Se]=e>>>0,_e[0]}var xe=1023,Ie=1048576,Te=[1,1.5],Oe=[0,.5849624872207642],ke=[0,1.350039202129749e-8];function Fe(r,e,t,n){return pr(r)||dr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&hr(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return Fe(r,[0,0],1,0)}),"assign",Fe);var Ve=[0,0],Ne=[0,0];function Pe(r,e){var t,n;return 0===e||0===r||pr(r)||dr(r)?r:(Fe(r,Ve,1,0),e+=Ve[1],e+=function(r){var e=ge(r);return(e=(2146435072&e)>>>20)-xe|0}(r=Ve[0]),e<-1074?Ee(0,r):e>1023?r<0?tr:er:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,te.assign(r,Ne,1,0),t=Ne[0],t&=2148532223,n*me(t|=e+xe<<20,Ne[1])))}var $e=1048575,Ge=1048576,He=1083179008,Le=1e300,We=1e-300,Ce=[0,0],Re=[0,0];function Ze(r,e){var t,n,i,o,a,u,c,f,l,s,p,y,g,d;if(pr(r)||pr(e))return NaN;if(te.assign(e,Ce,1,0),a=Ce[0],0===Ce[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return vr(r);if(-.5===e)return 1/vr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(dr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:hr(r)<1==(e===er)?0:er}(r,e)}if(te.assign(r,Ce,1,0),o=Ce[0],0===Ce[1]){if(0===o)return function(r,e){return e===tr?er:e===er?0:e>0?gr(e)?r:0:gr(e)?Ee(er,r):er}(r,e);if(1===r)return 1;if(-1===r&&gr(e))return-1;if(dr(r))return r===tr?Ze(-0,-e):e<0?0:er}if(r<0&&!1===ir(e))return(r-r)/(r-r);if(i=hr(r),t=o&le|0,n=a&le|0,c=a>>>31|0,u=(u=o>>>31|0)&&gr(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(ge(r)&le)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===c?u*Le*Le:u*We*We;if(t>1072693248)return 0===c?u*Le*Le:u*We*We;p=function(r,e){var t,n,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=ae(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=t,r}(Re,i)}else p=function(r,e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,v,h,b,w,m,A,E,S;return m=0,t<Ie&&(m-=53,t=ge(e*=9007199254740992)),m+=(t>>20)-xe|0,t=1072693248|(A=1048575&t|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,t-=Ie),a=ae(i=(b=(e=Ue(e,t))-(f=Te[E]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=Ue(0,n+=E<<18),h=(o=i*i)*o*(0===(S=o)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),c=ae(c=3+(o=a*a)+(h+=(u=w*(b-a*c-a*(e-(c-f))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=ae(s=(b=a*c)+(w=u*c+(h-(c-3-o))*i),0))+.9617966939259756*(w-(s-b))+ke[E])-((g=ae(g=(p=.9617967009544373*s)+y+(l=Oe[E])+(v=m),0))-v-l-p),r[0]=g,r[1]=d,r}(Re,i,t);if(y=(s=(e-(f=ae(e,0)))*p[0]+e*p[1])+(l=f*p[0]),te.assign(y,Ce,1,0),g=ue(Ce[0]),d=ue(Ce[1]),g>=He){if(0!=(g-He|d))return u*Le*Le;if(s+8008566259537294e-32>y-l)return u*Le*Le}else if((g&le)>=1083231232){if(0!=(g-3230714880|d))return u*We*We;if(s<=y-l)return u*We*We}return y=function(r,e,t){var n,i,o,a,u,c,f,l,s,p;return s=((l=r&le|0)>>20)-xe|0,f=0,l>1071644672&&(i=Ue(0,((f=r+(Ge>>s+1)>>>0)&~($e>>(s=((f&le)>>20)-xe|0)))>>>0),f=(f&$e|Ge)>>20-s>>>0,r<0&&(f=-f),e-=i),r=ue(r=ge(c=1-((c=(o=.6931471824645996*(i=ae(i=t+e,0)))+(a=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Pe(c,f):Ue(c,r)}(g,l,s),u*y}function Me(r,e,t){var n,i,o,a;if(0===t)return[];for(o=(e-r)/(i=t-1),n=[Ze(10,r)],a=1;a<i;a++)n.push(Ze(10,r+o*a));return n.push(Ze(10,e)),n}return function(r,e,t){if(!C(r)||pr(r))throw new TypeError(F("invalid argument. Exponent of start value must be numeric. Value: `%s`.",r));if(!C(e)||pr(e))throw new TypeError(F("invalid argument. Exponent of stop value must be numeric. Value: `%s`.",e));if(arguments.length<3)t=10;else if(!fr(t))throw new TypeError(F("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));return Me(r,e,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logspace=e();
//# sourceMappingURL=index.js.map
