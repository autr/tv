import{S as s,i as t,s as a,j as r,m as e,o as n,v as o,r as c,w as i}from"../../chunks/vendor-5b15c0f4.js";import{a as p}from"../../chunks/api-4015f651.js";import{F as m}from"../../chunks/Feed-9ab09c4b.js";import"../../chunks/All.wc-40d741d4.js";import"../../chunks/utils-0a0b9476.js";import"../../chunks/stores-3d2adcb0.js";import"../../chunks/fetcheriser-b1b69b5f.js";import"../../chunks/PostText-66137709.js";import"../../chunks/singletons-bb9012b7.js";function d(s){let t,a;return t=new m({props:{data:s[0]}}),{c(){r(t.$$.fragment)},l(s){e(t.$$.fragment,s)},m(s,r){n(t,s,r),a=!0},p(s,[a]){const r={};1&a&&(r.data=s[0]),t.$set(r)},i(s){a||(o(t.$$.fragment,s),a=!0)},o(s){c(t.$$.fragment,s),a=!1},d(s){i(t,s)}}}const u=async({fetch:s,page:t})=>({props:{data:await p.feed(s)}});function f(s,t,a){let{data:r}=t;return s.$$set=s=>{"data"in s&&a(0,r=s.data)},[r]}export default class extends s{constructor(s){super(),t(this,s,f,d,a,{data:0})}}export{u as load};
