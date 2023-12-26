import{_ as c,m as n,p as r,C as a,H as o,R as s,s as i,K as e,n as h}from"./chunks/framework.6NFEWlby.js";const N=JSON.parse('{"title":"指令进阶技巧","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/manual/recipe/execution.md","filePath":"ja-JP/manual/recipe/execution.md"}'),_={name:"ja-JP/manual/recipe/execution.md"},d=s('<h1 id="指令进阶技巧" tabindex="-1">指令进阶技巧 <a class="header-anchor" href="#指令进阶技巧" aria-label="Permalink to &quot;指令进阶技巧&quot;">​</a></h1><h2 id="使用引号" tabindex="-1">使用引号 <a class="header-anchor" href="#使用引号" aria-label="Permalink to &quot;使用引号&quot;">​</a></h2><p>Koishi 会自动将引号 (半角或者全角) 中的内容视为一个整体。这在很多场景中都非常有用，下面举出了一些典型的例子：</p><ul><li>当希望传入带空格的参数时 (默认行为是只解析空格前面的部分)</li><li>当希望传入以 <code>-</code> 开头的参数时 (默认的行为是解析成下一个选项)</li><li>当希望传入一个空字符串时作为参数时 (默认的行为是解析为 <code>true</code>)</li><li>当希望传入只由数字构成的字符串参数时 (默认行为是解析为 <code>number</code> 类型)</li></ul><h2 id="指令插值" tabindex="-1">指令插值 <a class="header-anchor" href="#指令插值" aria-label="Permalink to &quot;指令插值&quot;">​</a></h2><p>如果你希望在指令中使用其他指令的内容，可以使用 <code>$()</code> 进行指令插值：</p>',6),u=i("p",null,"Koishi 默认不转义单引号内的文本。如果你不希望某个参数被插值语法所转义，可以使用单引号：",-1),m=i("p",null,[e("最后，你还可以在 "),i("a",{href:"https://eval.koishi.chat",target:"_blank",rel:"noreferrer"},"koishi-plugin-eval"),e(" 中了解到另一种插值方法。")],-1),p=i("h2",{id:"模糊匹配",tabindex:"-1"},[e("模糊匹配 "),i("a",{class:"header-anchor",href:"#模糊匹配","aria-label":'Permalink to "模糊匹配"'},"​")],-1),f=i("p",null,"在日常的使用中，我们也难免会遇到打错的情况，这时 Koishi 还会自动根据相近的指令名进行纠错提醒：",-1),k=i("p",null,[e("如果想调整模糊匹配的程度，你还可以修改配置项 "),i("a",{href:"./../../api/core/app.html#options-minsimilarity"},"minSimilarity"),e("。是不是很方便呢？")],-1);function b(x,P,K,$,A,T){const t=n("chat-message"),l=n("chat-panel");return h(),r("div",null,[d,a(l,null,{default:o(()=>[a(t,{nickname:"Alice"},{default:o(()=>[e("echo foo$(echo bar)")]),_:1}),a(t,{nickname:"Koishi"},{default:o(()=>[e("foobar")]),_:1})]),_:1}),u,a(l,null,{default:o(()=>[a(t,{nickname:"Alice"},{default:o(()=>[e("echo 'foo$(echo bar)'")]),_:1}),a(t,{nickname:"Koishi"},{default:o(()=>[e("foo$(echo bar)")]),_:1})]),_:1}),m,p,f,a(l,null,{default:o(()=>[a(t,{nickname:"Alice"},{default:o(()=>[e("ecko hello")]),_:1}),a(t,{nickname:"Koishi"},{default:o(()=>[e("您要找的是不是“echo”？句点を送信してコマンドを実行します。")]),_:1}),a(t,{nickname:"Alice"},{default:o(()=>[e(".")]),_:1}),a(t,{nickname:"Koishi"},{default:o(()=>[e("hello")]),_:1})]),_:1}),k])}const S=c(_,[["render",b]]);export{N as __pageData,S as default};
