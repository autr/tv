import{S as t,i as e,s as a,e as s,k as r,c as n,a as l,n as o,d as c,b as i,f,E as h,t as m,g as d,h as $,J as u,A as p,j as g,V as v,m as b,a4 as w,o as E,p as x,v as S,r as k,w as y}from"../../chunks/vendor-5b15c0f4.js";import{a as A}from"../../chunks/api-4015f651.js";import{u as V}from"../../chunks/utils-0a0b9476.js";import{T as B}from"../../chunks/Title-4cd28edb.js";import{M as I}from"../../chunks/Mail-78cfbaff.js";function L(t,e,a){const s=t.slice();return s[8]=e[a][0],s[0]=e[a][1],s}function D(t,e,a){const s=t.slice();return s[11]=e[a],s[13]=a,s}function P(t){let e;return{c(){e=m("Bio")},l(t){e=d(t,"Bio")},m(t,a){f(t,e,a)},d(t){t&&c(e)}}}function j(t){let e;return{c(){e=m("Contact")},l(t){e=d(t,"Contact")},m(t,a){f(t,e,a)},d(t){t&&c(e)}}}function R(t){let e;return{c(){e=m("Links")},l(t){e=d(t,"Links")},m(t,a){f(t,e,a)},d(t){t&&c(e)}}}function C(t){let e,a,u,p,g,v,b,w=t[11].item.text.trim()+"";return{c(){e=s("a"),a=s("span"),u=r(),p=s("span"),g=m(w),this.h()},l(t){e=n(t,"A",{target:!0,class:!0,href:!0,title:!0});var s=l(e);a=n(s,"SPAN",{class:!0}),l(a).forEach(c),u=o(s),p=n(s,"SPAN",{class:!0});var r=l(p);g=d(r,w),r.forEach(c),s.forEach(c),this.h()},h(){i(a,"class","dot"),i(p,"class","bb"),i(e,"target","_blank"),i(e,"class"," unclickable"),i(e,"href",v=t[11].item.href),i(e,"title",b=t[11].id)},m(t,s){f(t,e,s),h(e,a),h(e,u),h(e,p),h(p,g)},p(t,a){2&a&&w!==(w=t[11].item.text.trim()+"")&&$(g,w),2&a&&v!==(v=t[11].item.href)&&i(e,"href",v),2&a&&b!==(b=t[11].id)&&i(e,"title",b)},d(t){t&&c(e)}}}function N(t){var e;let a,m,d=(null==(e=t[0])?void 0:e.links)||[],$=[];for(let s=0;s<d.length;s+=1)$[s]=C(D(t,d,s));return{c(){a=s("div");for(let t=0;t<$.length;t+=1)$[t].c();m=r(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=l(a);for(let a=0;a<$.length;a+=1)$[a].l(e);m=o(e),e.forEach(c),this.h()},h(){i(a,"class","flex column")},m(t,e){f(t,a,e);for(let s=0;s<$.length;s+=1)$[s].m(a,null);h(a,m)},p(t,e){var s;if(2&e){let r;for(d=(null==(s=t[0])?void 0:s.links)||[],r=0;r<d.length;r+=1){const s=D(t,d,r);$[r]?$[r].p(s,e):($[r]=C(s),$[r].c(),$[r].m(a,m))}for(;r<$.length;r+=1)$[r].d(1);$.length=d.length}},d(t){t&&c(a),u($,t)}}}function H(t){let e;return{c(){e=m("Studio Address")},l(t){e=d(t,"Studio Address")},m(t,a){f(t,e,a)},d(t){t&&c(e)}}}function M(t){let e,a,$,A,V,D,C,M,G,U,T,K,W,Y,_,z,J,q,F,Q,X,Z,tt,et,at,st,rt,nt,lt,ot,ct,it,ft,ht,mt,dt,$t,ut,pt,gt,vt,bt,wt,Et,xt,St,kt,yt,At,Vt,Bt,It,Lt,Dt,Pt,jt,Rt,Ct,Nt,Ht,Mt,Gt,Ot,Ut,Tt;V=new B({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),q=new B({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),st=new I({props:{class:"button text-center text-center sm-max-100"}}),it=new B({props:{$$slots:{default:[R]},$$scope:{ctx:t}}});let Kt=Object.entries(t[1]),Wt=[];for(let s=0;s<Kt.length;s+=1)Wt[s]=N(L(t,Kt,s));let Yt=[t[2],{href:"/rss.xml"}],_t={};for(let s=0;s<Yt.length;s+=1)_t=p(_t,Yt[s]);let zt=[t[2],{href:"https://netnewswire.com"}],Jt={};for(let s=0;s<zt.length;s+=1)Jt=p(Jt,zt[s]);let qt=[t[2],{href:"https://www.google.com/chrome/canary"}],Ft={};for(let s=0;s<qt.length;s+=1)Ft=p(Ft,qt[s]);Bt=new B({props:{$$slots:{default:[H]},$$scope:{ctx:t}}});let Qt=[t[2],{href:"https://www.openstreetmap.org/node/4980951124"}],Xt={};for(let s=0;s<Qt.length;s+=1)Xt=p(Xt,Qt[s]);return{c(){e=r(),a=s("div"),$=s("div"),A=s("article"),g(V.$$.fragment),D=r(),C=s("p"),M=m("Gilbert Sinnott is an artist and creative engineer."),G=r(),U=s("p"),T=m("Born: Bristol UK, 1987 "),K=s("br"),W=m("\n\t\t\t\tLives: Berlin, since 2018"),Y=r(),_=s("div"),z=r(),J=s("nav"),g(q.$$.fragment),F=r(),Q=s("p"),X=m("I'm trying to communicate less with social media - emails welcomed! Mailing list for updates (as they come)."),Z=r(),tt=s("a"),et=m("subscribe to mailing list"),at=r(),g(st.$$.fragment),rt=r(),nt=s("div"),lt=r(),ot=s("div"),ct=s("div"),g(it.$$.fragment),ft=r(),ht=s("div");for(let t=0;t<Wt.length;t+=1)Wt[t].c();mt=r(),dt=s("p"),$t=m("Y'olde RSS feed is \n\t\t\t\t"),ut=s("a"),pt=m("available"),gt=m(".\n\t\t\t\tSome decent RSS readers are \n\t\t\t\t"),vt=s("a"),bt=m("NetNewsWire"),wt=m(" \n\t\t\t\tand maybe latest\n\t\t\t\t"),Et=s("a"),xt=m("Chrome (Canary)"),St=m("."),kt=r(),yt=s("div"),At=r(),Vt=s("div"),g(Bt.$$.fragment),It=r(),Lt=s("p"),Dt=m("Gilbert Sinnott"),Pt=s("br"),jt=m("\n\t\t\t\tLacuna Lab e.V (H.H, V.H)"),Rt=s("br"),Ct=m("\n\t\t\t\tPaul-Lincke Ufer 44A"),Nt=s("br"),Ht=m("\n\t\t\t\tBerlin 10999"),Mt=r(),Gt=s("p"),Ot=s("a"),Ut=m("OpenStreetMap"),this.h()},l(t){v('[data-svelte="svelte-nbziwr"]',document.head).forEach(c),e=o(t),a=n(t,"DIV",{id:!0,class:!0});var s=l(a);$=n(s,"DIV",{class:!0});var r=l($);A=n(r,"ARTICLE",{class:!0});var i=l(A);b(V.$$.fragment,i),D=o(i),C=n(i,"P",{});var f=l(C);M=d(f,"Gilbert Sinnott is an artist and creative engineer."),f.forEach(c),G=o(i),U=n(i,"P",{});var h=l(U);T=d(h,"Born: Bristol UK, 1987 "),K=n(h,"BR",{}),W=d(h,"\n\t\t\t\tLives: Berlin, since 2018"),h.forEach(c),i.forEach(c),Y=o(r),_=n(r,"DIV",{class:!0}),l(_).forEach(c),z=o(r),J=n(r,"NAV",{class:!0});var m=l(J);b(q.$$.fragment,m),F=o(m),Q=n(m,"P",{});var u=l(Q);X=d(u,"I'm trying to communicate less with social media - emails welcomed! Mailing list for updates (as they come)."),u.forEach(c),Z=o(m),tt=n(m,"A",{href:!0,class:!0});var p=l(tt);et=d(p,"subscribe to mailing list"),p.forEach(c),at=o(m),b(st.$$.fragment,m),m.forEach(c),r.forEach(c),rt=o(s),nt=n(s,"DIV",{class:!0}),l(nt).forEach(c),lt=o(s),ot=n(s,"DIV",{class:!0});var g=l(ot);ct=n(g,"DIV",{class:!0});var w=l(ct);b(it.$$.fragment,w),ft=o(w),ht=n(w,"DIV",{});var E=l(ht);for(let e=0;e<Wt.length;e+=1)Wt[e].l(E);E.forEach(c),mt=o(w),dt=n(w,"P",{});var x=l(dt);$t=d(x,"Y'olde RSS feed is \n\t\t\t\t"),ut=n(x,"A",{href:!0});var S=l(ut);pt=d(S,"available"),S.forEach(c),gt=d(x,".\n\t\t\t\tSome decent RSS readers are \n\t\t\t\t"),vt=n(x,"A",{href:!0});var k=l(vt);bt=d(k,"NetNewsWire"),k.forEach(c),wt=d(x," \n\t\t\t\tand maybe latest\n\t\t\t\t"),Et=n(x,"A",{href:!0});var y=l(Et);xt=d(y,"Chrome (Canary)"),y.forEach(c),St=d(x,"."),x.forEach(c),w.forEach(c),kt=o(g),yt=n(g,"DIV",{class:!0}),l(yt).forEach(c),At=o(g),Vt=n(g,"DIV",{class:!0});var B=l(Vt);b(Bt.$$.fragment,B),It=o(B),Lt=n(B,"P",{});var I=l(Lt);Dt=d(I,"Gilbert Sinnott"),Pt=n(I,"BR",{}),jt=d(I,"\n\t\t\t\tLacuna Lab e.V (H.H, V.H)"),Rt=n(I,"BR",{}),Ct=d(I,"\n\t\t\t\tPaul-Lincke Ufer 44A"),Nt=n(I,"BR",{}),Ht=d(I,"\n\t\t\t\tBerlin 10999"),I.forEach(c),Mt=o(B),Gt=n(B,"P",{});var L=l(Gt);Ot=n(L,"A",{href:!0});var P=l(Ot);Ut=d(P,"OpenStreetMap"),P.forEach(c),L.forEach(c),B.forEach(c),g.forEach(c),s.forEach(c),this.h()},h(){document.title="Autr | Gilbert Sinnott | Artist",i(A,"class",O+" "),i(_,"class","w0em sm-max-none"),i(tt,"href","/subscribe"),i(tt,"class","button text-center sm-max-100"),i(J,"class",O),i($,"class","flex row wrap"),i(nt,"class","h1em sm-max-none"),w(ut,_t),w(vt,Jt),w(Et,Ft),i(ct,"class",O),i(yt,"class","w0em sm-max-none"),w(Ot,Xt),i(Vt,"class",O),i(ot,"class","flex row wrap"),i(a,"id","about"),i(a,"class","pt1 wrap")},m(t,s){f(t,e,s),f(t,a,s),h(a,$),h($,A),E(V,A,null),h(A,D),h(A,C),h(C,M),h(A,G),h(A,U),h(U,T),h(U,K),h(U,W),h($,Y),h($,_),h($,z),h($,J),E(q,J,null),h(J,F),h(J,Q),h(Q,X),h(J,Z),h(J,tt),h(tt,et),h(J,at),E(st,J,null),h(a,rt),h(a,nt),h(a,lt),h(a,ot),h(ot,ct),E(it,ct,null),h(ct,ft),h(ct,ht);for(let e=0;e<Wt.length;e+=1)Wt[e].m(ht,null);h(ct,mt),h(ct,dt),h(dt,$t),h(dt,ut),h(ut,pt),h(dt,gt),h(dt,vt),h(vt,bt),h(dt,wt),h(dt,Et),h(Et,xt),h(dt,St),h(ot,kt),h(ot,yt),h(ot,At),h(ot,Vt),E(Bt,Vt,null),h(Vt,It),h(Vt,Lt),h(Lt,Dt),h(Lt,Pt),h(Lt,jt),h(Lt,Rt),h(Lt,Ct),h(Lt,Nt),h(Lt,Ht),h(Vt,Mt),h(Vt,Gt),h(Gt,Ot),h(Ot,Ut),Tt=!0},p(t,[e]){const a={};16384&e&&(a.$$scope={dirty:e,ctx:t}),V.$set(a);const s={};16384&e&&(s.$$scope={dirty:e,ctx:t}),q.$set(s);const r={};if(16384&e&&(r.$$scope={dirty:e,ctx:t}),it.$set(r),2&e){let a;for(Kt=Object.entries(t[1]),a=0;a<Kt.length;a+=1){const s=L(t,Kt,a);Wt[a]?Wt[a].p(s,e):(Wt[a]=N(s),Wt[a].c(),Wt[a].m(ht,null))}for(;a<Wt.length;a+=1)Wt[a].d(1);Wt.length=Kt.length}w(ut,_t=x(Yt,[4&e&&t[2],{href:"/rss.xml"}])),w(vt,Jt=x(zt,[4&e&&t[2],{href:"https://netnewswire.com"}])),w(Et,Ft=x(qt,[4&e&&t[2],{href:"https://www.google.com/chrome/canary"}]));const n={};16384&e&&(n.$$scope={dirty:e,ctx:t}),Bt.$set(n),w(Ot,Xt=x(Qt,[4&e&&t[2],{href:"https://www.openstreetmap.org/node/4980951124"}]))},i(t){Tt||(S(V.$$.fragment,t),S(q.$$.fragment,t),S(st.$$.fragment,t),S(it.$$.fragment,t),S(Bt.$$.fragment,t),Tt=!0)},o(t){k(V.$$.fragment,t),k(q.$$.fragment,t),k(st.$$.fragment,t),k(it.$$.fragment,t),k(Bt.$$.fragment,t),Tt=!1},d(t){t&&c(e),t&&c(a),y(V),y(q),y(st),y(it),u(Wt,t),y(Bt)}}}const G=async({fetch:t,page:e})=>({props:{data:await A.get({about:"/about.json"},t)}}),O="flex column-start-start wrap basis0pc grow cmb1 mb0 sm-max-100";function U(t,e,a){let s,r,n,{data:l}=e;return t.$$set=t=>{"data"in t&&a(3,l=t.data)},t.$$.update=()=>{8&t.$$.dirty&&a(0,s=l.about[0]),1&t.$$.dirty&&a(1,r={bad:{links:s["bad-links"]},neutral:{links:s["neutral-links"]},good:{links:s["good-links"]}})},V.device(),a(2,n={target:"_blank",class:"bb"}),V.device(),[s,r,n,l]}export default class extends t{constructor(t){super(),e(this,t,U,M,a,{data:3})}}export{G as load};
