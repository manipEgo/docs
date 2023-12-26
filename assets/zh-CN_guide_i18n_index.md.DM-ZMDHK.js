import{_ as p,m as l,p as d,C as s,H as i,s as t,K as a,R as n,n as B}from"./chunks/framework.EoKL5TQy.js";const x=JSON.parse('{"title":"基本用法","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/i18n/index.md","filePath":"zh-CN/guide/i18n/index.md"}'),r={name:"zh-CN/guide/i18n/index.md"},o=n(`<h1 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在学习本章之前，建议先完整阅读 <a href="./../../manual/usage/customize.html#国际化">入门 &gt; 国际化</a>。</p></div><p>如果你在运营一个大型社区，那么你可能会遇到这种场景：群组内设立了许多不同语言的频道，每个频道分别供不同地区的用户进行交流。在这种情况下，最合适的做法是让你的机器人在不同的频道下使用不同的语言进行回复。本质上，这不会改变机器人的运行逻辑，因此最好的做法是将涉及的每一段文本都抽离出来，通过统一的方式进行管理，并在发送前进行本地化渲染。</p><h2 id="基本示例" tabindex="-1">基本示例 <a class="header-anchor" href="#基本示例" aria-label="Permalink to &quot;基本示例&quot;">​</a></h2><p>让我们先看一个最简单的例子：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;你好！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span></code></pre></div><p>上面的代码定义了两种语言下 <code>hello</code> 对应的翻译文本。其中 <code>zh-CN</code> 和 <code>en-US</code> 称为语言名，<code>hello</code> 称为渲染路径，后面的字符串是对应的翻译文本。</p><p>现在我们把它用在 <code>session.text()</code> 中：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">content</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;greeting&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,9),c=n('<p>我们看到机器人回复了「你好！」，这是因为 Koishi 使用的默认语言是中文。</p><p>现在，如果我们希望它在某个频道使用英文，我们只需设置这个频道的属性：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">channel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">locales</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre></div>',3),g=n(`<h2 id="模板能力" tabindex="-1">模板能力 <a class="header-anchor" href="#模板能力" aria-label="Permalink to &quot;模板能力&quot;">​</a></h2><h3 id="插值语法" tabindex="-1">插值语法 <a class="header-anchor" href="#插值语法" aria-label="Permalink to &quot;插值语法&quot;">​</a></h3><p>向 <code>session.text()</code> 中传入第二个参数，就可以在模板中使用单花括号插值。花括号 <code>{}</code> 中的内容将对应传入列表的索引。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;你好，{0}！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello, {0}!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">content</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;greeting&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">author</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,4),y=n(`<p>这里的参数也可以是一个对象，此时花括号中的内容仍然表示对象的索引。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;你好，{username}！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello, {username}!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">content</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;greeting&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">author</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>如果要访问对象深层的内容，只需将多个属性之间用 <code>.</code> 连接。利用这种方法，你甚至可以把整个 <code>session</code> 传进去：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;你好，{author.name}！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello, {author.name}!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span></code></pre></div><p>上述三段代码的实际效果完全相同，可以根据自己的需要进行选择。</p><h3 id="使用消息元素" tabindex="-1">使用消息元素 <a class="header-anchor" href="#使用消息元素" aria-label="Permalink to &quot;使用消息元素&quot;">​</a></h3><p>你也可以在模板中使用 <a href="./../basic/element.html">消息元素</a> 语法。消息元素的属性同样使用 <code>{}</code> 进行插值：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;你好，&lt;at id={userId}/&gt;！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello, &lt;at id={userId}/&gt;!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span></code></pre></div><p>你也可以使用消息组件，例如使用 <code>&lt;i18n&gt;</code> 组件引用其他翻译，或使用 <code>&lt;i18n:time&gt;</code> 表示本地化的时间：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">remain</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;剩余时间：&lt;i18n:time value={value}/&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">i18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">remain</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Time Remain: &lt;i18n:time value={value}/&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span></code></pre></div>`,10),E={id:"条件和循环-实验性",tabindex:"-1"},F=t("a",{class:"header-anchor",href:"#条件和循环-实验性","aria-label":'Permalink to "条件和循环 <badge type="warning">实验性</badge>"'},"​",-1),A=n(`<p>我们为模板提供了一些基本的控制流语法，它参考了 <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> 的设计 (但并未完整实现)。你可以在模板中通过 <code>{#if}</code> 和 <code>{#each}</code> 来实现条件和循环。例如，下面的代码将会渲染一个列表：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{#if list.length === 0}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  列表中没有元素。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{:else}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  {#each list as item}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {item}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  {/each}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{/if}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果要使用这种层面的模板能力，那么你的代码已经不适合使用 <code>ctx.i18n.define()</code> 定义了。建议参考 <a href="./translation.html">下一节</a> 中的做法，将不同语言的模板放入不同的文件中，以方便编辑和管理。</p></div><h2 id="渲染回退" tabindex="-1">渲染回退 <a class="header-anchor" href="#渲染回退" aria-label="Permalink to &quot;渲染回退&quot;">​</a></h2><p>一次完整的本地化渲染可能涉及多种不同优先级的语言和渲染路径。当首选语言的首选路径对应的翻译文本不存在时，会依次尝试使用其他翻译，这就是渲染回退。</p><h3 id="基于语言的回退" tabindex="-1">基于语言的回退 <a class="header-anchor" href="#基于语言的回退" aria-label="Permalink to &quot;基于语言的回退&quot;">​</a></h3><p>首先需要了解的是基于语言的回退。根据 <a href="https://zh.wikipedia.org/wiki/IETF%E8%AA%9E%E8%A8%80%E6%A8%99%E7%B1%A4" target="_blank" rel="noreferrer">IETF 语言标签</a> 规范，一个语言名称可以包含由 <code>-</code> 分隔的多个部分，例如 <code>de-DE-bavarian</code>。用户可以为应用设置 <a href="./../../api/core/app.html#i18n-locales"><code>config.i18n.locales</code></a> 来指定可用的语言列表，这些语言将按照 <code>-</code> 分隔符形成一棵字典树，而 Koishi 会按照以下规则进行回退：</p><ol><li>找到目标语言的在字典树中出现的最长前缀对应的节点；</li><li>按照用户配置的优先级渲染改节点的子树所包含的语言，并将它们移除；</li><li>如果此时仍有未被渲染过的语言，那么回到 1 继续遍历，直到所有语言被遍历完全。</li></ol><p>例如，如果用户配置的语言列表为 <code>zh-CN</code>, <code>en-US</code>, <code>zh-TW</code>, <code>en-GB</code>，则对于不同的目标语言会生成对应的回退序列：</p><ul><li>目标语言为 <code>en</code>，回退序列为 <code>en</code>, <code>en-US</code>, <code>en-GB</code>, <code></code>, <code>zh</code>, <code>zh-CN</code>, <code>zh-TW</code></li><li>目标语言为 <code>zh-TW</code>，回退序列为 <code>zh-TW</code>, <code>zh</code>, <code>zh-CN</code>, <code>en</code>, <code>en-US</code>, <code>en-GB</code>, <code></code></li><li>目标语言为 <code>de-DE</code>，回退序列为 <code></code>, <code>zh</code>, <code>zh-CN</code>, <code>zh-TW</code>, <code>en</code>, <code>en-US</code>, <code>en-GB</code></li><li>目标语言为 <code>en</code>, <code>zh-TW</code>，回退序列为 <code>en</code>, <code>en-US</code>, <code>en-GB</code>, <code>zh-TW</code>, <code>zh</code>, <code>zh-CN</code>, <code></code></li><li>目标语言为 <code>zh-TW</code>, <code>en</code>，回退序列为 <code>zh-TW</code>, <code>en</code>, <code>en-US</code>, <code>en-GB</code>, <code>zh</code>, <code>zh-CN</code>, <code></code></li></ul><p>请注意，空字符串也被视为合法的语言，其所代表的是「没有指定语言」的情况。在实践中，空语言的使用是非常广泛的，例如当用户使用下面的代码定义指令：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;echo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;回声&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>此时我们无法推测出「回声」的语言，因此它将会被作为路径 <code>commands.echo.name</code> 注册到空语言下。用户可以为其定义其他语言的翻译，但在未命中任何翻译时，它将回退到空语言。</p><h3 id="基于会话的回退" tabindex="-1">基于会话的回退 <a class="header-anchor" href="#基于会话的回退" aria-label="Permalink to &quot;基于会话的回退&quot;">​</a></h3><p>实际的本地化渲染通常发生在消息会话中。对于一个会话，我们可以从以下几个维度来确定它的目标语言 (每个维度都可以存在多个目标语言)：</p><ul><li>会话语言 (<code>session.locales</code>)</li><li>频道语言 (<code>session.channel.locales</code>)</li><li>群组语言 (<code>session.guild.locales</code>)</li><li>用户语言 (<code>session.user.locales</code>)</li></ul><p>最终的目标语言将会是上述语言按顺序的并集，再根据前面介绍的规则进行回退渲染。</p><p>会话语言可以在一些交互场景中被直接感知得到。例如，用户如果在聊天平台中已经设置了语言偏好 (并且聊天平台提供了相应的 API)，则相关的设置可以通过适配器插件提供给会话。又比如，当开发者为一个指令设置了多种语言的别名时，可以为这些别名手动指定语言，当用户调用某一个别名时，Koishi 会按照设定好的语言来回答。</p><p>用户语言与频道、群组语言的优先关系可以通过 <a href="./../../api/core/app.html#i18n-output"><code>config.i18n.output</code></a> 来指定。默认情况下频道和群组的语言优先级高于用户语言，但是你可以将其设置为 <code>prefer-user</code> 来改变这一行为。</p><h3 id="基于路径的回退" tabindex="-1">基于路径的回退 <a class="header-anchor" href="#基于路径的回退" aria-label="Permalink to &quot;基于路径的回退&quot;">​</a></h3><p>你也可以配置多个路径，将会按照顺序查找翻译，直到找到一个翻译为止。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>路径回退的优先级低于语言回退。举个例子，假如可选的语言包括 A 和 B，路径包括 1 和 2。翻译 A1 不存在，但是翻译 A2 和 B1 都存在。这种情况下会输出 B1 而非 A2。采用这种设计是因为不同的路径通常表达了不同的逻辑。相比语言的正确性，逻辑的正确性更重要。</p></div><p>利用这种行为，你可以实现静默渲染。下面的代码当未找到翻译时，将只会输出一个空串，并且不会输出警告：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre></div><h3 id="用户侧覆写" tabindex="-1">用户侧覆写 <a class="header-anchor" href="#用户侧覆写" aria-label="Permalink to &quot;用户侧覆写&quot;">​</a></h3><p>用户可以通过 <a href="./../../plugins/console/locales.html">locales</a> 插件提供本地翻译，且这些翻译的优先级高于插件自身提供的翻译。可以认为，从用户提供的翻译到插件提供的翻译，也是一种回退关系。</p><p>关于用户侧覆写的更多信息，请参见 <a href="./../../manual/usage/customize.html">入门 &gt; 深入定制机器人</a>。</p>`,28);function C(u,_,m,v,f,b){const h=l("chat-message"),e=l("chat-panel"),k=l("badge");return B(),d("div",null,[o,s(e,null,{default:i(()=>[s(h,{nickname:"Alice"},{default:i(()=>[a("greeting")]),_:1}),s(h,{nickname:"Koishi"},{default:i(()=>[a("你好！")]),_:1})]),_:1}),c,s(e,null,{default:i(()=>[s(h,{nickname:"Alice"},{default:i(()=>[a("greeting")]),_:1}),s(h,{nickname:"Koishi"},{default:i(()=>[a("Hello!")]),_:1})]),_:1}),g,s(e,null,{default:i(()=>[s(h,{nickname:"Alice"},{default:i(()=>[a("greeting")]),_:1}),s(h,{nickname:"Koishi"},{default:i(()=>[a("Hello, Alice!")]),_:1})]),_:1}),y,t("h3",E,[a("条件和循环 "),s(k,{type:"warning"},{default:i(()=>[a("实验性")]),_:1}),a(),F]),A])}const T=p(r,[["render",C]]);export{x as __pageData,T as default};
