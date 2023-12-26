import{_ as e,p as a,n as i,R as s}from"./chunks/framework.6NFEWlby.js";const u=JSON.parse('{"title":"Release Notes: v4.4","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/releases/v4.4.md","filePath":"en-US/releases/v4.4.md"}'),t={name:"en-US/releases/v4.4.md"},r=s('<h1 id="release-notes-v4-4" tabindex="-1">Release Notes: v4.4 <a class="header-anchor" href="#release-notes-v4-4" aria-label="Permalink to &quot;Release Notes: v4.4&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/522" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.3.2" target="_blank" rel="noreferrer">v4.3.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.3.3" target="_blank" rel="noreferrer">v4.3.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.4.0" target="_blank" rel="noreferrer">v4.4.0</a></li></ul><h2 id="命令行工具链" tabindex="-1">命令行工具链 <a class="header-anchor" href="#命令行工具链" aria-label="Permalink to &quot;命令行工具链&quot;">​</a></h2><p>v4.3 到 v4.4 期间我们完善了整套命令行工具链，它们包括：</p><ul><li>create-koishi: 快速搭建模板项目，包含 Koishi 的大部分特性</li><li>@koishijs/cli: Koishi 启动工具，提供了监视进程、热重载、环境变量等功能</li><li>@koishijs/scripts: 开发环境工具包，为插件开发与发布提供了一套便利指令</li><li>@koishijs/bootstrap: 快速创建生产环境，适用于 Docker 等云端部署场景</li></ul><p>参见：<a href="./../guide/develop/workspace.html">工作区开发</a></p><h2 id="schema-能力提升" tabindex="-1">Schema 能力提升 <a class="header-anchor" href="#schema-能力提升" aria-label="Permalink to &quot;Schema 能力提升&quot;">​</a></h2><p>同时，在近期的版本我们也大幅提升了 Schema 在网页控制台的表达能力。</p><ul><li>现在网页控制台的配置面板中已经可以正常显示 array, dict 和 object 类型的任意多级嵌套了</li><li>我们还支持了 Schema 的递归表达，并且确保递归表达的 Schema 也能正常序列化和反序列化</li></ul><p>参见：<a href="./../guide/plugin/schema.html">配置构型</a></p>',10),l=[r];function o(h,c,n,_,p,d){return i(),a("div",null,l)}const k=e(t,[["render",o]]);export{u as __pageData,k as default};
