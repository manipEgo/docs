import{_ as s,p as i,n as a,R as n}from"./chunks/framework.6NFEWlby.js";const o=JSON.parse(`{"title":"Union: Tagged 1","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\nSchema.object({\\nenabled: Schema.boolean().default(false).description('是否开启功能'),\\n}).description('基础配置'),\\nSchema.union([\\nSchema.object({\\nenabled: Schema.const(true).required(),\\nfoo: Schema.number().description('请输入一个数值。'),\\nbar: Schema.string().description('请输入一个字符串。'),\\n}),\\nSchema.object({}),\\n]),\\n])\\n"},"headers":[],"relativePath":"en-US/schema/advanced/union-tagged-1.md","filePath":"en-US/schema/advanced/union-tagged-1.md"}`),h={name:"en-US/schema/advanced/union-tagged-1.md"},e=n("",4),t=[e];function k(l,p,d,r,B,c){return a(),i("div",null,t)}const F=s(h,[["render",k]]);export{o as __pageData,F as default};
