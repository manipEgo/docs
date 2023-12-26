import{_ as p,m as t,p as c,C as o,H as i,R as n,s as a,K as l,n as _,aF as h,aG as r,aH as d,aI as u,aJ as m,aK as f,aL as g,aM as K}from"./chunks/framework.6NFEWlby.js";const O=JSON.parse('{"title":"账号登录与绑定","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/manual/usage/platform.md","filePath":"ja-JP/manual/usage/platform.md"}'),b={name:"ja-JP/manual/usage/platform.md"},k=n("",7),P=a("p",null,"平台名：discord",-1),q=a("p",null,"消息 ID：1085992290352373951",-1),x=a("p",null,"频道 ID：835804172850561094",-1),T=a("p",null,"群组 ID：811975252883800125",-1),I=a("p",null,"用户 ID：811972350065115208",-1),D=a("p",null,"自身 ID：952190117479600159",-1),A=n("",26),y=a("p",null,"指令 bind 可用于在多个平台间绑定用户数据。绑定过程中，原始平台的用户数据将完全保留，而目标平台的用户数据将被原始平台的数据所覆盖。",-1),S=a("p",null,"请确认当前平台是你的目标平台，并在 5 分钟内使用你的账号在原始平台内向机器人发送以下文本：",-1),V=a("p",null,"Koishi/123456",-1),C=a("p",null,[l("跟随提示，使用原始平台账号向机器人发送 "),a("code",null,"Koishi/123456"),l("。如果你的第一条消息是私聊消息，那么此时绑定已经完成。如果你的第一条消息是群聊消息，则机器人会再次让你进行一遍确认：")],-1),N=a("p",null,"令牌核验成功！下面将进行第二步操作。",-1),J=a("p",null,"请在 5 分钟内使用你的账号在目标平台内向机器人发送以下文本：",-1),$=a("p",null,"Koishi/654321",-1),j=a("p",null,"注意：当前平台是你的原始平台，这里的用户数据将覆盖目标平台的数据。",-1),v=a("p",null,[l("再次跟随提示，使用目标平台账号向机器人发送 "),a("code",null,"Koishi/654321"),l("，即可完成绑定。")],-1),w=a("p",null,[l("绑定完成后，你可以随时在目标平台向机器人发送 "),a("code",null,"bind -r"),l(" 来解除绑定状态。")],-1);function B(E,R,H,F,G,L){const s=t("chat-message"),e=t("chat-panel");return _(),c("div",null,[k,o(e,null,{default:i(()=>[o(s,{nickname:"Alice"},{default:i(()=>[l("inspect")]),_:1}),o(s,{nickname:"Koishi"},{default:i(()=>[P,q,x,T,I,D]),_:1})]),_:1}),A,o(e,null,{default:i(()=>[o(s,{nickname:"Alice"},{default:i(()=>[l("bind")]),_:1}),o(s,{nickname:"Koishi"},{default:i(()=>[y,S,V]),_:1})]),_:1}),C,o(e,null,{default:i(()=>[o(s,{nickname:"Alice"},{default:i(()=>[l("Koishi/123456")]),_:1}),o(s,{nickname:"Koishi"},{default:i(()=>[N,J,$,j]),_:1})]),_:1}),v,w])}const z=p(b,[["render",B]]);export{O as __pageData,z as default};
