import{_ as s,p as i,n as a,R as n}from"./chunks/framework.6NFEWlby.js";const E=JSON.parse('{"title":"按需加载与自动更新","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/database/observer.md","filePath":"en-US/guide/database/observer.md"}'),h={name:"en-US/guide/database/observer.md"},t=n(`<h1 id="按需加载与自动更新" tabindex="-1">按需加载与自动更新 <a class="header-anchor" href="#按需加载与自动更新" aria-label="Permalink to &quot;按需加载与自动更新&quot;">​</a></h1><p>上面介绍了一些 Koishi 内置的权限管理行为，而接下来将介绍的是开发者如何读取和更新数据。通常来说，中间件、插件的设计可以让机器人的开发变得更加模块化，但是这也带来了数据流向的问题。如果每个中间件分别从数据库中读取和更新自己所需的字段，那会造成大量重复的请求，导致严重的资源浪费；将所有可能请求的数据都在中间件的一开始就请求完成，并不会解决问题，因为一条信息的解读可能只需要少数几个字段，而大部分都是不需要的；更严重的是，后一种做法将导致资源单次请求，多次更新，从而产生种种数据安全性问题。那么针对这些问题，Koishi 又是如何解决的呢？</p><h2 id="观察者对象" tabindex="-1">观察者对象 <a class="header-anchor" href="#观察者对象" aria-label="Permalink to &quot;观察者对象&quot;">​</a></h2><p>之前我们已经提到过，你可以在 <code>session.user</code> 上获得本次事件相关的用户数据，但实际上 <code>session.user</code> 能做的远远不止这些。它的本质其实是一个<strong>观察者</strong>对象。假如我们有下面的代码：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getLotteryItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// ---cut---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 定义一个 items 字段，用于存放物品列表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> module</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;koishi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">    items</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">extend</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  items</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;list&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;lottery&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">userFields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;items&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">action</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(({ </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 这里假设 item 是一个字符串，表示抽到的物品</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getLotteryItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 将抽到的物品存放到 user.items 中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">items</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> \`恭喜您获得了 </span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">item</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">！\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  })</span></span></code></pre></div><p>上面的代码看起来完全无法工作，因为我们都知道将数据写入数据库是一个异步的操作，但是在上面的中间件中我们没有调用任何异步操作。然而如果你运行这段代码，你会发现用户数据被成功地更新了。这就归功于观察者机制。<code>session.user</code> 的本质是一个 <strong>观察者对象</strong>，它检测在其上面做的一切更改并缓存下来。当任务进行完毕后，Koishi 又会自动将变化的部分进行更新，同时将缓冲区清空。</p><p>这套机制不仅可以将多次更新合并成一次以提高程序性能，更能解决数据竞争的问题。如果两条信息先后被接收到，如果单纯地使用 getUser / setUser 进行处理，可能会发生后一次 getUser 在前一次 setUser 之前完成，导致本应获得 2 件物品，但实际只获得了 1 件的问题。而观察者会随时同步同源数据，数据安全得以保证。</p><p>当然，如果你确实需要阻塞式地等待数据写入，我们也提供了 <code>user.$update()</code> 方法。顺便一提，一旦成功执行了观察者的 <code>$update()</code> 方法，之前的缓冲区将会被清空，因此之后不会重复更新数据；对于缓冲区为空的观察者，<code>$update()</code> 方法也会直接返回，不会产生任何的数据库访问。这些都是我们优化的几个细节。</p><p>你可以在 <a href="./../../api/utils/observer.html">这里</a> 看到完整的观察者 API。</p><h2 id="声明所需字段" tabindex="-1">声明所需字段 <a class="header-anchor" href="#声明所需字段" aria-label="Permalink to &quot;声明所需字段&quot;">​</a></h2><p>如果说观察者机制帮我们解决了多次更新和数据安全的问题的话，那么这一节要介绍的就是如何控制要加载的内容。在上面的例子中我们看到了 <code>cmd.userFields()</code> 函数，它通过一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols" target="_blank" rel="noreferrer">可迭代对象</a> 或者回调函数来添加所需的用户字段。同理我们也有 <code>cmd.channelFields()</code> 方法，功能类似。</p><p>如果你需要对全体指令添加所需的用户字段，可以使用 <code>command/before-attach-user</code> 事件。下面是一个例子：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 注意这不是实例方法，而是类上的静态方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">before</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;command/attach-user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">argv</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">before</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;command/execute&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;%s calls command %s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>如果要控制中间件能取得的用户数据，可以监听 before-user 和 before-channel 事件，通过修改传入的 <code>fields</code> 参数来添加特定的字段。下面是一个例子：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 定义一个 msgCount 字段，用于存放收到的信息数量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> module</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;koishi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">    msgCount</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">extend</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  msgCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;integer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 手动添加要获取的字段，下面会介绍</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">before</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;attach-user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;msgCount&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;msgCount&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 这里更新了 msgCount 数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">msgCount</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><h2 id="使用会话-api" tabindex="-1">使用会话 API <a class="header-anchor" href="#使用会话-api" aria-label="Permalink to &quot;使用会话 API&quot;">​</a></h2><p>对于 Koishi 内部的两个抽象表 User 和 Channel，我们在 <a href="./../../api/core/session.html">会话对象</a> 中封装了几个高级方法：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> fields</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// ---cut---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 中间增加了一个第二参数，表示默认情况下的权限等级</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 如果找到该用户，则返回该用户本身</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 在当前会话上绑定一个可观测用户实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 也就是所谓的 session.user</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">observeUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 中间增加了一个第二参数，表示默认情况下的 assignee</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 如果找到该频道，则不修改任何数据，返回该频道本身</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getChannel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 在当前会话上绑定一个可观测频道实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 也就是所谓的 session.channel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">observeChannel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div>`,18),l=[t];function k(p,e,r,d,B,g){return a(),i("div",null,l)}const o=s(h,[["render",k]]);export{E as __pageData,o as default};
