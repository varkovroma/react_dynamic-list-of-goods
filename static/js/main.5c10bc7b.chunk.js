(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e.n(o),r=e(4),i=e(1),u=(e(9),e(0)),a=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){var n=t.color,e=t.id,o=t.name;return Object(u.jsx)("li",{"data-cy":"good",style:{color:n},children:o},e)}))})};function s(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d;!function(t){t[t.ALL=0]="ALL",t[t.GETFIRST5=1]="GETFIRST5",t[t.GETRED=2]="GETRED"}(d||(d={}));var l=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=function(t){switch(t){case d.ALL:s().then((function(t){return o(t)}));break;case d.GETFIRST5:s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){return o(t)}));break;case d.GETRED:s().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return o(t)}))}};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return c(d.ALL)},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return c(d.GETFIRST5)},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return c(d.GETRED)},children:"Load red goods"}),Object(u.jsx)(a,{goods:e})]})};c.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.5c10bc7b.chunk.js.map