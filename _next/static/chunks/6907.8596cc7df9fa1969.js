(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6907],{44607:function(e,t,n){"use strict";var o=n(67294);t.Z=e=>o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0Z",clipRule:"evenodd"}))},97387:function(e,t,n){"use strict";n.d(t,{z:function(){return p}});var o=n(67294),s=n(32782),c=n(69110),i=n(42087),r=n(96639),a=n(9042);const l=(0,s.Ge)("button");function u(){(0,a.O)('[Button.Icon] Physical values (left, right) of "side" property are deprecated. Use logical values (start, end) instead.')}const d=({side:e,className:t,children:n})=>{let s=e;return"left"===s&&(u(),s="start"),"right"===s&&(u(),s="end"),o.createElement("span",{className:l("icon",{side:s},t)},o.createElement("span",{className:l("icon-inner")},n))};d.displayName="Button.Icon";n(22908);const f=(0,s.Ge)("button"),m=o.forwardRef((function({view:e="normal",size:t="m",pin:n="round-round",selected:s,disabled:c=!1,loading:r=!1,width:a,title:l,tabIndex:u,type:d="button",component:m,href:p,target:h,rel:g,extraProps:E,onClick:v,onMouseEnter:y,onMouseLeave:k,onFocus:w,onBlur:x,children:C,id:N,style:M,className:I,qa:O},B){const j={title:l,tabIndex:u,onClick:v,onClickCapture:o.useCallback((t=>{i.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})}),[e]),onMouseEnter:y,onMouseLeave:k,onFocus:w,onBlur:x,id:N,style:M,className:f({view:e,size:t,pin:n,selected:s,disabled:c||r,loading:r,width:a},I),"data-qa":O};if("string"===typeof p||m){const e={href:p,target:h,rel:"_blank"!==h||g?g:"noopener noreferrer"};return o.createElement(m||"a",Object.assign(Object.assign(Object.assign(Object.assign({},E),j),m?{}:e),{ref:B,"aria-disabled":c||r}),b(C))}return o.createElement("button",Object.assign({},E,j,{ref:B,type:d,disabled:c||r,"aria-pressed":s}),b(C))}));m.displayName="Button";const p=Object.assign(m,{Icon:d}),h=(0,r.s)(d);function b(e){const t=o.Children.toArray(e);if(1===t.length){const e=t[0];return h(e)?e:(0,c.y)(e)?o.createElement(p.Icon,{key:"icon"},e):o.createElement("span",{key:"text",className:f("text")},e)}{let e,n,s;const i=[];for(const r of t){const t=(0,c.y)(r),s=h(r);if(t||s)if(e||0!==i.length){if(!n&&0!==i.length){const e="icon-end",s="end";n=t?o.createElement(p.Icon,{key:e,side:s},r):o.cloneElement(r,{side:s})}}else{const n="icon-start",s="start";e=t?o.createElement(p.Icon,{key:n,side:s},r):o.cloneElement(r,{side:s})}else i.push(r)}return i.length>0&&(s=o.createElement("span",{key:"text",className:f("text")},i)),[e,n,s]}}},9042:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});const o=new Map;function s(e){e&&!o.has(e)&&(console.error(e),o.set(e,!0))}},70926:function(e,t,n){"use strict";n.d(t,{S:function(){return c},b:function(){return i}});var o=n(67294),s=n(30839);function c(e){return t=>{e&&[s.V.ENTER,s.V.SPACEBAR,s.V.SPACEBAR_OLD].includes(t.key)&&e(t)}}function i(e){return{onKeyDown:o.useMemo((()=>c(e)),[e])}}},18799:function(e,t,n){"use strict";n.r(t),n.d(t,{DropdownMenuComponent:function(){return c}});var o=n(85893),s=n(45527),c=function(e){var t=e.size,n=e.disabled;return(0,o.jsx)(s.h,{open:!0,size:t,disabled:n,items:[{action:function(){},text:"Rename"},{action:function(){},text:"Delete",theme:"danger"},{text:"More",items:[{action:function(){},text:"Mark as"},{action:function(){},text:"Copy"},{action:function(){},text:"Move to"}]}]})}},22908:function(){}}]);