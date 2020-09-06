(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{46:function(e,t,a){e.exports=a(56)},51:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(51),a(15)),i=a.n(l),s=a(29),u=a(22),m=a(83),f=a(86),d=a(87),p=a(88),v=a(96),E=function(){return r.a.createElement(m.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{variant:"h6",style:{flex:1}},"COVID-19 Tracker"),r.a.createElement("nav",null,r.a.createElement(v.a,{variant:"button",color:"inherit",href:"https://covidtracking.com/",target:"_blank"},"Sources")))))},h=a(95),g=a(93),b=a(89),x=a(90),j=a(91),w=a(92),y=function(e){var t=e.data;if("undefined"==typeof t)return r.a.createElement(b.a,{container:!0,justify:"center",spacing:3},[0,1,2].map((function(e){return r.a.createElement(b.a,{item:!0,xs:6,sm:3},r.a.createElement(x.a,null,r.a.createElement(j.a,null,r.a.createElement(w.a,null))))})));var a=[{title:"Total Cases",data:t.positive},{title:"New Cases",data:t.positiveIncrease},{title:"Total Deaths",data:t.death},{title:"New Deaths",data:t.deathIncrease}];return r.a.createElement(b.a,{container:!0,justify:"center",spacing:3},a.map((function(e){return r.a.createElement(b.a,{item:!0,xs:6,sm:3},r.a.createElement(x.a,null,r.a.createElement(j.a,null,r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},e.title),r.a.createElement(p.a,{variant:"h5",component:"h2"},Number(e.data).toLocaleString()))))})))},S=function(e){var t=e.title,a=e.data;return"undefined"==typeof a?r.a.createElement(x.a,null,r.a.createElement(j.a,null,r.a.createElement(w.a,null))):r.a.createElement(x.a,null,r.a.createElement(j.a,null,r.a.createElement(p.a,{variant:"h5",component:"h2",gutterBottom:!0},t),r.a.createElement(p.a,{color:"textSecondary"},"Total Cases: ",Number(a.positive).toLocaleString()),r.a.createElement(p.a,{color:"textSecondary"},"New Cases: ",Number(a.positiveIncrease).toLocaleString()),r.a.createElement(p.a,{color:"textSecondary"},"Total Deaths: ",Number(a.death).toLocaleString()),r.a.createElement(p.a,{color:"textSecondary"},"New Deaths: ",Number(a.deathIncrease).toLocaleString())))};var k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),m=l[0],d=l[1],v=Object(n.useState)([]),x=Object(u.a)(v,2),j=x[0],w=x[1],k=Object(n.useState)(""),O=Object(u.a)(k,2),N=O[0],C=O[1];Object(n.useEffect)((function(){L(),D(),I()}),[]);var L=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covidtracking.com/v1/us/current.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covidtracking.com/v1/states/current.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,d(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covidtracking.com/v1/states/info.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,w(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"h2"},r.a.createElement(h.a,{textAlign:"center",my:4},"National Data")),r.a.createElement(y,{data:a}),r.a.createElement(p.a,{variant:"h2"},r.a.createElement(h.a,{textAlign:"center",mt:4,mb:2},"States and Territories")),r.a.createElement(h.a,{textAlign:"center",my:4},r.a.createElement(g.a,{label:"Search",variant:"outlined",fullWidth:!0,value:N,onChange:function(e){C(e.target.value)}})),r.a.createElement(b.a,{container:!0,justify:"center",spacing:3},j.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})).map((function(e){return r.a.createElement(b.a,{item:!0,xs:6,md:3},r.a.createElement(S,{title:e.name,data:m[j.indexOf(e)]}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.0282dfd6.chunk.js.map