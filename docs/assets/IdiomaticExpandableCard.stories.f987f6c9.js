var L=Object.defineProperty,P=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var O=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&O(e,n,t[n]);if(b)for(var n of b(t))R.call(t,n)&&O(e,n,t[n]);return e},S=(e,t)=>P(e,F(t));var T=(e,t)=>{var n={};for(var o in e)D.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&b)for(var o of b(e))t.indexOf(o)<0&&R.call(e,o)&&(n[o]=e[o]);return n};import{F as z,c as M}from"./index.es.c3d134fd.js";import{R as U,r as s}from"./index.456e0965.js";import{u as Y}from"./useToggle.3e3c0788.js";import{s as f}from"./styled-components.browser.esm.71203842.js";import{j as a,F as q,a as p}from"./jsx-runtime.c15f1c78.js";import"./index.65f1d40b.js";function K(e){return s.exports.createContext(void 0)}var I={exports:{}},E={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=U,V=Symbol.for("react.element"),W=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,H=J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,d={},r=null,l=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)G.call(t,o)&&!Q.hasOwnProperty(o)&&(d[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)d[o]===void 0&&(d[o]=t[o]);return{$$typeof:V,type:e,key:r,ref:l,props:d,_owner:H.current}}E.Fragment=W;E.jsx=j;E.jsxs=j;I.exports=E;const X=I.exports.jsx,Z=I.exports.jsxs;function ee(e){var t;return(t=e.displayName)!=null?t:e.name}function te(e){const t=e.map(n=>[k(n),null]);return Object.fromEntries(t)}function ne(e){var t;return((t=e.charAt(0))==null?void 0:t.toUpperCase())+e.slice(1)}function k(e){var t;return((t=e.charAt(0))==null?void 0:t.toLowerCase())+e.slice(1)}function oe(e){return!!e&&e.hasOwnProperty("type")}function re(...e){const t=K();function n(r){const l=r;return{Element:({children:m})=>{const i=s.exports.useContext(t);return s.exports.useEffect(()=>{if(!i)throw new Error("SlotRef.Element must be used as children of a slotted component");i.setSlot(l,m)},[m,i]),null},get $$identifier(){return l}}}return{makeSlottable:function(r){const l=e.map(i=>n(i)),y={};for(const i of e){const x=l.find(g=>g.$$identifier===i);if(!x)throw new Error(`Something went wrong when trying to get reference for slot "${i}"`);y[ne(i)]={value:x.Element,writable:!1}}const m=function(ue){var v=ue,{children:x}=v,g=T(v,["children"]);const $=s.exports.Children.toArray(x).map(u=>oe(u)&&l.find(h=>h.Element===u.type)?u:null),[A,N]=s.exports.useState(()=>te(e)),B=s.exports.useCallback((u,h)=>{N(_=>{const w=k(u);return _[w]===h?_:S(C({},_),{[w]:h})})},[]);return Z(t.Provider,{value:{slots:A,setSlot:B},children:[$,X(r,C({},g))]})};return m.displayName=`Slotted(${ee(r)})`,Object.defineProperties(m,y)},useSlots:()=>{const r=s.exports.useContext(t);if(!r)throw new Error("");return r.slots}}}const ae=f.div`
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.3);
  margin: 15px 0;
`,ie=f.div`
  display: grid;
  grid-template-columns: 1fr 63px;
  align-items: center;
  height: 70px;
`,le=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 63px);
  height: 55px;
  padding: 0 30px;
  border-right: 2px solid #eaeaea;
`,de=f.button`
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
`,se=f.div`
  border-top: 2px solid #eaeaea;
  padding: 25px;
`,{makeSlottable:ce,useSlots:pe}=re("Title","Details"),c=ce(function({expandable:t=!0}){const[n,o]=Y(!1),{title:d,details:r}=pe();return a(q,{children:p(ae,{children:[p(ie,{children:[a(le,{children:d}),t&&a(de,{onClick:o,children:a(z,{icon:M,rotation:n?180:void 0,size:"2x"})})]}),t&&n&&a(se,{"data-testid":"expandable-card_detail",children:r})]})})});try{c.displayName="IdiomaticExpandableCard",c.__docgenInfo={description:"",displayName:"IdiomaticExpandableCard",props:{expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/IdiomaticExpandableCard/IdiomaticExpandableCard.tsx#IdiomaticExpandableCard"]={docgenInfo:c.__docgenInfo,name:"IdiomaticExpandableCard",path:"src/components/IdiomaticExpandableCard/IdiomaticExpandableCard.tsx#IdiomaticExpandableCard"})}catch{}var ge={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    <IdiomaticExpandableCard.Details>
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
    </IdiomaticExpandableCard.Details>
  </IdiomaticExpandableCard>
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:65,line:9},endLoc:{col:1,line:32},startBody:{col:65,line:9},endBody:{col:1,line:32}}}}},title:"IdiomaticExpandableCard",component:c};const me=e=>p(c,S(C({},e),{children:[a(c.Title,{children:a("strong",{children:"I am the content of this card with a very very long text to check what content do when he is very long"})}),p(c.Details,{children:["Data:",p("ul",{children:[a("li",{children:"A"}),a("li",{children:"B"}),a("li",{children:"C"})]}),"Other:",p("ul",{children:[a("li",{children:"1"}),a("li",{children:"2"}),a("li",{children:"3"})]})]})]})),_e=me.bind({}),Se=["Default"];export{_e as Default,Se as __namedExportsOrder,ge as default};
//# sourceMappingURL=IdiomaticExpandableCard.stories.f987f6c9.js.map
