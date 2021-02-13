(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{313:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},314:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(314),a=n(316);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},316:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},352:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/header-0cdf3777b66e47f9e5320eee81ac5e10.png"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(313)),i=n(315),c={title:"Header",keywords:["header"]},u={unversionedId:"examples/header",id:"examples/header",isDocsHomePage:!1,title:"Header",description:"Use a header card to display a page header.",source:"@site/docs/examples/header.md",slug:"/examples/header",permalink:"/wave/docs/examples/header",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/header.md",version:"current",sidebar:"someSidebar",previous:{title:"Breadcrumbs",permalink:"/wave/docs/examples/breadcrumbs"},next:{title:"Routing",permalink:"/wave/docs/examples/routing"}},s=[],l={rightToc:s};function d(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use a header card to display a page header."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(352).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\npage['header1'] = ui.header_card(\n    box='1 1 3 1',\n    title='The Amazing Gonkulator',\n    subtitle='And now for something completely different!',\n)\npage['header2'] = ui.header_card(\n    box='1 2 3 1',\n    title='The Amazing Gonkulator',\n    subtitle='And now for something completely different!',\n    icon='Design',\n)\npage['header3'] = ui.header_card(\n    box='1 3 3 1',\n    title='The Amazing Gonkulator',\n    subtitle='And now for something completely different!',\n    icon='Cycling',\n    icon_color='$violet',\n)\npage['header4'] = ui.header_card(\n    box='1 4 3 1',\n    title='The Amazing Gonkulator',\n    subtitle='And now for something completely different!',\n    icon='ExploreData',\n    icon_color='$red',\n)\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#header")},"header")))}d.isMDXComponent=!0}}]);