"use strict";(self.webpackChunkQuote=self.webpackChunkQuote||[]).push([[661],{252:(e,t,n)=>{var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),o=(0,a.default)((0,i.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhone");t.Z=o},1661:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(2982),a=n(4942),i=n(5861),o=n(885),c=n(5954),s=n(2949),l=n(9316),u=n(252),p=n(5305),f=n(6307),d=n(9250),h=n(1738),b=(n(5872),n(6837)),m=n(5893);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=e.contactData,n=e.setContactData,a=e.setPlan,v=e.error,x=e.validate,y=e.setLoader,Z=(0,c.useState)(!1),g=(0,o.Z)(Z,2),O=(g[0],g[1],(0,c.useState)(!1)),P=(0,o.Z)(O,2),S=(P[0],P[1]),w=(0,c.useState)(!1),C=(0,o.Z)(w,2),k=(C[0],C[1],(0,c.useState)(!1)),q=(0,o.Z)(k,2),I=(q[0],q[1]),D=(0,c.useState)(!1),E=(0,o.Z)(D,2),T=(E[0],E[1]),A=(0,c.useState)(!1),N=(0,o.Z)(A,2),z=(N[0],N[1]),L=(0,c.useState)(""),W=(0,o.Z)(L,2),M=W[0],Q=(W[1],(0,c.useState)("")),R=(0,o.Z)(Q,2),_=R[0],B=(R[1],(0,c.useState)("")),G=(0,o.Z)(B,2),H=G[0],F=(G[1],(0,c.useState)(null)),J=(0,o.Z)(F,2),K=(J[0],J[1],(0,c.useState)(null)),V=(0,o.Z)(K,2),Y=V[0],U=V[1];(0,c.useEffect)((function(){6==M.length&&I(!0)}),[M]),(0,c.useEffect)((function(){if(""==Y){var e=new b.w.auth.RecaptchaVerifier("recaptcha-container");b.I.signInWithPhoneNumber("+91"+t.mobile,e).then((function(e){U(e),S(!0)})).catch((function(e){alert(e)}))}}),[Y]),(0,c.useEffect)((function(){6==_.length&&Y.confirm(_).then((function(e){T(!0)})).catch((function(e){alert("Wrong code")}))}),[_]),(0,c.useEffect)((function(){6==H.length&&z(!0)}),[H]);var X=(0,d.s0)();function $(){return($=(0,i.Z)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x(0,"mobile")||!x(0,"pincode")){e.next=12;break}return console.log(t),y(!0),e.next=5,fetch("https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/quote/request",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return n=e.sent,e.next=8,n.json();case 8:i=e.sent,y(!1),a((0,r.Z)(i.quote)),X("../plans");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,m.jsx)("section",{class:"chat-container",children:(0,m.jsx)("span",{children:(0,m.jsxs)("div",{class:"questions-container user_name",children:[(0,m.jsxs)("div",{class:" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ",children:[(0,m.jsx)("h3",{class:" fFoQAK",children:"Do the Prudential Insurance"}),(0,m.jsxs)("div",{className:h.Z.basicDetailContainer,children:[(0,m.jsx)("div",{class:"input-container  mt30 text",children:(0,m.jsx)(s.Z,{id:"filled-basic",fullWidth:!0,label:"Mobile No.",variant:"outlined",value:t.mobile,onChange:function(e){S(!1),T(!1),t.mobile=e.target.value.slice(0,10),n(j({},t))},onBlur:function(e){x(0,"mobile")},error:null!=v.mobile,helperText:v.mobile,spellCheck:!1,type:"number",required:!0,inputProps:{maxlength:13,autocomplete:"off"},InputProps:{startAdornment:(0,m.jsxs)(l.Z,{position:"start",children:[(0,m.jsx)(u.Z,{})," ",(0,m.jsx)("span",{className:"prefix-code",children:"+91"})]})}})}),(0,m.jsx)("div",{class:"input-container  mt30 text",children:(0,m.jsx)(s.Z,{id:"filled-basic",fullWidth:!0,label:"Pin code",variant:"outlined",value:t.pincode,onChange:function(e){S(!1),T(!1),t.pincode=e.target.value.slice(0,6),n(j({},t))},onBlur:function(e){x(0,"pincode")},error:null!=v.pincode,helperText:v.pincode,spellCheck:!1,type:"number",required:!0,inputProps:{maxlength:6,autocomplete:"off"}})}),""==Y&&(0,m.jsx)("div",{style:{marginTop:"30px"},id:"recaptcha-container"})]})]}),(0,m.jsx)("div",{class:"submit-wrap align-center",children:(0,m.jsx)(p.Z,{variant:"contained",onClick:function(){return $.apply(this,arguments)},color:"error",endIcon:(0,m.jsx)(f.Z,{}),children:"Next"})})]})})})}},2982:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(907),a=n(181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=661.app-Quote.js.map