import{_ as s,p as i,n as a,R as n}from"./chunks/framework.6NFEWlby.js";const F=JSON.parse(`{"title":"禁用与隐藏","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.string().disabled().description('这是一个禁用配置项。'),\\nbar: Schema.number().hidden(),\\nchoice: Schema.union([\\nSchema.const('foo'),\\nSchema.const('bar').disabled(),\\nSchema.const('baz').hidden(),\\n]).description('这个选择器中有一个禁用选项和一个隐藏选项。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ja-JP/schema/meta/hidden.md","filePath":"ja-JP/schema/meta/hidden.md"}`),h={name:"ja-JP/schema/meta/hidden.md"},t=n("",4),e=[t];function k(p,l,d,r,B,c){return a(),i("div",null,e)}const g=s(h,[["render",k]]);export{F as __pageData,g as default};
