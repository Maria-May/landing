(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{74418:function(e,t,n){"use strict";n.d(t,{E:function(){return d}});var a=n(67294),r=n(62555),u=n(32782),l=n(47684),i=n(69110);let o=(0,u.Ge)("radio-button"),c=a.forwardRef(function(e,t){let{disabled:n=!1,content:r,children:u,title:c}=e,{checked:s,inputProps:d}=(0,l.x)(e),f=r||u,p=(0,i.y)(f);return a.createElement("label",{className:o("option",{disabled:n,checked:s}),ref:t,title:c},a.createElement("input",Object.assign({},d,{className:o("option-control")})),a.createElement("span",{className:o("option-outline")}),f&&a.createElement("span",{className:o("option-text",{icon:p})},f))});n(93709);let s=(0,u.Ge)("radio-button"),d=a.forwardRef(function(e,t){let{size:n="m",width:u,style:l,className:i,qa:o,children:d}=e,f=e.options;f||(f=a.Children.toArray(d).map(({props:e})=>({value:e.value,content:e.content||e.children,disabled:e.disabled,title:e.title})));let p=a.useRef(null),v=a.useRef(),b=a.useCallback(e=>{if(!e)return;let t=p.current;if(!t)return;let n=v.current;if(n&&n!==e){let a=e=>{t.style.left=`${e.offsetLeft}px`,t.style.width=`${e.offsetWidth}px`};a(n),t.hidden=!1,a(e)}v.current=e},[]),m=a.useCallback(e=>{e.currentTarget.hidden=!0},[]),{containerProps:h,optionsProps:g}=(0,r.a)(Object.assign(Object.assign({},e),{options:f}));return a.createElement("div",Object.assign({},h,{ref:t,style:l,className:s({size:n,width:u},i),"data-qa":o}),a.createElement("div",{ref:p,className:s("plate"),onTransitionEnd:m,hidden:!0}),g.map(e=>a.createElement(c,Object.assign({},e,{key:e.value,ref:e.checked?b:void 0}))))});d.Option=c},47684:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var a=n(67294),r=n(62227),u=n(77322),l=n(42087);function i({name:e,value:t,checked:n,defaultChecked:i,disabled:o,controlRef:c,controlProps:s,onUpdate:d,onChange:f,onFocus:p,onBlur:v,id:b}){let m=(0,r.u)(),h=a.useRef(null),[g,k]=a.useState(null!=i&&i),y="boolean"==typeof n,E=y?n:g,C=(0,u.c)(c,h),j=Object.assign(Object.assign({},s),{name:e||m,value:t,id:b,onFocus:p,onBlur:v,disabled:o,type:"radio",onChange:e=>{y||k(e.target.checked),f&&f(e),d&&d(e.target.checked)},onChangeCapture:e=>{l.P.publish({componentId:"Radio",eventId:"click",domEvent:e})},checked:n,defaultChecked:i,"aria-checked":E,ref:C});return{checked:E,inputProps:j}}},62555:function(e,t,n){"use strict";n.d(t,{a:function(){return u}});var a=n(67294),r=n(62227);function u(e){var t,n;let{name:u,value:l,defaultValue:i,options:o=[],disabled:c,onUpdate:s,onChange:d,onFocus:f,onBlur:p}=e,v=(0,r.u)(),[b,m]=a.useState(null!=i?i:null===(n=null===(t=o[0])||void 0===t?void 0:t.value)||void 0===n?void 0:n.toString()),h=void 0!==l,g=h?l:b,k=a.useCallback(e=>{h||m(e.target.value),d&&d(e),s&&s(e.target.value)},[h,s,d]);return{containerProps:{role:"radiogroup","aria-disabled":c,"aria-label":e["aria-label"],"aria-labelledby":e["aria-labelledby"]},optionsProps:o.map(e=>({name:u||v,value:e.value,content:e.content,title:e.title,checked:g===String(e.value),disabled:c||e.disabled,onChange:k,onFocus:f,onBlur:p}))}}},52036:function(e,t,n){"use strict";function a(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{k:function(){return a}})},77322:function(e,t,n){"use strict";n.d(t,{c:function(){return u}});var a=n(67294),r=n(52036);function u(...e){return a.useMemo(()=>e.every(e=>null==e)?null:t=>{for(let n of e)(0,r.k)(n,t)},e)}},62227:function(e,t,n){"use strict";n.d(t,{u:function(){return l}});var a=n(67294),r=n(32782),u=n(69110);let l="function"==typeof a.useId?function(){return`${r.A7}${a.useId()}`}:function(){let e=a.useRef();return void 0===e.current&&(e.current=(0,u.x)()),e.current}},39295:function(e,t,n){"use strict";n.r(t),n.d(t,{RadioButtonComponent:function(){return l}});var a=n(85893),r=n(74418);let u=[{value:"Value 1",content:"Value 1"},{value:"Value 2",content:"Value 2"},{value:"Value 3",content:"Value 3"}],l=e=>{let{size:t,width:n,disabled:l}=e;return(0,a.jsx)(r.E,{size:t,width:n,disabled:l,options:u})}},93709:function(){}}]);