import{S as e,i as s,s as t,e as c,k as l,t as r,c as n,a,n as o,d as h,g as i,b as f,f as u,E as p,I as d,h as k,P as b,Q as m,v as g,r as v,J as w}from"../../chunks/vendor-5b15c0f4.js";function $(e,s,t){const c=e.slice();return c[9]=s[t],c}function y(e){let s,t,b,m,g,v,w,$,y,E,x,A,I,N=e[9]+"";function P(...s){return e[8](e[9],...s)}return{c(){s=c("label"),t=c("a"),b=c("input"),g=l(),v=c("span"),w=l(),$=r(N),E=l(),this.h()},l(e){s=n(e,"LABEL",{class:!0});var c=a(s);t=n(c,"A",{class:!0,href:!0});var l=a(t);b=n(l,"INPUT",{type:!0,checked:!0}),g=o(l),v=n(l,"SPAN",{}),a(v).forEach(h),w=o(l),$=i(l,N),l.forEach(h),E=o(c),c.forEach(h),this.h()},h(){f(b,"type",e[2]),b.checked=m=e[3][e[9]],f(t,"class","unclickable flex row-center-center"),f(t,"href",y=e[0](e[9])),f(s,"class",x=e[2]+" mtb0-5 grow")},m(e,c){u(e,s,c),p(s,t),p(t,b),p(t,g),p(t,v),p(t,w),p(t,$),p(s,E),A||(I=d(t,"click",P),A=!0)},p(c,l){e=c,4&l&&f(b,"type",e[2]),10&l&&m!==(m=e[3][e[9]])&&(b.checked=m),2&l&&N!==(N=e[9]+"")&&k($,N),3&l&&y!==(y=e[0](e[9]))&&f(t,"href",y),4&l&&x!==(x=e[2]+" mtb0-5 grow")&&f(s,"class",x)},d(e){e&&h(s),A=!1,I()}}}function E(e){let s,t,r,i,d=e[1],k=[];for(let c=0;c<d.length;c+=1)k[c]=y($(e,d,c));const E=e[7].default,x=b(E,e,e[6],null);return{c(){s=c("nav"),t=c("div");for(let e=0;e<k.length;e+=1)k[e].c();r=l(),x&&x.c(),this.h()},l(e){s=n(e,"NAV",{id:!0,class:!0});var c=a(s);t=n(c,"DIV",{class:!0});var l=a(t);for(let s=0;s<k.length;s+=1)k[s].l(l);l.forEach(h),c.forEach(h),r=o(e),x&&x.l(e),this.h()},h(){f(t,"class","flex row wrap"),f(s,"id","works-nav"),f(s,"class","flex  ptb0-5 row-space-between-center  bb  wrap")},m(e,c){u(e,s,c),p(s,t);for(let s=0;s<k.length;s+=1)k[s].m(t,null);u(e,r,c),x&&x.m(e,c),i=!0},p(e,[s]){if(31&s){let c;for(d=e[1],c=0;c<d.length;c+=1){const l=$(e,d,c);k[c]?k[c].p(l,s):(k[c]=y(l),k[c].c(),k[c].m(t,null))}for(;c<k.length;c+=1)k[c].d(1);k.length=d.length}x&&x.p&&(!i||64&s)&&m(x,E,e,e[6],s,null,null)},i(e){i||(g(x,e),i=!0)},o(e){v(x,e),i=!1},d(e){e&&h(s),w(k,e),e&&h(r),x&&x.d(e)}}}function x(e,s,t){let{$$slots:c={},$$scope:l}=s,{current:r="all"}=s,{href:n=(e=>"/works/"+e)}=s,{list:a=["all","installation","music video","performance","object","misc"]}=s,{type:o="checkbox"}=s,{checked:h={all:!0}}=s;function i(e,s){t(5,r=s)}return e.$$set=e=>{"current"in e&&t(5,r=e.current),"href"in e&&t(0,n=e.href),"list"in e&&t(1,a=e.list),"type"in e&&t(2,o=e.type),"checked"in e&&t(3,h=e.checked),"$$scope"in e&&t(6,l=e.$$scope)},[n,a,o,h,i,r,l,c,(e,s)=>i(0,e)]}export default class extends e{constructor(e){super(),s(this,e,x,E,t,{current:5,href:0,list:1,type:2,checked:3})}}