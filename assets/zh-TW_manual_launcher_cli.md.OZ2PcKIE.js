import{_ as t,p as d,n as e,R as o}from"./chunks/framework.6NFEWlby.js";const m=JSON.parse('{"title":"命令行工具","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/manual/launcher/cli.md","filePath":"zh-TW/manual/launcher/cli.md"}'),a={name:"zh-TW/manual/launcher/cli.md"},c=o('<h1 id="命令行工具" tabindex="-1">命令行工具 <a class="header-anchor" href="#命令行工具" aria-label="Permalink to &quot;命令行工具&quot;">​</a></h1><p>对于不使用图形化界面的用户，Koishi 启动器提供了命令行工具 <code>koi</code>，可以用来创建、管理和运行 Koishi。</p><p>如果你下载得到的文件类似 <code>koi-xxx.appimage</code> 的话，直接把下面介绍的 <code>koi</code> 替换成这个文件名就可以了。</p><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td><code>koi run daemon</code></td><td>无守护启动，如果你是在面板服里创建自定义脚本的话就用这条命令</td></tr><tr><td><code>koi daemon start</code></td><td>启动守护</td></tr><tr><td><code>koi daemon stop</code></td><td>停止守护</td></tr><tr><td><code>koi daemon kill</code></td><td>强制结束守护</td></tr><tr><td><code>koi ps</code></td><td>查看运行状态</td></tr><tr><td><code>koi start default</code></td><td>启动实例 <code>default</code></td></tr><tr><td><code>koi stop default</code></td><td>停止实例 <code>default</code></td></tr><tr><td><code>koi restart default</code></td><td>重启实例 <code>default</code></td></tr><tr><td><code>koi yarn -n default</code></td><td>修复 <code>default</code> 的依赖</td></tr></tbody></table>',4),r=[c];function i(l,n,s,_,h,u){return e(),d("div",null,r)}const f=t(a,[["render",i]]);export{m as __pageData,f as default};
