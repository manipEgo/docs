import{_ as c,m as r,p as a,s as e,K as t,C as n,H as s,R as o,n as l}from"./chunks/framework.6NFEWlby.js";const q=JSON.parse('{"title":"上下文 API","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/console/context.md","filePath":"en-US/api/console/context.md"}'),d={name:"en-US/api/console/context.md"},g=o('<h1 id="上下文-api" tabindex="-1">上下文 API <a class="header-anchor" href="#上下文-api" aria-label="Permalink to &quot;上下文 API&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请注意：本文档介绍的是控制台客户端的 <code>Context</code>，而非 Koishi 本身的 <code>Context</code>。要查看后者的 API 文档请 <a href="./../core/context.html">前往这里</a>。</p></div><p>Koishi 的控制台客户端一样通过插件化的方式加载，因此我们也实现了一套类似的 <code>Context</code> 机制。许多你熟悉的底层 API 在客户端是依然可用的 (例如生命周期事件、服务的定义与使用等等)。此外，我们还提供了一些与客户端相关的 API 来帮助你更方便地开发控制台插件。</p><h2 id="混入属性和方法" tabindex="-1">混入属性和方法 <a class="header-anchor" href="#混入属性和方法" aria-label="Permalink to &quot;混入属性和方法&quot;">​</a></h2><p>以下的属性和方法是由服务混入的。你可以就像使用实例属性和方法一样使用它们。这些 API 的具体用法在对应的服务文档中详细介绍，你可以点击链接前往查看。</p><ul><li><a href="./../service/events.html#ctx-bail">ctx.bail</a></li><li><a href="./../service/events.html#ctx-before">ctx.before</a></li><li><a href="./../service/events.html#ctx-emit">ctx.emit</a></li><li><a href="./../service/events.html#ctx-middleware">ctx.middleware</a></li><li><a href="./../service/events.html#ctx-off">ctx.off</a></li><li><a href="./../service/events.html#ctx-on">ctx.on</a></li><li><a href="./../service/events.html#ctx-once">ctx.once</a></li><li><a href="./../service/events.html#ctx-parallel">ctx.parallel</a></li><li><a href="./../service/registry.html#ctx-plugin">ctx.plugin</a></li><li><a href="./../service/registry.html#ctx-scope">ctx.scope</a></li><li><a href="./../service/events.html#ctx-serial">ctx.serial</a></li><li><a href="./../service/registry.html#ctx-using">ctx.using</a></li></ul><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2>',7),p={id:"ctx-action-实验性",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#ctx-action-实验性","aria-label":'Permalink to "ctx.action(id, options) <badge type="warning">实验性</badge>"'},"​",-1),_=o("<ul><li><strong>id:</strong> <code>string</code> 动作标识符</li><li><strong>options.disabled:</strong> <code>(() =&gt; boolean)?</code> 是否隐藏</li><li><strong>options.action:</strong> <code>Function</code> 回调函数函数</li></ul><p>注册一个动作。</p>",2),m={id:"ctx-menu-实验性",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#ctx-menu-实验性","aria-label":'Permalink to "ctx.menu(id, items) <badge type="warning">实验性</badge>"'},"​",-1),b=o('<ul><li><strong>id:</strong> <code>string</code> 菜单标识符</li><li><strong>items:</strong> <code>MenuItem[]</code> 菜单项列表 <ul><li><strong>items[].id:</strong> <code>string</code> 动作标识符</li><li><strong>items[].label:</strong> <code>MaybeGetter&lt;string&gt;?</code> 菜单项名称</li><li><strong>items[].type:</strong> <code>MaybeGetter&lt;string&gt;?</code> 菜单项类型</li><li><strong>items[].icon:</strong> <code>MaybeGetter&lt;string&gt;?</code> 菜单项图标</li><li><strong>items[].order:</strong> <code>number?</code> 排列优先级</li></ul></li></ul><p>注册一个菜单。</p><h3 id="ctx-page" tabindex="-1">ctx.page(options) <a class="header-anchor" href="#ctx-page" aria-label="Permalink to &quot;ctx.page(options)&quot;">​</a></h3><ul><li><strong>options.id:</strong> <code>string?</code> 页面标识符</li><li><strong>options.path:</strong> <code>string</code> 页面路由</li><li><strong>options.name:</strong> <code>MaybeRefOrGetter&lt;string&gt;</code> 页面名称</li><li><strong>options.desc:</strong> <code>MaybeRefOrGetter&lt;string&gt;?</code> 页面描述</li><li><strong>options.icon:</strong> <code>MaybeRefOrGetter&lt;string&gt;?</code> 页面图标</li><li><strong>options.position:</strong> <code>&#39;top&#39; | &#39;bottom&#39;</code> 图标在活动栏中的位置</li><li><strong>options.order:</strong> <code>number?</code> 排列优先级</li><li><strong>options.disabled:</strong> <code>(() =&gt; boolean)?</code> 是否隐藏</li><li><strong>options.component:</strong> <code>Component</code> 页面组件</li></ul><p>注册一个页面。</p>',5),u={id:"ctx-settings-实验性",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#ctx-settings-实验性","aria-label":'Permalink to "ctx.settings(options) <badge type="warning">实验性</badge>"'},"​",-1),v=o('<ul><li><strong>options.type:</strong> <code>string</code> 所属类别</li><li><strong>options.title:</strong> <code>string?</code> 类别名称</li><li><strong>options.order:</strong> <code>number?</code> 排列优先级</li><li><strong>options.disabled:</strong> <code>(() =&gt; boolean)?</code> 是否隐藏</li><li><strong>options.schema:</strong> <code>Schema?</code> 配置构型</li><li><strong>options.component:</strong> <code>Component?</code> 配置组件</li></ul><p>扩展用户设置。当使用了 <code>component</code> 时，<code>schema</code> 会被忽略。</p><h3 id="ctx-slot" tabindex="-1">ctx.slot(options) <a class="header-anchor" href="#ctx-slot" aria-label="Permalink to &quot;ctx.slot(options)&quot;">​</a></h3><ul><li><strong>options.type:</strong> <code>string</code> 插槽名称</li><li><strong>options.order:</strong> <code>number?</code> 排列优先级</li><li><strong>options.disabled:</strong> <code>(() =&gt; boolean)?</code> 是否隐藏</li><li><strong>options.component:</strong> <code>Component</code> 注入组件</li></ul><p>向特定插槽注入组件。</p><h3 id="ctx-theme" tabindex="-1">ctx.theme(options) <a class="header-anchor" href="#ctx-theme" aria-label="Permalink to &quot;ctx.theme(options)&quot;">​</a></h3><ul><li><strong>options.id:</strong> <code>string</code> 主题标识符 (必须以 <code>-dark</code> 或 <code>-light</code> 结尾)</li><li><strong>options.name:</strong> <code>string</code> 主题名称</li><li><strong>options.components:</strong> <code>Dict&lt;Component&gt;?</code> 主题提供的布局组件</li></ul><p>定义一个新的主题。</p>',8);function P(T,A,y,C,S,I){const i=r("badge");return l(),a("div",null,[g,e("h3",p,[t("ctx.action(id, options) "),n(i,{type:"warning"},{default:s(()=>[t("实验性")]),_:1}),t(),h]),_,e("h3",m,[t("ctx.menu(id, items) "),n(i,{type:"warning"},{default:s(()=>[t("实验性")]),_:1}),t(),x]),b,e("h3",u,[t("ctx.settings(options) "),n(i,{type:"warning"},{default:s(()=>[t("实验性")]),_:1}),t(),f]),v])}const V=c(d,[["render",P]]);export{q as __pageData,V as default};
