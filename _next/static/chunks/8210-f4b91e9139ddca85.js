(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8210],{31671:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var r=n(7872);function o(e){return r.CK.includes(e)?"dark":"light"}},82331:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(31671),o=n(87231);function u(){return(0,r.M)((0,o.C)())}},87231:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n(73233);function o(){return(0,r.T)().themeValue}},71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;n(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(92648).Z,u=n(17273).Z,c=o(n(67294)),a=n(76273),i=n(22725),l=n(63462),f=n(21018),s=n(57190),d=n(71210),v=n(98684),p={};function y(e,t,n,r){if(e&&a.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var m=c.default.forwardRef((function(e,t){var n,o=e.href,m=e.as,g=e.children,C=e.prefetch,b=e.passHref,h=e.replace,x=e.shallow,k=e.scroll,_=e.locale,E=e.onClick,j=e.onMouseEnter,L=e.onTouchStart,M=e.legacyBehavior,R=void 0===M?!0!==Boolean(!1):M,P=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!R||"string"!==typeof n&&"number"!==typeof n||(n=c.default.createElement("a",null,n));var N=!1!==C,O=c.default.useContext(l.RouterContext),S=c.default.useContext(f.AppRouterContext);S&&(O=S);var w,B=c.default.useMemo((function(){var e=r(a.resolveHref(O,o,!0),2),t=e[0],n=e[1];return{href:t,as:m?a.resolveHref(O,m):n||t}}),[O,o,m]),K=B.href,T=B.as,Z=c.default.useRef(K),I=c.default.useRef(T);R&&(w=c.default.Children.only(n));var D=R?w&&"object"===typeof w&&w.ref:t,U=r(s.useIntersection({rootMargin:"200px"}),3),A=U[0],$=U[1],q=U[2],G=c.default.useCallback((function(e){I.current===T&&Z.current===K||(q(),I.current=T,Z.current=K),A(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[T,D,K,q,A]);c.default.useEffect((function(){var e=$&&N&&a.isLocalURL(K),t="undefined"!==typeof _?_:O&&O.locale,n=p[K+"%"+T+(t?"%"+t:"")];e&&!n&&y(O,K,T,{locale:t})}),[T,K,$,_,N,O]);var H={ref:G,onClick:function(e){R||"function"!==typeof E||E(e),R&&w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,l,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:l,scroll:i}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};f?c.default.startTransition(d):d()}}(e,O,K,T,h,x,k,_,Boolean(S),N)},onMouseEnter:function(e){R||"function"!==typeof j||j(e),R&&w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),!N&&S||a.isLocalURL(K)&&y(O,K,T,{priority:!0})},onTouchStart:function(e){R||"function"!==typeof L||L(e),R&&w.props&&"function"===typeof w.props.onTouchStart&&w.props.onTouchStart(e),!N&&S||a.isLocalURL(K)&&y(O,K,T,{priority:!0})}};if(!R||b||"a"===w.type&&!("href"in w.props)){var z="undefined"!==typeof _?_:O&&O.locale,F=O&&O.isLocaleDomain&&d.getDomainLocale(T,z,O.locales,O.domainLocales);H.href=F||v.addBasePath(i.addLocale(T,z,O&&O.defaultLocale))}return R?c.default.cloneElement(w,H):c.default.createElement("a",Object.assign({},P,H),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!c,f=r(o.useState(!1),2),s=f[0],d=f[1],v=r(o.useState(null),2),p=v[0],y=v[1];o.useEffect((function(){if(c){if(l||s)return;if(p&&p.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=a.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},i.push(n),a.set(n,t),t}(n),o=r.id,u=r.observer,c=r.elements;return c.set(e,t),u.observe(e),function(){if(c.delete(e),u.unobserve(e),0===c.size){u.disconnect(),a.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(p,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(r)}}}),[p,l,n,t,s]);var m=o.useCallback((function(){d(!1)}),[]);return[y,s,m]};var o=n(67294),u=n(9311),c="function"===typeof IntersectionObserver,a=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(92648).Z)(n(67294)),o=r.default.createContext(null);t.AppRouterContext=o;var u=r.default.createContext(null);t.LayoutRouterContext=u;var c=r.default.createContext(null);t.GlobalLayoutRouterContext=c;var a=r.default.createContext(null);t.TemplateContext=a},41851:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},Mz:function(){return u},t0:function(){return r}});var r=n(9792).Q2.Light,o="g-root",u=64},62136:function(e,t,n){"use strict";n.d(t,{W:function(){return p}});var r=n(67294),o=n(41851),u=n(89943),c=n(51037),a=n(67426),i=n(41663),l=n(17576),f=n(85326),s=n(52614),d=n(40232),v=n(3334),p=function(e){var t=e.isMobile,n=e.mapsContext,p=void 0===n?l.Cy:n,y=e.locale,m=void 0===y?{}:y,g=e.location,C=void 0===g?{}:g,b=e.analytics,h=void 0===b?{}:b,x=e.ssrConfig,k=void 0===x?{}:x,_=e.projectSettings,E=void 0===_?{}:_,j=e.theme,L=void 0===j?o.t0:j,M=e.children,R=e.image,P=void 0===R?{}:R,N=[r.createElement(v.N.Provider,{value:{theme:L}}),r.createElement(s.p.Provider,{value:E}),r.createElement(a.R.Provider,{value:m}),r.createElement(c.l.Provider,{value:P}),r.createElement(i.L.Provider,{value:C}),r.createElement(f.z.Provider,{value:Boolean(t)}),r.createElement(l.Eg.Provider,{value:p}),r.createElement(u.f.Provider,{value:h}),r.createElement(d.q.Provider,{value:{isServer:null===k||void 0===k?void 0:k.isServer}})].reduceRight((function(e,t){return r.cloneElement(t,{},e)}),M);return r.createElement(r.Fragment,null,N)}},89943:function(e,t,n){"use strict";n.d(t,{f:function(){return r}});var r=n(67294).createContext({})},51037:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});var r=n(67294).createContext({})},67426:function(e,t,n){"use strict";n.d(t,{R:function(){return u}});var r=n(67294),o=n(3528),u=r.createContext({lang:o.Uo.Ru,tld:".ru"})},41663:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var r=n(67294).createContext({})},17576:function(e,t,n){"use strict";n.d(t,{Cy:function(){return c},Eg:function(){return a},T:function(){return r},jQ:function(){return u}});var r,o=n(67294);!function(e){e.Yandex="yandex",e.Google="google"}(r||(r={}));var u={ru:"ru_RU",en:"en_US"},c={apiKey:"",scriptSrc:"",type:r.Yandex},a=o.createContext(c)},85326:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var r=n(67294).createContext(!1)},52614:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var r=n(67294).createContext({})},40232:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var r=n(67294).createContext({})},3334:function(e,t,n){"use strict";n.d(t,{N:function(){return u}});var r=n(67294),o={theme:n(41851).t0},u=r.createContext(o)},8362:function(e,t,n){"use strict";n.d(t,{J:function(){return y}});var r=n(97582),o=n(67294),u=n(828),c=n(58310);function a(e,t){return"d".concat(t?"-".concat(t):"","-").concat(e)}function i(e,t){return Object.keys(e).reduce((function(n,r){var o=r===c.ZR.All?"":"-".concat(r),u=e[r],a=u||t!==c.oK.Col?"-".concat(u):"";return n+" ".concat(t).concat(o).concat(a)}),"")}function l(e){return i(e,c.oK.Offset)}function f(e){return i(e,c.oK.Order)}function s(e,t){var n=(0,u.Z)(t===c.$1.None?[c.$1.None,c.$1.Block]:[c.$1.Block,c.$1.None],2),r=n[0],o=n[1];return"".concat(a(o)," ").concat(a(r,e))}function d(e){return"number"===typeof e?"".concat(c.oK.Col,"-").concat(e.toString()):i(e,c.oK.Col)}function v(e){return"d-flex ".concat(e)}function p(e){var t=e.className,n=void 0===t?"":t,r=e.sizes,o=e.offsets,u=e.orders,a=e.hidden,i=e.visible,p=e.alignSelf,y=e.justifyContent,m=e.reset;return[c.oK.Col,p,y&&v(y),r&&d(r),o&&l(o),u&&f(u),a&&s(a,c.$1.None),i&&s(i,c.$1.Block),m&&"col-reset",n].filter(Boolean).join(" ")}var y=(0,o.forwardRef)((function(e,t){var n=e.children,u=e.style,c=e.qa,a=e.role,i=(0,r.__rest)(e,["children","style","qa","role"]);return o.createElement("div",{ref:t,className:p(i),style:u,"data-qa":c,role:a},n)}));y.displayName="Col"},63857:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(67294),o=n(39291),u=(n(35625),n(74864),(0,o.Ge)("Grid")),c=function(e){var t=e.debug,n=e.children,o=e.className,c=e.style,a=e.containerClass,i=void 0===a?"":a;return r.createElement("div",{style:c,className:u({debug:t},o)},r.createElement("div",{className:"container-fluid ".concat(i)},n))}},31808:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});var r=n(67294),o=(0,r.forwardRef)((function(e,t){var n=e.className,o=e.justifyContent,u=e.alignItems,c=e.noGutter,a=e.style,i=e.children,l=(0,r.useCallback)((function(){return["row",n,o,u,c&&"no-gutter"].filter(Boolean).join(" ")}),[n,o,u,c]);return r.createElement("div",{ref:t,className:l(),style:a},i)}));o.displayName="Row"},58310:function(e,t,n){"use strict";var r,o,u,c,a,i,l;n.d(t,{$1:function(){return i},K0:function(){return l},Oy:function(){return o},ZR:function(){return u},oK:function(){return a}}),function(e){e.Start="justify-content-start",e.Center="justify-content-center",e.End="justify-content-end",e.Around="justify-content-around",e.Between="justify-content-between"}(r||(r={})),function(e){e.Start="align-items-start",e.Center="align-items-center",e.End="align-items-end"}(o||(o={})),function(e){e.Sm="sm",e.Md="md",e.Lg="lg",e.Xl="xl",e.All="all"}(u||(u={})),function(e){e.Start="align-self-start",e.Center="align-self-center",e.End="align-self-end"}(c||(c={})),function(e){e.Col="col",e.Offset="offset",e.Order="order"}(a||(a={})),function(e){e.None="none",e.Block="block"}(i||(i={})),function(e){e.First="first",e.Last="last"}(l||(l={}))},9792:function(e,t,n){"use strict";n.d(t,{IZ:function(){return a},Q2:function(){return r},hD:function(){return c}});var r,o,u=n(14924);!function(e){e.Light="light",e.Dark="dark"}(r||(r={}));var c,a;o={},(0,u.Z)(o,r.Light,"Light"),(0,u.Z)(o,r.Dark,"Dark");!function(e){e.Default="default-event",e.Play="play",e.Stop="stop"}(c||(c={})),function(e){e.ShareButton="share-button-click",e.Button="button-click",e.CardBase="card-base-click",e.Link="link-click",e.ReactPlayerControls="react-player-controls-click",e.YandexFormSubmit="yandex-form-submit",e.HubspotFormSubmit="hubspot-form-submit",e.QuoteButton="quote-button-click",e.BackLink="back-link-click",e.Breadcrumb="breadcrumb-click",e.VideoPreview="video-preview-click"}(a||(a={}))},39291:function(e,t,n){"use strict";n.d(t,{A7:function(){return u},Ge:function(){return a},Ws:function(){return i},cn:function(){return c}});var r=n(81504),o=n(41851),u="pc-",c=(0,r.withNaming)({e:"__",m:"_"}),a=(0,r.withNaming)({n:u,e:"__",m:"_"}),i=c(o.H0)},74864:function(){},35625:function(){},9008:function(e,t,n){e.exports=n(5443)},41664:function(e,t,n){e.exports=n(48418)},11163:function(e,t,n){e.exports=n(90387)}}]);