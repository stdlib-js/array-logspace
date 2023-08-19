// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,v=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",w=p()?function(r){var n,t,e,o,i;if(null==r)return s.call(r);t=r[b],i=b,n=null!=(o=r)&&v.call(o,i);try{r[b]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[b]=t:delete r[b],e}:function(r){return s.call(r)},d=Number,m=d.prototype.toString,A=p();function h(r){return"object"==typeof r&&(r instanceof d||(A?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function _(r){return l(r)||h(r)}c(_,"isPrimitive",l),c(_,"isObject",h);var g=Number.POSITIVE_INFINITY,j=d.NEGATIVE_INFINITY,U=Math.floor;function O(r){return U(r)===r}function I(r){return r<g&&r>j&&O(r)}function E(r){return l(r)&&I(r)}function S(r){return h(r)&&I(r.valueOf())}function T(r){return E(r)||S(r)}function N(r){return E(r)&&r>=0}function F(r){return S(r)&&r.valueOf()>=0}function P(r){return N(r)||F(r)}function H(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function G(r){return r!=r}function M(r){return O(r/2)}function L(r){return M(r>0?r-1:r+1)}function V(r){return r===g||r===j}c(T,"isPrimitive",E),c(T,"isObject",S),c(P,"isPrimitive",N),c(P,"isObject",F);var W=Math.sqrt;function k(r){return Math.abs(r)}var x,q="function"==typeof Uint32Array,C="function"==typeof Uint32Array?Uint32Array:null,Y="function"==typeof Uint32Array?Uint32Array:void 0;x=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(q&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var R,Z=x,z="function"==typeof Float64Array,B="function"==typeof Float64Array?Float64Array:null,D="function"==typeof Float64Array?Float64Array:void 0;R=function(){var r,n,t;if("function"!=typeof B)return!1;try{n=new B([1,3.14,-3.14,NaN]),t=n,r=(z&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=R,Q="function"==typeof Uint8Array,X="function"==typeof Uint8Array?Uint8Array:null,$="function"==typeof Uint8Array?Uint8Array:void 0;J=function(){var r,n,t;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,256,257]),t=n,r=(Q&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var rr,nr=J,tr="function"==typeof Uint16Array,er="function"==typeof Uint16Array?Uint16Array:null,or="function"==typeof Uint16Array?Uint16Array:void 0;rr=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,65536,65537]),t=n,r=(tr&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ir,ur={uint16:rr,uint8:nr};(ir=new ur.uint16(1))[0]=4660;var fr,ar,cr=52===new ur.uint8(ir.buffer)[0];!0===cr?(fr=1,ar=0):(fr=0,ar=1);var lr={HIGH:fr,LOW:ar},yr=new K(1),pr=new Z(yr.buffer),sr=lr.HIGH,vr=lr.LOW;function br(r,n,t,e){return yr[0]=r,n[e]=pr[sr],n[e+t]=pr[vr],n}function wr(r){return br(r,[0,0],1,0)}c(wr,"assign",br);var dr=!0===cr?0:1,mr=new K(1),Ar=new Z(mr.buffer);function hr(r,n){return mr[0]=r,Ar[dr]=n>>>0,mr[0]}function _r(r){return 0|r}var gr,jr,Ur=2147483647,Or=!0===cr?1:0,Ir=new K(1),Er=new Z(Ir.buffer);function Sr(r){return Ir[0]=r,Er[Or]}!0===cr?(gr=1,jr=0):(gr=0,jr=1);var Tr={HIGH:gr,LOW:jr},Nr=new K(1),Fr=new Z(Nr.buffer),Pr=Tr.HIGH,Hr=Tr.LOW;function Gr(r,n){return Fr[Pr]=r,Fr[Hr]=n,Nr[0]}var Mr=[0,0];function Lr(r,n){var t,e;return wr.assign(r,Mr,1,0),t=Mr[0],t&=Ur,e=Sr(n),Gr(t|=e&=2147483648,Mr[1])}var Vr=!0===cr?1:0,Wr=new K(1),kr=new Z(Wr.buffer);function xr(r,n){return Wr[0]=r,kr[Vr]=n>>>0,Wr[0]}var qr=1023,Cr=1048576,Yr=[1,1.5],Rr=[0,.5849624872207642],Zr=[0,1.350039202129749e-8];function zr(r,n,t,e){return G(r)||V(r)?(n[e]=r,n[e+t]=0,n):0!==r&&k(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return zr(r,[0,0],1,0)}),"assign",zr);var Br=[0,0],Dr=[0,0];function Jr(r,n){var t,e;return 0===n||0===r||G(r)||V(r)?r:(zr(r,Br,1,0),n+=Br[1],n+=function(r){var n=Sr(r);return(n=(2146435072&n)>>>20)-qr|0}(r=Br[0]),n<-1074?Lr(0,r):n>1023?r<0?j:g:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,wr.assign(r,Dr,1,0),t=Dr[0],t&=2148532223,e*Gr(t|=n+qr<<20,Dr[1])))}var Kr=1048575,Qr=1048576,Xr=1083179008,$r=1e300,rn=1e-300,nn=[0,0],tn=[0,0];function en(r,n){var t,e,o,i,u,f,a,c,l,y,p,s,v,b;if(G(r)||G(n))return NaN;if(wr.assign(n,nn,1,0),u=nn[0],0===nn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return W(r);if(-.5===n)return 1/W(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(V(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:k(r)<1==(n===g)?0:g}(r,n)}if(wr.assign(r,nn,1,0),i=nn[0],0===nn[1]){if(0===i)return function(r,n){return n===j?g:n===g?0:n>0?L(n)?r:0:L(n)?Lr(g,r):g}(r,n);if(1===r)return 1;if(-1===r&&L(n))return-1;if(V(r))return r===j?en(-0,-n):n<0?0:g}if(r<0&&!1===O(n))return(r-r)/(r-r);if(o=k(r),t=i&Ur|0,e=u&Ur|0,a=u>>>31|0,f=(f=i>>>31|0)&&L(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Sr(r)&Ur)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*$r*$r:f*rn*rn;if(t>1072693248)return 0===a?f*$r*$r:f*rn*rn;p=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=hr(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(tn,o)}else p=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,s,v,b,w,d,m,A,h,_,g,j;return h=0,t<Cr&&(h-=53,t=Sr(n*=9007199254740992)),h+=(t>>20)-qr|0,t=1072693248|(_=1048575&t|0),_<=235662?g=0:_<767610?g=1:(g=0,h+=1,t-=Cr),u=hr(o=(m=(n=xr(n,t))-(c=Yr[g]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=xr(0,e+=g<<18),d=(i=o*o)*i*(0===(j=i)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=hr(a=3+(i=u*u)+(d+=(f=A*(m-u*a-u*(n-(a-c))))*(u+o)),0),b=(s=-7.028461650952758e-9*(y=hr(y=(m=u*a)+(A=f*a+(d-(a-3-i))*o),0))+.9617966939259756*(A-(y-m))+Zr[g])-((v=hr(v=(p=.9617967009544373*y)+s+(l=Rr[g])+(w=h),0))-w-l-p),r[0]=v,r[1]=b,r}(tn,o,t);if(s=(y=(n-(c=hr(n,0)))*p[0]+n*p[1])+(l=c*p[0]),wr.assign(s,nn,1,0),v=_r(nn[0]),b=_r(nn[1]),v>=Xr){if(0!=(v-Xr|b))return f*$r*$r;if(y+8008566259537294e-32>s-l)return f*$r*$r}else if((v&Ur)>=1083231232){if(0!=(v-3230714880|b))return f*rn*rn;if(y<=s-l)return f*rn*rn}return s=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&Ur|0)>>20)-qr|0,c=0,l>1071644672&&(o=xr(0,((c=r+(Qr>>y+1)>>>0)&~(Kr>>(y=((c&Ur)>>20)-qr|0)))>>>0),c=(c&Kr|Qr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=_r(r=Sr(a=1-((a=(i=.6931471824645996*(o=hr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Jr(a,c):xr(a,r)}(v,l,y),f*s}function on(r,n,t){var e,o,i,u;if(0===t)return[];for(i=(n-r)/(o=t-1),e=[en(10,r)],u=1;u<o;u++)e.push(en(10,r+i*u));return e.push(en(10,n)),e}return function(r,n,t){if(!l(r)||G(r))throw new TypeError(H("0152p,Mj",r));if(!l(n)||G(n))throw new TypeError(H("0152q,Mk",n));if(arguments.length<3)t=10;else if(!N(t))throw new TypeError(H("0152F,MZ",t));return on(r,n,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logspace=n();
//# sourceMappingURL=index.js.map
