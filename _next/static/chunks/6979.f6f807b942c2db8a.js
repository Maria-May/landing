(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6979],{97387:function(e,t,n){"use strict";n.d(t,{z:function(){return p}});var o=n(67294),s=n(32782),c=n(69110),r=n(42087),i=n(96639),a=n(9042);const l=(0,s.Ge)("button");function u(){(0,a.O)('[Button.Icon] Physical values (left, right) of "side" property are deprecated. Use logical values (start, end) instead.')}const d=({side:e,className:t,children:n})=>{let s=e;return"left"===s&&(u(),s="start"),"right"===s&&(u(),s="end"),o.createElement("span",{className:l("icon",{side:s},t)},o.createElement("span",{className:l("icon-inner")},n))};d.displayName="Button.Icon";n(22908);const f=(0,s.Ge)("button"),m=o.forwardRef((function({view:e="normal",size:t="m",pin:n="round-round",selected:s,disabled:c=!1,loading:i=!1,width:a,title:l,tabIndex:u,type:d="button",component:m,href:p,target:b,rel:g,extraProps:y,onClick:E,onMouseEnter:k,onMouseLeave:x,onFocus:v,onBlur:C,children:N,id:w,style:I,className:M,qa:O},B){const j={title:l,tabIndex:u,onClick:E,onClickCapture:o.useCallback((t=>{r.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})}),[e]),onMouseEnter:k,onMouseLeave:x,onFocus:v,onBlur:C,id:w,style:I,className:f({view:e,size:t,pin:n,selected:s,disabled:c||i,loading:i,width:a},M),"data-qa":O};if("string"===typeof p||m){const e={href:p,target:b,rel:"_blank"!==b||g?g:"noopener noreferrer"};return o.createElement(m||"a",Object.assign(Object.assign(Object.assign(Object.assign({},y),j),m?{}:e),{ref:B,"aria-disabled":c||i}),h(N))}return o.createElement("button",Object.assign({},y,j,{ref:B,type:d,disabled:c||i,"aria-pressed":s}),h(N))}));m.displayName="Button";const p=Object.assign(m,{Icon:d}),b=(0,i.s)(d);function h(e){const t=o.Children.toArray(e);if(1===t.length){const e=t[0];return b(e)?e:(0,c.y)(e)?o.createElement(p.Icon,{key:"icon"},e):o.createElement("span",{key:"text",className:f("text")},e)}{let e,n,s;const r=[];for(const i of t){const t=(0,c.y)(i),s=b(i);if(t||s)if(e||0!==r.length){if(!n&&0!==r.length){const e="icon-end",s="end";n=t?o.createElement(p.Icon,{key:e,side:s},i):o.cloneElement(i,{side:s})}}else{const n="icon-start",s="start";e=t?o.createElement(p.Icon,{key:n,side:s},i):o.cloneElement(i,{side:s})}else r.push(i)}return r.length>0&&(s=o.createElement("span",{key:"text",className:f("text")},r)),[e,n,s]}}},9042:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});const o=new Map;function s(e){e&&!o.has(e)&&(console.error(e),o.set(e,!0))}},70926:function(e,t,n){"use strict";n.d(t,{S:function(){return c},b:function(){return r}});var o=n(67294),s=n(30839);function c(e){return t=>{e&&[s.V.ENTER,s.V.SPACEBAR,s.V.SPACEBAR_OLD].includes(t.key)&&e(t)}}function r(e){return{onKeyDown:o.useMemo((()=>c(e)),[e])}}},18799:function(e,t,n){"use strict";n.r(t),n.d(t,{DropdownMenuComponent:function(){return c}});var o=n(85893),s=n(45527),c=function(e){var t=e.size,n=e.disabled;return(0,o.jsx)(s.h,{open:!0,size:t,disabled:n,items:[{action:function(){},text:"Rename"},{action:function(){},text:"Delete",theme:"danger"},{text:"More",items:[{action:function(){},text:"Mark as"},{action:function(){},text:"Copy"},{action:function(){},text:"Move to"}]}]})}},22908:function(){}}]);