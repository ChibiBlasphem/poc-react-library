var ce=Object.defineProperty;var tn=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var nn=(t,n,e)=>n in t?ce(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,en=(t,n)=>{for(var e in n||(n={}))ue.call(n,e)&&nn(t,e,n[e]);if(tn)for(var e of tn(n))me.call(n,e)&&nn(t,e,n[e]);return t};import{R as de,r as St}from"./index.456e0965.js";import{P as p}from"./index.65f1d40b.js";import{s as nt}from"./styled-components.browser.esm.c92f8637.js";import{a as yt,j as K}from"./jsx-runtime.c15f1c78.js";/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ve={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"]},pe={prefix:"fas",iconName:"user",icon:[448,512,[62144,128100],"f007","M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"]};function be(t){const n=Math.floor(t/3600),e=Math.floor(t%3600/60);t<10?t=Math.round(t%60*10)/10:t=Math.round(t%60);let a="";return n>0&&(a+=`${n}h `),e>0&&(a+=`${e}m `),a+=`${t}s`,a}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function an(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?an(Object(e),!0).forEach(function(a){ye(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):an(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function lt(t){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},lt(t)}function ge(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function rn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function he(t,n,e){return n&&rn(t.prototype,n),e&&rn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ye(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function $t(t,n){return we(t)||Ae(t,n)||Nn(t,n)||Se()}function vt(t){return ke(t)||xe(t)||Nn(t)||Oe()}function ke(t){if(Array.isArray(t))return Pt(t)}function we(t){if(Array.isArray(t))return t}function xe(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ae(t,n){var e=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function Nn(t,n){if(!!t){if(typeof t=="string")return Pt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Pt(t,n)}}function Pt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var on=function(){},Yt={},_n={},Mn=null,Ln={mark:on,measure:on};try{typeof window!="undefined"&&(Yt=window),typeof document!="undefined"&&(_n=document),typeof MutationObserver!="undefined"&&(Mn=MutationObserver),typeof performance!="undefined"&&(Ln=performance)}catch{}var Pe=Yt.navigator||{},sn=Pe.userAgent,fn=sn===void 0?"":sn,z=Yt,g=_n,ln=Mn,rt=Ln;z.document;var _=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Rn=~fn.indexOf("MSIE")||~fn.indexOf("Trident/"),I="___FONT_AWESOME___",Ct=16,zn="fa",jn="svg-inline--fa",F="data-fa-i2svg",Et="data-fa-pseudo-element",Ce="data-fa-pseudo-element-pending",Bt="data-prefix",Wt="data-icon",cn="fontawesome-i2svg",Ee="async",Ie=["HTML","HEAD","STYLE","SCRIPT"],Dn=function(){try{return!0}catch{return!1}}(),Ut={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ct={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Fn={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Te={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ne=/fa[srltdbk\-\ ]/,$n="fa-layers-text",_e=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Me={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Yn=[1,2,3,4,5,6,7,8,9,10],Le=Yn.concat([11,12,13,14,15,16,17,18,19,20]),Re=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],D={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ze=[].concat(vt(Object.keys(ct)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",D.GROUP,D.SWAP_OPACITY,D.PRIMARY,D.SECONDARY]).concat(Yn.map(function(t){return"".concat(t,"x")})).concat(Le.map(function(t){return"w-".concat(t)})),Bn=z.FontAwesomeConfig||{};function je(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function De(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(g&&typeof g.querySelector=="function"){var Fe=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fe.forEach(function(t){var n=$t(t,2),e=n[0],a=n[1],r=De(je(e));r!=null&&(Bn[a]=r)})}var $e={familyPrefix:zn,styleDefault:"solid",replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Q=l(l({},$e),Bn);Q.autoReplaceSvg||(Q.observeMutations=!1);var d={};Object.keys(Q).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){Q[t]=e,ot.forEach(function(a){return a(d)})},get:function(){return Q[t]}})});z.FontAwesomeConfig=d;var ot=[];function Ye(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var L=Ct,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Be(t){if(!(!t||!_)){var n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return g.head.insertBefore(n,a),t}}var We="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){for(var t=12,n="";t-- >0;)n+=We[Math.random()*62|0];return n}function G(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Ht(t){return t.classList?G(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Wn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ue(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Wn(t[e]),'" ')},"").trim()}function pt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function Gt(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function He(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Ge(t){var n=t.transform,e=t.width,a=e===void 0?Ct:e,r=t.height,o=r===void 0?Ct:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&Rn?f+="translate(".concat(n.x/L-a/2,"em, ").concat(n.y/L-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/L,"em), calc(-50% + ").concat(n.y/L,"em)) "):f+="translate(".concat(n.x/L,"em, ").concat(n.y/L,"em) "),f+="scale(".concat(n.size/L*(n.flipX?-1:1),", ").concat(n.size/L*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Xe=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Un(){var t=zn,n=jn,e=d.familyPrefix,a=d.replacementClass,r=Xe;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var un=!1;function kt(){d.autoAddCss&&!un&&(Be(Un()),un=!0)}var Ve={mixout:function(){return{dom:{css:Un,insertCss:kt}}},hooks:function(){return{beforeDOMElementCreation:function(){kt()},beforeI2svg:function(){kt()}}}},T=z||{};T[I]||(T[I]={});T[I].styles||(T[I].styles={});T[I].hooks||(T[I].hooks={});T[I].shims||(T[I].shims=[]);var C=T[I],Hn=[],Ke=function t(){g.removeEventListener("DOMContentLoaded",t),ut=1,Hn.map(function(n){return n()})},ut=!1;_&&(ut=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),ut||g.addEventListener("DOMContentLoaded",Ke));function qe(t){!_||(ut?setTimeout(t,0):Hn.push(t))}function et(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Wn(t):"<".concat(n," ").concat(Ue(a),">").concat(o.map(et).join(""),"</").concat(n,">")}function mn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Qe=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},wt=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?Qe(e,r):e,f,u,c;for(a===void 0?(f=1,c=n[o[0]]):(f=0,c=a);f<i;f++)u=o[f],c=s(c,n[u],u,n);return c};function Je(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function It(t){var n=Je(t);return n.length===1?n[0].toString(16):null}function Ze(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function dn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Tt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=dn(n);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(t,dn(n)):C.styles[t]=l(l({},C.styles[t]||{}),o),t==="fas"&&Tt("fa",n)}var J=C.styles,ta=C.shims,na=Object.values(Fn),Xt=null,Gn={},Xn={},Vn={},Kn={},qn={},ea=Object.keys(Ut);function aa(t){return~ze.indexOf(t)}function ra(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!aa(r)?r:null}var Qn=function(){var n=function(o){return wt(J,function(i,s,f){return i[f]=wt(s,o,{}),i},{})};Gn=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Xn=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),qn=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in J||d.autoFetchSvg,a=wt(ta,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Vn=a.names,Kn=a.unicodes,Xt=bt(d.styleDefault)};Ye(function(t){Xt=bt(t.styleDefault)});Qn();function Vt(t,n){return(Gn[t]||{})[n]}function ia(t,n){return(Xn[t]||{})[n]}function B(t,n){return(qn[t]||{})[n]}function Jn(t){return Vn[t]||{prefix:null,iconName:null}}function oa(t){var n=Kn[t],e=Vt("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function j(){return Xt}var Kt=function(){return{prefix:null,iconName:null,rest:[]}};function bt(t){var n=Ut[t],e=ct[t]||ct[n],a=t in C.styles?t:null;return e||a||null}function gt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,o=t.reduce(function(i,s){var f=ra(d.familyPrefix,s);if(J[s]?(s=na.includes(s)?Te[s]:s,r=s,i.prefix=s):ea.indexOf(s)>-1?(r=s,i.prefix=bt(s)):f?i.iconName=f:s!==d.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var u=r==="fa"?Jn(i.iconName):{},c=B(i.prefix,i.iconName);u.prefix&&(r=null),i.iconName=u.iconName||c||i.iconName,i.prefix=u.prefix||i.prefix,i.prefix==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(i.prefix="fas")}return i},Kt());return(o.prefix==="fa"||r==="fa")&&(o.prefix=j()||"fas"),o}var sa=function(){function t(){ge(this,t),this.definitions={}}return he(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=l(l({},e.definitions[s]||{}),i[s]),Tt(s,i[s]);var f=Fn[s];f&&Tt(f,i[s]),Qn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,u=i.icon,c=u[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(e[s][m]=u)}),e[s][f]=u}),e}}]),t}(),vn=[],W={},H={},fa=Object.keys(H);function la(t,n){var e=n.mixoutsTo;return vn=t,W={},Object.keys(H).forEach(function(a){fa.indexOf(a)===-1&&delete H[a]}),vn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),lt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){W[i]||(W[i]=[]),W[i].push(o[i])})}a.provides&&a.provides(H)}),e}function Nt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=W[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function $(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=W[t]||[];r.forEach(function(o){o.apply(null,e)})}function N(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,n):void 0}function _t(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||j();if(!!n)return n=B(e,n)||n,mn(Zn.definitions,e,n)||mn(C.styles,e,n)}var Zn=new sa,ca=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,$("noAuto")},ua={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?($("beforeI2svg",n),N("pseudoElements2svg",n),N("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,qe(function(){da({autoReplaceSvgRoot:e}),$("watch",n)})}},ma={icon:function(n){if(n===null)return null;if(lt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:B(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=bt(n[0]);return{prefix:a,iconName:B(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.familyPrefix,"-"))>-1||n.match(Ne))){var r=gt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||j(),iconName:B(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=j();return{prefix:o,iconName:B(o,n)||n}}}},S={noAuto:ca,config:d,dom:ua,parse:ma,library:Zn,findIconDefinition:_t,toHtml:et},da=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?g:e;(Object.keys(C.styles).length>0||d.autoFetchSvg)&&_&&d.autoReplaceSvg&&S.dom.i2svg({node:a})};function ht(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return et(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!_){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function va(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(Gt(i)&&e.found&&!a.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=pt(l(l({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function pa(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(d.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function qt(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,u=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,b=v===void 0?!1:v,y=a.found?a:e,O=y.width,x=y.height,h=r==="fak",k=[d.replacementClass,o?"".concat(d.familyPrefix,"-").concat(o):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),w={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(x)})},P=h&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/x*16*.0625,"em")}:{};b&&(w.attributes[F]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||tt())},children:[f]}),delete w.attributes.title);var A=l(l({},w),{},{prefix:r,iconName:o,main:e,mask:a,maskId:u,transform:i,symbol:s,styles:l(l({},P),m.styles)}),M=a.found&&e.found?N("generateAbstractMask",A)||{children:[],attributes:{}}:N("generateAbstractIcon",A)||{children:[],attributes:{}},X=M.children,V=M.attributes;return A.children=X,A.attributes=V,s?pa(A):va(A)}function pn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,u=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(u[F]="");var c=l({},i.styles);Gt(r)&&(c.transform=Ge({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var m=pt(c);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[n]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function ba(t){var n=t.content,e=t.title,a=t.extra,r=l(l(l({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=pt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var xt=C.styles;function Mt(t){var n=t[0],e=t[1],a=t.slice(4),r=$t(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var ga={found:!1,width:512,height:512};function ha(t,n){!Dn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Lt(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=j()),new Promise(function(a,r){if(N("missingIconAbstract"),e==="fa"){var o=Jn(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&xt[n]&&xt[n][t]){var i=xt[n][t];return a(Mt(i))}ha(t,n),a(l(l({},ga),{},{icon:d.showMissingIcons&&t?N("missingIconAbstract")||{}:{}}))})}var bn=function(){},Rt=d.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:bn,measure:bn},q='FA "6.1.1"',ya=function(n){return Rt.mark("".concat(q," ").concat(n," begins")),function(){return te(n)}},te=function(n){Rt.mark("".concat(q," ").concat(n," ends")),Rt.measure("".concat(q," ").concat(n),"".concat(q," ").concat(n," begins"),"".concat(q," ").concat(n," ends"))},Qt={begin:ya,end:te},st=function(){};function gn(t){var n=t.getAttribute?t.getAttribute(F):null;return typeof n=="string"}function ka(t){var n=t.getAttribute?t.getAttribute(Bt):null,e=t.getAttribute?t.getAttribute(Wt):null;return n&&e}function wa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function xa(){if(d.autoReplaceSvg===!0)return ft.replace;var t=ft[d.autoReplaceSvg];return t||ft.replace}function Aa(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Oa(t){return g.createElement(t)}function ne(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Aa:Oa:e;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(ne(i,{ceFn:a}))}),r}function Sa(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var ft={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(ne(r),e)}),e.getAttribute(F)===null&&d.keepOriginalSource){var a=g.createComment(Sa(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~Ht(e).indexOf(d.replacementClass))return ft.replace(n);var r=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return et(s)}).join(`
`);e.setAttribute(F,""),e.innerHTML=i}};function hn(t){t()}function ee(t,n){var e=typeof n=="function"?n:st;if(t.length===0)e();else{var a=hn;d.mutateApproach===Ee&&(a=z.requestAnimationFrame||hn),a(function(){var r=xa(),o=Qt.begin("mutate");t.map(r),o(),e()})}}var Jt=!1;function ae(){Jt=!0}function zt(){Jt=!1}var mt=null;function yn(t){if(!!ln&&!!d.observeMutations){var n=t.treeCallback,e=n===void 0?st:n,a=t.nodeCallback,r=a===void 0?st:a,o=t.pseudoElementsCallback,i=o===void 0?st:o,s=t.observeMutationsRoot,f=s===void 0?g:s;mt=new ln(function(u){if(!Jt){var c=j();G(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!gn(m.addedNodes[0])&&(d.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&gn(m.target)&&~Re.indexOf(m.attributeName))if(m.attributeName==="class"&&ka(m.target)){var v=gt(Ht(m.target)),b=v.prefix,y=v.iconName;m.target.setAttribute(Bt,b||c),y&&m.target.setAttribute(Wt,y)}else wa(m.target)&&r(m.target)})}}),_&&mt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pa(){!mt||mt.disconnect()}function Ca(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function Ea(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=gt(Ht(t));return r.prefix||(r.prefix=j()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=ia(r.prefix,t.innerText)||Vt(r.prefix,It(t.innerText))),r}function Ia(t){var n=G(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||tt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ta(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ea(t),a=e.iconName,r=e.prefix,o=e.rest,i=Ia(t),s=Nt("parseNodeAttributes",{},t),f=n.styleParser?Ca(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var Na=C.styles;function re(t){var n=d.autoReplaceSvg==="nest"?kn(t,{styleParser:!1}):kn(t);return~n.extra.classes.indexOf($n)?N("generateLayersText",t,n):N("generateSvgReplacementMutation",t,n)}function wn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var e=g.documentElement.classList,a=function(m){return e.add("".concat(cn,"-").concat(m))},r=function(m){return e.remove("".concat(cn,"-").concat(m))},o=d.autoFetchSvg?Object.keys(Ut):Object.keys(Na),i=[".".concat($n,":not([").concat(F,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(F,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=G(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Qt.begin("onTree"),u=s.reduce(function(c,m){try{var v=re(m);v&&c.push(v)}catch(b){Dn||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(v){ee(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(v){f(),m(v)})})}function _a(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;re(t).then(function(e){e&&ee([e],n)})}function Ma(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:_t(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:_t(r||{})),t(a,l(l({},e),{},{mask:r}))}}var La=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?E:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,u=e.maskId,c=u===void 0?null:u,m=e.title,v=m===void 0?null:m,b=e.titleId,y=b===void 0?null:b,O=e.classes,x=O===void 0?[]:O,h=e.attributes,k=h===void 0?{}:h,w=e.styles,P=w===void 0?{}:w;if(!!n){var A=n.prefix,M=n.iconName,X=n.icon;return ht(l({type:"icon"},n),function(){return $("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(y||tt()):(k["aria-hidden"]="true",k.focusable="false")),qt({icons:{main:Mt(X),mask:f?Mt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:M,transform:l(l({},E),r),symbol:i,title:v,maskId:c,titleId:y,extra:{attributes:k,styles:P,classes:x}})})}},Ra={mixout:function(){return{icon:Ma(La)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=wn,e.nodeCallback=_a,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?g:a,o=e.callback,i=o===void 0?function(){}:o;return wn(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(b,y){Promise.all([Lt(r,s),c.iconName?Lt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var x=$t(O,2),h=x[0],k=x[1];b([e,qt({icons:{main:h,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:m,title:o,titleId:i,extra:v,watchable:!0})])}).catch(y)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=pt(s);f.length>0&&(r.style=f);var u;return Gt(i)&&(u=N("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},za={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return ht({type:"layer"},function(){$("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(vt(o)).join(" ")},children:i}]})}}}},ja={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,u=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return ht({type:"counter",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:a}),ba({content:e.toString(),title:o,extra:{attributes:u,styles:m,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(vt(s))}})})}}}},Da={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?E:r,i=a.title,s=i===void 0?null:i,f=a.classes,u=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,b=v===void 0?{}:v;return ht({type:"text",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:a}),pn({content:e,transform:l(l({},E),o),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.familyPrefix,"-layers-text")].concat(vt(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(Rn){var u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,f=c.height/u}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,pn({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Fa=new RegExp('"',"ug"),xn=[1105920,1112319];function $a(t){var n=t.replace(Fa,""),e=Ze(n,0),a=e>=xn[0]&&e<=xn[1],r=n.length===2?n[0]===n[1]:!1;return{value:It(r?n[0]:n),isSecondary:a||r}}function An(t,n){var e="".concat(Ce).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=G(t.children),i=o.filter(function(M){return M.getAttribute(Et)===n})[0],s=z.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(_e),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ct[f[2].toLowerCase()]:Me[u],b=$a(m),y=b.value,O=b.isSecondary,x=f[0].startsWith("FontAwesome"),h=Vt(v,y),k=h;if(x){var w=oa(y);w.iconName&&w.prefix&&(h=w.iconName,v=w.prefix)}if(h&&!O&&(!i||i.getAttribute(Bt)!==v||i.getAttribute(Wt)!==k)){t.setAttribute(e,k),i&&t.removeChild(i);var P=Ta(),A=P.extra;A.attributes[Et]=n,Lt(h,v).then(function(M){var X=qt(l(l({},P),{},{icons:{main:M,mask:Kt()},prefix:v,iconName:k,extra:A,watchable:!0})),V=g.createElement("svg");n==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=X.map(function(Y){return et(Y)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ya(t){return Promise.all([An(t,"::before"),An(t,"::after")])}function Ba(t){return t.parentNode!==document.head&&!~Ie.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Et)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function On(t){if(!!_)return new Promise(function(n,e){var a=G(t.querySelectorAll("*")).filter(Ba).map(Ya),r=Qt.begin("searchPseudoElements");ae(),Promise.all(a).then(function(){r(),zt(),n()}).catch(function(){r(),zt(),e()})})}var Wa={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=On,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?g:a;d.searchPseudoElements&&On(r)}}},Sn=!1,Ua={mixout:function(){return{dom:{unwatch:function(){ae(),Sn=!0}}}},hooks:function(){return{bootstrap:function(){yn(Nt("mutationObserverCallbacks",{}))},noAuto:function(){Pa()},watch:function(e){var a=e.observeMutationsRoot;Sn?zt():yn(Nt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Pn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Ha={mixout:function(){return{parse:{transform:function(e){return Pn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Pn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(u," ").concat(c)},v={transform:"translate(".concat(i/2*-1," -256)")},b={outer:s,inner:m,path:v};return{tag:"g",attributes:l({},b.outer),children:[{tag:"g",attributes:l({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),b.path)}]}]}}}},At={x:0,y:0,width:"100%",height:"100%"};function Cn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ga(t){return t.tag==="g"?t.children:[t]}var Xa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?gt(r.split(" ").map(function(i){return i.trim()})):Kt();return o.prefix||(o.prefix=j()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,u=o.width,c=o.icon,m=i.width,v=i.icon,b=He({transform:f,containerWidth:m,iconWidth:u}),y={tag:"rect",attributes:l(l({},At),{},{fill:"white"})},O=c.children?{children:c.children.map(Cn)}:{},x={tag:"g",attributes:l({},b.inner),children:[Cn(l({tag:c.tag,attributes:l(l({},c.attributes),b.path)},O))]},h={tag:"g",attributes:l({},b.outer),children:[x]},k="mask-".concat(s||tt()),w="clip-".concat(s||tt()),P={tag:"mask",attributes:l(l({},At),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,h]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Ga(v)},P]};return a.push(A,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(k,")")},At)}),{children:a,attributes:r}}}},Va={provides:function(n){var e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ka={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},qa=[Ve,Ra,za,ja,Da,Wa,Ua,Ha,Xa,Va,Ka];la(qa,{mixoutsTo:S});S.noAuto;S.config;S.library;S.dom;var jt=S.parse;S.findIconDefinition;S.toHtml;var Qa=S.icon;S.layer;S.text;S.counter;function En(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function R(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?En(Object(e),!0).forEach(function(a){U(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):En(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function dt(t){return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},dt(t)}function U(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Ja(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function ie(t,n){if(t==null)return{};var e=Ja(t,n),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(e[a]=t[a]))}return e}function Dt(t){return Za(t)||tr(t)||nr(t)||er()}function Za(t){if(Array.isArray(t))return Ft(t)}function tr(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nr(t,n){if(!!t){if(typeof t=="string")return Ft(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ft(t,n)}}function Ft(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function er(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(t){var n,e=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,f=t.spin,u=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,b=t.inverse,y=t.border,O=t.listItem,x=t.flip,h=t.size,k=t.rotation,w=t.pull,P=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":v,"fa-inverse":b,"fa-border":y,"fa-li":O,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},U(n,"fa-".concat(h),typeof h!="undefined"&&h!==null),U(n,"fa-rotate-".concat(k),typeof k!="undefined"&&k!==null&&k!==0),U(n,"fa-pull-".concat(w),typeof w!="undefined"&&w!==null),U(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(P).map(function(A){return P[A]?A:null}).filter(function(A){return A})}function rr(t){return t=t-0,t===t}function oe(t){return rr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ir=["style"];function or(t){return t.charAt(0).toUpperCase()+t.slice(1)}function sr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=oe(e.slice(0,a)),o=e.slice(a+1).trim();return r.startsWith("webkit")?n[or(r)]=o:n[r]=o,n},{})}function se(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return se(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,u){var c=n.attributes[u];switch(u){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=sr(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=c:f.attrs[oe(u)]=c}return f},{attrs:{}}),o=e.style,i=o===void 0?{}:o,s=ie(e,ir);return r.attrs.style=R(R({},r.attrs.style),i),t.apply(void 0,[n.tag,R(R({},r.attrs),s)].concat(Dt(a)))}var fe=!1;try{fe=!0}catch{}function fr(){if(!fe&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function In(t){if(t&&dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jt.icon)return jt.icon(t);if(t===null)return null;if(t&&dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ot(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?U({},t,n):{}}var lr=["forwardedRef"];function at(t){var n=t.forwardedRef,e=ie(t,lr),a=e.icon,r=e.mask,o=e.symbol,i=e.className,s=e.title,f=e.titleId,u=e.maskId,c=In(a),m=Ot("classes",[].concat(Dt(ar(e)),Dt(i.split(" ")))),v=Ot("transform",typeof e.transform=="string"?jt.transform(e.transform):e.transform),b=Ot("mask",In(r)),y=Qa(c,R(R(R(R({},m),v),b),{},{symbol:o,title:s,titleId:f,maskId:u}));if(!y)return fr("Could not find icon",c),null;var O=y.abstract,x={ref:n};return Object.keys(e).forEach(function(h){at.defaultProps.hasOwnProperty(h)||(x[h]=e[h])}),cr(O[0],x)}at.displayName="FontAwesomeIcon";at.propTypes={beat:p.bool,border:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf(["horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};at.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var cr=se.bind(null,de.createElement);const it=5,ur=nt.div`
  position: relative;
  width: 100%;
  height: ${it}px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: ${it/2}px;
  overflow: hidden;

  .elapsed {
    position: absolute;
    background-color: #2a66a1;
    height: 100%;
    left: 0;
    transition: width 0.5s;
    border-top-right-radius: ${it/2}px;
    border-bottom-right-radius: ${it/2}px;
  }
`,le=nt.div`
  text-align: left;
  margin-bottom: 5px;
`,mr=nt(le)`
  margin-top: 10px;
`,dr=nt(le)`
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Tn=nt(at)`
  margin-right: 10px;
`,vr=(t,n)=>{if(t===void 0)return{percentage:void 0,remainingTime:void 0};const e=Math.min(99,Math.round(100*n/t)),a=Math.round(t-n);return{percentage:e,remainingTime:a}},pr=t=>{const[n,e]=St.exports.useState(t),a=()=>e(0);return St.exports.useEffect(()=>{const r=setInterval(()=>{e(o=>o+1)},1e3);return()=>{clearInterval(r)}},[]),{reset:a,delta:n}},br=t=>t===void 0?"no time estimation available":`about ${be(t)} remaining`;function Z({planned:t,elapsed:n=0,triggerer:e}){const{reset:a,delta:r}=pr(0),{percentage:o,remainingTime:i}=vr(t,n+r),s=br(i);return St.exports.useEffect(()=>{a()},[n]),yt("div",{role:"progressbar","aria-valuenow":o,"aria-valuemin":0,"aria-valuemax":100,children:[t!==void 0&&K(ur,{children:K("div",{className:"elapsed","data-testid":"progressbar-elapsed",style:{width:`${o}%`}})}),yt(mr,{children:[K(Tn,{icon:ve})," ",s]}),yt(dr,{children:[K(Tn,{icon:pe})," initiated by ",e]})]})}try{Z.displayName="ProgressBar",Z.__docgenInfo={description:"",displayName:"ProgressBar",props:{planned:{defaultValue:null,description:"",name:"planned",required:!1,type:{name:"number"}},elapsed:{defaultValue:null,description:"",name:"elapsed",required:!1,type:{name:"number"}},triggerer:{defaultValue:null,description:"",name:"triggerer",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:Z.__docgenInfo,name:"ProgressBar",path:"src/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch{}var Or={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const NoEstimationBar = Template.bind({});

export const WithEstimation = Template.bind({});
WithEstimation.args = {
  planned: 30,
};

export const WithTriggerer = Template.bind({});
WithTriggerer.args = {
  triggerer: 'ChibiKookie',
};
`,locationsMap:{"no-estimation-bar":{startLoc:{col:53,line:9},endLoc:{col:88,line:9},startBody:{col:53,line:9},endBody:{col:88,line:9}},"with-estimation":{startLoc:{col:53,line:9},endLoc:{col:88,line:9},startBody:{col:53,line:9},endBody:{col:88,line:9}},"with-triggerer":{startLoc:{col:53,line:9},endLoc:{col:88,line:9},startBody:{col:53,line:9},endBody:{col:88,line:9}}}}},title:"ProgressBar",component:Z};const Zt=t=>K(Z,en({},t)),Sr=Zt.bind({}),gr=Zt.bind({});gr.args={planned:30};const hr=Zt.bind({});hr.args={triggerer:"ChibiKookie"};const Pr=["NoEstimationBar","WithEstimation","WithTriggerer"];export{Sr as NoEstimationBar,gr as WithEstimation,hr as WithTriggerer,Pr as __namedExportsOrder,Or as default};
//# sourceMappingURL=ProgressBar.stories.2eb37665.js.map
