(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4345:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5459)}])},8346:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(9496))&&a.__esModule?a:{default:a},l=r(7588),c=r(7261),u=r(3710);var s={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=i.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],k=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=w&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,b,r,n]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:i}))}(e,n,d,p,m,v,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:n&&n.locale,_=n&&n.isLocaleDomain&&l.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);N.href=_||l.addBasePath(l.addLocale(p,E,n&&n.defaultLocale))}return i.default.cloneElement(t,N)};t.default=d},3710:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(t?t.current:null),2),m=h[0],v=h[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]);return a.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[y,d]};var a=r(9496),i=r(4611),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},5459:function(e,t,r){"use strict";r.r(t);var n=r(4637),o=(r(8835),r(8337),r(8056),r(8107),r(2975)),a=r(195);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps,i=[{title:"Home",href:"/"},{title:"Blog",href:"/blog"},{title:"Talks",href:"/talks"},{title:"Contact",href:"/contact"}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{defer:!0,"data-domain":"mahdikarimi.com",src:"https://plausible.robio.ir/js/script.js"}),(0,n.jsxs)("section",{className:"container px-4 md:px-4 lg:px-28 mx-auto flex flex-col w-full items-start",children:[(0,n.jsxs)("header",{className:"w-full container py-8 px-4 flex items-center justify-center md:justify-between",children:[(0,n.jsxs)("section",{className:"flex items-center md:flex-row flex-col gap-2 md:gap-4",children:[(0,n.jsx)("img",{role:"img",src:"https://github.com/mhdi-kr.png",height:128,width:128,alt:"Mahdi Karimi - Software engineer",className:"rounded-full"}),(0,n.jsxs)("section",{className:"text-center md:text-left",children:[(0,n.jsx)("h1",{className:"md:text-5xl font-bold",children:"Mahdi Karimi"}),(0,n.jsx)("span",{className:"md:text-3xl font-thin",children:"Software Engineer"})]})]}),(0,n.jsx)("nav",{className:"hidden md:block",role:"navigation",children:(0,n.jsx)("ul",{className:"flex gap-3",children:i.map((function(e){return(0,n.jsx)(o.default,{passHref:!0,href:"".concat(e.href),children:(0,n.jsx)("li",{tabIndex:1,className:"dark:bg-zinc-900 px-2 bg-zinc-50 transition-all dark:hover:bg-zinc-700 hover:shadow-md rounded mb-2 py-2 cursor-pointer",children:e.title})},e.title)}))})})]}),(0,n.jsx)("main",{className:"w-full container py-8 px-4",children:(0,n.jsx)(t,l({},r))}),(0,n.jsx)("nav",{className:"flex md:hidden w-full items-center justify-center mb-3",role:"navigation",children:(0,n.jsx)("ul",{className:"flex flex-col gap-3 w-full",children:i.map((function(e){return(0,n.jsx)(o.default,{passHref:!0,href:"".concat(e.href),children:(0,n.jsx)("li",{tabIndex:1,className:"dark:bg-zinc-800 text-center p-2 w-full bg-zinc-50 transition-all dark:hover:bg-zinc-700 hover:shadow-md rounded cursor-pointer",children:e.title})},e.title)}))})})]})]})}},8337:function(){},8056:function(){},8835:function(){},8107:function(){},2975:function(e,t,r){e.exports=r(8346)},195:function(e,t,r){e.exports=r(204)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(4345),t(7261)}));var r=e.O();_N_E=r}]);