(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4372],{91586:function(e,t,n){"use strict";var i=n(67294);t.Z=e=>i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75Z",clipRule:"evenodd"}))},56919:function(e,t,n){"use strict";var i=n(67294);t.Z=e=>i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8Z",clipRule:"evenodd"}))},57006:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(97582),l=n(67294),r=n(13650),s=n(1994),a=n(76657);n(88557);let o=(0,a.Ge)("card"),c=l.forwardRef(function(e,t){let{type:n="container",theme:a,view:c,size:u="m",children:d,className:m,onClick:f,disabled:v,selected:h}=e,x=(0,i._T)(e,["type","theme","view","size","children","className","onClick","disabled","selected"]),b="selection"===n,g="container"===n,p=("action"===n||b)&&!!f&&!(v||h),j=p?f:void 0,{onKeyDown:N}=(0,r.b)(f);return l.createElement(s.x,Object.assign({ref:t,role:p?"button":void 0,className:o({theme:a||(g?"normal":void 0),view:c||(g||b?"outlined":void 0),type:n,selected:h,size:u,disabled:v,clickable:p},m),onClick:j,onKeyDown:p?N:void 0,tabIndex:p?0:void 0},x),d)})},20487:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var i=n(67294),l=n(74855),r=n.n(l);let s="pending";function a(e){let{children:t,text:n,options:l,timeout:a,onCopy:o}=e,[c,u]=i.useState(s),d=i.useRef(),m=i.useMemo(()=>t(c),[t,c]),f=i.useCallback((e,t)=>{u(t?"success":"error"),window.clearTimeout(d.current),d.current=window.setTimeout(()=>u(s),a),null==o||o(e,t)},[o,a]);if(i.useEffect(()=>()=>window.clearTimeout(d.current),[]),!i.isValidElement(m))throw Error("Content must be a valid react element");return i.createElement(r(),{text:n,onCopy:f,options:l},m)}},11530:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var i=n(97582),l=n(67294),r=n(94746),s=n(76657);n(23321);let a=(0,s.Ge)("text"),o=({variant:e="body-1",ellipsis:t,ellipsisLines:n,whiteSpace:i,wordBreak:l},r)=>a({variant:e,ellipsis:t,ws:i,wb:l,"ellipsis-lines":n},r),c=l.forwardRef(function(e,t){var{as:n,children:s,variant:a,className:c,ellipsis:u,color:d,whiteSpace:m,wordBreak:f,ellipsisLines:v,style:h,qa:x}=e,b=(0,i._T)(e,["as","children","variant","className","ellipsis","color","whiteSpace","wordBreak","ellipsisLines","style","qa"]);let g=Object.assign({},h);return"number"==typeof v&&(g.WebkitLineClamp=v),l.createElement(n||"span",Object.assign({ref:t,className:o({variant:a,ellipsis:u,whiteSpace:m,wordBreak:f,ellipsisLines:"number"==typeof v},d?(0,r.V)({color:d},c):c),style:g,"data-qa":x},b),s)});c.displayName="Text"},94746:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var i=n(76657);n(32786);let l=(0,i.Ge)("color-text"),r=({color:e},t)=>l({color:e},t)},11197:function(e,t,n){"use strict";n.d(t,{o:function(){return C}});var i=n(67294),l=n(81372),r=n(70033),s=n(38071),a=n(93258),o=n(64770),c=n(59854),u=n.n(c),d=n(23493),m=n.n(d);function f(e,t){let[n,l]=i.useState({width:0,height:0});return i.useLayoutEffect(()=>{if(!(null==e?void 0:e.current))return;let t=new ResizeObserver(m()(e=>{if(!Array.isArray(e))return;let t=e[0];if(t.borderBoxSize){let e=t.borderBoxSize[0]?t.borderBoxSize[0]:t.borderBoxSize;l({width:u()(e.inlineSize,2),height:u()(e.blockSize,2)})}else{let e=t.target;l({width:u()(e.offsetWidth,2),height:u()(e.offsetHeight,2)})}},16));return t.observe(e.current),()=>{t.disconnect()}},[e,t]),n}var v=n(1960),h=n(94294),x=n(76657),b=n(77950),g=n(14182),p=n(94088);let j=(0,x.Ge)("text-input"),N=i.forwardRef(function({placement:e,children:t,onClick:n},l){return t?i.createElement("div",{ref:l,className:j("additional-content",{placement:e}),onClick:n},t):null}),w=(0,x.Ge)("text-input");function y(e){let{controlProps:t,controlRef:n,type:l,name:r,id:s,tabIndex:a,autoComplete:o,placeholder:c,value:u,defaultValue:d,autoFocus:m,disabled:f,onChange:v,onFocus:h,onBlur:x,onKeyDown:b,onKeyUp:g,onKeyPress:p}=e;return i.createElement("input",Object.assign({},t,{ref:n,className:w("control",{type:"input"},t.className),type:l,name:r,id:s,tabIndex:a,placeholder:c,value:u,defaultValue:d,autoFocus:m,autoComplete:o,onChange:v,onFocus:h,onBlur:x,onKeyDown:b,onKeyUp:g,onKeyPress:p,disabled:null!=f?f:t.disabled}))}n(95738);let S=(0,x.Ge)("text-input"),C=i.forwardRef(function(e,t){let{view:n="normal",size:c="m",pin:u="round-round",name:d,value:m,defaultValue:x,label:j,disabled:w=!1,hasClear:C=!1,error:E,errorMessage:k,errorPlacement:I="outside",validationState:O,autoComplete:_,id:G,tabIndex:z,style:P,className:R,qa:M,controlProps:T,leftContent:Z,rightContent:L,startContent:J=Z,endContent:A=L,note:B,onUpdate:q,onChange:$}=e,{errorMessage:W,errorPlacement:D,validationState:H}=(0,p.II)({error:E,errorMessage:k,errorPlacement:I,validationState:O}),[V,K]=(0,r.z)(m,null!=x?x:"",q),X=i.useRef(null),F=(0,o.q)({initialValue:V,onReset:K}),U=(0,s.c)(e.controlRef,X,F),Q=i.useRef(null),Y=i.useRef(null),ee=(0,p.O_)(H),et=!!j,en="invalid"===H&&!!W&&"outside"===D,ei="invalid"===H&&!!W&&"inside"===D,el=!!(C&&!w&&V),er=!!J,es=!!A,ea=et&&!G&&!d&&void 0===_,eo=(0,a.u)(),ec=et?G||eo:G,eu=f(et?Q:null,c),ed=f(er?Y:null,c),em=(0,a.u)(),ef=(0,a.u)(),ev=[null==T?void 0:T["aria-describedby"],B?ef:void 0,en?em:void 0].filter(Boolean).join(" "),eh=Object.assign(Object.assign({},T),{style:Object.assign(Object.assign({},null==T?void 0:T.style),et&&eu.width?{paddingInlineStart:`${eu.width}px`}:{}),"aria-invalid":"invalid"===H||void 0,"aria-describedby":ev||void 0}),ex={id:ec,tabIndex:z,name:d,onChange(e){K(e.target.value),$&&$(e)},autoComplete:ea?"off":(0,p.xp)(_),controlProps:eh},eb=e=>{var t,n;let i=!e.currentTarget.contains(document.activeElement)&&e.currentTarget.contains(e.target),l=!!(null===(t=document.getSelection())||void 0===t?void 0:t.toString());i&&!l&&(null===(n=X.current)||void 0===n||n.focus())};return i.createElement("span",{ref:t,style:P,className:S({view:n,size:c,disabled:w,state:ee,pin:"clear"===n?void 0:u,"has-clear":el,"has-start-content":er,"has-end-content":el||es},R),"data-qa":M},i.createElement("span",{className:S("content")},er&&i.createElement(N,{ref:Y,placement:"start",onClick:eb},J),et&&i.createElement("label",{ref:Q,style:{insetInlineStart:er?ed.width:void 0,maxWidth:`calc(50% - ${ed.width}px)`},className:S("label"),title:j,htmlFor:ec},`${j}`),i.createElement(y,Object.assign({},e,ex,{controlRef:U})),el&&i.createElement(b.C,{size:(0,b.X)(c),onClick:e=>{K("");let t=X.current;if(t){let n=Object.create(e);n.target=t,n.currentTarget=t,t.value="",$&&$(n)}},className:S("clear",{size:c})}),es&&i.createElement(N,{placement:"end",onClick:eb},A),ei&&i.createElement(h.J,{content:W},i.createElement("span",{"data-qa":p.eP},i.createElement(v.J,{data:l.Z,className:S("error-icon"),size:"s"===c?12:16})))),i.createElement(g.Z,{note:B,errorMessage:en?W:null,noteId:ef,errorMessageId:em}))})},77950:function(e,t,n){"use strict";n.d(t,{C:function(){return v},X:function(){return f}});var i=n(67294),l=n(58405),r=n(51525),s=n(1960),a=n(76657),o=n(53263),c=JSON.parse('{"label_clear-button":"Clear"}'),u=JSON.parse('{"label_clear-button":"Очистить"}'),d=(0,o.e)({en:c,ru:u},`${a.A7}clear-button`);n(98029);let m=(0,a.Ge)("clear-button"),f=e=>{switch(e){case"s":return"xs";case"m":return"s";case"l":return"m";case"xl":return"l";default:throw Error(`Unknown text input size "${e}"`)}},v=e=>{let{size:t,className:n,onClick:a}=e;return i.createElement(r.z,{size:t,className:m(null,n),onClick:a,extraProps:{onMouseDown:e=>{e.preventDefault()},"aria-label":d("label_clear-button")}},i.createElement(s.J,{data:l.Z,size:16}))}},14182:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(67294),l=n(76657),r=n(94088);n(7567);let s=(0,l.Ge)("outer-additional-content"),a=({errorMessage:e,note:t,noteId:n,errorMessageId:l})=>e||t?i.createElement("div",{className:s()},e&&i.createElement("div",{className:s("error"),id:l,"data-qa":r.fz},e),t&&i.createElement("div",{className:s("note"),id:n},t)):null},94088:function(e,t,n){"use strict";n.d(t,{II:function(){return a},O_:function(){return s},eP:function(){return l},fz:function(){return i},xp:function(){return r}});let i="control-error-message-qa",l="control-error-icon-qa",r=e=>"boolean"==typeof e?e?"on":"off":e,s=e=>"invalid"===e?"error":void 0,a=e=>{let t,n;let{error:i,errorMessage:l,errorPlacement:r,validationState:s}=e;return"string"==typeof i&&(t=i),l&&(t=l),("invalid"===s||i)&&(n="invalid"),{errorMessage:t,errorPlacement:r,validationState:n}}},1994:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var i=n(97582),l=n(67294),r=n(76657),s=n(98035);n(2745);let a=(0,r.Ge)("box"),o=l.forwardRef(function(e,t){var{as:n,children:r,qa:o,className:c,width:u,height:d,minWidth:m,minHeight:f,maxHeight:v,maxWidth:h,position:x,style:b,spacing:g,overflow:p}=e,j=(0,i._T)(e,["as","children","qa","className","width","height","minWidth","minHeight","maxHeight","maxWidth","position","style","spacing","overflow"]);let N=Object.assign({width:u,height:d,minWidth:m,minHeight:f,maxHeight:v,maxWidth:h,position:x},b);return l.createElement(n||"div",Object.assign({},j,{"data-qa":o,style:N,ref:t,className:a({overflow:p},g?(0,s.sp)(g,c):c)}),r)})},6292:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var i=n(97582),l=n(67294),r=n(76657),s=n(1994),a=n(62674),o=n(43957);n(58413);let c=(0,r.Ge)("flex"),u=l.forwardRef(function(e,t){let{as:n,direction:r,grow:u,basis:d,children:m,style:f,alignContent:v,alignItems:h,alignSelf:x,justifyContent:b,justifyItems:g,justifySelf:p,shrink:j,wrap:N,inline:w,gap:y,gapRow:S,className:C,space:E,centerContent:k}=e,I=(0,i._T)(e,["as","direction","grow","basis","children","style","alignContent","alignItems","alignSelf","justifyContent","justifyItems","justifySelf","shrink","wrap","inline","gap","gapRow","className","space","centerContent"]),{getClosestMediaProps:O,theme:{spaceBaseSize:_}}=(0,a.l)(),G=e=>"object"==typeof e&&null!==e?O(e):e,z=G(y),P=z?_*Number(z):void 0,R=G(S)||z,M=R?_*Number(R):void 0,T=G(E),Z=y||S||!T?void 0:(0,o.cA)(T);return l.createElement(s.x,Object.assign({as:n||"div",className:c({"center-content":k,inline:w,s:Z},C),ref:t,style:Object.assign({flexDirection:G(r),flexGrow:!0===u?1:u,flexWrap:!0===N?"wrap":N,flexBasis:d,flexShrink:j,columnGap:P,rowGap:M,alignContent:G(v),alignItems:G(h),alignSelf:G(x),justifyContent:G(b),justifyItems:G(g),justifySelf:G(p)},f)},I),E?l.Children.map(m,e=>e?l.createElement("div",{className:c("wr")},e):e):m)})},62674:function(e,t,n){"use strict";n.d(t,{l:function(){return s}});var i=n(67294),l=n(22191),r=n(43957);let s=()=>{let{activeMediaQuery:e,theme:t}=i.useContext(l.V),{isMediaActive:n,getClosestMediaProps:s}=i.useMemo(()=>({isMediaActive:(0,r.ur)(e),getClosestMediaProps:(0,r.GD)(e)}),[e]);return{theme:t,activeMediaQuery:e,isMediaActive:n,getClosestMediaProps:s}}},98035:function(e,t,n){"use strict";n.d(t,{W:function(){return s},sp:function(){return a}});var i=n(76657),l=n(43957);n(35925);let r=(0,i.Ge)("s"),s=(e,t)=>{let n=[];for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){let i=e[t];void 0!==i&&n.push(r(`${t}_${(0,l.cA)(i)}`))}return t&&n.push(t),n.join(" ")},a=s},43957:function(e,t,n){"use strict";n.d(t,{GD:function(){return a},cA:function(){return o},ur:function(){return r}});var i=n(41810);let l={s:0,m:1,l:2,xl:3,xxl:4,xxxl:5},r=e=>t=>e in l&&l[e]-l[t]>=0,s=["s","m","l","xl","xxl","xxxl"],a=e=>(t={})=>{if(!e)return;let n=e;for(;n;){if(t[n])return t[n];n=s[l[n]-1]}},o=e=>e in i.Q?i.Q[e]:String(e)},53263:function(e,t,n){"use strict";n.d(t,{e:function(){return a}});var i=n(98085),l=n(82894);let r=(0,l.iE)().lang,s=new i.m({lang:r,fallbackLang:r});function a(e,t){return Object.entries(e).forEach(([e,n])=>s.registerKeyset(e,t,n)),s.keyset(t)}(0,l.Pe)(e=>{s.setLang(e.lang)})},55112:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/design/[sectionId]/[articleId]",function(){return n(11207)}])},75312:function(e,t,n){"use strict";n.d(t,{l:function(){return h}});var i=n(85893),l=n(91586),r=n(56919),s=n(1960),a=n(6292),o=n(11530),c=n(5233),u=n(67294),d=n(9663),m=n(31489),f=n(65324);n(7005);let v=(0,m.Ge)("article-navigation"),h=e=>{let{prevSection:t,nextSection:n}=e,{t:m}=(0,c.$G)(),h=u.useCallback(()=>{let e=document.getElementById(d.P3);e&&e.scrollTo({top:0,behavior:"smooth"})},[]);return(0,i.jsxs)("div",{className:v(),children:[t&&(0,i.jsxs)(f.r,{href:t.url,className:v("button"),onClick:h,children:[(0,i.jsx)("div",{className:v("button-icon"),children:(0,i.jsx)(s.J,{data:l.Z,size:16})}),(0,i.jsxs)(a.k,{direction:"column",gap:"1",className:v("content"),children:[(0,i.jsx)(o.x,{variant:"body-short",color:"light-complementary",children:m("navigation_previous")}),(0,i.jsx)(o.x,{className:v("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:t.title})]})]}),n&&(0,i.jsxs)(f.r,{href:n.url,className:v("button",{reverse:!0}),onClick:h,children:[(0,i.jsx)("div",{className:v("button-icon"),children:(0,i.jsx)(s.J,{data:r.Z,size:16})}),(0,i.jsxs)(a.k,{direction:"column",gap:"1",className:v("content"),children:[(0,i.jsx)(o.x,{variant:"body-short",color:"light-complementary",children:m("navigation_next")}),(0,i.jsx)(o.x,{className:v("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:n.title})]})]})]})}},94458:function(e,t,n){"use strict";n.d(t,{_:function(){return E}});var i=n(85893),l=n(91911),r=n(60938),s=n(81507),a=n(1960),o=n(5233),c=n(67294),u=n(66736),d=n(43699),m=n(9663),f=n(31489),v=n(57006),h=n(11530);n(16594);let x=(0,f.Ge)("library-version");var b=e=>{let{id:t}=e,n=(0,f.t0)(t);return n?(0,i.jsx)(v.Z,{className:x(),theme:"warning",view:"outlined",children:(0,i.jsx)(h.x,{color:"warning",children:n})}):null},g=n(11197),p=n(34560),j=n(65324);n(47931);let N=(0,f.Ge)("navigation-layout-section-block"),w=e=>{var t,n;let{data:l,isOpen:r,setIsOpen:s,curSectionId:o,curSubSectionId:d,onClickOnLink:m}=e,f=null;return f=l.url&&(!l.subSections||(null===(t=l.subSections)||void 0===t?void 0:t.length)===0)?(0,i.jsx)(j.r,{href:l.url,className:N("header",{active:o===l.id&&!d}),children:(0,i.jsx)("div",{className:N("title"),children:l.title})}):(0,i.jsxs)(c.Fragment,{children:[(0,i.jsxs)("div",{className:N("header"),onClick:()=>{s(!r)},children:[(0,i.jsx)("div",{className:N("title"),children:l.title}),(0,i.jsx)("div",{className:N("library-version"),children:(0,i.jsx)(b,{id:l.id})}),(0,i.jsx)("div",{className:N("arrow",{open:r}),children:(0,i.jsx)(a.J,{data:u.Z,width:10,height:6})})]}),(0,i.jsxs)("div",{className:N("sub-sections",{open:r}),children:[l.url?(0,i.jsx)(j.r,{href:l.url,className:N("sub-section",{active:o===l.id&&void 0===d}),onClick:m,children:"Overview"},"__overview"):null,null===(n=l.subSections)||void 0===n?void 0:n.map(e=>!0===e.isComingSoon?(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:N("sub-section",{active:o===l.id&&d===e.id,disabled:!0===e.isComingSoon}),children:[(0,i.jsx)("span",{className:N("sub-section-text"),children:e.title}),(0,i.jsx)("span",{className:N("sub-section-icon"),children:(0,i.jsx)(a.J,{data:p.Z,width:34,height:14})})]})},e.id):(0,i.jsx)(j.r,{href:e.url,className:N("sub-section",{active:o===l.id&&d===e.id}),onClick:m,children:(0,i.jsx)("span",{className:N("sub-section-text"),children:e.title})},e.id))]})]}),(0,i.jsx)("div",{className:N(),children:f})};n(5744);let y=(0,f.Ge)("navigation-layout-navigation"),S=c.memo(e=>{let{sections:t,sectionId:n,subSectionId:l,searchPlaceholder:r,emptySearchPlaceholder:s,onClickOnLink:a}=e,[o,u]=c.useState(""),[d,m]=c.useState(()=>t.reduce((e,t)=>(e[t.id]=!0,e),{})),[f,v]=c.useState(t);c.useEffect(()=>{v(t)},[t]);let h=c.useCallback(e=>{if(u(e),e){let n={...d},i=e.toLowerCase(),l=i?t.reduce((e,t)=>{var l,r;if(t.title.toLowerCase().includes(i)){n[t.id]=!0;let r=null===(l=t.subSections)||void 0===l?void 0:l.filter(e=>e.title.toLowerCase().includes(i));e.push({...t,subSections:r})}else{let l=null===(r=t.subSections)||void 0===r?void 0:r.filter(e=>e.title.toLowerCase().includes(i));l&&l.length>0&&(n[t.id]=!0,e.push({...t,subSections:l}))}return e},[]):t;m(n),v(l)}else v(t)},[d,t]);return(0,i.jsxs)("div",{className:y(),children:[(0,i.jsx)(g.o,{value:o,onUpdate:h,size:"xl",placeholder:r,hasClear:!0}),(0,i.jsx)("div",{className:y("items"),children:f.length>0?f.map(e=>(0,i.jsx)(w,{data:e,isOpen:d[e.id],setIsOpen:t=>{m({...d,[e.id]:t})},curSectionId:n,curSubSectionId:l,onClickOnLink:a},e.id)):(0,i.jsx)("div",{className:y("empty"),children:s})})]})});S.displayName="Navigation",n(70989);let C=(0,f.Ge)("navigation-layout"),E=e=>{var t;let{sections:n,sectionId:f,subSectionId:v,mobileTitle:h,searchPlaceholder:x,emptySearchPlaceholder:g,children:p}=e,{t:j}=(0,o.$G)(),[N,w]=c.useState(!1),y=n.find(e=>e.id===f),E=null==y?void 0:null===(t=y.subSections)||void 0===t?void 0:t.find(e=>e.id===v),k=c.useCallback(()=>{w(!1);let e=document.getElementById(m.P3);e&&e.scrollTo({top:0,behavior:"smooth"})},[]);return y?(0,i.jsx)("div",{className:C(),children:(0,i.jsx)(l.r,{className:C("layout-grid"),children:(0,i.jsxs)(r.X,{children:[(0,i.jsxs)(s.J,{sizes:{all:12,lg:3},children:[(0,i.jsxs)("div",{tabIndex:0,role:"button",className:C("mobile-navigation-control"),onClick:()=>{w(!0)},children:[(0,i.jsxs)("div",{className:C("mobile-navigation-control-label"),children:[(0,i.jsx)("span",{className:C("mobile-navigation-control-section"),children:y.title}),(0,i.jsx)(b,{id:y.id}),E?(0,i.jsxs)("span",{className:C("mobile-navigation-control-sub-section"),children:[" ","• ",E.title]}):null]}),(0,i.jsx)("div",{className:C("mobile-navigation-control-arrow"),children:(0,i.jsx)(a.J,{data:u.Z,width:10,height:6})})]}),(0,i.jsxs)("div",{className:C("navigation",{"mobile-open":N}),children:[(0,i.jsxs)("div",{className:C("mobile-navigation-header"),children:[(0,i.jsx)("div",{className:C("mobile-navigation-header-title"),children:h}),(0,i.jsx)("div",{tabIndex:0,role:"button",className:C("mobile-navigation-header-close"),onClick:()=>{w(!1)},children:(0,i.jsx)(a.J,{data:d.Z,width:16})})]}),(0,i.jsx)(S,{sections:n,sectionId:f,subSectionId:v,searchPlaceholder:x,emptySearchPlaceholder:null!=g?g:j("emptySearchPlaceholder"),onClickOnLink:k})]})]}),(0,i.jsx)(s.J,{sizes:{all:12,lg:9},children:(0,i.jsx)("div",{className:C("content"),children:p})})]})})}):null}},11207:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticlePage:function(){return x},__N_SSG:function(){return b},default:function(){return g}});var i=n(85893),l=n(67294),r=n(31489),s=n(75312),a=n(54663);n(54895);let o=(0,r.Ge)("design-article"),c=e=>{let{article:t,sectionId:n,sections:r}=e,c=l.useMemo(()=>r.find(e=>e.id===n),[n,r]),u=l.useMemo(()=>c&&c.subSections?c.subSections.findIndex(e=>e.id===t.id):null,[c,t.id]),d=l.useMemo(()=>{if(!c||!c.subSections||!u&&0!==u)return null;let e=u+1;if(e>=c.subSections.length)return null;let t=c.subSections[e];return t.isComingSoon?null:t},[u,c]),m=l.useMemo(()=>{if(!c||!c.subSections||!u&&0!==u)return null;let e=u-1;if(e<0)return null;let t=c.subSections[e];return t.isComingSoon?null:t},[u,c]);return(0,i.jsxs)("div",{className:o(),children:[(0,i.jsx)("h1",{className:o("title"),children:t.title}),(0,i.jsx)(a.W,{text:t.content},"".concat(n,"-").concat(t.id,"-article")),(0,i.jsx)("div",{className:o("navigation"),children:(0,i.jsx)(s.l,{prevSection:m,nextSection:d})})]})};var u=n(5233),d=n(94458);let m=e=>{let{sectionId:t,articleId:n,children:l,sections:r}=e,{t:s}=(0,u.$G)();return(0,i.jsx)(d._,{sections:r,mobileTitle:s("design-article:title"),searchPlaceholder:s("design-article:searchPlaceholder"),sectionId:t,subSectionId:n,children:l})};var f=n(7825),v=n(7532),h=n(70664);n(75401);let x=e=>{let{sectionId:t,articleId:n}=e;(0,h.A)();let r=v.N.find(e=>e.id===t),s=null==r?void 0:r.articles.find(e=>e.id===n);if(!r||!s)return null;let a=l.useMemo(()=>v.N.map(e=>{let{id:t,title:n,articles:i}=e;return{id:t,title:n,subSections:i.map(e=>({id:e.id,title:e.title,url:"/design/".concat(t,"/").concat(e.id)}))}}),[]);return(0,i.jsx)(f.A,{title:"".concat(r.title," – ").concat(s.title),children:(0,i.jsx)(m,{sections:a,sectionId:t,articleId:n,children:(0,i.jsx)(c,{article:s,sectionId:t,sections:a})})})};var b=!0,g=x},88557:function(){},32786:function(){},23321:function(){},95738:function(){},98029:function(){},7567:function(){},2745:function(){},58413:function(){},35925:function(){},7005:function(){},54895:function(){},16594:function(){},5744:function(){},70989:function(){},47931:function(){}},function(e){e.O(0,[3662,630,9772,5880,2083,6629,5303,5237,3740,2315,1287,6383,3849,8931,4294,1355,5706,2725,5527,9031,8936,2140,7012,8497,2538,9497,4992,1893,7532,1102,2888,9774,179],function(){return e(e.s=55112)}),_N_E=e.O()}]);