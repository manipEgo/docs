import{_ as s,p as a,n as i,R as e}from"./chunks/framework.EoKL5TQy.js";const u=JSON.parse(`{"title":"元组 (Tuple)","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\npoint: Schema.tuple([Number, Number]).description('请输入点的坐标。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ja-JP/schema/basic/tuple.md","filePath":"ja-JP/schema/basic/tuple.md"}`),t={name:"ja-JP/schema/basic/tuple.md"},h=e(`<h1 id="元组" tabindex="-1">元组 (Tuple) <a class="header-anchor" href="#元组" aria-label="Permalink to &quot;元组 (Tuple)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>目前我们只支持元组内部元素是原始类型 (<a href="./string.html">String</a>, <a href="./number.html">Number</a>, <a href="./boolean.html">Boolean</a>) 的情况。如果你要描述比较复杂的类型，请使用 <a href="./object.html">Object</a> 或 <a href="./array.html">Array</a> 替代。</p></div><p><code>Schema.tuple()</code> 描述了一个元组，它的长度是固定的，你需要分别给出其中每个元素的类型。它们会被显示在同一行中。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  point</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tuple</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,4),n=[h];function l(p,r,k,c,o,d){return i(),a("div",null,n)}const B=s(t,[["render",l]]);export{u as __pageData,B as default};
