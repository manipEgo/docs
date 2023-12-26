import{_ as o,m as l,p as r,C as e,H as i,R as h,s,K as t,n as k}from"./chunks/framework.6NFEWlby.js";const D=JSON.parse('{"title":"在容器中使用","description":"","frontmatter":{"prev":{"text":"选择安装方式","link":"/ru-RU/manual/starter/"},"next":{"text":"安装和配置插件","link":"/zh-CN/manual/usage/market.html"}},"headers":[],"relativePath":"ru-RU/manual/starter/docker.md","filePath":"ru-RU/manual/starter/docker.md"}'),n={name:"ru-RU/manual/starter/docker.md"},p=h("",5),d=s("div",{class:"language-podman vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"podman"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"podman"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -p"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi")])])])],-1),c=s("div",{class:"language-docker vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"docker"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -p"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi")])])])],-1),_=s("p",null,[t("许多插件依赖 "),s("a",{href:"https://www.npmjs.com/package/koishi-plugin-puppeteer",target:"_blank",rel:"noreferrer"},"koishi-plugin-puppeteer"),t(" 来进行图片渲染，故默认镜像中包含 Chromium。如果你认为镜像过大，不需要预装 Chromium，我们也提供了轻量版本：")],-1),g=s("div",{class:"language-podman vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"podman"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"podman"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -p"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi:latest-lite")])])])],-1),m=s("div",{class:"language-docker vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"docker"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -p"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi:latest-lite")])])])],-1),u=h("",6);function C(y,b,v,F,A,f){const a=l("tab-select");return k(),r("div",null,[p,e(a,{class:"code"},{"tab-podman":i(()=>[d]),"tab-docker":i(()=>[c]),_:1}),_,e(a,{class:"code"},{"tab-podman":i(()=>[g]),"tab-docker":i(()=>[m]),_:1}),u])}const N=o(n,[["render",C]]);export{D as __pageData,N as default};
