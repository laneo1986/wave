(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{295:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(313)),i=r(315),s={title:"Stat / Series / Small / Area",keywords:["series","stat_card"]},l={unversionedId:"examples/stat-small-series-area",id:"examples/stat-small-series-area",isDocsHomePage:!1,title:"Stat / Series / Small / Area",description:"Create a small stat card displaying a primary value and a series plot.",source:"@site/docs/examples/stat-small-series-area.md",slug:"/examples/stat-small-series-area",permalink:"/wave/docs/examples/stat-small-series-area",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/stat-small-series-area.md",version:"current",sidebar:"someSidebar",previous:{title:"Stat / Bar / Large",permalink:"/wave/docs/examples/stat-large-bar"},next:{title:"Stat / Series / Small / Interval",permalink:"/wave/docs/examples/stat-small-series-interval"}},c=[],u={rightToc:c};function p(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create a small stat card displaying a primary value and a series plot."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(464).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom faker import Faker\n\nfrom synth import FakeCategoricalSeries\nfrom h2o_wave import site, ui, data\n\npage = site['/demo']\n\ncolors = '$red $pink $blue $azure $cyan $teal $mint $green $lime $yellow $amber $orange $tangerine'.split()\ncurves = 'linear smooth step step-after step-before'.split()\nfake = Faker()\ncards = []\nfor i in range(len(curves)):\n    f = FakeCategoricalSeries()\n    cat, val, pc = f.next()\n    c = page.add(f'example{i}', ui.small_series_stat_card(\n        box=f'1 {i + 1} 1 1',\n        title=fake.cryptocurrency_name(),\n        value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n        data=dict(qux=val, quux=pc),\n        plot_category='foo',\n        plot_type='area',\n        plot_value='qux',\n        plot_color=colors[i],\n        plot_data=data('foo qux', -15),\n        plot_zero_value=0,\n        plot_curve=curves[i],\n    ))\n    cards.append((f, c))\npage.save()\n\nwhile True:\n    time.sleep(1)\n    for f, c in cards:\n        cat, val, pc = f.next()\n        c.data.qux = val\n        c.data.quux = pc\n        c.plot_data[-1] = [cat, val]\n    page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#series")},"series")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#stat_card")},"stat_card")))}p.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return r?a.a.createElement(d,s(s({ref:t},c),{},{components:r})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},314:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(314),a=r(316);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},316:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},464:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);