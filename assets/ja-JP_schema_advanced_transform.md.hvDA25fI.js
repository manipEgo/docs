import{_ as s,p as i,n as a,R as n}from"./chunks/framework.6NFEWlby.js";const g=JSON.parse(`{"title":"Transform：输入转换","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nvalue: Schema.union([\\nSchema.array(String),\\nSchema.transform(String, value => [value]),\\n]).default([]).description('点击右侧的按钮添加元素。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ja-JP/schema/advanced/transform.md","filePath":"ja-JP/schema/advanced/transform.md"}`),t={name:"ja-JP/schema/advanced/transform.md"},h=n(`<h1 id="transform-输入转换" tabindex="-1">Transform：输入转换 <a class="header-anchor" href="#transform-输入转换" aria-label="Permalink to &quot;Transform：输入转换&quot;">​</a></h1><p>Transform 用于定义一个转换类型，通常与 Union 一同使用。当输入满足一参数类型时，将调用二参数转换输入作为输出。此次转换将直接修改输入的对象，以确保类型满足输出类型。在网页表单中，将只会显示输出类型。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">union</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">transform</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ]).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,3),e=[h];function l(k,p,r,d,o,c){return a(),i("div",null,e)}const E=s(t,[["render",l]]);export{g as __pageData,E as default};
