import{_ as n,m as l,p as r,C as a,H as s,R as o,s as e,K as t,n as h}from"./chunks/framework.6NFEWlby.js";const I=JSON.parse('{"title":"Install for Container","description":"","frontmatter":{"prev":{"text":"Installation","link":"/en-US/manual/starter/"},"next":{"text":"Install and Configure Plugins","link":"/en-US/manual/usage/market.html"}},"headers":[],"relativePath":"en-US/manual/starter/docker.md","filePath":"en-US/manual/starter/docker.md"}'),d={name:"en-US/manual/starter/docker.md"},c=o('<h1 id="install-for-container" tabindex="-1">Install for Container <a class="header-anchor" href="#install-for-container" aria-label="Permalink to &quot;Install for Container&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Containerized software products like Docker are developed for production environment. We will assume that you have enough acknowledgement for managing a server as well as the concept of &quot;Containerization&quot; or the common operations for these software products. It is not recommended for those who don&#39;t have enough acknowledgement unless they are installing Koishi on routers or NAS. Please <a href="./">Choose Other Installation Methods</a>.</p></div><p>Koishi provides an <a href="https://hub.docker.com/r/koishijs/koishi" target="_blank" rel="noreferrer">official Docker image</a>, which would convenient running Koishi in a container. You may need to install <a href="https://podman.io" target="_blank" rel="noreferrer">Podman</a> or <a href="https://www.docker.com" target="_blank" rel="noreferrer">Docker</a> first.</p><h2 id="start-container" tabindex="-1">Start container <a class="header-anchor" href="#start-container" aria-label="Permalink to &quot;Start container&quot;">​</a></h2><p>Start container with the following command:</p>',5),p=e("div",{class:"language-podman vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"podman"),e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"podman"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -p"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 5140"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi")])])])],-1),k=e("div",{class:"language-docker vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"docker"),e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -p"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 5140"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi")])])])],-1),u=e("p",null,[t("Many plugins depend on "),e("a",{href:"https://www.npmjs.com/package/koishi-plugin-puppeteer",target:"_blank",rel:"noreferrer"},"koishi-plugin-pupeteer"),t(" to render images, so the default image includes Chromium. If you don't need Chromium to be included, we also offer a lite version:")],-1),g=e("div",{class:"language-podman vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"podman"),e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"podman"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -p"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 5140"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi:latest-lite")])])])],-1),m=e("div",{class:"language-docker vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"docker"),e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -p"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 5140"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi:latest-lite")])])])],-1),C=o('<p>On startup, the Koishi console will be bound to the 5140 port.</p><p>If you want to persist your data, use <code>-v /some/place:/koishi</code> to remap Koishi files into your local file system or volumes.</p><p>If you want to switch the time zone, use <code>-e TZ=Asia/Shanghai</code>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You could update all the plugins as well as Koishi itself in Koishi Console. After persistence, only several programs such as Chromium or Node.js would be updated when you update the container.</p></div><h2 id="install-plugins" tabindex="-1">Install Plugins <a class="header-anchor" href="#install-plugins" aria-label="Permalink to &quot;Install Plugins&quot;">​</a></h2><p>在容器运行时，可以通过在浏览器中访问 <code>http://宿主机地址:5140</code> 在控制台中安装和启用插件。If you cannot access the Koishi Console, please check the configurations of your firewall.</p>',6);function _(f,y,v,b,w,F){const i=l("tab-select");return h(),r("div",null,[c,a(i,{class:"code"},{"tab-podman":s(()=>[p]),"tab-docker":s(()=>[k]),_:1}),u,a(i,{class:"code"},{"tab-podman":s(()=>[g]),"tab-docker":s(()=>[m]),_:1}),C])}const S=n(d,[["render",_]]);export{I as __pageData,S as default};
