import{S as t,i as e,s as n,e as s,j as l,c as a,a as r,m as o,d as i,f as c,o as d,p as f,q as h,B as m,r as p,w as u,u as $,v as g,A as x,b as v,k as w,n as y,D as b,E,J as k,P as A,l as D,t as I,g as L,I as C,Q as V,G as M,L as N,M as j,N as F,$ as B,h as P,X as T,V as S,Y as H,F as O}from"./vendor-5b15c0f4.js";import{p as q,A as R}from"./All.wc-40d741d4.js";import{u as U}from"./utils-0a0b9476.js";import{s as G,c as J}from"./stores-3d2adcb0.js";import"./fetcheriser-b1b69b5f.js";import{P as Q,a as X}from"./PostText-66137709.js";import{r as Y}from"./singletons-bb9012b7.js";const z=async function(t,e){return Y.goto(t,e,[])};function K(t){let e,n,v;const w=[{index:t[1]},t[3](t[2])];var y=t[0];function b(t){let e={};for(let n=0;n<w.length;n+=1)e=x(e,w[n]);return{props:e}}return y&&(n=new y(b())),{c(){e=s("section"),n&&l(n.$$.fragment)},l(t){e=a(t,"SECTION",{});var s=r(e);n&&o(n.$$.fragment,s),s.forEach(i)},m(t,s){c(t,e,s),n&&d(n,e,null),v=!0},p(t,[s]){const a=14&s?f(w,[2&s&&{index:t[1]},12&s&&h(t[3](t[2]))]):{};if(y!==(y=t[0])){if(n){m();const t=n;p(t.$$.fragment,1,0,(()=>{u(t,1)})),$()}y?(n=new y(b()),l(n.$$.fragment),g(n.$$.fragment,1),d(n,e,null)):n=null}else y&&n.$set(a)},i(t){v||(n&&g(n.$$.fragment,t),v=!0)},o(t){n&&p(n.$$.fragment,t),v=!1},d(t){t&&i(e),n&&u(n)}}}function W(t,e,n){let{component:s}=e,{index:l}=e,{data:a}=e,{keys:r}=e;return t.$$set=t=>{"component"in t&&n(0,s=t.component),"index"in t&&n(1,l=t.index),"data"in t&&n(2,a=t.data),"keys"in t&&n(4,r=t.keys)},[s,l,a,function(t){let e={};return r.forEach((n=>e[n]=t[n])),e},r]}class Z extends t{constructor(t){super(),e(this,t,W,K,n,{component:0,index:1,data:2,keys:4})}}const _=t=>({}),tt=t=>({}),et=t=>({}),nt=t=>({}),st=t=>({}),lt=t=>({});function at(t,e,n){const s=t.slice();return s[27]=e[n],s[29]=n,s}const rt=t=>({}),ot=t=>({});function it(t,e,n){const s=t.slice();return s[27]=e[n],s}function ct(t){let e,n,l=t[9],o=[];for(let s=0;s<l.length;s+=1)o[s]=dt(it(t,l,s));return{c(){e=s("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0,style:!0});var n=r(e);for(let e=0;e<o.length;e+=1)o[e].l(n);n.forEach(i),this.h()},h(){v(e,"class","view flex column-start-stretch fixed h100pc flex"),v(e,"style",n=`\n\t\t\tleft: ${t[12].left+t[12].width}px;\n\t\t\ttop: 16px;\n\t\t\theight: ${t[14]?window.innerHeight-32:0}px;\n\t\t\tmargin-left: 1em;\n\t\t`)},m(t,n){c(t,e,n);for(let s=0;s<o.length;s+=1)o[s].m(e,null)},p(t,s){if(9728&s[0]){let n;for(l=t[9],n=0;n<l.length;n+=1){const a=it(t,l,n);o[n]?o[n].p(a,s):(o[n]=dt(a),o[n].c(),o[n].m(e,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=l.length}4096&s[0]&&n!==(n=`\n\t\t\tleft: ${t[12].left+t[12].width}px;\n\t\t\ttop: 16px;\n\t\t\theight: ${t[14]?window.innerHeight-32:0}px;\n\t\t\tmargin-left: 1em;\n\t\t`)&&v(e,"style",n)},d(t){t&&i(e),k(o,t)}}}function dt(t){let e,n,l,o;return{c(){e=s("div"),n=s("span"),l=w(),this.h()},l(t){e=a(t,"DIV",{class:!0,style:!0});var s=r(e);n=a(s,"SPAN",{class:!0}),r(n).forEach(i),l=y(s),s.forEach(i),this.h()},h(){v(n,"class","fill"),b(n,"filled",t[27].title==t[13].title),v(e,"class","flex b1-solid grow rel"),v(e,"style",o=`margin-top: -1px;width: 5px;flex-basis: ${(100/t[10]*t[27].height).toFixed(1)}%`)},m(t,s){c(t,e,s),E(e,n),E(e,l)},p(t,s){8704&s[0]&&b(n,"filled",t[27].title==t[13].title),1536&s[0]&&o!==(o=`margin-top: -1px;width: 5px;flex-basis: ${(100/t[10]*t[27].height).toFixed(1)}%`)&&v(e,"style",o)},d(t){t&&i(e)}}}function ft(t){let e,n,s=!t[16]&&function(t){let e,n;return e=new Z({props:{index:t[29],component:t[0],keys:t[1],data:t[27]}}),{c(){l(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.component=t[0]),2&n[0]&&(s.keys=t[1]),132&n[0]&&(s.data=t[27]),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}(t);return{c(){s&&s.c(),e=D()},l(t){s&&s.l(t),e=D()},m(t,l){s&&s.m(t,l),c(t,e,l),n=!0},p(t,e){t[16]||s.p(t,e)},i(t){n||(g(s),n=!0)},o(t){p(s),n=!1},d(t){s&&s.d(t),t&&i(e)}}}function ht(t){let e,n,l,o,d,f,h;const m=t[19].more,u=A(m,t,t[18],lt);return{c(){e=s("div"),n=I("Loading"),l=w(),o=s("div"),u&&u.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);n=L(s,"Loading"),s.forEach(i),l=y(t),o=a(t,"DIV",{});var c=r(o);u&&u.l(c),c.forEach(i),this.h()},h(){v(e,"class","ptb4 f3")},m(s,a){c(s,e,a),E(e,n),c(s,l,a),c(s,o,a),u&&u.m(o,null),d=!0,f||(h=C(o,"click",t[15]),f=!0)},p(t,e){u&&u.p&&(!d||262144&e[0])&&V(u,m,t,t[18],e,st,lt)},i(t){d||(g(u,t),d=!0)},o(t){p(u,t),d=!1},d(t){t&&i(e),t&&i(l),t&&i(o),u&&u.d(t),f=!1,h()}}}function mt(t){let e;const n=t[19].finished,s=A(n,t,t[18],tt);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,l){s&&s.p&&(!e||262144&l[0])&&V(s,n,t,t[18],l,_,tt)},i(t){e||(g(s,t),e=!0)},o(t){p(s,t),e=!1},d(t){s&&s.d(t)}}}function pt(t){let e,n,l,o,d,f,h,u,x,b=t[3]&&ct(t);const D=t[19].body,I=A(D,t,t[18],ot);let L=t[2].slice(0,t[7]),C=[];for(let s=0;s<L.length;s+=1)C[s]=ft(at(t,L,s));const M=t=>p(C[t],1,1,(()=>{C[t]=null}));let N=!t[11]&&ht(t);const j=t[19].top,F=A(j,t,t[18],nt);let B=t[11]&&mt(t);return{c(){b&&b.c(),e=w(),n=s("div"),I&&I.c(),l=w();for(let t=0;t<C.length;t+=1)C[t].c();o=w(),d=s("footer"),N&&N.c(),f=w(),F&&F.c(),h=w(),B&&B.c(),this.h()},l(t){b&&b.l(t),e=y(t),n=a(t,"DIV",{id:!0,class:!0,style:!0});var s=r(n);I&&I.l(s),l=y(s);for(let e=0;e<C.length;e+=1)C[e].l(s);o=y(s),d=a(s,"FOOTER",{class:!0});var c=r(d);N&&N.l(c),f=y(c),F&&F.l(c),h=y(c),B&&B.l(c),c.forEach(i),s.forEach(i),this.h()},h(){v(d,"class","flex column-center-center cmb1"),v(n,"id",t[4]),v(n,"class",u="flex column grow "+t[5]),v(n,"style",t[6])},m(s,a){b&&b.m(s,a),c(s,e,a),c(s,n,a),I&&I.m(n,null),E(n,l);for(let t=0;t<C.length;t+=1)C[t].m(n,null);E(n,o),E(n,d),N&&N.m(d,null),E(d,f),F&&F.m(d,null),E(d,h),B&&B.m(d,null),t[20](n),x=!0},p(t,s){if(t[3]?b?b.p(t,s):(b=ct(t),b.c(),b.m(e.parentNode,e)):b&&(b.d(1),b=null),I&&I.p&&(!x||262144&s[0])&&V(I,D,t,t[18],s,rt,ot),65671&s[0]){let e;for(L=t[2].slice(0,t[7]),e=0;e<L.length;e+=1){const l=at(t,L,e);C[e]?(C[e].p(l,s),g(C[e],1)):(C[e]=ft(l),C[e].c(),g(C[e],1),C[e].m(n,o))}for(m(),e=L.length;e<C.length;e+=1)M(e);$()}t[11]?N&&(m(),p(N,1,1,(()=>{N=null})),$()):N?(N.p(t,s),2048&s[0]&&g(N,1)):(N=ht(t),N.c(),g(N,1),N.m(d,f)),F&&F.p&&(!x||262144&s[0])&&V(F,j,t,t[18],s,et,nt),t[11]?B?(B.p(t,s),2048&s[0]&&g(B,1)):(B=mt(t),B.c(),g(B,1),B.m(d,null)):B&&(m(),p(B,1,1,(()=>{B=null})),$()),(!x||16&s[0])&&v(n,"id",t[4]),(!x||32&s[0]&&u!==(u="flex column grow "+t[5]))&&v(n,"class",u),(!x||64&s[0])&&v(n,"style",t[6])},i(t){if(!x){g(I,t);for(let t=0;t<L.length;t+=1)g(C[t]);g(N),g(F,t),g(B),x=!0}},o(t){p(I,t),C=C.filter(Boolean);for(let e=0;e<C.length;e+=1)p(C[e]);p(N),p(F,t),p(B),x=!1},d(s){b&&b.d(s),s&&i(e),s&&i(n),I&&I.d(s),k(C,s),N&&N.d(),F&&F.d(s),B&&B.d(),t[20](null)}}}function ut(t,e,n){let s,l,a,r;M(t,G,(t=>n(22,a=t))),M(t,J,(t=>n(13,r=t)));let{$$slots:o={},$$scope:i}=e,{component:c}=e,{keys:d}=e,{data:f}=e,{max:h=10}=e,{sidebar:m=!1}=e,{id:p}=e,u=U.browser,{class:$=""}=e,{style:g=""}=e,x=new Date;function v(){const t=new Date;t-x>500&&(n(7,E+=h),x=t)}let w=[],y=0;u&&function t(){if(u){a.itemsTop>a.itemsHeight-1.5*window.innerHeight&&v(),s||window.requestAnimationFrame(t)}}();let b,E=h;return t.$$set=t=>{"component"in t&&n(0,c=t.component),"keys"in t&&n(1,d=t.keys),"data"in t&&n(2,f=t.data),"max"in t&&n(17,h=t.max),"sidebar"in t&&n(3,m=t.sidebar),"id"in t&&n(4,p=t.id),"class"in t&&n(5,$=t.class),"style"in t&&n(6,g=t.style),"$$scope"in t&&n(18,i=t.$$scope)},t.$$.update=()=>{128&t.$$.dirty[0]&&function(t){if(m){n(9,w=[]),n(10,y=0);for(let t=0;t<E;t++){const e=f[t];((null==e?void 0:e.files)||[]).concat(e.embed||[]).forEach((t=>{const{height:e}=U.extractDimensions(t),{title:s}=t;w.push({height:e,title:s}),n(10,y+=e)}))}}}(),t.$$.dirty[0],132&t.$$.dirty[0]&&n(11,s=E>=f.length),256&t.$$.dirty[0]&&n(12,l=(null==b?void 0:b.getBoundingClientRect())||{})},[c,d,f,m,p,$,g,E,b,w,y,s,l,r,u,v,undefined,h,i,o,function(t){N[t?"unshift":"push"]((()=>{b=t,n(8,b)}))}]}class $t extends t{constructor(t){super(),e(this,t,ut,pt,n,{component:0,keys:1,data:2,max:17,sidebar:3,id:4,class:5,style:6},[-1,-1])}}function gt(t){let e,n,m,$,b,k,D,I,L,C,M,B;const P=[t[2],{autohide:!0}];function T(e){t[14](e)}let S={};for(let s=0;s<P.length;s+=1)S=x(S,P[s]);void 0!==t[1]&&(S.orientation=t[1]),$=new Q({props:S}),N.push((()=>j($,"orientation",T)));const H=[t[2]];let O={};for(let s=0;s<H.length;s+=1)O=x(O,H[s]);D=new X({props:O});const q=t[13].default,R=A(q,t,t[12],null);return{c(){e=s("div"),n=s("div"),m=s("div"),l($.$$.fragment),k=w(),l(D.$$.fragment),I=w(),R&&R.c(),L=w(),C=s("div"),this.h()},l(t){e=a(t,"DIV",{id:!0,class:!0});var s=r(e);n=a(s,"DIV",{class:!0});var l=r(n);m=a(l,"DIV",{class:!0});var c=r(m);o($.$$.fragment,c),c.forEach(i),l.forEach(i),k=y(s),o(D.$$.fragment,s),I=y(s),R&&R.l(s),L=y(s),C=a(s,"DIV",{class:!0}),r(C).forEach(i),s.forEach(i),this.h()},h(){v(m,"class","post-media flex column grow no-basis"),v(n,"class","flex row-stretch-stretch"),v(C,"class","space h2em"),v(e,"id",t[0]),v(e,"class",M="post-item flex column-center-center grow wrap post-orientation-"+t[1])},m(t,s){c(t,e,s),E(e,n),E(n,m),d($,m,null),E(e,k),d(D,e,null),E(e,I),R&&R.m(e,null),E(e,L),E(e,C),B=!0},p(t,[n]){const s=4&n?f(P,[h(t[2]),P[1]]):{};!b&&2&n&&(b=!0,s.orientation=t[1],F((()=>b=!1))),$.$set(s);const l=4&n?f(H,[h(t[2])]):{};D.$set(l),R&&R.p&&(!B||4096&n)&&V(R,q,t,t[12],n,null,null),(!B||1&n)&&v(e,"id",t[0]),(!B||2&n&&M!==(M="post-item flex column-center-center grow wrap post-orientation-"+t[1]))&&v(e,"class",M)},i(t){B||(g($.$$.fragment,t),g(D.$$.fragment,t),g(R,t),B=!0)},o(t){p($.$$.fragment,t),p(D.$$.fragment,t),p(R,t),B=!1},d(t){t&&i(e),u($),u(D),R&&R.d(t)}}}function xt(t,e,n){let{$$slots:s={},$$scope:l}=e,{id:a}=e,{text:r}=e,{media:o}=e,{created:i}=e,{updated:c}=e,{original:d=""}=e,{index:f}=e,{embed:h}=e,{date:m}=e,{status:p}=e,u=!1;return t.$$set=t=>{n(2,e=x(x({},e),B(t))),"id"in t&&n(0,a=t.id),"text"in t&&n(3,r=t.text),"media"in t&&n(4,o=t.media),"created"in t&&n(5,i=t.created),"updated"in t&&n(6,c=t.updated),"original"in t&&n(7,d=t.original),"index"in t&&n(8,f=t.index),"embed"in t&&n(9,h=t.embed),"date"in t&&n(10,m=t.date),"status"in t&&n(11,p=t.status),"$$scope"in t&&n(12,l=t.$$scope)},e=B(e),[a,u,e,r,o,i,c,d,f,h,m,p,l,s,function(t){u=t,n(1,u)}]}class vt extends t{constructor(t){super(),e(this,t,xt,gt,n,{id:0,text:3,media:4,created:5,updated:6,original:7,index:8,embed:9,date:10,status:11})}}function wt(t,e,n){const s=t.slice();return s[16]=e[n],s}function yt(t){let e,n,l,o,d,f,h,m,p,u,$,g=t[16]+"";function x(...e){return t[11](t[16],...e)}return{c(){e=s("label"),n=s("a"),l=s("input"),d=w(),f=s("span"),h=w(),m=I(g),this.h()},l(t){e=a(t,"LABEL",{class:!0});var s=r(e);n=a(s,"A",{class:!0,href:!0});var o=r(n);l=a(o,"INPUT",{type:!0,checked:!0}),d=y(o),f=a(o,"SPAN",{}),r(f).forEach(i),h=y(o),m=L(o,g),o.forEach(i),s.forEach(i),this.h()},h(){v(l,"type","checkbox"),l.checked=o=t[3][t[16]],v(n,"class","unclickable flex row-center-center"),v(n,"href",p=t[6](t[16])),v(e,"class","radio mtb0-5 activ8")},m(t,s){c(t,e,s),E(e,n),E(n,l),E(n,d),E(n,f),E(n,h),E(n,m),u||($=C(n,"click",x),u=!0)},p(e,s){t=e,9&s&&o!==(o=t[3][t[16]])&&(l.checked=o),1&s&&g!==(g=t[16]+"")&&P(m,g),1&s&&p!==(p=t[6](t[16]))&&v(n,"href",p)},d(t){t&&i(e),u=!1,$()}}}function bt(t){let e,n;return{c(){e=s("button"),n=I("more"),this.h()},l(t){e=a(t,"BUTTON",{slot:!0,class:!0});var s=r(e);n=L(s,"more"),s.forEach(i),this.h()},h(){v(e,"slot","more"),v(e,"class","filled")},m(t,s){c(t,e,s),E(e,n)},d(t){t&&i(e)}}}function Et(t){let e,n,f;return n=new R({props:{type:"arrow",style:"transform-origin: 50% 50%; transform: rotate(90deg);",color:"var(--color)",misc:{rotate:1},stroke:1,width:36,height:36}}),{c(){e=s("a"),l(n.$$.fragment),this.h()},l(t){e=a(t,"A",{href:!0,slot:!0,class:!0});var s=r(e);o(n.$$.fragment,s),s.forEach(i),this.h()},h(){v(e,"href","#top"),v(e,"slot","top"),v(e,"class","button flex row-center-center sm-max-100 mb0")},m(t,s){c(t,e,s),d(n,e,null),f=!0},p:O,i(t){f||(g(n.$$.fragment,t),f=!0)},o(t){p(n.$$.fragment,t),f=!1},d(t){t&&i(e),u(n)}}}function kt(t){var e,n;let h,m,$,b,D,C,M,N,j,F,B,P,O,q,R,U,G,J,Q,X,Y;document.title=h="Autr | Feed | "+((null==(n=null==(e=t[1])?void 0:e.params)?void 0:n.year)||"Latest work, photos, videos");let z=t[0].years,K=[];for(let s=0;s<z.length;s+=1)K[s]=yt(wt(t,z,s));let W=[t[4],{d:"M85.41,0L100,15.494L85.092,31.325"}],Z={};for(let s=0;s<W.length;s+=1)Z=x(Z,W[s]);let _=[t[4],{d:"M84.282,66.253L100,82.945L83.939,100"}],tt={};for(let s=0;s<_.length;s+=1)tt=x(tt,_[s]);let et=[t[4],{d:"M0.395,68.675C2.851,61.718 6.12,55.183 10.079,49.198C5.927,42.989 2.521,36.179 -0,28.916"}],nt={};for(let s=0;s<et.length;s+=1)nt=x(nt,et[s]);let st=[t[4],{d:"M100,82.538C92.722,84.784 85.027,85.989 77.07,85.989C49.431,85.989 24.964,71.456 10.079,49.198C24.938,26.739 49.52,12.048 77.309,12.048C85.179,12.048 92.792,13.227 100,15.426"}],lt={};for(let s=0;s<st.length;s+=1)lt=x(lt,st[s]);const at=t[10].default,rt=A(at,t,t[12],null);return X=new $t({props:{id:"feed",class:"feed mt1",data:t[0].data,keys:t[5],component:vt,$$slots:{top:[Et],more:[bt]},$$scope:{ctx:t}}}),{c(){m=w(),$=s("nav"),b=s("div");for(let t=0;t<K.length;t+=1)K[t].c();D=w(),C=s("div"),M=s("a"),N=I("random"),j=w(),F=s("a"),B=s("span"),P=w(),O=T("svg"),q=T("path"),R=T("path"),U=T("path"),G=T("path"),J=w(),rt&&rt.c(),Q=w(),l(X.$$.fragment),this.h()},l(t){S('[data-svelte="svelte-bfx2bd"]',document.head).forEach(i),m=y(t),$=a(t,"NAV",{id:!0,class:!0});var e=r($);b=a(e,"DIV",{class:!0});var n=r(b);for(let a=0;a<K.length;a+=1)K[a].l(n);D=y(n),C=a(n,"DIV",{class:!0});var s=r(C);M=a(s,"A",{href:!0,class:!0});var l=r(M);N=L(l,"random"),l.forEach(i),s.forEach(i),j=y(n),F=a(n,"A",{href:!0,class:!0});var c=r(F);B=a(c,"SPAN",{class:!0}),r(B).forEach(i),P=y(c),O=a(c,"svg",{width:!0,height:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0,"xml:space":!0,"xmlns:serif":!0},1);var d=r(O);q=a(d,"path",{d:!0},1),r(q).forEach(i),R=a(d,"path",{d:!0},1),r(R).forEach(i),U=a(d,"path",{d:!0},1),r(U).forEach(i),G=a(d,"path",{d:!0},1),r(G).forEach(i),d.forEach(i),c.forEach(i),n.forEach(i),e.forEach(i),J=y(t),rt&&rt.l(t),Q=y(t),o(X.$$.fragment,t),this.h()},h(){v(M,"href",t[2]),v(M,"class","unclickable ptb0-5"),v(C,"class","align-self-flex-end grow flex row-flex-end-center"),v(B,"class","p0-3"),H(q,Z),H(R,tt),H(U,nt),H(G,lt),v(O,"width","100%"),v(O,"height","100%"),v(O,"viewBox","0 0 100 100"),v(O,"version","1.1"),v(O,"xmlns","http://www.w3.org/2000/svg"),v(O,"xmlns:xlink","http://www.w3.org/1999/xlink"),v(O,"xml:space","preserve"),v(O,"xmlns:serif","http://www.serif.com/"),v(F,"href",t[2]),v(F,"class","block h2em w4em unclickable align-self-center flex row-start-center abs r0 b0-3 none"),v(b,"class","flex row wrap rel grow w100pc"),v($,"id","feed-nav"),v($,"class","flex  ptb0-5 row-stretch-center  bb  wrap")},m(t,e){c(t,m,e),c(t,$,e),E($,b);for(let n=0;n<K.length;n+=1)K[n].m(b,null);E(b,D),E(b,C),E(C,M),E(M,N),E(b,j),E(b,F),E(F,B),E(F,P),E(F,O),E(O,q),E(O,R),E(O,U),E(O,G),c(t,J,e),rt&&rt.m(t,e),c(t,Q,e),d(X,t,e),Y=!0},p(t,[e]){var n,s;if((!Y||2&e)&&h!==(h="Autr | Feed | "+((null==(s=null==(n=t[1])?void 0:n.params)?void 0:s.year)||"Latest work, photos, videos"))&&(document.title=h),201&e){let n;for(z=t[0].years,n=0;n<z.length;n+=1){const s=wt(t,z,n);K[n]?K[n].p(s,e):(K[n]=yt(s),K[n].c(),K[n].m(b,D))}for(;n<K.length;n+=1)K[n].d(1);K.length=z.length}(!Y||4&e)&&v(M,"href",t[2]),H(q,Z=f(W,[16&e&&t[4],{d:"M85.41,0L100,15.494L85.092,31.325"}])),H(R,tt=f(_,[16&e&&t[4],{d:"M84.282,66.253L100,82.945L83.939,100"}])),H(U,nt=f(et,[16&e&&t[4],{d:"M0.395,68.675C2.851,61.718 6.12,55.183 10.079,49.198C5.927,42.989 2.521,36.179 -0,28.916"}])),H(G,lt=f(st,[16&e&&t[4],{d:"M100,82.538C92.722,84.784 85.027,85.989 77.07,85.989C49.431,85.989 24.964,71.456 10.079,49.198C24.938,26.739 49.52,12.048 77.309,12.048C85.179,12.048 92.792,13.227 100,15.426"}])),(!Y||4&e)&&v(F,"href",t[2]),rt&&rt.p&&(!Y||4096&e)&&V(rt,at,t,t[12],e,null,null);const l={};1&e&&(l.data=t[0].data),4096&e&&(l.$$scope={dirty:e,ctx:t}),X.$set(l)},i(t){Y||(g(rt,t),g(X.$$.fragment,t),Y=!0)},o(t){p(rt,t),p(X.$$.fragment,t),Y=!1},d(t){t&&i(m),t&&i($),k(K,t),t&&i(J),rt&&rt.d(t),t&&i(Q),u(X,t)}}}function At(t,e,n){let s,l;M(t,q,(t=>n(1,l=t)));let{$$slots:a={},$$scope:r}=e,{data:o}=e;let i,c=[];let d=null,f={};function h(t,e){n(9,d=e);try{z("/feed/"+e)}catch(s){}}return t.$$set=t=>{"data"in t&&n(8,o=t.data),"$$scope"in t&&n(12,r=t.$$scope)},t.$$.update=()=>{var e;2&t.$$.dirty&&function(t){n(0,c=U.posts(o,l.params.year));const e=parseInt(Math.random()*(c.data.length-1)),s=c.data[e];n(2,i=`/feed/${U.year(null==s?void 0:s.date)}/${null==s?void 0:s.id}`)}(l.params.year),515&t.$$.dirty&&function(t,e,s){""==e&&(e="all");for(let l=0;l<t.length;l++){const s=t[l],a=e==s;n(3,f[s]=d==s||a&&null==d,f)}}(c.years,(null==(e=null==l?void 0:l.params)?void 0:e.year)||"")},n(4,s={"stroke-width":1,stroke:"var(--color)","vector-effect":"non-scaling-stroke",fill:"transparent"}),[c,l,i,f,s,["id","created","updated","media","text","original","embed","date","status"],t=>`/feed/${"all"==t?"":t}`,h,o,d,a,(t,e)=>h(0,t),r]}class Dt extends t{constructor(t){super(),e(this,t,At,kt,n,{data:8})}}export{Dt as F};
