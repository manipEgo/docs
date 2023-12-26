import{_ as i,p as s,n as a,R as e}from"./chunks/framework.EoKL5TQy.js";const g=JSON.parse('{"title":"Query Expression","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/database/query.md","filePath":"en-US/api/database/query.md"}'),l={name:"en-US/api/database/query.md"},h=e(`<h1 id="query-expression" tabindex="-1">Query Expression <a class="header-anchor" href="#query-expression" aria-label="Permalink to &quot;Query Expression&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/database/">开发 &gt; 数据库 &gt; 基本用法</a></p></div><p>查询表达式用于表达数据库操作中的约束条件。你可以在 <a href="./database.html"><code>Database</code></a> 或 <a href="./selection.html"><code>Selection</code></a> 的实例方法中使用。查询表达式的基本形式是一个字典，其中的键是字段名，值是约束条件。例如：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  baz</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$gt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>上述查询表达式的意思是：<code>bar</code> 字段的值等于 <code>1</code>，且 <code>baz</code> 字段的值大于 <code>2</code>。</p><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><h3 id="fieldexpr" tabindex="-1">FieldExpr <a class="header-anchor" href="#fieldexpr" aria-label="Permalink to &quot;FieldExpr&quot;">​</a></h3><p>本节中定义的具体操作符构成的对象，例如 <code>{ $gt: 2 }</code>。</p><h3 id="shorthand" tabindex="-1">Shorthand <a class="header-anchor" href="#shorthand" aria-label="Permalink to &quot;Shorthand&quot;">​</a></h3><p>为了简化查询操作符的书写，我们为特定类型的字段引入了一些简写形式：</p><ul><li>如果该字段的类型是可比较类型，那么接受一个同类型的值，相当于 <a href="#eq"><code>$eq</code></a> 操作符</li><li>如果该字段的类型是可索引类型，那么接受一个数组，相当于 <a href="#in"><code>$in</code></a> 操作符</li><li>如果该字段的类型是字符串，那么接受一个正则表达式，相当于 <a href="#regex"><code>$regex</code></a> 操作符</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Extract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">U</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> S</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> U</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> never</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Shorthand</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Extract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Comparable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Extract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Indexable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Extract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="fieldquery" tabindex="-1">FieldQuery <a class="header-anchor" href="#fieldquery" aria-label="Permalink to &quot;FieldQuery&quot;">​</a></h3><p>某个字段的约束条件。可以是一个 <a href="#fieldexpr"><code>FieldExpr</code></a> 或 <a href="#shorthand"><code>Shorthand</code></a>。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> FieldQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> FieldExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Shorthand</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="queryexpr" tabindex="-1">QueryExpr <a class="header-anchor" href="#queryexpr" aria-label="Permalink to &quot;QueryExpr&quot;">​</a></h3><p>一个字典，其中的键是字段名，值是该字段约束条件。除此以外，还可以使用逻辑运算符 <code>$or</code>, <code>$and</code>, <code>$not</code> 来组合多个约束条件。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> QueryExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> LogicalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> FieldQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> LogicalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  $or</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> QueryExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;[]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  $and</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> QueryExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;[]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  $not</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> QueryExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="query" tabindex="-1">Query <a class="header-anchor" href="#query" aria-label="Permalink to &quot;Query&quot;">​</a></h3><p>某个表的约束条件。它可以是：</p><ul><li>一个 <a href="#queryexpr"><code>QueryExpr</code></a>，用于约束表中的字段</li><li>一个 <a href="#shorthand"><code>Shorthand</code></a>，用于约束表中的主键 (如果主键唯一)</li><li>一个 <a href="./selection.html#callback"><code>Callback</code></a>，可以在其中使用求值表达式</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Query</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> QueryExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Shorthand</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Indexable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="逻辑运算" tabindex="-1">逻辑运算 <a class="header-anchor" href="#逻辑运算" aria-label="Permalink to &quot;逻辑运算&quot;">​</a></h2><p>逻辑运算可以出现在 <code>QueryExpr</code> 或 <code>FieldExpr</code> 中。根据出现的场合，它们的类型和含义也会有所不同。</p><h3 id="or" tabindex="-1">$or <a class="header-anchor" href="#or" aria-label="Permalink to &quot;$or&quot;">​</a></h3><ul><li>类型: <code>QueryExpr[]</code> (作为 <code>QueryExpr</code> 时)</li><li>类型: <code>FieldExpr[]</code> (作为 <code>FieldExpr</code> 时)</li></ul><p>一组约束条件的或运算。</p><h3 id="and" tabindex="-1">$and <a class="header-anchor" href="#and" aria-label="Permalink to &quot;$and&quot;">​</a></h3><ul><li>类型: <code>QueryExpr[]</code> (作为 <code>QueryExpr</code> 时)</li><li>类型: <code>FieldExpr[]</code> (作为 <code>FieldExpr</code> 时)</li></ul><p>一组约束条件的与运算。</p><h3 id="not" tabindex="-1">$not <a class="header-anchor" href="#not" aria-label="Permalink to &quot;$not&quot;">​</a></h3><ul><li>类型: <code>QueryExpr</code> (作为 <code>QueryExpr</code> 时)</li><li>类型: <code>FieldExpr</code> (作为 <code>FieldExpr</code> 时)</li></ul><p>约束条件的否定。</p><h2 id="元素运算" tabindex="-1">元素运算 <a class="header-anchor" href="#元素运算" aria-label="Permalink to &quot;元素运算&quot;">​</a></h2><h3 id="in" tabindex="-1">$in <a class="header-anchor" href="#in" aria-label="Permalink to &quot;$in&quot;">​</a></h3><ul><li>类型: <code>T[]</code> (<code>T extends Indexable</code>)</li></ul><p>判断字段的值是否在给定的数组中。</p><h3 id="nin" tabindex="-1">$nin <a class="header-anchor" href="#nin" aria-label="Permalink to &quot;$nin&quot;">​</a></h3><ul><li>类型: <code>T[]</code> (<code>T extends Indexable</code>)</li></ul><p>判断字段的值是否不在给定的数组中。</p><h2 id="比较运算" tabindex="-1">比较运算 <a class="header-anchor" href="#比较运算" aria-label="Permalink to &quot;比较运算&quot;">​</a></h2><h3 id="eq" tabindex="-1">$eq <a class="header-anchor" href="#eq" aria-label="Permalink to &quot;$eq&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否等于给定的值。</p><h3 id="ne" tabindex="-1">$ne <a class="header-anchor" href="#ne" aria-label="Permalink to &quot;$ne&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否不等于给定的值。</p><h3 id="gt" tabindex="-1">$gt <a class="header-anchor" href="#gt" aria-label="Permalink to &quot;$gt&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否大于给定的值。</p><h3 id="gte" tabindex="-1">$gte <a class="header-anchor" href="#gte" aria-label="Permalink to &quot;$gte&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否大于或等于给定的值。</p><h3 id="lt" tabindex="-1">$lt <a class="header-anchor" href="#lt" aria-label="Permalink to &quot;$lt&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否小于给定的值。</p><h3 id="lte" tabindex="-1">$lte <a class="header-anchor" href="#lte" aria-label="Permalink to &quot;$lte&quot;">​</a></h3><ul><li>类型: <code>T</code> (<code>T extends Comparable</code>)</li></ul><p>判断字段的值是否小于或等于给定的值。</p><h2 id="列表运算" tabindex="-1">列表运算 <a class="header-anchor" href="#列表运算" aria-label="Permalink to &quot;列表运算&quot;">​</a></h2><h3 id="el" tabindex="-1">$el <a class="header-anchor" href="#el" aria-label="Permalink to &quot;$el&quot;">​</a></h3><ul><li>类型: <a href="#fieldexpr"><code>FieldExpr&lt;U&gt;</code></a> (<code>T extends U[]</code>)</li></ul><p>判断列表中是否存在满足给定约束条件的元素。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>部分数据库可能不支持使用子条件，因此请尽量只使用 <a href="#eq"><code>$eq</code></a> 操作符。</p></div><h3 id="size" tabindex="-1">$size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;$size&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends any[]</code>)</li></ul><p>判断列表的长度是否等于给定的值。</p><h2 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h2><h3 id="regex" tabindex="-1">$regex <a class="header-anchor" href="#regex" aria-label="Permalink to &quot;$regex&quot;">​</a></h3><ul><li>类型: <code>RegExp</code> (<code>T extends string</code>)</li></ul><p>判断字段的值是否匹配给定的正则表达式。</p><h3 id="regexfor" tabindex="-1">$regexFor <a class="header-anchor" href="#regexfor" aria-label="Permalink to &quot;$regexFor&quot;">​</a></h3><ul><li>类型: <code>string</code> (<code>T extends string</code>)</li></ul><p>将字段的值作为正则表达式，判断给定的字符串是否匹配。</p><h2 id="位运算" tabindex="-1">位运算 <a class="header-anchor" href="#位运算" aria-label="Permalink to &quot;位运算&quot;">​</a></h2><h3 id="bitsallset" tabindex="-1">$bitsAllSet <a class="header-anchor" href="#bitsallset" aria-label="Permalink to &quot;$bitsAllSet&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends number</code>)</li></ul><p>判断字段的值是否包含给定的全部位。</p><h3 id="bitsallclear" tabindex="-1">$bitsAllClear <a class="header-anchor" href="#bitsallclear" aria-label="Permalink to &quot;$bitsAllClear&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends number</code>)</li></ul><p>判断字段的值是否不包含给定的全部位。</p><h3 id="bitsanyset" tabindex="-1">$bitsAnySet <a class="header-anchor" href="#bitsanyset" aria-label="Permalink to &quot;$bitsAnySet&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends number</code>)</li></ul><p>判断字段的值是否包含给定的任意位。</p><h3 id="bitsanyclear" tabindex="-1">$bitsAnyClear <a class="header-anchor" href="#bitsanyclear" aria-label="Permalink to &quot;$bitsAnyClear&quot;">​</a></h3><ul><li>类型: <code>number</code> (<code>T extends number</code>)</li></ul><p>判断字段的值是否不包含给定的任意位。</p>`,87),t=[h];function n(p,k,r,d,o,c){return a(),s("div",null,t)}const y=i(l,[["render",n]]);export{g as __pageData,y as default};
