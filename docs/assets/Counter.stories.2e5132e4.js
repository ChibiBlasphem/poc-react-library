var l=Object.defineProperty;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?l(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))m.call(o,t)&&p(e,t,o[t]);if(i)for(var t of i(o))C.call(o,t)&&p(e,t,o[t]);return e};import{r as f}from"./index.456e0965.js";import{s as c}from"./styled-components.browser.esm.71203842.js";import{a as x,j as r}from"./jsx-runtime.c15f1c78.js";const y=c.div`
  display: grid;
  grid-template-rows: auto repeat(2, 1fr);
  gap: 12px;
  background-color: #fff;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
`,_=c.span`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`,d=c.button`
  color: #fff;
  background-color: #293032;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: #1b1e1f;
  }
`;function n({initialCount:e=0,step:o=1}){const[t,s]=f.exports.useState(e);return x(y,{children:[r(_,{children:t}),r(d,{onClick:()=>s(a=>a+1),title:"increment",children:"+"}),r(d,{onClick:()=>s(a=>Math.max(0,a-1)),title:"decrement",children:"-"})]})}try{n.displayName="Counter",n.__docgenInfo={description:"",displayName:"Counter",props:{initialCount:{defaultValue:{value:"0"},description:"",name:"initialCount",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.tsx#Counter"]={docgenInfo:n.__docgenInfo,name:"Counter",path:"src/components/Counter/Counter.tsx#Counter"})}catch{}var k={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Counter } from './Counter';

export default {
  title: 'Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const BasicCounter = Template.bind({});
`,locationsMap:{"basic-counter":{startLoc:{col:49,line:10},endLoc:{col:80,line:10},startBody:{col:49,line:10},endBody:{col:80,line:10}}}}},title:"Counter",component:n};const g=e=>r(n,u({},e)),v=g.bind({}),E=["BasicCounter"];export{v as BasicCounter,E as __namedExportsOrder,k as default};
//# sourceMappingURL=Counter.stories.2e5132e4.js.map
