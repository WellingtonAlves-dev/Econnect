(this["webpackJsonpelectron-react"]=this["webpackJsonpelectron-react"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),i=n.n(s),o=(n(9),n(3)),a=n.p+"static/media/1.9af09a42.png",j=n.p+"static/media/2.8f8b6277.png",d=n.p+"static/media/3.9311ef52.gif",p=n(0),u=window.require("portscanner"),b=(window.require("node-notifier"),window.require("path"),function(e){var t=e.servidorInfo,n=Object(c.useState)(t.status),r=Object(o.a)(n,2),s=r[0],i=r[1],b=Object(c.useState)(!1),O=Object(o.a)(b,2);O[0],O[1];return Object(c.useEffect)((function(){setInterval((function(){u.checkPortStatus(t.port,t.ip,(function(e,t){"open"==t?"connect"!=s&&i("connect"):"disconnect"!=s&&i("disconnect")}))}),500)}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"test"===s?Object(p.jsx)(p.Fragment,{children:t.nome}):"connect"===s?Object(p.jsxs)(p.Fragment,{children:[t.nome," - ",Object(p.jsx)("span",{style:{color:"green"},children:"ON"})]}):Object(p.jsxs)(p.Fragment,{children:[t.nome," - ",Object(p.jsx)("span",{style:{color:"red"},children:"OFF"})]})}),Object(p.jsx)("img",{src:"test"===s?d:"connect"===s?a:j,style:{maxHeight:"400px"}}),Object(p.jsx)("h2",{children:t.ip})]})});var O=function(){return Object(p.jsx)("div",{className:"container",children:[{nome:"ADMINISTRATIVO",ip:"10.67.150.10",port:465,status:"test"},{nome:"NSA",ip:"10.67.150.9",port:465,status:"test"},{nome:"BACKUP",ip:"10.67.150.8",port:465,status:"test"}].map((function(e){return Object(p.jsx)(b,{servidorInfo:e},e.ip)}))})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.4ef1973c.chunk.js.map