(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8830],{78771:function(e,t,n){"use strict";n.d(t,{C:function(){return p}});var r=n(85893),u=n(67294),s=n(53006),l=n(59003),i=n(23825),o=n(51960),a=n(21646),c=n(16460),d=n(56432),f=n(13171),v=n(45397);n(31035);let b=(0,a.G)("relative-date-field");function p(e){var t;let n=(0,v.q)(e),{inputProps:a,calendarProps:p,timeInputProps:h}=(0,f.a)(n,e),g=(0,s.X)(),m=u.useRef(null),[E,w]=u.useState(!1),{focusWithinProps:x}=(0,l.L)({onBlurWithin:()=>{w(!1)},isDisabled:g});return(0,r.jsxs)("div",Object.assign({role:"group",className:b(null,e.className),style:e.style},x,{children:[(0,r.jsx)(i.o,Object.assign({},a,{className:b("field"),ref:m,onFocus:t=>{var n;g||w(!0),null===(n=e.onFocus)||void 0===n||n.call(e,t)},onBlur:e.onBlur})),(0,r.jsx)("input",{type:"text",hidden:!0,name:e.name,value:null!==(t=n.value)&&void 0!==t?t:"",onChange:()=>{}}),!g&&(0,r.jsx)(o.G,{anchorRef:m,open:E,children:(0,r.jsxs)("div",{className:b("popup-content"),children:[(0,r.jsx)(c.f,Object.assign({},p)),e.hasTime?(0,r.jsx)("div",{className:b("time-field-wrapper"),children:(0,r.jsx)(d.N,Object.assign({className:b("time-field")},h))}):null]})})]}))}},51693:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))},26595:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))},42646:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(67294);let u={mobile:!1,platform:n(81387).t.BROWSER,useHistory:()=>({action:"",replace(){},push(){},goBack(){}}),useLocation:()=>({pathname:"",search:"",hash:""})},s=r.createContext(u)},81387:function(e,t,n){"use strict";n.d(t,{P:function(){return l},t:function(){return u}});var r,u,s=n(32782);(r=u||(u={})).IOS="ios",r.ANDROID="android",r.BROWSER="browser";let l=(0,s.Ge)("root")({mobile:!0}).split(/\s+/)[1]},53006:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(67294),u=n(42646);function s(){return r.useContext(u.z).mobile}},59003:function(e,t,n){"use strict";n.d(t,{L:function(){return s}});var r=n(67294);class u{constructor(e,t,n={}){var r,u;this.nativeEvent=t,this.target=null!==(r=n.target)&&void 0!==r?r:t.target,this.currentTarget=null!==(u=n.currentTarget)&&void 0!==u?u:t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}}function s(e){let{onFocusWithin:t,onBlurWithin:n,onFocusWithinChange:s,isDisabled:l}=e,i=r.useRef(!1),{onBlur:o,onFocus:a}=function({onFocus:e,onBlur:t,isDisabled:n}){let s=r.useRef(!1),l=r.useRef(null);r.useEffect(()=>{if(n)return;let e=function(){s.current=!1},r=function(e){!s.current&&l.current&&(t(new u("blur",new FocusEvent("blur",Object.assign(Object.assign({},e),{relatedTarget:e.target,bubbles:!1,cancelable:!1})),{target:l.current,currentTarget:l.current})),l.current=null)};return window.addEventListener("focus",e,{capture:!0}),window.addEventListener("focusin",r),()=>{window.removeEventListener("focus",e,{capture:!0}),window.removeEventListener("focusin",r)}},[n,t]);let i=r.useCallback(e=>{(null===e.relatedTarget||e.relatedTarget===document.body||e.relatedTarget===document)&&(t(e),l.current=null)},[t]),o=function(e){let t=r.useRef({isFocused:!1,observer:null});return r.useEffect(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]),r.useCallback(n=>{let r=n.target;if(r instanceof HTMLButtonElement||r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement){t.current.isFocused=!0,r.addEventListener("focusout",n=>{t.current.isFocused=!1,r.disabled&&(null==e||e(new u("blur",n))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0});let n=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){n.disconnect(),t.current.observer=null;let e=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:e})),r.dispatchEvent(new FocusEvent("focusout",{relatedTarget:e,bubbles:!0}))}});n.observe(r,{attributes:!0,attributeFilter:["disabled"]}),t.current.observer=n}},[e])}(t);return{onBlur:i,onFocus:r.useCallback(t=>{s.current=!0,l.current=t.target,o(t),e(t)},[o,e])}}({onFocus:r.useCallback(e=>{!i.current&&document.activeElement===e.target&&(i.current=!0,t&&t(e),s&&s(!0))},[t,s]),onBlur:r.useCallback(e=>{i.current&&(i.current=!1,n&&n(e),s&&s(!1))},[n,s]),isDisabled:l});return l?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:a,onBlur:o}}}},41848:function(e){e.exports=function(e,t,n,r){for(var u=e.length,s=n+(r?1:-1);r?s--:++s<u;)if(t(e[s],s,e))return s;return -1}},42118:function(e,t,n){var r=n(41848),u=n(62722),s=n(42351);e.exports=function(e,t,n){return t==t?s(e,t,n):r(e,u,n)}},62722:function(e){e.exports=function(e){return e!=e}},42351:function(e){e.exports=function(e,t,n){for(var r=n-1,u=e.length;++r<u;)if(e[r]===t)return r;return -1}},81763:function(e,t,n){var r=n(44239),u=n(37005);e.exports=function(e){return"number"==typeof e||u(e)&&"[object Number]"==r(e)}},24226:function(e,t,n){"use strict";n.r(t),n.d(t,{RelativeDateFieldSandBoxExample:function(){return s}});var r=n(85893),u=n(78771);n(67294);let s=e=>(0,r.jsx)(u.C,{...e,style:{alignSelf:"flex-start"}})},31035:function(){}}]);