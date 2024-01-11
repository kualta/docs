"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9739],{30350:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(85893),s=r(11151),a=r(74866),i=r(85162);const l={sidebar_position:5},c="\uc9c1\ub82c\ud654 \ud504\ub85c\ud1a0\ucf5c",o={id:"sdk/rust/contract-interface/serialization-interface",title:"\uc9c1\ub82c\ud654 \ud504\ub85c\ud1a0\ucf5c",description:"SDK \ub0b4\uc758 \uc9c1\ub82c\ud654 \ud615\uc2dd\uc740 \uc790\ub8cc \uad6c\uc870\uac00 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uba54\uc11c\ub4dc\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uac70\ub098 \uc0c1\ud0dc\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubc14\uc774\ud2b8\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc815\uc758\ud569\ub2c8\ub2e4. \uba54\uc11c\ub4dc \ub9e4\uac1c\ubcc0\uc218\uc758 \uacbd\uc6b0, SDK\uc5d0\uc11c JSON(\uae30\ubcf8\uac12)\uacfc Borsh\ub97c \uc9c0\uc6d0\ud558\uba70, \ub370\uc774\ud130\ub97c \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574\uc11c\ub294 Borsh\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/contract-interface/serialization-interface.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/serialization-interface",permalink:"/ko/sdk/rust/contract-interface/serialization-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/serialization-interface.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tools",previous:{title:"\uc9c0\ubd88 \uba54\uc11c\ub4dc",permalink:"/ko/sdk/rust/contract-interface/payable-methods"},next:{title:"\ucf5c\ubc31",permalink:"/ko/sdk/rust/cross-contract/callbacks"}},u={},d=[{value:"\uae30\ubcf8 \uc9c1\ub82c\ud654 \ud504\ub85c\ud1a0\ucf5c \uc7ac\uc815\uc758(override)",id:"\uae30\ubcf8-\uc9c1\ub82c\ud654-\ud504\ub85c\ud1a0\ucf5c-\uc7ac\uc815\uc758override",level:3},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:4},{value:"JSON \ub798\ud37c \uc790\ub8cc\ud615",id:"json-\ub798\ud37c-\uc790\ub8cc\ud615",level:3},{value:"Base64VecU8",id:"base64vecu8",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\uc9c1\ub82c\ud654-\ud504\ub85c\ud1a0\ucf5c",children:"\uc9c1\ub82c\ud654 \ud504\ub85c\ud1a0\ucf5c"}),"\n",(0,t.jsxs)(n.p,{children:["SDK \ub0b4\uc758 \uc9c1\ub82c\ud654 \ud615\uc2dd\uc740 \uc790\ub8cc \uad6c\uc870\uac00 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uba54\uc11c\ub4dc\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uac70\ub098 \uc0c1\ud0dc\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubc14\uc774\ud2b8\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc815\uc758\ud569\ub2c8\ub2e4. \uba54\uc11c\ub4dc \ub9e4\uac1c\ubcc0\uc218\uc758 \uacbd\uc6b0, SDK\uc5d0\uc11c ",(0,t.jsx)(n.a,{href:"https://www.json.org/json-en.html",children:"JSON"}),"(\uae30\ubcf8\uac12)\uacfc Borsh\ub97c \uc9c0\uc6d0\ud558\uba70, \ub370\uc774\ud130\ub97c \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574\uc11c\ub294 Borsh\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"JSON\uacfc Borsh\uc758 \ud2b9\uc9d5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"JSON:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc0ac\ub78c\uc774 \uc77d\uc744 \uc218 \uc788\uc74c"}),"\n",(0,t.jsx)(n.li,{children:"\uc790\uccb4 \uc124\uba85 \ud615\uc2dd(\uae30\ubcf8 \uc790\ub8cc\ud615\uc744 \uc54c \ud544\uc694 \uc5c6\uc74c)"}),"\n",(0,t.jsx)(n.li,{children:"JavaScript\uc640\uc758 \uc190\uc26c\uc6b4 \uc0c1\ud638 \uc6b4\uc6a9\uc131"}),"\n",(0,t.jsx)(n.li,{children:"\ub35c \ud6a8\uc728\uc801\uc778 \ud06c\uae30 \ubc0f (\ube44)\uc9c1\ub82c\ud654"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Borsh:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc9c1\ub82c\ud654\ub41c \ub370\uc774\ud130 \ud06c\uae30\uc5d0 \ud6a8\uc728\uc801\uc778 \ucef4\ud329\ud2b8 \ubc14\uc774\ub108\ub9ac \ud615\uc2dd"}),"\n",(0,t.jsx)(n.li,{children:"\ub370\uc774\ud130 \ud615\uc2dd\uc744 \uc54c\uc544\uc57c \ud558\uac70\ub098 \ub370\uc774\ud130 \uc5ed\uc9c1\ub82c\ud654\ub97c \uc704\ud55c \uc2a4\ud0a4\ub9c8\uac00 \uc788\uc5b4\uc57c \ud568"}),"\n",(0,t.jsx)(n.li,{children:"\uc5c4\uaca9\ud558\uace0 \ud45c\uc900\uc801\uc778 \ubc14\uc774\ub108\ub9ac \ud45c\ud604"}),"\n",(0,t.jsx)(n.li,{children:"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \ube60\ub974\uace0 \uc801\uc740 \uc624\ubc84\ud5e4\ub4dc"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc77c\ubc18\uc801\uc73c\ub85c JSON\uc740 \ub354 \ub098\uc740 DevX\ub97c \uc704\ud55c \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \ubc0f \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc5d0 \uc0ac\uc6a9\ub418\uba70, \uc5ec\uae30\uc11c Borsh\ub294 \ub354 \uc801\uc740 \ub9e4\uac1c\ubcc0\uc218 \uc9c1\ub82c\ud654 \ubc0f \ub354 \uc801\uc740 \uc5ed\uc9c1\ub82c\ud654 \uacc4\uc0b0\uc744 \ucee8\ud2b8\ub799\ud2b8 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc5ec, \ub354 \uc801\uc740 \uac00\uc2a4\ub97c \uc18c\ubaa8\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \ucd5c\uc801\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"\uae30\ubcf8-\uc9c1\ub82c\ud654-\ud504\ub85c\ud1a0\ucf5c-\uc7ac\uc815\uc758override",children:"\uae30\ubcf8 \uc9c1\ub82c\ud654 \ud504\ub85c\ud1a0\ucf5c \uc7ac\uc815\uc758(override)"}),"\n",(0,t.jsx)(n.p,{children:"\uacb0\uacfc \ubc0f \ub9e4\uac1c\ubcc0\uc218 \uc9c1\ub82c\ud654\ub97c \uac1c\ubcc4\uc801\uc73c\ub85c \uc120\ud0dd\ud560 \uc218 \uc788\uc9c0\ub9cc, \ubaa8\ub4e0 \ub9e4\uac1c\ubcc0\uc218\ub294 \ub3d9\uc77c\ud55c \ud615\uc2dd\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4(\uc77c\ubd80 \ub9e4\uac1c\ubcc0\uc218\ub97c borsh\ub85c \uc9c1\ub82c\ud654\ud558\uace0, \ub2e4\ub978 \ub9e4\uac1c\ubcc0\uc218\ub97c JSON\uc73c\ub85c \uc9c1\ub82c\ud654\ud560 \uc218 \uc5c6\uc74c). \uacb0\uacfc\uc640 \ub9e4\uac1c\ubcc0\uc218\ub97c \ubaa8\ub450 borsh\ub85c \uc804\ud658\ud558\ub294 \uc608\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[result_serializer(borsh)]\npub fn sum_borsh(#[serializer(borsh)] a: u32, #[serializer(borsh)] b: u32) -> u32 {\n    a + b\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc5ec\uae30\uc11c ",(0,t.jsx)(n.code,{children:"result_serializer(borsh)"})," \uc8fc\uc11d\uc740 JSON\uc5d0\uc11c borsh\ub85c\uc758 \uae30\ubcf8 \uacb0\uacfc \uc9c1\ub82c\ud654 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc7ac\uc815\uc758\ud558\uace0, ",(0,t.jsx)(n.code,{children:"serializer(borsh)"})," \uc8fc\uc11d\uc740 \ub9e4\uac1c\ubcc0\uc218 \uc9c1\ub82c\ud654\ub97c \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h4,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,t.jsxs)(n.p,{children:["\ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc5d0\uc11c ",(0,t.jsx)(n.a,{href:"https://borsh.io",children:"Borsh\ub85c \uc9c1\ub82c\ud654"}),"\ub418\uc5b4 \uc788\uace0 base64\ub85c \uc778\ucf54\ub529\ub41c \uac12\uc744 \uac00\uc838\uc624\ub294 \uac04\ub2e8\ud55c \ub370\ubaa8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs#L93-L104\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ub2e4\uc74c \uc2a4\ub2c8\ud3ab\uc740 \ud504\ub860\ud2b8\uc5d4\ub4dc \ub610\ub294 CLI\uc5d0\uc11c \uc774 \uac12\uc744 \uac00\uc838\uc624\ub294 \uac04\ub2e8\ud55c \ud568\uc218\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ucc38\uace0: \uc774 \uba54\uc11c\ub4dc\uc5d0\ub294 \ubc18\ud658 \uac12\uc774 \uc5c6\uc73c\ubbc0\ub85c ",(0,t.jsx)(n.code,{children:"#[result_serializer(borsh)]"}),"\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs#L40-L42\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uac04\ub2e8\ud55c \uad6c\uc870\uccb4\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs#L13-L17\n"})}),"\n",(0,t.jsx)(n.p,{children:"NEAR CLI\ub85c \uc774\ub97c \ud638\ucd9c\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uc720\uc0ac\ud55c \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."}),"\n",(0,t.jsxs)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(i.Z,{value:"near-cli",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near call rust-status-message.demo.testnet set_status_borsh --base64 'DAAAAEFsb2hhIGhvbnVhIQ==' --accountId demo.testnet\n"})})}),(0,t.jsx)(i.Z,{value:"near-cli-rs",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction rust-status-message.demo.testnet set_status_borsh base64-args 'DAAAAEFsb2hhIGhvbnVhIQ==' prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as demo.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,t.jsx)(n.a,{href:"https://gist.github.com/mfornet",children:"Marcelo"}),"\uc758 ",(0,t.jsx)(n.a,{href:"https://gist.github.com/mfornet/d8a94af333a68d67affd8cb78464c7c0",children:"GitHub gist"}),"\uc5d0\uc11c \ud655\uc778\ud558\uc138\uc694."]}),"\n",(0,t.jsx)(n.h3,{id:"json-\ub798\ud37c-\uc790\ub8cc\ud615",children:"JSON \ub798\ud37c \uc790\ub8cc\ud615"}),"\n",(0,t.jsxs)(n.p,{children:["\uc608\uc0c1\uce58 \ubabb\ud558\uac70\ub098 \ube44\ud6a8\uc728\uc801\uc778 \uae30\ubcf8 \ud615\uc2dd\uc774 \uc788\ub294 \ud2b9\uc815 \uc720\ud615\uc744 JSON\uc73c\ub85c \uc9c1\ub82c\ud654\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub3c4\ub85d, ",(0,t.jsx)(n.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/json_types/index.html",children:(0,t.jsx)(n.code,{children:"near_sdk::json_types"})}),"\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uba87 \uac00\uc9c0 \ub798\ud37c \uc790\ub8cc\ud615\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["JavaScript\ub294 ",(0,t.jsx)(n.code,{children:"2^53 - 1"}),"\uae4c\uc9c0\uc758 \uc815\uc218\ub9cc \uc9c0\uc6d0\ud558\uae30 \ub54c\ubb38\uc5d0, JSON \uc815\uc218 \uc5ed\uc9c1\ub82c\ud654\uac00 \uc774 \ubc94\uc704\ub97c \ucd08\uacfc\ud558\uba74 \uc815\ubc00\ub3c4\ub97c \uc783\uac8c \ub429\ub2c8\ub2e4. \uc774\uc5d0 \ub300\uc751\ud558\uae30 \uc704\ud574, \uc774\ub7ec\ud55c \ub9e4\uac1c\ubcc0\uc218 \ub610\ub294 \uacb0\uacfc\uc5d0 \ub300\ud55c \uae30\ubcf8 \uc790\ub8cc\ud615 \ub300\uc2e0 ",(0,t.jsx)(n.code,{children:"I64"}),", ",(0,t.jsx)(n.code,{children:"U64"}),", ",(0,t.jsx)(n.code,{children:"I128"}),", \ubc0f ",(0,t.jsx)(n.code,{children:"U128"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac12\uc744 \ubb38\uc790\uc5f4\ub85c \uc9c1\ub82c\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \ubaa8\ub4e0 \uc815\uc218 \uc790\ub8cc\ud615\uc740 JSON\uc5d0\uc11c \uc815\uc218\ub85c \uc9c1\ub82c\ud654\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc608\ub97c \ub4e4\uc5b4, ",(0,t.jsx)(n.code,{children:"std::convert::Into"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,t.jsx)(n.code,{children:"U64"}),"\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"u64"}),"\ub85c \ubcc0\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn mult(&self, a: U64, b: U64) -> U128 {\n        let a: u64 = a.into();\n        let b: u64 = b.into();\n        let product = u128::from(a) * u128::from(b);\n        product.into()\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ub0b4\ubd80 \uac12\uc5d0 \uc561\uc138\uc2a4\ud558\uace0 ",(0,t.jsx)(n.code,{children:".0"}),"\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:" #[near_bindgen]\n impl Contract {\n     pub fn mult(&self, a: U64, b: U64) -> U128 {\n-        let a: u64 = a.into();\n+        let a = a.0;\n-        let b: u64 = b.into();\n+        let b = b.0;\n         let product = u128::from(a) * u128::from(b);\n         product.into()\n     }\n }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub9ac\uace0 ",(0,t.jsx)(n.code,{children:"U64(...)"}),"\uc640 ",(0,t.jsx)(n.code,{children:"U128(...)"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec, \uc18c\ubb38\uc790 ",(0,t.jsx)(n.code,{children:"u"})," \ubcc0\ud615\uc744 \ub300\ubb38\uc790 ",(0,t.jsx)(n.code,{children:"U"})," \ubcc0\ud615\uc73c\ub85c \uce90\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:" #[near_bindgen]\n impl Contract {\n     pub fn mult(&self, a: U64, b: U64) -> U128 {\n         let a = a.0;\n         let b = b.0;\n         let product = u128::from(a) * u128::from(b);\n-        product.into()\n+        U128(product)\n     }\n }\n"})}),"\n",(0,t.jsx)(n.p,{children:"\ubaa8\ub450 \uacb0\ud569\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn mult(&self, a: U64, b: U64) -> U128 {\n        U128(u128::from(a.0) * u128::from(b.0))\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["SDK\uc5d0 \uc774\ub7ec\ud55c JSON \ub798\ud37c \uc720\ud615\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0\ub9cc, ",(0,t.jsx)(n.a,{href:"https://serde.rs/",children:(0,t.jsx)(n.code,{children:"serde"})}),"\ub97c \uc9c1\ub82c\ud654 \ubc0f \uc5ed\uc9c1\ub82c\ud654\ub97c \uac01\uac01 \uad6c\ud604\ud558\ub294 \ud55c \ubaa8\ub4e0 \uc0ac\uc6a9\uc790 \uc815\uc758 \uc790\ub8cc\ud615\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc720\ud615\uc740 \ubaa8\ub450 JSON \ud615\uc2dd\uc744 \uc7ac\uc815\uc758\ud558\uace0, \ub0b4\ubd80 \uc790\ub8cc\ud615\uc73c\ub85c \uc77c\uad00\ub41c ",(0,t.jsx)(n.code,{children:"borsh"})," \uc9c1\ub82c\ud654 \ubc0f \uc5ed\uc9c1\ub82c\ud654\ub97c \uac00\uc9d1\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"base64vecu8",children:"Base64VecU8"}),"\n",(0,t.jsxs)(n.p,{children:["\uae30\ubcf8 \uc9c1\ub82c\ud654\ub97c \uc7ac\uc815\uc758\ud560 \uc218 \uc788\ub294 \uc790\ub8cc\ud615\uc758 \ub610 \ub2e4\ub978 \uc608\ub294 Rust\uc5d0\uc11c \ubc14\uc774\ud2b8\ub97c \ub098\ud0c0\ub0b4\ub294 ",(0,t.jsx)(n.code,{children:"Vec<u8>"}),"\uc785\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc774\ub294 \uc555\ucd95\ub418\uc9c0 \uc54a\uace0 \uc0ac\uc6a9\ud558\uae30 \ub9e4\uc6b0 \uc5b4\ub824\uc6b4 \uc815\uc218 \ubc30\uc5f4\ub85c \uc9c1\ub82c\ud654\ub429\ub2c8\ub2e4. \ubcf4\ub2e4 \uac04\uacb0\ud55c JSON \uc9c1\ub82c\ud654\ub97c \uc704\ud574, ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Base64",children:"Base-64"})," \ubb38\uc790\uc5f4\ub85c \uc9c1\ub82c\ud654 \ubc0f \uc5ed\uc9c1\ub82c\ud654\ud558\ub294 \ub798\ud37c \uc790\ub8cc\ud615 ",(0,t.jsx)(n.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/json_types/struct.Base64VecU8.html",children:(0,t.jsx)(n.code,{children:"Base64VecU8"})}),"\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc608\uc2dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    // Notice, internally we store `Vec<u8>` \n    pub data: Vec<u8>,\n}\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(data: Base64VecU8) -> Self {\n        Self {\n            data: data.into(),\n        }\n    }\n    pub fn get_data(self) -> Base64VecU8 {\n        self.data.into()\n    }\n}\n"})})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>N});var t=r(67294),s=r(36905),a=r(12466),i=r(16550),l=r(20469),c=r(91980),o=r(67392),u=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function b(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId,a=(0,i.k6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:s});return[(0,c._X)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(a.location.search);n.set(l,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[l,a])]}function p(e){var n,r,s,a,i=e.defaultValue,c=e.queryString,o=void 0!==c&&c,d=e.groupId,p=h(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:p})})),j=m[0],x=m[1],v=f({queryString:o,groupId:d}),g=v[0],k=v[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(n),s=r[0],a=r[1],[s,(0,t.useCallback)((function(e){n&&a.set(e)}),[n,a])]),S=N[0],w=N[1],y=function(){var e=null!=g?g:S;return b({value:e,tabValues:p})?e:null}();return(0,l.Z)((function(){y&&x(y)}),[y]),{selectedValue:j,selectValue:(0,t.useCallback)((function(e){if(!b({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);x(e),k(e),w(e)}),[k,w,p]),tabValues:p}}var m=r(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function v(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,l=e.tabValues,c=[],o=(0,a.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(o(n),i(s))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,s=c.indexOf(e.currentTarget)+1;r=null!=(t=c[s])?t:c[0];break;case"ArrowLeft":var a,i=c.indexOf(e.currentTarget)-1;r=null!=(a=c[i])?a:c[c.length-1]}null==(n=r)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},a,{className:(0,s.Z)("tabs__item",j.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function g(e){var n=e.lazy,r=e.children,s=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=a.find((function(e){return e.props.value===s}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function k(e){var n=p(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(v,Object.assign({},e,n)),(0,x.jsx)(g,Object.assign({},e,n))]})}function N(e){var n=(0,m.Z)();return(0,x.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);