import{_ as s,p as i,n as a,R as n}from"./chunks/framework.6NFEWlby.js";const E=JSON.parse(`{"title":"嵌套类型","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.object({\\nbar: Schema.array(\\nSchema.object({\\nbaz: Schema.number().required().description('在右侧填写数值。'),\\n}).description('这是数组的元素，它本身又是一个对象。'),\\n).default([{ baz: 114514 }]).description('这是一个嵌套属性，类型为数组。'),\\nqux: Schema.dict(\\nSchema.string().required().description('在右侧填写字符串。'),\\n).default({ welcome: 'Hello World' }).description('这是一个嵌套属性，类型为字典。'),\\n}),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"de-DE/schema/meta/nested.md","filePath":"de-DE/schema/meta/nested.md"}`),h={name:"de-DE/schema/meta/nested.md"},e=n("",4),t=[e];function l(k,p,r,d,B,c){return a(),i("div",null,t)}const g=s(h,[["render",l]]);export{E as __pageData,g as default};
