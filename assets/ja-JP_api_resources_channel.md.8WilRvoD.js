import{_ as n,m as t,p as l,s,K as a,C as h,H as r,R as i,n as d}from"./chunks/framework.6NFEWlby.js";const D=JSON.parse('{"title":"频道 (Channel)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/resources/channel.md","filePath":"ja-JP/api/resources/channel.md"}'),o={name:"ja-JP/api/resources/channel.md"},p=i(`<h1 id="频道" tabindex="-1">频道 (Channel) <a class="header-anchor" href="#频道" aria-label="Permalink to &quot;频道 (Channel)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>消歧义：本节介绍跨平台协议中的频道对象。</p><ul><li>要了解数据库中的频道，请前往 <a href="./../database/built-in.html#channel">API &gt; 数据库 &gt; 内置数据结构</a></li><li>要了解两者的区别，请前往 <a href="./../glossary.html#频道">API &gt; 术语表</a></li></ul></div><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Channel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ChannelType</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  parent_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ChannelType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  TEXT</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  DIRECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  VOICE</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  CATEGORY</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-getchannel" tabindex="-1">bot.getChannel(channelId) <a class="header-anchor" href="#bot-getchannel" aria-label="Permalink to &quot;bot.getChannel(channelId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li>返回值: <code>Promise&lt;Channel&gt;</code> 频道信息</li></ul><p>获取频道信息。</p><h3 id="bot-getchannellist" tabindex="-1">bot.getChannelList(guildId, next?) <a class="header-anchor" href="#bot-getchannellist" aria-label="Permalink to &quot;bot.getChannelList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;Channel&gt;&gt;</code> 频道列表</li></ul><p>获取某个群组的频道列表。</p>`,11),c={id:"bot-getchanneliter-内置",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#bot-getchanneliter-内置","aria-label":'Permalink to "bot.getChannelIter(guildId) <badge>内置</badge>"'},"​",-1),g=i('<ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>AsyncIterable&lt;Channel&gt;</code> 异步迭代器</li></ul><p>获取某个群组的频道列表的异步迭代器。</p><h3 id="bot-createchannel" tabindex="-1">bot.createChannel(guildId, data) <a class="header-anchor" href="#bot-createchannel" aria-label="Permalink to &quot;bot.createChannel(guildId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>data:</strong> <code>Partial&lt;Channel&gt;</code> 频道信息</li><li>返回值: <code>Promise&lt;Channel&gt;</code></li></ul><p>创建群组频道。</p><h3 id="bot-updatechannel" tabindex="-1">bot.updateChannel(channelId, data) <a class="header-anchor" href="#bot-updatechannel" aria-label="Permalink to &quot;bot.updateChannel(channelId, data)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>data:</strong> <code>Partial&lt;Channel&gt;</code> 频道信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>修改群组频道。</p><h3 id="bot-deletechannel" tabindex="-1">bot.deleteChannel(channelId) <a class="header-anchor" href="#bot-deletechannel" aria-label="Permalink to &quot;bot.deleteChannel(channelId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>删除群组频道。</p><h3 id="bot-createdirectchannel" tabindex="-1">bot.createDirectChannel(userId) <a class="header-anchor" href="#bot-createdirectchannel" aria-label="Permalink to &quot;bot.createDirectChannel(userId)&quot;">​</a></h3><ul><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li>返回值: <code>Promise&lt;Channel&gt;</code></li></ul><p>创建私聊频道。</p>',14);function C(u,b,B,_,y,I){const e=t("badge");return d(),l("div",null,[p,s("h3",c,[a("bot.getChannelIter(guildId) "),h(e,null,{default:r(()=>[a("内置")]),_:1}),a(),k]),g])}const m=n(o,[["render",C]]);export{D as __pageData,m as default};
