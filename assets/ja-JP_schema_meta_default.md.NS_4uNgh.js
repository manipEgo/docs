import{_ as s,p as i,n as a,R as t}from"./chunks/framework.6NFEWlby.js";const g=JSON.parse(`{"title":"默认值","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.string().description('默认值为 \`lol\` 的属性。').default('lol'),\\nbar: Schema.number().description('默认值为 \`2333\` 的属性。').default(2333),\\nbaz: Schema.boolean().description('默认值为 \`true\` 的属性。').default(true),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ja-JP/schema/meta/default.md","filePath":"ja-JP/schema/meta/default.md"}`),e={name:"ja-JP/schema/meta/default.md"},h=t(`<h1 id="默认值" tabindex="-1">默认值 <a class="header-anchor" href="#默认值" aria-label="Permalink to &quot;默认值&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请注意：<code>.required()</code> 与 <code>.default()</code> 不能同时使用。</p></div><p><code>.default()</code> 用于设置某个配置项的默认值。如果你传入了值，那么默认值将不会有任何行为；如果没有传入值，则默认值会作为初始状态呈现在表单中。</p><p>在配置项菜单中可以选择将配置项恢复为默认值。如果你将某个配置项修改为了默认值，则该配置项实际上会被清除，以确保配置文件的简洁性。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;lol&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2333</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  baz</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,5),n=[h];function l(k,p,d,r,o,c){return a(),i("div",null,n)}const E=s(e,[["render",l]]);export{g as __pageData,E as default};
