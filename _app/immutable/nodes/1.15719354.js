import{S,i as x,s as j,e as f,t as _,a as k,c as d,b as g,d as h,f as l,g as q,h as m,j as v,k as $,n as E,l as y}from"../chunks/index.d7a2ade5.js";import{s as C}from"../chunks/singletons.53ee48f7.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=f("h1"),o=_(r),n=k(),i=f("p"),u=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=q(e),i=d(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&l(t),e&&l(n),e&&l(i)}}}function z(s,t,r){let o;return y(s,P,n=>r(0,o=n)),[o]}let D=class extends S{constructor(t){super(),x(this,t,z,w,j,{})}};export{D as component};
