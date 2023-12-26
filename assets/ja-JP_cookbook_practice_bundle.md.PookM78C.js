import{_ as e,m as n,p as l,s as a,K as s,C as t,H as p,R as o,n as h}from"./chunks/framework.6NFEWlby.js";const E=JSON.parse('{"title":"整合包开发 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/cookbook/practice/bundle.md","filePath":"ja-JP/cookbook/practice/bundle.md"}'),c={name:"ja-JP/cookbook/practice/bundle.md"},d={id:"整合包开发-实验性",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#整合包开发-实验性","aria-label":'Permalink to "整合包开发 <badge type="warning">实验性</badge>"'},"​",-1),r=o(`<p>正如 <a href="./../design/workspace.html">深入工作区</a> 一文所说，对于普通的插件开发者，我们不建议将模板项目提交到 Git 仓库中。但凡事总有例外——如果你想要分发的不是插件而是成品机器人本身，那么你就需要提交根工作区了。像这种包含根工作区的仓库被称为 <strong>整合包 (Bundle)</strong>。</p><h2 id="起步" tabindex="-1">起步 <a class="header-anchor" href="#起步" aria-label="Permalink to &quot;起步&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在开始之前，我们推荐你创建一个全新的模板项目。由于整合包功能还在开发中，模板项目的结构可能随时发生更改。使用全新的模板项目可以确保你可以顺利完成后续流程。</p></div><p>在本地的模板项目下进入命令行，执行以下命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> init</span></span></code></pre></div><p>好了，这个模板项目现在已经是一个整合包了。你可以将它公开发布到 GitHub 供更多人使用 (当然也可以不公开发布，就只给自己机器人做个版本管理也不错)。</p><h2 id="管理环境变量" tabindex="-1">管理环境变量 <a class="header-anchor" href="#管理环境变量" aria-label="Permalink to &quot;管理环境变量&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>使用环境变量管理隐私信息存在一些局限性，并不是最好的方案。未来我们会提供更通用的解决方案，但目前可以先用下面的方法。</p></div><p>接下来，你需要对你的机器人进行配置了。但请注意你的配置文件将会被提交，因此请确保不要将任何隐私信息写入配置文件中。正确的做法是创建一个用于存放环境变量的 <code>.env.local</code> 文件，并在配置文件中引用这些环境变量。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">koishi.yml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  adapter-discord</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    $if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">env.DISCORD_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    token</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\${{ env.DISCORD_TOKEN }}</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.env.local</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">DISCORD_TOKEN</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> QwErTyUiOpAsDfGhJkLzXcVbNm</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>以下是 <code>.env</code> 和 <code>.env.local</code> 文件的区别：</p><ul><li><code>.env</code> 会被提交到 Git 仓库中 (因此请勿包含任何隐私信息)。</li><li><code>.env.local</code> 有着更高的优先级，且不会被提交到 Git 仓库中。</li></ul><p>Koishi 的模板项目已经包含了一个 <code>.env</code> 文件。通常情况下你都不需要用到这个文件，因为不含有隐私信息的配置项都可以直接在 <code>koishi.yml</code> 中进行修改。</p></div><h2 id="添加私有插件" tabindex="-1">添加私有插件 <a class="header-anchor" href="#添加私有插件" aria-label="Permalink to &quot;添加私有插件&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>我们不推荐这种行为。私有插件无法在不重启的情况下热更新，这将严重影响你机器人的 SLA。</p></div><p>如果你想要在整合包中使用私有插件，只需在 <code>packages</code> 目录下创建一个子工作区即可：</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">├── external</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   └── foo                     # 公开插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       ├── src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   └── index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       └── package.json</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">├── packages</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   └── bar                     # 私有插件</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       ├── src</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   └── index.ts</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">├── koishi.yml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">└── package.json</span></span></code></pre></div><p>在上图中，<code>foo</code> 是一个公开插件，<code>bar</code> 则是一个私有插件。它们的开发方式完全相同，唯一的区别就是前者有着独立的工作区仓库，而后者没有。在 <code>bar</code> 工作区下的 <code>package.json</code> 中设置 <code>private</code> 为 <code>true</code> 可以防止你不小心将私有插件发布到 npm 上。</p><h2 id="持续集成" tabindex="-1">持续集成 <a class="header-anchor" href="#持续集成" aria-label="Permalink to &quot;持续集成&quot;">​</a></h2><p>模板项目中自带的 <code>.github</code> 目录包含了一系列构建工作流。如果你的整合包是公开的，那么你可以在 GitHub 上自动构建和发布你的整合包。你要做的只有一件事：修改整合包的版本号。</p><p>目前的所有工作流都基于整合包的版本号。当根工作区的版本号变动时，所有的工作流将开始运行。一次完整的发布将包含适用于 Koishi Desktop、Koishi Android 的完整环境，甚至是 Docker 镜像和 npm 包。部分流程需要配置 actions secrets，可以参考下面的列表：</p><ul><li>DOCKER_USERNAME</li><li>DOCKER_PASSWORD</li><li>NPM_TOKEN</li></ul>`,21);function g(B,u,b,y,m,v){const i=n("badge");return h(),l("div",null,[a("h1",d,[s("整合包开发 "),t(i,{type:"warning"},{default:p(()=>[s("实验性")]),_:1}),s(),k]),r])}const A=e(c,[["render",g]]);export{E as __pageData,A as default};
