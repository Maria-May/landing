(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9815],{81372:function(e,t,n){"use strict";var o=n(67294);t.Z=e=>o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.134 2.994 2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0Zm3.03-.75c-.962-1.665-3.366-1.665-4.328 0L.919 10.749c-.964 1.666.239 3.751 2.164 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751l-4.917-8.505ZM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5Zm1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",clipRule:"evenodd"}))},58405:function(e,t,n){"use strict";var o=n(67294);t.Z=e=>o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))},5378:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var o=n(67294),r=n(32782),a=n(42087);n(26666);const l=(0,r.Ge)("link"),i=o.forwardRef((function({view:e="normal",visitable:t,href:n,target:r,rel:i,title:c,children:s,extraProps:u,onClick:d,onFocus:f,onBlur:p,id:m,style:v,className:h,qa:g},b){const C={title:c,onClick:d,onClickCapture:o.useCallback((e=>{a.P.publish({componentId:"Link",eventId:"click",domEvent:e})}),[]),onFocus:f,onBlur:p,id:m,style:v,className:l({view:e,visitable:t},h),"data-qa":g},y="_blank"!==r||i?i:"noopener noreferrer";return o.createElement("a",Object.assign({},u,C,{ref:b,href:n,target:r,rel:y}),s)}))},85956:function(e,t,n){"use strict";n.d(t,{J:function(){return y}});var o=n(67294),r=n(58405),a=n(97387),l=n(43671),i=n(51960),c=n(8682),s=n(9042);const u=(0,n(32782).Ge)("popover"),d=(e,t=!1)=>{switch(e){case"special":return t?"normal-contrast":"flat-contrast";case"announcement":return t?"normal-contrast":"outlined";default:return t?"normal":"flat"}},f=({theme:e,tooltipActionButton:t,tooltipCancelButton:n})=>t||n?o.createElement("div",{className:u("tooltip-buttons")},t&&o.createElement(a.z,{view:d(e,!0),width:"max",onClick:t.onClick,className:u("tooltip-button")},t.text),n&&o.createElement(a.z,{view:d(e,!1),width:"max",onClick:n.onClick,className:u("tooltip-button")},n.text)):null,p=({secondary:e,htmlContent:t,content:n,className:r})=>t||n?t?o.createElement("div",{className:u("tooltip-content",{secondary:e},r),dangerouslySetInnerHTML:{__html:t}}):n?o.createElement("div",{className:u("tooltip-content",{secondary:e},r)},n):null:null;var m=n(5378);const v=({links:e})=>0===e.length?null:o.createElement("div",{className:u("tooltip-links")},e.map(((e,t)=>{const{text:n,href:r,target:a="_blank",onClick:l}=e;return o.createElement(o.Fragment,{key:`link-${t}`},o.createElement(m.r,{href:r,target:a,onClick:l,className:u("tooltip-link")},n),o.createElement("br",null))})));var h=n(70926);const g=({open:e,openOnHover:t,disabled:n,className:r,openTooltip:a,closeTooltip:l,closedManually:i,onClick:c,children:s})=>{const u=async o=>{if(n||e&&t)return;if(!(!c||await c(o)))return;e?(l(),i.current=!0):(a(),i.current=!1)},{onKeyDown:d}=(0,h.b)(u);return"function"===typeof s?o.createElement(o.Fragment,null,s({onClick:u,onKeyDown:d})):o.createElement("div",{className:r,onClick:u,onKeyDown:c?d:void 0},s)};var b=n(40338);const C=({initialOpen:e,disabled:t,autoclosable:n,onOpenChange:r,delayOpening:a,delayClosing:l,behavior:i,shouldBeOpen:c})=>{const s=o.useRef(null),u=o.useRef(null),[d,f]=o.useState(e),p=o.useCallback((()=>{s.current&&(clearTimeout(s.current),s.current=null)}),[]),m=o.useCallback((()=>{u.current&&(clearTimeout(u.current),u.current=null)}),[]);o.useEffect((()=>()=>{p(),m()}),[m,p]);const v=o.useCallback((e=>{f(e),c.current=e,null===r||void 0===r||r(e)}),[r,c]),h=o.useCallback((()=>{p(),v(!0)}),[v,p]),g=o.useCallback((()=>{m(),v(!1)}),[v,m]);o.useEffect((()=>{t&&g()}),[t,g]),((e,t)=>{const n=o.useRef(!0);o.useEffect((()=>{n.current?n.current=!1:e()}),t)})((()=>{n&&!c.current&&g()}),[n,g,c]);const[C,y]=b.q[i],E=o.useCallback((()=>{s.current=setTimeout((()=>{s.current=null,h()}),null!==a&&void 0!==a?a:C)}),[C,a,h]),k=o.useCallback((()=>{u.current=setTimeout((()=>{u.current=null,g()}),null!==l&&void 0!==l?l:y)}),[g,y,l]);return{isOpen:d,closingTimeout:u,openTooltip:h,openTooltipDelayed:E,unsetOpeningTimeout:p,closeTooltip:g,closeTooltipDelayed:k,unsetClosingTimeout:m}};n(7775);const y=o.forwardRef((function({initialOpen:e=!1,disabled:t=!1,autoclosable:n=!0,openOnHover:d=!0,delayOpening:m,delayClosing:h,behavior:y=b.x.Delayed,placement:E,offset:k={},tooltipOffset:w,tooltipClassName:x,tooltipContentClassName:N,theme:O="info",size:T="s",hasArrow:B=!0,hasClose:z=!1,className:R,children:S,title:I,content:M,htmlContent:P,contentClassName:F,links:A,forceLinksAppearance:D=!1,tooltipActionButton:q,tooltipCancelButton:_,onOpenChange:j,onCloseClick:Z,onClick:$,anchorRef:L,strategy:K,qa:G,disablePortal:J=!1,tooltipId:H,focusTrap:U,autoFocus:W,restoreFocusRef:V,modifiers:X},Q){const Y=(0,c.g)(),ee=o.useRef(null),te=o.useRef(!1),ne=o.useRef(e),{isOpen:oe,closingTimeout:re,openTooltip:ae,openTooltipDelayed:le,unsetOpeningTimeout:ie,closeTooltip:ce,closeTooltipDelayed:se,unsetClosingTimeout:ue}=C({initialOpen:e,disabled:t,autoclosable:n,onOpenChange:j,delayOpening:m,delayClosing:h,behavior:y,shouldBeOpen:ne}),de=o.useMemo((()=>E||("rtl"===Y?["left","bottom"]:["right","bottom"])),[Y,E]);o.useImperativeHandle(Q,(()=>({openTooltip:ae,closeTooltip:ce})),[ae,ce]);const fe=Boolean(I),pe=o.createElement(i.G,{id:H,role:d?"tooltip":"dialog",strategy:K,anchorRef:L||ee,className:u("tooltip",{theme:O,size:T,"with-close":z,"force-links-appearance":D},x),contentClassName:u("tooltip-popup-content",N),open:oe,placement:de,hasArrow:B,offset:w,onClose:L?void 0:ce,qa:G?`${G}-tooltip`:"",disablePortal:J,focusTrap:U,autoFocus:W,restoreFocus:!0,restoreFocusRef:V||ee,modifiers:X},o.createElement(o.Fragment,null,I&&o.createElement("h3",{className:u("tooltip-title")},I),o.createElement(p,{secondary:!!fe&&"announcement"!==O,content:M,htmlContent:P,className:F}),A&&o.createElement(v,{links:A}),o.createElement(f,{theme:O,tooltipActionButton:q,tooltipCancelButton:_}),z&&o.createElement("div",{className:u("tooltip-close")},o.createElement(a.z,{size:"s",view:"flat-secondary",onClick:async e=>{ce(),null===Z||void 0===Z||Z(e)},extraProps:{"aria-label":"Close"}},o.createElement(l.J,{data:r.Z,size:16})))));if(L)return pe;const me=()=>{ue(),oe||t||te.current?ne.current=!0:le()},ve=()=>{!n||te.current||re.current?ne.current=!1:(ie(),se()),te.current=!1};return!k||"number"!==typeof k.top&&"number"!==typeof k.left||(0,s.O)('[Popover] Physical names (top, left) of "offset" property are deprecated. Use logical names (block, inline) instead.'),o.createElement("div",{ref:ee,className:u({disabled:t},R),onMouseEnter:d?me:void 0,onMouseLeave:d?ve:void 0,onFocus:d?me:void 0,onBlur:d?ve:void 0,style:{top:k.top,left:k.left,insetBlockStart:k.block,insetInlineStart:k.inline},"data-qa":G},o.createElement(g,{closeTooltip:ce,openTooltip:ae,open:oe,openOnHover:d,className:u("handler"),disabled:t,onClick:$,closedManually:te},S),pe)}));y.displayName="Popover"},40338:function(e,t,n){"use strict";var o;n.d(t,{q:function(){return r},x:function(){return o}}),function(e){e.Immediate="immediate",e.Delayed="delayed",e.DelayedClosing="delayedClosing"}(o||(o={}));const r={[o.Immediate]:[0,0],[o.Delayed]:[300,300],[o.DelayedClosing]:[0,300]}},23825:function(e,t,n){"use strict";n.d(t,{o:function(){return x}});var o=n(67294),r=n(81372),a=n(59505),l=n(77322),i=n(62227),c=n(59854),s=n.n(c),u=n(23493),d=n.n(u);function f(e,t){const[n,r]=o.useState({width:0,height:0});return o.useLayoutEffect((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const t=new ResizeObserver(d()((e=>{if(!Array.isArray(e))return;const t=e[0];if(t.borderBoxSize){const e=t.borderBoxSize[0]?t.borderBoxSize[0]:t.borderBoxSize;r({width:s()(e.inlineSize,2),height:s()(e.blockSize,2)})}else{const e=t.target;r({width:s()(e.offsetWidth,2),height:s()(e.offsetHeight,2)})}}),16));return t.observe(e.current),()=>{t.disconnect()}}),[e,t]),n}var p=n(43671),m=n(85956),v=n(32782),h=n(90553),g=n(13079),b=n(87948);const C=(0,v.Ge)("text-input"),y=o.forwardRef((function({placement:e,children:t,onClick:n},r){return t?o.createElement("div",{ref:r,className:C("additional-content",{placement:e}),onClick:n},t):null})),E=(0,v.Ge)("text-input");function k(e){const{controlProps:t,controlRef:n,type:r,name:a,id:l,tabIndex:i,autoComplete:c,placeholder:s,value:u,defaultValue:d,autoFocus:f,disabled:p,onChange:m,onFocus:v,onBlur:h,onKeyDown:g,onKeyUp:b,onKeyPress:C}=e;return o.createElement("input",Object.assign({},t,{ref:n,className:E("control",{type:"input"},t.className),type:r,name:a,id:l,tabIndex:i,placeholder:s,value:u,defaultValue:d,autoFocus:f,autoComplete:c,onChange:m,onFocus:v,onBlur:h,onKeyDown:g,onKeyUp:b,onKeyPress:C,disabled:null!==p&&void 0!==p?p:t.disabled}))}n(81346);const w=(0,v.Ge)("text-input"),x=o.forwardRef((function(e,t){const{view:n="normal",size:c="m",pin:s="round-round",name:u,value:d,defaultValue:v,label:C,disabled:E=!1,hasClear:x=!1,error:N,errorMessage:O,errorPlacement:T="outside",validationState:B,autoComplete:z,id:R,tabIndex:S,style:I,className:M,qa:P,controlProps:F,leftContent:A,rightContent:D,startContent:q=A,endContent:_=D,note:j,onUpdate:Z,onChange:$}=e,{errorMessage:L,errorPlacement:K,validationState:G}=(0,b.II)({error:N,errorMessage:O,errorPlacement:T,validationState:B}),[J,H]=(0,a.z)(d,null!==v&&void 0!==v?v:"",Z),U=o.useRef(null),W=(0,l.c)(e.controlRef,U),V=o.useRef(null),X=o.useRef(null),Q=(0,b.O_)(G),Y=Boolean(C),ee="invalid"===G&&Boolean(L)&&"outside"===K,te="invalid"===G&&Boolean(L)&&"inside"===K,ne=Boolean(x&&!E&&J),oe=Boolean(q),re=Boolean(_),ae=Y&&!R&&!u&&"undefined"===typeof z,le=(0,i.u)(),ie=Y?R||le:R,ce=f(Y?V:null,c),se=f(oe?X:null,c),ue=(0,i.u)(),de=(0,i.u)(),fe=[null===F||void 0===F?void 0:F["aria-describedby"],j?de:void 0,ee?ue:void 0].filter(Boolean).join(" "),pe=Object.assign(Object.assign({},F),{style:Object.assign(Object.assign({},null===F||void 0===F?void 0:F.style),Y&&ce.width?{paddingInlineStart:`${ce.width}px`}:{}),"aria-invalid":"invalid"===G||void 0,"aria-describedby":fe||void 0}),me={id:ie,tabIndex:S,name:u,onChange(e){H(e.target.value),$&&$(e)},autoComplete:ae?"off":(0,b.xp)(z),controlProps:pe},ve=e=>{var t,n;const o=e.currentTarget.contains(document.activeElement),r=Boolean(null===(t=document.getSelection())||void 0===t?void 0:t.toString());o||r||null===(n=U.current)||void 0===n||n.focus()};return o.createElement("span",{ref:t,style:I,className:w({view:n,size:c,disabled:E,state:Q,pin:"clear"===n?void 0:s,"has-clear":ne,"has-start-content":oe,"has-end-content":ne||re},M),"data-qa":P},o.createElement("span",{className:w("content")},oe&&o.createElement(y,{ref:X,placement:"start",onClick:ve},q),Y&&o.createElement("label",{ref:V,style:{insetInlineStart:oe?se.width:void 0,maxWidth:`calc(50% - ${se.width}px)`},className:w("label"),title:C,htmlFor:ie},`${C}`),o.createElement(k,Object.assign({},e,me,{controlRef:W})),ne&&o.createElement(h.C,{size:(0,h.X)(c),onClick:e=>{H("");const t=U.current;if(t){t.focus();const n=Object.create(e);n.target=t,n.currentTarget=t,t.value="",$&&$(n)}},className:w("clear",{size:c})}),re&&o.createElement(y,{placement:"end",onClick:ve},_),te&&o.createElement(m.J,{content:L},o.createElement("span",{"data-qa":b.eP},o.createElement(p.J,{data:r.Z,className:w("error-icon"),size:"s"===c?12:16})))),o.createElement(g.Z,{note:j,errorMessage:ee?L:null,noteId:de,errorMessageId:ue}))}))},90553:function(e,t,n){"use strict";n.d(t,{C:function(){return m},X:function(){return p}});var o=n(67294),r=n(58405),a=n(97387),l=n(43671),i=n(32782),c=n(52619),s=JSON.parse('{"label_clear-button":"Clear"}'),u=JSON.parse('{"label_clear-button":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}'),d=(0,c.e)({en:s,ru:u},`${i.A7}clear-button`);n(58511);const f=(0,i.Ge)("clear-button"),p=e=>{switch(e){case"s":return"xs";case"m":return"s";case"l":return"m";case"xl":return"l";default:throw new Error(`Unknown text input size "${e}"`)}},m=e=>{const{size:t,className:n,onClick:i}=e;return o.createElement(a.z,{size:t,className:f(null,n),onClick:i,extraProps:{"aria-label":d("label_clear-button")}},o.createElement(l.J,{data:r.Z,size:16}))}},13079:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(67294),r=n(32782),a=n(87948);n(55633);const l=(0,r.Ge)("outer-additional-content"),i=({errorMessage:e,note:t,noteId:n,errorMessageId:r})=>e||t?o.createElement("div",{className:l()},e&&o.createElement("div",{className:l("error"),id:r,"data-qa":a.fz},e),t&&o.createElement("div",{className:l("note"),id:n},t)):null},87948:function(e,t,n){"use strict";n.d(t,{II:function(){return i},O_:function(){return l},eP:function(){return r},fz:function(){return o},xp:function(){return a}});const o="control-error-message-qa",r="control-error-icon-qa",a=e=>"boolean"===typeof e?e?"on":"off":e,l=e=>"invalid"===e?"error":void 0,i=e=>{const{error:t,errorMessage:n,errorPlacement:o,validationState:r}=e;let a,l;return"string"===typeof t&&(a=t),n&&(a=n),("invalid"===r||Boolean(t))&&(l="invalid"),{errorMessage:a,errorPlacement:o,validationState:l}}},59505:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var o=n(67294);function r(e,t,n){const[r,a]=o.useState(null!==e&&void 0!==e?e:t),l=o.useRef(void 0!==e),i=void 0!==e;o.useEffect((()=>{const e=l.current;e!==i&&console.error(`[useControlledState] A component changed from ${e?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}.`),l.current=i}),[i]);let c=i?e:r;const s=o.useCallback(((e,...t)=>{Object.is(c,e)||null===n||void 0===n||n(e,...t),i||(c=e,a(e))}),[i,n,c]);return[c,s]}},29932:function(e){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},80531:function(e,t,n){var o=n(62705),r=n(29932),a=n(1469),l=n(33448),i=o?o.prototype:void 0,c=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(l(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},27561:function(e,t,n){var o=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},89179:function(e,t,n){var o=n(55639),r=n(40554),a=n(14841),l=n(79833),i=o.isFinite,c=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=a(e),(n=null==n?0:c(r(n),292))&&i(e)){var o=(l(e)+"e").split("e"),s=t(o[0]+"e"+(+o[1]+n));return+((o=(l(s)+"e").split("e"))[0]+"e"+(+o[1]-n))}return t(e)}}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var o=n(13218),r=n(7771),a=n(14841),l=Math.max,i=Math.min;e.exports=function(e,t,n){var c,s,u,d,f,p,m=0,v=!1,h=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=c,o=s;return c=s=void 0,m=t,d=e.apply(o,n)}function C(e){return m=e,f=setTimeout(E,t),v?b(e):d}function y(e){var n=e-p;return void 0===p||n>=t||n<0||h&&e-m>=u}function E(){var e=r();if(y(e))return k(e);f=setTimeout(E,function(e){var n=t-(e-p);return h?i(n,u-(e-m)):n}(e))}function k(e){return f=void 0,g&&c?b(e):(c=s=void 0,d)}function w(){var e=r(),n=y(e);if(c=arguments,s=this,p=e,n){if(void 0===f)return C(p);if(h)return clearTimeout(f),f=setTimeout(E,t),b(p)}return void 0===f&&(f=setTimeout(E,t)),d}return t=a(t)||0,o(n)&&(v=!!n.leading,u=(h="maxWait"in n)?l(a(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),m=0,c=p=s=f=void 0},w.flush=function(){return void 0===f?d:k(r())},w}},1469:function(e){var t=Array.isArray;e.exports=t},7771:function(e,t,n){var o=n(55639);e.exports=function(){return o.Date.now()}},59854:function(e,t,n){var o=n(89179)("round");e.exports=o},23493:function(e,t,n){var o=n(23279),r=n(13218);e.exports=function(e,t,n){var a=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(n)&&(a="leading"in n?!!n.leading:a,l="trailing"in n?!!n.trailing:l),o(e,t,{leading:a,maxWait:t,trailing:l})}},18601:function(e,t,n){var o=n(14841),r=1/0;e.exports=function(e){return e?(e=o(e))===r||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},40554:function(e,t,n){var o=n(18601);e.exports=function(e){var t=o(e),n=t%1;return t===t?n?t-n:t:0}},14841:function(e,t,n){var o=n(27561),r=n(13218),a=n(33448),l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var n=i.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):l.test(e)?NaN:+e}},79833:function(e,t,n){var o=n(80531);e.exports=function(e){return null==e?"":o(e)}},26666:function(){},7775:function(){},81346:function(){},58511:function(){},55633:function(){}}]);