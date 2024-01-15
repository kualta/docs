"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7472],{66562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>l});var r=n(85893),s=n(11151),i=n(42352);const d={id:"web-methods",title:"Web Browser Methods"},c=void 0,h={id:"bos/api/web-methods",title:"Web Browser Methods",description:"NEAR Components have access to classic web methods that enable them to:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/bos/api/web-methods.md",sourceDirName:"bos/api",slug:"/bos/api/web-methods",permalink:"/vi/bos/api/web-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/web-methods.md",tags:[],version:"current",frontMatter:{id:"web-methods",title:"Web Browser Methods"},sidebar:"integrate",previous:{title:"Basics",permalink:"/vi/bos/api/state"},next:{title:"List of Native Components",permalink:"/vi/bos/api/builtin-components"}},o={},l=[{value:"Fetch",id:"fetch",level:2},{value:"Async Version",id:"async-version",level:4},{value:"Cache",id:"cache",level:2},{value:"LocalStorage",id:"localstorage",level:2},{value:"Storage.get",id:"storageget",level:4},{value:"Storage.set",id:"storageset",level:4},{value:"Storage.privateGet",id:"storageprivateget",level:4},{value:"Storage.privateSet",id:"storageprivateset",level:4},{value:"Clipboard",id:"clipboard",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"NEAR Components have access to classic web methods that enable them to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#fetch",children:"Fetch"})," data from external sources."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#cache",children:"Cache"})," values to avoid redundant computations."]}),"\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.a,{href:"#localstorage",children:"LocalStorage"})," to store data in the web browser."]}),"\n",(0,r.jsxs)(t.li,{children:["Access to the ",(0,r.jsx)(t.a,{href:"#clipboard",children:"Clipboard"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"fetch",children:"Fetch"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"fetch"})," allows to fetch data from the URL. It acts like a hook. It's a wrapper around the ",(0,r.jsx)(t.code,{children:"fetch"})," function from the browser behind the caching layer."]}),"\n",(0,r.jsx)(t.p,{children:"The possible returned values are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If the data is not cached, it returns ",(0,r.jsx)(t.code,{children:"null"})," and fetches the data in the background."]}),"\n",(0,r.jsx)(t.li,{children:"If the data is cached, it returns the cached value and then revalidates it."}),"\n"]}),"\n",(0,r.jsx)(i.W,{height:"80",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const res = fetch("https://rpc.mainnet.near.org/status");\n\nreturn res.body;\n'})})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h4,{id:"async-version",children:"Async Version"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"asyncFetch"})," is the ",(0,r.jsx)(t.code,{children:"async"})," version of ",(0,r.jsx)(t.a,{href:"#fetch",children:(0,r.jsx)(t.code,{children:"fetch"})}),", meaning that it returns a promise instead of a value."]}),"\n",(0,r.jsx)(i.W,{height:"80",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const [uptime, setUptime] = useState(null);\n\nfunction reportUptime() {\n  const promise = asyncFetch("https://rpc.mainnet.near.org/status")\n  \n  promise.then(\n    res => { setUptime(res.body.uptime_sec) }\n  );\n}\n\nreturn <>\n  <p> {uptime? `Uptime: ${uptime}s` : `Fetch a value` } </p>\n  <button onClick={reportUptime}>Fetch uptime</button>\n</>\n'})})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["In contrast with ",(0,r.jsx)(t.code,{children:"fetch"}),", ",(0,r.jsx)(t.code,{children:"asyncFetch"})," does ",(0,r.jsx)(t.strong,{children:"not"})," cache the resulting value, so it should only be used within a function to avoid frequent requests on every render."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"cache",children:"Cache"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"useCache"})," hook takes a promise through a generator function, fetches the data and caches it. It can be used to easily use and cache data from async data sources."]}),"\n",(0,r.jsxs)(t.p,{children:["The cache is global for the VM, but each cached element is identified by a unique ",(0,r.jsx)(t.code,{children:"dataKey"})," within each component."]}),"\n",(0,r.jsx)(t.p,{children:"The possible values returned are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"null"})," if the cache is cold and data is fetching"]}),"\n",(0,r.jsxs)(t.li,{children:["the ",(0,r.jsx)(t.code,{children:"cached value"})," while the data is being fetched"]}),"\n",(0,r.jsxs)(t.li,{children:["A new ",(0,r.jsx)(t.code,{children:"value"})," if new data is fetched."]}),"\n"]}),"\n",(0,r.jsx)(i.W,{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const status = useCache(\n  () =>\n    asyncFetch("https://rpc.mainnet.near.org/status").then((res) => res.body),\n  "mainnetRpcStatus",\n  { subscribe: true }\n);\n\nreturn status;\n'})})}),"\n",(0,r.jsxs)(n,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Parameters "}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"param"}),(0,r.jsx)(t.th,{children:"required"}),(0,r.jsx)(t.th,{children:"type"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"promiseGenerator"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"required"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"a function that returns a promise, which generates data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dataKey"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"required"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"the unique name (within the current component) to identify the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"options"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"optional"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"optional argument."})]})]})]}),(0,r.jsx)(t.admonition,{title:"options object",type:"info",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"subscribe"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),": if ",(0,r.jsx)(t.code,{children:"true"}),", the data refreshes periodically by invalidating cache."]}),"\n"]})}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"promiseGenerator"}),": you don't return the promise directly, because it should only be fired once."]}),"\n"]})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"#fetch",children:"fetch"})," method is built on top of the ",(0,r.jsx)(t.code,{children:"useCache"})," hook."]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The data is being cached and compared as JSON serialized objects."})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"localstorage",children:"LocalStorage"}),"\n",(0,r.jsxs)(t.p,{children:["NEAR Components have access to a simulated ",(0,r.jsx)(t.code,{children:"localStorage"})," through the ",(0,r.jsx)(t.code,{children:"Storage"})," object:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#storageget",children:(0,r.jsx)(t.code,{children:"Storage.get"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#storageset",children:(0,r.jsx)(t.code,{children:"Storage.set"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#storageprivateget",children:(0,r.jsx)(t.code,{children:"Storage.privateGet"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#storageprivateset",children:(0,r.jsx)(t.code,{children:"Storage.privateSet"})})}),"\n"]}),"\n",(0,r.jsx)(i.W,{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"const [time, setTime] = useState(stored || Date.now()) \n\nconst storeValue = () => {\n  const date = Date.now();\n  Storage.set('time_now', date)\n}\n\nreturn <>\n  <p> Time Now: {Date.now()} </p>\n  <p> Time Stored: {Storage.get('time_now')} </p>\n  <button onClick={storeValue}>Store Date.now()</button>\n</>\n"})})}),"\n",(0,r.jsxs)(n,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Parameters "}),(0,r.jsx)(t.h4,{id:"storageget",children:"Storage.get"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Storage.get(key, widgetSrc?)"})," - returns the public value for a given key under the given widgetSrc or the current component if ",(0,r.jsx)(t.code,{children:"widgetSrc"})," is omitted. Can only read public values."]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"param"}),(0,r.jsx)(t.th,{children:"required"}),(0,r.jsx)(t.th,{children:"type"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"key"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"required"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"a user-defined key"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"widgetSrc"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"optional"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"a user-defined component"})]})]})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h4,{id:"storageset",children:"Storage.set"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Storage.set(key, value)"})," - sets the public value for a given key under the current widget. The value will be public, so other widgets can read it."]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"param"}),(0,r.jsx)(t.th,{children:"required"}),(0,r.jsx)(t.th,{children:"type"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"key"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"required"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"a user-defined key"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"value"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"required"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"a user-defined value"})]})]})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h4,{id:"storageprivateget",children:"Storage.privateGet"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Storage.privateGet(key)"})," - returns the private value for a given key under the current component."]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"param"}),(0,r.jsx)(t.th,{children:"required"}),(0,r.jsx)(t.th,{children:"type"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"key"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"required"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"a user-defined key under the current component"})]})})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h4,{id:"storageprivateset",children:"Storage.privateSet"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Storage.privateSet(key, value)"})," - sets the private value for a given key under the current component. The value is private, only the current component can read it."]}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Private and public values can share the same key and don't conflict."})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"param"}),(0,r.jsx)(t.th,{children:"required"}),(0,r.jsx)(t.th,{children:"type"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"key"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"required"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"a user-defined key under the current component"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"value"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"required"})}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"a user-defined value"})]})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"clipboard",children:"Clipboard"}),"\n",(0,r.jsxs)(t.p,{children:["NEAR Components can ",(0,r.jsx)(t.strong,{children:"write"})," data to the system's clipboard through the ",(0,r.jsx)(t.code,{children:"clipboard.writeText"})," method."]}),"\n",(0,r.jsxs)(t.p,{children:["Writing to the clipboard is ",(0,r.jsx)(t.strong,{children:"only"})," allowed in ",(0,r.jsx)(t.strong,{children:"trusted actions"}),", for example, when the user clicks a button."]}),"\n",(0,r.jsx)(i.W,{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const copyToClipboard = (test) => { clipboard.writeText("Hello World!") }\n\nreturn <>\n    <button onClick={copyToClipboard}> Copy </button>\n    <textarea className="form-control mt-2" placeholder="Test pasting here" />\n</>\n'})})})]})}function j(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},42352:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(67294),s=n(16729),i=n(91262),d=n(85893);function c(e){var t=e.children,c=e.id,h=void 0===c?1:c,o=e.height,l=void 0===o?"160px":o;return(0,d.jsx)(i.Z,{fallback:(0,d.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=t.props.children.props.children}catch(g){}var i=n(58613),c=i.Widget,o=i.useInitNear,a=n(2302).ZP,j=(0,r.useState)(e),x=j[0],u=j[1],p=o().initNear,m=(0,s.O)().selector;return(0,r.useEffect)((function(){p&&m&&p({networkId:"testnet",selector:m})}),[p,m]),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{class:"monaco",children:(0,d.jsx)(a,{height:l,value:x,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,t){return u(e)}})}),(0,d.jsx)("div",{class:"code_iframe",children:(0,d.jsx)("div",{class:"bootstrap-scope",children:(0,d.jsx)("div",{class:"vm-widget",children:(0,d.jsx)(c,{code:x},h)})})})]})}})}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>d});var r=n(67294);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);