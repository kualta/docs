"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5279],{13787:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(85893),t=s(11151),l=s(42352);const o={id:"files",title:"\ud30c\uc77c",sidebar_label:"\ud30c\uc77c"},a=void 0,r={id:"bos/components/files",title:"\ud30c\uc77c",description:"Files\ub294 \ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d\uc744 \ud1b5\ud574 \ud30c\uc77c\uc744 \uc785\ub825\ud560 \uc218 \uc788\ub294 \ube4c\ud2b8\uc778 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\ub824\uba74, Files \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 IpfsImageUpload \ucef4\ud3ec\ub10c\ud2b8\ub85c\ubd80\ud130\uc758 \uc758\uc874\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/components/files.md",sourceDirName:"bos/components",slug:"/bos/components/files",permalink:"/ko/bos/components/files",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/files.md",tags:[],version:"current",frontMatter:{id:"files",title:"\ud30c\uc77c",sidebar_label:"\ud30c\uc77c"},sidebar:"integrate",previous:{title:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub354",permalink:"/ko/bos/components/ipfs"},next:{title:"\ub9c8\ud06c\ub2e4\uc6b4",permalink:"/ko/bos/components/markdown"}},c={},d=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Files"}),"\ub294 \ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d\uc744 \ud1b5\ud574 \ud30c\uc77c\uc744 \uc785\ub825\ud560 \uc218 \uc788\ub294 \ube4c\ud2b8\uc778 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\ub824\uba74, ",(0,i.jsx)(n.code,{children:"Files"})," \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 ",(0,i.jsx)(n.a,{href:"/ko/bos/components/ipfs",children:(0,i.jsx)(n.code,{children:"IpfsImageUpload"})})," \ucef4\ud3ec\ub10c\ud2b8\ub85c\ubd80\ud130\uc758 \uc758\uc874\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/react-files",children:"\uc5ec\uae30"}),"\uc11c ",(0,i.jsx)(n.code,{children:"Files"})," \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub300\ud574 \ub354 \ub9ce\uc774 \uc77d\uc5b4\ubcf4\uc138\uc694."]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,i.jsx)(l.W,{id:"1",height:"220px",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'State.init({ img: null });\n\nconst uploadFileUpdateState = (body) => {\n  asyncFetch(\n    "https://ipfs.near.social/add",\n    {\n      method: "POST",\n      headers: { Accept: "application/json" },\n      body\n    }\n  ).then(\n    (res) => {\n      const cid = res.body.cid;\n      State.update({ img: { cid } });\n    }\n  )\n};\n\nconst filesOnChange = (files) => {\n  if (files) {\n    State.update({ img: { uploading: true, cid: null } });\n    uploadFileUpdateState(files[0]);\n  }\n};\n\nreturn (\n  <div className="d-inline-block">\n    { state.img?\n      <img class="rounded w-100 h-100"\n        style={{ objectFit: "cover" }}\n        src={`https://ipfs.near.social/ipfs/${state.img.cid}`}\n        alt="upload preview" />\n      : ""\n    }\n    <Files\n      multiple={false}\n      accepts={["image/*"]}\n      minFileSize={1}\n      clickable\n className="btn btn-outline-primary"\n      onChange={filesOnChange}\n    >\n      { state.img?.uploading ? <> Uploading </> : "Upload an Image" }\n    </Files>\n  </div>\n);\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},42352:(e,n,s)=>{s.d(n,{W:()=>a});var i=s(67294),t=s(16729),l=s(91262),o=s(85893);function a(e){var n=e.children,a=e.id,r=void 0===a?1:a,c=e.height,d=void 0===c?"160px":c;return(0,o.jsx)(l.Z,{fallback:(0,o.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(b){}var l=s(58613),a=l.Widget,c=l.useInitNear,p=s(2302).ZP,h=(0,i.useState)(e),m=h[0],u=h[1],f=c().initNear,g=(0,t.O)().selector;return(0,i.useEffect)((function(){f&&g&&f({networkId:"mainnet",selector:g})}),[f,g]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{class:"monaco",children:(0,o.jsx)(p,{height:d,value:m,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return u(e)}})}),(0,o.jsxs)("div",{class:"code_iframe",children:[(0,o.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,o.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,o.jsx)("hr",{class:"preview-border"}),(0,o.jsx)("div",{class:"bootstrap-scope",children:(0,o.jsx)("div",{class:"vm-widget",children:(0,o.jsx)(a,{code:m},r)})})]})]})}})}}}]);