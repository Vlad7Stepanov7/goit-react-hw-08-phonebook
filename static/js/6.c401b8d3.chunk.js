"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{1006:function(e,t,a){a.r(t),a.d(t,{default:function(){return ue}});var n=a(1413),r=a(1134),o=a(5985),i=a(9434),s=a(3634),c=a(4554),d=a(7074),l=a(6151),u=a(5950),p=a(4695),m=a(2797),v=a(184),b=m.Ry({name:m.Z_().required(),number:m.Rx().required()}).required(),y=function(e){var t=e.contacts,a=(0,i.I0)(),m=(0,r.cI)({resolver:(0,p.X)(b)}),y=m.register,f=m.handleSubmit,g=m.reset;return(0,v.jsxs)(c.Z,{component:"form",onSubmit:f((function(e){var n=e.name,r=e.number;if(t.find((function(e){return e.name===n||e.number===r})))return o.Am.warning("There is already a contact or a number"),void g();a((0,s.uK)({name:n,number:r})),g()})),sx:u.ad,p:4,mb:5,mx:"auto",children:[(0,v.jsx)(d.Z,(0,n.Z)((0,n.Z)({type:"text"},y("name")),{},{id:"Name",label:"Name",sx:u.hG,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})),(0,v.jsx)(d.Z,(0,n.Z)((0,n.Z)({type:"tel"},y("number")),{},{id:"Number",label:"Numbere",sx:u.hG,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})),(0,v.jsx)(l.Z,{type:"submit",sx:u.LI,children:"Add contact"})]})},f=a(493),g=a(4942),Z=a(3366),h=a(7462),x=a(2791),C=a(8182),I=a(4419),S=a(627),w=a(2065),j=a(6934),N=a(1402),A=a(2982),k=a(9103),G=a(162),O=a(2071),P=a(6199),F=a(5878),L=a(1217);function R(e){return(0,L.Z)("MuiListItem",e)}var M=(0,F.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function T(e){return(0,L.Z)("MuiListItemButton",e)}var V=(0,F.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function q(e){return(0,L.Z)("MuiListItemSecondaryAction",e)}(0,F.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var B=["className"],z=(0,j.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,h.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),D=x.forwardRef((function(e,t){var a=(0,N.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,r=(0,Z.Z)(a,B),o=x.useContext(P.Z),i=(0,h.Z)({},a,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,I.Z)(n,q,a)}(i);return(0,v.jsx)(z,(0,h.Z)({className:(0,C.Z)(s.root,n),ownerState:i,ref:t},r))}));D.muiName="ListItemSecondaryAction";var _=D,K=["className"],W=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],E=(0,j.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,h.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,h.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,g.Z)({},"& > .".concat(V.root),{paddingRight:48}),(t={},(0,g.Z)(t,"&.".concat(M.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,g.Z)(t,"&.".concat(M.selected),(0,g.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(M.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,g.Z)(t,"&.".concat(M.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,g.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(M.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),J=(0,j.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),X=x.forwardRef((function(e,t){var a=(0,N.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,r=void 0===n?"center":n,o=a.autoFocus,i=void 0!==o&&o,s=a.button,c=void 0!==s&&s,d=a.children,l=a.className,u=a.component,p=a.components,m=void 0===p?{}:p,b=a.componentsProps,y=void 0===b?{}:b,f=a.ContainerComponent,g=void 0===f?"li":f,w=a.ContainerProps,j=(void 0===w?{}:w).className,F=a.dense,L=void 0!==F&&F,T=a.disabled,V=void 0!==T&&T,q=a.disableGutters,B=void 0!==q&&q,z=a.disablePadding,D=void 0!==z&&z,X=a.divider,Y=void 0!==X&&X,$=a.focusVisibleClassName,H=a.secondaryAction,Q=a.selected,U=void 0!==Q&&Q,ee=a.slotProps,te=void 0===ee?{}:ee,ae=a.slots,ne=void 0===ae?{}:ae,re=(0,Z.Z)(a.ContainerProps,K),oe=(0,Z.Z)(a,W),ie=x.useContext(P.Z),se=x.useMemo((function(){return{dense:L||ie.dense||!1,alignItems:r,disableGutters:B}}),[r,ie.dense,L,B]),ce=x.useRef(null);(0,G.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var de=x.Children.toArray(d),le=de.length&&(0,k.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,h.Z)({},a,{alignItems:r,autoFocus:i,button:c,dense:se.dense,disabled:V,disableGutters:B,disablePadding:D,divider:Y,hasSecondaryAction:le,selected:U}),pe=function(e){var t=e.alignItems,a=e.button,n=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,I.Z)(i,R,n)}(ue),me=(0,O.Z)(ce,t),ve=ne.root||m.Root||E,be=te.root||y.root||{},ye=(0,h.Z)({className:(0,C.Z)(pe.root,be.className,l),disabled:V},oe),fe=u||"li";return c&&(ye.component=u||"div",ye.focusVisibleClassName=(0,C.Z)(M.focusVisible,$),fe=A.Z),le?(fe=ye.component||u?fe:"div","li"===g&&("li"===fe?fe="div":"li"===ye.component&&(ye.component="div")),(0,v.jsx)(P.Z.Provider,{value:se,children:(0,v.jsxs)(J,(0,h.Z)({as:g,className:(0,C.Z)(pe.container,j),ref:me,ownerState:ue},re,{children:[(0,v.jsx)(ve,(0,h.Z)({},be,!(0,S.Z)(ve)&&{as:fe,ownerState:(0,h.Z)({},ue,be.ownerState)},ye,{children:de})),de.pop()]}))})):(0,v.jsx)(P.Z.Provider,{value:se,children:(0,v.jsxs)(ve,(0,h.Z)({},be,{as:fe,ref:me},!(0,S.Z)(ve)&&{ownerState:(0,h.Z)({},ue,be.ownerState)},ye,{children:[de,H&&(0,v.jsx)(_,{children:H})]}))})})),Y=a(890);function $(e){return(0,L.Z)("MuiListItemText",e)}var H=(0,F.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Q=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],U=(0,j.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,g.Z)({},"& .".concat(H.primary),t.primary),(0,g.Z)({},"& .".concat(H.secondary),t.secondary),t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,h.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),ee=x.forwardRef((function(e,t){var a=(0,N.Z)({props:e,name:"MuiListItemText"}),n=a.children,r=a.className,o=a.disableTypography,i=void 0!==o&&o,s=a.inset,c=void 0!==s&&s,d=a.primary,l=a.primaryTypographyProps,u=a.secondary,p=a.secondaryTypographyProps,m=(0,Z.Z)(a,Q),b=x.useContext(P.Z).dense,y=null!=d?d:n,f=u,g=(0,h.Z)({},a,{disableTypography:i,inset:c,primary:!!y,secondary:!!f,dense:b}),S=function(e){var t=e.classes,a=e.inset,n=e.primary,r=e.secondary,o={root:["root",a&&"inset",e.dense&&"dense",n&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,I.Z)(o,$,t)}(g);return null==y||y.type===Y.Z||i||(y=(0,v.jsx)(Y.Z,(0,h.Z)({variant:b?"body2":"body1",className:S.primary,component:null!=l&&l.variant?void 0:"span",display:"block"},l,{children:y}))),null==f||f.type===Y.Z||i||(f=(0,v.jsx)(Y.Z,(0,h.Z)({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},p,{children:f}))),(0,v.jsxs)(U,(0,h.Z)({className:(0,C.Z)(S.root,r),ownerState:g,ref:t},m,{children:[y,f]}))})),te=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],ae=(0,j.ZP)(A.Z,{shouldForwardProp:function(e){return(0,j.FO)(e)||"classes"===e},name:"MuiListItemButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,h.Z)((t={display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,g.Z)(t,"&.".concat(V.selected),(0,g.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(V.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,g.Z)(t,"&.".concat(V.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,g.Z)(t,"&.".concat(V.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,g.Z)(t,"&.".concat(V.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},"flex-start"===n.alignItems&&{alignItems:"flex-start"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.dense&&{paddingTop:4,paddingBottom:4})})),ne=x.forwardRef((function(e,t){var a=(0,N.Z)({props:e,name:"MuiListItemButton"}),n=a.alignItems,r=void 0===n?"center":n,o=a.autoFocus,i=void 0!==o&&o,s=a.component,c=void 0===s?"div":s,d=a.children,l=a.dense,u=void 0!==l&&l,p=a.disableGutters,m=void 0!==p&&p,b=a.divider,y=void 0!==b&&b,f=a.focusVisibleClassName,g=a.selected,S=void 0!==g&&g,w=a.className,j=(0,Z.Z)(a,te),A=x.useContext(P.Z),k=x.useMemo((function(){return{dense:u||A.dense||!1,alignItems:r,disableGutters:m}}),[r,A.dense,u,m]),F=x.useRef(null);(0,G.Z)((function(){i&&F.current&&F.current.focus()}),[i]);var L=(0,h.Z)({},a,{alignItems:r,dense:k.dense,disableGutters:m,divider:y,selected:S}),R=function(e){var t=e.alignItems,a=e.classes,n=e.dense,r=e.disabled,o={root:["root",n&&"dense",!e.disableGutters&&"gutters",e.divider&&"divider",r&&"disabled","flex-start"===t&&"alignItemsFlexStart",e.selected&&"selected"]},i=(0,I.Z)(o,T,a);return(0,h.Z)({},a,i)}(L),M=(0,O.Z)(F,t);return(0,v.jsx)(P.Z.Provider,{value:k,children:(0,v.jsx)(ae,(0,h.Z)({ref:M,href:j.href||j.to,component:(j.href||j.to)&&"div"===c?"a":c,focusVisibleClassName:(0,C.Z)(R.focusVisible,f),ownerState:L,className:(0,C.Z)(R.root,w)},j,{classes:R,children:d}))})})),re=function(e){var t=e.contacts,a=(0,i.I0)(),n=(0,i.v9)((function(e){return e.filter.filter})),r=""===n?t:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,v.jsx)(f.Z,{children:r.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,v.jsxs)(X,{children:[(0,v.jsxs)(ee,{sx:{color:"text.primary",width:"300px"},children:[n,": ",r]}),(0,v.jsx)(ne,{sx:{color:"text.primary"},type:"button",onClick:function(){return a((0,s.GK)(t))},children:"Delete"})]},t)}))})},oe=a(1634),ie=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.filter.filter}));return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(d.Z,{type:"text",id:"Filter",label:"Find contacts by name",value:t,onChange:function(t){return e((0,oe.a)(t.target.value))},sx:u.hG})})},se=a(279),ce=function(e){return e.contacts.contacts},de=function(e){return e.contacts.isLoading},le=function(e){return e.contacts.error},ue=function(){var e=(0,i.I0)(),t=(0,i.v9)(ce),a=(0,i.v9)(de),n=(0,i.v9)(le),r=t&&!n&&!a,d=a;(0,x.useEffect)((function(){e((0,s.yF)())}),[e]);var l;return(0,v.jsxs)(c.Z,{sx:{pt:5,mt:"100px"},children:[(0,v.jsx)(y,{contacts:t}),(0,v.jsx)(ie,{}),(0,v.jsx)(Y.Z,{variant:"h3",component:"h2",sx:{color:"text.primary"},children:"Contacts"}),d&&(0,v.jsx)(se.Z,{}),n&&(l=n,console.log(l),void o.Am.error("Sorry, error")),r&&(0,v.jsx)(re,{contacts:t})]})}}}]);
//# sourceMappingURL=6.c401b8d3.chunk.js.map