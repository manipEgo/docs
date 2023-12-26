import{_ as n,m as o,p as r,s as a,K as e,C as s,H as i,R as l,n as d}from"./chunks/framework.EoKL5TQy.js";const V=JSON.parse('{"title":"适配器 (Adapter)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/api/core/adapter.md","filePath":"zh-CN/api/core/adapter.md"}'),c={name:"zh-CN/api/core/adapter.md"},p=l("",3),h=l("",7),_={id:"adapter-connect-抽象",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#adapter-connect-抽象","aria-label":'Permalink to "adapter.connect(bot) <badge>抽象</badge>"'},"​",-1),b=a("ul",null,[a("li",null,[a("strong",null,"bot:"),e(),a("code",null,"Bot"),e(" 机器人实例")]),a("li",null,[e("返回值: "),a("code",null,"Promise<void>")])],-1),u=a("p",null,[e("连接 Bot 所需的操作，将在 "),a("code",null,"bot.start()"),e(" 中被调用。")],-1),g={id:"adapter-disconnect-抽象",tabindex:"-1"},C=a("a",{class:"header-anchor",href:"#adapter-disconnect-抽象","aria-label":'Permalink to "adapter.disconnect(bot) <badge>抽象</badge>"'},"​",-1),m=l("",14),A={id:"client-prepare-抽象",tabindex:"-1"},B=a("a",{class:"header-anchor",href:"#client-prepare-抽象","aria-label":'Permalink to "client.prepare() <badge>抽象</badge>"'},"​",-1),f=a("ul",null,[a("li",null,[e("返回值: "),a("code",null,"WebSocket | Promise<WebSocket>")])],-1),P=a("p",null,"根据机器人实例生成一个 WebSocket 对象。",-1),y={id:"client-accept-抽象",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#client-accept-抽象","aria-label":'Permalink to "client.accept() <badge>抽象</badge>"'},"​",-1),D=a("p",null,[e("WebSocket 连接成功建立后的回调函数。你需要实现这个方法，并在其中手动调用 "),a("code",null,"bot.resolve()"),e(" 回调函数表示已经连接成功。")],-1);function T(S,q,E,v,w,W){const t=o("badge");return d(),r("div",null,[p,a("p",null,[e("标有 "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(" 的方法需要由适配器插件自行实现。")]),h,a("h3",_,[e("adapter.connect(bot) "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),k]),b,u,a("h3",g,[e("adapter.disconnect(bot) "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),C]),m,a("h3",A,[e("client.prepare() "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),B]),f,P,a("h3",y,[e("client.accept() "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),x]),D])}const I=n(c,[["render",T]]);export{V as __pageData,I as default};
