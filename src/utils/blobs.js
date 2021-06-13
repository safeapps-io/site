/**
 * Essentially, I cloned this library: https://github.com/g-harel/blobs
 * I built it into ES modules and copied the output. Probably should also
 * make a PR to support modules.
 *
 * MIT License
 * Copyright (c) Gabriel Harel
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

// prettier-ignore
var rand=function(n){var t,e,o,r,n=function(n){for(var t=2166136261,e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return function(){return t+=t<<13,t^=t>>>7,t+=t<<3,t^=t>>>17,(t+=t<<5)>>>0}}(n);return t=n(),e=n(),o=n(),r=n(),function(){var n=(t>>>=0)+(e>>>=0)|0;return t=e^e>>>9,e=(o>>>=0)+(o<<3)|0,o=(o=o<<21|o>>>11)+(n=n+(r=(r>>>=0)+1|0)|0)|0,(n>>>0)/4294967296}},__assign=function(){return(__assign=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},copyPoint=function(n){return{x:n.x,y:n.y,handleIn:__assign({},n.handleIn),handleOut:__assign({},n.handleOut)}},forPoints=function(e,o){function n(n){function t(n){return copyPoint(e[mod(n,e.length)])}o({curr:copyPoint(e[n]),index:n,sibling:t,prev:function(){return t(n-1)},next:function(){return t(n+1)}})}for(var t=0;t<e.length;t++)n(t)},mapPoints=function(n,t){var e=[];return forPoints(n,function(n){e.push(t(n))}),e},angleOf=function(n,t){var e=t.x-n.x,n=-t.y+n.y,e=Math.atan2(n,e);return e<0?Math.abs(e):2*Math.PI-e},expandHandle=function(n,t){return{x:n.x+t.length*Math.cos(t.angle),y:n.y+t.length*Math.sin(t.angle)}},smooth=function(n,r){return mapPoints(n,function(n){var t=n.curr,e=n.next,o=n.prev,n=angleOf(o(),e());return{x:t.x,y:t.y,handleIn:{angle:n+Math.PI,length:r*distance(t,o())},handleOut:{angle:n,length:r*distance(t,e())}}})},mod=function(n,t){return(n%t+t)%t},distance=function(n,t){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))},genBlob=function(n,t){for(var e=2*Math.PI/n,o=[],r=0;r<n;r++){var i=t(),a=Math.sin(r*e),s=Math.cos(r*e);o.push({x:.5+a*i,y:.5+s*i,handleIn:{angle:0,length:0},handleOut:{angle:0,length:0}})}var h=4/3*Math.tan(e/4)/Math.sin(e/2)/2;return smooth(o,h)},genFromOptions=function(n){var t=rand(String(n.seed)),e=1/(1+n.randomness/10),o=genBlob(3+n.extraPoints,function(){return(e+t()*(1-e))/2}),r=n.size;return mapPoints(o,function(n){n=n.curr;return n.x*=r,n.y*=r,n.handleIn.length*=r,n.handleOut.length*=r,n})},renderPath=function(n){var o="M"+n[0].x+","+n[0].y;return forPoints(n,function(n){var t=n.curr,e=(0,n.next)(),n=expandHandle(t,t.handleOut),t=expandHandle(e,e.handleIn);o+="C"+n.x+","+n.y+","+t.x+","+t.y+","+e.x+","+e.y}),o},renderPath2D=function(n){var o=new Path2D;return n.length<1||(o.moveTo(n[0].x,n[0].y),forPoints(n,function(n){var t=n.curr,e=(0,n.next)(),n=expandHandle(t,t.handleOut),t=expandHandle(e,e.handleIn);o.bezierCurveTo(n.x,n.y,t.x,t.y,e.x,e.y)})),o},typeCheck=function(n,t,e){var o=typeof t;if("number"===o&&isNaN(t)&&(o="NaN"),!e.includes(o="object"===o&&null===t?"null":o))throw'"'+n+'" should have type "'+e.join("|")+'" but was "'+o+'".'},checkBlobOptions=function(n){typeCheck("blobOptions",n,["object"]);var t=n.seed,e=n.extraPoints,o=n.randomness,n=n.size;if(typeCheck("blobOptions.seed",t,["string","number"]),typeCheck("blobOptions.extraPoints",e,["number"]),e<0)throw'blobOptions.extraPoints is invalid "'+e+'".';if(typeCheck("blobOptions.randomness",o,["number"]),o<0)throw'blobOptions.randomness is invalid "'+o+'".';if(typeCheck("blobOptions.size",n,["number"]),n<0)throw'blobOptions.size is invalid "'+n+'".'},checkCanvasOptions=function(n){var t;typeCheck("canvasOptions",n,["object","undefined"]),n&&(t=n.offsetX,n=n.offsetY,typeCheck("canvasOptions.offsetX",t,["number","undefined"]),typeCheck("canvasOptions.offsetY",n,["number","undefined"]))},checkSvgOptions=function(n){var t,e;typeCheck("svgOptions",n,["object","undefined"]),n&&(t=n.fill,e=n.stroke,n=n.strokeWidth,typeCheck("svgOptions.fill",t,["string","undefined"]),typeCheck("svgOptions.stroke",e,["string","undefined"]),typeCheck("svgOptions.strokeWidth",n,["number","undefined"]))},canvasPath=function(n,t){void 0===t&&(t={});try{checkBlobOptions(n),checkCanvasOptions(t)}catch(n){throw"(blobs2): "+n}return renderPath2D(mapPoints(genFromOptions(n),function(n){n=n.curr;return n.x+=t.offsetX||0,n.y+=t.offsetY||0,n}))},svg=function(n,t){void 0===t&&(t={});try{checkBlobOptions(n),checkSvgOptions(t)}catch(n){throw"(blobs2): "+n}var e=svgPath(n),o=Math.floor(n.size),n=void 0===t.fill?"#ec576b":t.fill;return('\n<svg width="'+o+'" height="'+o+'" viewBox="0 0 '+o+" "+o+'" xmlns="http://www.w3.org/2000/svg">\n    <path stroke="'+(void 0===t.stroke?"none":t.stroke)+'" stroke-width="'+(void 0===t.strokeWidth?0:t.strokeWidth)+'" fill="'+n+'" d="'+e+'"/>\n</svg>').trim()},svgPath=function(n){try{checkBlobOptions(n)}catch(n){throw"(blobs2): "+n}return renderPath(genFromOptions(n))};
export { canvasPath, svg, svgPath };
