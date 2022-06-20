var m=Object.defineProperty,h=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(e,n,a)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,p=(e,n)=>{for(var a in n||(n={}))b.call(n,a)&&s(e,a,n[a]);if(i)for(var a of i(n))u.call(n,a)&&s(e,a,n[a]);return e},c=(e,n)=>h(e,f(n));import{F as g,f as C}from"./index.es.0d6b1385.js";import{u as y}from"./useToggle.3e3c0788.js";import{s as d}from"./styled-components.browser.esm.71203842.js";import{a as o,j as t,F as E}from"./jsx-runtime.c15f1c78.js";import"./index.65f1d40b.js";import"./index.456e0965.js";const _=d.div`
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.3);
  margin: 15px 0;
`,v=d.div`
  display: grid;
  grid-template-columns: 1fr 63px;
  align-items: center;
  height: 70px;
`,w=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 63px);
  height: 55px;
  padding: 0 30px;
  border-right: 2px solid #eaeaea;
`,O=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  & > svg {
    transition: transform 0.5s;
  }
`,S=d.div`
  border-top: 2px solid #eaeaea;
  padding: 25px;
`;function r({expandable:e=!0,children:n,detail:a}){const[l,x]=y(!1);return o(_,{children:[o(v,{children:[t(w,{children:n}),e&&t(O,{onClick:x,children:t(g,{icon:C,rotation:l?180:void 0,size:"2x"})})]}),e&&l&&t(S,{"data-testid":"expandable-card_detail",children:a})]})}try{r.displayName="ExpandableCard",r.__docgenInfo={description:"",displayName:"ExpandableCard",props:{expandable:{defaultValue:{value:"true"},description:"",name:"expandable",required:!1,type:{name:"boolean"}},detail:{defaultValue:null,description:"",name:"detail",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ExpandableCard/ExpandableCard.tsx#ExpandableCard"]={docgenInfo:r.__docgenInfo,name:"ExpandableCard",path:"src/components/ExpandableCard/ExpandableCard.tsx#ExpandableCard"})}catch{}var L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExpandableCard } from './ExpandableCard';

export default {
  title: 'ExpandableCard',
  component: ExpandableCard,
} as ComponentMeta<typeof ExpandableCard>;

const detailsJsx = (
  <>
    Data:
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    Other:
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </>
);

const Template: ComponentStory<typeof ExpandableCard> = (args) => (
  <ExpandableCard {...args} detail={detailsJsx}>
    <strong>
      I am the content of this card with a very very long text to check what content do when he is
      very long
    </strong>
  </ExpandableCard>
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:56,line:26},endLoc:{col:1,line:33},startBody:{col:56,line:26},endBody:{col:1,line:33}}}}},title:"ExpandableCard",component:r};const D=o(E,{children:["Data:",o("ul",{children:[t("li",{children:"A"}),t("li",{children:"B"}),t("li",{children:"C"})]}),"Other:",o("ul",{children:[t("li",{children:"1"}),t("li",{children:"2"}),t("li",{children:"3"})]})]}),T=e=>t(r,c(p({},e),{detail:D,children:t("strong",{children:"I am the content of this card with a very very long text to check what content do when he is very long"})})),J=T.bind({}),M=["Default"];export{J as Default,M as __namedExportsOrder,L as default};
//# sourceMappingURL=ExpandableCard.stories.7043e054.js.map
