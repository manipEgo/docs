import{_ as e,m as k,p,C as s,H as i,R as l,s as h,K as t,n as d}from"./chunks/framework.6NFEWlby.js";const is=JSON.parse('{"title":"指令开发","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/basic/command.md","filePath":"ja-JP/guide/basic/command.md"}'),r={name:"ja-JP/guide/basic/command.md"},o=l("",5),B=l("",19),g=l("",5),c=l("",6),y=l("",3),F=l("",5),E=l("",21),A=h("p",null,"echo <message>",-1),C=h("p",null,"输出收到的信息",-1),u=h("p",null,"可用的选项有：",-1),_=h("p",{class:"indent-1"},"-t, --timeout <seconds> 设定延迟发送的时间",-1),m=l("",4),f=h("p",null,"echo <message>",-1),b=h("p",null,"输出收到的信息",-1),v=h("p",null,"注意：参数请写在最前面，不然会被当成 message 的一部分！",-1),D=h("p",null,"可用的选项有：",-1),x=h("p",{class:"indent-1"},"-t, --timeout <seconds> 设定延迟发送的时间",-1),T=h("p",null,"使用示例：",-1),P=h("p",{class:"indent-1"},"echo -t 300 Hello World 五分钟后发送 Hello World",-1),S=l("",3),q=h("p",null,"当前可用的指令有：",-1),V=h("p",{class:"indent-1"},"help 显示帮助信息",-1),K=h("p",null,"输入“帮助+指令名”查看特定指令的语法和使用示例。",-1),I=h("p",null,"指令：bar",-1),N=h("p",null,"一条看不见的指令",-1),R=h("p",null,[t("如果要查看隐藏的指令和选项，可以使用 "),h("code",null,"help -H"),t("：")],-1),w=h("p",null,"当前可用的指令有：",-1),$=h("p",{class:"indent-1"},"help 显示帮助信息",-1),z=h("p",{class:"indent-1"},"bar 一条看不见的指令",-1),H=h("p",null,"输入“帮助+指令名”查看特定指令的语法和使用示例。",-1),J=h("p",null,"指令：bar",-1),O=h("p",null,"一条看不见的指令",-1),W=h("p",null,"可用的选项有：",-1),j=h("p",{class:"indent-1"},"--foo <text> 一个看不见的选项",-1),G=l("",6);function L(M,Q,U,X,Y,Z){const a=k("chat-message"),n=k("chat-panel");return d(),p("div",null,[o,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("echo Hello!")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t("Hello!")]),_:1})]),_:1}),B,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("test 100 --foo 200")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t('number 100 string "200"')]),_:1}),s(a,{nickname:"Alice"},{default:i(()=>[t("test xyz")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t("参数 arg 输入无效，请提供一个数字。")]),_:1})]),_:1}),g,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("test -adb text --gamma=1 --foo-bar baz --no-xyz")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t('{ "alpha": true, "d": true, "beta": "text", "gamma": 1, "fooBar": "baz", "xyz": false }')]),_:1})]),_:1}),c,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("test -b 80")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t('{ "alpha": 100, "beta": 80 }')]),_:1})]),_:1}),y,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("test --anonymous")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t('{ "writer": 0 }')]),_:1})]),_:1}),F,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("test -f bar")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t("bar")]),_:1}),s(a,{nickname:"Alice"},{default:i(()=>[t("test -f baaaz")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t("选项 beta 输入无效，请检查语法。")]),_:1})]),_:1}),E,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("echo -h")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[A,C,u,_]),_:1})]),_:1}),m,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("echo -h")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[f,b,v,D,x,T,P]),_:1})]),_:1}),S,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("help")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[q,V,K]),_:1}),s(a,{nickname:"Alice"},{default:i(()=>[t("help bar")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[I,N]),_:1}),s(a,{nickname:"Alice"},{default:i(()=>[t("bar --foo 123")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[t("secret: 123")]),_:1})]),_:1}),R,s(n,null,{default:i(()=>[s(a,{nickname:"Alice"},{default:i(()=>[t("help -H")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[w,$,z,H]),_:1}),s(a,{nickname:"Alice"},{default:i(()=>[t("help bar -H")]),_:1}),s(a,{nickname:"Koishi"},{default:i(()=>[J,O,W,j]),_:1})]),_:1}),G])}const as=e(r,[["render",L]]);export{is as __pageData,as as default};
