(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ddbe73d4ba209114c297:function(e,t,a){"use strict";a.r(t);var n=a("8af190b70a6bc55c6f1b"),o=a.n(n),r=(a("8a2d1b95e05b6a321e74"),a("2abb2ecfab271efcf057")),i=a.n(r),c=a("f466c6fac21e2bd173f8"),l=a.n(c),s=a("f0d76769f542545382df"),u=a.n(s),f=a("51fb35e6729de03444b8"),p=a.n(f),d=a("98b41f971f7301538e8d"),h=a.n(d),b=a("a289f12938702445a8e7"),g=a.n(b),P=a("b02fe3f80d4238b52f20"),v=a.n(P),y=a("e799c547a20a503b338f"),m=a.n(y),w=a("f9384e0cf9112c988408"),C=a.n(w),k=a("46d80164b9622d7eb23c"),O=a.n(k),_=a("77cf2a9b8bcb0d91d608"),S=a.n(_),B=a("8f601483c73c603f5044"),N=a.n(B),j=a("6938d226fd372a75cbf9"),A=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,n,o){var r=t&&t.defaultProps,i=arguments.length-3;if(a||0===i||(a={}),a&&r)for(var c in r)void 0===a[c]&&(a[c]=r[c]);else a||(a=r||{});if(1===i)a.children=o;else if(i>1){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+3];a.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}}(),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=function(e){function t(){var e,a,n;L(this,t);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return a=n=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.handleFirstPageButtonClick=function(e){n.props.onChangePage(e,0)},n.handleBackButtonClick=function(e){n.props.onChangePage(e,n.props.page-1)},n.handleNextButtonClick=function(e){n.props.onChangePage(e,n.props.page+1)},n.handleLastPageButtonClick=function(e){n.props.onChangePage(e,Math.max(0,Math.ceil(n.props.count/n.props.rowsPerPage)-1))},M(n,a)}return R(t,o.a.Component),x(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.count,n=e.page,o=e.rowsPerPage,r=e.theme;return A("div",{className:t.root},void 0,A(m.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},void 0,"rtl"===r.direction?A(N.a,{}):A(C.a,{})),A(m.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},void 0,"rtl"===r.direction?A(S.a,{}):A(O.a,{})),A(m.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(a/o)-1,"aria-label":"Next Page"},void 0,"rtl"===r.direction?A(O.a,{}):A(S.a,{})),A(m.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(a/o)-1,"aria-label":"Last Page"},void 0,"rtl"===r.direction?A(C.a,{}):A(N.a,{})))}}]),t}(),F=Object(j.withStyles)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(E),T=function(e){function t(){var e,a,n;L(this,t);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return a=n=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.state={rows:[].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(n.props.users)).sort(function(e,t){return e.displayName<t.displayName?-1:1}),page:0,rowsPerPage:10},n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:e.target.value})},M(n,a)}return R(t,o.a.Component),x(t,[{key:"render",value:function(){console.log(this.props.users);var e=this.props.classes,t=this.state,a=t.rows,n=t.rowsPerPage,o=t.page;Math.min(n,a.length-o*n);return A(v.a,{className:e.root},void 0,A("div",{className:e.tableWrapper},void 0,A(i.a,{className:e.table},void 0,A(l.a,{},void 0,a.slice(o*n,o*n+n).map(function(e){return A(g.a,{},e.uid,A(u.a,{component:"th",scope:"row"},void 0,e.displayName),A(u.a,{numeric:!0},void 0,e.email),A(u.a,{numeric:!0},void 0,e.customClaims&&e.customClaims.adminStatus?"Admin":""))})),A(p.a,{},void 0,A(g.a,{},void 0,A(h.a,{colSpan:12,count:a.length,rowsPerPage:n,rowsPerPageOptions:[10,20,50,100],page:o,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,ActionsComponent:F}))))))}}]),t}();t.default=Object(j.withStyles)(function(e){return{root:{margin:2*e.spacing.unit},tableWrapper:{overflowX:"auto"},table:{tableLayout:"auto"}}})(T)}}]);