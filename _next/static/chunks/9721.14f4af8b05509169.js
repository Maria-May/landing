(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9721],{81372:function(e,t,n){"use strict";var a=n(67294);t.Z=e=>a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.134 2.994 2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0Zm3.03-.75c-.962-1.665-3.366-1.665-4.328 0L.919 10.749c-.964 1.666.239 3.751 2.164 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751l-4.917-8.505ZM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5Zm1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",clipRule:"evenodd"}))},58405:function(e,t,n){"use strict";var a=n(67294);t.Z=e=>a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))},97387:function(e,t,n){"use strict";n.d(t,{z:function(){return h}});var a=n(67294),s=n(32782),i=n(69110),r=n(42087),l=n(96639),o=n(9042);let c=(0,s.Ge)("button");function u(){(0,o.O)('[Button.Icon] Physical values (left, right) of "side" property are deprecated. Use logical values (start, end) instead.')}let g=({side:e,className:t,children:n})=>{let s=e;return"left"===s&&(u(),s="start"),"right"===s&&(u(),s="end"),a.createElement("span",{className:c("icon",{side:s},t)},a.createElement("span",{className:c("icon-inner")},n))};g.displayName="Button.Icon",n(82801);let d=(0,s.Ge)("button"),f=a.forwardRef(function({view:e="normal",size:t="m",pin:n="round-round",selected:s,disabled:i=!1,loading:l=!1,width:o,title:c,tabIndex:u,type:g="button",component:f,href:h,target:y,rel:m,extraProps:p,onClick:k,onMouseEnter:E,onMouseLeave:v,onFocus:L,onBlur:N,children:O,id:M,style:K,className:w,qa:x},P){let j={title:c,tabIndex:u,onClick:k,onClickCapture:a.useCallback(t=>{r.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})},[e]),onMouseEnter:E,onMouseLeave:v,onFocus:L,onBlur:N,id:M,style:K,className:d({view:e,size:t,pin:n,selected:s,disabled:i||l,loading:l,width:o},w),"data-qa":x};return"string"==typeof h||f?a.createElement(f||"a",Object.assign(Object.assign(Object.assign(Object.assign({},p),j),f?{}:{href:h,target:y,rel:"_blank"!==y||m?m:"noopener noreferrer"}),{ref:P,"aria-disabled":i||l}),b(O)):a.createElement("button",Object.assign({},p,j,{ref:P,type:g,disabled:i||l,"aria-pressed":s}),b(O))});f.displayName="Button";let h=Object.assign(f,{Icon:g}),y=(0,l.s)(g);function b(e){let t=a.Children.toArray(e);if(1===t.length){let e=t[0];return y(e)?e:(0,i.y)(e)?a.createElement(h.Icon,{key:"icon"},e):a.createElement("span",{key:"text",className:d("text")},e)}{let e,n,s;let r=[];for(let s of t){let t=(0,i.y)(s),l=y(s);if(t||l){if(e||0!==r.length)n||0===r.length||(n=t?a.createElement(h.Icon,{key:"icon-end",side:"end"},s):a.cloneElement(s,{side:"end"}));else{let n="start";e=t?a.createElement(h.Icon,{key:"icon-start",side:n},s):a.cloneElement(s,{side:n})}}else r.push(s)}return r.length>0&&(s=a.createElement("span",{key:"text",className:d("text")},r)),[e,n,s]}}},42646:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var a=n(67294);let s={mobile:!1,platform:n(81387).t.BROWSER,useHistory:()=>({action:"",replace(){},push(){},goBack(){}}),useLocation:()=>({pathname:"",search:"",hash:""})},i=a.createContext(s)},32937:function(e,t,n){"use strict";n.d(t,{e:function(){return c}});var a=n(97582),s=n(67294),i=n(42646),r=n(81387);function l(){return{action:"",replace(){},push(){},goBack(){}}}function o(){return{pathname:"",search:"",hash:""}}function c({mobile:e=!1,platform:t=r.t.BROWSER,useHistory:n=l,useLocation:c=o,children:u}){let g=s.useCallback(function(){let e=n(),{goBack:t,back:s}=e;return Object.assign(Object.assign({},(0,a._T)(e,["goBack","back"])),{goBack:"function"==typeof t?t:"function"==typeof s?s:()=>{}})},[n]);s.useEffect(()=>{document.body.classList.toggle(r.P,e)},[r.P,e]);let d=s.useMemo(()=>({mobile:e,platform:t,useLocation:c,useHistory:g}),[e,t,c,g]);return s.createElement(i.z.Provider,{value:d},u)}},81387:function(e,t,n){"use strict";n.d(t,{P:function(){return r},t:function(){return s}});var a,s,i=n(32782);(a=s||(s={})).IOS="ios",a.ANDROID="android",a.BROWSER="browser";let r=(0,i.Ge)("root")({mobile:!0}).split(/\s+/)[1]},53006:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var a=n(67294),s=n(42646);function i(){return a.useContext(s.z).mobile}},52619:function(e,t,n){"use strict";n.d(t,{e:function(){return h}});let a=/{{(.*?)}}/g,s={EmptyKeyset:"EMPTY_KEYSET",EmptyLanguageData:"EMPTY_LANGUAGE_DATA",KeysetNotFound:"KEYSET_NOT_FOUND",MissingKey:"MISSING_KEY",MissingKeyFor0:"MISSING_KEY_FOR_0",MissingKeyParamsCount:"MISSING_KEY_PARAMS_COUNT",MissingKeyPlurals:"MISSING_KEY_PLURALS",NoLanguageData:"NO_LANGUAGE_DATA"};function i(e){let{code:t,fallbackLang:n,lang:a}=e,i=`Using language ${a}. `;switch(t){case s.EmptyKeyset:i+="Keyset is empty.";break;case s.EmptyLanguageData:i+="Language data is empty.";break;case s.KeysetNotFound:i+="Keyset not found.";break;case s.MissingKey:i+="Missing key.";break;case s.MissingKeyFor0:return i+"Missing key for 0";case s.MissingKeyParamsCount:i+="Missing params.count for key.";break;case s.MissingKeyPlurals:i+="Missing required plurals.";break;case s.NoLanguageData:i=`Language "${a}" is not defined, make sure you call setLang for the same language you called registerKeysets for!`}return n&&(i+=` Trying to use fallback language "${n}"...`),i}function r(e,t){return 0===e?t.None:1===e||-1===e?t.One:t.Many}function l(e,t){let n=Math.abs(e%10),a=Math.abs(e%100);return 0===e?t.None:1===n&&11!==a?t.One:n>1&&n<5&&(a<10||a>20)?t.Few:t.Many}Object.values(s),(c=u||(u={}))[c.One=0]="One",c[c.Few=1]="Few",c[c.Many=2]="Many",c[c.None=3]="None";class o{constructor(e={}){this.data={},this.pluralizers={en:r,ru:l},this.logger=null;let{data:t,fallbackLang:n,lang:a,logger:s=null}=e;this.fallbackLang=n,this.lang=a,this.logger=s,t&&Object.entries(t).forEach(([e,t])=>{this.registerKeysets(e,t)})}setLang(e){this.lang=e}setFallbackLang(e){this.fallbackLang=e}configurePluralization(e){this.pluralizers=Object.assign({},this.pluralizers,e)}registerKeyset(e,t,n={}){let a=this.data[e]&&Object.prototype.hasOwnProperty.call(this.data[e],t);if(a)throw Error(`Keyset '${t}' is already registered, aborting!`);a&&this.warn(`Keyset '${t}' is already registered.`),this.data[e]=Object.assign({},this.data[e],{[t]:n})}registerKeysets(e,t){Object.keys(t).forEach(n=>{this.registerKeyset(e,n,t[n])})}has(e,t,n){var a;let s=this.getLanguageData(n);return!!(s&&s[e]&&(null===(a=s[e])||void 0===a?void 0:a[t]))}i18n(e,t,n){let a,s;if(!this.lang&&!this.fallbackLang)throw Error('Language is not specified. You should set at least one of these: "lang", "fallbackLang"');if(this.lang){if({text:a,details:s}=this.getTranslationData({keysetName:e,key:t,params:n,lang:this.lang}),s){let e=i({code:s.code,lang:this.lang,fallbackLang:this.fallbackLang===this.lang?void 0:this.fallbackLang});this.warn(e,s.keysetName,s.key)}}else this.warn("Target language is not specified.");if(void 0===a&&this.fallbackLang&&this.fallbackLang!==this.lang&&({text:a,details:s}=this.getTranslationData({keysetName:e,key:t,params:n,lang:this.fallbackLang}),s)){let e=i({code:s.code,lang:this.fallbackLang});this.warn(e,s.keysetName,s.key)}return null!=a?a:t}keyset(e){return(t,n)=>this.i18n(e,t,n)}warn(e,t,n){var a;let s="";t?(s+=t,n&&(s+=`.${n}`)):s="languageData",null===(a=this.logger)||void 0===a||a.log(`I18n: ${e}`,{level:"info",logger:s,extra:{type:"i18n"}})}getLanguageData(e){let t=e||this.lang;return t?this.data[t]:void 0}getLanguagePluralizer(e){let t=e?this.pluralizers[e]:void 0;return t||this.warn(`Pluralization is not configured for language '${e}', falling back to the english ruleset`),t||r}getTranslationData(e){let{lang:t,key:n,keysetName:i,params:r}=e,l=this.getLanguageData(t);if(void 0===l)return{details:{code:s.NoLanguageData}};if(0===Object.keys(l).length)return{details:{code:s.EmptyLanguageData}};let o=l[i];if(!o)return{details:{code:s.KeysetNotFound,keysetName:i}};if(0===Object.keys(o).length)return{details:{code:s.EmptyKeyset,keysetName:i}};let c=o&&o[n],g={};if(void 0===c)return{details:{code:s.MissingKey,keysetName:i,key:n}};if(Array.isArray(c)){if(c.length<3)return{details:{code:s.MissingKeyPlurals,keysetName:i,key:n}};let e=Number(null==r?void 0:r.count);if(Number.isNaN(e))return{details:{code:s.MissingKeyParamsCount,keysetName:i,key:n}};let a=this.getLanguagePluralizer(t);if(g.text=c[a(e,u)]||c[u.Many],void 0===g.text)return{details:{code:s.MissingKeyPlurals,keysetName:i,key:n}};void 0===c[u.None]&&(g.details={code:s.MissingKeyFor0,keysetName:i,key:n})}else g.text=c;return r&&(g.text=function(e,t){let n,s="",i=a.lastIndex=0;for(;n=a.exec(e);){i!==n.index&&(s+=e.slice(i,n.index)),i=a.lastIndex;let[r,l]=n;l&&Object.prototype.hasOwnProperty.call(t,l)?s+=t[l]:s+=r}return i<e.length&&(s+=e.slice(i)),s}(g.text,r)),g}}var c,u,g=n(3528);let d=(0,g.iE)().lang,f=new o({lang:d,fallbackLang:d});function h(e,t){return Object.entries(e).forEach(([e,n])=>f.registerKeyset(e,t,n)),f.keyset(t)}(0,g.Pe)(e=>{f.setLang(e.lang)})},3528:function(e,t,n){"use strict";var a,s;n.d(t,{Pe:function(){return o},Uo:function(){return a},iE:function(){return c},jQ:function(){return l}}),(s=a||(a={})).Ru="ru",s.En="en";let i=[],r={lang:a.En},l=e=>{Object.assign(r,e),i.forEach(e=>{e(r)})},o=e=>(i.push(e),()=>{i=i.filter(t=>t!==e)}),c=()=>r},9042:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});let a=new Map;function s(e){!e||a.has(e)||(console.error(e),a.set(e,!0))}},63608:function(e,t,n){"use strict";n.r(t),n.d(t,{ToasterProxy:function(){return u}});var a=n(85893),s=n(72246),i=n(32937),r=n(25803),l=n(48097),o=n(67294);let c=e=>{let t=(0,s.P)();return o.useEffect(()=>{t.has(e.name)?t.update(e.name,e):t.add(e)},[e]),null},u=e=>{let{name:t="demo-toast",isMobile:n,action:s,autoHiding:o,theme:u,...g}=e;return(0,a.jsx)(i.e,{mobile:n,children:(0,a.jsxs)(r.N,{children:[(0,a.jsx)(c,{...g,name:t,autoHiding:!1===o?o:5e3,actions:[{label:s,removeAfterClick:!1,onClick(){}}],theme:"undefined"===u?void 0:u}),(0,a.jsx)(l.B,{})]})},String(n))};u.displayName="ToasterProxy"},82801:function(){},97326:function(e,t,n){"use strict";function a(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})}}]);