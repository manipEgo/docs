import{k,u as y,n as r,p as i,s as t,t as d,B as c,w as B,D as z,E as K,K as F,_ as m,G as N,q as b,v as U,H as L,F as C,r as j,o as q,x as G,d as $,m as O,O as Y,C as v,bE as x,y as R}from"./framework.6NFEWlby.js";import{h as _}from"../app.tq13R8Bx.js";import"./theme.nStvUIiE.js";import"./search.vue_vue_type_style_index_0_scoped_f6f5a36d_lang.ZI65sDRC.js";const V=o=>(z("data-v-d46a1459"),o=o(),K(),o),J={class:"screen screen-cover"},Q=V(()=>t("h1",null,[t("span",{class:"koi"},"Koi"),F("shi.js")],-1)),W={class:"desc"},X={class:"actions"},Z=["href"],ee=V(()=>t("svg",{"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 320 512"},[t("g",null,[t("path",{fill:"var(--vp-c-brand-alt)",d:"M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77.0 01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94.0 0133.85.0z"}),t("path",{fill:"var(--vp-c-brand-1)",d:"M313 182.57 290.21 160a23.94 23.94.0 00-33.85.0L103.47 312.61 143 352l.06.06a24 24 0 0033.93-.16L313 216.36l.18-.17a23.78 23.78.0 00-.18-33.62z"})])],-1)),te=k({__name:"slide1",emits:["swipe"],setup(o){const{frontmatter:n}=y();return(l,u)=>(r(),i("div",J,[Q,t("p",W,d(c(n).home.desc),1),t("div",X,[t("a",{class:"action-button primary",href:c(B)(c(n).links.starter)},d(c(n).home.primary),9,Z),t("a",{class:"action-button secondary",onClick:u[0]||(u[0]=a=>l.$emit("swipe",1))},d(c(n).home.secondary),1)]),ee]))}}),se=m(te,[["__scopeId","data-v-d46a1459"]]),ne={},oe={class:"screen screen-demo"},ae={class:"caption"},re={class:"figure"};function ie(o,n){return r(),i("div",oe,[t("div",ae,[N(o.$slots,"default",{},void 0,!0)]),t("div",re,[N(o.$slots,"figure",{},void 0,!0)])])}const A=m(ne,[["render",ie],["__scopeId","data-v-d48e8b84"]]),ce=k({__name:"slide2",setup(o){const{frontmatter:n}=y();return(l,u)=>(r(!0),i(C,null,b(c(n).features,a=>(r(),U(A,{key:a.title},{default:L(()=>[t("h2",null,d(a.title),1),t("p",null,d(a.desc),1)]),_:2},1024))),128))}}),le=m(ce,[["__scopeId","data-v-3b1893a8"]]),de={class:"screen screen-development"},ue={class:"introduction"},_e={class:"advantages"},pe={class:"icon"},he=["viewBox"],ve=["d"],me={class:"desc"},fe={class:"learn-more"},ge=["href"],$e=k({__name:"slide3",setup(o){const{frontmatter:n}=y();return(l,u)=>(r(),i("div",de,[t("div",ue,[t("h2",null,d(c(n).development.title),1),t("p",null,d(c(n).development.desc),1)]),t("div",_e,[(r(!0),i(C,null,b(c(n).advantages,a=>(r(),i("div",{class:"advantage",key:a.title},[t("span",pe,[(r(),i("svg",{viewBox:a.icon.viewBox},[t("path",{d:a.icon.path,fill:"currentColor"},null,8,ve)],8,he))]),t("h3",null,d(a.title),1),t("p",me,d(a.desc),1),t("p",fe,[t("a",{href:c(B)(a.link)},"了解更多",8,ge)])]))),128))])]))}}),ke=m($e,[["__scopeId","data-v-8383521b"]]),P=o=>(z("data-v-c0d9ca18"),o=o(),K(),o),ye={class:"screen screen-footer"},we={class:"links"},xe={class:"group-title"},be={class:"group-items"},Ce=["href"],Ie={class:"copyright"},Se=P(()=>t("div",null,"MIT Licensed",-1)),De=P(()=>t("div",null,"Copyright © 2019-2023 Shigma",-1)),Me={key:0,target:"_blank",rel:"noopener noreferrer",href:"https://beian.miit.gov.cn/"},Be=k({__name:"slide4",setup(o){const{frontmatter:n}=y(),l=j(!1);return q(()=>{window.location.href.includes("ilharper.com")&&(l.value=!0)}),(u,a)=>(r(),i("footer",ye,[t("div",we,[(r(!0),i(C,null,b(c(n).footer,f=>(r(),i("div",{key:f.text,class:"group"},[t("div",xe,d(f.text),1),t("ul",be,[(r(!0),i(C,null,b(f.items,g=>(r(),i("li",{key:g.text},[t("a",{href:g.link,class:"link"},d(g.text),9,Ce)]))),128))])]))),128))]),t("div",Ie,[Se,De,l.value?(r(),i("a",Me,"浙ICP备2021029727号-1")):G("",!0)])]))}}),Ye=m(Be,[["__scopeId","data-v-c0d9ca18"]]),Ee=["src"],Le=["src"],Te=k({__name:"carousel",props:{position:{}},setup(o){const n=o,{frontmatter:l}=y(),u=$(()=>l.value.features.length),a=$(()=>n.position<1?0:n.position>u.value?1-u.value:1-n.position);return(f,g)=>{const I=O("chat-panel");return r(!0),i(C,null,b(c(l).features,(p,w)=>(r(),i("div",{class:"mask",style:Y({top:(w+a.value)*100+"vh"}),key:w},[v(A,{style:Y({top:-(w+a.value)*100+"vh"})},{figure:L(()=>[v(I,{controls:""},{default:L(()=>[t("img",{src:c(B)(p.image+".light.webp"),class:"light-only"},null,8,Ee),t("img",{src:c(B)(p.image+".dark.webp"),class:"dark-only"},null,8,Le)]),_:2},1024)]),_:2},1032,["style"])],4))),128)}}}),He=m(Te,[["__scopeId","data-v-677ea19d"]]),Ne=k({__name:"index",setup(o){const{frontmatter:n}=y(),l=$(()=>n.value.features.length),u=$(()=>l.value+2),a=$(()=>({transform:`translateY(${-_.position.value*100}vh)`}));function f(e,s,h){return e<s?s-e:e>h?h-e:0}const g=$(()=>({transform:`translateY(${f(_.position.value,1,l.value)*100}vh)`}));function I(e){return Math.max(Math.min(e,u.value),0)}function p(e){_.position.value=I(Math.round(_.position.value+e))}function w(e,s=0){return e>s?1:e<-s?-1:0}x("keydown",e=>{e.key==="ArrowDown"||e.key==="PageDown"?(e.preventDefault(),p(1)):(e.key==="ArrowUp"||e.key==="PageUp")&&(e.preventDefault(),p(-1))});let S=0,D=!1,E,M;function T(e){let s=e.target;for(;s instanceof HTMLElement;){if(s.tagName==="HEADER")return!0;s=s.parentElement}}return x("wheel",e=>{if(e.ctrlKey||e.shiftKey||Math.abs(e.deltaY)<50||T(e))return;const s=Date.now();s-S>=100&&p(Math.sign(e.deltaY)),S=s},{passive:!1}),x("touchstart",e=>{D=!0,E=M=e.changedTouches[0].clientY}),x("touchmove",e=>{if(!D||T(e))return;const{clientY:s}=e.changedTouches[0],h=_.position.value+(M-s)/innerHeight;_.position.value=I(h),_.position.value===h&&e.preventDefault(),M=s},{passive:!1}),x("touchend",e=>{D=!1;const{clientY:s}=e.changedTouches[0],h=E-s,H=Date.now();H-S>=100&&(_.position.value-=(M-E)/innerHeight,p(w(h,50))),S=H}),(e,s)=>(r(),i("div",{class:R(["container",{moving:c(D)}])},[t("div",{class:"track track-main",style:Y(a.value)},[v(se,{onSwipe:s[0]||(s[0]=h=>p(1))}),v(le),v(ke),v(Ye)],4),t("div",{class:"track track-demo",style:Y(g.value)},[v(He,{position:c(_).position.value},null,8,["position"])],4)],2))}}),Pe=m(Ne,[["__scopeId","data-v-c7b1cbd5"]]);export{Pe as default};
