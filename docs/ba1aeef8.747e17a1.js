(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(313)),c=n(315),o={title:"Stat / Large",keywords:["stat_card"]},u={unversionedId:"examples/stat-large",id:"examples/stat-large",isDocsHomePage:!1,title:"Stat / Large",description:"Create a stat card displaying a primary value, an auxiliary value and a caption.",source:"@site/docs/examples/stat-large.md",slug:"/examples/stat-large",permalink:"/wave/docs/examples/stat-large",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/stat-large.md",version:"current",sidebar:"someSidebar",previous:{title:"Stat / Small",permalink:"/wave/docs/examples/stat-small"},next:{title:"Stat / Gauge / Wide",permalink:"/wave/docs/examples/stat-wide-gauge"}},s=[],l={rightToc:s};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Create a stat card displaying a primary value, an auxiliary value and a caption."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+n(458).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom faker import Faker\n\nfrom synth import FakePercent\nfrom h2o_wave import site, ui\n\npage = site['/demo']\n\nfake = Faker()\nf = FakePercent()\nval, pc = f.next()\nc = page.add('example', ui.large_stat_card(\n    box='1 1 2 2',\n    title=fake.cryptocurrency_name(),\n    value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n    aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n    data=dict(qux=val, quux=pc),\n    caption=' '.join(fake.sentences()),\n))\npage.save()\n\nwhile True:\n    time.sleep(1)\n    val, pc = f.next()\n    c.data.qux = val\n    c.data.quux = pc\n    page.save()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(i.b)("a",{href:Object(c.a)("docs/examples/tags#stat_card")},"stat_card")))}p.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},314:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(314),a=n(316);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},316:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},458:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/stat-large-4434acbc0c05f2c331071c827076d7b0.png"}}]);