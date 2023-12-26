import{_ as e,p as a,n as i,R as s}from"./chunks/framework.6NFEWlby.js";const k=JSON.parse('{"title":"v4.3 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/about/releases/v4.3.md","filePath":"fr-FR/about/releases/v4.3.md"}'),o={name:"fr-FR/about/releases/v4.3.md"},l=s('<h1 id="v4-3-版本介绍" tabindex="-1">v4.3 版本介绍 <a class="header-anchor" href="#v4-3-版本介绍" aria-label="Permalink to &quot;v4.3 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/501" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.2.1" target="_blank" rel="noreferrer">v4.2.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.2.2" target="_blank" rel="noreferrer">v4.2.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.3.0" target="_blank" rel="noreferrer">v4.3.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.3.1" target="_blank" rel="noreferrer">v4.3.1</a></li></ul><h2 id="更好的群组支持" tabindex="-1">更好的群组支持 <a class="header-anchor" href="#更好的群组支持" aria-label="Permalink to &quot;更好的群组支持&quot;">​</a></h2><p>部分插件需要访问群组数据而非频道数据 (例如 status 插件的发言统计功能)。对于 Telegram 这类群组与频道统一的平台，我们只需要访问 <code>session.channel</code> 就可以，但是对于 Discord 这类群组与频道分离的平台，过去并没有很好的处理群组数据的办法。为此，我们引入了 <code>session.guild</code> 属性。</p><p>群组数据采用 Channel 的数据结构，并且也存储于同一张表中。我们为每一个 Channel 添加 <code>guildId</code> 属性，表示一个频道所在的群组。如果一个 Channel 实例的 <code>guildId</code> 属性等于自身 <code>id</code>，则其视为一个群组。如果某个平台的群组和频道概念重合，则对应的 <code>session.guild</code> 与 <code>session.channel</code> 一致。</p><p>这种做法不仅解决了上文中所述的问题，实际上也修复了部分平台发送广播失败的问题。在 QQ 频道中，发送频道消息不仅需要提供频道 ID，也需要同时提供群组 ID。在过去的版本中，当发送广播时无法获得一个频道所在的群组，因此发送会失败。经过这次的更新，此问题也被成功解决。</p><h2 id="全新的控制台插件" tabindex="-1">全新的控制台插件 <a class="header-anchor" href="#全新的控制台插件" aria-label="Permalink to &quot;全新的控制台插件&quot;">​</a></h2><p>在这个版本中，我们同样迎来了两个全新的控制台插件。</p><h3 id="koishijs-plugin-auth" tabindex="-1">@koishijs/plugin-auth <a class="header-anchor" href="#koishijs-plugin-auth" aria-label="Permalink to &quot;@koishijs/plugin-auth&quot;">​</a></h3><p>用过 v3 控制台的用户一定熟悉账户功能。用户可以以密码或者验证码两种方式登录，并且所有的控制台功能都会受到权限等级的限制。虽然这种方式为可以让更多用户安全地接触到控制台，但是本身也为控制台的使用者带来了一定的门槛。这是因为，要使用账户系统，就意味着用户已经安装了数据库服务，并且将自己设置为了管理员。然而 v4 中的控制台被设计成许多核心功能的桥梁，自然不应该有各种限制。出于上述考虑，v4 的控制台默认情况下是没有账户系统的。</p><p>但是我们也必须承认，账户功能和权限管理对于想要公开展示控制台的人来说是非常必要的功能。因此我们在新版本中也提供了 @koishijs/plugin-auth 插件，它作为一个控制台扩展支持了这套账户系统。安装了该插件的用户可以放心地将自己的控制台发布在公网中。</p><h3 id="koishijs-plugin-sandbox" tabindex="-1">@koishijs/plugin-sandbox <a class="header-anchor" href="#koishijs-plugin-sandbox" aria-label="Permalink to &quot;@koishijs/plugin-sandbox&quot;">​</a></h3><p>与 auth 插件类似，近期加入的 sandbox 插件也对应着 v3 控制台中的内置功能。它提供了一个虚拟平台，使用者可以在这个平台中创建账户与机器人对话，以此调试机器人的各项功能。不过在 v3 的基础上，我们加入了大量的新特性，不仅允许同时创建多个账户，也支持在群聊模式下进行对话。可以说基本覆盖了绝大部分被动型插件的使用场景。</p><p>v4 的新用户可能会对这个插件的功能感到有些迷惑，因为似乎已经有与这个插件类似的官方插件存在了。这里我们正好做一个对比：</p><ul><li>sandbox 与 chat 的区别： <ul><li>前者提供一个虚拟平台，使用者扮演平台用户与机器人对话</li><li>后者则在真实平台中，使用者扮演的是实际的机器人账号</li></ul></li><li>sandbox 与 mock 的区别： <ul><li>前者是一个控制台插件，适合用 GUI 快速调试插件的功能，只适合调试被动型插件</li><li>后者则更加强大和复杂，所有场景都能够胜任，一般结合单元测试框架在 CI 中使用</li></ul></li></ul>',15),t=[l];function r(h,n,d,c,u,p){return i(),a("div",null,t)}const b=e(o,[["render",r]]);export{k as __pageData,b as default};
