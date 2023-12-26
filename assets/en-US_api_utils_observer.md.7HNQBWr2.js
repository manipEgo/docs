import{_ as e,p as r,n as a,R as o}from"./chunks/framework.EoKL5TQy.js";const v=JSON.parse('{"title":"Observer","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/utils/observer.md","filePath":"en-US/api/utils/observer.md"}'),t={name:"en-US/api/utils/observer.md"},s=o('<h1 id="observer" tabindex="-1">Observer <a class="header-anchor" href="#observer" aria-label="Permalink to &quot;Observer&quot;">​</a></h1><h2 id="observe" tabindex="-1">observe(target, update?, label?) <a class="header-anchor" href="#observe" aria-label="Permalink to &quot;observe(target, update?, label?)&quot;">​</a></h2><ul><li><strong>target:</strong> <code>T extends object</code> 要观测的对象</li><li><strong>update:</strong> <code>(diff: Partial&lt;T&gt;) =&gt; R</code> 更新回调函数</li><li><strong>label:</strong> <code>string</code> 对象的标签，用于标识</li><li>返回值: <code>Observed&lt;T&gt;</code></li></ul><p>创建一个观察者对象。目前只支持从普通对象创建（不支持 Array / Set / Map）。</p><h2 id="observed-diff" tabindex="-1">observed.$diff <a class="header-anchor" href="#observed-diff" aria-label="Permalink to &quot;observed.$diff&quot;">​</a></h2><p>观察者当前的对象变化。</p><h2 id="observed-merge" tabindex="-1">observed.$merge(source) <a class="header-anchor" href="#observed-merge" aria-label="Permalink to &quot;observed.$merge(source)&quot;">​</a></h2><ul><li><strong>source:</strong> <code>object</code> 要合并的对象</li><li>返回值: <code>this</code></li></ul><p>将某些属性合并入当前观察者，不会触发 diff 更新。</p><h2 id="observed-update" tabindex="-1">observed.$update() <a class="header-anchor" href="#observed-update" aria-label="Permalink to &quot;observed.$update()&quot;">​</a></h2><ul><li>返回值: <code>R</code></li></ul><p>更新观察者对象，同时清除 diff。</p>',12),d=[s];function i(l,c,n,b,u,h){return a(),r("div",null,d)}const f=e(t,[["render",i]]);export{v as __pageData,f as default};
