import{_ as a,p as e,n as i,R as o}from"./chunks/framework.EoKL5TQy.js";const u=JSON.parse('{"title":"发展史","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/about/history.md","filePath":"zh-TW/about/history.md"}'),t={name:"zh-TW/about/history.md"},h=o('<h1 id="发展史" tabindex="-1">发展史 <a class="header-anchor" href="#发展史" aria-label="Permalink to &quot;发展史&quot;">​</a></h1><p>2019 年 8 月，我开始编写我的第一个基于 Node.js 的聊天机器人，名为四季酱。当时我浏览各种聊天机器人框架，发现并没有自己真正想要的，遂决定从零开始编写。一开始这个机器人只包含了很少的功能，但随着其更多功能的加入，我开始调整起底层架构，并计划逐步将其开源出来。</p><p>直到 v4 发布之前，Koishi 大约每 8 个月发布一个大版本。可以说 Koishi 的发展完全是由需求推动的，在迭代中形成了一套聊天机器人开发的最佳实践。</p><h2 id="v1-时期" tabindex="-1">v1 时期 <a class="header-anchor" href="#v1-时期" aria-label="Permalink to &quot;v1 时期&quot;">​</a></h2><p>Koishi v1 发布于 2020 年 1 月。此时的 Koishi 虽然体量尚小，但已具备了许多一直沿袭至今的特征：通过插件系统实现了功能的模块化，通过事件模型和中间件处理各种输入，上下文负责对输入的事件进行过滤，以及一个通过链式调用进行开发的指令系统等等。</p><p>目前可追溯的 v1 官方插件只有 common, schedule 和 teach，其他在这个时期开发的插件大都已经弃用了。</p><h2 id="v2-时期" tabindex="-1">v2 时期 <a class="header-anchor" href="#v2-时期" aria-label="Permalink to &quot;v2 时期&quot;">​</a></h2><p>Koishi v2 发布于 2020 年 9 月，主要改动存在于应用层设计上。在这个大版本中，应用作为程序的入口对所需的资源统一管理，第一次有了生命周期钩子的概念，也将 v1 时期的元信息对象进化为了会话对象。这些改动将许多底层的接口进行了封装，允许插件开发者通过更为现代化的方式组织业务逻辑。</p><p>v2 时期也是官方插件发展迅猛的时期，许多功能强大的插件如 eval, github, image-search 和 puppeteer 等都是在这个阶段被开发出来的。</p><h2 id="v3-时期" tabindex="-1">v3 时期 <a class="header-anchor" href="#v3-时期" aria-label="Permalink to &quot;v3 时期&quot;">​</a></h2><p>Koishi v3 发布于 2021 年 5 月。这个版本最核心的变化是我们抽象出了 Adapter / Bot 的概念，并成功将 Koishi 适配到 Discord 和 Telegram 等其他主流聊天平台中。另一个值得一提的改动则是我们实现了插件的热重载，并由此催生了网页控制台和插件市场的发展。</p><p>在此期间社区开发者贡献了大量或有趣或实用的插件，也意味着 Koishi 在功能模块化的推行上取得了令人满意的成效。</p><h2 id="v4-时期" tabindex="-1">v4 时期 <a class="header-anchor" href="#v4-时期" aria-label="Permalink to &quot;v4 时期&quot;">​</a></h2><p>Koishi v4 发布于 2022 年 1 月，在底层架构中进行了大幅优化。我们引入了 Service 的概念，这将使我们得以通过类似于 IoC / DI 的方式管理 Koishi 的各项功能。同时对于数据库，我们也提供了一个 ORM 解决方案，这大幅优化了插件的开发体验。此外，我们正式围绕 Service 确立了 Assets 和 Cache 等接口，并提供了许多官方插件实现。</p><p>在这个版本中，我们出于维护性的考虑将一些官方插件移出了 koishijs/koishi。即便如此，官方插件的数量也较上一个大版本有了一个激增。以插件市场为核心的生态也正在被快速完善起来。</p>',15),r=[h];function s(c,p,n,d,l,v){return i(),e("div",null,r)}const m=a(t,[["render",s]]);export{u as __pageData,m as default};
