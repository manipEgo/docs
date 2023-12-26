import{_ as r,m as s,p as d,s as o,K as e,C as a,H as i,R as n,n as c}from"./chunks/framework.6NFEWlby.js";const D=JSON.parse('{"title":"表态 (Reaction) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/api/resources/reaction.md","filePath":"zh-CN/api/resources/reaction.md"}'),l={name:"zh-CN/api/resources/reaction.md"},g={id:"表态-实验性",tabindex:"-1"},h=o("a",{class:"header-anchor",href:"#表态-实验性","aria-label":'Permalink to "表态 (Reaction) <badge type="warning">实验性</badge>"'},"​",-1),m=n('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这是一个实验性功能，未来可能发生改动。</p></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-createreaction" tabindex="-1">bot.createReaction(channelId, messageId, emoji) <a class="header-anchor" href="#bot-createreaction" aria-label="Permalink to &quot;bot.createReaction(channelId, messageId, emoji)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>向特定消息添加表态。</p><h3 id="bot-deletereaction" tabindex="-1">bot.deleteReaction(channelId, messageId, emoji, userId?) <a class="header-anchor" href="#bot-deletereaction" aria-label="Permalink to &quot;bot.deleteReaction(channelId, messageId, emoji, userId?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>从特定消息删除某个用户添加的特定表态。如果没有传入用户 ID 则表示删除自己的表态。</p><h3 id="bot-clearreaction" tabindex="-1">bot.clearReaction(channelId, messageId, emoji?) <a class="header-anchor" href="#bot-clearreaction" aria-label="Permalink to &quot;bot.clearReaction(channelId, messageId, emoji?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>从特定消息清除某个特定表态。如果没有传入表态名称则表示清除所有表态。</p><h3 id="bot-getreactionlist" tabindex="-1">bot.getReactionList(channelId, messageId, emoji, next?) <a class="header-anchor" href="#bot-getreactionlist" aria-label="Permalink to &quot;bot.getReactionList(channelId, messageId, emoji, next?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;User&gt;&gt;</code></li></ul><p>获取添加特定消息的特定表态的用户列表。</p>',14),I={id:"bot-getreactioniter-内置",tabindex:"-1"},_=o("a",{class:"header-anchor",href:"#bot-getreactioniter-内置","aria-label":'Permalink to "bot.getReactionIter(channelId, messageId, emoji) <badge>内置</badge>"'},"​",-1),b=n('<ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>AsyncIterable&lt;User&gt;</code> 异步迭代器</li></ul><p>获取添加特定消息的特定表态的用户的异步迭代器。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="reaction-added" tabindex="-1">reaction-added <a class="header-anchor" href="#reaction-added" aria-label="Permalink to &quot;reaction-added&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>添加表态时触发。</p><h3 id="reaction-removed" tabindex="-1">reaction-removed <a class="header-anchor" href="#reaction-removed" aria-label="Permalink to &quot;reaction-removed&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>删除表态时触发。</p>',9);function u(p,P,f,x,R,q){const t=s("badge");return c(),d("div",null,[o("h1",g,[e("表态 (Reaction) "),a(t,{type:"warning"},{default:i(()=>[e("实验性")]),_:1}),e(),h]),m,o("h3",I,[e("bot.getReactionIter(channelId, messageId, emoji) "),a(t,null,{default:i(()=>[e("内置")]),_:1}),e(),_]),b])}const k=r(l,[["render",u]]);export{D as __pageData,k as default};
