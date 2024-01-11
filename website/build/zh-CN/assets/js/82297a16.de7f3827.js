"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6319],{54672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(85893),i=t(11151);const r={id:"events",title:"Events",sidebar_label:"Events"},o=void 0,a={id:"tutorials/nfts/events",title:"Events",description:"In this tutorial, you'll learn about the events standard and how to implement it in your smart contract.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/7-events.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/events",permalink:"/zh-CN/tutorials/nfts/events",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/7-events.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"events",title:"Events",sidebar_label:"Events"},sidebar:"contracts",previous:{title:"Royalty",permalink:"/zh-CN/tutorials/nfts/royalty"},next:{title:"Marketplace",permalink:"/zh-CN/tutorials/nfts/marketplace"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding the use case",id:"understanding-the-use-case",level:2},{value:"The problem",id:"the-problem",level:3},{value:"The solution",id:"the-solution",level:3},{value:"Examples",id:"examples",level:3},{value:"Scenario A - simple mint",id:"scenario-a---simple-mint",level:4},{value:"Scenario B - batch mint",id:"scenario-b---batch-mint",level:4},{value:"Scenario C - transfer NFTs",id:"scenario-c---transfer-nfts",level:4},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Creating the events file",id:"events-rs",level:3},{value:"Adding modules and constants",id:"lib-rs",level:3},{value:"Logging minted tokens",id:"logging-minted-tokens",level:3},{value:"Logging transfers",id:"logging-transfers",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization and minting",id:"initialization-and-minting",level:3},{value:"Transferring",id:"transferring",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In this tutorial, you'll learn about the ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events standard"})," and how to implement it in your smart contract."]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["To get started, either switch to the ",(0,s.jsx)(n.code,{children:"6.royalty"})," branch from our ",(0,s.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"}),", or continue your work from the previous tutorials."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git checkout 6.royalty\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["If you wish to see the finished code for this ",(0,s.jsx)(n.em,{children:"Events"})," tutorial, you can find it on the ",(0,s.jsx)(n.code,{children:"7.events"})," branch. :::"]}),(0,s.jsx)(n.h2,{id:"understanding-the-use-case",children:"Understanding the use case"}),(0,s.jsxs)(n.p,{children:["Have you ever wondered how the wallet knows which NFTs you own and how it can display them in the ",(0,s.jsx)(n.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"? Originally, an ",(0,s.jsx)(n.a,{href:"/tools/indexer-for-explorer",children:"indexer"})," was used and it listened for any functions starting with ",(0,s.jsx)(n.code,{children:"nft_"})," on your account. These contracts were then flagged on your account as likely NFT contracts."]}),(0,s.jsxs)(n.p,{children:["When you navigated to your collectibles tab, the wallet would then query all those contracts for the list of NFTs you owned using the ",(0,s.jsx)(n.code,{children:"nft_tokens_for_owner"})," function you saw in the ",(0,s.jsx)(n.a,{href:"/tutorials/nfts/enumeration",children:"enumeration tutorial"}),"."]}),(0,s.jsx)(n.h3,{id:"the-problem",children:"The problem"}),(0,s.jsx)(n.p,{children:"This method of flagging contracts was not reliable as each NFT-driven application might have its own way of minting or transferring NFTs. In addition, it's common for apps to transfer or mint many tokens at a time using batch functions."}),(0,s.jsx)(n.h3,{id:"the-solution",children:"The solution"}),(0,s.jsx)(n.p,{children:"A standard was introduced so that smart contracts could emit an event anytime NFTs were transferred, minted, or burnt. This event was in the form of a log. No matter how a contract implemented the functionality, an indexer could now listen for those standardized logs."}),(0,s.jsx)(n.p,{children:"As per the standard, you need to implement a logging functionality that gets fired when NFTs are transferred or minted. In this case, the contract doesn't support burning so you don't need to worry about that for now."}),(0,s.jsxs)(n.p,{children:["It's important to note the standard dictates that the log should begin with ",(0,s.jsx)(n.code,{children:'"EVENT_JSON:"'}),". The structure of your log should, however, always contain the 3 following things:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"standard"}),": the current name of the standard (e.g. nep171)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"version"}),": the version of the standard you're using (e.g. 1.0.0)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"event"}),": a list of events you're emitting."]}),"\n"]}),(0,s.jsx)(n.p,{children:"The event interface differs based on whether you're recording transfers or mints. The interface for both events is outlined below."}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transfer events"}),":"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Optional"})," - ",(0,s.jsx)(n.strong,{children:"authorized_id"}),": the account approved to transfer on behalf of the owner."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"old_owner_id"}),": the old owner of the NFT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"new_owner_id"}),": the new owner that the NFT is being transferred to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"token_ids"}),": a list of NFTs being transferred."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Optional"})," - ",(0,s.jsx)(n.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Minting events"}),":"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"owner_id"}),": the owner that the NFT is being minted to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"token_ids"}),": a list of NFTs being transferred."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Optional"})," - ",(0,s.jsx)(n.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),(0,s.jsx)(n.p,{children:"In order to solidify your understanding of the standard, let's walk through three scenarios and see what the logs should look like."}),(0,s.jsx)(n.h4,{id:"scenario-a---simple-mint",children:"Scenario A - simple mint"}),(0,s.jsxs)(n.p,{children:["In this scenario, Benji wants to mint an NFT to Mike with a token ID ",(0,s.jsx)(n.code,{children:'"team-token"'})," and he doesn't include a message. The log should look as follows."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token"]}\n  ]\n}\n'})}),(0,s.jsx)(n.h4,{id:"scenario-b---batch-mint",children:"Scenario B - batch mint"}),(0,s.jsxs)(n.p,{children:["In this scenario, Benji wants to perform a batch mint. He will mint an NFT to Mike, Damian, Josh, and Dorian. Dorian, however, will get two NFTs. Each token ID will be ",(0,s.jsx)(n.code,{children:'"team-token"'})," followed by an incrementing number. The log is as follows."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token0"]},\n    {"owner_id": "damian.testnet", "token_ids": ["team-token1"]},\n    {"owner_id": "josh.testnet", "token_ids": ["team-token2"]}\n    {"owner_id": "dorian.testnet", "token_ids": ["team-token3", "team-token4"]},\n  ]\n}\n'})}),(0,s.jsx)(n.h4,{id:"scenario-c---transfer-nfts",children:"Scenario C - transfer NFTs"}),(0,s.jsx)(n.p,{children:"In this scenario, Mike is transferring both his team tokens to Josh. The log should look as follows."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_transfer",\n  "data": [\n    {"old_owner_id": "mike.testnet", "new_owner_id": "josh.testnet", "token_ids": ["team-token", "team-token0"], "memo": "Go Team!"}\n  ]\n}\n'})}),(0,s.jsx)(n.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),(0,s.jsxs)(n.p,{children:["At this point, you should have a good understanding of what the end goal should be so let's get to work! Open the repository and create a new file in the ",(0,s.jsx)(n.code,{children:"nft-contract/src"})," directory called ",(0,s.jsx)(n.code,{children:"events.rs"}),". This is where your log structs will live."]}),(0,s.jsx)(n.h3,{id:"events-rs",children:"Creating the events file"}),(0,s.jsxs)(n.p,{children:["Copy the following into your file. This will outline the structs for your ",(0,s.jsx)(n.code,{children:"EventLog"}),", ",(0,s.jsx)(n.code,{children:"NftMintLog"}),", and ",(0,s.jsx)(n.code,{children:"NftTransferLog"}),". In addition, we've added a way for ",(0,s.jsx)(n.code,{children:"EVENT_JSON:"})," to be prefixed whenever you log the ",(0,s.jsx)(n.code,{children:"EventLog"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/events.rs#L1-L79\n"})}),(0,s.jsxs)(n.p,{children:["This requires the ",(0,s.jsx)(n.code,{children:"serde_json"})," package which you can easily add to your ",(0,s.jsx)(n.code,{children:"nft-contract/Cargo.toml"})," file:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/Cargo.toml#L1-L20\n"})}),(0,s.jsx)(n.h3,{id:"lib-rs",children:"Adding modules and constants"}),(0,s.jsxs)(n.p,{children:["Now that you've created a new file, you need to add the module to the ",(0,s.jsx)(n.code,{children:"lib.rs"})," file. In addition, you can define two constants for the standard and version that will be used across our contract."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/lib.rs#L10-L30\n"})}),(0,s.jsx)(n.h3,{id:"logging-minted-tokens",children:"Logging minted tokens"}),(0,s.jsxs)(n.p,{children:["Now that all the tools are set in place, you can now implement the actual logging functionality. Since the contract will only be minting tokens in one place, it's trivial where you should place the log. Open the ",(0,s.jsx)(n.code,{children:"nft-contract/src/mint.rs"})," file and navigate to the bottom of the file. This is where you'll construct the log for minting. Anytime someone successfully mints an NFT, it will now correctly emit a log."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/mint.rs#L5-L80\n"})}),(0,s.jsx)(n.h3,{id:"logging-transfers",children:"Logging transfers"}),(0,s.jsxs)(n.p,{children:["Let's open the ",(0,s.jsx)(n.code,{children:"nft-contract/src/internal.rs"})," file and navigate to the ",(0,s.jsx)(n.code,{children:"internal_transfer"})," function. This is the location where you'll build your transfer logs. Whenever an NFT is transferred, this function is called and so you'll correctly be logging the transfers."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/internal.rs#L140-L239\n"})}),(0,s.jsxs)(n.p,{children:["This solution, unfortunately, has an edge case which will break things. If an NFT is transferred via the ",(0,s.jsx)(n.code,{children:"nft_transfer_call"})," function, there's a chance that the transfer will be reverted if the ",(0,s.jsx)(n.code,{children:"nft_on_transfer"})," function returns ",(0,s.jsx)(n.code,{children:"true"}),". Taking a look at the logic for ",(0,s.jsx)(n.code,{children:"nft_transfer_call"}),", you can see why this is a problem."]}),(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"nft_transfer_call"})," is invoked, it will:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Call ",(0,s.jsx)(n.code,{children:"internal_transfer"})," to perform the actual transfer logic."]}),"\n",(0,s.jsxs)(n.li,{children:["Initiate a cross-contract call and invoke the ",(0,s.jsx)(n.code,{children:"nft_on_transfer"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:["Resolve the promise and perform logic in ",(0,s.jsx)(n.code,{children:"nft_resolve_transfer"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This will either return true meaning the transfer went fine or it will revert the transfer and return false."}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["If you only place the log in the ",(0,s.jsx)(n.code,{children:"internal_transfer"})," function, the log will be emitted and the indexer will think that the NFT was transferred. If the transfer is reverted during ",(0,s.jsx)(n.code,{children:"nft_resolve_transfer"}),", however, that event should ",(0,s.jsx)(n.strong,{children:"also"})," be emitted. Anywhere that an NFT ",(0,s.jsx)(n.strong,{children:"could"})," be transferred, we should add logs. Replace the ",(0,s.jsx)(n.code,{children:"nft_resolve_transfer"})," with the following code."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs#L182-L277\n"})}),(0,s.jsxs)(n.p,{children:["In addition, you need to add an ",(0,s.jsx)(n.code,{children:"authorized_id"})," and ",(0,s.jsx)(n.code,{children:"memo"})," to the parameters for ",(0,s.jsx)(n.code,{children:"nft_resolve_transfer"})," as shown below."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs#L47-L66\n"})}),(0,s.jsxs)(n.p,{children:["The last step is to modify the ",(0,s.jsx)(n.code,{children:"nft_transfer_call"})," logic to include these new parameters:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs#L102-L159\n"})}),(0,s.jsx)(n.p,{children:"With that finished, you've successfully implemented the events standard and it's time to start testing."}),(0,s.jsx)(n.h2,{id:"redeploying-contract",children:"Deploying the contract"}),(0,s.jsx)(n.p,{children:"For the purpose of readability and ease of development, instead of redeploying the contract to the same account, let's create a sub-account and deploy to that instead. You could have deployed to the same account as none of the changes you implemented in this tutorial would have caused errors."}),(0,s.jsx)(n.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),(0,s.jsxs)(n.p,{children:["Run the following command to create a sub-account ",(0,s.jsx)(n.code,{children:"events"})," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"near create-account events.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n"})}),(0,s.jsx)(n.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export EVENTS_NFT_CONTRACT_ID=events.$NFT_CONTRACT_ID\n"})}),(0,s.jsx)(n.p,{children:"Using the build script, build the deploy the contract as you did in the previous tutorials:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile out/main.wasm --accountId $EVENTS_NFT_CONTRACT_ID\n"})}),(0,s.jsx)(n.h3,{id:"initialization-and-minting",children:"Initialization and minting"}),(0,s.jsx)(n.p,{children:"Since this is a new contract, you'll need to initialize and mint a token. Use the following command to initialize the contract:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"near call $EVENTS_NFT_CONTRACT_ID new_default_meta '{\"owner_id\": \"'$EVENTS_NFT_CONTRACT_ID'\"}' --accountId $EVENTS_NFT_CONTRACT_ID\n"})}),(0,s.jsxs)(n.p,{children:["Next, you'll need to mint a token. By running this command, you'll mint a token with a token ID ",(0,s.jsx)(n.code,{children:'"events-token"'})," and the receiver will be your new account. In addition, you're passing in a map with two accounts that will get perpetual royalties whenever your token is sold."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'near call $EVENTS_NFT_CONTRACT_ID nft_mint \'{"token_id": "events-token", "metadata": {"title": "Events Token", "description": "testing out the new events extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$EVENTS_NFT_CONTRACT_ID\'"}\' --accountId $EVENTS_NFT_CONTRACT_ID --amount 0.1\n'})}),(0,s.jsx)(n.p,{children:"You can check to see if everything went through properly by looking at the output in your CLI:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Doing account.functionCall()\nReceipts: F4oxNfv54cqwUwLUJ7h74H1iE66Y3H7QDfZMmGENwSxd, BJxKNFRuLDdbhbGeLA3UBSbL8UicU7oqHsWGink5WX7S\n    Log [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_mint","data":[{"owner_id":"events.goteam.examples.testnet","token_ids":["events-token"]}]}\nTransaction Id 4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\n\'\'\n'})}),(0,s.jsx)(n.p,{children:"You can see that the event was properly logged!"}),(0,s.jsx)(n.h3,{id:"transferring",children:"Transferring"}),(0,s.jsxs)(n.p,{children:["You can now test if your transfer log works as expected by sending ",(0,s.jsx)(n.code,{children:"benjiman.testnet"})," your NFT."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'near call $EVENTS_NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "events-token", "memo": "Go Team :)", "approval_id": 0}\' --accountId $EVENTS_NFT_CONTRACT_ID --depositYocto 1\n'})}),(0,s.jsx)(n.p,{children:"This should return an output similar to the following:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Doing account.functionCall()\nReceipts: EoqBxrpv9Dgb8KqK4FdeREawVVLWepEUR15KPNuZ4fGD, HZ4xQpbgc8EfU3PiV72LvfXb2f3dVC1n9aVTbQds9zfR\n    Log [events.goteam.examples.testnet]: Memo: Go Team :)\n    Log [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_transfer","data":[{"authorized_id":"events.goteam.examples.testnet","old_owner_id":"events.goteam.examples.testnet","new_owner_id":"benjiman.testnet","token_ids":["events-token"],"memo":"Go Team :)"}]}\nTransaction Id 4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\n\'\'\n'})}),(0,s.jsx)(n.p,{children:"Hurray! At this point, your NFT contract is fully complete and the events standard has been implemented."}),(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),(0,s.jsxs)(n.p,{children:["Today you went through the ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events standard"})," and implemented the necessary logic in your smart contract. You created events for ",(0,s.jsx)(n.a,{href:"#logging-minted-tokens",children:"minting"})," and ",(0,s.jsx)(n.a,{href:"#logging-transfers",children:"transferring"})," NFTs. You then deployed and ",(0,s.jsx)(n.a,{href:"#initialization-and-minting",children:"tested"})," your changes by minting and transferring NFTs."]}),(0,s.jsx)(n.p,{children:"In the next tutorial, you'll look at the basics of a marketplace contract and how it was built."}),(0,s.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,s.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["near-cli: ",(0,s.jsx)(n.code,{children:"3.0.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["NFT standard: ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,s.jsx)(n.code,{children:"1.0.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Events standard: ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NEP297 extension"}),", version ",(0,s.jsx)(n.code,{children:"1.0.0"})]}),"\n"]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);