import{_ as e,p as a,n as t,R as r}from"./chunks/framework.EoKL5TQy.js";const f=JSON.parse('{"title":"v4.1 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/about/releases/v4.1.md","filePath":"de-DE/about/releases/v4.1.md"}'),o={name:"de-DE/about/releases/v4.1.md"},i=r('<h1 id="v4-1-版本介绍" tabindex="-1">v4.1 版本介绍 <a class="header-anchor" href="#v4-1-版本介绍" aria-label="Permalink to &quot;v4.1 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/472" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.0.1" target="_blank" rel="noreferrer">v4.0.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.1.0" target="_blank" rel="noreferrer">v4.1.0</a></li></ul><h2 id="插件与热重载优化" tabindex="-1">插件与热重载优化 <a class="header-anchor" href="#插件与热重载优化" aria-label="Permalink to &quot;插件与热重载优化&quot;">​</a></h2><p>在这个版本中我们优化了插件的加载方式。一方面我们缓解了 service 监听器数量很容易超过限制导致内存泄漏警告的问题，另一方面热重载导致的内存泄漏和加载错误的问题也得到了修复。</p><p>除此以外，我们还要隆重介绍 Koishi v4 的热重载功能。它将拥有许多全新的特性：</p><h3 id="细粒度的模块依赖分析" tabindex="-1">细粒度的模块依赖分析 <a class="header-anchor" href="#细粒度的模块依赖分析" aria-label="Permalink to &quot;细粒度的模块依赖分析&quot;">​</a></h3><p>过去的热重载功能会将任何文件变动都扩展到根插件 (即配置文件中声明的插件)，并重载扩散路径上的每一个文件。而新的依赖分析工具能够将文件变动引发的副作用具体计算到每一个模块，因此部分变动在到达某个子插件时就会停止扩散，从而在大型插件中获得更好的开发体验。</p><p>为了实现这种优化，我们假设每个插件模块的导出都是原子的。换言之，如果一个模块的导出恰好是正在运行的插件，那么这个插件将是模块导出的唯一用途，在插件被加载以外的任何地方不会用到这个模块的导出。对于正确使用模块化进行开发的项目，达成这个约定并不困难。事实上，插件如果有任何其他需要提供的功能，也都可以通过 Service API 实现。</p><p>如果某些插件实在难以满足这个约定，我们也提供了额外的方案。开发者要么不将插件作为模块的导出 (比如作为导出的一部分)，要么在插件中手动声明 <code>sideEffect</code>。两种方法都能规避依赖分析工具的优化，从而实行保守的热重载策略。</p><h3 id="热重载与配置管理的联动" tabindex="-1">热重载与配置管理的联动 <a class="header-anchor" href="#热重载与配置管理的联动" aria-label="Permalink to &quot;热重载与配置管理的联动&quot;">​</a></h3><p>在过去，插件热重载与插件管理 (@koishijs/plugin-manager) 是作为独立的功能开发的。当它们同时启用时可能会遇到一些问题。当插件管理器修改了静态的配置文件 (例如 koishi.config.yml) 时，热重载机制可能检测不到变动；但当我们将静态配置文件纳入依赖分析，又会导致配置管理器明明只修改了一个插件的配置，却会导致整个应用被重新启动 (因为配置文件的依赖优先级是最高的)。</p><p>这次更新我们针对这个问题提供了统一的解决方案。首先插件管理器将只针对静态配置文件的场景生效，其次当启用了热重载功能时，一旦需要修改配置文件，插件管理器将不再触发插件变动，交由依赖分析工具处理改动过的配置文件。开发者得以同时使用插件管理器和热重载功能，获得更好的开发体验。</p><h3 id="更多细节优化" tabindex="-1">更多细节优化 <a class="header-anchor" href="#更多细节优化" aria-label="Permalink to &quot;更多细节优化&quot;">​</a></h3><p>新版本中我们还支持了新的配置项 <code>config.watch.debounce</code>，用于控制热重载的触发频率。默认情况下文件变动 100ms 之后才会触发热重载，解决了强迫症程序员频繁保存带来的高频率热重载问题。以及我们还加入了对 json 配置文件的写入支持 (不过有了 yaml 真的会有人用 json 吗)。</p>',14),s=[i];function l(h,n,c,d,p,_){return t(),a("div",null,s)}const m=e(o,[["render",l]]);export{f as __pageData,m as default};
