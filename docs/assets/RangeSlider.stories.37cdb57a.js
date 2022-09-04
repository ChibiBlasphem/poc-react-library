var ce=Object.defineProperty,de=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var te=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))ne.call(t,n)&&te(e,n,t[n]);if(Y)for(var n of Y(t))oe.call(t,n)&&te(e,n,t[n]);return e},W=(e,t)=>de(e,ue(t));var X=(e,t)=>{var n={};for(var o in e)ne.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Y)for(var o of Y(e))t.indexOf(o)<0&&oe.call(e,o)&&(n[o]=e[o]);return n};import{r as i}from"./index.456e0965.js";import{s as L,C as q}from"./styled-components.browser.esm.71203842.js";import{r as pe}from"./index.a4f708ad.js";import{j as C,a as N,F as ae}from"./jsx-runtime.c15f1c78.js";const se=i.exports.createContext(null);function $({children:e,container:t}){const[n,o]=i.exports.useState(null);return i.exports.useEffect(()=>{o(t.current)},[t]),C(se.Provider,{value:n,children:e})}function j(e){var n,o;const t=i.exports.useContext(se);return(o=t!=null?t:(n=e.current)==null?void 0:n.ownerDocument)!=null?o:document}try{$.displayName="DOMContextProvider",$.__docgenInfo={description:"",displayName:"DOMContextProvider",props:{container:{defaultValue:null,description:"",name:"container",required:!0,type:{name:"RefObject<HTMLElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/contexts/DOMContextContext.tsx#DOMContextProvider"]={docgenInfo:$.__docgenInfo,name:"DOMContextProvider",path:"src/contexts/DOMContextContext.tsx#DOMContextProvider"})}catch{}try{j.displayName="useDOMContext",j.__docgenInfo={description:"",displayName:"useDOMContext",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/contexts/DOMContextContext.tsx#useDOMContext"]={docgenInfo:j.__docgenInfo,name:"useDOMContext",path:"src/contexts/DOMContextContext.tsx#useDOMContext"})}catch{}const le=i.exports.createContext({add(e){return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},remove(e){window.removeEventListener("scroll",e)}});function U({children:e,targetRef:t}){const n=i.exports.useMemo(()=>({add:o=>{const r=t.current;return r?(r.addEventListener("scroll",o),()=>{r.removeEventListener("scroll",o)}):()=>{}},remove:o=>{const r=t.current;!r||r.removeEventListener("scroll",o)}}),[t]);return C(le.Provider,{value:n,children:e})}function fe(){return i.exports.useContext(le)}try{U.displayName="ScrollProvider",U.__docgenInfo={description:"",displayName:"ScrollProvider",props:{targetRef:{defaultValue:null,description:"",name:"targetRef",required:!0,type:{name:"RefObject<El>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/contexts/ScrollContext.tsx#ScrollProvider"]={docgenInfo:U.__docgenInfo,name:"ScrollProvider",path:"src/contexts/ScrollContext.tsx#ScrollProvider"})}catch{}const K=10,me=["left","right"],ge=["top","bottom"],re=e=>me.includes(e),ie=e=>ge.includes(e);function S(e,t,n){return typeof t=="number"?t*n:t(e)*n}function he(e,t){var s,f,d,m;const n=S(e.innerHeight,(s=t.top)!=null?s:K,1),o=S(e.innerHeight,(f=t.bottom)!=null?f:K,-1),r=S(e.innerWidth,(d=t.left)!=null?d:K,1),a=S(e.innerWidth,(m=t.right)!=null?m:K,-1);return{top:n,right:a,bottom:o,left:r}}function G(e,t,n,{mainAxis:o=0,crossAxis:r=0,anchor:a=0}){switch(n){case"right":return{top:Math.round(e.top+S(t.height,r,-1)+S(e.height,a,1)),left:Math.round(e.left+e.width+S(t.width,o,1))};case"left":return{top:Math.round(e.top+S(t.height,r,-1)+S(e.height,a,1)),left:Math.round(e.left-t.width+S(t.width,o,-1))};case"top":return{top:Math.round(e.top-t.height+S(t.height,o,-1)),left:Math.round(e.left+S(t.width,r,-1)+S(e.width,a,1))};case"bottom":return{top:Math.round(e.top+e.height+S(t.height,o,1)),left:Math.round(e.left+S(t.width,r,-1)+S(e.width,a,1))}}}function ve(e,t,n={}){const{orientation:o="left",offset:r={},surroundingOffset:a={},shouldRelayout:s,reflectMainAxisWhenCropped:f=!1,moveCrossAxisWhenCropped:d=!1}=n,m=fe(),O=i.exports.useRef(o),[y,p]=i.exports.useState(o),[T,h]=i.exports.useState(0),[E,A]=i.exports.useState({top:0,left:0}),R=i.exports.useRef(E);O.current!==o&&(O.current=o,p(o));const M=r.mainAxis,V=r.crossAxis,k=r.anchor,l=i.exports.useCallback(()=>{var ee;const c={mainAxis:M,crossAxis:V,anchor:k};if(!e.current||!t.current||s&&!s())return;const u=(ee=e.current.ownerDocument)==null?void 0:ee.defaultView;if(!u)return;const b=e.current.getBoundingClientRect(),v=t.current.getBoundingClientRect();let{top:_,left:w}=G(b,v,o,c);const x=he(u,a),Q=_+v.height>u.innerHeight+x.bottom||_<x.top,Z=w+v.width>u.innerWidth+x.right||w<x.left;if(f){let D=o;if(re(o)&&Z){const g=o==="left"?"right":"left",{top:I,left:H}=G(b,v,g,c);H+v.width<=u.innerWidth+x.right&&H>=x.left&&(D=g,_=I,w=H)}if(ie(o)&&Q){const g=o==="top"?"bottom":"top",{top:I,left:H}=G(b,v,g,c);I+v.height<=u.innerHeight+x.bottom&&I>=x.top&&(D=g,_=I,w=H)}p(D)}if(d){let D=0;if(re(o)&&Q){let g;_<x.top?g=Math.min(x.top,b.top):_+v.height>u.innerHeight+x.bottom&&(g=Math.max(u.innerHeight+x.bottom-v.height,b.top+b.height-v.height)),g&&(D=g-_,_=g)}if(ie(o)&&Z){let g;w<x.left?g=Math.min(x.left,b.left):w+v.width>u.innerWidth+x.right&&(g=Math.max(u.innerWidth+x.right-v.width,b.left+b.width-v.width)),g&&(D=g-w,w=g)}h(D)}R.current.top===_&&R.current.left===w||(R.current={top:_,left:w},A({top:_,left:w}))},[a,M,V,k,o,f,d,e,t,s]);return i.exports.useLayoutEffect(()=>{if(!e.current||s&&!s())return;const c=e.current.ownerDocument;if(!c)return;const u=m.add(l);return c.addEventListener("resize",l),l(),()=>{u(),c.removeEventListener("resize",l)}},[l,o,f,d,e,t,s,m]),{anchor:E,orientation:y,crossAxisDifference:T}}function xe(e,t,n){i.exports.useEffect(()=>{if(t.length<1)throw"There should be at least one ref";const o=t.reduce((a,s)=>s.current?[...a,s.current]:a,[]),r=a=>{n&&o.every(s=>s!==a.target&&!s.contains(a.target))&&n()};return e.addEventListener("click",r),e.addEventListener("touchend",r),()=>{e.removeEventListener("click",r),e.removeEventListener("touchend",r)}},[e,t,n])}const Se=150,ye=150;function _e({delayEnter:e=Se,delayLeave:t=ye}={}){const n=i.exports.useRef(),o=i.exports.useRef(),[r,a]=i.exports.useState(!1);return[r,{onMouseOver:()=>{r?n.current&&(clearTimeout(n.current),n.current=void 0):o.current=setTimeout(()=>{o.current!==void 0&&a(!0)},e)},onMouseLeave:()=>{r?n.current=setTimeout(()=>{n.current!==void 0&&a(!1)},t):o.current&&(clearTimeout(o.current),o.current=void 0)}}]}function Re(e,t,n,o){i.exports.useEffect(()=>{if(!t)return;const r="body"in t?t.body:t;let a=n?n.current:r.querySelector(`#${e}`);a||(a=document.createElement("div"),a.id=e,r.appendChild(a)),o(a)},[e,o,t,n])}const be=e=>{switch(e){case"bottom":return q`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 10px;

        &:after {
          top: 0;
          left: 50%;
        }
      `;case"top":return q`
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 10px;

        &:after {
          top: 10px;
          left: 50%;
        }
      `;case"right":return q`
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        width: 10px;
        height: 20px;

        &:after {
          top: 10px;
          left: 0%;
        }
      `;case"left":return q`
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        width: 10px;
        height: 20px;

        &:after {
          top: 10px;
          left: 10px;
        }
      `}},Ce=L.div.attrs(({orientation:e,movedBy:t})=>e==="left"||e==="right"?{style:{marginTop:`${-t}px`}}:{style:{marginLeft:`${-t}px`}})`
  position: absolute;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    background-color: var(--component-Tooltip-background);
    box-shadow: 0 0 12px 0 rgba(38, 38, 38, 0.2);
  }

  ${({orientation:e})=>be(e)}
`,Oe=L.div`
  position: fixed;
  z-index: 1;
  background-color: var(--component-Tooltip-background);
  color: var(--component-Tooltip-text);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
`,Te=L.div`
  padding: 10px;
  font-size: 12px;
`,we="react-tooltip-container",Ee=e=>{switch(e){case"left":return"right";case"right":return"left";case"top":return"bottom";case"bottom":return"top"}};function z({container:e,children:t,className:n,style:o={},anchorRef:r,orientation:a="left",offset:s=10,surroundingOffset:f,onClick:d,onClickOutside:m,onMouseLeave:O,onMouseOver:y}){var v;const p=i.exports.useRef(null),T=j(p),[h,E]=i.exports.useState(),b=o,{width:A,height:R}=b,M=X(b,["width","height"]),V=T!=null?T:(v=r.current)==null?void 0:v.ownerDocument,{anchor:{top:k,left:l},orientation:c,crossAxisDifference:u}=ve(r,p,{orientation:a,offset:{anchor:_=>_*.5,crossAxis:_=>_*.5,mainAxis:s},surroundingOffset:f,reflectMainAxisWhenCropped:!0,moveCrossAxisWhenCropped:!0});return xe(T,[r,p],m),Re(we,V,e,E),h?pe.exports.createPortal(N(Oe,{onClick:d,onMouseOver:y,onMouseLeave:O,ref:p,style:P({top:`${k}px`,left:`${l}px`,width:A,height:R},M),children:[C(Te,{className:n,children:t}),C(Ce,{orientation:Ee(c),movedBy:u})]}),h):null}function J(a){var s=a,{children:e,forceWhen:t,disabled:n,tooltipContent:o}=s,r=X(s,["children","forceWhen","disabled","tooltipContent"]);const f=e.ref,d=i.exports.useRef(null),m=f||d,[O,y]=_e(),p=i.exports.cloneElement(e,P({ref:m},y));return N(ae,{children:[p,!n&&(t||O)&&C(z,W(P(P({},r),y),{anchorRef:m,children:o}))]})}try{z.displayName="Tooltip",z.__docgenInfo={description:"",displayName:"Tooltip",props:{container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"RefObject<HTMLElement>"}},orientation:{defaultValue:{value:"left"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},anchorRef:{defaultValue:null,description:"",name:"anchorRef",required:!0,type:{name:"RefObject<Element>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onClickOutside:{defaultValue:null,description:"",name:"onClickOutside",required:!1,type:{name:"(() => void)"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:`(Pick<CSSProperties, "width" | "height"> & { '--component-Tooltip-background'?: string; '--component-Tooltip-text'?: string; }) | undefined`}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"(() => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"(() => void)"}},offset:{defaultValue:{value:"10"},description:"",name:"offset",required:!1,type:{name:"number"}},surroundingOffset:{defaultValue:null,description:"",name:"surroundingOffset",required:!1,type:{name:"SurroundingOffset"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:z.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch{}try{J.displayName="HoverTooltip",J.__docgenInfo={description:"",displayName:"HoverTooltip",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"ReactNode"}},forceWhen:{defaultValue:null,description:"",name:"forceWhen",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},delayEnter:{defaultValue:null,description:"",name:"delayEnter",required:!1,type:{name:"number"}},delayLeave:{defaultValue:null,description:"",name:"delayLeave",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},surroundingOffset:{defaultValue:null,description:"",name:"surroundingOffset",required:!1,type:{name:"SurroundingOffset"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"RefObject<HTMLElement>"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:`(Pick<CSSProperties, "width" | "height"> & { '--component-Tooltip-background'?: string; '--component-Tooltip-text'?: string; }) | undefined`}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"(() => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"(() => void)"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#HoverTooltip"]={docgenInfo:J.__docgenInfo,name:"HoverTooltip",path:"src/components/Tooltip/Tooltip.tsx#HoverTooltip"})}catch{}function Me(e,t,n,{onStartMoving:o,onStopMoving:r,onUpdatePosition:a}){const[s,f]=i.exports.useState(null),d=i.exports.useRef(null),m=(O,y)=>{const p=e.current;if(!p)return;const T=p.getBoundingClientRect(),h=O.currentTarget.getBoundingClientRect();d.current=h.left+h.width/2-T.left,o(d.current),f(y)};return i.exports.useEffect(()=>{if(s===null||!e.current)return;const O=e.current.getBoundingClientRect(),y=T=>{if(s===null||d.current===null)return;const h=n[s-1],E=n[s+1],A=h!==void 0?h+t:0,R=E!==void 0?E-t:O.width,M=d.current+T.movementX;d.current=M,a(Math.max(A,Math.min(R,M)))},p=()=>{s!==null&&(r(),f(null))};return document.addEventListener("mousemove",y),document.addEventListener("mouseup",p),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",p)}},[s,n,a,r]),{onMouseDown:m,dotMoving:s}}const Le=L.div`
  position: absolute;
  z-index: 2;
  height: var(--component-RangeSlider-dot-size);
  width: var(--component-RangeSlider-dot-size);
  transform: translate(-50%, -50%);
  top: 50%;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: var(--component-RangeSlider-dot-color);
  border: var(--component-RangeSlider-dot-border-size) solid
    var(--component-RangeSlider-dot-border-color);
  box-shadow: var(--component-RangeSlider-dot-shadow);
  cursor: pointer;

  ${e=>e.isMoving?q`
          background-color: var(--component-RangeSlider-dot-color__moving);
          border-color: var(--component-RangeSlider-dot-border-color__moving);
          box-shadow: var(--component-RangeSlider-dot-shadow__moving);
        `:q`
          transition: left 0.5s ease 0s;
          &:hover {
            background-color: var(--component-RangeSlider-dot-color__hover);
            border-color: var(--component-RangeSlider-dot-border-color__hover);
            box-shadow: var(--component-RangeSlider-dot-shadow__hover);
          }
        `}
`,Ve=L.div`
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`,Ae=L.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
`,De=L.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  top: 0;
  background-color: var(--component-Rangeslider-process-color);
  border-radius: calc(var(--component-Rangeslider-height) / 2);

  ${e=>!e.isMoving&&q`
      transition: 0.5s ease 0s;
      transition-property: left, width;
    `}
`,Pe=L.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition-property: width, height, left, right, top, bottom;
  background-color: var(--component-RangeSlider-rail-color);
  border-radius: calc(var(--component-RangeSlider-height) / 2);
`,qe=L.div`
  --component-RangeSlider-height: 4px;
  --component-RangeSlider-dot-size: 16px;
  --component-RangeSlider-dot-border-size: 2px;
  --component-RangeSlider-dot-color: #fff;
  --component-RangeSlider-dot-color__hover: #fff;
  --component-RangeSlider-dot-color__moving: #fff;
  --component-RangeSlider-dot-border-color: transparent;
  --component-RangeSlider-dot-border-color__hover: transparent;
  --component-RangeSlider-dot-border-color__moving: transparent;
  --component-RangeSlider-dot-shadow: 0.5px 0.5px 2px 1px rgb(0 0 0 / 32%);
  --component-RangeSlider-dot-shadow__hover: 0.5px 0.5px 2px 1px rgb(0 0 0 / 32%);
  --component-RangeSlider-dot-shadow__moving: 0.5px 0.5px 2px 1px rgb(0 0 0 / 32%);
  --component-RangeSlider-rail-color: #ccc;
  --component-Rangeslider-process-color: #3498db;

  position: relative;
  box-sizing: content-box;
  user-select: none;
  display: block;
  height: var(--component-RangeSlider-height);
  padding: calc(var(--component-RangeSlider-dot-size) / 2) 0;
  border-radius: calc(var(--component-Rangeslider-height) / 2);
`;function ke(e,t){if(t.length<2||e===0)return null;const n=Math.min(...t),o=Math.max(...t);return[`${n}px`,`${o-n}px`]}function Be(e,t){return Math.round(t/e)}function Ie({onMouseDown:e,position:t,isMoving:n,value:o}){const r=i.exports.useRef(null);return N(ae,{children:[C(Le,{ref:r,onMouseDown:e,style:{left:`${t}px`},isMoving:n}),n&&C(z,{anchorRef:r,orientation:"top",children:o})]})}function He(e,t,n){const o=(t-e)/n+1;return Array.from({length:o},(r,a)=>e+n*a)}function B({values:e,min:t,max:n,className:o,interval:r=1,marks:a=!1,onChange:s}){const f=i.exports.useRef(null),d=i.exports.useRef(null),[m,O]=i.exports.useState(0),[y,p]=i.exports.useState(0),T=(n-t)/r,h=y*r/(n-t);if(T!==Math.floor(T))throw new Error("Cannot render RangeSlider. `(max - min)` should be dividable by `interval`");const E=e.map(l=>(l-t)/r*h),{onMouseDown:A,dotMoving:R}=Me(d,h,E,{onStartMoving(l){O(l)},onUpdatePosition(l){O(l)},onStopMoving(){}}),M=E.map((l,c)=>R===c?m:l),V=ke(y,M),k=a&&h>40;return i.exports.useEffect(()=>{if(R===null)return;const l=Be(h,m)*r+t;s(e.map((c,u)=>u===R?l:c))},[R,m,r,t]),i.exports.useEffect(()=>{const l=d.current;if(!l)return;p(l.getBoundingClientRect().width);const c=()=>{p(l.getBoundingClientRect().width)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),C(qe,{ref:f,className:o,children:N($,{container:f,children:[k&&C(Ae,{children:He(t,n,r).map((l,c)=>C(Ve,{style:{left:`${c*h}px`},children:l},c))}),N(Pe,{ref:d,children:[V&&C(De,{isMoving:R!==null,style:{left:V[0],width:V[1]}}),!!y&&M.map((l,c)=>{const u=R===c;return C(Ie,{isMoving:u,position:u?m:l,onMouseDown:b=>A(b,c),value:e[c]},c)})]})]})})}try{B.displayName="RangeSlider",B.__docgenInfo={description:"",displayName:"RangeSlider",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},interval:{defaultValue:{value:"1"},description:"",name:"interval",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},marks:{defaultValue:{value:"false"},description:"",name:"marks",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: number[]) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RangeSlider/RangeSlider.tsx#RangeSlider"]={docgenInfo:B.__docgenInfo,name:"RangeSlider",path:"src/components/RangeSlider/RangeSlider.tsx#RangeSlider"})}catch{}var Je={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';

import { RangeSlider } from './RangeSlider';

export default {
  title: 'RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = (args) => {
  const [values, setValues] = useState(args.values);
  return <RangeSlider {...args} values={values} onChange={setValues} />;
};

export const Basic = Template.bind({});
Basic.args = {
  values: [20],
  min: 0,
  max: 100,
} as any;

export const TwoValues = Template.bind({});
TwoValues.args = {
  values: [0, 20],
  min: 0,
  max: 100,
} as any;

export const ThreeValues = Template.bind({});
ThreeValues.args = {
  values: [0, 20, 50],
  min: 0,
  max: 100,
} as any;

export const WithInterval = Template.bind({});
WithInterval.args = {
  values: [0, 20],
  interval: 10,
  min: 0,
  max: 100,
} as any;

const StyledRangeSlider = styled(RangeSlider)\`
  --component-RangeSlider-height: 6px;
  --component-RangeSlider-dot-size: 24px;
  --component-RangeSlider-dot-shadow__moving: 0px 0px 1px 2px rgb(52 152 219 / 36%);
  --component-Tooltip-background: #333;
  --component-Tooltip-text: #fff;
\`;

export const CustomStyle: ComponentStory<typeof StyledRangeSlider> = (args) => {
  const [innerValues, setInnerValues] = useState<number[]>(args.values);

  return <StyledRangeSlider {...args} values={innerValues} onChange={setInnerValues} />;
};
CustomStyle.args = {
  values: [0, 20],
  interval: 5,
  min: 0,
  max: 100,
  marks: true,
};
`,locationsMap:{basic:{startLoc:{col:53,line:12},endLoc:{col:1,line:15},startBody:{col:53,line:12},endBody:{col:1,line:15}},"two-values":{startLoc:{col:53,line:12},endLoc:{col:1,line:15},startBody:{col:53,line:12},endBody:{col:1,line:15}},"three-values":{startLoc:{col:53,line:12},endLoc:{col:1,line:15},startBody:{col:53,line:12},endBody:{col:1,line:15}},"with-interval":{startLoc:{col:53,line:12},endLoc:{col:1,line:15},startBody:{col:53,line:12},endBody:{col:1,line:15}},"custom-style":{startLoc:{col:69,line:54},endLoc:{col:1,line:58},startBody:{col:69,line:54},endBody:{col:1,line:58}}}}},title:"RangeSlider",component:B};const F=e=>{const[t,n]=i.exports.useState(e.values);return C(B,W(P({},e),{values:t,onChange:n}))},ze=F.bind({});ze.args={values:[20],min:0,max:100};const Ne=F.bind({});Ne.args={values:[0,20],min:0,max:100};const Ye=F.bind({});Ye.args={values:[0,20,50],min:0,max:100};const We=F.bind({});We.args={values:[0,20],interval:10,min:0,max:100};const Ke=L(B)`
  --component-RangeSlider-height: 6px;
  --component-RangeSlider-dot-size: 24px;
  --component-RangeSlider-dot-shadow__moving: 0px 0px 1px 2px rgb(52 152 219 / 36%);
  --component-Tooltip-background: #333;
  --component-Tooltip-text: #fff;
`,$e=e=>{const[t,n]=i.exports.useState(e.values);return C(Ke,W(P({},e),{values:t,onChange:n}))};$e.args={values:[0,20],interval:5,min:0,max:100,marks:!0};const Qe=["Basic","TwoValues","ThreeValues","WithInterval","CustomStyle"];export{ze as Basic,$e as CustomStyle,Ye as ThreeValues,Ne as TwoValues,We as WithInterval,Qe as __namedExportsOrder,Je as default};
//# sourceMappingURL=RangeSlider.stories.37cdb57a.js.map
