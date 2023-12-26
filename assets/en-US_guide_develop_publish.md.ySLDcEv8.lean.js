import{_ as l,m as h,p,C as n,H as i,R as t,s,K as a,n as o}from"./chunks/framework.EoKL5TQy.js";const w=JSON.parse('{"title":"Publishing Plugins","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/develop/publish.md","filePath":"en-US/guide/develop/publish.md"}'),k={name:"en-US/guide/develop/publish.md"},r=t("",31),d=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," pub"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name]")])])])],-1),c=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," pub"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name]")])])])],-1),g=t("",6),u=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," pub"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name] -- --registry https://registry.npmjs.org")])])])],-1),y=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," pub"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name] --registry https://registry.yarnpkg.com")])])])],-1),B=s("p",null,"对于 Yarn v2 及以上版本，你还可以分别针对发布和安装设置不同的镜像：",-1),m=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 安装时使用国内镜像")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," npmRegistryServer"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://registry.npmmirror.com")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 发布时使用官方镜像")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," npmPublishRegistry"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://registry.yarnpkg.com")])])])],-1),C=s("p",null,"::::",-1),F=s("h2",{id:"updating-version",tabindex:"-1"},[a("Updating version "),s("a",{class:"header-anchor",href:"#updating-version","aria-label":'Permalink to "Updating version"'},"​")],-1),b=s("p",null,[a("初始创建的插件版本号为 "),s("code",null,"1.0.0"),a("。Its number needs to be updated before releasing changes. Run the command in the workspace root to update that:")],-1),E=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," bump"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name] -- ["),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"-1"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"-2"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"-3"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"-p"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"-v "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},"<"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"ver"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"] [-r]")])])])],-1),f=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," bump"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name] ["),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"-1"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"-2"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"-3"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"-p"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}},"|"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"-v "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},"<"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"ver"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"] [-r]")])])])],-1),A=t("",2);function q(v,_,j,T,P,D){const e=h("tab-select");return o(),p("div",null,[r,n(e,{class:"code"},{"tab-npm":i(()=>[d]),"tab-yarn":i(()=>[c]),_:1}),g,n(e,{class:"code"},{"tab-npm":i(()=>[u]),"tab-yarn":i(()=>[y]),_:1}),B,n(e,{class:"code"},{"tab-yarn":i(()=>[m]),_:1}),C,F,b,n(e,{class:"code"},{"tab-npm":i(()=>[E]),"tab-yarn":i(()=>[f]),_:1}),A])}const I=l(k,[["render",q]]);export{w as __pageData,I as default};
