"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var c=t(function(H,g){
var n=require('@stdlib/math-base-special-powf/dist'),o=require('@stdlib/number-float64-base-to-float32/dist');function M(e,r,a,v,s,i,f,E){var u,p,y,q;if(e<=0)return i;if(u=E,e===1)return s?i[u]=n(r,v):i[u]=n(r,a),i;for(i[u]=n(r,a),u+=f,s&&(e-=1),p=o(e),y=o(o(v-a)/p),q=1;q<e;q++)i[u]=n(r,o(a+o(y*q))),u+=f;return s&&(i[u]=n(r,v)),i}g.exports=M
});var j=t(function(I,d){
var O=require('@stdlib/strided-base-stride2offset/dist'),h=c();function k(e,r,a,v,s,i,f){return h(e,r,a,v,s,i,f,O(e,f))}d.exports=k
});var _=t(function(J,R){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),A=c();z(m,"ndarray",A);R.exports=m
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=_(),l,w=C(B(__dirname,"./native.js"));D(w)?l=F:l=w;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
