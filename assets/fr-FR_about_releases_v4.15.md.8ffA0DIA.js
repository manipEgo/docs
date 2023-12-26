import{_ as e,p as r,n as a,R as i}from"./chunks/framework.EoKL5TQy.js";const v=JSON.parse('{"title":"v4.15 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/about/releases/v4.15.md","filePath":"fr-FR/about/releases/v4.15.md"}'),t={name:"fr-FR/about/releases/v4.15.md"},o=i('<h1 id="v4-15-版本介绍" tabindex="-1">v4.15 版本介绍 <a class="header-anchor" href="#v4-15-版本介绍" aria-label="Permalink to &quot;v4.15 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/1208" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.15.0" target="_blank" rel="noreferrer">v4.15.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.15.1" target="_blank" rel="noreferrer">v4.15.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.15.2" target="_blank" rel="noreferrer">v4.15.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.15.3" target="_blank" rel="noreferrer">v4.15.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.15.4" target="_blank" rel="noreferrer">v4.15.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.15.5" target="_blank" rel="noreferrer">v4.15.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.15.6" target="_blank" rel="noreferrer">v4.15.6</a></li></ul><h2 id="satori-v3" tabindex="-1">Satori v3 <a class="header-anchor" href="#satori-v3" aria-label="Permalink to &quot;Satori v3&quot;">​</a></h2><p>v4.15 版本最重要的特性就是将 Satori 更新到了 v3 版本。新版本对现有 API 进行了一些重构，并从中总结出了一个通用的跨平台聊天协议，名为 Satori Protocol。你可以在 <a href="https://satori.chat/" target="_blank" rel="noreferrer">Satori 官网</a> 上查看完整的协议文档。与此同时，我们也发布了一些与适配器与网络相关的插件：</p><ul><li><a href="./../../plugins/adapter/satori.html">adapter-satori</a>：适用于 Satori 协议的适配器</li><li><a href="./../../plugins/develop/server-satori.html">server-satori</a>：支持 Satori 协议的 API 服务器</li><li><a href="./../../plugins/develop/server-proxy.html">server-proxy</a>：代理服务器，可用于解决前端跨域问题</li><li><a href="./../../plugins/develop/server-temp.html">server-temp</a>：临时服务器，可用于本地图片发送等场景</li></ul><p>这些插件同步发布在 Satori 和 Koishi 侧。为此，我们发布了 <a href="https://github.com/koishijs/upstream" target="_blank" rel="noreferrer">upstream</a> 仓库，用于同步上游生态中的插件。未来我们将提供让 Koishi 能够直接加载上游插件的能力，敬请期待。</p><p>此外，Satori v3 也引入了更多原生交互能力，包括按钮元素、交互事件等。相关的能力已经在全部支持按钮的平台 (KOOK, Discord, LINE, QQ, Telegram, WhatsApp) 上实现。</p><h2 id="cordis-v3" tabindex="-1">Cordis v3 <a class="header-anchor" href="#cordis-v3" aria-label="Permalink to &quot;Cordis v3&quot;">​</a></h2><p>另一个重要程度不亚于 Satori v3 的更新则是 Cordis v3。新版本基于 <code>Proxy</code> 重新实现了整套的服务 API，相比旧版本具有更强的可追溯性、可靠性和扩展性。同时，新版本的所有 API 都是无副作用的，这意味着困扰用户的多例问题将大幅减少。</p><p>由于这些优化处于底层，对于开发者比较难以察觉，因此这里举出一个直接的应用。在插件内部使用 <code>ctx.logger()</code> 发送日志时，将基于上下文进行追踪，在控制台的插件详情页面中将展示该插件产生的日志。同时，现有的日志界面也支持了对日志进行跳转，以便于开发者快速定位问题。</p><h2 id="数据库更新" tabindex="-1">数据库更新 <a class="header-anchor" href="#数据库更新" aria-label="Permalink to &quot;数据库更新&quot;">​</a></h2><p>在这个版本中，我们还对 ORM 能力进行了大幅优化：</p><ul><li>修复了 <code>join</code>, <code>groupBy</code>, <code>project</code> 在若干边界情况下的问题</li><li>支持了 <code>$.array()</code> 和 <code>$.object()</code> 等用于操作结构化数据的 API</li><li>对数据库进行 <code>set</code>, <code>upsert</code>, <code>remove</code> 操作时将返回修改条目相关信息了</li><li>修复了 SQL 对 JSON 中嵌套属性访问异常的问题</li><li>优化了 SQLite 的访问性能，解决了数据库体积过大时无法使用的问题</li><li>新增了 PostgreSQL 数据库支持</li></ul><h2 id="控制台更新" tabindex="-1">控制台更新 <a class="header-anchor" href="#控制台更新" aria-label="Permalink to &quot;控制台更新&quot;">​</a></h2><p>这个版本也优化了控制台的使用体验：</p><ul><li>使用统一的菜单 API 显示布局菜单和上下文菜单，为多个插件提供了更多的菜单项</li><li>支持了快捷键绑定 (例如，在插件配置界面键入 ⌘S 将会保存配置)</li><li>config 插件支持了插件和插件组在侧边栏的重命名</li><li>config 插件支持在启用、重载插件时将对配置项进行检查</li><li>explorer 插件支持了符号链接的解析与显示</li><li>优化了可访问性，修复了若干无法显示某些文本的问题</li></ul><h2 id="qq-适配器" tabindex="-1">QQ 适配器 <a class="header-anchor" href="#qq-适配器" aria-label="Permalink to &quot;QQ 适配器&quot;">​</a></h2><p>随着腾讯开放平台的的推出，开发者现在可以直接接入官方机器人 API，而无需使用第三方登录方案。因此，我们发布了 QQ 适配器 (能够同时支持 QQ 群和 QQ 频道机器人的使用)，同时废弃了过时的 QQGuild 适配器。此外 OneBot 适配器也转移到社区维护。</p>',18),l=[o];function s(h,c,n,d,p,u){return a(),r("div",null,l)}const g=e(t,[["render",s]]);export{v as __pageData,g as default};
