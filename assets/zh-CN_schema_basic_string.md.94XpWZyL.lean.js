import{_ as s,p as i,n as a,R as h}from"./chunks/framework.EoKL5TQy.js";const F=JSON.parse(`{"title":"字符串 (String)","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\n  text: Schema.string().pattern(/^fff$/i).description('一段普通的文本。'),\\n  secret: Schema.string().role('secret').default('password').description('请输入密码。'),\\n  link: Schema.string().role('link').default('https://github.com').description('点击访问链接。'),\\n  area: Schema.string().role('textarea', { rows: [2, 4] }).description('在下方输入多行文本。'),\\n  color: Schema.string().role('color').description('选择一个颜色。'),\\n  custom: Schema.string().pattern(/^custom$/i).description('这里只能输入 \`custom\`。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"zh-CN/schema/basic/string.md","filePath":"zh-CN/schema/basic/string.md"}`),t={name:"zh-CN/schema/basic/string.md"},n=h("",5),k=[n];function l(p,e,r,d,B,g){return a(),i("div",null,k)}const y=s(t,[["render",l]]);export{F as __pageData,y as default};
