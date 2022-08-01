// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",w=p()?function(r){var n,t,e,o,i;if(null==r)return v.call(r);t=r[s],i=s,n=null!=(o=r)&&b.call(o,i);try{r[s]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[s]=t:delete r[s],e}:function(r){return v.call(r)},d=Number,m=d.prototype.toString,h=p();function A(r){return"object"==typeof r&&(r instanceof d||(h?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function _(r){return l(r)||A(r)}c(_,"isPrimitive",l),c(_,"isObject",A);var g=Number.POSITIVE_INFINITY,j=d.NEGATIVE_INFINITY,U=Math.floor;function O(r){return U(r)===r}function I(r){return r<g&&r>j&&O(r)}function E(r){return l(r)&&I(r)}function S(r){return A(r)&&I(r.valueOf())}function T(r){return E(r)||S(r)}function N(r){return E(r)&&r>=0}function F(r){return S(r)&&r.valueOf()>=0}function P(r){return N(r)||F(r)}function H(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function G(r){return r!=r}function L(r){return O(r/2)}function V(r){return L(r>0?r-1:r+1)}function W(r){return r===g||r===j}c(T,"isPrimitive",E),c(T,"isObject",S),c(P,"isPrimitive",N),c(P,"isObject",F);var x=Math.sqrt;function M(r){return Math.abs(r)}var X,k="function"==typeof Uint32Array,C="function"==typeof Uint32Array?Uint32Array:null,Y="function"==typeof Uint32Array?Uint32Array:void 0;X=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(k&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var q,Q=X,R="function"==typeof Float64Array,z="function"==typeof Float64Array?Float64Array:null,B="function"==typeof Float64Array?Float64Array:void 0;q=function(){var r,n,t;if("function"!=typeof z)return!1;try{n=new z([1,3.14,-3.14,NaN]),t=n,r=(R&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,J=q,K="function"==typeof Uint8Array,Z="function"==typeof Uint8Array?Uint8Array:null,$="function"==typeof Uint8Array?Uint8Array:void 0;D=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,256,257]),t=n,r=(K&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var rr,nr=D,tr="function"==typeof Uint16Array,er="function"==typeof Uint16Array?Uint16Array:null,or="function"==typeof Uint16Array?Uint16Array:void 0;rr=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,65536,65537]),t=n,r=(tr&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ir,ur={uint16:rr,uint8:nr};(ir=new ur.uint16(1))[0]=4660;var fr,ar,cr=52===new ur.uint8(ir.buffer)[0];!0===cr?(fr=1,ar=0):(fr=0,ar=1);var lr={HIGH:fr,LOW:ar},yr=new J(1),pr=new Q(yr.buffer),vr=lr.HIGH,br=lr.LOW;function sr(r,n){return yr[0]=n,r[0]=pr[vr],r[1]=pr[br],r}function wr(r,n){return 1===arguments.length?sr([0,0],r):sr(r,n)}var dr=!0===cr?0:1,mr=new J(1),hr=new Q(mr.buffer);function Ar(r,n){return mr[0]=r,hr[dr]=n>>>0,mr[0]}function _r(r){return 0|r}var gr,jr,Ur=!0===cr?1:0,Or=new J(1),Ir=new Q(Or.buffer);function Er(r){return Or[0]=r,Ir[Ur]}!0===cr?(gr=1,jr=0):(gr=0,jr=1);var Sr={HIGH:gr,LOW:jr},Tr=new J(1),Nr=new Q(Tr.buffer),Fr=Sr.HIGH,Pr=Sr.LOW;function Hr(r,n){return Nr[Fr]=r,Nr[Pr]=n,Tr[0]}var Gr=[0,0];function Lr(r,n){var t,e;return wr(Gr,r),t=Gr[0],t&=2147483647,e=Er(n),Hr(t|=e&=2147483648,Gr[1])}var Vr=!0===cr?1:0,Wr=new J(1),xr=new Q(Wr.buffer);function Mr(r,n){return Wr[0]=r,xr[Vr]=n>>>0,Wr[0]}var Xr=1023,kr=1048576,Cr=[1,1.5],Yr=[0,.5849624872207642],qr=[0,1.350039202129749e-8];function Qr(r,n){return G(n)||W(n)?(r[0]=n,r[1]=0,r):0!==n&&M(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Rr=[0,0],zr=[0,0];function Br(r,n){var t,e;return 0===n||0===r||G(r)||W(r)?r:(function(r,n){1===arguments.length?Qr([0,0],r):Qr(r,n)}(Rr,r),n+=Rr[1],n+=function(r){var n=Er(r);return(n=(2146435072&n)>>>20)-Xr|0}(r=Rr[0]),n<-1074?Lr(0,r):n>1023?r<0?j:g:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,wr(zr,r),t=zr[0],t&=2148532223,e*Hr(t|=n+Xr<<20,zr[1])))}var Dr=2147483647,Jr=1048575,Kr=1048576,Zr=2147483647,$r=1083179008,rn=1e300,nn=1e-300,tn=[0,0],en=[0,0];function on(r,n){var t,e,o,i,u,f,a,c,l,y,p,v,b,s;if(G(r)||G(n))return NaN;if(wr(tn,n),u=tn[0],0===tn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return x(r);if(-.5===n)return 1/x(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(W(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:M(r)<1==(n===g)?0:g}(r,n)}if(wr(tn,r),i=tn[0],0===tn[1]){if(0===i)return function(r,n){return n===j?g:n===g?0:n>0?V(n)?r:0:V(n)?Lr(g,r):g}(r,n);if(1===r)return 1;if(-1===r&&V(n))return-1;if(W(r))return r===j?on(-0,-n):n<0?0:g}if(r<0&&!1===O(n))return(r-r)/(r-r);if(o=M(r),t=i&Zr|0,e=u&Zr|0,a=u>>>31|0,f=(f=i>>>31|0)&&V(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Er(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*rn*rn:f*nn*nn;if(t>1072693248)return 0===a?f*rn*rn:f*nn*nn;p=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Ar(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(en,o)}else p=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,b,s,w,d,m,h,A,_,g,j;return A=0,t<kr&&(A-=53,t=Er(n*=9007199254740992)),A+=(t>>20)-Xr|0,t=1072693248|(_=1048575&t|0),_<=235662?g=0:_<767610?g=1:(g=0,A+=1,t-=kr),u=Ar(o=(m=(n=Mr(n,t))-(c=Cr[g]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Mr(0,e+=g<<18),d=(i=o*o)*i*(0===(j=i)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Ar(a=3+(i=u*u)+(d+=(f=h*(m-u*a-u*(n-(a-c))))*(u+o)),0),s=(v=-7.028461650952758e-9*(y=Ar(y=(m=u*a)+(h=f*a+(d-(a-3-i))*o),0))+.9617966939259756*(h-(y-m))+qr[g])-((b=Ar(b=(p=.9617967009544373*y)+v+(l=Yr[g])+(w=A),0))-w-l-p),r[0]=b,r[1]=s,r}(en,o,t);if(y=(n-(c=Ar(n,0)))*p[0]+n*p[1],l=c*p[0],wr(tn,v=y+l),b=_r(tn[0]),s=_r(tn[1]),b>=$r){if(0!=(b-$r|s))return f*rn*rn;if(y+8008566259537294e-32>v-l)return f*rn*rn}else if((b&Zr)>=1083231232){if(0!=(b-3230714880|s))return f*nn*nn;if(y<=v-l)return f*nn*nn}return v=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&Dr|0)>>20)-Xr|0,c=0,l>1071644672&&(o=Mr(0,((c=r+(Kr>>y+1)>>>0)&~(Jr>>(y=((c&Dr)>>20)-Xr|0)))>>>0),c=(c&Jr|Kr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=_r(r=Er(a=1-((a=(i=.6931471824645996*(o=Ar(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Br(a,c):Mr(a,r)}(b,l,y),f*v}function un(r,n,t){var e,o,i,u;if(0===t)return[];for(i=(n-r)/(o=t-1),e=[on(10,r)],u=1;u<o;u++)e.push(on(10,r+i*u));return e.push(on(10,n)),e}return function(r,n,t){if(!l(r)||G(r))throw new TypeError(H("00X31",r));if(!l(n)||G(n))throw new TypeError(H("00X32",n));if(arguments.length<3)t=10;else if(!N(t))throw new TypeError(H("00X2Q",t));return un(r,n,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logspace=n();
//# sourceMappingURL=index.js.map
