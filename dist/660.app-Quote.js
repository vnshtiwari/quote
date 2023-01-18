"use strict";(self.webpackChunkQuote=self.webpackChunkQuote||[]).push([[660],{9572:(e,t,n)=>{var a=n(4836);t.Z=void 0;var o=a(n(4938)),s=n(5893),i=(0,o.default)((0,s.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=i},8164:(e,t,n)=>{n.d(t,{Z:()=>i,f:()=>s});var a=n(1588),o=n(4867);function s(e){return(0,o.Z)("MuiListItemIcon",e)}const i=(0,a.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},8660:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(2982),o=n(885),s=n(5954),i=n(5305),r=n(8061),d=(n(1474),n(9250)),l=n(5659),u=n(2949),c=n(4917),h=n(3366),p=n(7462),m=n(6010),x=n(4780),b=n(1796),g=n(4174),v=n(9474),y=n(7742),f=n(5355),w=n(3289),Z=n(4771),j=n(5741),q=n(8164),F=n(7484),N=n(1588),C=n(4867);function k(e){return(0,C.Z)("MuiMenuItem",e)}const I=(0,N.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var O=n(5893);const G=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],S=(0,g.ZP)(f.Z,{shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,p.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${I.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,b.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${I.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,b.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${I.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,b.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,b.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${I.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${I.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${j.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${j.Z.inset}`]:{marginLeft:52},[`& .${F.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${F.Z.inset}`]:{paddingLeft:36},[`& .${q.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,p.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${q.Z.root} svg`]:{fontSize:"1.25rem"}})))),$=s.forwardRef((function(e,t){const n=(0,v.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:a=!1,component:o="li",dense:i=!1,divider:r=!1,disableGutters:d=!1,focusVisibleClassName:l,role:u="menuitem",tabIndex:c,className:b}=n,g=(0,h.Z)(n,G),f=s.useContext(y.Z),j=s.useMemo((()=>({dense:i||f.dense||!1,disableGutters:d})),[f.dense,i,d]),q=s.useRef(null);(0,w.Z)((()=>{a&&q.current&&q.current.focus()}),[a]);const F=(0,p.Z)({},n,{dense:j.dense,divider:r,disableGutters:d}),N=(e=>{const{disabled:t,dense:n,divider:a,disableGutters:o,selected:s,classes:i}=e,r={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",a&&"divider",s&&"selected"]},d=(0,x.Z)(r,k,i);return(0,p.Z)({},i,d)})(n),C=(0,Z.Z)(q,t);let I;return n.disabled||(I=void 0!==c?c:-1),(0,O.jsx)(y.Z.Provider,{value:j,children:(0,O.jsx)(S,(0,p.Z)({ref:C,role:u,tabIndex:I,component:o,focusVisibleClassName:(0,m.Z)(N.focusVisible,l),className:(0,m.Z)(N.root,b)},g,{ownerState:F,classes:N}))})}));var A=n(7888),D=n(3913),H=n(9572);function L(e){var t=e.setLoader,n=e.setPolicyStatus,h=(0,d.s0)(),p=(0,s.useState)(0),m=(0,o.Z)(p,2),x=(m[0],m[1],(0,s.useState)([])),b=(0,o.Z)(x,2),g=b[0],v=b[1],y=(0,s.useState)({}),f=(0,o.Z)(y,2),w=f[0],Z=f[1],j=(0,s.useState)(""),q=(0,o.Z)(j,2),F=q[0],N=q[1],C=(0,s.useState)(""),k=(0,o.Z)(C,2),I=k[0],G=k[1],S=(0,s.useState)(""),L=(0,o.Z)(S,2),M=L[0],T=L[1],P=(0,s.useState)({}),V=(0,o.Z)(P,2),E=V[0],J=V[1],Q=(0,s.useState)([]),B=(0,o.Z)(Q,2),R=B[0],W=(B[1],(0,s.useState)(0)),_=(0,o.Z)(W,2),z=(_[0],_[1],{requestId:"uw_42348",questions:[{id:1,question:"Do you smoke?",answerFormat:"boolean",hasNext:!0,showNextOnAnswer:"true",next:[{id:2,question:"How many cigarettes in a day do you smoke?",answerFormat:"number",hasNext:!1},{id:3,question:"At what age did you start smoking?",answerFormat:"number",hasNext:!1}]},{id:4,question:"Do you drink?",answerFormat:"boolean",hasNext:!0,showNextOnAnswer:"true",next:[{id:5,question:"How often do you drink?",answerFormat:"string",answerOptions:["regularly","occasionally"],hasNext:!0,showNextOnAnswer:"regularly",next:[{id:6,question:"Have you experienced any health issues because of your drinking habits?",answerFormat:"boolean",hasNext:!1}]},{id:7,question:"At what age did you start drinking?",answerFormat:"number",hasNext:!1}]},{id:8,question:"Provide your height in CMs.",answerFormat:"number",hasNext:!1},{id:9,question:"Provide your weight in KGs.",answerFormat:"number",hasNext:!1},{id:10,question:"Have you been diagonased with Asthma?",answerFormat:"boolean",hasNext:!1},{id:11,question:"Have you been diagonased with high or low blood pressure?",answerFormat:"boolean",hasNext:!1},{id:12,question:"Have you been diagonased with Cancer?",answerFormat:"boolean",hasNext:!0,showNextOnAnswer:"true",next:[{id:13,question:"Provide the type of cancer you have been diagonased with.",answerFormat:"string",hasNext:!1},{id:14,question:"What stage of cancer were you diagnosed with?",answerFormat:"string",hasNext:!1},{id:15,question:"Have you recovered completely from Cancer?",answerFormat:"boolean",hasNext:!1}]},{id:16,question:"Have you been diagnosed with Diabestes?",answerFormat:"boolean",hasNext:!0,showNextOnAnswer:"true",next:[{id:17,question:"Do you take insulin?",answerFormat:"boolean",hasNext:!1},{id:18,question:"At what age were you diagnosed with Diabetes?",answerFormat:"number",hasNext:!1}]},{id:19,question:"Have you been hospitalised in the last 1 year?",answerFormat:"boolean",hasNext:!0,showNextOnAnswer:"true",next:[{id:20,question:"For which condition were you hospitalised?",answerFormat:"string",hasNext:!1}]},{id:21,question:"Are you under any ongoing medications?",answerFormat:"boolean",hasNext:!0,showNextOnAnswer:"true",next:[{id:22,question:"Mention the medications you are taking.",answerFormat:"string",hasNext:!1}]},{id:23,question:"Do you have any symptoms for which you have not been diagonosed or been treated?",answerFormat:"boolean",hasNext:!1}]});function K(e){var o=w[w.length-1];if("yes"==e||"no"==e?g.push({id:o.obj[o.index].id,answer:"yes"==e}):g.push({id:o.obj[o.index].id,answer:I}),v((0,a.Z)(g)),console.log(g),o.index>=o.obj.length-1){if(w.pop(),0==w.length){var s={requestId:"uw_70880",customerId:124,answers:(0,a.Z)(g)};t(!0),fetch("https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/uw/answers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){t(!1),n(e.status),h("../policyIssuance")})).catch((function(e){console.log(e)}))}return 0!=w.length&&((o=w[w.length-1]).index=o.index+1,N(o.obj[o.index].question),T(o.obj[o.index].answerFormat),J(o.obj[o.index])),void Z((0,a.Z)(w))}o.obj[o.index].hasNext&&"yes"==e?(w.push({obj:o.obj[o.index].next,index:0}),N(o.obj[o.index].next[0].question),T(o.obj[o.index].next[0].answerFormat),J(o.obj[o.index].next[0]),Z((0,a.Z)(w))):(o.index=o.index+1,N(o.obj[o.index].question),T(o.obj[o.index].answerFormat),J(o.obj[o.index]),Z((0,a.Z)(w))),console.log(E),G("")}return(0,s.useEffect)((function(){Z([{obj:z.questions,index:0}]),N(z.questions[0].question),T(z.questions[0].answerFormat),J(z.questions[0]),R.push()}),[]),(0,O.jsx)("section",{class:"chat-container",children:(0,O.jsx)("span",{children:(0,O.jsx)("div",{class:"questions-container user_name",children:(0,O.jsxs)("div",{class:" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ",children:[(0,O.jsx)("h3",{class:" fFoQAK",children:"Let's make sure our health offering is right for you"}),(0,O.jsxs)("form",{autocomplete:"off",novalidate:"",class:"bcuijq",children:[(0,O.jsx)(H.Z,{style:{position:"relative",left:"-50px",top:"100px","font-size":"40px",cursor:"pointer"},onClick:function(e){var t=w[w.length-1];if(0!=w.length){if(g.pop(),v((0,a.Z)(g)),console.log(g),t.index<=0){if(w.pop(),0==w.length)return;return 0!=w.length&&(t=w[w.length-1],N(t.obj[t.index].question),T(t.obj[t.index].answerFormat),J(t.obj[t.index])),void Z((0,a.Z)(w))}t.index=t.index-1,N(t.obj[t.index].question),T(t.obj[t.index].answerFormat),J(t.obj[t.index]),console.log(E),G("")}}}),(0,O.jsx)("div",{className:"question-form",style:{width:"100%"},children:(0,O.jsx)("div",{style:{"max-width":"416px"},class:"faXeTW hLEbcr",children:(0,O.jsx)("div",{style:{width:"100%"},class:"cZobsb gLeraX",children:(0,O.jsxs)("div",{class:"cGIqAI gQDvru",style:{opacity:"1"},children:[(0,O.jsx)("div",{height:"auto,57",class:"ifOqJt kIFXiF",children:(0,O.jsx)("div",{timeout:"400",class:"flgDQF",reversed:"",children:(0,O.jsx)("div",{class:"cGIqAI gLeraX enter-done",children:(0,O.jsx)("div",{class:"cDIwQB gQIPbk",children:F})})})}),"number"==M&&(0,O.jsx)(l.ZP,{style:{color:"red",marginTop:"20px"},"aria-label":"Always visible",defaultValue:10,getAriaValueText:function(e){return"".concat(e,"°C")},valueLabelDisplay:"auto",step:1,value:parseInt(I),onChange:function(e,t){G(t)},marks:r.EI},F),"string"==M&&void 0===E.answerOptions&&(0,O.jsx)(u.Z,{sx:{marginTop:4},id:"filled-basic",fullWidth:!0,variant:"outlined",spellCheck:!1,type:"string",value:I,onChange:function(e){G(e.target.value),console.log(E)}},F),"string"==M&&null!=E.answerOptions&&(0,O.jsxs)(A.Z,{sx:{marginTop:4},fullWidth:!0,children:[(0,O.jsx)(c.Z,{id:"demo-simple-select-label",children:"Options"}),(0,O.jsx)(D.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:I,label:"Options",onChange:function(e){G(e.target.value)},children:E.answerOptions.map((function(e){return(0,O.jsx)($,{value:e,children:e},e)}))})]}),"boolean"==M&&(0,O.jsxs)("div",{class:"EJVGF eqJfKL",children:[(0,O.jsx)(i.Z,{onClick:function(e){return K("no")},variant:"outlined",class:"DaHEG dGJoGc",children:"No"}),(0,O.jsx)(i.Z,{onClick:function(e){return K("yes")},variant:"outlined",class:"DaHEG dGJoGc",children:"Yes"})]}),("string"==M||"number"==M)&&(0,O.jsx)("div",{class:"EJVGF eqJfKL",children:(0,O.jsx)(i.Z,{onClick:function(e){return K("next")},variant:"outlined",class:"DaHEG dGJoGc",children:"Next"})})]})})})})]})]})})})})}},2982:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(907),o=n(181);function s(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=660.app-Quote.js.map