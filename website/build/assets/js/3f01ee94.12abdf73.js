"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1331],{75258:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=n(85893),t=n(11151),s=n(74866),i=n(85162),l=n(77229);const o={sidebar_position:5},c="Serialization Protocols",u={id:"sdk/rust/contract-interface/serialization-interface",title:"Serialization Protocols",description:"Serialization formats within the SDK define how data structures are translated into bytes which are needed for passing data into methods of the smart contract or storing data in state. For the case of method parameters, JSON (default) and Borsh are supported with the SDK and for storing data on-chain Borsh is used.",source:"@site/../docs/sdk/rust/contract-interface/serialization-interface.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/serialization-interface",permalink:"/sdk/rust/contract-interface/serialization-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/serialization-interface.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1705668999,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tools",previous:{title:"Payable Methods",permalink:"/sdk/rust/contract-interface/payable-methods"},next:{title:"Callbacks",permalink:"/sdk/rust/cross-contract/callbacks"}},d={},h=[{value:"Overriding Serialization Protocol Default",id:"overriding-serialization-protocol-default",level:3},{value:"Example",id:"example",level:4},{value:"JSON wrapper types",id:"json-wrapper-types",level:3},{value:"Base64VecU8",id:"base64vecu8",level:3}];function p(e){const a={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"serialization-protocols",children:"Serialization Protocols"}),"\n",(0,r.jsxs)(a.p,{children:["Serialization formats within the SDK define how data structures are translated into bytes which are needed for passing data into methods of the smart contract or storing data in state. For the case of method parameters, ",(0,r.jsx)(a.a,{href:"https://www.json.org/json-en.html",children:"JSON"})," (default) and ",(0,r.jsx)(a.a,{href:"https://borsh.io/",children:"Borsh"})," are supported with the SDK and for storing data on-chain Borsh is used."]}),"\n",(0,r.jsx)(a.p,{children:"The qualities of JSON and Borsh are as follows:"}),"\n",(0,r.jsx)(a.p,{children:"JSON:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Human-readable"}),"\n",(0,r.jsx)(a.li,{children:"Self-describing format (don't need to know the underlying type)"}),"\n",(0,r.jsx)(a.li,{children:"Easy interop with JavaScript"}),"\n",(0,r.jsx)(a.li,{children:"Less efficient size and (de)serialization"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Borsh:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Compact, binary format that's efficient for serialized data size"}),"\n",(0,r.jsx)(a.li,{children:"Need to know data format or have a schema to deserialize data"}),"\n",(0,r.jsx)(a.li,{children:"Strict and canonical binary representation"}),"\n",(0,r.jsx)(a.li,{children:"Fast and less overhead in most cases"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"In general, JSON will be used for contract calls and cross-contract calls for a better DevX, where Borsh can be used to optimize using less gas by having smaller parameter serialization and less deserialization computation within the contract."}),"\n",(0,r.jsx)(a.h3,{id:"overriding-serialization-protocol-default",children:"Overriding Serialization Protocol Default"}),"\n",(0,r.jsx)(a.p,{children:"The result and parameter serialization can be opted into separately, but all parameters must be of the same format (can't serialize some parameters as borsh and others as JSON). An example of switching both the result and parameters to borsh is as follows:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-rust",children:"#[result_serializer(borsh)]\npub fn sum_borsh(#[serializer(borsh)] a: u32, #[serializer(borsh)] b: u32) -> u32 {\n    a + b\n}\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Where the ",(0,r.jsx)(a.code,{children:"result_serializer(borsh)"})," annotation will override the default result serialization protocol from JSON to borsh and the ",(0,r.jsx)(a.code,{children:"serializer(borsh)"})," annotations will override the parameter serialization."]}),"\n",(0,r.jsx)(a.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(a.p,{children:["A simple demonstration of getting a ",(0,r.jsx)(a.a,{href:"https://borsh.io",children:"Borsh-serialized"}),", base64-encoded value from a unit test:"]}),"\n",(0,r.jsx)(l.Ey,{language:"rust",start:"93",end:"104",url:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs"}),"\n",(0,r.jsxs)(a.p,{children:["The following snippet shows a simple function that takes this value from a frontend or CLI. Note: this method doesn't have a return value, so the ",(0,r.jsx)(a.code,{children:"#[result_serializer(borsh)]"})," isn't needed."]}),"\n",(0,r.jsx)(l.Ey,{language:"rust",start:"40",end:"42",url:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs"}),"\n",(0,r.jsx)(a.p,{children:"Note that this is using this simple struct:"}),"\n",(0,r.jsx)(l.Ey,{language:"rust",start:"13",end:"17",url:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs"}),"\n",(0,r.jsx)(a.p,{children:"To call this with NEAR CLI, use a command similar to this:"}),"\n",(0,r.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(i.Z,{value:"near-cli",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"near call rust-status-message.demo.testnet set_status_borsh --base64 'DAAAAEFsb2hhIGhvbnVhIQ==' --accountId demo.testnet\n"})})}),(0,r.jsx)(i.Z,{value:"near-cli-rs",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"near contract call-function as-transaction rust-status-message.demo.testnet set_status_borsh base64-args 'DAAAAEFsb2hhIGhvbnVhIQ==' prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as demo.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsxs)(a.p,{children:["See more details in ",(0,r.jsx)(a.a,{href:"https://gist.github.com/mfornet/d8a94af333a68d67affd8cb78464c7c0",children:"this GitHub gist"})," from ",(0,r.jsx)(a.a,{href:"https://gist.github.com/mfornet",children:"Marcelo"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"json-wrapper-types",children:"JSON wrapper types"}),"\n",(0,r.jsxs)(a.p,{children:["To help with serializing certain types to JSON which have unexpected or inefficient default formats, there are some wrapper types in ",(0,r.jsx)(a.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/json_types/index.html",children:(0,r.jsx)(a.code,{children:"near_sdk::json_types"})})," that can be used."]}),"\n",(0,r.jsxs)(a.p,{children:["Because JavaScript only supports integers to value ",(0,r.jsx)(a.code,{children:"2^53 - 1"}),", you will lose precision if deserializing the JSON integer is above this range. To counteract this, you can use the ",(0,r.jsx)(a.code,{children:"I64"}),", ",(0,r.jsx)(a.code,{children:"U64"}),", ",(0,r.jsx)(a.code,{children:"I128"}),", and ",(0,r.jsx)(a.code,{children:"U128"})," in place of the native types for these parameters or result to serialize the value as a string. By default, all integer types will serialize as an integer in JSON."]}),"\n",(0,r.jsxs)(a.p,{children:["You can convert from ",(0,r.jsx)(a.code,{children:"U64"})," to ",(0,r.jsx)(a.code,{children:"u64"})," and back using ",(0,r.jsx)(a.code,{children:"std::convert::Into"}),", e.g."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn mult(&self, a: U64, b: U64) -> U128 {\n        let a: u64 = a.into();\n        let b: u64 = b.into();\n        let product = u128::from(a) * u128::from(b);\n        product.into()\n    }\n}\n"})}),"\n",(0,r.jsxs)(a.p,{children:["You can also access inner values and using ",(0,r.jsx)(a.code,{children:".0"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-diff",children:" #[near_bindgen]\n impl Contract {\n     pub fn mult(&self, a: U64, b: U64) -> U128 {\n-        let a: u64 = a.into();\n+        let a = a.0;\n-        let b: u64 = b.into();\n+        let b = b.0;\n         let product = u128::from(a) * u128::from(b);\n         product.into()\n     }\n }\n"})}),"\n",(0,r.jsxs)(a.p,{children:["And you can cast the lower-case ",(0,r.jsx)(a.code,{children:"u"})," variants to upper-case ",(0,r.jsx)(a.code,{children:"U"})," variants using ",(0,r.jsx)(a.code,{children:"U64(...)"})," and ",(0,r.jsx)(a.code,{children:"U128(...)"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-diff",children:" #[near_bindgen]\n impl Contract {\n     pub fn mult(&self, a: U64, b: U64) -> U128 {\n         let a = a.0;\n         let b = b.0;\n         let product = u128::from(a) * u128::from(b);\n-        product.into()\n+        U128(product)\n     }\n }\n"})}),"\n",(0,r.jsx)(a.p,{children:"Combining it all:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn mult(&self, a: U64, b: U64) -> U128 {\n        U128(u128::from(a.0) * u128::from(b.0))\n    }\n}\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Although there are these JSON wrapper types included with the SDK, any custom type can be used, as long as it implements ",(0,r.jsx)(a.a,{href:"https://serde.rs/",children:(0,r.jsx)(a.code,{children:"serde"})})," serialize and deserialize respectively. All of these types just override the JSON format and will have a consistent ",(0,r.jsx)(a.code,{children:"borsh"})," serialization and deserialization as the inner types."]}),"\n",(0,r.jsx)(a.h3,{id:"base64vecu8",children:"Base64VecU8"}),"\n",(0,r.jsxs)(a.p,{children:["Another example of a type you may want to override the default serialization of is ",(0,r.jsx)(a.code,{children:"Vec<u8>"})," which represents bytes in Rust. By default, this will serialize as an array of integers, which is not compact and very hard to use. There is a wrapper type ",(0,r.jsx)(a.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/json_types/struct.Base64VecU8.html",children:(0,r.jsx)(a.code,{children:"Base64VecU8"})})," which serializes and deserializes to a ",(0,r.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Base64",children:"Base-64"})," string for more compact JSON serialization."]}),"\n",(0,r.jsx)(a.p,{children:"Example here:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    // Notice, internally we store `Vec<u8>` \n    pub data: Vec<u8>,\n}\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(data: Base64VecU8) -> Self {\n        Self {\n            data: data.into(),\n        }\n    }\n    pub fn get_data(self) -> Base64VecU8 {\n        self.data.into()\n    }\n}\n"})})]})}function f(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>i});n(67294);var r=n(36905);const t={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var a=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,i),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>w});var r=n(67294),t=n(36905),s=n(12466),i=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var a,n;return null!=(a=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function h(e){var a=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:function(e){return d(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(n);return function(e){var a=(0,c.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function p(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function f(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId,s=(0,i.k6)(),l=function(e){var a=e.queryString,n=void 0!==a&&a,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var a=new URLSearchParams(s.location.search);a.set(l,e),s.replace(Object.assign({},s.location,{search:a.toString()}))}}),[l,s])]}function b(e){var a,n,t,s,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,b=h(e),m=(0,r.useState)((function(){return function(e){var a,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var t=null!=(a=r.find((function(e){return e.default})))?a:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:b})})),g=m[0],v=m[1],x=f({queryString:c,groupId:d}),j=x[0],y=x[1],w=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(a),t=n[0],s=n[1],[t,(0,r.useCallback)((function(e){a&&s.set(e)}),[a,s])]),z=w[0],S=w[1],k=function(){var e=null!=j?j:z;return p({value:e,tabValues:b})?e:null}();return(0,l.Z)((function(){k&&v(k)}),[k]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),S(e)}),[y,S,b]),tabValues:b}}var m=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var a=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var a=e.currentTarget,n=o.indexOf(a),t=l[n].value;t!==r&&(c(a),i(t))},d=function(e){var a,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,t=o.indexOf(e.currentTarget)+1;n=null!=(r=o[t])?r:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;n=null!=(s=o[i])?s:o[o.length-1]}null==(a=n)||a.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},a),children:l.map((function(e){var a=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,t.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===a}),children:null!=n?n:a}),a)}))})}function j(e){var a=e.lazy,n=e.children,t=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var i=s.find((function(e){return e.props.value===t}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t})}))})}function y(e){var a=b(e);return(0,v.jsxs)("div",{className:(0,t.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},e,a)),(0,v.jsx)(j,Object.assign({},e,a))]})}function w(e){var a=(0,m.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(a))}},77229:(e,a,n)=>{n.d(a,{Ey:()=>u,O2:()=>o,SQ:()=>c});n(67294);var r=n(74866),t=n(85162),s=n(95665),i=n.n(s),l=n(85893);function o(e){var a=e.children;return Array.isArray(a)||(a=[a]),(0,l.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:a.map((function(e,a){return(0,l.jsx)(t.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var a=e.children,n=e.language;return Array.isArray(a)||(a=[a]),a=a.map((function(e){return function(e,a){var n=e.props,r=(n.children,n.url),t=n.start,s=n.end,i=n.fname;if(e.type===u)return u({url:r,start:t,end:s,language:a,fname:i});return e}(e,n)})),1==a.length?(0,l.jsx)(t.Z,{value:0,label:a[0].props.fname,children:a[0]}):(0,l.jsx)(r.Z,{className:"file-tabs",children:a.map((function(e,a){return(0,l.jsx)(t.Z,{value:a,label:e.props.fname,children:e})}))})}function u(e){var a=e.url,n=e.start,r=e.end,t=e.language,s=e.fname,o=a+"#";return n&&r&&(o+="L"+n+"-L"+r+"#"),(0,l.jsx)(i(),{language:t,fname:s,children:o})}}}]);