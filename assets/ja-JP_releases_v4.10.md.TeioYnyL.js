import{_ as e,p as a,n as r,R as i}from"./chunks/framework.6NFEWlby.js";const u=JSON.parse('{"title":"v4.10 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/releases/v4.10.md","filePath":"ja-JP/releases/v4.10.md"}'),t={name:"ja-JP/releases/v4.10.md"},o=i('<h1 id="v4-10-版本介绍" tabindex="-1">v4.10 版本介绍 <a class="header-anchor" href="#v4-10-版本介绍" aria-label="Permalink to &quot;v4.10 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/839" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.0" target="_blank" rel="noreferrer">v4.10.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.1" target="_blank" rel="noreferrer">v4.10.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.2" target="_blank" rel="noreferrer">v4.10.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.3" target="_blank" rel="noreferrer">v4.10.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.4" target="_blank" rel="noreferrer">v4.10.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.5" target="_blank" rel="noreferrer">v4.10.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.6" target="_blank" rel="noreferrer">v4.10.6</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.7" target="_blank" rel="noreferrer">v4.10.7</a></li></ul><h2 id="orm-更新" tabindex="-1">ORM 更新 <a class="header-anchor" href="#orm-更新" aria-label="Permalink to &quot;ORM 更新&quot;">​</a></h2><p>此版本中，我们对 Koishi 背后的 ORM 框架进行了优化，极大地扩展了数据库 API 的表达能力：</p><ul><li>使用 WASM 重新实现了 @koishijs/plugin-database-sqlite，从而规避了用户安装失败的问题</li><li>支持了所有数据库统一的 <code>autoInc</code> 行为</li><li><code>sel.orderBy()</code> 和 <code>sel.project()</code> 支持了传入表达式</li><li>全面支持了 <code>sel.groupBy()</code> 的使用以及上述语法的多次链式调用</li></ul><h2 id="消息组件" tabindex="-1">消息组件 <a class="header-anchor" href="#消息组件" aria-label="Permalink to &quot;消息组件&quot;">​</a></h2><p>本次更新我们为消息元素加入了更多特性，包括组件、插值、注释、模板元素、JSX 支持等，同时也支持了消息组件在会话和本地化文件中的使用。这意味着用户可以直接在插件中编写 JSX 来发送消息，而不再需要使用 XML 字符串了。</p><h2 id="飞书适配器" tabindex="-1">飞书适配器 <a class="header-anchor" href="#飞书适配器" aria-label="Permalink to &quot;飞书适配器&quot;">​</a></h2><p>经过了长达 7 个月的努力，我们终于完成了飞书适配器，让我们感谢 <a href="https://github.com/maikotan" target="_blank" rel="noreferrer">@MaikoTan</a>！</p><h2 id="本地化编辑" tabindex="-1">本地化编辑 <a class="header-anchor" href="#本地化编辑" aria-label="Permalink to &quot;本地化编辑&quot;">​</a></h2><p>发布了全新的 @koishijs/plugin-locales 插件，它提供了一个控制台页面，允许用户在线编辑任意本地化文本。</p><h2 id="配置文件插值" tabindex="-1">配置文件插值 <a class="header-anchor" href="#配置文件插值" aria-label="Permalink to &quot;配置文件插值&quot;">​</a></h2><div><p>在这个版本中，我们还支持了使用插值语法配置非字符串的配置项。这允许你更好地利用环境变量进行配置，比如将 <code>port</code> 设置为 <code>${{ +env.BASE_PORT }}</code> 等等。这也意味着你现在甚至可以在配置文件中使用函数了！</p></div>',13),s=[o];function l(h,n,c,d,k,_){return r(),a("div",null,s)}const f=e(t,[["render",l]]);export{u as __pageData,f as default};
