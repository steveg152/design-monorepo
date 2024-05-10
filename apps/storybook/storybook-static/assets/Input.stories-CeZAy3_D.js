import{I}from"./index.esm-Bfv-4dIy.js";import{w as g,u as w,e as x}from"./index-8kprzD4t.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const B={title:"Components/TextInput",component:I,parameters:{},tags:["autodocs"],args:{label:"Input"}},a={args:{label:"Input"},play:async({canvasElement:r})=>{const e=await g(r).findByRole("textbox");await w.type(e,"Hello, World!"),x(e).toHaveValue("Hello, World!")}},t={args:{unlabeled:!0,label:"Input Placeholder"},play:async({canvasElement:r})=>{const e=await g(r).findByRole("textbox");x(e).toHaveAttribute("placeholder","Input Placeholder")}},n={args:{placeholder:"Placeholder"}},s={args:{disabled:!0}};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Input"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox");
    await userEvent.type(input, "Hello, World!");
    expect(input).toHaveValue("Hello, World!");
  }
} satisfies Story`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,i,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    unlabeled: true,
    label: "Input Placeholder"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Input Placeholder");
  }
} satisfies Story`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,m,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder"
  }
} satisfies Story`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,y,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
} satisfies Story`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const R=["Input","Unlabeled","Placeholder","Disabled"];export{s as Disabled,a as Input,n as Placeholder,t as Unlabeled,R as __namedExportsOrder,B as default};
