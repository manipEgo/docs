import{_ as s,p as i,n as a,R as e}from"./chunks/framework.6NFEWlby.js";const B=JSON.parse(`{"title":"Computed：条件求值","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.computed(Number).description('这是一个属性。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"de-DE/schema/advanced/computed.md","filePath":"de-DE/schema/advanced/computed.md"}`),t={name:"de-DE/schema/advanced/computed.md"},p=e(`<h1 id="computed-条件求值" tabindex="-1">Computed：条件求值 <a class="header-anchor" href="#computed-条件求值" aria-label="Permalink to &quot;Computed：条件求值&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>此类型只能在 Koishi 中使用。</p></div><p><code>Schema.computed()</code> 类型可用于合并多个类型。一种最常见的用法是将配置项分为多组显示。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">computed</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;配置项&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div>`,4),n=[p];function h(d,l,c,o,k,r){return a(),i("div",null,n)}const u=s(t,[["render",h]]);export{B as __pageData,u as default};
