(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f131923a"],{"057f":function(t,r,n){var e=n("fc6a"),o=n("241c").f,i={}.toString,f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(r){return f.slice()}};t.exports.f=function(t){return f&&"[object Window]"==i.call(t)?c(t):o(e(t))}},"65f0":function(t,r,n){var e=n("861d"),o=n("e8b5"),i=n("b622"),f=i("species");t.exports=function(t,r){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?e(n)&&(n=n[f],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},"746f":function(t,r,n){var e=n("428f"),o=n("5135"),i=n("e538"),f=n("9bf2").f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||f(r,t,{value:i.f(t)})}},"7db0":function(t,r,n){"use strict";var e=n("23e7"),o=n("b727").find,i=n("44d2"),f="find",c=!0;f in[]&&Array(1)[f]((function(){c=!1})),e({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(f)},a4d3:function(t,r,n){"use strict";var e=n("23e7"),o=n("da84"),i=n("d066"),f=n("c430"),c=n("83ab"),u=n("4930"),s=n("fdbf"),a=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),b=n("825a"),v=n("7b0b"),y=n("fc6a"),h=n("c04e"),g=n("5c6c"),m=n("7c73"),w=n("df75"),S=n("241c"),O=n("057f"),j=n("7418"),x=n("06cf"),P=n("9bf2"),A=n("d1e7"),E=n("9112"),_=n("6eeb"),k=n("5692"),N=n("f772"),J=n("d012"),$=n("90e3"),C=n("b622"),F=n("e538"),I=n("746f"),T=n("d44e"),D=n("69f3"),Q=n("b727").forEach,W=N("hidden"),q="Symbol",z="prototype",B=C("toPrimitive"),G=D.set,H=D.getterFor(q),K=Object[z],L=o.Symbol,M=i("JSON","stringify"),R=x.f,U=P.f,V=O.f,X=A.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),rt=k("symbol-to-string-registry"),nt=k("wks"),et=o.QObject,ot=!et||!et[z]||!et[z].findChild,it=c&&a((function(){return 7!=m(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=R(K,r);e&&delete K[r],U(t,r,n),e&&t!==K&&U(K,r,e)}:U,ft=function(t,r){var n=Y[t]=m(L[z]);return G(n,{type:q,tag:t,description:r}),c||(n.description=r),n},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof L},ut=function(t,r,n){t===K&&ut(Z,r,n),b(t);var e=h(r,!0);return b(n),l(Y,e)?(n.enumerable?(l(t,W)&&t[W][e]&&(t[W][e]=!1),n=m(n,{enumerable:g(0,!1)})):(l(t,W)||U(t,W,g(1,{})),t[W][e]=!0),it(t,e,n)):U(t,e,n)},st=function(t,r){b(t);var n=y(r),e=w(n).concat(bt(n));return Q(e,(function(r){c&&!lt.call(n,r)||ut(t,r,n[r])})),t},at=function(t,r){return void 0===r?m(t):st(m(t),r)},lt=function(t){var r=h(t,!0),n=X.call(this,r);return!(this===K&&l(Y,r)&&!l(Z,r))&&(!(n||!l(this,r)||!l(Y,r)||l(this,W)&&this[W][r])||n)},dt=function(t,r){var n=y(t),e=h(r,!0);if(n!==K||!l(Y,e)||l(Z,e)){var o=R(n,e);return!o||!l(Y,e)||l(n,W)&&n[W][e]||(o.enumerable=!0),o}},pt=function(t){var r=V(y(t)),n=[];return Q(r,(function(t){l(Y,t)||l(J,t)||n.push(t)})),n},bt=function(t){var r=t===K,n=V(r?Z:y(t)),e=[];return Q(n,(function(t){!l(Y,t)||r&&!l(K,t)||e.push(Y[t])})),e};if(u||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=$(t),n=function(t){this===K&&n.call(Z,t),l(this,W)&&l(this[W],r)&&(this[W][r]=!1),it(this,r,g(1,t))};return c&&ot&&it(K,r,{configurable:!0,set:n}),ft(r,t)},_(L[z],"toString",(function(){return H(this).tag})),_(L,"withoutSetter",(function(t){return ft($(t),t)})),A.f=lt,P.f=ut,x.f=dt,S.f=O.f=pt,j.f=bt,F.f=function(t){return ft(C(t),t)},c&&(U(L[z],"description",{configurable:!0,get:function(){return H(this).description}}),f||_(K,"propertyIsEnumerable",lt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:L}),Q(w(nt),(function(t){I(t)})),e({target:q,stat:!0,forced:!u},{for:function(t){var r=String(t);if(l(tt,r))return tt[r];var n=L(r);return tt[r]=n,rt[n]=r,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!c},{create:at,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),e({target:"Object",stat:!0,forced:a((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),M){var vt=!u||a((function(){var t=L();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))}));e({target:"JSON",stat:!0,forced:vt},{stringify:function(t,r,n){var e,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(e=r,(p(r)||void 0!==t)&&!ct(t))return d(r)||(r=function(t,r){if("function"==typeof e&&(r=e.call(this,t,r)),!ct(r))return r}),o[1]=r,M.apply(null,o)}})}L[z][B]||E(L[z],B,L[z].valueOf),T(L,q),J[W]=!0},b727:function(t,r,n){var e=n("0366"),o=n("44ad"),i=n("7b0b"),f=n("50c4"),c=n("65f0"),u=[].push,s=function(t){var r=1==t,n=2==t,s=3==t,a=4==t,l=6==t,d=7==t,p=5==t||l;return function(b,v,y,h){for(var g,m,w=i(b),S=o(w),O=e(v,y,3),j=f(S.length),x=0,P=h||c,A=r?P(b,j):n||d?P(b,0):void 0;j>x;x++)if((p||x in S)&&(g=S[x],m=O(g,x,w),t))if(r)A[x]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:u.call(A,g)}else switch(t){case 4:return!1;case 7:u.call(A,g)}return l?-1:s||a?a:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},c363:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"flex flex-col w-full md:w-1/2 m-auto"},[n("h2",{staticClass:"font-semibold text-xl mb-4"},[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.content))])])},o=[],i=(n("7db0"),n("a4d3"),n("e01a"),{props:{posts:{type:Array,default:function(){return[]}}},computed:{post:function(){var t=this.$route.params.slug;return this.posts.find((function(r){return r.slug===t}))},title:function(){return this.post&&this.post.title},content:function(){return this.post&&this.post.description}}}),f=i,c=n("2877"),u=Object(c["a"])(f,e,o,!1,null,null,null);r["default"]=u.exports},e01a:function(t,r,n){"use strict";var e=n("23e7"),o=n("83ab"),i=n("da84"),f=n("5135"),c=n("861d"),u=n("9bf2").f,s=n("e893"),a=i.Symbol;if(o&&"function"==typeof a&&(!("description"in a.prototype)||void 0!==a().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof d?new a(t):void 0===t?a():a(t);return""===t&&(l[r]=!0),r};s(d,a);var p=d.prototype=a.prototype;p.constructor=d;var b=p.toString,v="Symbol(test)"==String(a("test")),y=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,r=b.call(t);if(f(l,t))return"";var n=v?r.slice(7,-1):r.replace(y,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:d})}},e538:function(t,r,n){var e=n("b622");r.f=e},e8b5:function(t,r,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}}}]);
//# sourceMappingURL=chunk-f131923a.6d82f856.js.map