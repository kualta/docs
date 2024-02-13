"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8108],{92687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(85893),s=n(11151),r=n(77229),o=n(74866),i=n(85162);const c={id:"integration-test",title:"Integration Tests"},l=void 0,d={id:"develop/testing/integration-test",title:"Integration Tests",description:"Integration tests enable to deploy your contract in the NEAR testnet or a local sandbox, and create test-users to interact with it. In this way, you can thoroughly test your contract in a realistic environment.",source:"@site/../docs/2.develop/testing/integration.md",sourceDirName:"2.develop/testing",slug:"/develop/testing/integration-test",permalink:"/develop/testing/integration-test",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/testing/integration.md",tags:[],version:"current",lastUpdatedBy:"matiasbenary",lastUpdatedAt:1707754681,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{id:"integration-test",title:"Integration Tests"},sidebar:"build",previous:{title:"Unit Testing",permalink:"/develop/testing/unit-test"},next:{title:"Local Development",permalink:"/develop/testing/kurtosis-localnet"}},u={},h=[{value:"Snippet I: Testing Hello NEAR",id:"snippet-i-testing-hello-near",level:2},{value:"Snippet II: Testing Donations",id:"snippet-ii-testing-donations",level:2},{value:"Sandbox Testing",id:"sandbox-testing",level:2},{value:"Spooning Contracts",id:"spooning-contracts",level:3},{value:"Patch State on the Fly",id:"patch-state-on-the-fly",level:3},{value:"Time Traveling",id:"time-traveling",level:3},{value:"Using Testnet",id:"using-testnet",level:2},{value:"Additional Media",id:"additional-media",level:2},{value:"Test Driven Design Using Workspaces and AVA",id:"test-driven-design",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Integration tests enable to deploy your contract in the NEAR ",(0,a.jsx)(t.code,{children:"testnet"})," or a local ",(0,a.jsx)(t.code,{children:"sandbox"}),", and create test-users to interact with it. In this way, you can thoroughly test your contract in a realistic environment."]}),"\n",(0,a.jsxs)(t.p,{children:["Moreover, when using the local ",(0,a.jsx)(t.code,{children:"sandbox"})," you gain complete control of the network:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Create test ",(0,a.jsx)(t.code,{children:"Accounts"})," and manipulate their ",(0,a.jsx)(t.code,{children:"State"})," and ",(0,a.jsx)(t.code,{children:"Balance"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Simulate errors on callbacks."}),"\n",(0,a.jsx)(t.li,{children:"Control the time-flow and fast-forward into the future (Rust ready, TS coming soon)."}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{title:"NEAR Workspaces",type:"tip",children:[(0,a.jsxs)(t.p,{children:["In NEAR, integration tests are implemented using a framework called ",(0,a.jsx)(t.strong,{children:"Workspaces"}),". Workspaces comes in two flavors: ",(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-rs",children:"\ud83e\udd80 Rust"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-js",children:"\ud83c\udf10 Typescript"}),"."]}),(0,a.jsxs)(t.p,{children:["All of our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/docs-examples",children:"examples"})," come with integration testing."]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"snippet-i-testing-hello-near",children:"Snippet I: Testing Hello NEAR"}),"\n",(0,a.jsxs)(t.p,{children:["Lets take a look at the test of our ",(0,a.jsx)(t.a,{href:"/develop/quickstart-guide",children:"Quickstart Project"})," ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples",children:"\ud83d\udc4b Hello NEAR"}),", where we deploy the contract on an account and test it correctly retrieves and sets the greeting."]}),"\n",(0,a.jsx)(r.O2,{children:(0,a.jsx)(r.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(r.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/sandbox-ts/src/main.ava.ts",start:"9",end:"43"})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"snippet-ii-testing-donations",children:"Snippet II: Testing Donations"}),"\n",(0,a.jsxs)(t.p,{children:["In most cases we will want to test complex methods involving multiple users and money transfers. A perfect example for this is our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/donation-examples",children:"Donation Example"}),", which enables users to ",(0,a.jsx)(t.code,{children:"donate"})," money to a beneficiary. Lets see its integration tests"]}),"\n",(0,a.jsx)(r.O2,{children:(0,a.jsx)(r.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(r.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/sandbox-ts/src/main.ava.ts",start:"50",end:"73"})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"sandbox-testing",children:"Sandbox Testing"}),"\n",(0,a.jsxs)(t.p,{children:["NEAR Workspaces allows you to write tests once, and run them either on ",(0,a.jsx)(t.code,{children:"testnet"})," or a local ",(0,a.jsx)(t.code,{children:"Sandbox"}),". By ",(0,a.jsx)(t.strong,{children:"default"}),", Workspaces will start a ",(0,a.jsx)(t.strong,{children:"sandbox"})," and run your tests ",(0,a.jsx)(t.strong,{children:"locally"}),". Lets dive into the features of our framework and see how they can help you."]}),"\n",(0,a.jsx)(t.h3,{id:"spooning-contracts",children:"Spooning Contracts"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://coinmarketcap.com/alexandria/glossary/spoon-blockchain",children:"Spooning a blockchain"})," is copying the data from one network into a different network. NEAR Workspaces makes it easy to copy data from Mainnet or Testnet contracts into your local Sandbox environment:"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(i.Z,{value:"\ud83c\udf10 JavaScript",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const refFinance = await root.importContract({\n  mainnetContract: 'v2.ref-finance.near',\n  blockId: 50_000_000,\n  withData: true,\n});\n"})}),(0,a.jsxs)(t.p,{children:["This would copy the Wasm bytes and contract state from ",(0,a.jsx)(t.a,{href:"https://nearblocks.io/address/v2.ref-finance.near",children:"v2.ref-finance.near"})," to your local blockchain as it existed at block ",(0,a.jsx)(t.code,{children:"50_000_000"}),". This makes use of Sandbox's special ",(0,a.jsx)(t.a,{href:"#patch-state-on-the-fly",children:"patch state"})," feature to keep the contract name the same, even though the top level account might not exist locally (note that this means it only works in Sandbox testing mode). You can then interact with the contract in a deterministic way the same way you interact with all other accounts created with near-workspaces."]}),(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"withData"})," will only work out-of-the-box if the contract's data is 50kB or less. This is due to the default configuration of RPC servers; see ",(0,a.jsx)(t.a,{href:"/api/rpc/contracts#view-contract-state-view-contract-state",children:'the "Heads Up" note here'}),"."]})}),(0,a.jsxs)(t.p,{children:["See a ",(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-js/blob/main/__tests__/05.spoon-contract-to-sandbox.ava.ts",children:"TypeScript example of spooning"})," contracts."]})]}),(0,a.jsxs)(i.Z,{value:"\ud83e\udd80 Rust",children:[(0,a.jsxs)(t.p,{children:["Specify the contract name from ",(0,a.jsx)(t.code,{children:"testnet"})," you want to be pulling, and a specific block ID referencing back to a specific time. (Just in case the contract you're referencing has been changed or updated)"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'const CONTRACT_ACCOUNT: &str = "contract_account_name_on_testnet.testnet";\nconst BLOCK_HEIGHT: BlockHeight = 12345;\n'})}),(0,a.jsxs)(t.p,{children:["Create a function called ",(0,a.jsx)(t.code,{children:"pull_contract"})," which will pull the contract's ",(0,a.jsx)(t.code,{children:".wasm"})," file from the chain and deploy it onto your local sandbox. You'll have to re-initialize it with all the data to run tests."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"async fn pull_contract(owner: &Account, worker: &Worker<Sandbox>) -> anyhow::Result<Contract> {\n    let testnet = workspaces::testnet_archival();\n    let contract_id: AccountId = CONTRACT_ACCOUNT.parse()?;\n"})}),(0,a.jsx)(t.p,{children:"This next line will actually pull down the relevant contract from testnet and set an initial balance on it with 1000 NEAR."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'    let contract = worker\n        .import_contract(&contract_id, &testnet)\n        .initial_balance(parse_near!("1000 N"))\n        .block_height(BLOCK_HEIGHT)\n        .transact()\n        .await?;\n'})}),(0,a.jsx)(t.p,{children:"Following that you'll have to init the contract again with your metadata.\nThis is because the contract's data is too big for the RPC service to pull down. (limits are set to 50Mb)"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'    owner\n        .call(&worker, contract.id(), "init_method_name")\n        .args_json(serde_json::json!({\n            "arg1": value1,\n            "arg2": value2,\n        }))?\n        .transact()\n        .await?;\n    Ok(contract)\n}\n'})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"patch-state-on-the-fly",children:"Patch State on the Fly"}),"\n",(0,a.jsxs)(t.p,{children:["In Sandbox-mode, you can add or modify any contract state, contract code, account or access key with ",(0,a.jsx)(t.code,{children:"patchState"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["You can alter contract code, accounts, and access keys using normal transactions via the ",(0,a.jsx)(t.code,{children:"DeployContract"}),", ",(0,a.jsx)(t.code,{children:"CreateAccount"}),", and ",(0,a.jsx)(t.code,{children:"AddKey"})," ",(0,a.jsx)(t.a,{href:"https://nomicon.io/RuntimeSpec/Actions#addkeyaction",children:"actions"}),". But this limits you to altering your own account or sub-account. ",(0,a.jsx)(t.code,{children:"patchState"})," allows you to perform these operations on any account."]})}),"\n",(0,a.jsxs)(t.p,{children:['Keep in mind that you cannot perform arbitrary mutation on contract state with transactions since transactions can only include contract calls that mutate state in a contract-programmed way. For example, with an NFT contract, you can perform some operation with NFTs you have ownership of, but you cannot manipulate NFTs that are owned by other accounts since the smart contract is coded with checks to reject that. This is the expected behavior of the NFT contract. However, you may want to change another person\'s NFT for a test setup. This is called "arbitrary mutation on contract state" and can be done with ',(0,a.jsx)(t.code,{children:"patchState"}),":"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(i.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"    const {contract, ali} = t.context.accounts;\n    // Contract must have some state for viewState & patchState to work\n    await ali.call(contract, 'set_status', {message: 'hello'});\n    // Get state\n    const state = await contract.viewState();\n    // Get raw value\n    const statusMessage = state.get('STATE', {schema, type: StatusMessage});\n    // Update contract state\n    statusMessage.records.push(\n      new BorshRecord({k: 'alice.near', v: 'hello world'}),\n    );\n    // Serialize and patch state back to runtime\n    await contract.patchState(\n      'STATE',\n      borsh.serialize(schema, statusMessage),\n    );\n    // Check again that the update worked\n    const result = await contract.view('get_status', {\n      account_id: 'alice.near',\n    });\n    t.is(result, 'hello world');\n"})}),(0,a.jsxs)(t.p,{children:["To see a complete example of how to do this, see the ",(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-js/blob/main/__tests__/02.patch-state.ava.ts",children:"patch-state test"}),"."]})]}),(0,a.jsx)(i.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'    // Grab STATE from the testnet status_message contract. This contract contains the following data:\n    //   get_status(dev-20211013002148-59466083160385) => "hello from testnet"\n    let (testnet_contract_id, status_msg) = {\n        let worker = workspaces::testnet().await?;\n        let contract_id: AccountId = TESTNET_PREDEPLOYED_CONTRACT_ID\n            .parse()\n            .map_err(anyhow::Error::msg)?;\n        let mut state_items = worker.view_state(&contract_id, None).await?;\n        let state = state_items.remove(b"STATE".as_slice()).unwrap();\n        let status_msg = StatusMessage::try_from_slice(&state)?;\n        (contract_id, status_msg)\n    };\n    info!(target: "spooning", "Testnet: {:?}", status_msg);\n    // Create our sandboxed environment and grab a worker to do stuff in it:\n    let worker = workspaces::sandbox().await?;\n    // Deploy with the following status_message state: sandbox_contract_id => "hello from sandbox"\n    let sandbox_contract = deploy_status_contract(&worker, "hello from sandbox").await?;\n    // Patch our testnet STATE into our local sandbox:\n    worker\n        .patch_state(\n            sandbox_contract.id(),\n            "STATE".as_bytes(),\n            &status_msg.try_to_vec()?,\n        )\n        .await?;\n    // Now grab the state to see that it has indeed been patched:\n    let status: String = sandbox_contract\n        .view(\n            &worker,\n            "get_status",\n            serde_json::json!({\n                "account_id": testnet_contract_id,\n            })\n            .to_string()\n            .into_bytes(),\n        )\n        .await?\n        .json()?;\n    info!(target: "spooning", "New status patched: {:?}", status);\n    assert_eq!(&status, "hello from testnet");\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["As an alternative to ",(0,a.jsx)(t.code,{children:"patchState"}),", you can stop the node, dump state at genesis, edit the genesis, and restart the node.\nThis approach is more complex to do and also cannot be performed without restarting the node."]}),"\n",(0,a.jsx)(t.h3,{id:"time-traveling",children:"Time Traveling"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"workspaces"})," offers support for forwarding the state of the blockchain to the future. This means contracts which require time sensitive data do not need to sit and wait the same amount of time for blocks on the sandbox to be produced. We can simply just call ",(0,a.jsx)(t.code,{children:"worker.fast_forward"})," to get us further in time:"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",default:!0,children:(0,a.jsx)(r.Ey,{fname:"fast-forward.ava.ts",language:"js",url:"https://github.com/near/near-workspaces-js/blob/main/__tests__/08.fast-forward.ava.ts",start:"34",end:"53"})}),(0,a.jsxs)(i.Z,{value:"\ud83e\udd80 Rust",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'#[tokio::test]\nasync fn test_contract() -> anyhow::Result<()> {\n    let worker = workspaces::sandbox().await?;\n    let contract = worker.dev_deploy(WASM_BYTES);\n    let blocks_to_advance = 10000;\n    worker.fast_forward(blocks_to_advance);\n    // Now, "do_something_with_time" will be in the future and can act on future time-related state.\n    contract.call(&worker, "do_something_with_time")\n        .transact()\n        .await?;\n}\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-rs/blob/main/examples/src/fast_forward.rs",children:"See the full example on Github"}),"."]})})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"using-testnet",children:"Using Testnet"}),"\n",(0,a.jsxs)(t.p,{children:["NEAR Workspaces is set up so that you can write tests once and run them against a local Sandbox node (the default behavior) or against ",(0,a.jsx)(t.a,{href:"/concepts/basics/networks",children:"NEAR TestNet"}),". Some reasons this might be helpful:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Gives higher confidence that your contracts work as expected"}),"\n",(0,a.jsx)(t.li,{children:"You can test against deployed testnet contracts"}),"\n",(0,a.jsx)(t.li,{children:"If something seems off in Sandbox mode, you can compare it to testnet"}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["In order to use Workspaces in testnet mode you will need to have a ",(0,a.jsx)(t.code,{children:"testnet"})," account.\nYou can create one ",(0,a.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"You can switch to testnet mode in three ways."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["When creating Worker set network to ",(0,a.jsx)(t.code,{children:"testnet"})," and pass your master account:"]}),"\n"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const worker = await Worker.init({\n network: 'testnet',\n testnetMasterAccountId: '<yourAccountName>',\n})\n"})})}),(0,a.jsx)(i.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[tokio::main]  // or whatever runtime we want\nasync fn main() -> anyhow::Result<()> {\n// Create a sandboxed environment.\n// NOTE: Each call will create a new sandboxed environment\nlet worker = workspaces::sandbox().await?;\n// or for testnet:\nlet worker = workspaces::testnet().await?;\n}\n"})})})]}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Set the ",(0,a.jsx)(t.code,{children:"NEAR_WORKSPACES_NETWORK"})," and ",(0,a.jsx)(t.code,{children:"TESTNET_MASTER_ACCOUNT_ID"})," environment variables when running your tests:"]}),"\n"]}),"\n",(0,a.jsx)(o.Z,{groupId:"code-tabs",children:(0,a.jsxs)(i.Z,{value:"\ud83c\udf10 JavaScript",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"NEAR_WORKSPACES_NETWORK=testnet TESTNET_MASTER_ACCOUNT_ID=<your master account Id> node test.js\n"})}),(0,a.jsxs)(t.p,{children:["If you set this environment variables and pass ",(0,a.jsx)(t.code,{children:"{network: 'testnet', testnetMasterAccountId: <masterAccountId>}"})," to ",(0,a.jsx)(t.code,{children:"Worker.init"}),", the config object takes precedence."]})]})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["If using ",(0,a.jsx)(t.code,{children:"near-workspaces"})," with AVA, you can use a custom config file. Other test runners allow similar config files; adjust the following instructions for your situation."]}),"\n"]}),"\n",(0,a.jsx)(o.Z,{groupId:"code-tabs",children:(0,a.jsxs)(i.Z,{value:"\ud83c\udf10 JavaScript",default:!0,children:[(0,a.jsxs)(t.p,{children:["Create a file in the same directory as your ",(0,a.jsx)(t.code,{children:"package.json"})," called ",(0,a.jsx)(t.code,{children:"ava.testnet.config.cjs"})," with the following contents:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"module.exports = {\n ...require('near-workspaces/ava.testnet.config.cjs'),\n ...require('./ava.config.cjs'),\n};\nmodule.exports.environmentVariables = {\n    TESTNET_MASTER_ACCOUNT_ID: '<masterAccountId>',\n};\n"})}),(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://github.com/near/workspaces-js/blob/main/ava.testnet.config.cjs",children:"near-workspaces/ava.testnet.config.cjs"})," import sets the ",(0,a.jsx)(t.code,{children:"NEAR_WORKSPACES_NETWORK"})," environment variable for you. A benefit of this approach is that you can then easily ignore files that should only run in Sandbox mode."]}),(0,a.jsxs)(t.p,{children:["Now you'll also want to add a ",(0,a.jsx)(t.code,{children:"test:testnet"})," script to your ",(0,a.jsx)(t.code,{children:"package.json"}),"'s ",(0,a.jsx)(t.code,{children:"scripts"})," section:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:'"scripts": {\n  "test": "ava",\n+  "test:testnet": "ava --config ./ava.testnet.config.cjs"\n}\n'})})]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"additional-media",children:"Additional Media"}),"\n",(0,a.jsx)(t.h4,{id:"test-driven-design",children:"Test Driven Design Using Workspaces and AVA"}),"\n",(0,a.jsx)(t.p,{children:"The video below walks through how to apply TDD with Workspaces and AVA for a simple contract:"}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/LCu03IYwu1I",title:"TDD Using Workspaces",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const s={tabItem:"tabItem_Ymn6"};var r=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),s=n(36905),r=n(12466),o=n(16550),i=n(20469),c=n(91980),l=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,r=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:s});return[(0,c._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[i,r])]}function x(e){var t,n,s,r,o=e.defaultValue,c=e.queryString,l=void 0!==c&&c,u=e.groupId,x=h(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:o,tabValues:x})})),f=g[0],j=g[1],v=m({queryString:l,groupId:u}),w=v[0],b=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),s=n[0],r=n[1],[s,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),k=y[0],_=y[1],T=function(){var e=null!=w?w:k;return p({value:e,tabValues:x})?e:null}();return(0,i.Z)((function(){T&&j(T)}),[T]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);j(e),b(e),_(e)}),[b,_,x]),tabValues:x}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function v(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,i=e.tabValues,c=[],l=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==a&&(l(t),o(s))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,s=c.indexOf(e.currentTarget)+1;n=null!=(a=c[s])?a:c[0];break;case"ArrowLeft":var r,o=c.indexOf(e.currentTarget)-1;n=null!=(r=c[o])?r:c[c.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},r,{className:(0,s.Z)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,s=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=r.find((function(e){return e.props.value===s}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function b(e){var t=x(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(v,Object.assign({},e,t)),(0,j.jsx)(w,Object.assign({},e,t))]})}function y(e){var t=(0,g.Z)();return(0,j.jsx)(b,Object.assign({},e,{children:u(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>c,SQ:()=>l});n(67294);var a=n(74866),s=n(85162),r=n(95665),o=n.n(r),i=n(85893);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,i.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,i.jsx)(s.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function l(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),s=n.start,r=n.end,o=n.fname;if(e.type===d)return d({url:a,start:s,end:r,language:t,fname:o});return e}(e,n)})),1==t.length?(0,i.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,i.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,i.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,a=e.end,s=e.language,r=e.fname,c=t+"#";return n&&a&&(c+="L"+n+"-L"+a+"#"),(0,i.jsx)(o(),{language:s,fname:r,children:c})}}}]);