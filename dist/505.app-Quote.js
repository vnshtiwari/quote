"use strict";(self.webpackChunkQuote=self.webpackChunkQuote||[]).push([[505],{6540:(e,t,n)=>{var o=n(4836);t.Z=void 0;var r=o(n(4938)),s=n(5893),a=(0,r.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=a},4895:(e,t,n)=>{var o=n(4836);t.Z=void 0;var r=o(n(4938)),s=n(5893),a=(0,r.default)((0,s.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.Z=a},8164:(e,t,n)=>{n.d(t,{Z:()=>a,f:()=>s});var o=n(1588),r=n(4867);function s(e){return(0,r.Z)("MuiListItemIcon",e)}const a=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},9505:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n(2982),r=n(885),s=n(5954),a=n(30),i=n(5305),c=n(3421),l=n(4384),d=n(8573),u=n(1388),m=n(3366),x=n(7462),h=n(6010),p=n(4780),v=n(4174),Z=n(9474),j=n(8164),f=n(7742),g=n(5893);const y=["className"],A=(0,v.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((({theme:e,ownerState:t})=>(0,x.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===t.alignItems&&{marginTop:8}))),b=s.forwardRef((function(e,t){const n=(0,Z.Z)({props:e,name:"MuiListItemIcon"}),{className:o}=n,r=(0,m.Z)(n,y),a=s.useContext(f.Z),i=(0,x.Z)({},n,{alignItems:a.alignItems}),c=(e=>{const{alignItems:t,classes:n}=e,o={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,p.Z)(o,j.f,n)})(i);return(0,g.jsx)(A,(0,x.Z)({className:(0,h.Z)(c.root,o),ownerState:i,ref:t},r))}));var I=n(1702),N=n(9250),S=n(6540),w=n(4895),P=n(1647),B=n(5309);function C(e){var t=e.selectedPlan,n=(e.plan,e.amount),m=(e.setPlan,e.setAmount),x=(e.setLoader,(0,s.useState)([])),h=(0,r.Z)(x,2),p=(h[0],h[1],(0,s.useState)(null)),v=(0,r.Z)(p,2),Z=(v[0],v[1],(0,s.useState)([])),j=(0,r.Z)(Z,2),f=j[0],y=j[1],A=(0,N.s0)();(0,s.useEffect)((function(){gtag("event","personalise_quote_init")}));var C=(0,s.useState)([]),k=(0,r.Z)(C,2),R=(k[0],k[1],(0,s.useState)("")),q=(0,r.Z)(R,2);return q[0],q[1],(0,g.jsxs)("section",{className:"plan-container",children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)(a.ZP,{container:!0,sx:{marginTop:10},justifyContent:"space-around",children:[(0,g.jsxs)(a.ZP,{item:!0,children:[(0,g.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:t.productName}),(0,g.jsx)(P.Z,{variant:"body2",gutterBottom:!0,children:t.productDescription}),(0,g.jsxs)(P.Z,{variant:"body2",color:"text.secondary",children:["ID: ",t.productId]}),(0,g.jsxs)(P.Z,{variant:"body2",color:"text.secondary",children:["$ ",t.amount]}),(0,g.jsx)(P.Z,{variant:"body2",color:"text.secondary",children:"Benefits"}),(0,g.jsx)(P.Z,{variant:"body2",color:"text.secondary",children:(0,g.jsx)("ul",{children:t.productFeatures.map((function(e){return(0,g.jsx)("li",{children:e},e)}))})})]},t.productId),(0,g.jsxs)(a.ZP,{item:!0,children:[(0,g.jsx)(P.Z,{gutterBottom:!0,variant:"h6",children:"AddOns"}),(0,g.jsx)(d.Z,{children:t.addsOns.map((function(e){return(0,g.jsxs)(u.ZP,{children:[(0,g.jsx)(B.Z,{onClick:function(){return function(e){f.includes(e.name)?(f.splice(f.indexOf(e.name),1),y((0,o.Z)(f)),m(n-e.amount)):(f.push(e.name),y((0,o.Z)(f)),m(n+e.amount))}(e)},children:(0,g.jsx)(b,{children:f.includes(e.name)?(0,g.jsx)(w.Z,{}):(0,g.jsx)(S.Z,{})})}),(0,g.jsx)(I.Z,{primary:"₹ ".concat(e.amount,"        ").concat(e.name)})]},e.name)}))})]})]}),(0,g.jsx)(a.ZP,{container:!0,sx:{marginTop:10},justifyContent:"center",children:(0,g.jsxs)(a.ZP,{sx:{width:300},item:!0,children:[(0,g.jsxs)("div",{className:"quote-gen",children:[(0,g.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"Plan Selected"}),(0,g.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",color:"text.secondary",component:"div",children:t.productName})]}),(0,g.jsxs)("div",{className:"quote-gen",children:[(0,g.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"AddOns"}),(0,g.jsx)(P.Z,{color:"text.secondary",component:"div",children:f.join(", ")})]}),(0,g.jsxs)("div",{className:"quote-gen",children:[(0,g.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"Net premium"}),(0,g.jsx)(P.Z,{color:"text.secondary",component:"div",children:"₹ "+82*n/100})]}),(0,g.jsxs)("div",{className:"quote-gen",children:[(0,g.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"GST (18%)"}),(0,g.jsx)(P.Z,{color:"text.secondary",component:"div",children:"₹ "+18*n/100})]}),(0,g.jsxs)("div",{className:"quote-gen",children:[(0,g.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"Total Premium"}),(0,g.jsx)(P.Z,{color:"text.secondary",component:"div",children:"₹ "+n})]})]},t.productId)})]}),(0,g.jsx)("div",{}),n&&(0,g.jsx)(c.Z,{position:"fixed",sx:{top:"auto",bottom:0,color:"black",backgroundColor:"white"},children:(0,g.jsx)(l.Z,{style:{"text-align":"right"},children:(0,g.jsxs)("div",{className:"action-bar",children:[(0,g.jsxs)("span",{className:"premium",children:[(0,g.jsx)("div",{className:"premium-label",children:"Total premium"}),(0,g.jsxs)("div",{className:"premium-amount",children:["Rs ",n]})]}),(0,g.jsx)(i.Z,{onClick:function(){gtag("event","personalise_quote_done"),A("../ekyc")},color:"error",sx:{borderRadius:"20px"},size:"large",variant:"contained",children:"Proceed"})]})})})]})}n(1738),n(1474),n(9548)},7738:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(4015),r=n.n(o),s=n(3645),a=n.n(s)()(r());a.push([e.id,".HrkWN67\\+\\+w4KroNLNRX5WA\\=\\={\n    display: flex;\n}\n\n.oapBOztqeAHOs7zRXm-vPQ\\=\\= {\n    width: 70px;\n    height: 70px;\n}\n\n","",{version:3,sources:["webpack://./src/components/styles/plans.module.css"],names:[],mappings:"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB",sourcesContent:[".plan-item{\n    display: flex;\n}\n\n.plan-icon {\n    width: 70px;\n    height: 70px;\n}\n\n"],sourceRoot:""}]),a.locals={"plan-item":"HrkWN67++w4KroNLNRX5WA==","plan-icon":"oapBOztqeAHOs7zRXm-vPQ=="};const i=a},9548:(e,t,n)=>{var o=n(3379),r=n.n(o),s=n(7795),a=n.n(s),i=n(569),c=n.n(i),l=n(3565),d=n.n(l),u=n(9216),m=n.n(u),x=n(4589),h=n.n(x),p=n(7738),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=m(),r()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals},2982:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(907),r=n(181);function s(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=505.app-Quote.js.map