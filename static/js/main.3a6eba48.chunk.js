(this.webpackJsonprandyle=this.webpackJsonprandyle||[]).push([[0],{12:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(132);t.a=function(e){return r.a.createElement("div",{className:"sub-heading"},e.children)}},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){var a={"./About":22,"./About.tsx":22,"./Transition":21,"./Transition.js":21,"./Transition.scss":41,"./graphql.png":134,"./react.png":135,"./typescript.png":136};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=133},134:function(e,t,n){e.exports=n.p+"static/media/graphql.4475a2fc.png"},135:function(e,t,n){e.exports=n.p+"static/media/react.0b9058e2.png"},136:function(e,t,n){e.exports=n.p+"static/media/typescript.1880b29e.png"},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),i=n.n(c),o=(n(56),n(57),n(148));n(58);var l=function(){return r.a.createElement("div",{className:"intro-container"},r.a.createElement("div",{className:"intro-header"},r.a.createElement("div",{className:"frosted-glass"},r.a.createElement("div",{className:"intro-text"},r.a.createElement("h1",null,"Randy Le"),r.a.createElement("br",null),r.a.createElement("div",{className:"location-div"},r.a.createElement("img",{className:"location",src:n(59),alt:"Location"}),r.a.createElement("h3",null,"CANADA")),r.a.createElement("p",null,"welcome",r.a.createElement("br",null),"this is mostly just a playground for me to play around with libraries and designs")),r.a.createElement("div",{className:"intro-image"},r.a.createElement("img",{src:n(60),alt:"Profile"})))),r.a.createElement("div",{className:"intro-footer"},r.a.createElement("div",{className:"text"},"get",r.a.createElement("br",null),"started"),r.a.createElement(o.a,{size:20})))},s=n(7),u=n(22),m=n(5);n(137);function f(e){return"url("+e+")"}var d=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(m.c)({opacity:c?1:0,transform:"perspective(600px) rotateX(".concat(c?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),l=o.transform,u=o.opacity;return r.a.createElement("div",{className:"flip-card"},r.a.createElement(m.b.div,{className:"c front",style:{opacity:u,transform:l.interpolate((function(e){return"".concat(e," rotateX(180deg)")})),backgroundImage:f(e.front)},onClick:function(){return i((function(e){return!e}))}}),r.a.createElement(m.b.div,{className:"c back",style:{opacity:u.interpolate((function(e){return 1-e})),transform:l,backgroundImage:f(e.back)},onClick:function(){return i((function(e){return!e}))}}))},p=n(19),g=n(12);var v=function(){return r.a.createElement("div",null,r.a.createElement(g.a,null,"Flip Card"),r.a.createElement("p",null,"I love dogs, I have 2 of them. This is Choji, he's a 9 year-old purebred Chihuahua."),r.a.createElement(p.a,{footnote:"flip card: react-spring"},r.a.createElement(d,{front:"//im.vsco.co/aws-us-west-2/148dbe/66644364/5fb6ddd301d61e328c000001/vsco5fb6ddd565f63.jpg?w=920&dpr=1",back:"https://image-aws-us-west-2.vsco.co/148dbe/66644364/5ee166be01d61e6c15000001/1136x1136/vsco5ee1667c88757.jpg"})),r.a.createElement("br",null),r.a.createElement(g.a,null,"Image Fade *IN PROGRESS*"))};n(138);function h(e){return r.a.createElement("div",{className:"content-handler"},r.a.createElement("div",{className:"title"},e.content),function(){switch(e.content){case"About":return r.a.createElement(u.default,null);case"Flip Card & Image Fade":return r.a.createElement(v,null)}}())}n(139);var b=n(10),E=n(149),y=n(150),w=n(44);var j=n(25),O=n(26);function x(){var e=Object(j.a)(["\n  will-change: transform, opacity, height;\n  margin-left: 6px;\n  padding: 0px 0px 0px 14px;\n  border-left: 1px dashed rgba(255, 255, 255, 0.4);\n  overflow: hidden;\n"]);return x=function(){return e},e}function k(){var e=Object(j.a)(["\n  vertical-align: middle;\n  cursor: pointer;\n  margin-left: 10px;\n\n  &:hover {\n    font-weight: bold;\n    color: #115644;\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(j.a)(["\n  position: relative;\n  padding: 10px 0px 0px 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n  vertical-align: middle;\n  color: black;\n  fill: black;\n"]);return N=function(){return e},e}var C=Object(O.a)("div")(N()),I=Object(O.a)("span")(k()),S=Object(O.a)(m.b.div)(x()),A={width:"1em",height:"1em",marginRight:10,cursor:"pointer",verticalAlign:"middle"},M=(n(143),Object(a.memo)((function(e){var t=e.children,n=e.name,c=e.style,i=e.defaultOpen,o=void 0!==i&&i,l=e.active,u=e.onClick,f=Object(a.useState)(o),d=Object(s.a)(f,2),p=d[0],g=d[1],v=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e}),[e]),t.current}(p),h=function(){var e=Object(a.useRef)(),t=Object(a.useState)({left:0,top:0,width:0,height:0}),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)((function(){return new w.a((function(e){var t=Object(s.a)(e,1)[0];return c(t.contentRect)}))})),o=Object(s.a)(i,1)[0];return Object(a.useEffect)((function(){return e.current&&o.observe(e.current),function(){return o.disconnect()}}),[]),[{ref:e},r]}(),j=Object(s.a)(h,2),O=j[0],x=j[1].height,k=Object(m.c)({from:{height:0,opacity:0,transform:"translate3d(20px,0,0)"},to:{height:p?x:0,opacity:p?1:0,transform:"translate3d(".concat(p?0:20,"px,0,0)")}}),N=k.height,M=k.opacity,F=k.transform;return r.a.createElement(C,null,function(){var e="".concat(t?p?"Minus":"Plus":"Close"),n=Object(b.a)(Object(b.a)({},A),{},{opacity:t?1:.3});switch(e){case"Minus":return r.a.createElement(E.a,{style:n,size:20,onClick:function(){return g(!p)}});case"Plus":return r.a.createElement(y.a,{style:n,size:20,onClick:function(){return g(!p)}});default:return null}}(),r.a.createElement(I,{style:Object(b.a)(Object(b.a)({},c),{},{fontWeight:l?"bold":null,color:l?"#115644":null}),onClick:function(){"Close"!=="".concat(t?p?"Minus":"Plus":"Close")?g(!p):u&&u(n)}},n),r.a.createElement(S,{style:{opacity:M,height:p&&v===p?"auto":N}},r.a.createElement(m.a.div,Object.assign({style:{transform:F}},O,{children:t}))))})));var F=function(e,t){return r.a.createElement("div",{className:"content-navigation-container"},r.a.createElement("div",{className:"content-navigation-menu"},r.a.createElement(M,{name:"About",active:"About"===e,onClick:t}),r.a.createElement(M,{name:"Components & Designs"},r.a.createElement(M,{name:"Flip Card & Image Fade",active:"Flip Card & Image Fade"===e,onClick:t})," ",r.a.createElement(M,{name:"Masonry Grid",active:"Masonry Grid"===e,onClick:t})," ",r.a.createElement(M,{name:"View Pager",active:"View Pager"===e,onClick:t})," ",r.a.createElement(M,{name:"Notifications",active:"Notifications"===e,onClick:t})," "),r.a.createElement(M,{name:"Contact Information",active:"Contact Information"===e,onClick:t})))},L=["About"];var T=function(){var e=Object(a.useState)(L[0]),t=Object(s.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"content-scroller"},F(n,(function(e){c(e)})),r.a.createElement("div",{className:"content"},r.a.createElement(h,{content:n})))};var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(l,null)),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(131);t.a=function(e){return r.a.createElement("div",{className:"showcase"},e.children,r.a.createElement("div",{className:"footnote"},e.footnote))}},21:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(10),c=n(0),i=n.n(c),o=n(5);n(41);t.default=function(e){var t=e.images.map((function(t){return e.isLocal?function(e){var a=e.style;return i.a.createElement(o.b.img,{src:n(133)(""+t),style:Object(r.a)({},a)})}:function(e){var n=e.style;return i.a.createElement(o.b.img,{src:t,style:Object(r.a)({},n)})}})),l=Object(c.useState)(0),s=Object(a.a)(l,2),u=s[0],m=s[1],f=Object(c.useCallback)((function(){return m((function(t){return(t+1)%e.images.length}))}),[e.images.length]),d=Object(o.d)(u,(function(e){return e}),{from:{opacity:0,transform:"translate3d(100%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}});return i.a.createElement("div",{className:"transition-container"},i.a.createElement("div",{className:"simple-trans-main",onClick:f},d.map((function(e){var n=e.item,a=e.props,r=e.key,c=t[n];return i.a.createElement(c,{key:r,style:a})}))))}},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n(7),o=n(5);n(130);var l=function(e){var t=Object(o.c)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:80}}})),n=Object(i.a)(t,2),a=n[0],l=n[1],s=function(e,t){return[-(t-window.innerHeight/2)/60,(e-window.innerWidth/2)/60,1.1]},u=e.style?{width:e.style.width,height:e.style.height}:{};return r.a.createElement(o.b.img,{src:e.image,className:"card",onMouseMove:function(e){var t=e.clientX,n=e.clientY;return l({xys:s(t,n)})},onMouseLeave:function(){return l({xys:[0,0,1]})},style:Object(c.a)({transform:a.xys.interpolate((function(e,t,n){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")}))},u)})},s=n(19),u=n(12),m=n(21);t.default=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Welcome to my website!"),r.a.createElement("p",null,"The purpose of this website is for me to help you understand more about who I am with the use of an assortment of different libraries and designs."),r.a.createElement("p",null,r.a.createElement("i",null,"The layout and design of this website is 99% pure HTML/CSS/JavaScript without the use of any out-of-the-box packages or libraries.")),r.a.createElement("p",null,"Let's begin!"),r.a.createElement(u.a,null,"Development"),r.a.createElement("p",null,"I am a software engineer with fullstack experience and an affinity for front-end development/UX."),r.a.createElement("p",null,"I enjoy making user experiences both exciting and intuitive!"),r.a.createElement(u.a,null,"Education"),r.a.createElement("p",null,"In 2018 I earned a Bachelor of Science in Software Engineering from the University of Calgary."),r.a.createElement(s.a,{footnote:"hovering card: react-spring"},r.a.createElement(l,{image:"https://ucalgary.ca/iriss/files/iriss/uc-horz-rgb_0.png"})),r.a.createElement("br",null),r.a.createElement(u.a,null,"Skills & Experience"),r.a.createElement("p",null,"Most of my skill, experience, and interests are in the following libraries/frameworks: React, TypeScript, and GraphQL. Click on the image below!"),r.a.createElement(s.a,{footnote:"simple transition: react-spring"},r.a.createElement(m.default,{isLocal:!0,images:["./react.png","./typescript.png","./graphql.png"]})))}},41:function(e,t,n){},51:function(e,t,n){e.exports=n(145)},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){e.exports=n.p+"static/media/location.a3b2d28b.png"},60:function(e,t,n){e.exports=n.p+"static/media/profile-pic.2440a2c1.jpg"}},[[51,1,2]]]);
//# sourceMappingURL=main.3a6eba48.chunk.js.map