(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dc72ed96ead4ab58d986:function(e,t,n){"use strict";n.r(t);var a=n("8af190b70a6bc55c6f1b"),o=n.n(a),r=n("d7dd51e1bf6bfc2c9c3d"),i=n("ab4cb61bcb2dc161defb"),c=n("a28fc3c963a1d4d1a2e5"),l=n("d95b0cf107403b178365"),u=n("54f683fcda7806277002"),s=Object(u.fromJS)({derp:null});var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return arguments[1].type,e},f=n("6542cd13fd5dd1bcffd4"),d=(n("3fa218e26c867fe0290c"),n("435859b6b76fb67a754a")),b=n.n(d),v=n("6938d226fd372a75cbf9"),h=(n("8a2d1b95e05b6a321e74"),n("b88b4ca4fbcce35e1752")),m=n.n(h),y=n("dfed1fb5d3a1df4e62d5"),g=n.n(y),w=n("c16cfdb2c84681957157"),O=n.n(w),j=n("921c0b8c557fe6ba5da8"),S=n.n(j),k=n("80e80f602055becd595c"),_=n.n(k),C=n("b27e083e7741c2dccb3f"),x=n.n(C),R=n("b78ee477e6ac6a65dd83"),N=n.n(R),P=n("282d5645b44ba868741e"),A=n.n(P),E=n("2aea235afd5c55b8b19b"),D=n.n(E),T=n("ff4f53cc119f232ddc3a"),L=n.n(T),V=n("03027ef652f840147476"),$=n.n(V),I=n("c043cc14cfc50e8a9a6c"),B=n.n(I),q=n("26e95055143f95aa9ed4"),F=n.n(q),G=n("336be1f03a45da13ce56"),H=n.n(G),J=n("e777244f8e08c53fe98b"),W=n.n(J),z=n("432aae369667202efa42"),M=n.n(z),Q=n("c7fd554010f79f6c0ef8"),U=n.n(Q),K=n("f7ea02e80a2ceaf9aa88"),X=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,o){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}(),Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var Z=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:e.initialValue},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),Y(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.elem,o=Object(K.debounce)(1e3,function(t){e.props.baseRef.doc(a.id).set({approverComments:t},{merge:!0})});return X(U.a,{id:"textarea",label:"Approver Comments",value:this.state.value,multiline:!0,className:n.textField,onChange:function(t){var n=t.target.value;e.setState({value:n}),o(n)},margin:"normal"})}}]),t}(),ee=Object(c.b)({}),te=Object(r.connect)(ee,null),ne=Object(i.compose)(te,Object(v.withStyles)(function(e){return{textField:{width:"100%",marginTop:"0px"}}},{name:"ApprovalComments"}))(Z),ae=n("4215219cdbf5c6447f1f"),oe=n("ee57102d936cee5d3060"),re=n.n(oe),ie=(n("7d90b3becf25471abfbc"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,o){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}()),ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var le=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),ce(t,[{key:"render",value:function(){var e=this.props,t=e.src,n=e.closeHandler;return ie("div",{},void 0,t&&ie(re.a,{mainSrc:t,onCloseRequest:n}))}}]),t}(),ue=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,o){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}(),se=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function pe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var fe=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n=a=pe(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a.state={expanded:null,lightBoxSrc:null},a.handleChange=function(e){return function(t,n){a.setState({expanded:!!n&&e})}},pe(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),se(t,[{key:"acceptStudent",value:function(e){var t=e.data();ae.a.collection("registration").doc(t.term.toLowerCase()).collection("applications").doc(e.id).update({approved:!0})}},{key:"resetStudent",value:function(e){var t=e.data();ae.a.collection("registration").doc(t.term.toLowerCase()).collection("applications").doc(e.id).update({approved:null})}},{key:"declineStudent",value:function(e){var t=e.data();ae.a.collection("registration").doc(t.term.toLowerCase()).collection("applications").doc(e.id).update({approved:!1})}},{key:"generateListData",value:function(){var e=this,t=this.state.expanded,n=this.props,a=n.classes,o=n.groupName,r=n.baseRef;return this.props.listData.filter(function(t){return!(e.props.filter&&e.props.filter.trim().length>0)||Object.values(t.data()).filter(function(t){return t&&String(t).toLowerCase().includes(e.props.filter.trim().toLowerCase())}).length>0}).sort(function(e,t){var n=e.data().creditsRequested,a=t.data().creditsRequested,o=e.data().givenName,r=t.data().givenName;return n<a?-1:n>a?1:o<r?-1:o>r?1:0}).map(function(n,i){var c=n.data();return ue(m.a,{expanded:t===o+"-panel-"+i,onChange:e.handleChange(o+"-panel-"+i)},n.id,ue(le,{src:e.state.lightBoxSrc,closeHandler:function(){e.setState({lightBoxSrc:null})}}),ue(O.a,{expandIcon:ue(_.a,{})},void 0,ue(S.a,{className:a.heading},void 0,c.givenName+(c.customName&&c.customName.length>0?" ("+c.customName+")":"")),ue(S.a,{className:a.secondaryHeading},void 0,"Reported GPA: "+c.gpa.toFixed(2)+" | "+(c.creditsRequested>0?c.creditsRequested+" units":"Volunteer"))),ue(g.a,{},void 0,ue(b.a,{container:!0,spacing:8},void 0,ue(b.a,{item:!0,xs:6},void 0,ue(H.a,{className:a.fullWidthList},void 0,ue(W.a,{button:!0,onClick:function(){document.getElementById(n.id+"-id").select(),document.execCommand("Copy")}},void 0,ue(M.a,{primary:"ID (click to copy)",secondary:c.idNumber}),ue("input",{style:{position:"absolute",left:"-999em"},onChange:function(){},"aria-hidden":"true",id:n.id+"-id",value:c.idNumber})),ue(x.a,{}),ue(W.a,{},void 0,ue(M.a,{primary:"Email",secondary:c.givenEmail})),ue(x.a,{}),ue(W.a,{},void 0,ue(M.a,{primary:"Tutoring For",secondary:c.tutoredClasses})),ue(x.a,{}),c.anythingElse?ue("div",{},void 0,ue(x.a,{}),ue(W.a,{},void 0,ue(M.a,{primary:"Additional Info",secondary:c.anythingElse}))):null)),ue(b.a,{item:!0,xs:6},void 0,ue(H.a,{className:a.fullWidthList},void 0,ue(W.a,{},void 0,ue(M.a,{primary:"Taking Classes",secondary:c.takingClasses})),ue(W.a,{button:!0,onClick:function(){window.open("https://i.imgur.com/"+JSON.parse(c.storedImage).id+".gif")}},void 0,ue(M.a,{primary:"View Schedule",secondary:"Opens in a new window"})),ue(W.a,{},void 0,ue(ne,{initialValue:c.approverComments,elem:n,baseRef:r})))))),ue(x.a,{}),ue(L.a,{className:a.expansionPanel},void 0,"Approved"!==e.props.groupName?ue(D.a,{variant:"contained",mini:!0,component:"span","aria-label":"Accept",className:a.buttonAccept,onClick:function(){return e.acceptStudent(n)}},void 0,"Accept"):ue("div",{}),"Rejected"!==e.props.groupName?ue(D.a,{variant:"contained",mini:!0,component:"span","aria-label":"Decline",className:a.buttonDecline,onClick:function(){return e.declineStudent(n)}},void 0,"Reject"):ue("div",{}),"Rejected"===e.props.groupName||"Approved"===e.props.groupName?ue(D.a,{variant:"contained",mini:!0,component:"span","aria-label":"Reset",className:a.buttonReset,onClick:function(){return e.resetStudent(n)}},void 0,"Reset"):ue("div",{})))})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.groupName,a=e.listData;return null===a||0===a.length?ue("div",{}):ue("div",{className:t.root},void 0,ue(N.a,{position:"static",color:"default"},void 0,ue(A.a,{},void 0,ue(S.a,{variant:"title",color:"inherit"},void 0,n))),this.generateListData())}}]),t}(),de=Object(c.b)({}),be=Object(r.connect)(de,null),ve=Object(i.compose)(be,Object(v.withStyles)(function(e){return{root:{width:"100%",marginBottom:40},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},secondRoot:{flexGrow:1},button:{margin:e.spacing.unit},buttonAccept:{background:B.a[600],"&:hover":{background:B.a[900]},margin:e.spacing.unit,padding:4,color:"white"},buttonDecline:{background:$.a[600],"&:hover":{background:$.a[900]},margin:e.spacing.unit,padding:4,color:"white"},buttonReset:{background:F.a[600],"&:hover":{background:F.a[900]},margin:e.spacing.unit,padding:4,color:"white"},expansionPanel:{padding:0},fullWidthList:{width:"100%"},textField:{width:"100%"}}},{name:"ApprovalGroup"}))(fe);n.d(t,"mapDispatchToProps",function(){return ge});var he=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,o){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}(),me=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var ye=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={pending:null,approved:null,rejected:null,searchValue:null,baseRef:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),me(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;if(null==e.term&&null!=this.props.term){var a=ae.a.collection("registration").doc(this.props.term.get("shortDate").toLowerCase()).collection("applications");a.onSnapshot(function(e){var t=[],o=[],r=[];e.forEach(function(e){var n=e.data();!0===n.approved?o.push(e):!1===n.approved?r.push(e):t.push(e)}),n.setState({pending:t,approved:o,rejected:r,baseRef:a})})}}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.adminStatus?he("div",{className:t.root},void 0,he(b.a,{container:!0,spacing:24},void 0,he(b.a,{item:!0,xs:12},void 0,he("div",{className:t.inputMargin},void 0,he(U.a,{id:"full-width",label:"Quick Search",InputLabelProps:{shrink:!0},helperText:"Narrow down results using name or ID",fullWidth:!0,margin:"normal",onChange:function(t){e.setState({searchValue:t.target.value})}})),he(ve,{listData:this.state.pending,filter:this.state.searchValue,groupName:"Pending",baseRef:this.state.baseRef}),he(ve,{listData:this.state.approved,groupName:"Approved",filter:this.state.searchValue,baseRef:this.state.baseRef}),he(ve,{listData:this.state.rejected,groupName:"Rejected",filter:this.state.searchValue,baseRef:this.state.baseRef})))):he("div",{})}}]),t}();function ge(e){return{}}var we=Object(c.b)({user:Object(f.c)(),term:Object(f.b)(),adminStatus:Object(f.a)()}),Oe=Object(r.connect)(we,ge),je=Object(l.a)({key:"athenaApprovalPage",reducer:p});t.default=Object(i.compose)(Object(v.withStyles)(function(e){return{root:{flexGrow:1,margin:10},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary},inputMargin:{padding:10}}},{name:"AthenaApprovalPage"}),je,Oe)(ye)}}]);