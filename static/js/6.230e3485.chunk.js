"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{1006:function(e,t,a){a.r(t),a.d(t,{default:function(){return ue}});var n=a(1413),r=a(1134),o=a(5985),i=a(9434),s=a(3634),c=a(4554),d=a(7074),l=a(890),u=a(6151),p=a(5950),m=a(4695),v=a(2797),b=a(184),y=v.Ry({name:v.Z_().required(),number:v.Rx().required()}).required(),f=function(e){var t,a,v=e.contacts,f=(0,i.I0)(),g=(0,r.cI)({mode:"onBlur",resolver:(0,m.X)(y)}),Z=g.register,h=g.handleSubmit,x=g.reset,C=g.formState.errors;return(0,b.jsxs)(c.Z,{component:"form",onSubmit:h((function(e){var t=e.name,a=e.number;if(v.find((function(e){return e.name===t||e.number===a})))return o.Am.warning("There is already a contact or a number"),void x();f((0,s.uK)({name:t,number:a})),x()})),sx:p.ad,p:4,mb:5,mx:"auto",children:[(0,b.jsx)(d.Z,(0,n.Z)((0,n.Z)({type:"text"},Z("name")),{},{id:"Name",label:"Name",sx:p.hG,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})),(0,b.jsx)(l.Z,{variant:"body1",component:"span",sx:{color:"text.primary"},children:null===(t=C.name)||void 0===t?void 0:t.message}),(0,b.jsx)(d.Z,(0,n.Z)((0,n.Z)({type:"tel"},Z("number")),{},{id:"Number",label:"Numbere",sx:p.hG,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})),(0,b.jsx)(l.Z,{variant:"body1",component:"span",sx:{color:"text.primary"},children:null===(a=C.number)||void 0===a?void 0:a.message}),(0,b.jsx)(u.Z,{type:"submit",sx:p.LI,children:"Add contact"})]})},g=a(493),Z=a(4942),h=a(3366),x=a(7462),C=a(2791),I=a(8182),S=a(4419),j=a(627),w=a(2065),N=a(6934),A=a(1402),k=a(2982),G=a(9103),O=a(162),P=a(2071),F=a(6199),L=a(5878),R=a(1217);function M(e){return(0,R.Z)("MuiListItem",e)}var T=(0,L.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function B(e){return(0,R.Z)("MuiListItemButton",e)}var V=(0,L.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function q(e){return(0,R.Z)("MuiListItemSecondaryAction",e)}(0,L.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var z=["className"],D=(0,N.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,x.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),_=C.forwardRef((function(e,t){var a=(0,A.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,r=(0,h.Z)(a,z),o=C.useContext(F.Z),i=(0,x.Z)({},a,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,S.Z)(n,q,a)}(i);return(0,b.jsx)(D,(0,x.Z)({className:(0,I.Z)(s.root,n),ownerState:i,ref:t},r))}));_.muiName="ListItemSecondaryAction";var K=_,W=["className"],E=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],J=(0,N.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,x.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,x.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,Z.Z)({},"& > .".concat(V.root),{paddingRight:48}),(t={},(0,Z.Z)(t,"&.".concat(T.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,Z.Z)(t,"&.".concat(T.selected),(0,Z.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(T.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,Z.Z)(t,"&.".concat(T.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,Z.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(T.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),X=(0,N.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),Y=C.forwardRef((function(e,t){var a=(0,A.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,r=void 0===n?"center":n,o=a.autoFocus,i=void 0!==o&&o,s=a.button,c=void 0!==s&&s,d=a.children,l=a.className,u=a.component,p=a.components,m=void 0===p?{}:p,v=a.componentsProps,y=void 0===v?{}:v,f=a.ContainerComponent,g=void 0===f?"li":f,Z=a.ContainerProps,w=(void 0===Z?{}:Z).className,N=a.dense,L=void 0!==N&&N,R=a.disabled,B=void 0!==R&&R,V=a.disableGutters,q=void 0!==V&&V,z=a.disablePadding,D=void 0!==z&&z,_=a.divider,Y=void 0!==_&&_,$=a.focusVisibleClassName,H=a.secondaryAction,Q=a.selected,U=void 0!==Q&&Q,ee=a.slotProps,te=void 0===ee?{}:ee,ae=a.slots,ne=void 0===ae?{}:ae,re=(0,h.Z)(a.ContainerProps,W),oe=(0,h.Z)(a,E),ie=C.useContext(F.Z),se=C.useMemo((function(){return{dense:L||ie.dense||!1,alignItems:r,disableGutters:q}}),[r,ie.dense,L,q]),ce=C.useRef(null);(0,O.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var de=C.Children.toArray(d),le=de.length&&(0,G.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,x.Z)({},a,{alignItems:r,autoFocus:i,button:c,dense:se.dense,disabled:B,disableGutters:q,disablePadding:D,divider:Y,hasSecondaryAction:le,selected:U}),pe=function(e){var t=e.alignItems,a=e.button,n=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,S.Z)(i,M,n)}(ue),me=(0,P.Z)(ce,t),ve=ne.root||m.Root||J,be=te.root||y.root||{},ye=(0,x.Z)({className:(0,I.Z)(pe.root,be.className,l),disabled:B},oe),fe=u||"li";return c&&(ye.component=u||"div",ye.focusVisibleClassName=(0,I.Z)(T.focusVisible,$),fe=k.Z),le?(fe=ye.component||u?fe:"div","li"===g&&("li"===fe?fe="div":"li"===ye.component&&(ye.component="div")),(0,b.jsx)(F.Z.Provider,{value:se,children:(0,b.jsxs)(X,(0,x.Z)({as:g,className:(0,I.Z)(pe.container,w),ref:me,ownerState:ue},re,{children:[(0,b.jsx)(ve,(0,x.Z)({},be,!(0,j.Z)(ve)&&{as:fe,ownerState:(0,x.Z)({},ue,be.ownerState)},ye,{children:de})),de.pop()]}))})):(0,b.jsx)(F.Z.Provider,{value:se,children:(0,b.jsxs)(ve,(0,x.Z)({},be,{as:fe,ref:me},!(0,j.Z)(ve)&&{ownerState:(0,x.Z)({},ue,be.ownerState)},ye,{children:[de,H&&(0,b.jsx)(K,{children:H})]}))})}));function $(e){return(0,R.Z)("MuiListItemText",e)}var H=(0,L.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Q=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],U=(0,N.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,Z.Z)({},"& .".concat(H.primary),t.primary),(0,Z.Z)({},"& .".concat(H.secondary),t.secondary),t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,x.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),ee=C.forwardRef((function(e,t){var a=(0,A.Z)({props:e,name:"MuiListItemText"}),n=a.children,r=a.className,o=a.disableTypography,i=void 0!==o&&o,s=a.inset,c=void 0!==s&&s,d=a.primary,u=a.primaryTypographyProps,p=a.secondary,m=a.secondaryTypographyProps,v=(0,h.Z)(a,Q),y=C.useContext(F.Z).dense,f=null!=d?d:n,g=p,Z=(0,x.Z)({},a,{disableTypography:i,inset:c,primary:!!f,secondary:!!g,dense:y}),j=function(e){var t=e.classes,a=e.inset,n=e.primary,r=e.secondary,o={root:["root",a&&"inset",e.dense&&"dense",n&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,S.Z)(o,$,t)}(Z);return null==f||f.type===l.Z||i||(f=(0,b.jsx)(l.Z,(0,x.Z)({variant:y?"body2":"body1",className:j.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:f}))),null==g||g.type===l.Z||i||(g=(0,b.jsx)(l.Z,(0,x.Z)({variant:"body2",className:j.secondary,color:"text.secondary",display:"block"},m,{children:g}))),(0,b.jsxs)(U,(0,x.Z)({className:(0,I.Z)(j.root,r),ownerState:Z,ref:t},v,{children:[f,g]}))})),te=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],ae=(0,N.ZP)(k.Z,{shouldForwardProp:function(e){return(0,N.FO)(e)||"classes"===e},name:"MuiListItemButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,x.Z)((t={display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,Z.Z)(t,"&.".concat(V.selected),(0,Z.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(V.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,Z.Z)(t,"&.".concat(V.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,Z.Z)(t,"&.".concat(V.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,Z.Z)(t,"&.".concat(V.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},"flex-start"===n.alignItems&&{alignItems:"flex-start"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.dense&&{paddingTop:4,paddingBottom:4})})),ne=C.forwardRef((function(e,t){var a=(0,A.Z)({props:e,name:"MuiListItemButton"}),n=a.alignItems,r=void 0===n?"center":n,o=a.autoFocus,i=void 0!==o&&o,s=a.component,c=void 0===s?"div":s,d=a.children,l=a.dense,u=void 0!==l&&l,p=a.disableGutters,m=void 0!==p&&p,v=a.divider,y=void 0!==v&&v,f=a.focusVisibleClassName,g=a.selected,Z=void 0!==g&&g,j=a.className,w=(0,h.Z)(a,te),N=C.useContext(F.Z),k=C.useMemo((function(){return{dense:u||N.dense||!1,alignItems:r,disableGutters:m}}),[r,N.dense,u,m]),G=C.useRef(null);(0,O.Z)((function(){i&&G.current&&G.current.focus()}),[i]);var L=(0,x.Z)({},a,{alignItems:r,dense:k.dense,disableGutters:m,divider:y,selected:Z}),R=function(e){var t=e.alignItems,a=e.classes,n=e.dense,r=e.disabled,o={root:["root",n&&"dense",!e.disableGutters&&"gutters",e.divider&&"divider",r&&"disabled","flex-start"===t&&"alignItemsFlexStart",e.selected&&"selected"]},i=(0,S.Z)(o,B,a);return(0,x.Z)({},a,i)}(L),M=(0,P.Z)(G,t);return(0,b.jsx)(F.Z.Provider,{value:k,children:(0,b.jsx)(ae,(0,x.Z)({ref:M,href:w.href||w.to,component:(w.href||w.to)&&"div"===c?"a":c,focusVisibleClassName:(0,I.Z)(R.focusVisible,f),ownerState:L,className:(0,I.Z)(R.root,j)},w,{classes:R,children:d}))})})),re=function(e){var t=e.contacts,a=(0,i.I0)(),n=(0,i.v9)((function(e){return e.filter.filter})),r=""===n?t:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,b.jsx)(g.Z,{children:r.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,b.jsxs)(Y,{children:[(0,b.jsxs)(ee,{sx:{color:"text.primary",width:"300px"},children:[n,": ",r]}),(0,b.jsx)(ne,{sx:{color:"text.primary"},type:"button",onClick:function(){return a((0,s.GK)(t))},children:"Delete"})]},t)}))})},oe=a(1634),ie=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.filter.filter}));return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(d.Z,{type:"text",id:"Filter",label:"Find contacts by name",value:t,onChange:function(t){return e((0,oe.a)(t.target.value))},sx:p.hG})})},se=a(279),ce=function(e){return e.contacts.contacts},de=function(e){return e.contacts.isLoading},le=function(e){return e.contacts.error},ue=function(){var e=(0,i.I0)(),t=(0,i.v9)(ce),a=(0,i.v9)(de),n=(0,i.v9)(le),r=t&&!n&&!a,d=a;(0,C.useEffect)((function(){e((0,s.yF)())}),[e]);var u;return(0,b.jsxs)(c.Z,{sx:{pt:5,mt:"100px"},children:[(0,b.jsx)(f,{contacts:t}),(0,b.jsx)(ie,{}),(0,b.jsx)(l.Z,{variant:"h3",component:"h2",sx:{color:"text.primary"},children:"Contacts"}),d&&(0,b.jsx)(se.Z,{}),n&&(u=n,console.log(u),void o.Am.error("Sorry, error")),r&&(0,b.jsx)(re,{contacts:t})]})}}}]);
//# sourceMappingURL=6.230e3485.chunk.js.map