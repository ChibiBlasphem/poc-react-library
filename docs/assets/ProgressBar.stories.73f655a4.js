var x=Object.defineProperty;var m=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var u=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))T.call(r,t)&&u(e,t,r[t]);if(m)for(var t of m(r))P.call(r,t)&&u(e,t,r[t]);return e};import{r as g}from"./index.456e0965.js";import{F as v,g as _,h as E}from"./index.es.c3d134fd.js";import{s as a}from"./styled-components.browser.esm.71203842.js";import{a as d,j as n}from"./jsx-runtime.c15f1c78.js";import"./index.65f1d40b.js";function S(e){const r=Math.floor(e/3600),t=Math.floor(e%3600/60);e<10?e=Math.round(e%60*10)/10:e=Math.round(e%60);let o="";return r>0&&(o+=`${r}h `),t>0&&(o+=`${t}m `),o+=`${e}s`,o}const l=5,w=a.div`
  position: relative;
  width: 100%;
  height: ${l}px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: ${l/2}px;
  overflow: hidden;

  .elapsed {
    position: absolute;
    background-color: #2a66a1;
    height: 100%;
    left: 0;
    transition: width 0.5s;
    border-top-right-radius: ${l/2}px;
    border-bottom-right-radius: ${l/2}px;
  }
`,B=a.div`
  text-align: left;
  margin-bottom: 5px;
`,C=a(B)`
  margin-top: 10px;
`,M=a(B)`
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,h=a(v)`
  margin-right: 10px;
`,R=(e,r)=>{if(e===void 0)return{percentage:void 0,remainingTime:void 0};const t=Math.min(99,Math.round(100*r/e)),o=Math.round(e-r);return{percentage:t,remainingTime:o}},$=e=>{const[r,t]=g.exports.useState(e),o=()=>t(0);return g.exports.useEffect(()=>{const c=setInterval(()=>{t(s=>s+1)},1e3);return()=>{clearInterval(c)}},[]),{reset:o,delta:r}},I=e=>e===void 0?"no time estimation available":`about ${S(e)} remaining`;function i({planned:e,elapsed:r=0,triggerer:t}){const{reset:o,delta:c}=$(0),{percentage:s,remainingTime:y}=R(e,r+c),b=I(y);return g.exports.useEffect(()=>{o()},[r]),d("div",{role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,children:[e!==void 0&&n(w,{children:n("div",{className:"elapsed","data-testid":"progressbar-elapsed",style:{width:`${s}%`}})}),d(C,{children:[n(h,{icon:_})," ",b]}),d(M,{children:[n(h,{icon:E})," initiated by ",t]})]})}try{i.displayName="ProgressBar",i.__docgenInfo={description:"",displayName:"ProgressBar",props:{planned:{defaultValue:null,description:"",name:"planned",required:!1,type:{name:"number"}},elapsed:{defaultValue:null,description:"",name:"elapsed",required:!1,type:{name:"number"}},triggerer:{defaultValue:null,description:"",name:"triggerer",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:i.__docgenInfo,name:"ProgressBar",path:"src/components/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch{}var q={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
`,locationsMap:{"no-estimation-bar":{startLoc:{col:53,line:9},endLoc:{col:88,line:9},startBody:{col:53,line:9},endBody:{col:88,line:9}},"with-estimation":{startLoc:{col:53,line:9},endLoc:{col:88,line:9},startBody:{col:53,line:9},endBody:{col:88,line:9}},"with-triggerer":{startLoc:{col:53,line:9},endLoc:{col:88,line:9},startBody:{col:53,line:9},endBody:{col:88,line:9}}}}},title:"ProgressBar",component:i};const p=e=>n(i,f({},e)),V=p.bind({}),L=p.bind({});L.args={planned:30};const O=p.bind({});O.args={triggerer:"ChibiKookie"};const D=["NoEstimationBar","WithEstimation","WithTriggerer"];export{V as NoEstimationBar,L as WithEstimation,O as WithTriggerer,D as __namedExportsOrder,q as default};
//# sourceMappingURL=ProgressBar.stories.73f655a4.js.map
