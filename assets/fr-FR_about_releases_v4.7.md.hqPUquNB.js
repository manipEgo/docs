import{_ as e,p as a,n as r,R as t}from"./chunks/framework.6NFEWlby.js";const d=JSON.parse('{"title":"v4.7 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/about/releases/v4.7.md","filePath":"fr-FR/about/releases/v4.7.md"}'),i={name:"fr-FR/about/releases/v4.7.md"},s=t('<h1 id="v4-7-版本介绍" tabindex="-1">v4.7 版本介绍 <a class="header-anchor" href="#v4-7-版本介绍" aria-label="Permalink to &quot;v4.7 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/662" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.7.0" target="_blank" rel="noreferrer">v4.7.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.7.1" target="_blank" rel="noreferrer">v4.7.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.7.2" target="_blank" rel="noreferrer">v4.7.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.7.3" target="_blank" rel="noreferrer">v4.7.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.7.4" target="_blank" rel="noreferrer">v4.7.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.7.5" target="_blank" rel="noreferrer">v4.7.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.7.6" target="_blank" rel="noreferrer">v4.7.6</a></li></ul><h2 id="可重用插件" tabindex="-1">可重用插件 <a class="header-anchor" href="#可重用插件" aria-label="Permalink to &quot;可重用插件&quot;">​</a></h2><p>在这个版本中，我们将 Koishi 的核心框架迁命名为 <a href="https://github.com/shigma/cordis" target="_blank" rel="noreferrer">Cordis</a>，并迁移到了新的仓库。这个框架包含了 Koishi 的诸多核心功能，包括上下文、插件系统、事件模型等等。同时，我们也提供了一套方案用于解决插件的多次加载问题。</p><p>在过去，一个插件同时只有一次加载是有效的。当一个插件已处于运行状态时，再次加载将没有任何效果。然而部分插件确实存在多次加载的需求，比如适配器插件。为此，我们提出了插件作用域的概念。每个上下文都有自己所绑定的作用域，当作用域被卸载时，对应的上下文上的副作用也会被一并清除。同时，我们引入了一个新的生命周期事件 <code>fork</code>。它将在一个插件每一次加载时出发。由此便可以实现插件的重用，同时无需担心影响过去的插件行为。</p><h2 id="新版插件市场" tabindex="-1">新版插件市场 <a class="header-anchor" href="#新版插件市场" aria-label="Permalink to &quot;新版插件市场&quot;">​</a></h2><p>与此同时，我们也编写了全新的 market 和 insight 插件，提供了更好的插件安装和配置体验。</p><p>首先，与过去扁平化的管理机制不同，我们推出了插件组的概念。在配置界面中，我们也使用树形结构显示每一个插件和插件组。用户可以根据自己的需要对插件组进行更名、折叠和展开。</p><p>在依赖图方面，我们也重构了 UI，改为使用力导向图展示插件之间的依赖关系。</p><p>此外，我们允许插件开发在在 <code>package.json</code> 中提供 <code>koishi</code> 属性以声明插件的元信息。这些信息将被插件市场自动读取，并提供更好的安装提示。</p>',10),o=[s];function h(l,n,c,_,p,k){return r(),a("div",null,o)}const g=e(i,[["render",h]]);export{d as __pageData,g as default};
