import{_ as s,p as i,n as a,R as n}from"./chunks/framework.EoKL5TQy.js";const g=JSON.parse(`{"title":"Bitset","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nintents: Schema\\n.bitset({ FOO: 1, BAR: 2, QUX: 4 })\\n.default(5)\\n.description('选择要启用的功能。'),\\narray: Schema\\n.array(Schema.union(['FOO', 'BAR', 'QUX']))\\n.default(['FOO', 'QUX'])\\n.role('checkbox')\\n.description('选择要启用的功能。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"en-US/schema/basic/bitset.md","filePath":"en-US/schema/basic/bitset.md"}`),h={name:"en-US/schema/basic/bitset.md"},t=n("",4),k=[t];function p(e,l,B,r,d,c){return a(),i("div",null,k)}const F=s(h,[["render",p]]);export{g as __pageData,F as default};
