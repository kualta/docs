"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7625],{60225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(85893),r=n(11151),s=n(77229);n(74866),n(85162);const l={id:"frontend",title:"Integrating Contracts"},i=void 0,o={id:"develop/integrate/frontend",title:"Integrating Contracts",description:"To integrate NEAR to your frontend, you will leverage two tools:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/integrate/frontend.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/frontend",permalink:"/zh-CN/develop/integrate/frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/frontend.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"frontend",title:"Integrating Contracts"},sidebar:"integrate",previous:{title:"\u2b50 Quickstart a WebApp",permalink:"/zh-CN/develop/integrate/quickstart-frontend"},next:{title:"Integrating Components",permalink:"/zh-CN/develop/integrate/frontend-components"}},c={},d=[{value:"Adding NEAR API JS and Wallet Selector",id:"adding-near-api-js-and-wallet-selector",level:2},{value:"Create a Wallet Object",id:"create-a-wallet-object",level:2},{value:"Wallet Start Up",id:"wallet-start-up",level:2},{value:"Calling View Methods",id:"calling-view-methods",level:2},{value:"User Sign-In / Sign-Out",id:"user-sign-in--sign-out",level:2},{value:"Function Call Key",id:"function-call-key",level:3},{value:"Calling Change Methods",id:"calling-change-methods",level:2},{value:"Wallet Redirection",id:"wallet-redirection",level:3},{value:"Handling Data Types",id:"handling-data-types",level:2},{value:"Time",id:"time",level:5},{value:"Money",id:"money",level:5},{value:"Leveraging NEAR API JS",id:"leveraging-near-api-js",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"To integrate NEAR to your frontend, you will leverage two tools:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Wallet Selector"}),": Enables the user to select their preferred NEAR wallet in your dApp."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"NEAR API JS"}),": A suit of tools to interact with the NEAR RPC."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Using those tools you will implement the following flow:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Setup"})," a wallet selector."]}),"\n",(0,a.jsxs)(t.li,{children:["Load the wallet selector ",(0,a.jsx)(t.strong,{children:"on start-up"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Ask the user to ",(0,a.jsx)(t.strong,{children:"sign-in"})," using a NEAR wallet."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Call methods"})," in the contract."]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"adding-near-api-js-and-wallet-selector",children:"Adding NEAR API JS and Wallet Selector"}),"\n",(0,a.jsxs)(t.p,{children:["In order to use ",(0,a.jsx)(t.code,{children:"near-api-js"})," and the ",(0,a.jsx)(t.code,{children:"wallet-selector"})," you will need to first add them to your project."]}),"\n",(0,a.jsxs)(t.p,{children:["The wallet selector has multiple wallet packages to select from, ",(0,a.jsx)(t.a,{href:"https://github.com/near/wallet-selector#installation-and-usage",children:"see in their website"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install \\\n  near-api-js \\\n  @near-wallet-selector/core \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/ledger \\\n  @near-wallet-selector/modal-ui\n"})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsxs)("summary",{children:["Using ",(0,a.jsx)(t.code,{children:"near-api-js"})," in plain HTML"]}),(0,a.jsxs)(t.p,{children:["You can add ",(0,a.jsx)(t.code,{children:"near-api-js"})," as a script tag in your html."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.44.2/dist/near-api-js.min.js" integrity="sha256-W5o4c5DRZZXMKjuL41jsaoBpE/UHMkrGvIxN9HcjNSY=" crossorigin="anonymous"><\/script>\n'})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"create-a-wallet-object",children:"Create a Wallet Object"}),"\n",(0,a.jsxs)(t.p,{children:["In our examples we implement a ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",children:(0,a.jsx)(t.code,{children:"./near-wallet.js"})})," module, where we abstracted the ",(0,a.jsx)(t.code,{children:"wallet selector"})," into a ",(0,a.jsx)(t.code,{children:"Wallet"})," object to simplify using it."]}),"\n",(0,a.jsxs)(t.p,{children:["To create a wallet, simply import the ",(0,a.jsx)(t.code,{children:"Wallet"})," object from the module and initialize it. This ",(0,a.jsx)(t.code,{children:"wallet"})," will later allows the user to call any contract in NEAR."]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"2",end:"8"})})}),"\n",(0,a.jsxs)(t.p,{children:["When instantiating the wallet you can choose if you want to ",(0,a.jsxs)(t.strong,{children:["create a ",(0,a.jsx)(t.a,{href:"/zh-CN/concepts/basics/accounts/access-keys#function-call-keys-function-call-keys",children:"FunctionCall Key"})]}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you create the key, then your dApp will be able to ",(0,a.jsx)(t.strong,{children:"automatically sign non-payable transactions"})," for the user on the specified contract."]}),"\n",(0,a.jsxs)(n,{markdown:"1",children:[(0,a.jsx)("summary",{children:" Setting customs RPC endpoints "}),(0,a.jsxs)(t.p,{children:["If you want to use a user-defined RPC endpoint with the Wallet Selector, you need to setup a ",(0,a.jsx)(t.a,{href:"https://github.com/near/wallet-selector/tree/main/packages/core#options",children:"network options"})," object with the custom URLs. For example:"]}),(0,a.jsx)(s.O2,{children:(0,a.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="index.js"',children:'const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;\n\nconst my_network = {\n    networkId: "my-custom-network",\n    nodeUrl: "https://rpc.custom-rpc.com",\n    helperUrl: "https://helper.custom-helper.com",\n    explorerUrl: "https://custom-explorer.com",\n    indexerUrl: "https://api.custom-indexer.com",\n  };\n\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS, network: my_network });\n'})})})}),(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["You can find the entire Wallet Selector ",(0,a.jsx)(t.a,{href:"https://github.com/near/wallet-selector/blob/main/packages/core/docs/api/selector.md",children:"API reference here"}),"."]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"wallet-start-up",children:"Wallet Start Up"}),"\n",(0,a.jsx)(t.p,{children:"In our examples we always implement a simple flow where we start by checking if the user logged-in and act on it. We recommend you to do the same."}),"\n",(0,a.jsxs)(t.p,{children:["For this, override the ",(0,a.jsx)(t.code,{children:"window.onload"})," method with a function that calls the ",(0,a.jsx)(t.code,{children:"wallet.startUp()"})," method. Such method returns if the user is already signed-in:"]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:[(0,a.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"10",end:"21"}),(0,a.jsx)(s.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"36",end:"52"})]})}),"\n",(0,a.jsxs)(t.p,{children:["Under the hood (check the ",(0,a.jsx)(t.code,{children:"near-wallet"})," tab) you can see that we are actually setting up the wallet selector, and asking it if the user logged-in already."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"calling-view-methods",children:"Calling View Methods"}),"\n",(0,a.jsx)(t.p,{children:"Once the wallet is up we can start calling view methods, i.e. the methods that perform read-only operations."}),"\n",(0,a.jsxs)(t.p,{children:["Because of their read-only nature, view methods are ",(0,a.jsx)(t.strong,{children:"free"})," to call, and do ",(0,a.jsx)(t.strong,{children:"not require"})," the user to be ",(0,a.jsx)(t.strong,{children:"logged in"}),"."]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:[(0,a.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"46",end:"46"}),(0,a.jsx)(s.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"68",end:"81"})]})}),"\n",(0,a.jsxs)(t.p,{children:["The snippet above shows how we call view methods in our examples. Switch to the ",(0,a.jsx)(t.code,{children:"near-wallet"})," tab to see under the hood: we are actually making a ",(0,a.jsx)(t.strong,{children:"direct call to the RPC"})," using ",(0,a.jsx)(t.code,{children:"near-api-js"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"View methods have by default 200 TGAS for execution"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"user-sign-in--sign-out",children:"User Sign-In / Sign-Out"}),"\n",(0,a.jsx)(t.p,{children:"In order to interact with non-view methods it is necessary for the user to first sign in using a NEAR wallet."}),"\n",(0,a.jsxs)(t.p,{children:["Signing in is as simple as requesting the ",(0,a.jsx)(t.code,{children:"wallet"})," object to ",(0,a.jsx)(t.code,{children:"signIn"}),", the same simplicity applies to signing-out."]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,a.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"25",end:"26"}),(0,a.jsx)(s.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"54",end:"66"})]})}),"\n",(0,a.jsx)(t.p,{children:"When the user clicks in the button, it will be asked to select a wallet and use it to login."}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"function-call-key",children:"Function Call Key"}),"\n",(0,a.jsxs)(t.p,{children:["If you instantiated the ",(0,a.jsx)(t.code,{children:"Wallet"})," passing an account for the ",(0,a.jsx)(t.code,{children:"createAccessKeyFor"})," parameter, then the wallet will create a ",(0,a.jsx)(t.a,{href:"/zh-CN/concepts/basics/accounts/access-keys#function-call-keys-function-call-keys",children:"FunctionCall Key"})," and store it in the web's local storage."]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"8",end:"8"})})}),"\n",(0,a.jsxs)(t.p,{children:["By default, such key enables to expend a maximum of ",(0,a.jsx)(t.code,{children:"0.25\u24c3"})," on GAS calling methods in ",(0,a.jsx)(t.strong,{children:"the specified"})," contract ",(0,a.jsx)(t.strong,{children:"without prompting"})," the user to sign them."]}),"\n",(0,a.jsxs)(t.p,{children:["If, on the contrary, you do not create an access key, then the user will be asked to sign every single transaction (except calls to ",(0,a.jsx)(t.code,{children:"view methods"}),", since those are always free)."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Please notice that this only applies for ",(0,a.jsx)(t.strong,{children:"non-payable"})," methods, if you attach money to any call the user will ",(0,a.jsx)(t.strong,{children:"always"})," be redirected to the wallet to confirm the transaction."]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"calling-change-methods",children:"Calling Change Methods"}),"\n",(0,a.jsx)(t.p,{children:"Once the user logs-in they can start calling change methods. Programmatically, calling change methods is similar to calling view methods, only that now you can attach money to the call, and specify how much GAS you want to use."}),"\n",(0,a.jsx)(t.p,{children:"It is important to notice that, if you ask for money to be attached in the call, then the user will be redirected to the NEAR wallet to accept the transaction."}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,a.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/index.js",start:"36",end:"36"}),(0,a.jsx)(s.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",start:"83",end:"103"})]})}),"\n",(0,a.jsxs)(t.p,{children:["Under the hood (see ",(0,a.jsx)(t.code,{children:"near-wallet"})," tab) we can see that we are actually asking the ",(0,a.jsx)(t.strong,{children:"wallet"})," to ",(0,a.jsx)(t.strong,{children:"sign a FunctionCall transaction"})," for us."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Remember that you can use the ",(0,a.jsx)(t.code,{children:"wallet"})," to call methods in ",(0,a.jsx)(t.strong,{children:"any"})," contract. If you did not asked for a function key to be created, the user will simply be prompt to confirm the transaction."]})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"wallet-redirection",children:"Wallet Redirection"}),"\n",(0,a.jsxs)(t.p,{children:["If you attach money to a change call, then the user will be redirected to their wallet to accept the transaction. After accepting, the user will be brought back to your website, with the resulting transaction hash being pass as part of the url (i.e. ",(0,a.jsx)(t.code,{children:"your-website.com/?transactionHashes=..."}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["If the method invoked returned a result, you can use the transaction hash to retrieve the result from the network. Assuming you created the ",(0,a.jsx)(t.code,{children:"near"})," object as in the ",(0,a.jsx)(t.a,{href:"#connecting-to-a-contract",children:"example above"}),", then you query the result by doing:"]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,a.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/index.js",start:"74",end:"80"}),(0,a.jsx)(s.Ey,{fname:"utils.js",url:"https://github.com/near-examples/donation-js/blob/master/frontend/near-wallet.js",start:"105",end:"113"})]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"handling-data-types",children:"Handling Data Types"}),"\n",(0,a.jsx)(t.p,{children:"When calling methods in a contract, or receiving results from them, you will need to correctly encode/decode parameters. For this, it is important to know how the contracts encode timestamps (u64) and money amounts (u128)."}),"\n",(0,a.jsx)(t.h5,{id:"time",children:"Time"}),"\n",(0,a.jsxs)(t.p,{children:["The block timestamp in a smart contract is encoded using nanoseconds (i.e. 19 digits: ",(0,a.jsx)(t.code,{children:"1655373910837593990"}),"). In contrast, ",(0,a.jsx)(t.code,{children:"Date.now()"})," from javascript returns a timestamp in milliseconds (i.e 13 digits: ",(0,a.jsx)(t.code,{children:"1655373910837"}),"). Make sure to convert between milliseconds and nanoseconds to properly handle time variables."]}),"\n",(0,a.jsx)(t.h5,{id:"money",children:"Money"}),"\n",(0,a.jsxs)(t.p,{children:["Smart contracts speak in yocto NEAR, where 1\u24c3 = 10^24yocto, and the values are always encoded as ",(0,a.jsx)(t.code,{children:"strings"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Convert from NEAR to yocto before sending it to the contract using ",(0,a.jsx)(t.code,{children:"near-api-js.utils.format.parseNearAmount(amount.toString())"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Convert a response in yoctoNEAR to NEAR using ",(0,a.jsx)(t.code,{children:"near-api-js.utils.format.formatNearAmount(amount)"})]}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["If the contract returns a ",(0,a.jsx)(t.code,{children:"Balance"})," instead of a ",(0,a.jsx)(t.code,{children:"U128"}),', you will get a "scientific notation" ',(0,a.jsx)(t.code,{children:"number"})," instead of a ",(0,a.jsx)(t.code,{children:"string"})," (e.g. ",(0,a.jsx)(t.code,{children:"10^6"})," instead of ",(0,a.jsx)(t.code,{children:'"1000000"'}),"). In this case, you can convert the value to NEAR by doing:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"function formatAmount(amount) {\n  let formatted = amount.toLocaleString('fullwide', { useGrouping: false })\n  formatted = utils.format.formatNearAmount(formatted)\n  return Math.floor(formatted * 100) / 100\n}\n"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"leveraging-near-api-js",children:"Leveraging NEAR API JS"}),"\n",(0,a.jsx)(t.p,{children:"NEAR API JS does not limit itself to simply calling methods in a contract. In fact, you can use it to transform your web-app into a rich user experience. While we will not cover these topics in depth, it is important for you to know that with NEAR API JS you can also:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js",children:"Sign and verify messages"})}),": this is very useful to prove that a message was created by the user."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/transactions/batch-transactions.js",children:"Create batch transactions"})}),": this enables to link multiple ",(0,a.jsx)(t.a,{href:"/develop/contracts/actions",children:"actions"})," (e.g. multiple method calls). If one of the transactions fails, then they are all reverted."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://github.com/near/near-api-js/tree/master/packages/cookbook/accounts/create-testnet-account.js",children:"Create accounts"})}),": deploy accounts for your users!"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Check the ",(0,a.jsx)(t.a,{href:"/tools/near-api-js/cookbook",children:"cookbook"})," to learn how to supercharge your webapp."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),l=n(16550),i=n(20469),o=n(91980),c=n(67392),d=n(50012);function h(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,o._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function j(e){var t,n,r,s,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,h=e.groupId,j=u(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:j})})),x=g[0],f=g[1],b=m({queryString:c,groupId:h}),y=b[0],v=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,d.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],A=w[1],S=function(){var e=null!=y?y:k;return p({value:e,tabValues:j})?e:null}();return(0,i.Z)((function(){S&&f(S)}),[S]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);f(e),v(e),A(e)}),[v,A,j]),tabValues:j}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function b(e){var t=e.className,n=e.block,a=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==a&&(c(t),l(r))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=o.indexOf(e.currentTarget)+1;n=null!=(a=o[r])?a:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;n=null!=(s=o[l])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return o.push(e)},onKeyDown:h,onClick:d},s,{className:(0,r.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function v(e){var t=j(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(b,Object.assign({},e,t)),(0,f.jsx)(y,Object.assign({},e,t))]})}function w(e){var t=(0,g.Z)();return(0,f.jsx)(v,Object.assign({},e,{children:h(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>o,SQ:()=>c});n(67294);var a=n(74866),r=n(85162),s=n(95665),l=n.n(s),i=n(85893);function o(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,i.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,i.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,l=n.fname;if(e.type===d)return d({url:a,start:r,end:s,language:t,fname:l});return e}(e,n)})),1==t.length?(0,i.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,i.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,i.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,o=t+"#";return n&&a&&(o+="L"+n+"-L"+a+"#"),(0,i.jsx)(l(),{language:r,fname:s,children:o})}}}]);