(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return A}));var a=n(2),r=n(6),i=(n(0),n(313)),o=n(315),s={title:"Site / Async",keywords:["site"]},p={unversionedId:"examples/site-async",id:"examples/site-async",isDocsHomePage:!1,title:"Site / Async",description:"Update any page on a site from within an app using an AsyncSite instance.",source:"@site/docs/examples/site-async.md",slug:"/examples/site-async",permalink:"/wave/docs/examples/site-async",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/site-async.md",version:"current",sidebar:"someSidebar",previous:{title:"Background Tasks / Progress",permalink:"/wave/docs/examples/background-progress"},next:{title:"Graphics / Primitives",permalink:"/wave/docs/examples/graphics-primitives"}},c=[],u={rightToc:c};function A(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Update any page on a site from within an app using an ",Object(i.b)("inlineCode",{parentName:"p"},"AsyncSite")," instance."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+n(372).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from .synth import FakePercent\nfrom h2o_wave import Q, app, main, ui, AsyncSite\n\nsite = AsyncSite()\n\n# Grab a reference to the /stats page\nstats_page = site['/stats']\n\n# A flag to indicate whether to pause or resume updating the page at '/stats'\nupdate_stats = False\n\n\nasync def update_stats_page(q, page):\n    f = FakePercent()\n    card = page['example']\n    while update_stats:\n        await q.sleep(1)\n        price, percent = f.next()\n        card.data.price = price\n        card.data.percent = percent\n        card.progress = percent\n        await page.save()\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if not q.client.initialized:\n        # Set up up the page at /stats\n        stats_page.drop()  # Clear any existing page\n        stats_page['example'] = ui.wide_gauge_stat_card(\n            box='1 1 2 1',\n            title='Stats',\n            value='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            aux_value='={{intl percent style=\"percent\" minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n            plot_color='$red',\n            progress=0,\n            data=dict(price=0, percent=0),\n        )\n        await stats_page.save()\n\n        # Set up this app's UI\n        q.page['form'] = ui.form_card(box='1 1 -1 -1', items=[\n            ui.frame(path='/stats', height='110px'),\n            ui.button(name='toggle', label='Start updates', primary=True),\n        ])\n        await q.page.save()\n\n        q.client.initialized = True\n\n    if q.args.toggle:\n        global update_stats\n        update_stats = not update_stats\n        q.page['form'].items[1].button.label = 'Stop updates' if update_stats else 'Start updates'\n        await q.page.save()\n        await update_stats_page(q, stats_page)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(i.b)("a",{href:Object(o.a)("docs/examples/tags#site")},"site")))}A.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},A=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),A=u(n),g=a,d=A["".concat(o,".").concat(g)]||A[g]||f[g]||i;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},314:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},315:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(314),r=n(316);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},316:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},372:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);