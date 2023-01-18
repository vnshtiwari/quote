"use strict";(self.webpackChunkQuote=self.webpackChunkQuote||[]).push([[505],{6540:(t,e,n)=>{var r=n(4836);e.Z=void 0;var o=r(n(4938)),s=n(5893),a=(0,o.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=a},4895:(t,e,n)=>{var r=n(4836);e.Z=void 0;var o=r(n(4938)),s=n(5893),a=(0,o.default)((0,s.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");e.Z=a},8164:(t,e,n)=>{n.d(e,{Z:()=>a,f:()=>s});var r=n(1588),o=n(4867);function s(t){return(0,o.Z)("MuiListItemIcon",t)}const a=(0,r.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},9505:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});var r=n(2982),o=n(885),s=n(5954),a=n(30),i=n(5305),l=n(3421),c=n(4384),d=n(8573),u=n(1388),m=n(3366),x=n(7462),h=n(6010),p=n(4780),v=n(4174),Z=n(9474),j=n(8164),f=n(7742),y=n(5893);const g=["className"],A=(0,v.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,"flex-start"===n.alignItems&&e.alignItemsFlexStart]}})((({theme:t,ownerState:e})=>(0,x.Z)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===e.alignItems&&{marginTop:8}))),b=s.forwardRef((function(t,e){const n=(0,Z.Z)({props:t,name:"MuiListItemIcon"}),{className:r}=n,o=(0,m.Z)(n,g),a=s.useContext(f.Z),i=(0,x.Z)({},n,{alignItems:a.alignItems}),l=(t=>{const{alignItems:e,classes:n}=t,r={root:["root","flex-start"===e&&"alignItemsFlexStart"]};return(0,p.Z)(r,j.f,n)})(i);return(0,y.jsx)(A,(0,x.Z)({className:(0,h.Z)(l.root,r),ownerState:i,ref:e},o))}));var I=n(1702),N=n(9250),S=n(6540),w=n(4895),P=n(1647),B=n(5309);function C(t){var e=t.selectedPlan,n=(t.plan,t.amount),m=(t.setPlan,t.setAmount),x=(t.setLoader,(0,s.useState)([])),h=(0,o.Z)(x,2),p=(h[0],h[1],(0,s.useState)(null)),v=(0,o.Z)(p,2),Z=(v[0],v[1],(0,s.useState)([])),j=(0,o.Z)(Z,2),f=j[0],g=j[1],A=(0,N.s0)(),C=(0,s.useState)([]),k=(0,o.Z)(C,2),R=(k[0],k[1],(0,s.useState)("")),T=(0,o.Z)(R,2);return T[0],T[1],(0,y.jsxs)("section",{className:"plan-container",children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)(a.ZP,{container:!0,sx:{marginTop:10},justifyContent:"space-around",children:[(0,y.jsxs)(a.ZP,{item:!0,children:[(0,y.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:e.productName}),(0,y.jsx)(P.Z,{variant:"body2",gutterBottom:!0,children:e.productDescription}),(0,y.jsxs)(P.Z,{variant:"body2",color:"text.secondary",children:["ID: ",e.productId]}),(0,y.jsxs)(P.Z,{variant:"body2",color:"text.secondary",children:["$ ",e.amount]}),(0,y.jsx)(P.Z,{variant:"body2",color:"text.secondary",children:"Benefits"}),(0,y.jsx)(P.Z,{variant:"body2",color:"text.secondary",children:(0,y.jsx)("ul",{children:e.productFeatures.map((function(t){return(0,y.jsx)("li",{children:t},t)}))})})]},e.productId),(0,y.jsxs)(a.ZP,{item:!0,children:[(0,y.jsx)(P.Z,{gutterBottom:!0,variant:"h6",children:"AddOns"}),(0,y.jsx)(d.Z,{children:e.addsOns.map((function(t){return(0,y.jsxs)(u.ZP,{children:[(0,y.jsx)(B.Z,{onClick:function(){return function(t){f.includes(t.name)?(f.splice(f.indexOf(t.name),1),g((0,r.Z)(f)),m(n-t.amount)):(f.push(t.name),g((0,r.Z)(f)),m(n+t.amount))}(t)},children:(0,y.jsx)(b,{children:f.includes(t.name)?(0,y.jsx)(w.Z,{}):(0,y.jsx)(S.Z,{})})}),(0,y.jsx)(I.Z,{primary:"₹ ".concat(t.amount,"        ").concat(t.name)})]},t.name)}))})]})]}),(0,y.jsx)(a.ZP,{container:!0,sx:{marginTop:10},justifyContent:"center",children:(0,y.jsxs)(a.ZP,{sx:{width:300},item:!0,children:[(0,y.jsxs)("div",{className:"quote-gen",children:[(0,y.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"Plan Selected"}),(0,y.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",color:"text.secondary",component:"div",children:e.productName})]}),(0,y.jsxs)("div",{className:"quote-gen",children:[(0,y.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"AddOns"}),(0,y.jsx)(P.Z,{color:"text.secondary",component:"div",children:f.join(", ")})]}),(0,y.jsxs)("div",{className:"quote-gen",children:[(0,y.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"Net premium"}),(0,y.jsx)(P.Z,{color:"text.secondary",component:"div",children:"₹ "+82*n/100})]}),(0,y.jsxs)("div",{className:"quote-gen",children:[(0,y.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"GST (18%)"}),(0,y.jsx)(P.Z,{color:"text.secondary",component:"div",children:"₹ "+18*n/100})]}),(0,y.jsxs)("div",{className:"quote-gen",children:[(0,y.jsx)(P.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"Total Premium"}),(0,y.jsx)(P.Z,{color:"text.secondary",component:"div",children:"₹ "+n})]})]},e.productId)})]}),(0,y.jsx)("div",{}),n&&(0,y.jsx)(l.Z,{position:"fixed",sx:{top:"auto",bottom:0,color:"black",backgroundColor:"white"},children:(0,y.jsx)(c.Z,{style:{"text-align":"right"},children:(0,y.jsxs)("div",{className:"action-bar",children:[(0,y.jsxs)("span",{className:"premium",children:[(0,y.jsx)("div",{className:"premium-label",children:"Total premium"}),(0,y.jsxs)("div",{className:"premium-amount",children:["Rs ",n]})]}),(0,y.jsx)(i.Z,{onClick:function(){A("../proposal")},color:"error",sx:{borderRadius:"20px"},size:"large",variant:"contained",children:"Pay"})]})})})]})}n(1738),n(1474),n(9548)},7738:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(4015),o=n.n(r),s=n(3645),a=n.n(s)()(o());a.push([t.id,".HrkWN67\\+\\+w4KroNLNRX5WA\\=\\={\n    display: flex;\n}\n\n.oapBOztqeAHOs7zRXm-vPQ\\=\\= {\n    width: 70px;\n    height: 70px;\n}\n\n","",{version:3,sources:["webpack://./src/components/styles/plans.module.css"],names:[],mappings:"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB",sourcesContent:[".plan-item{\n    display: flex;\n}\n\n.plan-icon {\n    width: 70px;\n    height: 70px;\n}\n\n"],sourceRoot:""}]),a.locals={"plan-item":"HrkWN67++w4KroNLNRX5WA==","plan-icon":"oapBOztqeAHOs7zRXm-vPQ=="};const i=a},9548:(t,e,n)=>{var r=n(3379),o=n.n(r),s=n(7795),a=n.n(s),i=n(569),l=n.n(i),c=n(3565),d=n.n(c),u=n(9216),m=n.n(u),x=n(4589),h=n.n(x),p=n(7738),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=m(),o()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals},2982:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(907),o=n(181);function s(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=505.app-Quote.js.map