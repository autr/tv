import{S as t,i as e,s as a,A as s,k as r,e as n,t as l,n as o,c,a as f,g as i,d,b as h,f as m,E as u,h as p,j as $,V as g,m as v,o as x,p as k,q as w,v as y,r as E,w as b,J as j,G as A}from"../../../chunks/vendor-07a24748.js";import{a as V}from"../../../chunks/api-4015f651.js";import{p as D}from"../../../chunks/All.wc-06042dbe.js";import{P as I,a as P}from"../../../chunks/PostText-2f318d8e.js";import{u as F}from"../../../chunks/utils-e83b783f.js";import"../../../chunks/stores-14fb8482.js";function N(t,e,a){const s=t.slice();return s[6]=e[a],s[8]=a,s}function S(t){let e,a,s,$,g,v=t[6].hyperlink+"",x=0!=t[8]&&function(t){let e;return{c(){e=n("span"),this.h()},l(t){e=c(t,"SPAN",{class:!0}),f(e).forEach(d),this.h()},h(){h(e,"class","w1em")},m(t,a){m(t,e,a)},d(t){t&&d(e)}}}();return{c(){x&&x.c(),e=r(),a=n("a"),s=l(v),$=r(),this.h()},l(t){x&&x.l(t),e=o(t),a=c(t,"A",{class:!0,href:!0});var r=f(a);s=i(r,v),$=o(r),r.forEach(d),this.h()},h(){h(a,"class","button plr1 grow"),h(a,"href",g=`/feed/${F.year(t[6].date)}/${t[6].id}`)},m(t,r){x&&x.m(t,r),m(t,e,r),m(t,a,r),u(a,s),u(a,$)},p(t,e){2&e&&v!==(v=t[6].hyperlink+"")&&p(s,v),2&e&&g!==(g=`/feed/${F.year(t[6].date)}/${t[6].id}`)&&h(a,"href",g)},d(t){x&&x.d(t),t&&d(e),t&&d(a)}}}function q(t){var e,a;let l,i,p,A,V,D,F,q,G,J,T;document.title=l="Autr | Feed "+((null==(a=null==(e=t[2])?void 0:e.params)?void 0:a.year)||"")+" | "+t[0].text;const z=[t[0],{autohide:!0}];let B={};for(let r=0;r<z.length;r+=1)B=s(B,z[r]);V=new I({props:B});const C=[t[0]];let H={};for(let r=0;r<C.length;r+=1)H=s(H,C[r]);F=new P({props:H});let K=t[1],L=[];for(let s=0;s<K.length;s+=1)L[s]=S(N(t,K,s));return{c(){i=r(),p=n("div"),A=n("div"),$(V.$$.fragment),D=r(),$(F.$$.fragment),q=r(),G=n("nav"),J=n("div");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){g('[data-svelte="svelte-m8noet"]',document.head).forEach(d),i=o(t),p=c(t,"DIV",{id:!0,class:!0});var e=f(p);A=c(e,"DIV",{class:!0});var a=f(A);v(V.$$.fragment,a),a.forEach(d),D=o(e),v(F.$$.fragment,e),q=o(e),G=c(e,"NAV",{id:!0,class:!0});var s=f(G);J=c(s,"DIV",{class:!0});var r=f(J);for(let n=0;n<L.length;n+=1)L[n].l(r);r.forEach(d),s.forEach(d),e.forEach(d),this.h()},h(){h(A,"class","feed-item-media"),h(J,"class","flex row rel cptb0-5 sm-max-100"),h(G,"id","feed-nav"),h(G,"class","mtb1 flex row-center-center sm-max-100"),h(p,"id","feed-item"),h(p,"class","mt1 flex column-center-start sm-container")},m(t,e){m(t,i,e),m(t,p,e),u(p,A),x(V,A,null),u(p,D),x(F,p,null),u(p,q),u(p,G),u(G,J);for(let a=0;a<L.length;a+=1)L[a].m(J,null);T=!0},p(t,[e]){var a,s;(!T||5&e)&&l!==(l="Autr | Feed "+((null==(s=null==(a=t[2])?void 0:a.params)?void 0:s.year)||"")+" | "+t[0].text)&&(document.title=l);const r=1&e?k(z,[w(t[0]),z[1]]):{};V.$set(r);const n=1&e?k(C,[w(t[0])]):{};if(F.$set(n),2&e){let a;for(K=t[1],a=0;a<K.length;a+=1){const s=N(t,K,a);L[a]?L[a].p(s,e):(L[a]=S(s),L[a].c(),L[a].m(J,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=K.length}},i(t){T||(y(V.$$.fragment,t),y(F.$$.fragment,t),T=!0)},o(t){E(V.$$.fragment,t),E(F.$$.fragment,t),T=!1},d(t){t&&d(i),t&&d(p),b(V),b(F),j(L,t)}}}const G=async({fetch:t,page:e})=>({props:{data:await V.post(e.params,t)}});function J(t,e,a){let s,r,n;A(t,D,(t=>a(2,n=t)));let{data:l}=e;return t.$$set=t=>{"data"in t&&a(3,l=t.data)},t.$$.update=()=>{8&t.$$.dirty&&a(0,s=l.post),8&t.$$.dirty&&a(1,r=[l.prev,l.random,l.next])},[s,r,n,l]}export default class extends t{constructor(t){super(),e(this,t,J,q,a,{data:3})}}export{G as load};