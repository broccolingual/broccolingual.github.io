var E=Object.defineProperty;var C=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,e as w,f as T,i as A,h as j,j as N,k as B,l as D,m as b,p as H,q as I,v as P}from"./scheduler.DLmczG9q.js";let $=!1;function q(){$=!0}function M(){$=!1}function O(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function R(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const a=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=a?r+1:O(1,r,_=>t[n[_]].claim_order,a))-1;i[s]=n[o]+1;const u=o+1;n[u]=s,r=Math.max(u,r)}const f=[],l=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(f.push(t[s-1]);c>=s;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);f.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<f.length&&l[s].claim_order>=f[a].claim_order;)a++;const o=a<f.length?f[a]:null;e.insertBefore(l[s],o)}}function z(e,t){if($){for(R(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function te(){return x(" ")}function ne(){return x("")}function ie(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function re(e){return e.dataset.svelteH}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,r=!1){W(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const s=n(c);return s===void 0?e.splice(l,1):e[l]=s,r||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const s=n(c);return s===void 0?e.splice(l,1):e[l]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function F(e,t,n,i){return S(e,r=>r.nodeName===t,r=>{const f=[];for(let l=0;l<r.attributes.length;l++){const c=r.attributes[l];n[c.name]||f.push(c.name)}f.forEach(l=>r.removeAttribute(l))},()=>i(t))}function se(e,t,n){return F(e,t,n,U)}function G(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ae(e){return G(e," ")}function le(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ce(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const f=r.textContent.trim();f===`HEAD_${e}_END`?(i-=1,n.push(r)):f===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ue(e,t){return new e(t)}const m=new Set;let d;function oe(){d={r:0,c:[],p:d}}function de(){d.r||h(d.c),d=d.p}function J(e,t){e&&e.i&&(m.delete(e),e.i(t))}function _e(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function me(e){e&&e.c()}function he(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),N(()=>{const f=e.$$.on_mount.map(H).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),r.forEach(N)}function Q(e,t){const n=e.$$;n.fragment!==null&&(B(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(I.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $e(e,t,n,i,r,f,l=null,c=[-1]){const s=D;b(e);const a=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(u,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&r(a.ctx[u],a.ctx[u]=v)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](v),o&&X(e,u)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){q();const u=V(t.target);a.fragment&&a.fragment.l(u),u.forEach(L)}else a.fragment&&a.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),M(),T()}b(s)}class pe{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{pe as S,he as a,_e as b,me as c,Q as d,U as e,se as f,L as g,ce as h,$e as i,ae as j,re as k,ie as l,K as m,z as n,ee as o,V as p,ne as q,de as r,te as s,J as t,fe as u,x as v,G as w,le as x,oe as y,ue as z};
