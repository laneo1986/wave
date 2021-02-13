(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(313)),i={title:"Meta / Theme"},c={unversionedId:"examples/meta-theme",id:"examples/meta-theme",isDocsHomePage:!1,title:"Meta / Theme",description:"Change the base color theme of the app.",source:"@site/docs/examples/meta-theme.md",slug:"/examples/meta-theme",permalink:"/wave/docs/examples/meta-theme",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/meta-theme.md",version:"current",sidebar:"someSidebar",previous:{title:"Meta / Redirect",permalink:"/wave/docs/examples/meta-redirect"},next:{title:"Meta / Tracking",permalink:"/wave/docs/examples/meta-tracking"}},l=[],m={rightToc:l};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Change the base color theme of the app."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(421).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, ui, main, app\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if not q.client.initialized:\n        q.page['meta'] = ui.meta_card(box='')\n        q.page['controls'] = ui.form_card(box='1 1 2 8', items=[\n            ui.text_xl('Form'),\n            ui.textbox(name='textbox', label='Textbox'),\n            ui.toggle(name='toggle', label='Toggle'),\n            ui.choice_group(name='choice_group', label='Choice group', choices=[\n                ui.choice(name=x, label=x) for x in ['Egg', 'Bacon', 'Spam']\n            ]),\n            ui.checklist(name='checklist', label='Checklist', choices=[\n                ui.choice(name=x, label=x) for x in ['Egg', 'Bacon', 'Spam']\n            ]),\n            ui.dropdown(name='dropdown', label='Dropdown', choices=[\n                ui.choice(name=x, label=x) for x in ['Egg', 'Bacon', 'Spam']\n            ]),\n            ui.slider(name='slider', label='Slider'),\n            ui.button(name='toggle_theme', label='Toggle Theme', primary=True)\n        ])\n        q.client.theme = 'default'\n        q.client.initialized = True\n\n    meta = q.page['meta']\n\n    if q.args.toggle_theme:\n        meta.theme = q.client.theme = 'neon' if q.client.theme == 'default' else 'default'\n\n    await q.page.save()\n")))}p.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),p=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||s[f]||o;return n?a.a.createElement(d,c(c({ref:t},m),{},{components:n})):a.a.createElement(d,c({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},421:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/meta-theme-10bd44137e899740746c3c331f4348c6.png"}}]);