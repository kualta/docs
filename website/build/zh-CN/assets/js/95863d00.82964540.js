"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9023],{50295:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(85893),a=n(11151),u=n(74866),s=n(85162);const i={sidebar_position:4,sidebar_label:"Shard"},l="Shard structure",o={id:"develop/lake/structures/shard",title:"Shard structure",description:"Definition",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/lake/structures/shard.mdx",sourceDirName:"2.develop/lake/structures",slug:"/develop/lake/structures/shard",permalink:"/zh-CN/develop/lake/structures/shard",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/lake/structures/shard.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Shard"},sidebar:"indexers",previous:{title:"Chunk",permalink:"/zh-CN/develop/lake/structures/chunk"},next:{title:"Transaction",permalink:"/zh-CN/develop/lake/structures/transaction"}},c={},d=[{value:"Definition",id:"definition",level:2},{value:"<code>IndexerShard</code>",id:"indexershard",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"shard-structure",children:[(0,t.jsx)(r.code,{children:"Shard"})," structure"]}),"\n",(0,t.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"IndexerShard"})," struct is ephemeral structure, there is no such entity in ",(0,t.jsx)(r.code,{children:"nearcore"}),". We've introduces it as a container in ",(0,t.jsx)(r.a,{href:"https://crates.io/crates/near-indexer-primitives",children:(0,t.jsx)(r.code,{children:"near-indexer-primitives"})}),". This container includes:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"shard ID"}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/zh-CN/develop/lake/structures/chunk",children:"Chunk"})," that might be absent"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/zh-CN/develop/lake/structures/execution-outcome",children:"ExecutionOutcomes"})," for ",(0,t.jsx)(r.a,{href:"/zh-CN/develop/lake/structures/receipt",children:"Receipts"})," (these belong to a Shard not to a ",(0,t.jsx)(r.a,{href:"/zh-CN/develop/lake/structures/chunk",children:"Chunk"})," or a ",(0,t.jsx)(r.a,{href:"/zh-CN/develop/lake/structures/block",children:"Block"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/zh-CN/develop/lake/structures/state-change",children:"StateChanges"})," for a Shard"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"indexershard",children:(0,t.jsx)(r.code,{children:"IndexerShard"})}),"\n",(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(s.Z,{value:"rust",label:"Rust",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",metastring:"links=1",children:"pub struct IndexerShard {\n    pub shard_id: types::ShardId,\n    pub chunk: Option<IndexerChunkView>,\n    pub receipt_execution_outcomes: Vec<IndexerExecutionOutcomeWithReceipt>,\n    pub state_changes: views::StateChangesView,\n}\n"})})}),(0,t.jsx)(s.Z,{value:"typescript",value:"TypeScript",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:"links=1",children:"export interface Shard {\n  shard_id: number;\n  chunk?: Chunk;\n  receiptExecutionOutcomes: ExecutionOutcomeWithReceipt[];\n  stateChanges: StateChange[];\n};\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>s});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var u=n(85893);function s(e){var r=e.children,n=e.hidden,s=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>C});var t=n(67294),a=n(36905),u=n(12466),s=n(16550),i=n(20469),l=n(91980),o=n(67392),c=n(50012);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,o.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function f(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,u=(0,s.k6)(),i=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,t.useCallback)((function(e){if(i){var r=new URLSearchParams(u.location.search);r.set(i,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[i,u])]}function v(e){var r,n,a,u,s=e.defaultValue,l=e.queryString,o=void 0!==l&&l,d=e.groupId,v=h(e),b=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:v})})),m=b[0],x=b[1],g=f({queryString:o,groupId:d}),k=g[0],j=g[1],C=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(r),a=n[0],u=n[1],[a,(0,t.useCallback)((function(e){r&&u.set(e)}),[r,u])]),y=C[0],S=C[1],w=function(){var e=null!=k?k:y;return p({value:e,tabValues:v})?e:null}();return(0,i.Z)((function(){w&&x(w)}),[w]),{selectedValue:m,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);x(e),j(e),S(e)}),[j,S,v]),tabValues:v}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function g(e){var r=e.className,n=e.block,t=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],o=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==t&&(o(r),s(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;n=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var u,s=l.indexOf(e.currentTarget)-1;n=null!=(u=l[s])?u:l[l.length-1]}null==(r=n)||r.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map((function(e){var r=e.value,n=e.label,u=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.Z)("tabs__item",m.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function k(e){var r=e.lazy,n=e.children,a=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var s=u.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:u.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function j(e){var r=v(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(g,Object.assign({},e,r)),(0,x.jsx)(k,Object.assign({},e,r))]})}function C(e){var r=(0,b.Z)();return(0,x.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>s});var t=n(67294);const a={},u=t.createContext(a);function s(e){const r=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(u.Provider,{value:r},e.children)}}}]);