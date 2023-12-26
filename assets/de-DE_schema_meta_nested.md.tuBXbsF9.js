import{_ as s,p as i,n as a,R as n}from"./chunks/framework.6NFEWlby.js";const E=JSON.parse(`{"title":"嵌套类型","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.object({\\nbar: Schema.array(\\nSchema.object({\\nbaz: Schema.number().required().description('在右侧填写数值。'),\\n}).description('这是数组的元素，它本身又是一个对象。'),\\n).default([{ baz: 114514 }]).description('这是一个嵌套属性，类型为数组。'),\\nqux: Schema.dict(\\nSchema.string().required().description('在右侧填写字符串。'),\\n).default({ welcome: 'Hello World' }).description('这是一个嵌套属性，类型为字典。'),\\n}),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"de-DE/schema/meta/nested.md","filePath":"de-DE/schema/meta/nested.md"}`),h={name:"de-DE/schema/meta/nested.md"},e=n(`<h1 id="嵌套类型" tabindex="-1">嵌套类型 <a class="header-anchor" href="#嵌套类型" aria-label="Permalink to &quot;嵌套类型&quot;">​</a></h1><p>一些类型 (例如 <a href="./../basic/object.html">Object</a> 和 <a href="./../basic/array.html">Array</a>) 允许将其他类型作为参数传入，形成新的组合类型。你可以任意嵌套这些类型，以满足更复杂的需求。</p><p>例子里的 <code>String</code> 是 <code>Schema.string().required()</code> 的简写形式。类似的写法对于 <code>Number</code> 和 <code>Boolean</code> 也是成立的。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Schema</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        baz</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">required</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      }))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([{ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">baz</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">114514</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    qux</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Schema</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">welcome</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello World&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,4),t=[e];function l(k,p,r,d,B,c){return a(),i("div",null,t)}const g=s(h,[["render",l]]);export{E as __pageData,g as default};
