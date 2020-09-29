/*! For license information please see main.75aff8c6.chunk.js.LICENSE.txt */
(this["webpackJsonporientation-portal"]=this["webpackJsonporientation-portal"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),s=t(47),o=t.n(s),i=(t(63),t(8)),m=t(7),u=t(9),E=t.n(u),d=t(14),h=t(5),p=t(48),b=t.n(p).a.create({baseURL:"/api",responseType:"json",withCredentials:!0}),f=function(e){var a=e.user,t=a.name,n=a.profilePicLink,c=e.location;function l(e){var a=c.pathname.split("/");return a[a.length-1]===e}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"side-menu","data-aos":"fade-right","data-aos-duration":"3000"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{className:"navbar-brand",href:"/dashboard"},r.a.createElement("img",{alt:"LOGO",src:"/IMAGES/owasp_logo-13.png"}))),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"avatar",style:{alignContent:"center"}},r.a.createElement("img",{alt:"profilePic",src:n})),r.a.createElement("br",null),r.a.createElement("h2",{className:"username"},t)),r.a.createElement("ul",{className:"left-nav"},r.a.createElement("li",null,r.a.createElement(i.b,{className:" li-234",to:"/dashboard"},r.a.createElement("i",{className:l("dashboard")?"fa fa-dashboard active-red":"fa fa-dashboard "}),r.a.createElement("span",null,"DASHBOARD"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/dashboard/announcement"},r.a.createElement("i",{className:l("announcement")?"fa fa-calendar-minus-o active-blue":"fa fa-calendar-minus-o"}),r.a.createElement("span",null,"ANNOUNCEMENTS"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/dashboard/aboutus"},r.a.createElement("i",{className:l("aboutus")?"fa fa-group active-red":"fa fa-group"}),r.a.createElement("span",null,"ABOUT US"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/dashboard/leaderboard"},r.a.createElement("i",{className:l("leaderboard")?"fa fa-line-chart active-blue":"fa fa-line-chart"}),r.a.createElement("span",null,"LEADERBOARD"))),r.a.createElement("li",null,r.a.createElement("a",{href:"".concat("","/api/auth/logout"),className:"side-signout ",role:"button","aria-pressed":"true",onClick:function(){return localStorage.setItem("user","")}},r.a.createElement("i",{className:"fa fa-power-off"}),r.a.createElement("span",null,"SIGN OUT"))))))},g=function(e){var a=e.iconClass,t=e.heading,n=(e.title,e.desc),c=e.link;return r.a.createElement("div",{className:"flex-item"},r.a.createElement("div",{className:"flex-item-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("i",{className:"".concat(a," fa-3x tile-icon icon-white")}),r.a.createElement("h3",null,t)),r.a.createElement(i.b,{to:c},r.a.createElement("div",{className:"card-back bg-dark"},r.a.createElement("p",{className:"desc"},n),r.a.createElement("p",{className:"link"},r.a.createElement("i",{className:"fa fa-chevron-circle-right"}))))))},v=function(e){var a=e.quizzes,t=e.name;function n(e){if(a.length){var t=a.filter((function(a){return a.name===e}))[0];if(t)return"/".concat(e,"/").concat(t._id)}return"/dashboard"}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container row","data-aos":"fade-right","data-aos-duration":"3000"},r.a.createElement("div",{className:"col-md-12 col-sm-12 col-12"},r.a.createElement("div",{className:"dashboard"},r.a.createElement("h1",null,r.a.createElement("span",{className:"dash"},"DASH"),r.a.createElement("span",{className:"board"},"BOARD"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,"Hey ",t,",Thank you for registering! We welcome you to the Owasp student chapter portal! Orientation will commence at 5:30pm on 29th September,2020. Find the Youtube link down below. Stand a chance to win a direct spot in personal interviews by taking part in the quiz. Stay tuned!")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"flex-container"},r.a.createElement(g,{iconClass:"fa fa-video-camera",heading:"Orientation link",title:"Orientation on Youtube",desc:"Youtube live will be streamed at 5:30pm. Please be on time.",link:"Details"}),r.a.createElement(g,{iconClass:"fa fa-indent",heading:"Fun Quiz link",title:"Fun Quiz",desc:"Fun quiz will be soon. You have 15 seconds for each question. All the best!",link:n("funquiz")}),r.a.createElement(g,{iconClass:"fa fa-file-text",heading:"Coding quiz link",title:"Coding quiz",desc:"Coding quiz will be live for only 15 minutes. All the best! ",link:n("codingquiz")})))))))},N=t(15),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement("link",{rel:"stylesheet",href:"/css/announcement.css"})),r.a.createElement("div",{className:"container row","data-aos":"fade-right","data-aos-duration":"3000"},r.a.createElement("div",{className:"col-md-12 col-sm-12 col-12"},r.a.createElement("div",{className:"announcement"},r.a.createElement("h1",null,r.a.createElement("span",null,"ANNOUN"),r.a.createElement("span",{className:"cements"},"CEMENTS"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,"Navigate to the Dashboard section for Orientation links. Orientation will commence at 5:30pm on 29th September,2020. Stick till the end know about the recruitment process!!!"))))))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement("link",{rel:"stylesheet",href:"/css/leader.css"})),r.a.createElement("div",{class:"container row","data-aos":"fade-right","data-aos-duration":"3000"},r.a.createElement("div",{class:"col-md-12 col-sm-12 "},r.a.createElement("div",{class:"leaderboard"},r.a.createElement("h1",null,r.a.createElement("span",{class:"leader"},"LEADER"),r.a.createElement("span",{class:"board"},"BOARD"))),r.a.createElement("div",{class:"container data"},r.a.createElement("div",{class:"jumbotron notice"},r.a.createElement("p",null,"No leaderboard to show as of now!")),r.a.createElement("div",{class:"row showboard"},r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 1",id:"top10"},r.a.createElement("p",null,"fcksdnfjsdnfjsn"))),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 2",id:"top10"},r.a.createElement("p",null,"fcksdnfjsdnfjsn"),"fsdfds")),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 3",id:"top10"},r.a.createElement("p",null,"fcksdnfjsdnfjsn"),"fdsfdsf")),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 4",id:"top10"},r.a.createElement("p",null,"fcksdnfjsdnfjsn"))),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 5",id:"top10"})),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 6",id:"top10"})),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 7",id:"top10"})),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 8",id:"top10"})),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 9",id:"top10"})),r.a.createElement("div",{class:"col-12 align-content-start"},r.a.createElement("div",{class:" jumbotron 10",id:"top10"})))))))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement("link",{rel:"stylesheet",href:"/css/aboutus.css"})),r.a.createElement("div",{className:"container row","data-aos":"fade-right","data-aos-duration":"3000"},r.a.createElement("div",{className:"col-md-12 col-sm-12 col-12"},r.a.createElement("div",{className:"aboutus"},r.a.createElement("h1",null,r.a.createElement("span",{className:"about"},"ABOUT US"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,"The Open Web Application Security Project(OWASP) Student Chapter is an elite technical society of the Thapar Institute of Engineering and Technology, Patiala. With an experience of over 5 years, we aim to spread our mission of collective learning to every nook and corner. By successfully organizing many Hackathons, Tech talks, Workshops, and Coding nights, we have always strived hard to maintain the coding culture throughout the campus. The inception of the last session was with \u201cTechniti\u201d which helped in spreading huge technical awareness among the freshers. This was followed by our main event, HACKOWASP 2.0, which focused on bringing out innovation in collaboration with various startups and organizations. About 400 young minds from 20+ different colleges all over India participated in the event. In the last session we have also achieved great heights in the non-tech skills of our members. So, in addition to advancing the technical skills, we also focus on spreading apt knowledge of fields like marketing, finance, designing, content writing, etc. Our vision is to bring out the best of every individual. We capture young minds and introduce them to various fields. So, we are proposing both technical and non-tech workshops. This will help students to decide what they want to do and also give a clear picture of what actually interests them.")),r.a.createElement("div",{className:"gallery-image"},r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{src:"/IMAGES/pics/3.jpeg",alt:""})),r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{src:"/IMAGES/pics/WhatsApp Image 2020-06-01 at 5.21.28 AM.jpeg",alt:""})))))))},I=function(e){var a=e.location,t=Object(n.useState)({}),c=Object(h.a)(t,2),l=c[0],s=c[1],o=Object(n.useState)([]),i=Object(h.a)(o,2),u=i[0],p=i[1],g=Object(n.useState)(!1),I=Object(h.a)(g,2),w=I[0],y=I[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("/participants/profile");case 3:a=e.sent,t=a.data,s(t),localStorage.setItem("user",JSON.stringify(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),y(!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function a(){return(a=Object(d.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("/quiz/all");case 3:a=e.sent,t=a.data,p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),l.name||function(){e.apply(this,arguments)}()}),[]),w?r.a.createElement(m.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{rel:"stylesheet ",href:"/css/dashboardnav.css"}),r.a.createElement(N.a,null,r.a.createElement("link",{rel:"stylesheet",href:"/css/dashboard.css"})),r.a.createElement(f,{location:a,user:l}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/dashboard/announcement",component:O}),r.a.createElement(m.b,{exact:!0,path:"/dashboard/leaderboard",component:S}),r.a.createElement(m.b,{exact:!0,path:"/dashboard/aboutus",component:j}),r.a.createElement(m.b,{exact:!0,path:"/dashboard",render:function(e){return r.a.createElement(v,Object.assign({name:l.name},e,{quizzes:u||[]}))}}),r.a.createElement(m.a,{to:"/dashboard"})))},w=t(104),y=t(105),C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"dark",className:"navCustom  fixed-top",expand:"lg"},r.a.createElement(w.a.Brand,{href:"/",style:{marginLeft:"1rem "}},r.a.createElement("img",{className:"logo",alt:"LOGO",src:"IMAGES/owasp_logo-13.png"})),r.a.createElement(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(w.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(y.a,{className:"ml-auto navbar-collapse justify-content-center",id:"navbarResponsive"},r.a.createElement(y.a.Link,{className:"responsive-view",href:"".concat("","/api/auth/login")},"SIGN IN"))),r.a.createElement("div",{className:"view zoom signin-desktop-view"},r.a.createElement("a",{href:"".concat("","/api/auth/login"),className:"btn active signin",role:"button","aria-pressed":"true"},r.a.createElement("span",null,"SIGN IN")))))},k=t(28),A=t(103),T=function(e){var a=e.label,t=e.name,n=e.id,c=e.placeholder,l=e.type,s=Object(k.a)(e,["label","name","id","placeholder","type"]);return r.a.createElement(A.a.Group,{controlId:n},r.a.createElement(A.a.Label,{className:"label"},a," "),r.a.createElement(A.a.Control,Object.assign({name:t},s,{type:l,placeholder:c})))},q=function(e){var a=e.buttonText,t=Object(k.a)(e,["buttonText"]),c=Object(n.useState)(""),l=Object(h.a)(c,2),s=l[0],o=l[1],i=Object(n.useState)(""),m=Object(h.a)(i,2),u=m[0],E=m[1],d=Object(n.useState)(""),p=Object(h.a)(d,2),b=p[0],f=p[1],g=Object(n.useState)(""),v=Object(h.a)(g,2),N=v[0],O=v[1],S=Object(n.useState)(""),j=Object(h.a)(S,2),I=j[0],w=j[1];return r.a.createElement(A.a,Object.assign({},t,{action:"".concat("","/api/auth/register"),method:"POST"}),r.a.createElement(T,{type:"text",placeholder:"Enter your name",label:"NAME:",value:s,name:"name",required:!0,onChange:function(e){return o(e.target.value)}}),r.a.createElement(T,{type:"text",placeholder:"Enter year",label:"YEAR:",value:u,name:"year",required:!0,list:"years",onChange:function(e){return E(e.target.value)}}),r.a.createElement("datalist",{id:"years"},r.a.createElement("option",{value:"First year"}),r.a.createElement("option",{value:"Second year"})),r.a.createElement(T,{type:"number",placeholder:"Enter phone number",label:"PHONE NUMBER:",value:b,name:"phoneNumber",required:!0,onChange:function(e){return f(e.target.value)}}),r.a.createElement(T,{type:"text",placeholder:"Enter branch",label:"BRANCH:",value:N,name:"branch",required:!0,list:"branches",id:"branch",onChange:function(e){return O(e.target.value)}}),r.a.createElement("datalist",{id:"branches"},r.a.createElement("option",{value:"CHEMICAL ENGINEERING \u2013 CHE"}),r.a.createElement("option",{value:"CIVIL ENGINEERING - CIE"}),r.a.createElement("option",{value:"COMPUTER ENGINEERING - COE"}),r.a.createElement("option",{value:"COMPUTER SCIENCE AND ENGINEERING(PATIALA CAMPUS) \u2013 COPC"}),r.a.createElement("option",{value:"ELECTRICAL ENGINEERING - ELE"}),r.a.createElement("option",{value:"ELECTRONICS AND COMMUNICATION ENGINEERING - ECE"}),r.a.createElement("option",{value:"ELECTRONICS AND COMPUTER ENGINEERING - ENC"}),r.a.createElement("option",{value:"ELECTRONICS (INSTRUMENTATION AND CONTROL) ENGINEERING - EIC"}),r.a.createElement("option",{value:"MECHANICAL ENGINEERING \u2013 MEE"}),r.a.createElement("option",{value:"MECHANICAL ENGINEERING(PRODUCTION) - MPE"}),r.a.createElement("option",{value:"MECHATRONICS - MEC"}),r.a.createElement("option",{value:"ELECTRICAL AND COMPUTER ENGINEERING - MEC"}),"//!CODE",r.a.createElement("option",{value:"ELECTRICAL AND COMPUTER ENGINEERING - MEC"}),"//!BIOTECH"),r.a.createElement(T,{type:"number",placeholder:"Enter roll number",label:"ROLL NUMBER:",value:I,name:"rollNumber",required:!0,onChange:function(e){return w(e.target.value)}}),r.a.createElement("div",{className:"submit-button"},r.a.createElement("button",{type:"submit",className:"btn submit-google-btn btn-block"},r.a.createElement("span",{className:"g-sign"},a))))},R=function(){var e=Object(n.useState)(0),a=Object(h.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(0),s=Object(h.a)(l,2),o=s[0],i=s[1],m=Object(n.useState)(0),u=Object(h.a)(m,2),E=u[0],d=u[1],p=Object(n.useState)(0),b=Object(h.a)(p,2),f=b[0],g=b[1],v=Object(n.useState)(!1),N=Object(h.a)(v,2),O=N[0],S=N[1];return Object(n.useEffect)((function(){var e=new Date("Sep 29, 2020 17:30:00").getTime(),a=(new Date).getTime(),t=e-a;if(c(Math.floor(t%6e4/1e3)),g(Math.floor(t/864e5)),d(Math.floor(t%864e5/36e5)),i(Math.floor(t%36e5/6e4)),!O){setInterval((function(){var a=(new Date).getTime(),t=e-a;c(Math.floor(t%6e4/1e3)),g(Math.floor(t/864e5)),d(Math.floor(t%864e5/36e5)),i(Math.floor(t%36e5/6e4)),c((function(e){return e+1}))}),1e3);S(!0)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-phone"},r.a.createElement("ul",{className:"timer-li-phone "},r.a.createElement("li",{className:"timer-li-phone"},r.a.createElement("span",{id:"daysphone"},f),"days"),r.a.createElement("li",{className:"timer-li-phone"},r.a.createElement("span",{id:"hoursphone"},E),"Hours"),r.a.createElement("li",{className:"timer-li-phone"},r.a.createElement("span",{id:"minutesphone"},o),"Mins"),r.a.createElement("li",{className:"timer-li-phone"},r.a.createElement("span",{id:"secondsphone"},t),"Secs"))))},x=function(){return console.log(""),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"pc-form-section"},r.a.createElement("div",{"data-aos":"fade-in","data-aos-duration":"1000"},r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12",id:"head"},r.a.createElement("div",{className:" centered heading-form"},r.a.createElement("div",{className:"align-center"},"REGISTRATION")))),r.a.createElement("div",{className:"row",style:{minWidth:"50%"}},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{className:"orientation-info"},r.a.createElement("div",{className:"info-content"},r.a.createElement("h1",{"data-aos":"flip-up","data-aos-duration":"2000"},"FUN"),r.a.createElement("h1",{className:"code","data-aos":"flip-up","data-aos-duration":"4000"},"CODE"),r.a.createElement("h1",{"data-aos":"flip-up","data-aos-duration":"3000"},"LEARN"),r.a.createElement("div",{className:"countdown-phone",style:{color:"black"}},"Countdown to Orientation:"),r.a.createElement(R,null)))),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(q,{buttonText:"G Sign-up with Google",style:{margin:"2rem 2.5rem "}}))))))))},M=function(){return console.log(""),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"phone-form-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row phone"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"orientation-info-phone"},r.a.createElement("div",{className:"info-content-phone"},r.a.createElement("h1",{"data-aos":"flip-up","data-aos-once":!0,"data-aos-duration":"2000"},"FUN"),r.a.createElement("h1",{className:"code-phone","data-aos":"flip-up","data-aos-duration":"1000","data-aos-once":!0},"CODE"),r.a.createElement("h1",{"data-aos":"flip-up","data-aos-once":!0,"data-aos-duration":"3000"},"LEARN"),r.a.createElement("div",{className:"countdown-phone"},"Countdown to Orientation:"),r.a.createElement(R,null))))),r.a.createElement("div",{style:{minWidth:"50%"}},r.a.createElement("div",null,r.a.createElement("div",{className:"contact-phone"},r.a.createElement("div",{className:"row phone"},r.a.createElement("div",{className:"col-sm-12 form-body",id:"head-phone"},r.a.createElement("div",{className:" centered heading-form-phone"},"REGISTRATION"))),r.a.createElement("div",{className:"row phone"},r.a.createElement("div",{className:"col-sm-12 form-body"},r.a.createElement(q,{buttonText:"G Sign-up",style:{margin:"2rem 2.5rem "}})))))))))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement("link",{rel:"stylesheet",href:"/css/register.css"})),r.a.createElement(C,null),r.a.createElement(x,null),r.a.createElement(M,null))},U=t(102);t(23);function _(e){return e+100}function D(e){return e-100}t(87);var L=function(e){var a=e.num,t=e.question,c=t._id,l=t.statement,s=t.options,o=e.markAns,i=Object(n.useState)(""),m=Object(h.a)(i,2),u=m[0],E=m[1];return r.a.createElement("div",null,r.a.createElement("h6",{className:"mt-2 mb-2"},r.a.createElement("span",{className:"auto_submit_span"},"Q",a,".")," ",r.a.createElement("p",null,l)),r.a.createElement(A.a,{id:c},r.a.createElement(A.a.Group,null,s&&s.map((function(e){return r.a.createElement(A.a.Check,{checked:e===u,type:"radio",key:e,label:e,id:e,name:"options",value:e,q_id:c,onChange:function(e){E(e.target.value),o(e,c)}})})))))},z=t(106),F=function(e){var a=e.user,t=e.questions,c=Object(h.a)(e.submit,2),l=c[0],s=c[1],o=Object(n.useState)(15),i=Object(h.a)(o,1)[0],m=Object(n.useState)(),u=Object(h.a)(m,2),p=u[0],f=u[1],g=Object(n.useState)(""),v=Object(h.a)(g,2),N=v[0],O=v[1],S=Object(n.useState)(0),j=Object(h.a)(S,2),I=j[0],w=j[1],y=Object(n.useState)({}),C=Object(h.a)(y,2),k=C[0],A=C[1],T=Object(n.useState)(0),q=Object(h.a)(T,2),R=q[0],x=q[1];function M(){return G.apply(this,arguments)}function G(){return(G=Object(d.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("QUIZ SUBMIITED"),alert("QUIZ SUBMIITED"),e.prev=2,e.next=5,b.post("/questionBank/submit",{responses:k});case 5:a=e.sent,t=a.data,console.log(t),localStorage.setItem("score",t.score),x(t.score),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),alert("can not resubmit ");case 15:clearTimeout(N),f(-1),localStorage.setItem("session#hash%20t",_(-1)),s(!0);case 19:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=localStorage.getItem("score");console.log(e);var a=localStorage.getItem("session#hash%20t"),n=localStorage.getItem("session#ans");n&&A(JSON.parse(n)),e&&x(e),a||(localStorage.setItem("session#hash%20t",_(0)),console.log("setting time 0"),a=_(0),f(0));var r=D(a);return-1===r?(w(6),void s(!0)):r>=i*t.length?(localStorage.setItem("session#hash%20t",_(-1)),M()):(f(r),void w(Math.floor(r/i)))}),[]),Object(n.useEffect)((function(){l||isNaN(Number(p))||(O(setTimeout((function(){var e=p;-1!==e&&(e>=i*t.length?M():(e++,localStorage.setItem("session#hash%20t",_(e)),f(e),w(Math.floor(e/i))))}),1e3)),clearTimeout(N))}),[p]),r.a.createElement("div",{className:"quiz_body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{src:"/IMAGES/owasp_logo-13.png",style:{height:"60px"},className:"mt-3  mb-3"})),r.a.createElement("div",{className:"row justify-content-center mt-3 mb-4"},r.a.createElement("h1",{className:"quiz_heading"},r.a.createElement("span",null,"FUN")," QUIZ")),l?r.a.createElement(P,{user:a,score:R}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-2 question"},I<t.length&&r.a.createElement(L,{num:I+1,markAns:function(e,a){var t=k;t[a]=e.target.value,console.log(t),localStorage.setItem("session#ans",JSON.stringify(t)),A(t)},question:t[I]}),i*t.length-p<5&&r.a.createElement("p",null,"Auto submitting in"," ",r.a.createElement("span",{className:"auto_submit_span"},i*t.length-p)," ","seconds...")),r.a.createElement(z.a,{className:"mb-3",animated:!0,now:Math.floor(p%i),min:0,max:i}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(U.a,{className:"m-2 ml-4 mr-4"},I===t.length-1?r.a.createElement("button",{className:"btn pink_btn",onClick:function(){return M()}},"Submit"):r.a.createElement("button",{className:"btn blue_btn",onClick:function(){var e;e=(I+1)*i,localStorage.setItem("session#hash%20t",_(e)),f(e),w(Math.floor(e/i))}},"Next")))))))};function P(e){var a=e.user,t=e.score;return r.a.createElement("div",{className:"question"},"Nicely done ",a.username,"! You got"," ",r.a.createElement("span",{className:"auto_submit_span"},t)," marks!!!",r.a.createElement("br",null),r.a.createElement(i.b,{to:"/dashboard"},"Back to dashboard"))}var B=function(e){var a=e.match,t=Object(n.useState)(!1),c=Object(h.a)(t,2),l=c[0],s=c[1],o=Object(n.useState)({}),i=Object(h.a)(o,2),u=i[0],p=i[1],f=Object(n.useState)(!1),g=Object(n.useState)([]),v=Object(h.a)(g,2),N=v[0],O=v[1],S=Object(n.useState)(!1),j=Object(h.a)(S,2),I=j[0],w=j[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(E.a.mark((function e(){var t,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=JSON.parse(localStorage.getItem("questions")))||!t.length){e.next=4;break}return e.abrupt("return",O(t));case 4:return e.next=6,b.get("/quiz/start/".concat(a.params.id));case 6:n=e.sent,r=n.data,console.log("questions",r),localStorage.setItem("questions",JSON.stringify(r.questionIds)),O(r.questionIds),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("CANT FETCH QUESTIONS",e.t0),w(!0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){p(JSON.parse(localStorage.getItem("user")));var e=localStorage.getItem("session*&start");e||(e=String.fromCharCode(0)),s(1===e.charCodeAt(0))}),[]),u?I?r.a.createElement(m.a,{to:"/dashboard"}):r.a.createElement(r.a.Fragment,null,l?r.a.createElement(F,{hash:_,dehash:D,submit:f,user:u,questions:N}):r.a.createElement("div",{className:"quiz_body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{src:"/IMAGES/owasp_logo-13.png",style:{height:"60px"},className:"mt-3  mb-3"})),r.a.createElement("div",{className:"row justify-content-center mt-3 mb-4"},r.a.createElement("h1",{className:"quiz_heading"},r.a.createElement("span",null,"FUN")," QUIZ")),r.a.createElement("div",{className:"mb-2 question"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(U.a,{className:"m-2 ml-4 mr-4"},r.a.createElement("button",{className:"btn blue_btn",onClick:function(){return localStorage.setItem("session*&start",String.fromCharCode(1)),localStorage.setItem("session#hash%20t",_(0)),void s(!0)}},"Start")))))))):r.a.createElement(m.a,{to:"/"})},H=function(e){var a=e.user,t=e.questions,c=Object(h.a)(e.submit,2),l=c[0],s=c[1],o=Object(n.useState)(15),i=Object(h.a)(o,1)[0],m=Object(n.useState)(),u=Object(h.a)(m,2),p=u[0],f=u[1],g=Object(n.useState)(""),v=Object(h.a)(g,2),N=v[0],O=v[1],S=Object(n.useState)({}),j=Object(h.a)(S,2),I=j[0],w=j[1],y=Object(n.useState)(0),C=Object(h.a)(y,2),k=C[0],A=C[1];function T(){return q.apply(this,arguments)}function q(){return(q=Object(d.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("QUIZ SUBMIITED"),alert("QUIZ SUBMIITED"),e.prev=2,e.next=5,b.post("/questionBank/submit",{responses:I});case 5:a=e.sent,t=a.data,console.log(t),localStorage.setItem("score2",t.score),A(t.score),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),alert("can not resubmit ");case 15:clearTimeout(N),f(-1),localStorage.setItem("session#hash%20t2",_(-1)),s(!0);case 19:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function R(e,a){var t=I;t[a]=e.target.value,console.log(t),localStorage.setItem("session#ans2",JSON.stringify(t)),w(t)}return Object(n.useEffect)((function(){var e=localStorage.getItem("score2");console.log(e);var a=localStorage.getItem("session#hash%20t2"),n=localStorage.getItem("session#ans2");n&&w(JSON.parse(n)),e&&A(e),a||(localStorage.setItem("session#hash%20t2",_(0)),console.log("setting time 0"),a=_(0),f(0));var r=D(a);return-1===r?(alert("sdsadasdad"),void s(!0)):r>=i*t.length?(localStorage.setItem("session#hash%20t2",_(-1)),T()):void f(r)}),[]),Object(n.useEffect)((function(){l||isNaN(Number(p))||(O(setTimeout((function(){var e=p;-1!==e&&(e>=i*t.length?T():(e++,localStorage.setItem("session#hash%20t2",_(e)),f(e)))}),1e3)),clearTimeout(N))}),[p]),r.a.createElement("div",{className:"quiz_body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{src:"/IMAGES/owasp_logo-13.png",style:{height:"60px"},className:"mt-3  mb-3"})),r.a.createElement("div",{className:"row justify-content-center mt-3 mb-4"},r.a.createElement("h1",{className:"quiz_heading"},"CODING ",r.a.createElement("span",null,"QUIZ"))),l?r.a.createElement(J,{user:a,score:k}):r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{className:"mb-3",animated:!0,now:Math.floor(p%i),min:0,max:i}),t.map((function(e,a){return r.a.createElement("div",{className:"mb-2 question"},r.a.createElement(L,{num:a+1,markAns:R,question:e}))})),i*t.length-p<5&&r.a.createElement("div",{className:"mb-2 question"},r.a.createElement("p",null,"Auto submitting in"," ",r.a.createElement("span",{className:"auto_submit_span"},i*t.length-p)," ","seconds...")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(U.a,{className:"m-2 ml-4 mr-4"},r.a.createElement("button",{className:"btn pink_btn",onClick:function(){return T()}},"Submit")))))))};function J(e){var a=e.user,t=e.score;return r.a.createElement("div",{className:"question"},"Nicely done ",a.username,"! You got"," ",r.a.createElement("span",{className:"auto_submit_span"},t)," marks!!!",r.a.createElement("br",null),r.a.createElement(i.b,{to:"/dashboard"},"Back to dashboard"))}var Q=function(e){var a=e.match,t=Object(n.useState)(!1),c=Object(h.a)(t,2),l=c[0],s=c[1],o=Object(n.useState)({}),i=Object(h.a)(o,2),u=i[0],p=i[1],f=Object(n.useState)(!1),g=Object(n.useState)([]),v=Object(h.a)(g,2),N=v[0],O=v[1],S=Object(n.useState)(!1),j=Object(h.a)(S,2),I=j[0],w=j[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(E.a.mark((function e(){var t,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=JSON.parse(localStorage.getItem("questions2")))||!t.length){e.next=4;break}return e.abrupt("return",O(t));case 4:return e.next=6,b.get("/quiz/start/".concat(a.params.id));case 6:n=e.sent,r=n.data,console.log("questions",r),localStorage.setItem("questions2",JSON.stringify(r.questionIds)),O(r.questionIds),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("CANT FETCH QUESTIONS",e.t0),w(!0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){p(JSON.parse(localStorage.getItem("user")));var e=localStorage.getItem("session*&start2");e||(e=String.fromCharCode(0)),s(1===e.charCodeAt(0))}),[]),u?I?r.a.createElement(m.a,{to:"/dashboard"}):r.a.createElement(r.a.Fragment,null,l?r.a.createElement(H,{hash:_,dehash:D,submit:f,user:u,questions:N}):r.a.createElement("div",{className:"quiz_body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{src:"/IMAGES/owasp_logo-13.png",style:{height:"60px"},className:"mt-3  mb-3"})),r.a.createElement("div",{className:"row justify-content-center mt-3 mb-4"},r.a.createElement("h1",{className:"quiz_heading"},"CODING ",r.a.createElement("span",null,"QUIZ"))),r.a.createElement("div",{className:"mb-2 question"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(U.a,{className:"m-2 ml-4 mr-4"},r.a.createElement("button",{className:"btn blue_btn",onClick:function(){return localStorage.setItem("session*&start2",String.fromCharCode(1)),localStorage.setItem("session#hash%20t2",_(0)),void s(!0)}},"Start")))))))):r.a.createElement(m.a,{to:"/"})},W=t(57),Y=t.n(W),Z=function(e){e.match;var a=e.location;return r.a.createElement(r.a.Fragment,null,alert("ERROR:".concat(Y.a.parse(a.search).msg)),r.a.createElement(m.a,{to:"/"}))};var K=function(){return Object(n.useEffect)((function(){o.a.init()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/error",component:Z}),r.a.createElement(m.b,{path:"/dashboard",component:I}),r.a.createElement(m.b,{exact:!0,render:function(e){var a=localStorage.getItem("session#hash%20t");if(a){var t=D(a);console.log("before route",t),console.log("performance",PerformanceNavigation.TYPE_RELOAD),-1!==t&&1===PerformanceNavigation.TYPE_RELOAD&&(console.log("in condition",t),localStorage.setItem("session#hash%20t",_(t+1)))}return r.a.createElement(B,e)},path:"/funquiz/:id"}),r.a.createElement(m.b,{exact:!0,render:function(e){var a=localStorage.getItem("session#hash%20t2");if(a){var t=D(a);console.log("before route",t),console.log("performance",PerformanceNavigation.TYPE_RELOAD),-1!==t&&1===PerformanceNavigation.TYPE_RELOAD&&(console.log("in condition",t),localStorage.setItem("session#hash%20t2",_(t+1)))}return r.a.createElement(Q,e)},path:"/codingquiz/:id"}),r.a.createElement(m.b,{exact:!0,path:"/",component:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,a,t){},58:function(e,a,t){e.exports=t(100)},87:function(e,a,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.75aff8c6.chunk.js.map