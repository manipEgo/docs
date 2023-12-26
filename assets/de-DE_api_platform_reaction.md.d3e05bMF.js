import{_ as r,m as s,p as c,s as t,K as e,C as a,H as i,R as n,n as d}from"./chunks/framework.6NFEWlby.js";const T=JSON.parse('{"title":"表态 (Reaction) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/platform/reaction.md","filePath":"de-DE/api/platform/reaction.md"}'),l={name:"de-DE/api/platform/reaction.md"},g={id:"表态-实验性",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#表态-实验性","aria-label":'Permalink to "表态 (Reaction) <badge type="warning">实验性</badge>"'},"​",-1),m=n('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-createreaction" tabindex="-1">bot.createReaction(channelId, messageId, emoji) <a class="header-anchor" href="#bot-createreaction" aria-label="Permalink to &quot;bot.createReaction(channelId, messageId, emoji)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>向特定消息添加表态。</p><h3 id="bot-deletereaction" tabindex="-1">bot.deleteReaction(channelId, messageId, emoji, userId?) <a class="header-anchor" href="#bot-deletereaction" aria-label="Permalink to &quot;bot.deleteReaction(channelId, messageId, emoji, userId?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>从特定消息删除某个用户添加的特定表态。如果没有传入用户 ID 则表示删除自己的表态。</p><h3 id="bot-clearreaction" tabindex="-1">bot.clearReaction(channelId, messageId, emoji?) <a class="header-anchor" href="#bot-clearreaction" aria-label="Permalink to &quot;bot.clearReaction(channelId, messageId, emoji?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>从特定消息清除某个特定表态。如果没有传入表态名称则表示清除所有表态。</p><h3 id="bot-getreactionlist" tabindex="-1">bot.getReactionList(channelId, messageId, emoji, next?) <a class="header-anchor" href="#bot-getreactionlist" aria-label="Permalink to &quot;bot.getReactionList(channelId, messageId, emoji, next?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;User&gt;&gt;</code></li></ul><p>获取添加特定消息的特定表态的用户列表。</p>',13),I={id:"bot-getreactioniter-内置",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#bot-getreactioniter-内置","aria-label":'Permalink to "bot.getReactionIter(channelId, messageId, emoji) <badge>内置</badge>"'},"​",-1),b=n("<ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>AsyncIterable&lt;User&gt;</code> 异步迭代器</li></ul><p>获取添加特定消息的特定表态的用户的异步迭代器。</p>",2);function p(u,f,P,D,R,j){const o=s("badge");return d(),c("div",null,[t("h1",g,[e("表态 (Reaction) "),a(o,{type:"warning"},{default:i(()=>[e("实验性")]),_:1}),e(),h]),m,t("h3",I,[e("bot.getReactionIter(channelId, messageId, emoji) "),a(o,null,{default:i(()=>[e("内置")]),_:1}),e(),_]),b])}const q=r(l,[["render",p]]);export{T as __pageData,q as default};
