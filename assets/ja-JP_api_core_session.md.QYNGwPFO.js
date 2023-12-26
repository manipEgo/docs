import{_ as e,p as s,n as o,R as i}from"./chunks/framework.6NFEWlby.js";const p=JSON.parse('{"title":"会话 (Session)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/core/session.md","filePath":"ja-JP/api/core/session.md"}'),a={name:"ja-JP/api/core/session.md"},n=i('<h1 id="会话" tabindex="-1">会话 (Session) <a class="header-anchor" href="#会话" aria-label="Permalink to &quot;会话 (Session)&quot;">​</a></h1><p>会话来源于 Koishi v1 的元信息对象，并在后续的版本中发展成了专门的类并大幅扩展了功能。目前的会话已经参与到了 Koishi 的绝大部分工作。</p><h2 id="通用属性" tabindex="-1">通用属性 <a class="header-anchor" href="#通用属性" aria-label="Permalink to &quot;通用属性&quot;">​</a></h2><p>对于会话事件，我们抽象出了一套通用的属性：</p><h3 id="session-app" tabindex="-1">session.app <a class="header-anchor" href="#session-app" aria-label="Permalink to &quot;session.app&quot;">​</a></h3><ul><li>类型: <a href="./context.html"><code>Context</code></a></li></ul><p>当前会话的根上下文。</p><h3 id="session-bot" tabindex="-1">session.bot <a class="header-anchor" href="#session-bot" aria-label="Permalink to &quot;session.bot&quot;">​</a></h3><ul><li>类型: <a href="./bot.html"><code>Bot</code></a></li></ul><p>当前会话绑定的机器人实例。</p><h3 id="session-channel" tabindex="-1">session.channel <a class="header-anchor" href="#session-channel" aria-label="Permalink to &quot;session.channel&quot;">​</a></h3><ul><li>类型: <a href="./../database/built-in.html#channel"><code>Channel</code></a></li><li>只能在中间件或指令内部使用</li></ul><p>当前会话绑定的频道数据，是一个可观测对象。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这个属性对应的是 Koishi 内置数据结构中的频道数据，而不是平台的频道数据。如果你需要访问平台频道数据，请使用 <code>session.event.channel</code>。</p></div><h3 id="session-event" tabindex="-1">session.event <a class="header-anchor" href="#session-event" aria-label="Permalink to &quot;session.event&quot;">​</a></h3><p>会话事件数据。包含了会话中全部可以序列化的资源。含有以下属性：</p><ul><li><strong>id:</strong> <code>number</code> 事件 ID</li><li><strong>type:</strong> <code>string</code> 事件类型</li><li><strong>platform:</strong> <code>string</code> 接收者的平台名称</li><li><strong>selfId:</strong> <code>string</code> 接收者的平台账号</li><li><strong>timestamp:</strong> <code>number</code> 事件的时间戳</li><li><strong>channel:</strong> <a href="./../resources/channel.html"><code>Channel</code></a> 事件所属的频道</li><li><strong>guild:</strong> <a href="./../resources/guild.html"><code>Guild</code></a> 事件所属的群组</li><li><strong>login:</strong> <a href="./../resources/login.html"><code>Login</code></a> 事件的登录信息</li><li><strong>member:</strong> <a href="./../resources/member.html"><code>GuildMember</code></a> 事件的目标成员</li><li><strong>message:</strong> <a href="./../resources/message.html"><code>Message</code></a> 事件的消息</li><li><strong>operator:</strong> <a href="./../resources/user.html"><code>User</code></a> 事件的操作者</li><li><strong>role:</strong> <a href="./../resources/role.html"><code>GuildRole</code></a> 事件的目标角色</li><li><strong>user:</strong> <a href="./../resources/user.html"><code>User</code></a> 事件的目标用户</li></ul><p>事件中的各属性遵循<strong>资源提升</strong>规则：资源对象的某个字段可以是另一个资源对象，例如消息对象中的 <code>user</code> 字段就是一个用户对象。当资源对象出现多级嵌套时，内层的资源将会被统一提升到最外层。例如，当接收到消息事件时，事件体中可以访问到 <code>message</code>, <code>member</code>, <code>user</code>, <code>channel</code> 等资源，但 <code>message</code> 中就不再存在 <code>member</code> 和 <code>user</code> 字段了。</p><p>要访问事件体内部的属性，可以使用下面介绍的 <a href="#访问器属性">访问器属性</a>。</p><h3 id="session-user" tabindex="-1">session.user <a class="header-anchor" href="#session-user" aria-label="Permalink to &quot;session.user&quot;">​</a></h3><ul><li>类型: <a href="./../database/built-in.html#user"><code>User</code></a></li><li>只能在中间件或指令内部使用</li></ul><p>当前会话绑定的用户数据，是一个可观测对象。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这个属性对应的是 Koishi 内置数据结构中的用户数据，而不是平台的用户数据。如果你需要访问平台用户数据，请使用 <code>session.event.user</code>。</p></div><h2 id="访问器属性" tabindex="-1">访问器属性 <a class="header-anchor" href="#访问器属性" aria-label="Permalink to &quot;访问器属性&quot;">​</a></h2><p>对于部分常用的事件体属性，我们提供了访问器属性。</p><h3 id="session-author" tabindex="-1">session.author <a class="header-anchor" href="#session-author" aria-label="Permalink to &quot;session.author&quot;">​</a></h3><ul><li>类型: <code><a href="./../resources/member.html">GuildMember</a> &amp; <a href="./../resources/user.html">User</a></code></li><li>完整写法: <code>{ ...session.event.user, ...session.event.member }</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注意到 <code>GuildMember</code> 和 <code>User</code> 有部分重叠的字段，例如 <code>name</code> 和 <code>avatar</code>。在这种情况下，<code>GuildMember</code> 的字段会覆盖 <code>User</code> 的字段。</p></div><h3 id="session-channelid" tabindex="-1">session.channelId <a class="header-anchor" href="#session-channelid" aria-label="Permalink to &quot;session.channelId&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.channel.id</code></li></ul><h3 id="session-channelname" tabindex="-1">session.channelName <a class="header-anchor" href="#session-channelname" aria-label="Permalink to &quot;session.channelName&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.channel.name</code></li></ul><h3 id="session-content" tabindex="-1">session.content <a class="header-anchor" href="#session-content" aria-label="Permalink to &quot;session.content&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.message.content</code></li></ul><h3 id="session-elements" tabindex="-1">session.elements <a class="header-anchor" href="#session-elements" aria-label="Permalink to &quot;session.elements&quot;">​</a></h3><ul><li>类型: <code>Element[]</code></li><li>完整写法: <code>session.event.message.elements</code></li></ul><h3 id="session-guildid" tabindex="-1">session.guildId <a class="header-anchor" href="#session-guildid" aria-label="Permalink to &quot;session.guildId&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.guild.id</code></li></ul><h3 id="session-guildname" tabindex="-1">session.guildName <a class="header-anchor" href="#session-guildname" aria-label="Permalink to &quot;session.guildName&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.guild.name</code></li></ul><h3 id="session-id" tabindex="-1">session.id <a class="header-anchor" href="#session-id" aria-label="Permalink to &quot;session.id&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.id</code></li></ul><h3 id="session-isdirect" tabindex="-1">session.isDirect <a class="header-anchor" href="#session-isdirect" aria-label="Permalink to &quot;session.isDirect&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>完整写法: <code>session.event.channel.type === Channel.Type.DIRECT</code></li></ul><h3 id="session-messageid" tabindex="-1">session.messageId <a class="header-anchor" href="#session-messageid" aria-label="Permalink to &quot;session.messageId&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.message.id</code></li></ul><h3 id="session-platform" tabindex="-1">session.platform <a class="header-anchor" href="#session-platform" aria-label="Permalink to &quot;session.platform&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.platform</code></li></ul><h3 id="session-quote" tabindex="-1">session.quote <a class="header-anchor" href="#session-quote" aria-label="Permalink to &quot;session.quote&quot;">​</a></h3><ul><li>类型: <code>Message</code></li><li>完整写法: <code>session.event.message.quote</code></li></ul><h3 id="session-selfid" tabindex="-1">session.selfId <a class="header-anchor" href="#session-selfid" aria-label="Permalink to &quot;session.selfId&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.selfId</code></li></ul><h3 id="session-timestamp" tabindex="-1">session.timestamp <a class="header-anchor" href="#session-timestamp" aria-label="Permalink to &quot;session.timestamp&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.timestamp</code></li></ul><h3 id="session-type" tabindex="-1">session.type <a class="header-anchor" href="#session-type" aria-label="Permalink to &quot;session.type&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.type</code></li></ul><h3 id="session-userid" tabindex="-1">session.userId <a class="header-anchor" href="#session-userid" aria-label="Permalink to &quot;session.userId&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>完整写法: <code>session.event.user.id</code></li></ul><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="session-observeuser" tabindex="-1">session.observeUser(fields?) <a class="header-anchor" href="#session-observeuser" aria-label="Permalink to &quot;session.observeUser(fields?)&quot;">​</a></h3><p>观测特定的用户字段，并更新到 <a href="#session-user"><code>session.user</code></a> 中。</p><ul><li><strong>fields:</strong> <code>Iterable&lt;User.Field&gt;</code></li><li>返回值: <code>Promise&lt;User.Observed&gt;</code></li></ul><h3 id="session-observechannel" tabindex="-1">session.observeChannel(fields?) <a class="header-anchor" href="#session-observechannel" aria-label="Permalink to &quot;session.observeChannel(fields?)&quot;">​</a></h3><p>观测特定的用户字段，并更新到 <a href="#session-channel"><code>session.channel</code></a> 中。</p><ul><li><strong>fields:</strong> <code>Iterable&lt;Channel.Field&gt;</code></li><li>返回值: <code>Promise&lt;Channel.Observed&gt;</code></li></ul><h3 id="session-send" tabindex="-1">session.send(message) <a class="header-anchor" href="#session-send" aria-label="Permalink to &quot;session.send(message)&quot;">​</a></h3><ul><li><strong>message:</strong> <code>string</code> 要发送的内容</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>在当前上下文发送消息。</p><h3 id="session-sendqueued" tabindex="-1">session.sendQueued(message, delay?) <a class="header-anchor" href="#session-sendqueued" aria-label="Permalink to &quot;session.sendQueued(message, delay?)&quot;">​</a></h3><ul><li><strong>message:</strong> <code>string</code> 要发送的内容</li><li><strong>delay:</strong> <code>number</code> 与下一条消息的时间间隔，缺省时会使用 <a href="./app.html#options-delay"><code>app.config.delay.queue</code></a></li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>在当前上下文发送消息，并与下一条通过 <code>session.sendQueued</code> 发送的消息之间保持一定的时间间隔。</p><h3 id="session-cancelqueued" tabindex="-1">session.cancelQueued(delay?) <a class="header-anchor" href="#session-cancelqueued" aria-label="Permalink to &quot;session.cancelQueued(delay?)&quot;">​</a></h3><ul><li><strong>delay:</strong> <code>number</code> 与下一条消息的时间间隔，默认值为 <code>0</code></li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>取消当前正在等待发送的消息队列，并重置与下一条通过 <code>session.sendQueued</code> 发送的消息之间的时间间隔。</p><h3 id="session-prompt" tabindex="-1">session.prompt(timeout?) <a class="header-anchor" href="#session-prompt" aria-label="Permalink to &quot;session.prompt(timeout?)&quot;">​</a></h3><ul><li><strong>timeout:</strong> <code>number</code> 中间件的生效时间，缺省时会使用 <a href="./app.html#options-delay"><code>app.config.delay.prompt</code></a></li><li>返回值: <code>Promise&lt;string&gt;</code> 用户输入</li></ul><p>等待当前会话的下一次输入并返回，如果超时则会返回 <code>null</code>。无论用户输入什么，超时前的下一次输入都不会进入中间件处理流程。</p><h3 id="session-prompt-1" tabindex="-1">session.prompt(callback, options?) <a class="header-anchor" href="#session-prompt-1" aria-label="Permalink to &quot;session.prompt(callback, options?)&quot;">​</a></h3><ul><li><strong>callback:</strong> <code>(session: Session) =&gt; Awaitable&lt;T&gt;</code></li><li><strong>options.timeout:</strong> 中间件的生效时间，缺省时会使用 <a href="./app.html#options-delay"><code>app.config.delay.prompt</code></a></li><li>返回值: <code>Promise&lt;T&gt;</code> 回调函数返回的结果</li></ul><p>处理当前会话的下一次输入，如果超时则会返回 <code>null</code>。如果回调函数返回值非空，则下一次输入不会进入中间件处理流程。</p><h3 id="session-suggest" tabindex="-1">session.suggest(options) <a class="header-anchor" href="#session-suggest" aria-label="Permalink to &quot;session.suggest(options)&quot;">​</a></h3><ul><li><strong>options.actual:</strong> <code>string?</code> 目标字符串</li><li><strong>options.expect:</strong> <code>string[]</code> 候选项列表</li><li><strong>options.prefix:</strong> <code>string?</code> 显示在候选输入前的文本</li><li><strong>options.suffix:</strong> <code>string</code> 当只有一个选项时，显示在候选输入后的文本</li><li>返回值: <code>Promise&lt;string&gt;</code></li></ul><p>向用户展示候选项并等待输入。</p><h3 id="session-execute" tabindex="-1">session.execute(argv, next?) <a class="header-anchor" href="#session-execute" aria-label="Permalink to &quot;session.execute(argv, next?)&quot;">​</a></h3><ul><li><strong>argv:</strong> <code>string | Argv</code> 指令文本或运行时参数对象</li><li><strong>next:</strong> <a href="./../../guide/basic/middleware.html#注册和取消中间件"><code>Next</code></a> 回调函数</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>执行一个指令。可以传入一个 argv 对象或者指令对应的文本。</p>',86),l=[n];function t(r,d,c,h,u,m){return o(),s("div",null,l)}const b=e(a,[["render",t]]);export{p as __pageData,b as default};
