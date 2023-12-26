import{_ as t,m as e,p as n,s as i,K as s,C as p,H as l,R as o,n as h}from"./chunks/framework.6NFEWlby.js";const f=JSON.parse('{"title":"权限管理 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/database/permission.md","filePath":"ja-JP/guide/database/permission.md"}'),d={name:"ja-JP/guide/database/permission.md"},r={id:"权限管理-实验性",tabindex:"-1"},k=i("a",{class:"header-anchor",href:"#权限管理-实验性","aria-label":'Permalink to "权限管理 <badge type="warning">实验性</badge>"'},"​",-1),c=o(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>权限管理目前属于实验性功能，API 可能随时会发生变化。</p></div><h2 id="权限是什么" tabindex="-1">权限是什么？ <a class="header-anchor" href="#权限是什么" aria-label="Permalink to &quot;权限是什么？&quot;">​</a></h2><p>权限其实就是执行某些操作的能力。权限具有唯一的标识符，通常由小写英文字母、数字、短横线和点构成。下面是一些你可能会见到的权限名称：</p><ul><li><code>user.514</code>：ID 为 514 的用户的权限</li><li><code>group.114</code>：ID 为 114 的用户组的权限</li><li><code>authority.3</code>：权限等级 3 的权限</li><li><code>command.foo</code>：指令 foo 的权限</li><li><code>command.foo.option.bar</code>：指令 foo 选项 bar 的权限</li><li><code>telegram.admin</code>：telegram 平台下群管理员的权限</li><li><code>bot.channel.mute</code>：能够禁言频道的机器人的权限</li><li><code>config.write</code>：能够写入配置文件的权限</li></ul><p>权限之间存在两种关系：继承和依赖。Koishi 不区分权限与权限组的概念，权限组只是继承了其他权限的权限。你可以将用户和用户组也都视为一种权限组。</p><h2 id="权限的继承" tabindex="-1">权限的继承 <a class="header-anchor" href="#权限的继承" aria-label="Permalink to &quot;权限的继承&quot;">​</a></h2><p>权限可以继承其他权限。它的基本写法如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">inherit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">A</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>如果权限 A 继承了权限 B，那么拥有权限 A 的主体将被视为同时拥有权限 B。</p><p>例：ID 为 514 的用户拥有权限等级 3，指令 foo 所需要的权限等级是 2。这种情况下该用户显然应该可以调用该指令。那么这种调用关系具体是如何体现的呢？</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>user.514 &gt; authority.3 &gt; authority.2 &gt; command.foo</span></span></code></pre></div><p>这里出现了三个继承关系：</p><ul><li><code>user.114 &gt; authority.3</code>，因为 ID 为 514 的用户拥有权限等级 3</li><li><code>authority.3 &gt; authority.2</code>，因为权限等级 3 天生比权限等级 2 大（内置逻辑）</li><li><code>authority.2 &gt; command.foo</code>，因为指令 foo 被权限等级 2 继承</li></ul><p>由此，权限的继承关系能够顺利表达已有的权限等级机制，并且具备更强的表达能力。</p><h3 id="权限的多继承" tabindex="-1">权限的多继承 <a class="header-anchor" href="#权限的多继承" aria-label="Permalink to &quot;权限的多继承&quot;">​</a></h3><p>权限继承除了不能循环外，几乎没有任何限制。因此，任何一个权限既可以被多个权限继承，也可以继承多个权限。下面分别展示一些使用例。</p><p>例：ID 为 514 的用户同时继承了权限等级 1，而指令 foo 所需权限等级 2，此时该用户并不能调用 foo 指令。但如果现在我们让该用户直接继承 foo 指令的调用权限，会发生什么呢？</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>user.514 &gt; authority.1</span></span>
<span class="line"><span>         &gt; command.foo</span></span></code></pre></div><p>在这张图中，<code>user.514</code> 并不能经由 <code>authority.1</code> 到达 <code>command.foo</code>，但是添加第二条边后又可以直接到达 <code>command.foo</code> 了。因此该用户此时就又可以调用 foo 指令了。</p><p>可以看到，权限的继承为我们提供了一种能力，可以允许特定低等级用户去调用高级权限的指令，这种能力是过去的权限等级所不具有的。</p><p>例：我们希望某个管理型指令 foo 既可以被权限等级 2 的用户调用，又可以被 QQ 群的管理员调用。此时我们可以对 foo 指令进行以下配置：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>authority.2  &gt;</span></span>
<span class="line"><span>telegram.admin &gt; command.foo</span></span></code></pre></div><p>这样一来，一个用户只需满足上述两个条件之一就可以调用此指令了。</p><p>可以看到，判断指令是否可以被用户调用，本质上是判断用户自身的权限是否可以顺着权限继承的关系到达指令的权限。同时，权限的继承允许我们给指令的调用设置多个不同条件。</p><h2 id="权限的依赖" tabindex="-1">权限的依赖 <a class="header-anchor" href="#权限的依赖" aria-label="Permalink to &quot;权限的依赖&quot;">​</a></h2><p>Koishi 中的权限不仅存在继承关系，还存在依赖关系。它的基本写法如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">depend</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">A</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>如果权限 A 依赖了权限 B，那么要执行权限 A 的操作时必须同时检查权限 B。</p><p>例：foo 指令的代码中调用了 bar 指令，因此 foo 指令依赖 bar 指令。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>command.foo -&gt; command.bar</span></span></code></pre></div><p>如果用户只拥有 foo 的权限，没有调用 bar 的权限，他依然无法调用 foo 指令。</p><p>例：foo 指令的代码中使用了 <code>bot.muteChannel()</code>。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>command.foo -&gt; bot.channel.mute</span></span></code></pre></div><p>如果机器人没有实现此 API，用户就无法在该机器人上调用 foo 指令。</p><p>由此可见，权限的依赖与继承不同。继承更多的是一种管理上的考虑，而依赖则关乎具体的功能实现。</p><h2 id="权限访问器" tabindex="-1">权限访问器 <a class="header-anchor" href="#权限访问器" aria-label="Permalink to &quot;权限访问器&quot;">​</a></h2><p>在上面的介绍中，如果要定义新的权限，就必须手动分配给用户或用户组后才能使用。有没有方法自动为一个会话分配权限呢？这就是权限访问器的功能。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;telegram.admin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">sender</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;admin&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>上面的代码的作用是：当某个会话处于 telegram 平台，并且发送者是群内管理员时，自动附加一个 telegram.admin 权限。利用这种技术，我们就可以为特定平台提供权限能力了。</p><p>每个权限可以定义多个访问器函数。在运行时必须通过每一个访问器函数的检查才能视为拥有权限。</p><p>一个权限要么是普通权限，要么是访问器权限。下面是一些区别：</p><table><thead><tr><th>普通权限</th><th>访问器权限</th></tr></thead><tbody><tr><td>手动分配给用户 (组)</td><td>自动分配给会话</td></tr><tr><td>可以被其他权限继承</td><td>不能被其他权限继承</td></tr></tbody></table><h2 id="权限国际化" tabindex="-1">权限国际化 <a class="header-anchor" href="#权限国际化" aria-label="Permalink to &quot;权限国际化&quot;">​</a></h2><p>普通权限要被用于指令和控制台中显示，因此需要做国际化。具体的做法也很简单：</p><ul><li>通过 API 定义：使用 <code>permission.{name}</code> 提供翻译文本</li><li>通过指令定义：定义时提供文本 (自动视为当前用户语言)，或通过 <code>--locale</code> 指定特定语言的文本</li><li>通过控制台定义：可以在控制台「用户管理」界面中配置用户组文本</li></ul><p>访问器权限由于其不能被其他权限继承，因此不需要做国际化。</p>`,46);function g(B,m,y,u,b,C){const a=e("badge");return h(),n("div",null,[i("h1",r,[s("权限管理 "),p(a,{type:"warning"},{default:l(()=>[s("实验性")]),_:1}),s(),k]),c])}const v=t(d,[["render",g]]);export{f as __pageData,v as default};
