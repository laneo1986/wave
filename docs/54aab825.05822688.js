(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(313)),i=n(315),l={title:"Plot / Line / Labels/ Stroked",keywords:["plot"]},s={unversionedId:"examples/plot-line-labels-stroked",id:"examples/plot-line-labels-stroked",isDocsHomePage:!1,title:"Plot / Line / Labels/ Stroked",description:"Customize label rendering: add a subtle outline to labels to improve readability.",source:"@site/docs/examples/plot-line-labels-stroked.md",slug:"/examples/plot-line-labels-stroked",permalink:"/wave/docs/examples/plot-line-labels-stroked",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-line-labels-stroked.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Line / Labels",permalink:"/wave/docs/examples/plot-line-labels"},next:{title:"Plot / Line / Labels / Occlusion",permalink:"/wave/docs/examples/plot-line-labels-no-overlap"}},c=[],u={rightToc:c};function p(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Customize label rendering: add a subtle outline to labels to improve readability."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+n(396).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeTimeSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 50\nf = FakeTimeSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Labels, less messy',\n    data=data('date price', n),\n    plot=ui.plot([ui.mark(type='line', x_scale='time', x='=date', y='=price', y_min=0,\n                          label='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n                          label_fill_color='rgba(0,0,0,0.65)', label_stroke_color='#fff', label_stroke_size=2)])\n))\nv.data = [(t, x) for t, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}p.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},314:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){const e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(314),o=n(316);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},316:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},396:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-line-labels-stroked-8f085e306871e3c87d798b4c4206fc11.png"}}]);