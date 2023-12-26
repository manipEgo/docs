import{_ as k,m as l,p as o,C as e,H as i,R as n,s,K as a,n as d}from"./chunks/framework.EoKL5TQy.js";const L=JSON.parse('{"title":"工作區開發","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/guide/develop/workspace.md","filePath":"zh-TW/guide/develop/workspace.md"}'),r={name:"zh-TW/guide/develop/workspace.md"},c=n("",5),g=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," setup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [name] -- [-c] [-m] [-G]")])])])],-1),y=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," setup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [name] [-c] [-m] [-G]")])])])],-1),u=n("",6),_=s("h3",{id:"创建私域插件",tabindex:"-1"},[a("创建私域插件 "),s("a",{class:"header-anchor",href:"#创建私域插件","aria-label":'Permalink to "创建私域插件"'},"​")],-1),C=s("p",null,[a("如果你发现想要创建的插件名称已经被占用了，除了重新想名字或在后面加上数字之外，你还可以改为创建私域插件。私域插件使用你自己的 "),s("a",{href:"./setup.html#注册-npm"},"npm 用户名"),a(" 作为包名前缀，因此不用担心与其他人的插件冲突。")],-1),F=s("p",null,[a("假设你的 npm 用户名是 "),s("code",null,"alice"),a("，那么你可以使用下面的命令创建一个私域插件工作区：")],-1),B=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," setup"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @alice/example")])])])],-1),m=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," setup"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @alice/example")])])])],-1),A=n("",5),E=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," build"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name]")])])])],-1),b=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," build"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name]")])])])],-1),v=n("",5),f=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," install"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...deps] -w koishi-plugin-[name]")])])])],-1),T=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," workspace"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishi-plugin-[name]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...deps]")])])])],-1),D=n("",4),x=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," dep")])])])],-1),q=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," dep")])])])],-1),P=n("",7),S=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi-plugin-forward")])])])],-1),V=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi-plugin-forward")])])])],-1),I=s("h3",{id:"开发-koishi",tabindex:"-1"},[a("开发 Koishi "),s("a",{class:"header-anchor",href:"#开发-koishi","aria-label":'Permalink to "开发 Koishi"'},"​")],-1),j=s("p",null,"工作区不仅可以用于插件的二次开发，还可以用于开发 Koishi 本身。只需使用下面的命令将 Koishi 仓库克隆到本地，并完成构建：",-1),w=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," build"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -w"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @root/koishi")])])])],-1),K=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," workspace"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @root/koishi"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," build")])])])],-1),N=s("p",null,[a("通常来说，非插件仓库在克隆下来之后还需经过路径配置才可以正常使用。不过不同担心，模板项目支持已经内置了 Koishi 生态中的几个核心仓库 ("),s("a",{href:"https://github.com/koishijs/koishi",target:"_blank",rel:"noreferrer"},"koishi"),a(", "),s("a",{href:"https://github.com/satorijs/satori",target:"_blank",rel:"noreferrer"},"satori"),a(", "),s("a",{href:"https://github.com/shigma/minato",target:"_blank",rel:"noreferrer"},"minato"),a(") 的路径配置。")],-1),R=s("p",null,[a("完成上述操作后，现在你的 "),s("code",null,"yarn dev"),a(" 已经能直接使用 Koishi 的 TypeScript 源码了！")],-1);function G($,z,W,H,O,J){const t=l("tab-select"),h=l("chat-message"),p=l("chat-panel");return d(),o("div",null,[c,e(t,{class:"code"},{"tab-npm":i(()=>[g]),"tab-yarn":i(()=>[y]),_:1}),u,e(p,null,{default:i(()=>[e(h,{nickname:"Alice"},{default:i(()=>[a("天王盖地虎")]),_:1}),e(h,{nickname:"Koishi"},{default:i(()=>[a("宝塔镇河妖")]),_:1})]),_:1}),_,C,F,e(t,{class:"code"},{"tab-npm":i(()=>[B]),"tab-yarn":i(()=>[m]),_:1}),A,e(t,{class:"code"},{"tab-npm":i(()=>[E]),"tab-yarn":i(()=>[b]),_:1}),v,e(t,{class:"code"},{"tab-npm":i(()=>[f]),"tab-yarn":i(()=>[T]),_:1}),D,e(t,{class:"code"},{"tab-npm":i(()=>[x]),"tab-yarn":i(()=>[q]),_:1}),P,e(t,{class:"code"},{"tab-npm":i(()=>[S]),"tab-yarn":i(()=>[V]),_:1}),I,j,e(t,{class:"code"},{"tab-npm":i(()=>[w]),"tab-yarn":i(()=>[K]),_:1}),N,R])}const M=k(r,[["render",G]]);export{L as __pageData,M as default};
