_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"/QsD":function(e,t,n){"use strict";var a=n("h4VS"),l=n("q1tI"),o=n.n(l),r=n("YFqc"),s=n.n(r),i=n("nOHt"),c=n.n(i),u=n("vOnD"),d=n("4C6B"),m=n("kiXb"),f=o.a.createElement;function v(){var e=Object(a.a)(["\n  ",";\n"]);return v=function(){return e},e}var g=u.a.div(v(),(function(e){return e.clickeable?"\n    cursor:pointer;\n    &:hover {\n    .bg {\n      transform: translateY(-5px);\n    }\n    .info {\n      transform: translateY(-10px);\n    }\n    img {\n      transform: scale(1.1);\n    }\n  }":""}));t.a=function(e){var t=e.course,n=e.clickeable,a=void 0===n||n,l=Object(m.useTranslation)().t;return f(g,{onClick:function(){if(a&&!(null===t||void 0===t?void 0:t.isComingSoon)){(null===t||void 0===t?void 0:t.isEnrolled)?c.a.push("/[course]/lobby","/".concat(null===t||void 0===t?void 0:t.slug,"/lobby")):c.a.push("/".concat(null===t||void 0===t?void 0:t.slug));window.scrollTo(0,0)}},className:"flex flex-col items-center",clickeable:a&&!(null===t||void 0===t?void 0:t.isComingSoon)},f("div",{className:"overflow-hidden bg rounded-lg relative bg-white shadow-lg",style:{transition:"transform 0.2s ease-in-out"}},(null===t||void 0===t?void 0:t.level)&&f("span",{style:{position:"absolute",top:10,left:10},className:"inline-flex items-center px-3 py-0.5 z-10 rounded-full text-sm font-medium leading-5 bg-".concat(t.level.color,"-100 text-").concat(null===t||void 0===t?void 0:t.level.color,"-800 shadow")},l(null===t||void 0===t?void 0:t.level.name)),f("img",{src:null===t||void 0===t?void 0:t.thumbnail,className:"w-full",style:{transition:"transform 0.2s ease-in-out"}})),f("div",{className:"text-center info shadow-xl flex flex-col w-11/12 bottom-15 justify-center h-full relative bg-white rounded-lg z-0 py-5 px-2",style:{transition:"transform 0.2s ease-in-out",textOverflow:"ellipsis",maxHeight:106}},(null===t||void 0===t?void 0:t.isComingSoon)?f("div",{className:"px-4"},f("h3",{className:"text-xl overflow-hidden"},t?l(t.name):"Loading..."),f("h4",{className:"mt-2 mb-1"},"Coming Soon")):(null===t||void 0===t?void 0:t.isEnrolled)?a?f(s.a,{href:"/[course]/lobby",as:"/".concat(null===t||void 0===t?void 0:t.slug,"/lobby")},f("a",{className:"px-4"},f("h3",{className:"text-xl overflow-hidden mb-5 w-full",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},l(null===t||void 0===t?void 0:t.name)),f(d.a,{progress:(null===t||void 0===t?void 0:t.progress)||0,progressLectures:(null===t||void 0===t?void 0:t.progressLectures)||0}))):f("div",{className:"px-4"},f("h3",{className:"text-xl overflow-hidden mb-5",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},l(null===t||void 0===t?void 0:t.name)),f(d.a,{progress:(null===t||void 0===t?void 0:t.progress)||0,progressLectures:(null===t||void 0===t?void 0:t.progressLectures)||0})):a?f(s.a,{href:"/".concat(null===t||void 0===t?void 0:t.slug)},f("a",null,f("h3",{className:"text-xl overflow-hidden"},t?l(t.name):"Loading..."),(null===t||void 0===t?void 0:t.subtitleOne)&&f("h4",{className:"mt-2 mb-1"},l(null===t||void 0===t?void 0:t.subtitleOne)),(null===t||void 0===t?void 0:t.subtitleTwo)&&f("h4",{className:"text-sm"},l(null===t||void 0===t?void 0:t.subtitleTwo)))):f("span",null,f("h3",{className:"text-xl overflow-hidden"},t?l(t.name):"Loading..."),(null===t||void 0===t?void 0:t.subtitleOne)&&f("h4",{className:"mt-2 mb-1"},l(null===t||void 0===t?void 0:t.subtitleOne)),(null===t||void 0===t?void 0:t.subtitleTwo)&&f("h4",{className:"text-sm"},l(null===t||void 0===t?void 0:t.subtitleTwo)))))}},"4C6B":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=l.a.createElement;t.a=function(e){var t=e.progress,n=e.progressLectures,a=function(){if(0!==t&&0!==n){var e=Math.floor(t/n*100);return e>100?100:e}return 0};return o(l.a.Fragment,null,o("div",{className:"h-3 w-full bg-blue-200 rounded-full relative"},o("div",{className:"h-3 bg-blue-700 rounded-full",style:{width:"".concat(a(),"%")}})),o("span",{className:"mt-3 text-md font-medium block"},a(),"% complete"))}},"5D4L":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("q1tI");function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,l=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(i){l=!0,o=i}finally{try{a||null==s.return||s.return()}finally{if(l)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.intervalTime,o=void 0===n?1e3:n,r=t.now,s=void 0===r?function(){return Date.now()}:r,i=l((0,a.useState)((function(){return new Date(e())-new Date(s())})),2),c=i[0],u=i[1];return(0,a.useEffect)((function(){var e=setInterval((function(){u((function(t){return t<=0?(clearInterval(e),0):t-o}))}),o);return function(){return clearInterval(e)}}),[o]),c};t.default=o},H8eV:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("8Kt/"),r=n.n(o),s=l.a.createElement;t.a=function(e){var t=e.description,n=void 0===t?"":t,a=e.pageTitle,l=e.ogTitle,o=void 0===l?a:l,i=e.image,c=void 0===i?"graphDefault":i,u=(e.price,e.index,e.path);return s(r.a,null,s("title",null,a),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s("meta",{name:"description",content:n}),s("meta",{property:"og:title",content:o}),s("meta",{property:"og:type",content:"website"}),s("meta",{property:"og:url",content:"https://nomadcoders.co".concat(u)}),s("meta",{property:"og:image",content:"https://d1telmomo28umc.cloudfront.net/media/seo/".concat(c,".jpg")}),s("meta",{property:"og:description",content:n}),s("meta",{property:"og:site_name",content:"Nomad Coders"}),s("meta",{property:"og:locale",content:"ko_KR"}),s("meta",{property:"og:image:width",content:"1200"}),s("meta",{property:"og:image:height",content:"630"}),s("meta",{property:"fb:admins",content:"2366600330252017"}),s("meta",{charSet:"utf-8"}),s("link",{rel:"canonical",href:"https://nomadcoders.co/"}),s("meta",{name:"robots",content:"index, follow"}),s("meta",{name:"twitter:title",content:o}),s("meta",{name:"twitter:description",content:n}),s("meta",{name:"twitter:image",content:c}),s("meta",{name:"naver-site-verification",content:"202966525a961e258ded0fcc0042857cea6d15f3"}))}},Lw9q:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a).a.createElement;t.a=function(e){var t=e.children;return l("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"},t)}},"MO+g":function(e,t,n){"use strict";var a=n("q1tI"),l=n("fdqv"),o=n("NyWP");t.a=function(){var e=Object(a.useState)(l.a in Object(o.parseCookies)()),t=e[0];e[1];return t}},Py3f:function(e,t,n){"use strict";var a=n("h4VS"),l=n("lTCR"),o=n.n(l),r=n("ttZb"),s=n("MO+g");function i(){var e=Object(a.a)(["\n  query me {\n    me {\n      name\n      avatar\n      username\n      email\n      isSuperuser\n      tier\n      accountLanguage\n      certificates {\n        uuid\n      }\n      enrolledChallenges {\n        slug\n      }\n      waitlistChallenges {\n        slug\n      }\n      completedChallenges {\n        slug\n      }\n    }\n  }\n"]);return i=function(){return e},e}var c=o()(i());t.a=function(){var e=Object(s.a)();return Object(r.d)(c,{skip:!e})}},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),o=n("h4VS"),r=n("ttZb"),s=n("YFqc"),i=n.n(s),c=n("Ue4y"),u=n("ogOi"),d=n("Lw9q"),m=n("WxHy"),f=n("VTcs"),v=n("H8eV"),g=n("kiXb"),p=n("SnHM"),x=l.a.createElement,h=function(e){var t,n=e.data,a=e.isLoggedIn,o=Object(g.useTranslation)().t,r=Object(p.a)();return x(c.a,null,x(l.a.Fragment,null,x(v.a,{pageTitle:"\ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders \u2013 Clone Startups. Learn to Code.",ogTitle:"\ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders",description:o("\ucf54\ub529\uc740 \uc9c4\uc9dc\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\ub294\uac70\uc57c!. \uc2e4\uc81c \uad6c\ud604\ub418\uc5b4 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ud55c\ub540 \ud55c\ub540 \ub530\ub77c \ub9cc\ub4e4\uba74\uc11c \ucf54\ub529\uc744 \ubc30\uc6b0\uc138\uc694!"),path:"/",image:"home2"}),x(d.a,null,x("div",{className:"pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28 bg-white z-10"},x("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 bg-white"},x("div",{className:"text-center flex flex-col items-center"},x("h2",{className:"text-5xl tracking-tight leading-tight font-semibold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"},"Clone Startups.",x("br",null),x("span",{className:"text-blue-600"},"Learn to code.")),x("p",{className:"mt-3 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl w-8/12"},x("span",{dangerouslySetInnerHTML:{__html:o("\ucf54\ub529\uc740 \uc9c4\uc9dc\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\ub294\uac70\uc57c!")}}),x("br",null),x("span",{dangerouslySetInnerHTML:{__html:o("\uc2e4\uc81c \uad6c\ud604\ub418\uc5b4 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ud55c\ub540 \ud55c\ub540 \ub530\ub77c \ub9cc\ub4e4\uba74\uc11c \ucf54\ub529\uc744 \ubc30\uc6b0\uc138\uc694.")}})),x("div",{className:"mt-10 max-w-md mx-auto lg:mx-0 flex flex-col w-full md:flex-row md:justify-around lg:justify-center md:mt-10"},x("div",{className:"rounded-md shadow "},a?x(i.a,{href:"/dashboard"},x("a",{className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:text-lg md:px-10"},"Go to Dashboard \u2192")):x(i.a,{href:"/join"},x("a",{className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:text-lg md:px-10"},"Join now \u2192"))))))),(null===n||void 0===n?void 0:n.courses)&&x(l.a.Fragment,null,x("div",{className:"mt-32 relative"},x(u.a,{courses:null===n||void 0===n?void 0:n.courses})),x("div",{className:"flex -mt-8 relative z-10 justify-center"},x(i.a,{href:"/courses"},x("a",{className:" text-blue-600 text-lg hover:underline font-medium"},"See all courses \u2192"))))),(null===n||void 0===n?void 0:n.challenges)&&!r&&x(m.a,{containerClassName:"mt-32 md:mt-56 mb-64  py-15 md:pt-0 md:pb-3",angleBottom:!0,angleTop:!0,bgColor:"#F9FAFB"},x("div",{className:"flex flex-col items-center text-g"},x("h3",{className:"text-4xl font-semibold hangug text-center"},"Challenges"),x("h4",{className:" text-center max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg mt-2 md:text-xl md:max-w-3xl w-8/12"},o("\uac15\uc758\ub9cc\uc73c\ub85c\ub294 \ubd80\uc871\ud574! \uba71\uc0b4\uc7a1\uace0 \uce90\ub9ac\ud558\ub294 \ucc4c\ub9b0\uc9c0\uc5d0 \ubb34\ub8cc\ub85c \ucc38\uc5ec\ud558\uc138\uc694!"))),x(l.a.Fragment,null,x("div",{className:"mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 row-gap-15 col-gap-10 pb-10"},null===n||void 0===n?void 0:null===(t=n.challenges)||void 0===t?void 0:t.map((function(e){return e&&x(f.a,{key:e.slug,challenge:e})}))),x("div",{className:"flex mt-5 relative z-10 justify-center"},x(i.a,{href:"/challenges"},x("a",{className:"text-blue-600 text-lg hover:underline font-medium"},"See all challenges \u2192")))))))},b=n("MO+g"),w=n("lTCR"),y=n.n(w),N=n("dkkg"),C=l.a.createElement;function O(){var e=Object(o.a)(["\n  query home($all: Boolean!) {\n    courses(allCourses: $all) {\n      ...CourseCard\n    }\n    challenges(allChallenges: $all) {\n      ...ChallengeCard\n    }\n  }\n  ","\n  ","\n"]);return O=function(){return e},e}var j=y()(O(),N.e,N.b),k=function(){var e=Object(b.a)(),t=Object(r.d)(j,{variables:{all:!1}}).data;return C(h,{data:t,isLoggedIn:e})},S=l.a.createElement;t.default=function(){return S(k,null)}},VTcs:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("5D4L"),r=n.n(o),s=n("YFqc"),i=n.n(s),c=n("fdqv"),u=n("Py3f"),d=l.a.createElement,m={"python-challenge":"#316B9A","vanillajs-challenge":"#FACA15","wetube-challenge":"#ff0400","kokoa-challenge":"#39211D","reactjs-challenge":"#282C34","css-layout-challenge":"#0474EA","airbnb-django-challenge":"#FF385C"};t.a=function(e){var t,n=e.challenge,a=n.name,o=n.slug,s=n.unlocks,f=n.duration,v=n.challengersNumber,g=n.comingSoon,p=n.inProgress,x=n.startDate,h=void 0===x?0:x,b=n.finished,w=n.isEnrolled,y=n.isWaiting,N=n.isCompleted,C=n.canEnroll,O=n.currentDay,j=n.inBufferZone,k=n.isOnReview,S=e.showFull,E=void 0===S||S,T=new Date(1e3*(h||0)),D=r()((function(){return T})),L=Object(u.a)().data;return g&&D<100&&window.location.reload(),d("div",{className:"shadow-xl flex flex-col items-center justify-between relative rounded-lg  px-5 py-5 bg-white",style:{borderColor:m[o]||"#000"}},(w||y||N||k)&&d("span",{className:"text-white absolute w-auto font-medium text-xs uppercase mx-auto shadow-md px-5 py-1 rounded-md",style:{backgroundColor:m[o]||"#000",top:-15}},w&&"Enrolled",y&&"Waitlist",N&&"Completed",k&&"Under Review"),d("div",{className:"w-full"},d("h3",{className:"mt-1 mb-7 text-3xl  text-center"},a),E&&d(l.a.Fragment,null,d("div",{className:"flex items-center mb-4"},d("div",{className:"mr-2 bg-gray-200 rounded-lg h-8 w-8 flex items-center justify-center"},d("svg",{className:"h-5 w-5 text-gray-500",viewBox:"0 0 20 20"},d("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}))),d("span",{className:" text-gray-600 text-base"},f)),d("div",{className:"flex items-center mb-4"},d("div",{className:"mr-2 bg-gray-200 rounded-lg h-8 w-8 flex items-center justify-center"},d("svg",{className:"h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20"},d("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}))),d("span",{className:" text-gray-600 text-base"},v," challengers")),d("div",{className:"flex items-center mb-8"},d("div",{className:"mr-2 bg-gray-200 rounded-lg h-8 w-8 flex items-center justify-center"},d("svg",{className:"h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20"},d("path",{d:"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"}))),d("span",{className:"text-gray-600 text-base mr-2"},"Unlocks:")," ",s.map((function(e,t){return d("img",{key:t,src:e.image||"",className:"w-12 h-12 border-4 border-white rounded-full shadow-md"})})))),N?d("div",{className:"flex p-2 flex-col items-center my-5"},d("span",{className:"font-medium text-sm"},"Status:"),d("span",{className:"text-2xl"},"Completed")):d(l.a.Fragment,null,g&&C&&!k&&d("div",{className:"flex p-2 flex-col items-center my-5"},d("span",{className:"font-medium text-sm"},"Starts in:"),d("span",{className:"text-2xl"},Object(c.c)(D))),g&&!C&&d("div",{className:"flex p-2 flex-col items-center my-5"},d("span",{className:"font-medium text-sm"},"Registration Closed"),d("span",{className:"text-2xl"},"Starting Soon")),j&&d("div",{className:"flex p-2 flex-col items-center my-5"},d("span",{className:"font-medium text-sm"},"Registration Closed"),d("span",{className:"text-2xl"},"Starting Soon")),p&&d("div",{className:"flex p-2 flex-col items-center my-5"},d("span",{className:"font-medium text-sm"},"Status:"),d("span",{className:"text-2xl"},"In Progress / Day ",O)),b&&d("div",{className:"flex p-2 flex-col items-center my-5"},d("span",{className:"font-medium text-sm"},"Status:"),d("span",{className:"text-2xl"},"Finished")))),N?d(i.a,{href:"/users/[username]",as:"/users/".concat(null===L||void 0===L?void 0:null===(t=L.me)||void 0===t?void 0:t.username)},d("a",{className:"transition ease-in-out duration-150 hover:opacity-75 p-3 shadow-sm cursor-pointer text-white flex justify-center items-center w-full rounded-lg",style:{backgroundColor:m[o]||"#000"}},"See your Certificate \u2192")):d(l.a.Fragment,null,!w&&!y&&!k&&d(i.a,{href:o},d("a",{className:"transition ease-in-out duration-150 hover:opacity-75 p-3 shadow-sm cursor-pointer text-white flex justify-center items-center w-full rounded-lg",style:{backgroundColor:m[o]||"#000"}},g&&C&&"Join Now",g&&!C&&"Join the Waitlist",(p||b)&&"Join the Waitlist",j&&"Join the Waitlist"," \u2192")),(w||y)&&d(i.a,{href:"/c/[challenge]/lobby",as:"/c/".concat(o,"/lobby")},d("a",{className:"transition ease-in-out duration-150 hover:opacity-75 p-3 shadow-sm cursor-pointer text-white flex justify-center items-center w-full rounded-lg",style:{backgroundColor:m[o]||"#000"}},"Enter \u2192")),k&&d(i.a,{href:"/c/[challenge]/lobby",as:"/c/".concat(o,"/lobby")},d("a",{className:"transition ease-in-out duration-150 hover:opacity-75 p-3 shadow-sm cursor-pointer text-white flex justify-center items-center w-full rounded-lg",style:{backgroundColor:m[o]||"#000"}},"Under Review \u2192"))))}},WxHy:function(e,t,n){"use strict";var a=n("rePB"),l=n("q1tI"),o=n.n(l),r=n("h4VS"),s=n("vOnD"),i=o.a.createElement;function c(){var e=Object(r.a)(["\n  width: 100%;\n  overflow: visible;\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  ","\n  width: 100%;\n  position: relative;\n  background-color: "," !important;\n  z-index: 2;\n  min-height: 200px;\n  &:before {\n    ","\n    ","\n  }\n  &:after {\n    ","\n    ","\n  }\n"]);return u=function(){return e},e}var d=function(e,t,n){var a="",l="",o=n||5;switch(e){case"left":a="top"===t?-o:o,l="left";break;case"right":a="top"===t?o:-o,l="right";break;default:a="",l=""}return"".concat(t,":0; transform-origin: ").concat(l," ").concat(t,"; transform: skewY(").concat(a,"deg);")},m="\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        background: inherit;\n        z-index: -1;\n    ",f=s.a.div(u(),(function(e){return e.attrs.noMargin?null:function(e){var t=0,n=0;return void 0!==e.top&&(t=70),void 0!==e.bottom&&(n=70),"margin: ".concat(t,"px 0px ").concat(n,"px 0px;")}(e.attrs)}),(function(e){return e.attrs.bgColor}),m,(function(e){return d(e.attrs.top,"top",e.attrs.skew)}),m,(function(e){return d(e.attrs.bottom,"bottom",e.attrs.skew)})),v=s.a.div(c()),g=function(e){return i(f,{attrs:e,style:e.style,className:e.className},i(v,{style:{width:"100%",overflow:"visible"}},e.children))},p=o.a.createElement;function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.containerClassName,n=e.childrenClassName,a=e.bgColor,l=e.angleTop,o=e.angleBottom,r=e.children,s=e.forcedContainerStyle;return l||o?p(g,{bgColor:a,top:l?"left":void 0,bottom:o?"right":void 0,noMargin:!0,skew:5,className:"w-full ".concat(t||"")},p("div",{style:s,className:"mx-auto max-w-screen-xl px-4 ".concat(n||""," sm:px-6 lg:px-8")},r)):p("section",{style:h({},a&&{backgroundColor:a}),className:"w-full ".concat(t||"")},p("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  ".concat(n||"")},r))}},ogOi:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("/QsD"),r=l.a.createElement;t.a=function(e){var t=e.courses;return r("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 row-gap-5 col-gap-10 pb-10"},null===t||void 0===t?void 0:t.map((function(e){return r(o.a,{course:e,key:null===e||void 0===e?void 0:e.slug})})))}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}},[["/EDR",2,0,5,1,3,4,6,7]]]);