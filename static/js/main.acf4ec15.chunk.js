(this.webpackJsonpbeatit=this.webpackJsonpbeatit||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(22),o=n.n(i),s=n(2),l=n(7),u=n(20),d=n(14),b=n(12),g=n.n(b),j=n(17),m=function(e){var t=e.pad,n=e.activeTrackIds,r=e.manageQueue,i=e.isPlaying,o=e.toggleIsPlaying,s=e.recSettings,l=e.handleRec,u=Object(a.useRef)(),d=n&&n.find((function(e){return e===t._id}));Object(a.useEffect)((function(){u.current=new Audio(t.fileUrl),u.current.onended=b}),[]),Object(a.useEffect)((function(){Object(j.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i||!d){e.next=5;break}return u.current.currentTime=0,e.next=4,u.current.play();case 4:setTimeout((function(){o(!0),s.recIsOn&&l()}),5);case 5:case"end":return e.stop()}}),e)})))()}));var b=function(){return o(!1)},m=function(){var e=Object(j.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d&&(u.current.pause(),u.current.currentTime=0,o(!1)),r(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("article",{className:"pad-preview ".concat(d?"active":""),children:Object(c.jsx)("button",{onClick:m,style:{backgroundColor:t.bgc}})})},f=function(e){var t=e.pads,n=e.activeTrackIds,a=e.manageQueue,r=e.isPlaying,i=e.toggleIsPlaying,o=e.recSettings,s=e.handleRec;return Object(c.jsx)("section",{className:"pad-list main-layout",children:t.map((function(e){return Object(c.jsx)(m,{pad:e,activeTrackIds:n,manageQueue:a,isPlaying:r,toggleIsPlaying:i,recSettings:o,handleRec:s},e._id)}))})},p={query:function(){var e="/beatit";return[{_id:"p101",title:"120_future_funk_beats_25",fileUrl:"".concat(e,"/sounds/120_future_funk_beats_25.mp3"),bgc:"#2da254"},{_id:"p102",title:"120_stutter_breakbeats_16",fileUrl:"".concat(e,"/sounds/120_stutter_breakbeats_16.mp3"),bgc:"#ca9d2a"},{_id:"p103",title:"Bass Warwick heavy funk groove on E 120 BPM",fileUrl:"".concat(e,"/sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3"),bgc:"#c32e2e"},{_id:"p104",title:"electric guitar coutry slide 120bpm - B",fileUrl:"".concat(e,"/sounds/electric guitar coutry slide 120bpm - B.mp3"),bgc:"#2d69a2"},{_id:"p105",title:"FUD_120_StompySlosh",fileUrl:"".concat(e,"/sounds/FUD_120_StompySlosh.mp3"),bgc:"#832da2"},{_id:"p106",title:"GrooveB_120bpm_Tanggu",fileUrl:"".concat(e,"/sounds/GrooveB_120bpm_Tanggu.mp3"),bgc:"#a9bb32"},{_id:"p107",title:"MazePolitics_120_Perc",fileUrl:"".concat(e,"/sounds/MazePolitics_120_Perc.mp3"),bgc:"#2d9fa2"},{_id:"p108",title:"PAS3GROOVE1.03B",fileUrl:"".concat(e,"/sounds/PAS3GROOVE1.03B.mp3"),bgc:"#509de6"},{_id:"p109",title:"SilentStar_120_Em_OrganSynth",fileUrl:"".concat(e,"/sounds/SilentStar_120_Em_OrganSynth.mp3"),bgc:"#a22d7b"}]}};var O={delay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return new Promise((function(t){setTimeout(t,e)}))},getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)},makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},saveToStorage:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},removeFromStorage:function(e){localStorage.removeItem(e)}};var h=n.p+"static/media/btn-play.126aea10.svg",v=n.p+"static/media/btn-stop.73f93c54.svg",x=n.p+"static/media/btn-rec.05805e70.svg",_=n.p+"static/media/btn-clear.8716bcd0.svg",S=n.p+"static/media/rec-indication.908f56a5.svg",y=function(){var e=p.query(),t="REC",n=O.loadFromStorage(t),r=Object(a.useState)([]),i=Object(d.a)(r,2),o=i[0],s=i[1],b=Object(a.useState)(!1),g=Object(d.a)(b,2),j=g[0],m=g[1],y=Object(a.useState)({recIsOn:!1,iteration:0,recording:n||[]}),k=Object(d.a)(y,2),w=k[0],I=k[1];return console.log(o),console.log(w),Object(c.jsxs)("section",{className:"home-page",children:[Object(c.jsx)(f,{pads:e,activeTrackIds:o,manageQueue:function(e){o.includes(e._id)?s(o.filter((function(t){return t!==e._id}))):s([].concat(Object(u.a)(o),[e._id]))},isPlaying:j,toggleIsPlaying:m,recSettings:w,handleRec:function(){I(Object(l.a)(Object(l.a)({},w),{},{iteration:w.iteration+1,recording:[].concat(Object(u.a)(w.recording),[o])}))}}),w.recIsOn&&Object(c.jsx)("img",{src:S,alt:"rec-indication"}),Object(c.jsxs)("div",{className:"global-play-container flex",children:[Object(c.jsx)("button",{onClick:function(){if(j)return O.saveToStorage(t,w.recording),window.location.reload();s(w.recording[w.iteration]),I(Object(l.a)(Object(l.a)({},w),{},{iteration:w.iteration+1})),setTimeout((function(){return m(!0)}),5)},children:j?Object(c.jsx)("img",{src:v,alt:"stop"}):Object(c.jsx)("img",{src:h,alt:"play"})}),Object(c.jsx)("button",{onClick:function(){I(Object(l.a)(Object(l.a)({},w),{},{recIsOn:!w.recIsOn,iteration:0}))},children:Object(c.jsx)("img",{src:x,alt:"rec"})}),Object(c.jsxs)("div",{className:"play-time-status flex a-center ".concat(j?"active":""),children:[Object(c.jsx)("span",{}),w.recording.length&&!w.recIsOn?Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("label",{className:"muted",children:"* Recording available"}),Object(c.jsx)("button",{onClick:function(){O.removeFromStorage(t),I(Object(l.a)(Object(l.a)({},w),{},{recIsOn:!1,iteration:0,recording:[]}))},children:Object(c.jsx)("img",{src:_,alt:"clear"})})]}):null]})]})]})},k=n(9),w=function(){return Object(c.jsx)("header",{className:"app-header",children:Object(c.jsxs)("section",{className:"main-layout flex j-between a-center",children:[Object(c.jsxs)("div",{className:"logo flex a-center",children:[Object(c.jsx)("img",{src:"".concat("/beatit","/favicon.png"),alt:""}),Object(c.jsx)(k.b,{to:"/",children:"BEAT IT"})]}),Object(c.jsx)("nav",{children:Object(c.jsx)("a",{href:"https://github.com/tomleb3/beatit",children:Object(c.jsx)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",className:"social-link",height:"2em",width:"2em",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35\r 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65\r 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44\r 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})})})]})})};function I(){return Object(c.jsxs)("main",{className:"App",children:[Object(c.jsx)(w,{}),Object(c.jsx)(s.c,{children:Object(c.jsx)(s.a,{path:"/",component:y})})]})}n(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k.a,{children:Object(c.jsx)(I,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),P()}},[[36,1,2]]]);
//# sourceMappingURL=main.acf4ec15.chunk.js.map