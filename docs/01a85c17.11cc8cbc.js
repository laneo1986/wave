(window.webpackJsonp=window.webpackJsonp||[]).push([[4,33,96],{320:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),c=t.n(n),l=t(321),r=t(322);const s=()=>{const[e,a]=c.a.useState(!!window.localStorage.getItem("noticeRead"));return c.a.createElement("section",{className:"notice",style:{opacity:e?0:1}},c.a.createElement("div",null,c.a.createElement("p",null,"By using this website you agree to our use of cookies. "),c.a.createElement("a",{href:"https://www.h2o.ai/privacy/",target:"_blank"},"Read H2O.ai\u2019s privacy policy.")),c.a.createElement("span",{className:"notice__close",onClick:()=>{window.localStorage.setItem("noticeRead",!0),a(!0)}},"X"))};function o(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,s),c.a.createElement(l.a,e))}},57:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(319),r=t(317);a.default=function(e){const{tags:a}=e,t={};Object.keys(a).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e);t[a]=t[a]||[],t[a].push(e)}));const n=Object.entries(t).sort((([e],[a])=>e===a?0:e>a?1:-1)).map((([e,t])=>c.a.createElement("div",{key:e},c.a.createElement("h3",null,e),t.map((e=>c.a.createElement(r.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")"))),c.a.createElement("hr",null)))).filter((e=>null!=e));return c.a.createElement(l.a,{title:"Tags",description:"Blog Tags"},c.a.createElement("div",{className:"container margin-vert--lg"},c.a.createElement("div",{className:"row"},c.a.createElement("main",{className:"col col--8 col--offset-2"},c.a.createElement("h1",null,"Tags"),c.a.createElement("div",{className:"margin-vert--lg"},n)))))}}}]);