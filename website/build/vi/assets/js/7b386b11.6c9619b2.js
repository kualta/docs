"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8662],{16965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(85893),i=t(11151),s=(t(74866),t(85162),t(42352));const a={id:"near",title:"Interacting with Near"},l=void 0,c={id:"bos/api/near",title:"Interacting with Near",description:"The components can use the Near object to interact with smart contracts in the NEAR blockchain. There are three methods:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/bos/api/near.md",sourceDirName:"bos/api",slug:"/bos/api/near",permalink:"/vi/bos/api/near",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/near.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"near",title:"Interacting with Near"},sidebar:"integrate",previous:{title:"List of Native Components",permalink:"/vi/bos/api/builtin-components"},next:{title:"Social Interactions",permalink:"/vi/bos/api/social"}},o={},d=[{value:"Near.view",id:"nearview",level:2},{value:"Avoiding a Common Pitfall",id:"avoiding-a-common-pitfall",level:4},{value:"Near.call",id:"nearcall",level:2},{value:"Near.block",id:"nearblock",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The components can use the ",(0,r.jsx)(n.code,{children:"Near"})," object to interact with smart contracts in the NEAR blockchain. There are three methods:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nearview",children:(0,r.jsx)(n.code,{children:"Near.view"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nearblock",children:(0,r.jsx)(n.code,{children:"Near.block"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nearcall",children:(0,r.jsx)(n.code,{children:"Near.call"})})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"nearview",children:"Near.view"}),"\n",(0,r.jsx)(n.p,{children:"Queries a read-only method from a NEAR smart contract, returning:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"null"})}),": If the query is still being processed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"undefined"})}),": If the query is complete and no value was returned by the contract"]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"value"}),": If the query is complete and a value was returned by the contract"]}),"\n"]}),"\n",(0,r.jsx)(s.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const greeting = Near.view("hello.near-examples.testnet", "get_greeting", {});\n\nif (greeting === null) return "Loading...";\n\nreturn `The contract says: ${greeting}`;\n'})})}),"\n",(0,r.jsxs)(t,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Parameters "}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"contractName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the smart contract"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"methodName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the method to call"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"args"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"object instance"}),(0,r.jsx)(n.td,{children:"Arguments to pass to the method"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"blockId/finality"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Block ID or finality of the transaction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"subscribe"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"This feature allows users to subscribe to a query, which automatically refreshes the data for all subscribers every 5 seconds."})]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Notice that the optional parameter ",(0,r.jsx)(n.code,{children:"subscribe"})," allows users to subscribe to a query, which automatically refreshes the data every 5 seconds."]})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h4,{id:"avoiding-a-common-pitfall",children:"Avoiding a Common Pitfall"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to initialize the state with the result of a ",(0,r.jsx)(n.code,{children:"Near.view"})," call, be sure to check first that the value was obtained, to avoid initializing the state with ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(s.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const contractGreet = Near.view("hello.near-examples.testnet", "get_greeting", {});\n\n// you need to first check that the value was obtained\nif (contractGreet === null) return "Loading...";\n\nconst [greeting, setGreeting] = useState(contractGreet);\n\nreturn `The contract says: ${greeting}`;\n'})})}),"\n",(0,r.jsxs)(n.p,{children:["If you don't want to delay the render of your component, you can also use the ",(0,r.jsx)(n.code,{children:"useEffect"})," hook to control the value returned by ",(0,r.jsx)(n.code,{children:"Near.view"})]}),"\n",(0,r.jsx)(s.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const contractGreet = Near.view('hello.near-examples.testnet', 'get_greeting');\n\nconst [greeting, setGreeting] = useState('Loading ...');\n\nuseEffect(() => {\n  if (contractGreet !== null) setGreeting(contractGreet);\n}, [contractGreet]);\n\nreturn `The contract says: ${greeting}`;\n"})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"nearcall",children:"Near.call"}),"\n",(0,r.jsx)(n.p,{children:"Calls a smart contract method from the blockchain. Since a transaction needs to be signed, the user must be logged in in order to make the call."}),"\n",(0,r.jsx)(s.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'if (!context.accountId) return "Please login...";\n\nconst onClick = () => {\n  Near.call(\n    "hello.near-examples.testnet",\n    "set_greeting",\n    { greeting: "Hello!" }\n  );\n};\n\nreturn <>\n  <h5> Hello {context.accountId} </h5>\n  <button onClick={onClick}> Set Greeting </button>\n</>;\n'})})}),"\n",(0,r.jsxs)(t,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Parameters "}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"contractName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the smart contract to call"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"methodName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of the method to call on the smart contract"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"args"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"object instance"}),(0,r.jsx)(n.td,{children:"Arguments to pass to the smart contract method as an object instance"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gas"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"string / number"}),(0,r.jsx)(n.td,{children:"Maximum amount of gas to be used for the transaction (default 300Tg)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"deposit"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"string / number"}),(0,r.jsx)(n.td,{children:"Amount of NEAR tokens to attach to the call as deposit (in yoctoNEAR units)"})]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Remember that you can login using the ",(0,r.jsx)(n.code,{children:"Login"})," button at the navigation bar."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"nearblock",children:"Near.block"}),"\n",(0,r.jsx)(n.p,{children:"Queries a block from the blockchain."}),"\n",(0,r.jsx)(s.W,{height:"40px",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'return Near.block("optimistic");\n'})})}),"\n",(0,r.jsxs)(t,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Parameters "}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"blockHeightOrFinality"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsxs)(n.td,{children:["The block height or finality level to use for the blockchain query (desired block height, or one of the following strings: ",(0,r.jsx)(n.code,{children:"optimistic"}),", ",(0,r.jsx)(n.code,{children:"final"}),")"]})]})})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"desired block height: The height of the specific block to query, expressed as a positive integer"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"optimistic"}),": Uses the latest block recorded on the node that responded to your query (< 1 second delay)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"final"}),": a block that has been validated on at least 66% of the nodes in the network (approx. 2s)"]}),"\n"]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const i={tabItem:"tabItem_Ymn6"};var s=t(85893);function a(e){var n=e.children,t=e.hidden,a=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),i=t(36905),s=t(12466),a=t(16550),l=t(20469),c=t(91980),o=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function x(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,s=(0,a.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:i});return[(0,c._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function m(e){var n,t,i,s,a=e.defaultValue,c=e.queryString,o=void 0!==c&&c,h=e.groupId,m=u(e),p=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:m})})),f=p[0],b=p[1],g=j({queryString:o,groupId:h}),v=g[0],y=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),i=t[0],s=t[1],[i,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),N=w[0],k=w[1],I=function(){var e=null!=v?v:N;return x({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){I&&b(I)}),[I]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!x({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var p=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function g(e){var n=e.className,t=e.block,r=e.selectedValue,a=e.selectValue,l=e.tabValues,c=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),i=l[t].value;i!==r&&(o(n),a(i))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,i=c.indexOf(e.currentTarget)+1;t=null!=(r=c[i])?r:c[0];break;case"ArrowLeft":var s,a=c.indexOf(e.currentTarget)-1;t=null!=(s=c[a])?s:c[c.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},s,{className:(0,i.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,i=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=s.find((function(e){return e.props.value===i}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function y(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(g,Object.assign({},e,n)),(0,b.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,p.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},42352:(e,n,t)=>{t.d(n,{W:()=>l});var r=t(67294),i=t(16729),s=t(91262),a=t(85893);function l(e){var n=e.children,l=e.id,c=void 0===l?1:l,o=e.height,d=void 0===o?"160px":o;return(0,a.jsx)(s.Z,{fallback:(0,a.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(f){}var s=t(58613),l=s.Widget,o=s.useInitNear,h=t(2302).ZP,u=(0,r.useState)(e),x=u[0],j=u[1],m=o().initNear,p=(0,i.O)().selector;return(0,r.useEffect)((function(){m&&p&&m({networkId:"testnet",selector:p})}),[m,p]),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{class:"monaco",children:(0,a.jsx)(h,{height:d,value:x,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return j(e)}})}),(0,a.jsx)("div",{class:"code_iframe",children:(0,a.jsx)("div",{class:"bootstrap-scope",children:(0,a.jsx)("div",{class:"vm-widget",children:(0,a.jsx)(l,{code:x},c)})})})]})}})}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);