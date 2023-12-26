import{_ as e,p as a,n as o,R as l}from"./chunks/framework.EoKL5TQy.js";const u=JSON.parse('{"title":"Logger","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/utils/logger.md","filePath":"en-US/api/utils/logger.md"}'),i={name:"en-US/api/utils/logger.md"},r=l(`<h1 id="logger" tabindex="-1">Logger <a class="header-anchor" href="#logger" aria-label="Permalink to &quot;Logger&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中的 API 来自 <a href="https://github.com/shigma/reggol" target="_blank" rel="noreferrer">reggol</a>，并由 Koishi 重新导出。</p></div><h2 id="输出等级" tabindex="-1">输出等级 <a class="header-anchor" href="#输出等级" aria-label="Permalink to &quot;输出等级&quot;">​</a></h2><p><strong>输出等级</strong>控制了所有输出到命令行的内容的重要性。在 Koishi 内置的输出日志中，所有信息被分为了 3 种不同的等级：</p><ol><li>error, success</li><li>warning, info</li><li>debug</li></ol><p>当设置输出等级为 x 时，Koishi 只会输出重要性小于等于 x 的信息。当输出等级被设置为 0 时，Koishi 将不产生任何输出；而当输出等级被设置为 3 时，Koishi 产生的全部信息都会被显示在屏幕上 (你还可以通过配置 <a href="#options-logger-levels"><code>levels</code></a> 的方式影响具体插件的输出)。</p><p>默认情况下 Koishi 的输出等级为 2。你可以在配置文件中修改这个值。</p><h2 id="配置文件选项" tabindex="-1">配置文件选项 <a class="header-anchor" href="#配置文件选项" aria-label="Permalink to &quot;配置文件选项&quot;">​</a></h2><h3 id="options-logger-levels" tabindex="-1">options.logger.levels <a class="header-anchor" href="#options-logger-levels" aria-label="Permalink to &quot;options.logger.levels&quot;">​</a></h3><ul><li>类型：<code>number | object</code></li><li>默认值：<code>{}</code></li></ul><p>设置输出等级。例如：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  levels</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 将 app 命名空间的输出等级设置为 3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span></span></code></pre></div><h3 id="options-logger-showtime" tabindex="-1">options.logger.showTime <a class="header-anchor" href="#options-logger-showtime" aria-label="Permalink to &quot;options.logger.showTime&quot;">​</a></h3><ul><li>类型：<code>string | boolean</code></li><li>默认值：<code>&#39;yyyy/MM/dd hh:mm:ss&#39;</code></li></ul><p>输出日志所使用的时间格式。它的基本语法如下：</p><ul><li>yyyy: 四位数年份</li><li>yy: 年份末两位</li><li>MM: 两位数月份</li><li>dd: 两位数日期</li><li>hh: 两位数小时</li><li>mm: 两位数分钟</li><li>ss: 两位数秒</li><li>SSS: 三位数毫秒</li></ul><p>如设置为 <code>false</code>，则不会输出时间。如设置为 <code>true</code>，将视为上述默认值。</p><h3 id="options-logger-showdiff" tabindex="-1">options.logger.showDiff <a class="header-anchor" href="#options-logger-showdiff" aria-label="Permalink to &quot;options.logger.showDiff&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>!config.logger.showTime</code></li></ul><p>是否标注相邻两次输出的时间差。</p><h2 id="类-logger" tabindex="-1">类：Logger <a class="header-anchor" href="#类-logger" aria-label="Permalink to &quot;类：Logger&quot;">​</a></h2><p>通常使用 <code>Logger</code> 类来进行日志输出。</p><h3 id="new-logger" tabindex="-1">new Logger(name) <a class="header-anchor" href="#new-logger" aria-label="Permalink to &quot;new Logger(name)&quot;">​</a></h3><p>创建一个新的 Logger 实例。</p><p><code>name</code> 参数用于指定命名空间，它将作为输出的前缀，并且可以被过滤。</p><h3 id="logger-error" tabindex="-1">logger.error(format, ...param) <a class="header-anchor" href="#logger-error" aria-label="Permalink to &quot;logger.error(format, ...param)&quot;">​</a></h3><h3 id="logger-success" tabindex="-1">logger.success(format, ...param) <a class="header-anchor" href="#logger-success" aria-label="Permalink to &quot;logger.success(format, ...param)&quot;">​</a></h3><h3 id="logger-warn" tabindex="-1">logger.warn(format, ...param) <a class="header-anchor" href="#logger-warn" aria-label="Permalink to &quot;logger.warn(format, ...param)&quot;">​</a></h3><h3 id="logger-info" tabindex="-1">logger.info(format, ...param) <a class="header-anchor" href="#logger-info" aria-label="Permalink to &quot;logger.info(format, ...param)&quot;">​</a></h3><h3 id="logger-debug" tabindex="-1">logger.debug(format, ...param) <a class="header-anchor" href="#logger-debug" aria-label="Permalink to &quot;logger.debug(format, ...param)&quot;">​</a></h3><ul><li><strong>format:</strong> <code>any</code> 格式化字符串</li><li><strong>param:</strong> <code>any[]</code> 要输出的内容</li></ul><p>以不同的输出等级输出日志。参数的使用方法与 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Console/log" target="_blank" rel="noreferrer"><code>console.log</code></a> 相同。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>运行时产生的错误 (如请求失败，数据库访问失败等) 都属于 warning，只有在创建阶段和连接阶段抛出的错误才会通过 error 输出 (参见 <a href="./../../guide/plugin/lifecycle.html">生命周期</a>)。</p></div>`,33),s=[r];function t(n,g,h,d,c,p){return o(),a("div",null,s)}const f=e(i,[["render",t]]);export{u as __pageData,f as default};
