(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{0:function(e,t){},"0785de3f40b134973d35":function(e,t,n){var r=n("ab039aecd4a1d4fedc0e").addLocaleData,a=n("58d82b287428be065a42"),o=n("529d37966b19afdce782"),i=n("7dd68a64079d1d4cd439"),c=n("2e499298bcfce3b3045c");r(a),r(o);var u=function e(t,n){var r="en"!==t?e("en",i):{};return Object.keys(n).reduce(function(e,a){var o=n[a]||"en"===t?n[a]:r[a];return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},a,o))},{})},l={en:u("en",i),de:u("de",c)};t.appLocales=["en","de"],t.formatTranslationMessages=u,t.translationMessages=l,t.DEFAULT_LOCALE="en"},"0cbc23df16a5c6ceec4d":function(e,t,n){e.exports=n.p+".htaccess"},1:function(e,t,n){e.exports=n("8b703812aa8ae3c41814")},"2e499298bcfce3b3045c":function(e){e.exports={"boilerplate.components.Footer.author.message":"Mit Liebe gemacht von {author}.","boilerplate.components.Footer.license.message":"Dieses Projekt wird unter der MIT-Lizenz veröffentlicht.","boilerplate.components.Header.features":"","boilerplate.components.Header.home":"","boilerplate.containers.FeaturePage.css.header":"","boilerplate.containers.FeaturePage.css.message":"Die nächste Generation von CSS","boilerplate.containers.FeaturePage.feedback.header":"Sofortiges Feedback","boilerplate.containers.FeaturePage.feedback.message":"Genießen Sie die beste Entwicklungserfahrung und programmieren Sie Ihre App so schnell wie noch nie! Ihre Änderungen an dem CSS und JavaScript sind sofort reflektiert, ohne die Seite aktualisieren zu müssen. So bleibt der Anwendungszustand bestehen, auch wenn Sie etwas in dem darunter liegenden Code aktualisieren!","boilerplate.containers.FeaturePage.header":"","boilerplate.containers.FeaturePage.internationalization.header":"Komplette i18n Standard-Internationalisierung und Pluralisierung","boilerplate.containers.FeaturePage.internationalization.message":"Das Internet ist global. Mehrsprachige- und Pluralisierungsunterstützung ist entscheidend für große Web-Anwendungen.","boilerplate.containers.FeaturePage.javascript.header":"Das Internet ist global. Mehrsprachige- und Pluralisierungsunterstützung ist entscheidend für große Web-Anwendungen.","boilerplate.containers.FeaturePage.javascript.message":"Benutzen Sie ES6 template strings, object destructuring, arrow functions, JSX syntax und mehr, heute.","boilerplate.containers.FeaturePage.network.header":"","boilerplate.containers.FeaturePage.network.message":"The next frontier in performant web apps: availability without a\n      network connection from the instant your users load the app.","boilerplate.containers.FeaturePage.routing.header":"Standard Routing","boilerplate.containers.FeaturePage.routing.message":"Schreiben Sie CSS, das am selben Ort wie ihre Komponenten ist. Deterministisch generierte, einzigartige Klassennamen halten die Spezifität niedrig während styling Konflikte vermieden werden. Senden Sie nur das CSS an ihre Benutzer welches dann wirklich sichtbar ist für die schnellste Performance!","boilerplate.containers.FeaturePage.scaffolding.header":"Schnelles Scaffolding","boilerplate.containers.FeaturePage.scaffolding.message":"Automatisieren Sie die Kreation von Komponenten, Containern, Routen, Selektoren und Sagas – und ihre Tests – direkt von dem Terminal!","boilerplate.containers.FeaturePage.state_management.header":"Berechenbare Stateverwaltung","boilerplate.containers.FeaturePage.state_management.message":"Unidirectional data flow erlaubt uns alle Änderungen ihrer Applikation zu loggen und time travel debugging einzusetzen.","boilerplate.containers.HomePage.start_project.header":"Beginnen Sie Ihr nächstes React Projekt in Sekunden","boilerplate.containers.HomePage.start_project.message":"Ein skalierendes, offline-first Fundament mit der besten DX und einem Fokus auf Performance und bewährte Methoden","boilerplate.containers.HomePage.tryme.atPrefix":"","boilerplate.containers.HomePage.tryme.header":"Probiere mich!","boilerplate.containers.HomePage.tryme.message":"Zeige die Github Repositories von","boilerplate.containers.LocaleToggle.de":"","boilerplate.containers.LocaleToggle.en":"","boilerplate.containers.NotFoundPage.header":"Seite nicht gefunden."}},"3fa218e26c867fe0290c":function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u});var r=n("802cdb4f0b591dfd1229"),a=n.n(r),o=n("bd183afcc37eabd79225"),i=n.n(o),c=function(e){var t=e.format("MMMM"),n=e.format("YYYY"),r=e.add(3,"month").format("YYYY");switch(t){case"November":case"December":case"January":case"February":return{term:"Winter",year:r,short:"W",termCode:n+"01"};case"March":case"April":return{term:"Spring",year:n,short:"S",termCode:n+"03"};case"May":case"June":case"July":case"August":case"September":case"October":default:return{term:"Fall",year:n,short:"F",termCode:n+"10"}}},u=function(e,t){var n=a.a.param({crn:e,termCode:t});return i.a.get("https://cors.io/?https://registrar-apps.ucdavis.edu/courses/search/course.cfm?"+n)}},"4215219cdbf5c6447f1f":function(e,t,n){"use strict";n("f42799a5e0eca64ae5a6"),n("2ba4aaa47a084f85fd66");var r=n("6196bcf13f8dd532eda0").a.firestore();r.settings({timestampsInSnapshots:!0}),t.a=r},"491cc2e27aa2b4221847":function(e,t,n){"use strict";var r=n("54f683fcda7806277002"),a=n("4e2e9348dad8fe460c1d"),o=n("a7e3807798c0b990af09"),i=n("fcb99a06256635f70435"),c={},u=Object(r.fromJS)({loading:!1,error:!1,currentUser:null,term:null,adminLevel:null});var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t.type){case i.d:return e.set("currentUser",c);case i.c:return e.set("currentUser",t.person);case i.b:return e.merge({term:{officialDate:t.rawTerm.term+" "+t.rawTerm.year,shortDate:""+t.rawTerm.short+t.rawTerm.year,termCode:t.rawTerm.termCode,termInfo:t.rawTerm}});case i.a:return e.set("adminLevel",t.level);default:return e}},s=n("511b2e46256d95d30278");n.d(t,"a",function(){return b});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=Object(r.fromJS)({location:null});function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t.type){case o.LOCATION_CHANGE:return e.merge({location:t.payload});default:return e}}function b(e){return Object(a.combineReducers)(f({route:p,global:l,language:s.a},e))}},"511b2e46256d95d30278":function(e,t,n){"use strict";var r=n("54f683fcda7806277002"),a="app/LanguageToggle/CHANGE_LOCALE",o=n("0785de3f40b134973d35");n.d(t,"b",function(){return i});var i=Object(r.fromJS)({locale:o.DEFAULT_LOCALE});t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case a:return e.set("locale",t.locale);default:return e}}},"6196bcf13f8dd532eda0":function(e,t,n){"use strict";var r=n("bbbaad1d88f8f0ff94e9"),a=n.n(r),o={apiKey:"AIzaSyCYya0xEcwCxofi5juv8F8Hwh_lXHXNDcc",authDomain:"ucd-athena.firebaseapp.com",databaseURL:"https://ucd-athena.firebaseio.com",projectId:"ucd-athena",storageBucket:"ucd-athena.appspot.com",messagingSenderId:"220618978993"};a.a.initializeApp(o);t.a=a.a},"6542cd13fd5dd1bcffd4":function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"f",function(){return s});var r=n("a28fc3c963a1d4d1a2e5"),a=function(e){return e.get("global")},o=function(){return Object(r.a)(a,function(e){return e.get("currentUser")})},i=function(){return Object(r.a)(a,function(e){return e.get("adminLevel")})},c=function(){return Object(r.a)(a,function(e){return e.get("term")})},u=function(){return Object(r.a)(a,function(e){return e.get("loading")})},l=function(){return Object(r.a)(a,function(e){return e.get("error")})},s=function(){return Object(r.a)(a,function(e){return e.getIn(["userData","repositories"])})}},"6c9e3fc061652bee5a1b":function(e,t,n){"use strict";n("0ab772b1fa23e1661ff6");var r=n("6196bcf13f8dd532eda0").a.functions();t.a=r},"7dd68a64079d1d4cd439":function(e){e.exports={"boilerplate.components.Footer.author.message":"Made with love by {author}.","boilerplate.components.Footer.license.message":"This project is licensed under the MIT license.","boilerplate.components.Header.features":"Features","boilerplate.components.Header.home":"Home","boilerplate.containers.FeaturePage.css.header":"Features","boilerplate.containers.FeaturePage.css.message":"Next generation CSS","boilerplate.containers.FeaturePage.feedback.header":"Instant feedback","boilerplate.containers.FeaturePage.feedback.message":"Enjoy the best DX and code your app at the speed of thought! Your\n    saved changes to the CSS and JS are reflected instantaneously\n    without refreshing the page. Preserve application state even when\n    you update something in the underlying code!","boilerplate.containers.FeaturePage.header":"Features","boilerplate.containers.FeaturePage.internationalization.header":"Complete i18n Standard Internationalization & Pluralization","boilerplate.containers.FeaturePage.internationalization.message":"Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.","boilerplate.containers.FeaturePage.javascript.header":"Next generation JavaScript","boilerplate.containers.FeaturePage.javascript.message":"Use template strings, object destructuring, arrow functions, JSX\n    syntax and more, today.","boilerplate.containers.FeaturePage.network.header":"Offline-first","boilerplate.containers.FeaturePage.network.message":"The next frontier in performant web apps: availability without a\n      network connection from the instant your users load the app.","boilerplate.containers.FeaturePage.routing.header":"Industry-standard routing","boilerplate.containers.FeaturePage.routing.message":"Write composable CSS that's co-located with your components for\n    complete modularity. Unique generated class names keep the\n    specificity low while eliminating style clashes. Ship only the\n    styles that are on the page for the best performance.","boilerplate.containers.FeaturePage.scaffolding.header":"Quick scaffolding","boilerplate.containers.FeaturePage.scaffolding.message":"Automate the creation of components, containers, routes, selectors\n  and sagas - and their tests - right from the CLI!","boilerplate.containers.FeaturePage.state_management.header":"Predictable state management","boilerplate.containers.FeaturePage.state_management.message":"Unidirectional data flow allows for change logging and time travel\n    debugging.","boilerplate.containers.HomePage.start_project.header":"Start your next react project in seconds","boilerplate.containers.HomePage.start_project.message":"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices","boilerplate.containers.HomePage.tryme.atPrefix":"@","boilerplate.containers.HomePage.tryme.header":"Try me!","boilerplate.containers.HomePage.tryme.message":"Show Github repositories by","boilerplate.containers.LocaleToggle.de":"de","boilerplate.containers.LocaleToggle.en":"en","boilerplate.containers.NotFoundPage.header":"Page not found."}},"8b703812aa8ae3c41814":function(e,t,n){"use strict";n.r(t);n("a26e52c4218006ed1d2f");var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=n("63f14ac74ce296f77f4d"),i=n.n(o),c=n("d7dd51e1bf6bfc2c9c3d"),u=n("a7e3807798c0b990af09"),l=n("260f3680b921ede7f717"),s=n.n(l),f=n("89fa59dfd48f288c4600"),d=n.n(f),p=(n("6735bdf1a3a541ab43fd"),n("0d7f0986bcd2f33d8a2a")),b=n("deb1edf8e03fc2092ec7"),h=n("e95a63b25fb92ed15721"),g=n("49112c95d93be1863904"),m=n.n(g),y=n("8e4c85c29cdef1bf8a5f"),v=(m()({loader:function(){return n.e(6).then(n.bind(null,"0b8eb3e35929778b339a"))},loading:y.a}),m()({loader:function(){return n.e(7).then(n.bind(null,"c1d9efc1d07c867a8b6b"))},loading:y.a}),m()({loader:function(){return n.e(8).then(n.bind(null,"8937ca26cad1b574ef33"))},loading:y.a})),w=n("ab4cb61bcb2dc161defb"),P=n("a28fc3c963a1d4d1a2e5"),O=(n("a4bc709ef770df63747d"),n("d95b0cf107403b178365")),j=n("54f683fcda7806277002"),S=Object(j.fromJS)({derp:null});var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return arguments[1].type,e},k=n("c611ca373eec6f4e262d"),C=n("c97572d713d511527ce1"),T=n("6542cd13fd5dd1bcffd4"),A=n("6c9e3fc061652bee5a1b"),F=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=a;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),E(t,[{key:"render",value:function(){A.a.httpsCallable("getTimeStamp");return console.log(this.props),F("div",{},void 0,F(p.Helmet,{},void 0,F("title",{},void 0,"Athena"),F("meta",{name:"description",content:"Not yet here..."})),F("div",{},void 0,F(k.a,{},void 0,"Under Construction!"),F(C.a,{}),"Check back soon!"))}}]),t}();var R=Object(P.b)({user:Object(T.c)()}),x=Object(c.connect)(R,function(e){return{}}),I=Object(O.a)({key:"athenaInterfacePage",reducer:_}),H=Object(w.compose)(I,x)(L),U=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=a;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){return Promise.resolve({})},i=Object(P.b)(n),u=Object(c.connect)(i,r);return Object(w.compose)(u)(function(n){function r(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n));return a.superclass=m()(e),a.readyProps={},t.forEach(function(e){a.readyProps[e]=!1}),a.loader=e.loading,a.state={loadedProps:!1,postProps:null},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,a.a.Component),z(r,[{key:"propsAreLoaded",value:function(e){var t=this,n=Object.keys(this.readyProps);n.forEach(function(n){e[n]&&(t.readyProps[n]=!0)}),n.every(function(e){return t.readyProps[e]})&&o(e).then(function(e){return t.setState({loadedProps:!0,postProps:e})})}},{key:"componentWillReceiveProps",value:function(e,t){this.propsAreLoaded(e)}},{key:"componentDidMount",value:function(){this.propsAreLoaded(this.props)}},{key:"render",value:function(){if(this.state.loadedProps){var e=this.superclass;return a.a.createElement(e,D({},this.props,this.state.postProps))}var t=this.loader;return U(t,{})}}]),r}())},N=M({loader:function(){return n.e(9).then(n.bind(null,"335cb512c94f5a126919"))},loading:y.a},["signUpTerm","user"],{user:Object(T.c)(),signUpTerm:Object(T.b)()},null),$=m.a.Map({loader:{Bar:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(10)]).then(n.bind(null,"dc72ed96ead4ab58d986"))},Derp:function(e){return new Promise(function(e,t){e()})}},loading:y.a,render:function(e,t){var n=e.Bar.default;return a.a.createElement(n,t)}}),J=(M({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(11)]).then(n.bind(null,"ddbe73d4ba209114c297"))},loading:y.a},["signUpTerm","user"],{user:Object(T.c)(),signUpTerm:Object(T.b)()},null,function(e){e.user,e.signUpTerm;return A.a.httpsCallable("getAllUsers").call().then(function(e){return Promise.resolve({users:e.data})},function(e){return Promise.resolve({users:[]})})}),M({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,"5395a73061d314838b3e"))},loading:y.a},["user"],{user:Object(T.c)()},null),n("4215219cdbf5c6447f1f")),G=M({loader:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"9508088768bba17acd18"))},loading:y.a},["signUpTerm","user"],{user:Object(T.c)(),signUpTerm:Object(T.b)()},null,function(e){e.user;var t=e.signUpTerm;return console.log(t.get("shortDate").toLowerCase()),new Promise(function(e){J.a.collection("registration").doc(t.get("shortDate").toLowerCase()).collection("applications").onSnapshot(function(t){return e({users:t.docs.map(function(e){return e.data()}).filter(function(e){return e.approved})})})})}),W=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=a;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Y=b.a.div.withConfig({displayName:"App__AppWrapper"})(["margin:0 auto;display:flex;min-height:100%;flex-direction:column;"]);function B(){return W(Y,{},void 0,W(p.Helmet,{titleTemplate:"%s",defaultTitle:"UCD CS Tutoring"},void 0,W("meta",{name:"description",content:"CS Tutoring @ UCD"})),W(h.Switch,{},void 0,W(h.Route,{exact:!0,path:"/",component:H}),W(h.Route,{exact:!0,path:"/register",component:N}),W(h.Route,{exact:!0,path:"/approval",component:$}),W(h.Route,{exact:!0,path:"/sampletest",component:G}),W(h.Route,{path:"",component:v})))}n("8a2d1b95e05b6a321e74");var K=n("ab039aecd4a1d4fedc0e"),X=n("511b2e46256d95d30278"),q=function(e){return e.get("language",X.b)},Q=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=a;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.PureComponent),V(t,[{key:"render",value:function(){return Q(K.IntlProvider,{locale:this.props.locale,messages:this.props.messages[this.props.locale]},this.props.locale,a.a.Children.only(this.props.children))}}]),t}(),ee=Object(P.a)(Object(P.a)(q,function(e){return e.get("locale")}),function(e){return{locale:e}}),te=Object(c.connect)(ee)(Z),ne=(n("9c6be9f00377ac8be3d8"),n("c4af1989003a076339fd"),n("0cbc23df16a5c6ceec4d"),n("74431d47afb6248fcb69")),re=n("491cc2e27aa2b4221847"),ae=n("a72b40110d9c31c9b5c5");n("af618d530c9a09241673");"function"==typeof Symbol&&Symbol.iterator;var oe=Object(ne.a)();var ie=n("0785de3f40b134973d35"),ce=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  body.fontLoaded {\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #app {\n    background-color: #81d4fa;\n    min-height: 100%;\n    min-width: 100%;\n  }\n"],["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  body.fontLoaded {\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #app {\n    background-color: #81d4fa;\n    min-height: 100%;\n    min-width: 100%;\n  }\n"]);Object(b.b)(ce);var ue=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=a;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),le=new s.a("Open Sans",{}),se=new s.a("Lato",{}),fe=new s.a("Roboto",{});le.load().then(function(){se.load().then(function(){fe.load().then(function(){document.body.classList.add("fontLatoLoaded")})})});var de=d()(),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=[oe,Object(u.routerMiddleware)(t)],r=[w.applyMiddleware.apply(void 0,n)],a=w.compose,o=Object(w.createStore)(Object(re.a)(),Object(j.fromJS)(e),a.apply(void 0,r));return o.runSaga=oe.run,o.injectedReducers={},o.injectedSagas={},Object(ae.a)(o.dispatch),Object(ae.b)(o.dispatch),o}({},de),be=document.getElementById("app"),he=function(e){i.a.render(ue(c.Provider,{store:pe},void 0,ue(te,{messages:e},void 0,ue(u.ConnectedRouter,{history:de},void 0,ue(B,{})))),be)};window.Intl?he(ie.translationMessages):new Promise(function(e){e(Promise.all([n.e(3),n.e(16)]).then(n.t.bind(null,"97694e21b72f8e9351c4",7)))}).then(function(){return Promise.all([n.e(15).then(n.t.bind(null,"f030ad8f70186ef5cb63",7)),n.e(14).then(n.t.bind(null,"14584c41c196d3540f41",7))])}).then(function(){return he(ie.translationMessages)}).catch(function(e){throw e}),n("30d14b3a3295666f3aba").install()},"8e4c85c29cdef1bf8a5f":function(e,t,n){"use strict";n("8af190b70a6bc55c6f1b"),n("8a2d1b95e05b6a321e74");var r=n("deb1edf8e03fc2092ec7"),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=a;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),o=Object(r.c)(["0%,39%,100%{opacity:0;}40%{opacity:1;}"]),i=function(e){var t=r.a.div.withConfig({displayName:"Circle__CirclePrimitive"})(["width:100%;height:100%;position:absolute;left:0;top:0;"," &:before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:#999;border-radius:100%;animation:"," 1.2s infinite ease-in-out both;",";}"],e.rotate&&"\n      -webkit-transform: rotate("+e.rotate+"deg);\n      -ms-transform: rotate("+e.rotate+"deg);\n      transform: rotate("+e.rotate+"deg);\n    ",o,e.delay&&"\n        -webkit-animation-delay: "+e.delay+"s;\n        animation-delay: "+e.delay+"s;\n      ");return a(t,{})},c=r.a.div.withConfig({displayName:"Wrapper"})(["margin:2em auto;width:40px;height:40px;position:relative;"]),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=a;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}();t.a=function(){return u(c,{},void 0,u(i,{}),u(i,{rotate:30,delay:-1.1}),u(i,{rotate:60,delay:-1}),u(i,{rotate:90,delay:-.9}),u(i,{rotate:120,delay:-.8}),u(i,{rotate:150,delay:-.7}),u(i,{rotate:180,delay:-.6}),u(i,{rotate:210,delay:-.5}),u(i,{rotate:240,delay:-.4}),u(i,{rotate:270,delay:-.3}),u(i,{rotate:300,delay:-.2}),u(i,{rotate:330,delay:-.1}))}},"9047425c637228e0d56f":function(e,t,n){"use strict";n("af618d530c9a09241673");var r=n("6196bcf13f8dd532eda0");t.a=r.a},"9c6be9f00377ac8be3d8":function(e,t,n){e.exports=n.p+"favicon.ico"},a72b40110d9c31c9b5c5:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return d}),n.d(t,"e",function(){return p}),n.d(t,"d",function(){return b});var r=n("9047425c637228e0d56f"),a=n("6c9e3fc061652bee5a1b"),o=n("4215219cdbf5c6447f1f"),i=n("3fa218e26c867fe0290c"),c=n("da010f21fea25912dd9e"),u=n.n(c),l=n("fcb99a06256635f70435");function s(e){a.a.httpsCallable("getTimeStamp")().then(function(t){e(function(e){return{type:l.b,rawTerm:Object(i.b)(u()(parseInt(e.data,10)))}}(t))})}function f(e){var t=null;r.a.auth().onAuthStateChanged(function(n){n?(t&&t(),t=o.a.doc("metadata/"+n.uid).onSnapshot(function(){n.getIdToken(!0).then(function(){return r.a.auth().currentUser.getIdTokenResult().then(function(t){e(function(e){return{type:l.a,level:e}}(t.claims.adminStatus))})}).catch(function(e){console.log(e)}),e(function(e){return{type:l.c,person:e}}(n))})):e({type:l.d})})}function d(){return{type:l.e}}function p(e,t){return{type:l.g,repos:e,username:t}}function b(e){return{type:l.f,error:e}}},c4af1989003a076339fd:function(e,t,n){e.exports=n.p+"registration.jpg"},c611ca373eec6f4e262d:function(e,t,n){"use strict";var r=n("deb1edf8e03fc2092ec7").a.h1.withConfig({displayName:"H1"})(["font-size:2em;margin-bottom:0.25em;"]);t.a=r},c97572d713d511527ce1:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=n("9047425c637228e0d56f"),i=n("f37e622005550ebf4c79"),c=n("a28fc3c963a1d4d1a2e5"),u=n("d7dd51e1bf6bfc2c9c3d"),l=n("ab4cb61bcb2dc161defb"),s=n("6542cd13fd5dd1bcffd4"),f=(n("8a2d1b95e05b6a321e74"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var o=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});if(1===i)n.children=a;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}()),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var p=new o.a.auth.GoogleAuthProvider;p.setCustomParameters({hd:"ucdavis.edu"});var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),d(t,[{key:"loginPopup",value:function(){o.a.auth().signInWithPopup(p).then(function(e){e.credential.accessToken,e.user}).catch(function(e){console.log(e);e.code,e.message,e.email,e.credential})}},{key:"logOut",value:function(){o.a.auth().signOut().then(function(){}).catch(function(e){})}},{key:"render",value:function(){var e=this;return this.props.currentUser&&this.props.currentUser.uid?f(i.b,{onClick:function(){return e.logOut()}},void 0,"Log out"):f(i.b,{onClick:function(){return e.loginPopup()}},void 0,"Log in")}}]),t}(),h=Object(c.b)({currentUser:Object(s.c)()}),g=Object(u.connect)(h,null);t.a=Object(l.compose)(g)(b)},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("f2873ecf7390fe7d7c89"),a=n.n(r),o=n("f3b0ff1628e56352bcbf"),i=n.n(o),c=n("d3a850c4000d77bccc89"),u=n.n(c),l=n("6a4f9c383785f9168266"),s=n.n(l);function f(e){var t={dispatch:i.a,subscribe:i.a,getState:i.a,replaceReducer:i.a,runSaga:i.a,injectedReducers:u.a,injectedSagas:u.a};s()(a()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=n("8a2d1b95e05b6a321e74"),i=n.n(o),c=n("5ef9de3df8d92ea0e41c"),u=n.n(c),l=n("6a4f9c383785f9168266"),s=n.n(l),f=n("a1cf5d6fa4ed65a6ddd5"),d=n.n(f),p=n("f3b0ff1628e56352bcbf"),b=n.n(p),h=n("5fa3f8487e09c6182715"),g=n.n(h),m=n("cc13decd9f9c09598c2f"),y=n("491cc2e27aa2b4221847");function v(e){return Object(m.a)(e),{injectReducer:function(e,t){return function(n,r){t||Object(m.a)(e),s()(g()(n)&&!d()(n)&&b()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(y.a)(e.injectedReducers)))}}(e,!0)}}var w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.reducer;return function(e){var r=function(r){function o(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=n=P(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),n.injectors=v(n.context.store),P(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,a.a.Component),w(o,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),o}();return r.WrappedComponent=e,r.contextTypes={store:i.a.object.isRequired},r.displayName="withReducer("+(e.displayName||e.name||"Component")+")",u()(r,e)}}},fcb99a06256635f70435:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"g",function(){return a}),n.d(t,"f",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l});var r="boilerplate/App/LOAD_REPOS",a="boilerplate/App/LOAD_REPOS_SUCCESS",o="boilerplate/App/LOAD_REPOS_ERROR",i="athena/App/SIGN_IN",c="athena/App/SIGN_OUT",u="athena/App/GET_TERM",l="athena/App/GET_ADMIN_LEVEL"}},[[1,17,18]]]);