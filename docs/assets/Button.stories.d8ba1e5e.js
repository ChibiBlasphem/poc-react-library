var B=Object.defineProperty;var s=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var u=(o,n,t)=>n in o?B(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,c=(o,n)=>{for(var t in n||(n={}))y.call(n,t)&&u(o,t,n[t]);if(s)for(var t of s(n))L.call(n,t)&&u(o,t,n[t]);return o};import{F as p,f as b,a as f,b as S}from"./index.es.c3d134fd.js";import{C as r,s as d}from"./styled-components.browser.esm.71203842.js";import{a as _,j as i}from"./jsx-runtime.c15f1c78.js";import"./index.65f1d40b.js";import"./index.456e0965.js";var e=(o=>(o.SMALL="small",o.MEDIUM="medium",o.LARGE="large",o))(e||{});const T={[e.SMALL]:r`
    height: 32px;
    min-width: 32px;
    font-size: 12px;
    letter-spacing: 0.8px;

    padding-top: 8px;
    padding-bottom: 8px;

    ${o=>o.withText&&r`
        padding-left: 16px;
        padding-right: 16px;
      `}
  `,[e.MEDIUM]:r`
    height: 40px;
    min-width: 40px;
    font-size: 14px;
    letter-spacing: 1.4px;

    padding-top: 12px;
    padding-bottom: 12px;

    ${o=>o.withText&&r`
        padding-left: 16px;
        padding-right: 16px;
      `}
  `,[e.LARGE]:r`
    height: 48px;
    min-width: 48px;
    font-size: 16px;
    letter-spacing: 1.8px;

    padding-top: 12px;
    padding-bottom: 12px;

    ${o=>o.withText&&r`
        padding-left: 24px;
        padding-right: 24px;
      `}
  `},v=d.button`
  --button-color__hover: var(--button-color);
  --button-background-color__hover: var(--button-background-color);
  --button-border-color__hover: var(--button-border-color);
  --button-color__disabled: var(--button-color);
  --button-background-color__disabled: var(--button-background-color);
  --button-border-color__disabled: var(--button-border-color);

  border-radius: 1px;
  border-style: solid;
  line-height: 50%;
  cursor: pointer;
  -webkit-appearance: button;

  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  color: var(--button-color);
  background-color: var(--button-background-color);
  border-color: var(--button-border-color);

  &:hover {
    color: var(--button-color__hover);
    background-color: var(--button-background-color__hover);
    border-color: var(--button-border-color__hover);
  }

  &:disabled {
    color: var(--button-color__disabled);
    background-color: var(--button-background-color__disabled);
    border-color: var(--button-border-color__disabled);
    opacity: 0.36;
    cursor: not-allowed;
  }

  ${o=>T[o.size]}
`;function l({icons:o,size:n,children:t,className:g,disabled:h=!1,onClick:m}){return _(v,{onClick:m,disabled:h,className:g,size:n,withText:!!t,children:[o!=null&&o.left?i(p,{icon:o.left}):null,t?i("span",{children:t}):null,o!=null&&o.right?i(p,{icon:o.right}):null]})}try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:"ButtonIcons"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:l.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch{}var V={parameters:{storySource:{source:`import { faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { Button } from './Button';
import { ButtonSize } from './Button.types';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const DefaultStyleButton = styled(Button)\`
  --button-color: #ffffff;
  --button-background-color: #88b2a8;
  --button-background-color__hover: #6a8a83;
  --button-border-color: #88b2a8;
\`;

const StudioStyleButton = styled(Button)\`
  --button-color: #ffffff;
  --button-background-color: #2a66a1;
  --button-background-color__hover: #1f4c78;
  --button-border-color: #2a66a1;
\`;

const TemplateDefault: ComponentStory<typeof Button> = (args) => <DefaultStyleButton {...args} />;
const TemplateStudio: ComponentStory<typeof Button> = (args) => <StudioStyleButton {...args} />;

export const Default = TemplateDefault.bind({});
Default.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
};

export const CustomStyle = TemplateStudio.bind({});
CustomStyle.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
};

export const WithLeftIcon = TemplateDefault.bind({});
WithLeftIcon.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
  icons: {
    left: faChevronLeft,
  },
};

export const WithRightIcon = TemplateDefault.bind({});
WithRightIcon.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
  icons: {
    right: faChevronRight,
  },
};

export const WithTwoIcons = TemplateDefault.bind({});
WithTwoIcons.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
  icons: {
    left: faChevronLeft,
    right: faChevronRight,
  },
};

export const OnlyIcon = TemplateDefault.bind({});
OnlyIcon.args = {
  size: ButtonSize.SMALL,
  icons: {
    left: faBars,
  },
};

export const Disabled = TemplateDefault.bind({});
Disabled.args = {
  size: ButtonSize.SMALL,
  children: 'BUTTON',
  disabled: true,
};
`,locationsMap:{default:{startLoc:{col:55,line:26},endLoc:{col:97,line:26},startBody:{col:55,line:26},endBody:{col:97,line:26}},"custom-style":{startLoc:{col:54,line:27},endLoc:{col:95,line:27},startBody:{col:54,line:27},endBody:{col:95,line:27}},"with-left-icon":{startLoc:{col:55,line:26},endLoc:{col:97,line:26},startBody:{col:55,line:26},endBody:{col:97,line:26}},"with-right-icon":{startLoc:{col:55,line:26},endLoc:{col:97,line:26},startBody:{col:55,line:26},endBody:{col:97,line:26}},"with-two-icons":{startLoc:{col:55,line:26},endLoc:{col:97,line:26},startBody:{col:55,line:26},endBody:{col:97,line:26}},"only-icon":{startLoc:{col:55,line:26},endLoc:{col:97,line:26},startBody:{col:55,line:26},endBody:{col:97,line:26}},disabled:{startLoc:{col:55,line:26},endLoc:{col:97,line:26},startBody:{col:55,line:26},endBody:{col:97,line:26}}}}},title:"Button",component:l};const x=d(l)`
  --button-color: #ffffff;
  --button-background-color: #88b2a8;
  --button-background-color__hover: #6a8a83;
  --button-border-color: #88b2a8;
`,z=d(l)`
  --button-color: #ffffff;
  --button-background-color: #2a66a1;
  --button-background-color__hover: #1f4c78;
  --button-border-color: #2a66a1;
`,a=o=>i(x,c({},o)),C=o=>i(z,c({},o)),M=a.bind({});M.args={size:e.SMALL,children:"BUTTON"};const A=C.bind({});A.args={size:e.SMALL,children:"BUTTON"};const I=a.bind({});I.args={size:e.SMALL,children:"BUTTON",icons:{left:b}};const O=a.bind({});O.args={size:e.SMALL,children:"BUTTON",icons:{right:f}};const k=a.bind({});k.args={size:e.SMALL,children:"BUTTON",icons:{left:b,right:f}};const D=a.bind({});D.args={size:e.SMALL,icons:{left:S}};const w=a.bind({});w.args={size:e.SMALL,children:"BUTTON",disabled:!0};const j=["Default","CustomStyle","WithLeftIcon","WithRightIcon","WithTwoIcons","OnlyIcon","Disabled"];export{A as CustomStyle,M as Default,w as Disabled,D as OnlyIcon,I as WithLeftIcon,O as WithRightIcon,k as WithTwoIcons,j as __namedExportsOrder,V as default};
//# sourceMappingURL=Button.stories.d8ba1e5e.js.map
