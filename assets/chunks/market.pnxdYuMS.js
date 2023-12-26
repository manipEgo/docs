import{m as q,w as S}from"../app.tq13R8Bx.js";import{k as J,C as ee,b as E,v as ae,d as O,D as Q,r as te,M as $,E as se,F as ne,g as oe,G as le,H as re,I as ie}from"./search.vue_vue_type_style_index_0_scoped_f6f5a36d_lang.ZI65sDRC.js";import{k as T,N as X,d as z,m as D,n as o,p as c,s,C as u,B as n,t as V,v as I,H as C,y as Y,V as L,x as B,F as w,q as P,G as j,K as F,D as ce,E as ue,_ as A,r as U,e as Z,X as G,Y as H,$ as de,a0 as pe,a1 as K,bF as me,o as he,ag as R}from"./framework.6NFEWlby.js";import"./theme.nStvUIiE.js";const W=_=>(ce("data-v-b38ae212"),_=_(),ue(),_),ve=["href"],ge={class:"header"},_e={class:"left"},fe={class:"main"},ke={class:"top"},ye=["title"],$e={class:"bottom"},Ve={class:"rating"},we={class:"right"},Ce={class:"footer"},be=["href"],Me=W(()=>s("span",{class:"spacer"},null,-1)),ze=["href"],Se=W(()=>s("span",{class:"spacer"},null,-1)),Fe=W(()=>s("span",{class:"spacer"},null,-1)),Ie=W(()=>s("span",{class:"spacer grow"},null,-1)),Be={class:"avatars"},Le=["onClick"],De=["src"],Ne=T({__name:"package",props:{data:{},gravatar:{}},emits:["query"],setup(_){const h=_,f=X(J,{}),r=ee(),k=z(()=>h.data.package.links.homepage||h.data.package.links.repository),a=z(()=>{var e,g;for(const d in E)if(!((g=(e=E[d]).hidden)!=null&&g.call(e,f,"card"))&&ae(h.data,E[d].query))return{type:d,...E[d]}});function i(e){return(h.gravatar||"https://s.gravatar.com")+"/avatar/"+(e?ne.hash(e.toLowerCase()):"")+".png?d=mp"}function p(e){return e>=100?+e.toFixed():+e.toFixed(1)}function v(e){return e>=(1<<20)*1e3?p(e/(1<<30))+" GB":e>=1024*1e3?p(e/(1<<20))+" MB":p(e/1024)+" KB"}const{t:m,setLocaleMessage:N}=O({messages:{"zh-CN":Q}});function l(e){const g=new Date,d=new Date(e),t=g.getTime()-d.getTime();return t<3e4?m("time.just-now"):t<36e5?m("time.minutes-ago",[Math.floor(t/6e4)]):t<864e5?m("time.hours-ago",[Math.floor(t/36e5)]):t<6048e5?m("time.days-ago",[Math.floor(t/864e5)]):d.toLocaleDateString()}return(e,g)=>{var b;const d=D("el-tooltip"),t=D("k-markdown");return o(),c("a",{class:"market-package",target:"_blank",href:k.value},[s("div",ge,[s("div",_e,[u(n($),{name:"outline:"+n(te)(e.data.category)},null,8,["name"])]),s("div",fe,[s("h2",ke,[s("span",{class:"title",title:e.data.shortname},V(e.data.shortname),9,ye),a.value?(o(),I(d,{key:0,placement:"right",content:n(m)(`badge.${a.value.type}`)},{default:C(()=>[s("span",{class:Y(["icon",a.value.type]),onClick:g[0]||(g[0]=L(y=>e.$emit("query",a.value.query),["stop","prevent"]))},[u(n($),{name:a.value.type},null,8,["name"])],2)]),_:1},8,["content"])):B("",!0)]),s("div",$e,[u(d,{content:Math.max(Math.min(e.data.rating??0,5),0).toFixed(1),placement:"right"},{default:C(()=>[s("div",Ve,[(o(!0),c(w,null,P(Array(5).fill(null),(y,M)=>(o(),I(n($),{key:M,name:M+.5<e.data.rating?"star-full":"star-empty"},null,8,["name"]))),128))])]),_:1},8,["content"])])]),s("div",we,[j(e.$slots,"action",{},void 0,!0)])]),u(t,{inline:"",class:"desc",source:n(r)((b=e.data.manifest)==null?void 0:b.description)??""},null,8,["source"]),s("div",Ce,[u(d,{content:l(e.data.updatedAt),placement:"top"},{default:C(()=>[s("a",{class:"shrink",target:"_blank",href:e.data.package.links.npm},[u(n($),{name:"tag"}),F(V(e.data.package.version),1)],8,be)]),_:1},8,["content"]),e.data.installSize?(o(),c(w,{key:0},[Me,s("a",{target:"_blank",href:e.data.package.links.size},[u(n($),{name:"file-archive"}),F(V(v(e.data.installSize)),1)],8,ze)],64)):B("",!0),e.data.downloads?(o(),c(w,{key:1},[Se,s("span",null,[u(n($),{name:"download"}),F(V(e.data.downloads.lastMonth),1)])],64)):B("",!0),!e.data.installSize&&!e.data.downloads?(o(),c(w,{key:2},[Fe,s("span",null,[u(n($),{name:"balance"}),F(V(e.data.license),1)])],64)):B("",!0),Ie,s("div",Be,[(o(!0),c(w,null,P(n(se)(e.data),({email:y,name:M})=>(o(),I(d,{key:M,content:M,placement:"top"},{default:C(()=>[s("span",{class:"avatar",onClick:L(x=>e.$emit("query","email:"+y),["stop","prevent"])},[s("img",{src:i(y)},null,8,De)],8,Le)]),_:2},1032,["content"]))),128))])])],8,ve)}}}),qe=A(Ne,[["__scopeId","data-v-b38ae212"]]),Ee={class:"package-list"},Ke=T({__name:"list",props:{modelValue:{},data:{},installed:{type:Function},gravatar:{}},emits:["update:modelValue","update:page"],setup(_,{emit:h}){const f=_,r=h,k=X(J,{}),a=z(()=>oe(f.data,f.modelValue)),i=z(()=>le(a.value,f.modelValue,k)),p=z(()=>{for(const l of f.modelValue)if(l.startsWith("limit:")){const e=parseInt(l.slice(6));if(e)return e}return 24}),v=U(1);Z(v,l=>r("update:page",l));const m=z(()=>{const l=[];for(let e=0;e<i.value.length;e+=p.value)l.push(i.value.slice(e,e+p.value));return l});function N(l){const e=f.modelValue.slice();e[e.length-1]||e.pop(),e.includes(l)||e.push(l),e.push(""),r("update:modelValue",e)}return(l,e)=>{const g=D("el-pagination"),d=D("k-empty");return o(),c(w,null,[j(l.$slots,"header",G(H({all:a.value,packages:i.value,hasFilter:n(re)(l.modelValue)})),void 0,!0),i.value.length?(o(),c(w,{key:0},[u(g,{class:"pagination",background:"","current-page":v.value,"onUpdate:currentPage":e[0]||(e[0]=t=>v.value=t),"pager-count":5,"page-size":p.value,total:i.value.length,layout:"prev, pager, next"},null,8,["current-page","page-size","total"]),s("div",Ee,[(o(!0),c(w,null,P(m.value[v.value-1],t=>(o(),I(qe,{key:t.package.name,class:"k-card",data:t,gravatar:l.gravatar,onQuery:N},{action:C(()=>[j(l.$slots,"action",G(H(t)),void 0,!0)]),_:2},1032,["data","gravatar"]))),128))]),u(g,{class:"pagination",background:"","current-page":v.value,"onUpdate:currentPage":e[1]||(e[1]=t=>v.value=t),"pager-count":5,"page-size":p.value,total:i.value.length,layout:"prev, pager, next"},null,8,["current-page","page-size","total"])],64)):(o(),I(d,{key:1},{default:C(()=>[F(" 没有搜索到相关插件。 ")]),_:1}))],64)}}}),Pe=A(Ke,[["__scopeId","data-v-63dc9732"]]),Ue={class:"search-box"},Te={class:"search-container"},Ae=["onClick"],We=["placeholder","onKeypress"],je=T({__name:"search",props:{modelValue:{},placeholder:{}},emits:["update:modelValue"],setup(_,{emit:h}){const f=_,r=h,k=U(),a=U();Z(()=>f.modelValue,t=>{a.value=t.slice()},{immediate:!0,deep:!0});const i=me(()=>{r("update:modelValue",a.value)},100),p=z({get:()=>a.value[a.value.length-1],set:t=>{a.value[a.value.length-1]=t.toLowerCase(),i()}});function v(t){var b;a.value.splice(t,1),r("update:modelValue",a.value),(b=k.value)==null||b.focus()}function m(){const t=a.value[a.value.length-1];t&&(a.value.slice(0,-1).includes(t)&&a.value.pop(),a.value.push(""),r("update:modelValue",a.value))}function N(t){a.value[a.value.length-1]="",r("update:modelValue",a.value)}function l(t){a.value[a.value.length-1]===""&&a.value.length>1&&(t.preventDefault(),a.value.splice(a.value.length-2,1),r("update:modelValue",a.value))}function e(){a.value=[""],r("update:modelValue",a.value)}const{t:g,setLocaleMessage:d}=O({messages:{"zh-CN":Q}});return(t,b)=>(o(),c("div",Ue,[s("div",Te,[(o(!0),c(w,null,P(t.modelValue.slice(0,-1),(y,M)=>(o(),c("span",{key:M,class:Y(["search-word",{invalid:!n(ie)(y)}]),onClick:x=>v(M)},V(y),11,Ae))),128)),de(s("input",{placeholder:n(g)("search.placeholder"),"onUpdate:modelValue":b[0]||(b[0]=y=>p.value=y),ref_key:"input",ref:k,onBlur:m,onKeydown:[K(N,["escape"]),K(l,["backspace"])],onKeypress:[K(L(m,["prevent"]),["enter"]),K(L(m,["prevent"]),["space"])]},null,40,We),[[pe,p.value]])]),s("div",{class:"search-action",onClick:L(e,["stop"])},[u(n($),{class:"search",name:"search"}),u(n($),{class:"close",name:"close"})])]))}}),Ge=A(je,[["__scopeId","data-v-f6f5a36d"]]),He={},Re={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},Je=s("path",{fill:"currentColor",d:"M379.8 197.6c5.031-7.344 5.563-16.88 1.406-24.75C377.1 164.9 368.9 160 360 160h-156.6l50.84-127.1c2.969-7.375 2.062-15.78-2.406-22.38S239.1 0 232 0h-176C43.97 0 33.81 8.906 32.22 20.84l-32 240C-.7179 267.7 1.376 274.6 5.938 279.8C10.5 285 17.09 288 24 288h146.3l-41.78 194.1c-2.406 11.22 3.469 22.56 14 27.09C145.6 511.4 148.8 512 152 512c7.719 0 15.22-3.75 19.81-10.44L379.8 197.6zM190.1 256H33.15l29.87-224h157.2L164.9 170.1C160.7 180.6 168.5 192 179.8 192h165l-176.5 257.1l37.43-174.6C207.9 265.4 200.3 256 190.1 256z"},null,-1),Oe=[Je];function Qe(_,h){return o(),c("svg",Re,Oe)}const Xe=A(He,[["render",Qe]]),Ye={key:0,class:"market-list"},Ze=s("h1",null,"插件市场",-1),xe={class:"info"},ea={class:"timestamp"},aa=["href"],ta={key:1,class:"market-loading"},sa={key:0},na={key:1},ca=T({__name:"market",setup(_){const h=U();he(async()=>{try{q.refresh()}catch(r){h.value=r}});function f(r){return`https://koishi.online/plugins/${r}?share=`+btoa(JSON.stringify({share:{name:r},plugins:{[`~${r}`]:{}}}))}return(r,k)=>{const a=D("el-tooltip");return n(q)?(o(),c("div",Ye,[u(n(Pe),{gravatar:"https://cravatar.cn",modelValue:n(S),"onUpdate:modelValue":k[1]||(k[1]=i=>R(S)?S.value=i:null),data:n(q).objects},{header:C(({hasFilter:i,all:p,packages:v})=>[Ze,s("div",xe,[F(" 当前共有 "+V(i?v.length+" / ":"")+V(p.length)+" 个可用于 v4 版本的插件 ",1),s("span",ea,"("+V(new Date(n(q).time).toLocaleString())+")",1)]),u(n(Ge),{class:"k-card",modelValue:n(S),"onUpdate:modelValue":k[0]||(k[0]=m=>R(S)?S.value=m:null)},null,8,["modelValue"])]),action:C(i=>[i.portable?(o(),I(a,{key:0,content:"快速体验",placement:"bottom"},{default:C(()=>[s("a",{class:"portable-button",href:f(i.shortname),rel:"noopener noreferer",target:"_blank"},[u(Xe)],8,aa)]),_:2},1024)):B("",!0)]),_:1},8,["modelValue","data"])])):(o(),c("div",ta,[h.value?(o(),c("div",sa," 插件市场加载失败。 ")):(o(),c("div",na," 正在加载插件市场…… "))]))}}});export{ca as default};
