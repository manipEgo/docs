import{_ as s,p as i,n as a,R as t}from"./chunks/framework.EoKL5TQy.js";const o=JSON.parse('{"title":"基本用法","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/database/index.md","filePath":"zh-CN/guide/database/index.md"}'),h={name:"zh-CN/guide/database/index.md"},n=t(`<h1 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>ctx.database</code> 并非内置服务，因此如果你的插件需要使用数据库功能，需要<a href="./../plugin/service.html#inject-属性">声明依赖</a>。</p></div><p>对于几乎所有大型机器人项目，数据库的使用都是不可或缺的。但如果每个插件都独立处理与数据库的交互，这将导致插件之间的兼容性非常差——用户要么选择同时安装多个数据库，要么只能放弃一些功能。为此，Koishi 设计了一整套对象关系映射 (ORM) 接口，它易于扩展并广泛地运用于各种插件中，足以应对绝大部分使用场景。</p><h2 id="get-查询数据" tabindex="-1"><code>get</code>：查询数据 <a class="header-anchor" href="#get-查询数据" aria-label="Permalink to &quot;\`get\`：查询数据&quot;">​</a></h2><p>使用 <code>database.get()</code> 方法以获取特定表中的数据。下面是一个最基本的形式：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 获取 schedule 表中 id 为 1234 的数据行，返回一个数组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1234</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 获取 schedule 表中 id 为 1234 或 5678 的数据行，返回一个数组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1234</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5678</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre></div><p>对于复杂的数据表，如果你只需要获取少数字段，你可以通过第三个参数手动指定要获取的字段：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 返回的数组中每个元素只会包含 command, time 属性</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1234</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;command&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;time&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre></div><p>你还可以向第二个参数传入一个对象，用来查询非主键上的数据或者同时指定多列的值：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 获取名为 schedule 的表中 assignee 为 telegram:123456 的数据行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  assignee</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;telegram:123456&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>对于需要进行复杂的数据库搜索的，ORM 也提供了相对应的方法：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 获取名为 schedule 的表中 id 大于 2 但是小于等于 5 的数据行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$gt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$lte</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>我们甚至也支持逻辑运算：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 上述两个搜索条件的或运算</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  $or</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">assignee</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;telegram:123456&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$gt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$lte</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>你可以在 <a href="./../../api/database/query.html">这里</a> 看到完整的查询表达式 API。</p><h2 id="create-插入数据" tabindex="-1"><code>create</code>：插入数据 <a class="header-anchor" href="#create-插入数据" aria-label="Permalink to &quot;\`create\`：插入数据&quot;">​</a></h2><p>使用 <code>database.create()</code> 方法以插入数据。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 向 schedule 表中添加一行数据，data 是要添加的数据行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 返回值是添加的行的完整数据 (包括自动填充的 id 和默认属性等)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>如果你想要批量插入数据，可以使用下面介绍的 <code>database.upsert()</code> 方法。</p><h2 id="set-修改数据" tabindex="-1"><code>set</code>：修改数据 <a class="header-anchor" href="#set-修改数据" aria-label="Permalink to &quot;\`set\`：修改数据&quot;">​</a></h2><p><code>database.set()</code> 方法需要传入三个参数：表名、查询条件和要修改的数据。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 第二个参数也可以使用上面介绍的查询表达式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1234</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  assignee</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;telegram:123456&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>如果要修改的数据与已有数据相关，可以使用求值表达式：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 让所有日期为今天的数据行的 count 字段在原有基础上增加 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() }, (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // { $add: [a, b] } 相当于 a + b</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // { $: field } 相当于对当前行的 field 字段取值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}))</span></span></code></pre></div><p>你可以在 <a href="./../../api/database/evaluation.html">这里</a> 看到完整的求值表达式 API。</p><h2 id="upsert-修改或插入数据" tabindex="-1"><code>upsert</code>：修改或插入数据 <a class="header-anchor" href="#upsert-修改或插入数据" aria-label="Permalink to &quot;\`upsert\`：修改或插入数据&quot;">​</a></h2><p><code>database.upsert()</code> 的逻辑稍微有些不同，需要你传入一个数组：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 用一个数组来对数据进行更新，你需要确保每一个元素都拥有这个数据表的主键</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 修改时只会用每一行中出现的键进行覆盖，不会影响未定义的字段</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">upsert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 这里同样支持求值表达式，$concat 可用于连接字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$concat</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;koi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;shi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre></div><p>如果初始的数据库是这样的：</p><table><thead><tr><th>id</th><th>foo</th><th>bar</th></tr></thead><tbody><tr><td>(默认值)</td><td>null</td><td>bar</td></tr><tr><td>1</td><td>foo</td><td>baz</td></tr></tbody></table><p>那么进行上述操作后的数据库将是这样的：</p><table><thead><tr><th>id</th><th>foo</th><th>bar</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>hello</td><td>baz</td><td>该行已经存在，只更新了 foo 字段</td></tr><tr><td>2</td><td>world</td><td>bar</td><td>插入了新行，其中 foo 字段取自传入的数据，bar 字段取自默认值</td></tr><tr><td>3</td><td>null</td><td>koishi</td><td>插入了新行，其中 bar 字段取自传入的数据，foo 字段取自默认值</td></tr></tbody></table><p>如果想以非主键来索引要修改的数据，可以使用第三个参数：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// @errors: 2304</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 以非主键为基准对数据表进行更新，你需要确保每一个元素都拥有 telegram 属性</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">upsert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">rows</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;telegram&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 以复合键为基准对数据表进行更新，你需要确保每一个元素都拥有 platform 和 id 属性</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">upsert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;channel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">rows</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;platform&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre></div><h2 id="remove-删除数据" tabindex="-1"><code>remove</code>：删除数据 <a class="header-anchor" href="#remove-删除数据" aria-label="Permalink to &quot;\`remove\`：删除数据&quot;">​</a></h2><p>使用 <code>database.remove()</code> 方法以删除特定表中的数据。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 从 schedule 表中删除特定 id 的数据行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 第二个参数也可以使用上面介绍的查询表达式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;schedule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre></div><h2 id="获取改动行数" tabindex="-1">获取改动行数 <a class="header-anchor" href="#获取改动行数" aria-label="Permalink to &quot;获取改动行数&quot;">​</a></h2><p><code>set</code>, <code>upsert</code> 和 <code>remove</code> 操作都会返回一个 <code>WriteResult</code> 对象，它包含了这次操作的结果。你可以通过 <code>matched</code> 属性来获取匹配的数据行数 (注意不是修改的函数)，通过 <code>inserted</code> 属性来获取插入的数据行数 (仅限 <code>upsert</code> 操作)。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 对某个用户的余额进行扣除</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">money</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$gte</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ({ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">money</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sub</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">money</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 如果用户不存在或余额不足，此时 result.matched 为 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">matched</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;用户不存在或余额不足！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="对比-set-和-upsert" tabindex="-1">对比 set 和 upsert <a class="header-anchor" href="#对比-set-和-upsert" aria-label="Permalink to &quot;对比 set 和 upsert&quot;">​</a></h2><p><code>set</code> 与 <code>upsert</code> 方法都可以用于修改已经存在的数据，它们的区别如下表所示：</p><table><thead><tr><th></th><th>set</th><th>upsert</th></tr></thead><tbody><tr><td>作用范围</td><td>支持复杂的查询表达式</td><td>只能限定特定字段的值</td></tr><tr><td>插入行为</td><td>如果数据不存在则不会进行任何操作</td><td>如果数据不存在则会插入新行</td></tr></tbody></table><h2 id="对比-create-和-upsert" tabindex="-1">对比 create 和 upsert <a class="header-anchor" href="#对比-create-和-upsert" aria-label="Permalink to &quot;对比 create 和 upsert&quot;">​</a></h2><p><code>create</code> 与 <code>upsert</code> 方法都可以用于插入新的数据，它们的区别如下表所示：</p><table><thead><tr><th></th><th>create</th><th>upsert</th></tr></thead><tbody><tr><td>插入数量</td><td>只能插入一条数据</td><td>可以批量插入多条数据</td></tr><tr><td>返回值</td><td>返回经过填充后的数据</td><td>没有返回值</td></tr><tr><td>冲突行为</td><td>如果数据已存在则会报错</td><td>如果数据已存在则会执行修改</td></tr></tbody></table>`,46),k=[n];function l(e,p,d,r,B,g){return a(),i("div",null,k)}const c=s(h,[["render",l]]);export{o as __pageData,c as default};
