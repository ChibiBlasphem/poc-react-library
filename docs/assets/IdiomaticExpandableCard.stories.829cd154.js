var I=Object.defineProperty,h=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(e,a,t)=>a in e?I(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))y.call(a,t)&&m(e,t,a[t]);if(p)for(var t of p(a))_.call(a,t)&&m(e,t,a[t]);return e},u=(e,a)=>h(e,g(a));import{F as v,f as T}from"./index.es.09adac03.js";import{r as o}from"./index.456e0965.js";import{u as S}from"./useToggle.3e3c0788.js";import{j as n,a as d,F as D}from"./jsx-runtime.c15f1c78.js";import{s as r}from"./styled-components.browser.esm.c92f8637.js";import"./index.65f1d40b.js";const s=o.exports.createContext(void 0);function l({setTitle:e,setDetail:a,children:t}){const c=o.exports.useMemo(()=>({setTitle:e,setDetail:a}),[e,a]);return n(s.Provider,{value:c,children:t})}function w(){const e=o.exports.useContext(s);if(!e)throw new Error("IdiomaticExpandableCard.Title must be used within IdiomaticExpandableCard");return e.setTitle}function O(){const e=o.exports.useContext(s);if(!e)throw new Error("IdiomaticExpandableCard.Detail must be used within IdiomaticExpandableCard");return e.setDetail}try{l.displayName="IdiomaticExpandableCardProvider",l.__docgenInfo={description:"",displayName:"IdiomaticExpandableCardProvider",props:{setTitle:{defaultValue:null,description:"",name:"setTitle",required:!0,type:{name:"(node: ReactNode) => void"}},setDetail:{defaultValue:null,description:"",name:"setDetail",required:!0,type:{name:"(node: ReactNode) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/IdiomaticExpandableCard/IdiomaticExpandableCard.context.tsx#IdiomaticExpandableCardProvider"]={docgenInfo:l.__docgenInfo,name:"IdiomaticExpandableCardProvider",path:"src/IdiomaticExpandableCard/IdiomaticExpandableCard.context.tsx#IdiomaticExpandableCardProvider"})}catch{}const A=r.div`
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.3);
  margin: 15px 0;
`,R=r.div`
  display: grid;
  grid-template-columns: 1fr 63px;
  align-items: center;
  height: 70px;
`,B=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 63px);
  height: 55px;
  padding: 0 30px;
  border-right: 2px solid #eaeaea;
`,L=r.button`
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
`,P=r.div`
  border-top: 2px solid #eaeaea;
  padding: 25px;
`;function i({children:e,expandable:a=!0}){const[t,c]=S(!1),[C,b]=o.exports.useState(null),[f,E]=o.exports.useState(null);return d(D,{children:[n(l,{setTitle:b,setDetail:E,children:e}),d(A,{children:[d(R,{children:[n(B,{children:C}),a&&n(L,{onClick:c,children:n(v,{icon:T,rotation:t?180:void 0,size:"2x"})})]}),a&&t&&n(P,{"data-testid":"expandable-card_detail",children:f})]})]})}i.Title=function({children:a}){const t=w();return o.exports.useLayoutEffect(()=>{t(a)},[a]),null};i.Detail=function({children:a}){const t=O();return o.exports.useLayoutEffect(()=>{t(a)},[a]),null};try{i.displayName="IdiomaticExpandableCard",i.__docgenInfo={description:"",displayName:"IdiomaticExpandableCard",props:{expandable:{defaultValue:{value:"true"},description:"",name:"expandable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/IdiomaticExpandableCard/IdiomaticExpandableCard.tsx#IdiomaticExpandableCard"]={docgenInfo:i.__docgenInfo,name:"IdiomaticExpandableCard",path:"src/IdiomaticExpandableCard/IdiomaticExpandableCard.tsx#IdiomaticExpandableCard"})}catch{}var V={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IdiomaticExpandableCard } from './IdiomaticExpandableCard';

export default {
  title: 'IdiomaticExpandableCard',
  component: IdiomaticExpandableCard,
} as ComponentMeta<typeof IdiomaticExpandableCard>;

const Template: ComponentStory<typeof IdiomaticExpandableCard> = (args) => (
  <IdiomaticExpandableCard {...args}>
    <IdiomaticExpandableCard.Title>
      <strong>
        I am the content of this card with a very very long text to check what content do when he is
        very long
      </strong>
    </IdiomaticExpandableCard.Title>
    <IdiomaticExpandableCard.Detail>
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
    </IdiomaticExpandableCard.Detail>
  </IdiomaticExpandableCard>
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:65,line:9},endLoc:{col:1,line:32},startBody:{col:65,line:9},endBody:{col:1,line:32}}}}},title:"IdiomaticExpandableCard",component:i};const k=e=>d(i,u(x({},e),{children:[n(i.Title,{children:n("strong",{children:"I am the content of this card with a very very long text to check what content do when he is very long"})}),d(i.Detail,{children:["Data:",d("ul",{children:[n("li",{children:"A"}),n("li",{children:"B"}),n("li",{children:"C"})]}),"Other:",d("ul",{children:[n("li",{children:"1"}),n("li",{children:"2"}),n("li",{children:"3"})]})]})]})),z=k.bind({}),G=["Default"];export{z as Default,G as __namedExportsOrder,V as default};
//# sourceMappingURL=IdiomaticExpandableCard.stories.829cd154.js.map
