(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6613],{53135:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/[libId]/[componentId]",function(){return i(3334)}])},75312:function(e,n,i){"use strict";i.d(n,{l:function(){return x}});var t=i(85893),s=i(91586),l=i(56919),a=i(1960),o=i(6292),r=i(11530),c=i(5233),d=i(67294),u=i(9663),h=i(31489),m=i(65324);i(7005);let v=(0,h.Ge)("article-navigation"),x=e=>{let{prevSection:n,nextSection:i}=e,{t:h}=(0,c.$G)(),x=d.useCallback(()=>{let e=document.getElementById(u.P3);e&&e.scrollTo({top:0,behavior:"smooth"})},[]);return(0,t.jsxs)("div",{className:v(),children:[n&&(0,t.jsxs)(m.r,{href:n.url,className:v("button"),onClick:x,children:[(0,t.jsx)("div",{className:v("button-icon"),children:(0,t.jsx)(a.J,{data:s.Z,size:16})}),(0,t.jsxs)(o.k,{direction:"column",gap:"1",className:v("content"),children:[(0,t.jsx)(r.x,{variant:"body-short",color:"light-complementary",children:h("navigation_previous")}),(0,t.jsx)(r.x,{className:v("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:n.title})]})]}),i&&(0,t.jsxs)(m.r,{href:i.url,className:v("button",{reverse:!0}),onClick:x,children:[(0,t.jsx)("div",{className:v("button-icon"),children:(0,t.jsx)(a.J,{data:l.Z,size:16})}),(0,t.jsxs)(o.k,{direction:"column",gap:"1",className:v("content"),children:[(0,t.jsx)(r.x,{variant:"body-short",color:"light-complementary",children:h("navigation_next")}),(0,t.jsx)(r.x,{className:v("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:i.title})]})]})]})}},94458:function(e,n,i){"use strict";i.d(n,{_:function(){return y}});var t=i(85893),s=i(1960),l=i(5233),a=i(67294),o=i(66736),r=i(43699),c=i(9663),d=i(31489),u=i(59804),h=i(57006),m=i(11530);i(16594);let v=(0,d.Ge)("library-version");var x=e=>{let{id:n}=e,i=(0,d.t0)(n);return i?(0,t.jsx)(h.Z,{className:v(),theme:"warning",view:"outlined",children:(0,t.jsx)(m.x,{color:"warning",children:i})}):null},j=i(85687),p=i(31080),b=i(11197),g=i(34560),f=i(65324);i(47931);let N=(0,d.Ge)("navigation-layout-section-block"),w=e=>{var n,i;let{data:l,isOpen:a,setIsOpen:r,curSectionId:c,curSubSectionId:d,onClickOnLink:u}=e;return(0,t.jsx)("div",{className:N(),children:!l.url||(null===(n=l.subSections)||void 0===n?void 0:n.length)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:N("header",{open:a}),onClick:()=>{r(!a)},children:[(0,t.jsx)("div",{className:N("title"),children:l.title}),(0,t.jsx)("div",{className:N("library-version"),children:(0,t.jsx)(x,{id:l.id})}),(0,t.jsx)("div",{className:N("arrow",{open:a}),children:(0,t.jsx)(s.J,{data:o.Z,width:10,height:6})})]}),(0,t.jsxs)("div",{className:N("sub-sections",{open:a}),children:[l.url?(0,t.jsx)(f.r,{href:l.url,className:N("sub-section",{active:c===l.id&&void 0===d}),onClick:u,children:"Overview"},"__overview"):null,null===(i=l.subSections)||void 0===i?void 0:i.map(e=>!0===e.isComingSoon?(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:N("sub-section",{active:c===l.id&&d===e.id,disabled:!0===e.isComingSoon}),children:[(0,t.jsx)("span",{className:N("sub-section-text"),children:e.title}),(0,t.jsx)("span",{className:N("sub-section-icon"),children:(0,t.jsx)(s.J,{data:g.Z,width:34,height:14})})]})},e.id):(0,t.jsx)(f.r,{href:e.url,className:N("sub-section",{active:c===l.id&&d===e.id}),onClick:u,children:(0,t.jsx)("span",{className:N("sub-section-text"),children:e.title})},e.id))]})]}):l.url?(0,t.jsx)(f.r,{href:l.url,className:N("header",{active:c===l.id&&!d}),children:(0,t.jsx)("div",{className:N("title"),children:l.title})}):null})};i(5744);let S=(0,d.Ge)("navigation-layout-navigation"),k=a.memo(e=>{let{sections:n,sectionId:i,subSectionId:s,searchPlaceholder:l,emptySearchPlaceholder:o,onClickOnLink:r}=e,[c,d]=a.useState(""),[u,h]=a.useState(()=>n.reduce((e,n)=>(e[n.id]=!0,e),{})),m=(0,j.Z)()<p.j.lg,[v,x]=a.useState(n);a.useEffect(()=>{x(n)},[n]);let g=a.useCallback(e=>{if(d(e),e){let i={...u},t=e.toLowerCase(),s=t?n.reduce((e,n)=>{var s,l;if(n.title.toLowerCase().includes(t)){i[n.id]=!0;let l=null===(s=n.subSections)||void 0===s?void 0:s.filter(e=>e.title.toLowerCase().includes(t));e.push({...n,subSections:l})}else{let s=null===(l=n.subSections)||void 0===l?void 0:l.filter(e=>e.title.toLowerCase().includes(t));s&&s.length>0&&(i[n.id]=!0,e.push({...n,subSections:s}))}return e},[]):n;h(i),x(s)}else x(n)},[u,n]);return(0,t.jsxs)("div",{className:S(),children:[(0,t.jsx)("div",{className:S("search-input"),children:(0,t.jsx)(b.o,{value:c,onUpdate:g,size:m?"xl":"l",placeholder:l,hasClear:!0})}),(0,t.jsx)("div",{className:S("items"),children:v.length>0?v.map(e=>(0,t.jsx)(w,{data:e,isOpen:u[e.id],setIsOpen:n=>{h({...u,[e.id]:n})},curSectionId:i,curSubSectionId:s,onClickOnLink:r},e.id)):(0,t.jsx)("div",{className:S("empty"),children:o})})]})});k.displayName="Navigation",i(70989);let C=(0,d.Ge)("navigation-layout"),y=e=>{var n;let{sections:i,sectionId:d,subSectionId:h,mobileTitle:m,searchPlaceholder:v,emptySearchPlaceholder:j,children:p}=e,{t:b}=(0,l.$G)(),[g,f]=a.useState(!1),N=i.find(e=>e.id===d),w=null==N?void 0:null===(n=N.subSections)||void 0===n?void 0:n.find(e=>e.id===h),S=a.useCallback(()=>{f(!1);let e=document.getElementById(c.P3);e&&e.scrollTo({top:0,behavior:"smooth"})},[]);return N?(0,t.jsxs)("div",{className:C(),children:[(0,t.jsxs)("div",{className:C("navigation-wrap"),children:[(0,t.jsxs)("div",{tabIndex:0,role:"button",className:C("mobile-navigation-control"),onClick:()=>{f(!0)},children:[(0,t.jsxs)("div",{className:C("mobile-navigation-control-label"),children:[(0,t.jsx)("span",{className:C("mobile-navigation-control-section"),children:N.title}),(0,t.jsx)(x,{id:N.id}),w?(0,t.jsxs)("span",{className:C("mobile-navigation-control-sub-section"),children:[" ","• ",w.title]}):null]}),(0,t.jsx)("div",{className:C("mobile-navigation-control-arrow"),children:(0,t.jsx)(s.J,{data:o.Z,width:10,height:6})})]}),(0,t.jsxs)("div",{className:C("navigation",{"mobile-open":g}),children:[(0,t.jsxs)("div",{className:C("mobile-navigation-header"),children:[(0,t.jsx)("div",{className:C("mobile-navigation-header-title"),children:m}),(0,t.jsx)("div",{tabIndex:0,role:"button",className:C("mobile-navigation-header-close"),onClick:()=>{f(!1)},children:(0,t.jsx)(s.J,{data:r.Z,width:16})})]}),(0,t.jsx)(k,{sections:i,sectionId:d,subSectionId:h,searchPlaceholder:v,emptySearchPlaceholder:null!=j?j:b("emptySearchPlaceholder"),onClickOnLink:S})]})]}),(0,t.jsx)("div",{className:C("content-wrap"),id:c.P3,children:(0,t.jsxs)("div",{className:C("content"),children:[p,(0,t.jsx)(u.$,{containerClass:C("footer")})]})})]}):null}},3334:function(e,n,i){"use strict";i.r(n),i.d(n,{ComponentPage:function(){return K},__N_SSG:function(){return Q},default:function(){return Y}});var t,s,l,a,o=i(85893),r=i(85687),c=i(31080),d=i(67294),u=i(51525),h=i(1960),m=i(69046),v=i(5233),x=i(11163);function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var p=e=>d.createElement("svg",j({width:16,height:18,viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=d.createElement("path",{d:"M5.333 17A2.668 2.668 0 0 0 8 14.334v-2.667H5.333a2.668 2.668 0 0 0 0 5.333zM2.667 9a2.668 2.668 0 0 1 2.666-2.666H8v5.333H5.333a2.668 2.668 0 0 1-2.666-2.666zM2.667 3.667A2.668 2.668 0 0 1 5.333 1H8v5.333H5.333a2.668 2.668 0 0 1-2.666-2.666zM8 1h2.666a2.668 2.668 0 0 1 0 5.333H8V1z",stroke:"#c9d1d9"})),l||(l=d.createElement("path",{d:"M13.333 9A2.668 2.668 0 0 1 8 9a2.668 2.668 0 0 1 5.333 0z",stroke:"#c9d1d9"}))),b=i(17504),g=i(54663),f=i(41647),N=i(31489),w=i(75312),S=i(72590),k=i(16689);i(75533);let C=(0,N.Ge)("header-maintainer-list"),y=e=>{let{maintainers:n}=e,{t:i}=(0,v.$G)(),t=n.slice(0,3);return(0,o.jsxs)("div",{className:C(),children:[(0,o.jsx)("span",{className:C("title"),children:i("component:maintainers",{count:t.length})}),t.map(e=>{let{login:n,avatarUrl:i,url:s}=e;return(0,o.jsxs)(S.r,{className:C("maintainer"),href:s,target:"_blank",title:"@".concat(n),children:[(0,o.jsx)(k.q,{className:C("avatar"),size:"m",imgUrl:i}),1===t.length&&(0,o.jsx)("div",{className:C("name"),children:t[0].login})]},n)})]})};var _=i(15098),I=i(5334),z=i(67744),E=i(14248),U=i(20008),O=i(11530),P=i(24875),G=i(65766),Z=i(23828),J=i(11197),L=i(53319),M=i(83483),T=i(65099),X=i(98271);i(92908);let $=(0,N.Ge)("sandbox-block"),H=e=>{var n;let{libId:i,componentId:t,sandboxConfig:s,isSupportRTL:l}=e,{t:a}=(0,v.$G)("component"),[r,c]=d.useState({}),[u,m]=d.useState(!1),[x,j]=d.useState(!1),[p,b]=d.useState("dark"),[g,f]=d.useState("ltr"),N=d.useRef(),w=d.useCallback(()=>m(!0),[]);d.useEffect(()=>{var e;return null===(e=N.current)||void 0===e||e.addEventListener("load",w),()=>{var e;null===(e=N.current)||void 0===e||e.removeEventListener("load",w)}},[N.current]),d.useEffect(()=>{if(s){let e={};Object.keys(s).forEach(n=>{void 0!==s[n].defaultValue&&(e[n]=s[n].defaultValue)}),c(e)}},[s]),d.useEffect(()=>{if(u){var e,n;null===(n=N.current)||void 0===n||null===(e=n.contentWindow)||void 0===e||e.postMessage({pageProps:{theme:p,direction:g},componentProps:r},window.origin)}},[u,r,p,g]);let S="rtl"===g,k=S?_.Z:I.Z;return(0,o.jsx)("div",{className:$({"full-screen":x}),children:(0,o.jsxs)(U.X,{space:"0",children:[(0,o.jsxs)(L.J,{s:"12",l:"8",m:"8",className:$("wrapper-iframe"),children:[(0,o.jsx)(M.y,{size:"s"}),(0,o.jsx)("iframe",{ref:N,src:window&&"".concat(null===(n=window)||void 0===n?void 0:n.location.origin,"/sandbox/").concat(i,"/").concat(t),frameBorder:0,className:$("iframe")})]}),(0,o.jsxs)(L.J,{s:"12",l:"4",m:"4",children:[(0,o.jsxs)("div",{className:$("top-actions"),children:[(0,o.jsxs)("div",{className:$("top-actions-wrapper"),children:[(0,o.jsx)(T.u,{content:a("theme"),children:(0,o.jsx)("div",{tabIndex:0,role:"button",className:$("control-icon"),onClick:()=>{b("dark"===p?"light":"dark")},children:(0,o.jsx)(h.J,{data:X.Z,size:18})})}),l&&(0,o.jsx)(T.u,{content:a(S?"rtlOff":"rtlOn"),children:(0,o.jsx)("div",{tabIndex:0,role:"button",className:$("control-icon"),onClick:()=>{f(S?"ltr":"rtl")},children:(0,o.jsx)(h.J,{className:$("icon"),data:k,size:18})})}),!l&&(0,o.jsx)(T.u,{content:a("rtlNotSupported"),children:(0,o.jsx)("div",{tabIndex:0,role:"button",className:$("control-icon-disabled"),children:(0,o.jsx)(h.J,{data:k,size:18})})})]}),(0,o.jsx)("div",{tabIndex:0,role:"button",className:$("control-icon"),onClick:()=>{j(!x)},children:x?(0,o.jsx)(z.Z,{height:18}):(0,o.jsx)(E.Z,{height:18})})]}),(0,o.jsx)("div",{className:$("actions"),children:s?Object.keys(s).map(e=>{let n=s[e];switch(n.type){case"select":return(0,o.jsx)(U.X,{space:"0",children:(0,o.jsxs)("div",{className:$("prop"),children:[(0,o.jsx)(O.x,{className:$("prop-title"),children:e}),(0,o.jsx)(P.P,{value:[r[e]],placeholder:e,options:n.values,width:"max",disabled:!u,onUpdate:n=>{let[i]=n;return c({...r,[e]:i})}},e)]})},e);case"radioButton":return(0,o.jsx)(U.X,{space:"0",children:(0,o.jsxs)("div",{className:$("prop"),children:[(0,o.jsx)(O.x,{className:$("prop-title"),children:e}),(0,o.jsx)(G.E,{value:r[e],options:n.values,width:"max",disabled:!u,onUpdate:n=>c({...r,[e]:n})},e)]})},e);case"switch":return(0,o.jsx)(U.X,{space:"0",children:(0,o.jsx)("div",{className:$("prop"),children:(0,o.jsxs)("div",{className:$("prop-switch"),children:[(0,o.jsx)(O.x,{variant:"body-1",children:e}),(0,o.jsx)(Z.r,{title:e,size:"m",disabled:!u,checked:r[e],onUpdate:n=>{c({...r,[e]:n})}},e)]})})},e);case"input":return(0,o.jsx)(U.X,{space:"0",children:(0,o.jsxs)("div",{className:$("prop"),children:[(0,o.jsx)(O.x,{className:$("prop-title"),children:e}),(0,o.jsx)(J.o,{placeholder:e,disabled:!u,value:r[e],onUpdate:n=>{c({...r,[e]:n})}})]})},e);default:return[]}}):[]})]})]})})};i(53419);let R=(0,N.Ge)("component");(t=a||(a={})).Overview="overview",t.Design="design";let A=[{id:"overview",title:"Overview"},{id:"design",title:"Design"}],B=e=>{var n,i,t,s;let{libId:l,component:a,readmeContent:r,sections:c,maintainers:j}=e,{t:S}=(0,v.$G)(),{isClient:k}=d.useContext(f.g),C=(0,x.useRouter)(),{tabId:_}=C.query,[I,z]=d.useState("design"===_?"design":"overview"),E=d.useMemo(()=>c.find(e=>e.id===l),[l,c]),U=d.useMemo(()=>E&&E.subSections?E.subSections.findIndex(e=>e.id===a.id):null,[E,a.id]),O=d.useMemo(()=>{if(!E||!E.subSections||!U&&0!==U)return null;let e=U+1;if(e>=E.subSections.length)return null;let n=E.subSections[e];return n.isComingSoon?null:n},[U,E]),P=d.useMemo(()=>{if(!E||!E.subSections||!U&&0!==U)return null;let e=U-1;if(e<0)return null;let n=E.subSections[e];return n.isComingSoon?null:n},[U,E]);d.useEffect(()=>{z("design"===_?"design":"overview")},[_]);let G=d.useCallback(e=>{var n;if(!(null===(n=a.content)||void 0===n?void 0:n.readmeUrl))return e;let i=new URL(a.content.readmeUrl),t=new URL(e,a.content.readmeUrl);if(t.origin!==i.origin)return e;let s=(0,N.p6)(t.toString());return null!=s?s:e},[null===(n=a.content)||void 0===n?void 0:n.readmeUrl]);return(0,o.jsxs)("div",{className:R(),children:[(0,o.jsxs)("div",{className:R("header"),children:[(0,o.jsx)("h1",{className:R("title"),children:a.title}),j.length>0||a.githubUrl||a.figmaUrl?(0,o.jsxs)("div",{className:R("buttons"),children:[j.length>0&&(0,o.jsx)(y,{maintainers:j}),a.githubUrl?(0,o.jsxs)(u.z,{className:R("button"),view:"outlined",size:"l",href:a.githubUrl,target:"_blank",children:[(0,o.jsx)(h.J,{data:b.Z,size:16}),(0,o.jsx)("span",{children:S("actions_github")})]},"github"):null,a.figmaUrl?(0,o.jsxs)(u.z,{className:R("button"),view:"outlined",size:"l",href:a.figmaUrl,target:"_blank",children:[(0,o.jsx)(h.J,{data:p,size:16}),(0,o.jsx)("span",{children:S("component:actions_openInFigma")})]},"figma"):null]}):null]}),(null===(i=a.content)||void 0===i?void 0:i.design)?(0,o.jsx)("div",{className:R("tabs"),children:(0,o.jsx)(m.m,{size:"xl",items:A,activeTab:I,onSelectTab:e=>{C.replace({pathname:C.asPath.split("?")[0],query:{...C.query,tabId:"design"===e?"design":void 0}})}})}):null,(0,o.jsx)("div",{className:R("content"),children:"design"===_&&(null===(t=a.content)||void 0===t?void 0:t.design)?(0,o.jsx)(d.Fragment,{children:k&&(0,o.jsx)(g.W,{text:null===(s=a.content)||void 0===s?void 0:s.design},"".concat(l,"-").concat(a.id,"-design"))}):(0,o.jsxs)(o.Fragment,{children:[k&&a.sandbox?(0,o.jsx)(H,{libId:l,componentId:a.id,sandboxConfig:a.sandbox.props,isSupportRTL:a.isSupportRTL},"".concat(l,"-").concat(a.id,"-sandbox")):null,k&&(0,o.jsx)(g.W,{text:r,rewriteLinks:G,withComponents:!0},"".concat(l,"-").concat(a.id,"-overview"))]})}),(0,o.jsx)("div",{className:R("navigation"),children:(0,o.jsx)(w.l,{prevSection:P,nextSection:O})})]})};var F=i(94458);let q=e=>{let{libId:n,componentId:i,children:t,sections:s}=e,{t:l}=(0,v.$G)();return(0,o.jsx)(F._,{sections:s,mobileTitle:l("component:title"),searchPlaceholder:l("component:searchPlaceholder"),sectionId:n,subSectionId:i,children:t})};var V=i(85812),W=i(80045),D=i(70664);i(75401);let K=e=>{let{libId:n,componentId:i,readmeContent:t}=e;(0,D.A)();let s=W.x.find(e=>e.id===n),l=null==s?void 0:s.components.find(e=>e.id===i),a=(0,r.Z)()<c.j.lg;if(!s||!l)return null;let u=(0,N.fe)((0,N.MM)(n),"/src/components/".concat(l.title)),h=d.useMemo(()=>W.x.map(e=>{let{id:n,title:i,components:t}=e;return{id:n,title:i,subSections:t.map(e=>({id:e.id,title:e.title,url:!0===e.isComingSoon?"#":"/components/".concat(n,"/").concat(e.id),isComingSoon:e.isComingSoon}))}}),[]);return(0,o.jsx)(V.A,{title:"".concat(s.title," – ").concat(l.title),hideFooter:!0,noScroll:!a,children:(0,o.jsx)(q,{libId:n,componentId:i,sections:h,children:(0,o.jsx)(B,{libId:n,component:l,readmeContent:t,sections:h,maintainers:u})})})};var Q=!0,Y=K},7005:function(){},53419:function(){},75533:function(){},16594:function(){},5744:function(){},70989:function(){},47931:function(){},92908:function(){}},function(e){e.O(0,[3662,630,9772,5880,2083,6629,5303,5237,3740,2315,1287,6383,3849,8931,4294,2725,1355,3108,5527,9031,8936,9609,1253,7012,8481,6712,8539,4244,2863,3041,1893,3585,2888,9774,179],function(){return e(e.s=53135)}),_N_E=e.O()}]);