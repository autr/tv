import{S as t,i as a,s as e,A as s,k as r,e as n,t as l,n as o,c,a as d,g as f,d as i,b as h,f as m,E as u,h as p,j as $,V as g,m as v,o as x,p as k,q as w,v as y,r as E,w as b,J as j,G as A}from"../../../chunks/vendor-5b15c0f4.js";import{a as V}from"../../../chunks/api-4015f651.js";import{p as D}from"../../../chunks/All.wc-40d741d4.js";import{P as I,a as P}from"../../../chunks/PostText-66137709.js";import{u as F}from"../../../chunks/utils-0a0b9476.js";import"../../../chunks/stores-3d2adcb0.js";function N(t,a,e){const s=t.slice();return s[6]=a[e],s[8]=e,s}function S(t){let a,e,s,$,g,v=t[6].hyperlink+"",x=0!=t[8]&&function(t){let a;return{c(){a=n("span"),this.h()},l(t){a=c(t,"SPAN",{class:!0}),d(a).forEach(i),this.h()},h(){h(a,"class","w1em")},m(t,e){m(t,a,e)},d(t){t&&i(a)}}}();return{c(){x&&x.c(),a=r(),e=n("a"),s=l(v),$=r(),this.h()},l(t){x&&x.l(t),a=o(t),e=c(t,"A",{class:!0,href:!0});var r=d(e);s=f(r,v),$=o(r),r.forEach(i),this.h()},h(){h(e,"class","button plr1 grow"),h(e,"href",g=`/feed/${F.year(t[6].date)}/${t[6].id}`)},m(t,r){x&&x.m(t,r),m(t,a,r),m(t,e,r),u(e,s),u(e,$)},p(t,a){2&a&&v!==(v=t[6].hyperlink+"")&&p(s,v),2&a&&g!==(g=`/feed/${F.year(t[6].date)}/${t[6].id}`)&&h(e,"href",g)},d(t){x&&x.d(t),t&&i(a),t&&i(e)}}}function q(t){var a,e;let l,f,p,A,V,D,F,q,G,J,T;document.title=l="Autr | Feed "+((null==(e=null==(a=t[2])?void 0:a.params)?void 0:e.year)||"")+" | "+t[0].text;const z=[t[0],{autohide:!1}];let B={};for(let r=0;r<z.length;r+=1)B=s(B,z[r]);V=new I({props:B});const C=[t[0]];let H={};for(let r=0;r<C.length;r+=1)H=s(H,C[r]);F=new P({props:H});let K=t[1],L=[];for(let s=0;s<K.length;s+=1)L[s]=S(N(t,K,s));return{c(){f=r(),p=n("div"),A=n("div"),$(V.$$.fragment),D=r(),$(F.$$.fragment),q=r(),G=n("nav"),J=n("div");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){g('[data-svelte="svelte-m8noet"]',document.head).forEach(i),f=o(t),p=c(t,"DIV",{id:!0,class:!0});var a=d(p);A=c(a,"DIV",{class:!0});var e=d(A);v(V.$$.fragment,e),e.forEach(i),D=o(a),v(F.$$.fragment,a),q=o(a),G=c(a,"NAV",{id:!0,class:!0});var s=d(G);J=c(s,"DIV",{class:!0});var r=d(J);for(let n=0;n<L.length;n+=1)L[n].l(r);r.forEach(i),s.forEach(i),a.forEach(i),this.h()},h(){h(A,"class","feed-item-media"),h(J,"class","flex row rel cptb0-5 sm-max-100"),h(G,"id","feed-nav"),h(G,"class","mtb1 flex row-center-center sm-max-100"),h(p,"id","feed-item"),h(p,"class","mt1 flex column-center-start sm-container")},m(t,a){m(t,f,a),m(t,p,a),u(p,A),x(V,A,null),u(p,D),x(F,p,null),u(p,q),u(p,G),u(G,J);for(let e=0;e<L.length;e+=1)L[e].m(J,null);T=!0},p(t,[a]){var e,s;(!T||5&a)&&l!==(l="Autr | Feed "+((null==(s=null==(e=t[2])?void 0:e.params)?void 0:s.year)||"")+" | "+t[0].text)&&(document.title=l);const r=1&a?k(z,[w(t[0]),z[1]]):{};V.$set(r);const n=1&a?k(C,[w(t[0])]):{};if(F.$set(n),2&a){let e;for(K=t[1],e=0;e<K.length;e+=1){const s=N(t,K,e);L[e]?L[e].p(s,a):(L[e]=S(s),L[e].c(),L[e].m(J,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=K.length}},i(t){T||(y(V.$$.fragment,t),y(F.$$.fragment,t),T=!0)},o(t){E(V.$$.fragment,t),E(F.$$.fragment,t),T=!1},d(t){t&&i(f),t&&i(p),b(V),b(F),j(L,t)}}}const G=async({fetch:t,page:a})=>({props:{data:await V.post(a.params,t)}});function J(t,a,e){let s,r,n;A(t,D,(t=>e(2,n=t)));let{data:l}=a;return t.$$set=t=>{"data"in t&&e(3,l=t.data)},t.$$.update=()=>{8&t.$$.dirty&&e(0,s=l.post),8&t.$$.dirty&&e(1,r=[l.prev,l.random,l.next])},[s,r,n,l]}export default class extends t{constructor(t){super(),a(this,t,J,q,e,{data:3})}}export{G as load};
