(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6613],{41512:function(e,n,t){"use strict";var i=t(67294);n.Z=e=>i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),i.createElement("g",{clipPath:"url(#a)"},i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.25 6.993a.75.75 0 0 0 0-1.5H10.5V.75a.75.75 0 1 0-1.5 0v5.493c0 .414.336.75.75.75h5.5ZM.75 9.007a.75.75 0 1 0 0 1.5H5.5v4.743a.75.75 0 0 0 1.5 0V9.757a.75.75 0 0 0-.75-.75H.75Z",clipRule:"evenodd"})),i.createElement("defs",null,i.createElement("clipPath",{id:"a"},i.createElement("path",{fill:"currentColor",d:"M0 0h16v16H0z"}))))},28275:function(e,n,t){"use strict";var i=t(67294);n.Z=e=>i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.754 2.004a.75.75 0 0 0 0 1.5h4.75v4.742a.75.75 0 0 0 1.5 0V2.754a.75.75 0 0 0-.75-.75h-5.5Zm.492 11.992a.75.75 0 0 0 0-1.5h-4.75V7.754a.75.75 0 0 0-1.5 0v5.492a.75.75 0 0 0 .75.75h5.5Z",clipRule:"evenodd"}))},53135:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/[libId]/[componentId]",function(){return t(89438)}])},43891:function(e,n,t){"use strict";t.d(n,{l:function(){return m}});var i=t(85893),s=t(47674),o=t(67672),r=t(43671),c=t(16468),l=t(48323),a=t(41664),d=t.n(a),u=t(67294),h=t(42660),v=t(24257),f=(t(90113),(0,v.Ge)("article-navigation")),m=function(e){var n=e.prevSection,t=e.nextSection,a=(0,u.useCallback)((function(){var e=document.getElementById(h.P3);e&&e.scrollTo({top:0,behavior:"smooth"})}),[]);return(0,i.jsxs)("div",{className:f(),children:[n&&(0,i.jsx)(d(),{href:n.url,children:(0,i.jsxs)("a",{className:f("button"),onClick:a,children:[(0,i.jsx)("div",{className:f("button-icon"),children:(0,i.jsx)(r.J,{data:s.Z,size:16})}),(0,i.jsxs)(c.k,{direction:"column",gap:"1",className:f("content"),children:[(0,i.jsx)(l.x,{variant:"body-short",color:"light-complementary",children:"Previous"}),(0,i.jsx)(l.x,{className:f("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:n.title})]})]})}),t&&(0,i.jsx)(d(),{href:t.url,children:(0,i.jsxs)("a",{className:f("button",{reverse:!0}),onClick:a,children:[(0,i.jsx)("div",{className:f("button-icon"),children:(0,i.jsx)(r.J,{data:o.Z,size:16})}),(0,i.jsxs)(c.k,{direction:"column",gap:"1",className:f("content"),children:[(0,i.jsx)(l.x,{variant:"body-short",color:"light-complementary",children:"Next"}),(0,i.jsx)(l.x,{className:f("content-title"),ellipsis:!0,variant:"body-2",color:"primary",children:t.title})]})]})})]})}},97409:function(e,n,t){"use strict";t.d(n,{_:function(){return I}});var i=t(828),s=t(85893),o=t(63857),r=t(31808),c=t(8362),l=t(43671),a=t(67294),d=t(46346),u=t(67695),h=t(42660),v=t(24257),f=t(14924),m=t(26042),x=t(69396),p=t(23825),j=t(41664),b=t.n(j),g=t(53511),w=(t(4313),(0,v.Ge)("navigation-layout-section-block")),N=function(e){var n,t,i=e.data,o=e.isOpen,r=e.setIsOpen,c=e.curSectionId,u=e.curSubSectionId,h=e.onClickOnLink,v=null;!i.url||i.subSections&&0!==(null===(n=i.subSections)||void 0===n?void 0:n.length)?v=(0,s.jsxs)(a.Fragment,{children:[(0,s.jsxs)("div",{className:w("header"),onClick:function(){r(!o)},children:[(0,s.jsx)("div",{className:w("title"),children:i.title}),(0,s.jsx)("div",{className:w("arrow",{open:o}),children:(0,s.jsx)(l.J,{data:d.Z,width:10,height:6})})]}),(0,s.jsxs)("div",{className:w("sub-sections",{open:o}),children:[i.url?(0,s.jsx)(b(),{href:i.url,children:(0,s.jsx)("a",{className:w("sub-section",{active:c===i.id&&void 0===u}),onClick:h,children:"Overview"})},"__overview"):null,null===(t=i.subSections)||void 0===t?void 0:t.map((function(e){return!0===e.isComingSoon?(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:w("sub-section",{active:c===i.id&&u===e.id,disabled:!0===e.isComingSoon}),children:[(0,s.jsx)("span",{className:w("sub-section-text"),children:e.title}),(0,s.jsx)("span",{className:w("sub-section-icon"),children:(0,s.jsx)(l.J,{data:g.Z,width:34,height:14})})]})},e.id):(0,s.jsx)(b(),{href:e.url,children:(0,s.jsx)("a",{className:w("sub-section",{active:c===i.id&&u===e.id}),onClick:h,children:(0,s.jsx)("span",{className:w("sub-section-text"),children:e.title})})},e.id)}))]})]}):v=(0,s.jsx)(b(),{href:i.url,children:(0,s.jsx)("a",{className:w("header",{active:c===i.id&&!u}),children:(0,s.jsx)("div",{className:w("title"),children:i.title})})});return(0,s.jsx)("div",{className:w(),children:v})},S=(t(73401),(0,v.Ge)("navigation-layout-navigation")),C=(0,a.memo)((function(e){var n=e.sections,t=e.sectionId,o=e.subSectionId,r=e.searchPlaceholder,c=e.emptySearchPlaceholder,l=e.onClickOnLink,d=(0,i.Z)(a.useState(""),2),u=d[0],h=d[1],v=(0,i.Z)(a.useState((function(){return n.reduce((function(e,n){return e[n.id]=!0,e}),{})})),2),j=v[0],b=v[1],g=(0,i.Z)(a.useState(n),2),w=g[0],C=g[1];a.useEffect((function(){C(n)}),[n]);var Z=a.useCallback((function(e){if(h(e),e){var t=(0,m.Z)({},j),i=e.toLowerCase(),s=i?n.reduce((function(e,n){if(n.title.toLowerCase().includes(i)){var s;t[n.id]=!0;var o=null===(s=n.subSections)||void 0===s?void 0:s.filter((function(e){return e.title.toLowerCase().includes(i)}));e.push((0,x.Z)((0,m.Z)({},n),{subSections:o}))}else{var r,c=null===(r=n.subSections)||void 0===r?void 0:r.filter((function(e){return e.title.toLowerCase().includes(i)}));c&&c.length>0&&(t[n.id]=!0,e.push((0,x.Z)((0,m.Z)({},n),{subSections:c})))}return e}),[]):n;b(t),C(s)}else C(n)}),[j,n]);return(0,s.jsxs)("div",{className:S(),children:[(0,s.jsx)(p.o,{value:u,onUpdate:Z,size:"xl",placeholder:r,hasClear:!0}),(0,s.jsx)("div",{className:S("items"),children:w.length>0?w.map((function(e){return(0,s.jsx)(N,{data:e,isOpen:j[e.id],setIsOpen:function(n){b((0,x.Z)((0,m.Z)({},j),(0,f.Z)({},e.id,n)))},curSectionId:t,curSubSectionId:o,onClickOnLink:l},e.id)})):(0,s.jsx)("div",{className:S("empty"),children:c})})]})}));C.displayName="Navigation";t(83209);var Z=(0,v.Ge)("navigation-layout"),I=function(e){var n,t=e.sections,v=e.sectionId,f=e.subSectionId,m=e.mobileTitle,x=e.searchPlaceholder,p=e.emptySearchPlaceholder,j=void 0===p?"Nothing found":p,b=e.children,g=(0,i.Z)(a.useState(!1),2),w=g[0],N=g[1],S=t.find((function(e){return e.id===v})),I=null===S||void 0===S||null===(n=S.subSections)||void 0===n?void 0:n.find((function(e){return e.id===f})),k=a.useCallback((function(){N(!1);var e=document.getElementById(h.P3);e&&e.scrollTo({top:0,behavior:"smooth"})}),[]);return S?(0,s.jsx)("div",{className:Z(),children:(0,s.jsx)(o.r,{className:Z("layout-grid"),children:(0,s.jsxs)(r.X,{children:[(0,s.jsxs)(c.J,{sizes:{all:12,lg:3},children:[(0,s.jsxs)("div",{tabIndex:0,role:"button",className:Z("mobile-navigation-control"),onClick:function(){N(!0)},children:[(0,s.jsxs)("div",{className:Z("mobile-navigation-control-label"),children:[(0,s.jsx)("span",{className:Z("mobile-navigation-control-section"),children:S.title}),I?(0,s.jsxs)("span",{className:Z("mobile-navigation-control-sub-section"),children:[" ","\u2022 ",I.title]}):null]}),(0,s.jsx)("div",{className:Z("mobile-navigation-control-arrow"),children:(0,s.jsx)(l.J,{data:d.Z,width:10,height:6})})]}),(0,s.jsxs)("div",{className:Z("navigation",{"mobile-open":w}),children:[(0,s.jsxs)("div",{className:Z("mobile-navigation-header"),children:[(0,s.jsx)("div",{className:Z("mobile-navigation-header-title"),children:m}),(0,s.jsx)("div",{tabIndex:0,role:"button",className:Z("mobile-navigation-header-close"),onClick:function(){N(!1)},children:(0,s.jsx)(l.J,{data:u.Z,width:16})})]}),(0,s.jsx)(C,{sections:t,sectionId:v,subSectionId:f,searchPlaceholder:x,emptySearchPlaceholder:j,onClickOnLink:k})]})]}),(0,s.jsx)(c.J,{sizes:{all:12,lg:9},children:(0,s.jsx)("div",{className:Z("content"),children:b})})]})})}):null}},89438:function(e,n,t){"use strict";t.r(n),t.d(n,{ComponentPage:function(){return T},__N_SSG:function(){return G},default:function(){return X}});var i,s,o=t(85893),r=t(67294),c=t(26042),l=t(69396),a=t(828),d=t(97387),u=t(43671),h=t(88391),v=t(45483),f=t(11163);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},m.apply(this,arguments)}var x,p=function(e){return r.createElement("svg",m({width:16,height:18,viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=r.createElement("path",{d:"M5.333 17A2.668 2.668 0 0 0 8 14.334v-2.667H5.333a2.668 2.668 0 0 0 0 5.333zM2.667 9a2.668 2.668 0 0 1 2.666-2.666H8v5.333H5.333a2.668 2.668 0 0 1-2.666-2.666zM2.667 3.667A2.668 2.668 0 0 1 5.333 1H8v5.333H5.333a2.668 2.668 0 0 1-2.666-2.666zM8 1h2.666a2.668 2.668 0 0 1 0 5.333H8V1z",stroke:"#c9d1d9"})),s||(s=r.createElement("path",{d:"M13.333 9A2.668 2.668 0 0 1 8 9a2.668 2.668 0 0 1 5.333 0z",stroke:"#c9d1d9"})))},j=t(62166),b=t(98074),g=t(24257),w=t(43891),N=t(14924),S=t(41512),C=t(28275),Z=t(80755),I=t(48323),k=t(60868),y=t(74418),E=t(33527),O=t(23825),z=t(99406),P=t(95395),_=t(61490),U=(t(86928),(0,g.Ge)("sandbox-block")),M=function(e){var n=e.libId,t=e.componentId,i=e.sandboxConfig,s=(0,a.Z)(r.useState({}),2),d=s[0],h=s[1],v=(0,a.Z)(r.useState(!1),2),f=v[0],m=v[1],x=(0,a.Z)(r.useState(!1),2),p=x[0],j=x[1],b=(0,a.Z)(r.useState("dark"),2),g=b[0],w=b[1],M=r.useRef(),L=r.useCallback((function(){return m(!0)}),[]);return r.useEffect((function(){var e;return null===(e=M.current)||void 0===e||e.addEventListener("load",L),function(){var e;null===(e=M.current)||void 0===e||e.removeEventListener("load",L)}}),[M.current]),r.useEffect((function(){if(i){var e={};Object.keys(i).forEach((function(n){"undefined"!==typeof i[n].defaultValue&&(e[n]=i[n].defaultValue)})),h(e)}}),[i]),r.useEffect((function(){var e,n;f&&(null===(e=M.current)||void 0===e||null===(n=e.contentWindow)||void 0===n||n.postMessage({pageProps:{theme:g},componentProps:d},window.origin))}),[f,d,g]),(0,o.jsx)("div",{className:U({"full-screen":p}),children:(0,o.jsxs)(Z.X,{space:"0",children:[(0,o.jsxs)(z.J,{s:"12",l:"8",m:"8",className:U("wrapper-iframe"),children:[(0,o.jsx)(P.y,{size:"s"}),(0,o.jsx)("iframe",{ref:M,src:window&&"".concat(null===window||void 0===window?void 0:window.location.origin,"/sandbox/").concat(n,"/").concat(t),frameBorder:0,className:U("iframe")})]}),(0,o.jsxs)(z.J,{s:"12",l:"4",m:"4",children:[(0,o.jsxs)("div",{className:U("top-actions"),children:[(0,o.jsx)("div",{tabIndex:0,role:"button",className:U("control-theme"),onClick:function(){w("dark"===g?"light":"dark")},children:(0,o.jsx)(u.J,{data:_.Z,size:18})}),(0,o.jsx)("div",{tabIndex:0,role:"button",className:U("control-theme"),onClick:function(){j(!p)},children:p?(0,o.jsx)(S.Z,{height:18}):(0,o.jsx)(C.Z,{height:18})})]}),(0,o.jsx)("div",{className:U("actions"),children:i?Object.keys(i).map((function(e){var n=i[e];switch(n.type){case"select":return(0,o.jsx)(Z.X,{space:"0",children:(0,o.jsxs)("div",{className:U("prop"),children:[(0,o.jsx)(I.x,{className:U("prop-title"),children:e}),(0,o.jsx)(k.P,{value:[d[e]],placeholder:e,options:n.values,width:"max",disabled:!f,onUpdate:function(n){var t=(0,a.Z)(n,1)[0];return h((0,l.Z)((0,c.Z)({},d),(0,N.Z)({},e,t)))}},e)]})},e);case"radioButton":return(0,o.jsx)(Z.X,{space:"0",children:(0,o.jsxs)("div",{className:U("prop"),children:[(0,o.jsx)(I.x,{className:U("prop-title"),children:e}),(0,o.jsx)(y.E,{value:d[e],options:n.values,width:"max",disabled:!f,onUpdate:function(n){return h((0,l.Z)((0,c.Z)({},d),(0,N.Z)({},e,n)))}},e)]})},e);case"switch":return(0,o.jsx)(Z.X,{space:"0",children:(0,o.jsx)("div",{className:U("prop"),children:(0,o.jsxs)("div",{className:U("prop-switch"),children:[(0,o.jsx)(I.x,{variant:"body-1",children:e}),(0,o.jsx)(E.r,{title:e,size:"m",disabled:!f,checked:d[e],onUpdate:function(n){h((0,l.Z)((0,c.Z)({},d),(0,N.Z)({},e,n)))}},e)]})})},e);case"input":return(0,o.jsx)(Z.X,{space:"0",children:(0,o.jsxs)("div",{className:U("prop"),children:[(0,o.jsx)(I.x,{className:U("prop-title"),children:e}),(0,o.jsx)(O.o,{placeholder:e,disabled:!f,value:d[e],onUpdate:function(n){h((0,l.Z)((0,c.Z)({},d),(0,N.Z)({},e,n)))}})]})},e);default:return[]}})):[]})]})]})})},L=(t(93122),(0,g.Ge)("component"));!function(e){e.Overview="overview",e.Design="design"}(x||(x={}));var J=[{id:x.Overview,title:"Overview"},{id:x.Design,title:"Design"}],A=function(e){var n,t,i,s,m=e.libId,N=e.component,S=e.readmeContent,C=e.sections,Z=(0,f.useRouter)(),I=Z.query.tabId,k=(0,a.Z)(r.useState(I===x.Design?x.Design:x.Overview),2),y=k[0],E=k[1],O=r.useMemo((function(){return C.find((function(e){return e.id===m}))}),[m,C]),z=r.useMemo((function(){return O&&O.subSections?O.subSections.findIndex((function(e){return e.id===N.id})):null}),[O,N.id]),P=r.useMemo((function(){if(!O||!O.subSections||!z&&0!==z)return null;var e=z+1;if(e>=O.subSections.length)return null;var n=O.subSections[e];return n.isComingSoon?null:n}),[z,O]),_=r.useMemo((function(){if(!O||!O.subSections||!z&&0!==z)return null;var e=z-1;if(e<0)return null;var n=O.subSections[e];return n.isComingSoon?null:n}),[z,O]);r.useEffect((function(){E(I===x.Design?x.Design:x.Overview)}),[I]);var U=r.useCallback((function(e){var n;if(!(null===(n=N.content)||void 0===n?void 0:n.readmeUrl))return e;var t=new v.URL(N.content.readmeUrl),i=new v.URL(e,N.content.readmeUrl);if(i.origin!==t.origin)return e;var s=(0,g.p6)(i.toString());return null!==s&&void 0!==s?s:e}),[null===(n=N.content)||void 0===n?void 0:n.readmeUrl]);return(0,o.jsxs)("div",{className:L(),children:[(0,o.jsxs)("div",{className:L("header"),children:[(0,o.jsx)("h1",{className:L("title"),children:N.title}),N.githubUrl||N.figmaUrl?(0,o.jsxs)("div",{className:L("buttons"),children:[N.githubUrl?(0,o.jsxs)(d.z,{className:L("button"),view:"outlined",size:"l",href:N.githubUrl,target:"_blank",children:[(0,o.jsx)(u.J,{data:j.Z,size:16}),(0,o.jsx)("span",{children:"Github"})]},"github"):null,N.figmaUrl?(0,o.jsxs)(d.z,{className:L("button"),view:"outlined",size:"l",href:N.figmaUrl,target:"_blank",children:[(0,o.jsx)(u.J,{data:p,size:16}),(0,o.jsx)("span",{children:"Open in Figma"})]},"figma"):null]}):null]}),(null===(t=N.content)||void 0===t?void 0:t.design)?(0,o.jsx)("div",{className:L("tabs"),children:(0,o.jsx)(h.m,{size:"xl",items:J,activeTab:y,onSelectTab:function(e){Z.replace({pathname:Z.pathname,query:(0,l.Z)((0,c.Z)({},Z.query),{tabId:e===x.Design?x.Design:void 0})})}})}):null,(0,o.jsx)("div",{className:L("content"),children:I===x.Design&&(null===(i=N.content)||void 0===i?void 0:i.design)?(0,o.jsx)(b.W,{text:null===(s=N.content)||void 0===s?void 0:s.design},"design"):(0,o.jsxs)(o.Fragment,{children:[N.sandbox?(0,o.jsx)(M,{libId:m,componentId:N.id,sandboxConfig:N.sandbox.props},"".concat(m,"-").concat(N.id)):null,(0,o.jsx)(b.W,{text:S,rewriteLinks:U,withComponents:!0},"overview")]})}),(0,o.jsx)("div",{className:L("navigation"),children:(0,o.jsx)(w.l,{prevSection:_,nextSection:P})})]})},D=t(97409),H=function(e){var n=e.libId,t=e.componentId,i=e.children,s=e.sections;return(0,o.jsx)(D._,{sections:s,mobileTitle:"Components",searchPlaceholder:"Search by component name",sectionId:n,subSectionId:t,children:i})},R=t(24066),F=t(68061),G=!0,T=function(e){var n=e.libId,t=e.componentId,i=e.readmeContent,s=F.x.find((function(e){return e.id===n})),c=null===s||void 0===s?void 0:s.components.find((function(e){return e.id===t}));if(!s||!c)return null;var l=(0,r.useMemo)((function(){return F.x.map((function(e){var n=e.id,t=e.title,i=e.components;return{id:n,title:t,subSections:i.map((function(e){return{id:e.id,title:e.title,url:!0===e.isComingSoon?"#":"/components/".concat(n,"/").concat(e.id),isComingSoon:e.isComingSoon}}))}}))}),[]);return(0,o.jsx)(R.A,{title:"".concat(s.title," \u2013 ").concat(c.title),children:(0,o.jsx)(H,{libId:n,componentId:t,sections:l,children:(0,o.jsx)(A,{libId:n,component:c,readmeContent:i,sections:l})})})},X=T},90113:function(){},93122:function(){},73401:function(){},83209:function(){},4313:function(){},86928:function(){},3689:function(e,n,t){"use strict";t.r(n),t.d(n,{decode:function(){return p},encode:function(){return j},toASCII:function(){return g},toUnicode:function(){return b},ucs2decode:function(){return v},ucs2encode:function(){return f}});const i=2147483647,s=36,o=/^xn--/,r=/[^\0-\x7F]/,c=/[\x2E\u3002\uFF0E\uFF61]/g,l={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},a=Math.floor,d=String.fromCharCode;function u(e){throw new RangeError(l[e])}function h(e,n){const t=e.split("@");let i="";t.length>1&&(i=t[0]+"@",e=t[1]);const s=function(e,n){const t=[];let i=e.length;for(;i--;)t[i]=n(e[i]);return t}((e=e.replace(c,".")).split("."),n).join(".");return i+s}function v(e){const n=[];let t=0;const i=e.length;for(;t<i;){const s=e.charCodeAt(t++);if(s>=55296&&s<=56319&&t<i){const i=e.charCodeAt(t++);56320==(64512&i)?n.push(((1023&s)<<10)+(1023&i)+65536):(n.push(s),t--)}else n.push(s)}return n}const f=e=>String.fromCodePoint(...e),m=function(e,n){return e+22+75*(e<26)-((0!=n)<<5)},x=function(e,n,t){let i=0;for(e=t?a(e/700):e>>1,e+=a(e/n);e>455;i+=s)e=a(e/35);return a(i+36*e/(e+38))},p=function(e){const n=[],t=e.length;let o=0,r=128,c=72,l=e.lastIndexOf("-");l<0&&(l=0);for(let i=0;i<l;++i)e.charCodeAt(i)>=128&&u("not-basic"),n.push(e.charCodeAt(i));for(let h=l>0?l+1:0;h<t;){const l=o;for(let n=1,r=s;;r+=s){h>=t&&u("invalid-input");const l=(d=e.charCodeAt(h++))>=48&&d<58?d-48+26:d>=65&&d<91?d-65:d>=97&&d<123?d-97:s;l>=s&&u("invalid-input"),l>a((i-o)/n)&&u("overflow"),o+=l*n;const v=r<=c?1:r>=c+26?26:r-c;if(l<v)break;const f=s-v;n>a(i/f)&&u("overflow"),n*=f}const v=n.length+1;c=x(o-l,v,0==l),a(o/v)>i-r&&u("overflow"),r+=a(o/v),o%=v,n.splice(o++,0,r)}var d;return String.fromCodePoint(...n)},j=function(e){const n=[],t=(e=v(e)).length;let o=128,r=0,c=72;for(const i of e)i<128&&n.push(d(i));const l=n.length;let h=l;for(l&&n.push("-");h<t;){let t=i;for(const n of e)n>=o&&n<t&&(t=n);const v=h+1;t-o>a((i-r)/v)&&u("overflow"),r+=(t-o)*v,o=t;for(const f of e)if(f<o&&++r>i&&u("overflow"),f===o){let e=r;for(let t=s;;t+=s){const i=t<=c?1:t>=c+26?26:t-c;if(e<i)break;const o=e-i,r=s-i;n.push(d(m(i+o%r,0))),e=a(o/r)}n.push(d(m(e,0))),c=x(r,v,h===l),r=0,++h}++r,++o}return n.join("")},b=function(e){return h(e,(function(e){return o.test(e)?p(e.slice(4).toLowerCase()):e}))},g=function(e){return h(e,(function(e){return r.test(e)?"xn--"+j(e):e}))},w={version:"2.1.0",ucs2:{decode:v,encode:f},decode:p,encode:j,toASCII:g,toUnicode:b};n.default=w}},function(e){e.O(0,[3662,630,9772,5880,2670,816,5985,6468,1960,2791,9815,7115,153,8210,2250,8087,1383,5527,2659,37,8407,4162,2538,562,3330,5052,702,6362,9774,2888,179],(function(){return n=53135,e(e.s=n);var n}));var n=e.O();_N_E=n}]);