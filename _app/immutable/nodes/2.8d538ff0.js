import{S as ve,i as ke,s as ye,J as Oe,C as ce,k as E,a as x,l as w,m as R,h as v,c as j,K as N,b as D,D as p,L as Pe,E as ae,F as ue,G as fe,g as F,d as H,o as Ee,M as De,w as B,e as de,f as Se,v as Ae,q as T,r as C,n as L,H as Z,N as $,y as Me,z as Ne,A as Be,O as ee,B as Ie,u as I,P as qe,Q as _e}from"../chunks/index.d7fd8aed.js";import"../chunks/paths.bc381ede.js";const{window:we}=De,Ve=o=>({}),ge=o=>({}),Ge=o=>({}),he=o=>({});function Ue(o){let e,t,s,n,l,r,u,i,f;Oe(o[21]);const d=o[20].background,c=ce(d,o,o[19],he),m=o[20].foreground,h=ce(m,o,o[19],ge);return{c(){e=E("svelte-scroller-outer"),t=E("svelte-scroller-background-container"),s=E("svelte-scroller-background"),c&&c.c(),l=x(),r=E("svelte-scroller-foreground"),h&&h.c(),this.h()},l(a){e=w(a,"SVELTE-SCROLLER-OUTER",{class:!0});var g=R(e);t=w(g,"SVELTE-SCROLLER-BACKGROUND-CONTAINER",{class:!0,style:!0});var k=R(t);s=w(k,"SVELTE-SCROLLER-BACKGROUND",{class:!0});var b=R(s);c&&c.l(b),b.forEach(v),k.forEach(v),l=j(g),r=w(g,"SVELTE-SCROLLER-FOREGROUND",{class:!0});var y=R(r);h&&h.l(y),y.forEach(v),g.forEach(v),this.h()},h(){N(s,"class","svelte-xdbafy"),N(t,"class","background-container svelte-xdbafy"),N(t,"style",n=""+(o[5]+o[4])),N(r,"class","svelte-xdbafy"),N(e,"class","svelte-xdbafy")},m(a,g){D(a,e,g),p(e,t),p(t,s),c&&c.m(s,null),o[22](s),p(e,l),p(e,r),h&&h.m(r,null),o[23](r),o[24](e),u=!0,i||(f=Pe(we,"resize",o[21]),i=!0)},p(a,g){c&&c.p&&(!u||g[0]&524288)&&ae(c,d,a,a[19],u?fe(d,a[19],g,Ge):ue(a[19]),he),(!u||g[0]&48&&n!==(n=""+(a[5]+a[4])))&&N(t,"style",n),h&&h.p&&(!u||g[0]&524288)&&ae(h,m,a,a[19],u?fe(m,a[19],g,Ve):ue(a[19]),ge)},i(a){u||(F(c,a),F(h,a),u=!0)},o(a){H(c,a),H(h,a),u=!1},d(a){a&&v(e),c&&c.d(a),o[22](null),h&&h.d(a),o[23](null),o[24](null),i=!1,f()}}}const z=[];let J;if(typeof window<"u"){const o=()=>z.forEach(e=>e());window.addEventListener("scroll",o),window.addEventListener("resize",o)}if(typeof IntersectionObserver<"u"){const o=new Map,e=new IntersectionObserver((t,s)=>{t.forEach(n=>{const l=o.get(n.target),r=z.indexOf(l);n.isIntersecting?r===-1&&z.push(l):(l(),r!==-1&&z.splice(r,1))})},{rootMargin:"400px 0px"});J={add:({outer:t,update:s})=>{const{top:n,bottom:l}=t.getBoundingClientRect();n<window.innerHeight&&l>0&&z.push(s),o.set(t,s),e.observe(t)},remove:({outer:t,update:s})=>{const n=z.indexOf(s);n!==-1&&z.splice(n,1),o.delete(t),e.unobserve(t)}}}else J={add:({update:o})=>{z.push(o)},remove:({update:o})=>{const e=z.indexOf(o);e!==-1&&z.splice(e,1)}};function Fe(o,e,t){let s,n,l,r,u,{$$slots:i={},$$scope:f}=e,{top:d=0}=e,{bottom:c=1}=e,{threshold:m=.5}=e,{query:h="section"}=e,{parallax:a=!1}=e,{index:g=0}=e,{count:k=0}=e,{offset:b=0}=e,{progress:y=0}=e,{visible:q=!1}=e,P,O,K,oe,V,S=0,A,G=0,Q=1;Ee(()=>{V=O.querySelectorAll(h),t(7,k=V.length),W();const _={outer:P,update:W};return J.add(_),()=>J.remove(_)});function W(){if(!O)return;const _=P.getBoundingClientRect();oe=_.left,t(18,Q=_.right-oe);const M=O.getBoundingClientRect(),se=K.getBoundingClientRect();t(10,q=M.top<S&&M.bottom>0);const X=M.bottom-M.top,ne=se.bottom-se.top,Y=n-s;t(9,y=(s-M.top)/(X-Y)),y<=0?(t(17,G=0),t(16,A=!1)):y>=1?(t(17,G=a?X-ne:X-Y),t(16,A=!1)):(t(17,G=a?Math.round(s-y*(ne-Y)):s),t(16,A=!0));for(let U=0;U<V.length;U++){const Le=V[U],{top:re}=Le.getBoundingClientRect(),le=V[U+1],ie=le?le.getBoundingClientRect().top:M.bottom;if(t(8,b=(l-re)/(ie-re)),ie>=l){t(6,g=U);break}}}function Re(){t(0,S=we.innerHeight)}function ze(_){B[_?"unshift":"push"](()=>{K=_,t(3,K)})}function Te(_){B[_?"unshift":"push"](()=>{O=_,t(2,O)})}function Ce(_){B[_?"unshift":"push"](()=>{P=_,t(1,P)})}return o.$$set=_=>{"top"in _&&t(11,d=_.top),"bottom"in _&&t(12,c=_.bottom),"threshold"in _&&t(13,m=_.threshold),"query"in _&&t(14,h=_.query),"parallax"in _&&t(15,a=_.parallax),"index"in _&&t(6,g=_.index),"count"in _&&t(7,k=_.count),"offset"in _&&t(8,b=_.offset),"progress"in _&&t(9,y=_.progress),"visible"in _&&t(10,q=_.visible),"$$scope"in _&&t(19,f=_.$$scope)},o.$$.update=()=>{o.$$.dirty[0]&2049&&(s=Math.round(d*S)),o.$$.dirty[0]&4097&&(n=Math.round(c*S)),o.$$.dirty[0]&8193&&(l=Math.round(m*S)),o.$$.dirty[0]&47104&&W(),o.$$.dirty[0]&196608&&t(5,r=`
		position: ${A?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${G}px);
		z-index: 1;
	`),o.$$.dirty[0]&327680&&t(4,u=A?`width:${Q}px;`:"")},[S,P,O,K,u,r,g,k,b,y,q,d,c,m,h,a,A,G,Q,f,i,Re,ze,Te,Ce]}class He extends ve{constructor(e){super(),ke(this,e,Fe,Ue,ye,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}}function be(o,e,t){const s=o.slice();return s[16]=e[t],s[18]=t,s}function Ke(o){let e,t;return{c(){e=E("p"),t=T("..."),this.h()},l(s){e=w(s,"P",{class:!0});var n=R(e);t=C(n,"..."),n.forEach(v),this.h()},h(){L(e,"class","svelte-1z072zb")},m(s,n){D(s,e,n),p(e,t)},p:Z,i:Z,o:Z,d(s){s&&v(e)}}}function xe(o){let e,t,s,n,l;function r(d){o[10](d)}function u(d){o[11](d)}function i(d){o[12](d)}let f={top:"0",threshold:"0.5",bottom:"0.9",query:"article",$$slots:{foreground:[Je],background:[je]},$$scope:{ctx:o}};return o[2]!==void 0&&(f.count=o[2]),o[1]!==void 0&&(f.index=o[1]),o[3]!==void 0&&(f.progress=o[3]),e=new He({props:f}),B.push(()=>$(e,"count",r)),B.push(()=>$(e,"index",u)),B.push(()=>$(e,"progress",i)),{c(){Me(e.$$.fragment)},l(d){Ne(e.$$.fragment,d)},m(d,c){Be(e,d,c),l=!0},p(d,c){const m={};c&524315&&(m.$$scope={dirty:c,ctx:d}),!t&&c&4&&(t=!0,m.count=d[2],ee(()=>t=!1)),!s&&c&2&&(s=!0,m.index=d[1],ee(()=>s=!1)),!n&&c&8&&(n=!0,m.progress=d[3],ee(()=>n=!1)),e.$set(m)},i(d){l||(F(e.$$.fragment,d),l=!0)},o(d){H(e.$$.fragment,d),l=!1},d(d){Ie(e,d)}}}function je(o){let e,t,s,n,l,r,u;return{c(){e=E("div"),t=T("index: "),s=T(o[1]),n=T(`
      poem: `),l=T(o[4]),r=T(`
      progress: `),u=T(o[3]),this.h()},l(i){e=w(i,"DIV",{slot:!0,class:!0});var f=R(e);t=C(f,"index: "),s=C(f,o[1]),n=C(f,`
      poem: `),l=C(f,o[4]),r=C(f,`
      progress: `),u=C(f,o[3]),f.forEach(v),this.h()},h(){L(e,"slot","background"),L(e,"class","svelte-1z072zb")},m(i,f){D(i,e,f),p(e,t),p(e,s),p(e,n),p(e,l),p(e,r),p(e,u)},p(i,f){f&2&&I(s,i[1]),f&16&&I(l,i[4]),f&8&&I(u,i[3])},d(i){i&&v(e)}}}function me(o){var n;let e,t=(((n=o[16].metadata)==null?void 0:n.created)||"")+"",s;return{c(){e=E("div"),s=T(t),this.h()},l(l){e=w(l,"DIV",{class:!0});var r=R(e);s=C(r,t),r.forEach(v),this.h()},h(){L(e,"class","date svelte-1z072zb")},m(l,r){D(l,e,r),p(e,s)},p(l,r){var u;r&1&&t!==(t=(((u=l[16].metadata)==null?void 0:u.created)||"")+"")&&I(s,t)},d(l){l&&v(e)}}}function pe(o){var m,h;let e,t,s=te(o[16])+"",n,l,r,u,i=o[16].content+"",f,d,c=((h=(m=o[16])==null?void 0:m.metadata)==null?void 0:h.title)!==void 0&&me(o);return{c(){e=E("article"),t=E("p"),n=T(s),l=x(),c&&c.c(),r=x(),u=E("p"),f=T(i),d=x(),this.h()},l(a){e=w(a,"ARTICLE",{class:!0});var g=R(e);t=w(g,"P",{class:!0});var k=R(t);n=C(k,s),k.forEach(v),l=j(g),c&&c.l(g),r=j(g),u=w(g,"P",{class:!0});var b=R(u);f=C(b,i),b.forEach(v),d=j(g),g.forEach(v),this.h()},h(){L(t,"class","title svelte-1z072zb"),L(u,"class","content svelte-1z072zb"),L(e,"class","svelte-1z072zb"),_e(e,"viewed",o[18]===o[1])},m(a,g){D(a,e,g),p(e,t),p(t,n),p(e,l),c&&c.m(e,null),p(e,r),p(e,u),p(u,f),p(e,d)},p(a,g){var k,b;g&1&&s!==(s=te(a[16])+"")&&I(n,s),((b=(k=a[16])==null?void 0:k.metadata)==null?void 0:b.title)!==void 0?c?c.p(a,g):(c=me(a),c.c(),c.m(e,r)):c&&(c.d(1),c=null),g&1&&i!==(i=a[16].content+"")&&I(f,i),g&2&&_e(e,"viewed",a[18]===a[1])},d(a){a&&v(e),c&&c.d()}}}function Je(o){let e,t=o[0],s=[];for(let n=0;n<t.length;n+=1)s[n]=pe(be(o,t,n));return{c(){e=E("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=w(n,"DIV",{slot:!0,class:!0});var l=R(e);for(let r=0;r<s.length;r+=1)s[r].l(l);l.forEach(v),this.h()},h(){L(e,"slot","foreground"),L(e,"class","svelte-1z072zb")},m(n,l){D(n,e,l);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null)},p(n,l){if(l&3){t=n[0];let r;for(r=0;r<t.length;r+=1){const u=be(n,t,r);s[r]?s[r].p(u,l):(s[r]=pe(u),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=t.length}},d(n){n&&v(e),qe(s,n)}}}function Qe(o){let e,t,s,n;const l=[xe,Ke],r=[];function u(i,f){return i[5]?0:1}return e=u(o),t=r[e]=l[e](o),{c(){t.c(),s=de()},l(i){t.l(i),s=de()},m(i,f){r[e].m(i,f),D(i,s,f),n=!0},p(i,[f]){let d=e;e=u(i),e===d?r[e].p(i,f):(Ae(),H(r[d],1,1,()=>{r[d]=null}),Se(),t=r[e],t?t.p(i,f):(t=r[e]=l[e](i),t.c()),F(t,1),t.m(s.parentNode,s))},i(i){n||(F(t),n=!0)},o(i){H(t),n=!1},d(i){r[e].d(i),i&&v(s)}}}const We="https://api.github.com/repos/david-vanderhaar/verse-and-verve-data/contents/poems?ref=main";function Xe(o){const e=o.split("END_METADATA");e[0]=e[0].replace("END_METADATA","");const s=e[0].split(`
`).reduce((l,r)=>{const[u,i]=r.split(": ");return l[u]=i,l},{}),n=e[1].trim();return{metadata:s,content:n}}function Ye(o){return o.sort((e,t)=>{var l,r;const s=new Date((l=e.metadata)==null?void 0:l.created);return new Date((r=t.metadata)==null?void 0:r.created)-s})}function Ze(o){return o.name.endsWith(".txt")}async function $e(o){const t=await(await fetch(o)).text();return Xe(t)}function te(o){var e,t;return((e=o==null?void 0:o.metadata)==null?void 0:e.title)||((t=o==null?void 0:o.metadata)==null?void 0:t.created)||""}function et(o,e,t){let s,n,l,r,u,i,f=[];Ee(()=>{t(6,i=document.documentElement),d()});async function d(){const q=(await(await fetch(We)).json()).filter(Ze).map(O=>$e(O.download_url)),P=await Promise.all(q);t(0,f=Ye(P))}let c,m,h;function a(b){c=b,t(2,c)}function g(b){m=b,t(1,m)}function k(b){h=b,t(3,h)}return o.$$.update=()=>{var b,y;o.$$.dirty&1&&t(5,s=f.length>0),o.$$.dirty&3&&t(9,n=f[m]),o.$$.dirty&512&&t(4,l=te(n)),o.$$.dirty&512&&t(8,r=((b=n==null?void 0:n.metadata)==null?void 0:b.color)||"#eadcbd"),o.$$.dirty&512&&t(7,u=((y=n==null?void 0:n.metadata)==null?void 0:y.text_color)||"#262422"),o.$$.dirty&320&&(i==null||i.style.setProperty("--background-color",r)),o.$$.dirty&192&&(i==null||i.style.setProperty("--text-color",u))},[f,m,c,h,l,s,i,u,r,n,a,g,k]}class st extends ve{constructor(e){super(),ke(this,e,et,Qe,ye,{})}}export{st as component};
