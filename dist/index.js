"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=t(function(G,p){
var f=require('@stdlib/math-base-special-powf/dist');function w(e,r,a,s,v,i,n,_){var u,l,o;if(e<=0)return i;if(u=_,e===1)return v?i[u]=f(r,s):i[u]=f(r,a),i;for(i[u]=f(r,a),u+=n,v&&(e-=1),l=(s-a)/e,o=1;o<e;o++)i[u]=f(r,a+l*o),u+=n;return v&&(i[u]=f(r,s)),i}p.exports=w
});var g=t(function(H,y){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=q();function h(e,r,a,s,v,i,n){return O(e,r,a,s,v,i,n,E(e,n))}y.exports=h
});var m=t(function(I,j){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=g(),z=q();k(d,"ndarray",z);j.exports=d
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=m(),c,R=B(A(__dirname,"./native.js"));C(R)?c=D:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
