(this.webpackJsonpgitty=this.webpackJsonpgitty||[]).push([[0],{25:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},31:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(22),r=t.n(c),s=(t(30),t(31),t(14)),o=t(13),m=t(12),i=t(42),u=t(43),E=t(44),h=t(45);var f=function(){var e=Object(l.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)([]),f=Object(s.a)(r,2),d=f[0],g=f[1],p=Object(l.useState)([]),v=Object(s.a)(p,2),b=v[0],N=v[1],j=Object(l.useState)([]),w=Object(s.a)(j,2),O=w[0],k=w[1],F=Object(l.useState)(!1),S=Object(s.a)(F,2),A=S[0],_=S[1];function y(e){if("all"!==e){var a=b.filter((function(a){return a.language==e}));k(a)}else k(b)}return Object(l.useEffect)((function(){var e={Authorization:"Basic ".concat(btoa("".concat("aritrakrbasu",":").concat("runabasu71")))},a=window.location.search,t=new URLSearchParams(a).get("id");(console.log(t),null!==t)?(fetch("https://api.github.com/users/"+t,{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){"Not Found"!==e.message?c(e):_(!0)})),fetch("https://api.github.com/users/"+t+"/repos",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){var a=[];console.log(e),"Not Found"!==e.message&&(e.forEach((function(e){null===e.language||a.includes(e.language)||a.push(e.language)})),g(a))})),fetch("https://api.github.com/users/"+t+"/repos?per_page=100&sort=created",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){N(e),k(e)}))):_(!0)}),[]),n.a.createElement(n.a.Fragment,null,!A&&n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fluid:!0},n.a.createElement(u.a,null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"nav"},n.a.createElement("div",{className:"nav-logo"},t.name&&t.name.match(/\b(\w)/g)))),n.a.createElement(E.a,null,n.a.createElement("div",{className:"nav-right"},n.a.createElement("a",{href:"#"},n.a.createElement("div",{className:"nav-btn"},n.a.createElement(m.a,{icon:o.b})," ",n.a.createElement("span",null,"Contact me"))))))),n.a.createElement(i.a,{fluid:!0},n.a.createElement(u.a,null,n.a.createElement(E.a,{lg:5},n.a.createElement("div",{className:"profile-section"},n.a.createElement("a",{href:t.html_url},n.a.createElement("div",{className:"profile-username"}," ","@"+t.login," ")),n.a.createElement("div",{className:"profile-name"}," ",t.name," "),n.a.createElement("div",{className:"profile-image"},n.a.createElement("img",{src:t.avatar_url}),n.a.createElement("div",{className:"profile-bg"})),t.location&&n.a.createElement("div",{className:"profile-location"},n.a.createElement("div",{className:"profile-location-icon"},n.a.createElement(m.a,{icon:o.c})),n.a.createElement("div",{className:"profile-location-text"},t.location)),t.hireable&&n.a.createElement("div",{className:"profile-hire-status"},"AVAILABLE FOR HIRE"))),n.a.createElement(E.a,{lg:7},n.a.createElement("div",{className:"about-section bl"},n.a.createElement("div",{className:"about-stats"},n.a.createElement(i.a,{fluid:!0},n.a.createElement(u.a,null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"about-profile"},n.a.createElement(u.a,null,n.a.createElement(E.a,{sm:2,className:"abouts-stats"},n.a.createElement("span",{className:"ico"},n.a.createElement(m.a,{icon:o.a}))),n.a.createElement(E.a,{className:"abouts-stats"},n.a.createElement("h2",null," Followers"),n.a.createElement("h3",null,t.followers))))),n.a.createElement(E.a,{className:"bl bl-sm pl-5"},n.a.createElement("div",{className:"about-profile"},n.a.createElement(u.a,null,n.a.createElement(E.a,{sm:2,className:"abouts-stats"},n.a.createElement("span",{className:"ico"},n.a.createElement(m.a,{icon:o.d}))),n.a.createElement(E.a,{className:"abouts-stats"},n.a.createElement("h2",null," Following"),n.a.createElement("h3",null,t.following)))))))),n.a.createElement("div",{className:"about-profile"},t.bio&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,t.bio))),n.a.createElement("div",{className:"about-profile"},n.a.createElement("h1",null,"Languages"),n.a.createElement("ul",{className:"skills"},d&&d.map((function(e){return n.a.createElement("li",null," ",n.a.createElement("img",{src:"https://svgsilh.com/svg/26432.svg"})," ",e)})))),n.a.createElement("div",{className:"project-section"},n.a.createElement("div",{className:"about-profile"},n.a.createElement("h1",null,"Projects"),n.a.createElement("ul",{className:"filter-btn"},n.a.createElement("li",{className:"filter-text"},"Filters :"),n.a.createElement(h.a,{variant:"light",onClick:function(){return y("all")}},n.a.createElement("li",null,"All")),d&&d.map((function(e){return n.a.createElement(h.a,{variant:"light",onClick:function(){return y(e)}},n.a.createElement("li",null,e))})),n.a.createElement(h.a,{variant:"light",onClick:function(){return y(null)}},n.a.createElement("li",null,"Others")))),O.length>0&&O.map((function(e){return n.a.createElement("div",{className:"project-item"},n.a.createElement("a",{href:e.html_url,target:"_blank"},n.a.createElement("div",{className:"project-title"},e.name)),n.a.createElement("div",{className:"project-link"},e.html_url),n.a.createElement("div",{className:"project-desc"},e.description),n.a.createElement("div",{className:"project-tags"},e.language&&n.a.createElement("span",null,e.language)))})))))))),A&&n.a.createElement("div",{className:"profile-not-found"},n.a.createElement(m.a,{icon:o.e}),"Profile not Found"))},d=t(23),g=t(2);var p=function(){return n.a.createElement(d.a,null,n.a.createElement(g.a,{path:"/",component:f}))};t(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a49a4a22.chunk.js.map