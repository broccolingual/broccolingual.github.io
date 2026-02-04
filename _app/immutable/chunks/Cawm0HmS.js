import{s as Bt,n as it}from"./CbBoUQCS.js";import{S as It,i as Ot,e as n,f as e,g as z,h as a,j as l,k as p,l as o,s as c}from"./kYvfyVYY.js";function Dt(At){let i,ut='この記事はQiitaに投稿した<a href="https://qiita.com/Broccolingual/items/8facc5f36564b987807f" rel="nofollow">記事</a>の転載です',G,y,kt="はじめに",A,f,mt=`皆さんは開発する際のエディタとして何を使っているだろうか?
最近は言語を問わず<code>VSCode</code>という方も多いと思うが，CLI環境のLinuxでの開発となると話は変わってくる．
だいたい，派閥としては<code>vi(vim)</code>, <code>emacs</code>, <code>nano</code>等があげられるが，その中でも比較的簡単にカスタマイズしやすく拡張性もあるのが，<code>vim</code>である．<code>vim</code>というと操作が独特で拒否感を持っている方も一定数いると思うが，自分好みに魔改造することで，ほぼVSCode並のエディタにすることも可能である．今回は，そんな拒否感を持っている方のためにも使いやすいように軽くカスタマイズを試みようと思う．`,B,q,rt="※本当にVSCode並に魔改造したい人は↓",I,b,dt='<a href="https://qiita.com/ulwlu/items/98901f4c4f0683e7aa57" rel="nofollow">vimって極めればvscode並のIDEになるんじゃないの？</a>',O,x,vt="<code>.vimrc</code>の編集",D,w,ht="vimの設定を変更するためには，ホームディレクトリに<code>.vimrc</code>ファイルを作成し，vim専用の言語で設定を行う必要がある．",F,u,yt=`<code><span class="token keyword">set</span> <span class="token keyword">number</span> <span class="token comment">&quot; 行番号の追加</span>
<span class="token keyword">set</span> <span class="token builtin">cursorline</span> <span class="token comment">&quot; 編集中の行をハイライト</span>
<span class="token keyword">set</span> <span class="token builtin">ruler</span> <span class="token comment">&quot; 右下にカーソルの位置を表示</span>
<span class="token keyword">set</span> <span class="token builtin">showcmd</span> <span class="token comment">&quot; 入力中のコマンドを表示</span>
<span class="token keyword">set</span> <span class="token builtin">title</span> <span class="token comment">&quot; タイトルの追加</span>
<span class="token builtin">syntax</span> enable <span class="token comment">&quot; シンタックスハイライトを有効化</span>
<span class="token keyword">set</span> <span class="token builtin">wildmenu</span> <span class="token comment">&quot; vim上からファイルを選択できる機能を有効化</span>
<span class="token keyword">set</span> <span class="token builtin">ambiwidth</span><span class="token operator">=</span>double <span class="token comment">&quot; 全角文字の重なりを解消</span>
<span class="token keyword">set</span> <span class="token builtin">backspace</span><span class="token operator">=</span>indent<span class="token punctuation">,</span><span class="token builtin">eol</span><span class="token punctuation">,</span>start <span class="token comment">&quot; 挿入モードでbackspaceを使って削除を可能に</span>
<span class="token keyword">set</span> <span class="token builtin">laststatus</span><span class="token operator">=</span><span class="token number">2</span> <span class="token comment">&quot; ステータスバーを2行表示</span>
<span class="token keyword">set</span> <span class="token keyword">history</span><span class="token operator">=</span><span class="token number">1000</span> <span class="token comment">&quot; コマンドの履歴を1000件保存</span>
<span class="token keyword">set</span> <span class="token builtin">showmatch</span> <span class="token comment">&quot; 対応する括弧をハイライト</span>
<span class="token keyword">set</span> <span class="token builtin">smartindent</span> <span class="token comment">&quot; 前の行のインデントを保持</span>
<span class="token keyword">set</span> <span class="token builtin">clipboard</span><span class="token operator">+=</span>unnamed <span class="token comment">&quot; ヤンクの結果をクリップボードに保存</span>
<span class="token keyword">set</span> <span class="token builtin">noerrorbells</span> <span class="token comment">&quot; エラーの表示時にビープ音を鳴らさない</span>
<span class="token keyword">set</span> <span class="token builtin">mouse</span><span class="token operator">=</span>a <span class="token comment">&quot; マウスの有効化</span>

<span class="token keyword">set</span> <span class="token builtin">shiftwidth</span><span class="token operator">=</span><span class="token number">0</span> <span class="token comment">&quot; タブの設定(タブ幅4の場合)</span>
<span class="token keyword">set</span> <span class="token builtin">softtabstop</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token keyword">set</span> <span class="token builtin">tabstop</span><span class="token operator">=</span><span class="token number">4</span>

<span class="token builtin">autocmd</span> FileType <span class="token keyword">python</span> <span class="token keyword">setlocal</span> <span class="token builtin">tabstop</span><span class="token operator">=</span><span class="token number">4</span> <span class="token comment">&quot; 言語ごとにタブ幅を設定する場合</span>

<span class="token keyword">set</span> <span class="token builtin">hlsearch</span> <span class="token comment">&quot; 検索結果をハイライト</span>
<span class="token keyword">set</span> <span class="token builtin">incsearch</span> <span class="token comment">&quot; 最初の一文字を入力した時点から検索開始</span>
<span class="token keyword">set</span> <span class="token builtin">wrapscan</span> <span class="token comment">&quot; ファイル末尾に到達すると再び先頭から検索</span></code>`,Q,C,ft="dein.vim(プラグイン)のインストール ※さらに改造したい人向け",$,_,qt="ホームディレクトリにdein用のディレクトリを作成し，作業ディレクトリを移動",J,k,bt="<code>mkdir -p ~/.cache/dein &amp;&amp; cd $_</code>",K,H,xt="curlでインストール用のShellScriptをダウンロード",N,m,wt="<code>curl https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh &gt; installer.sh</code>",U,L,Ct="インストール実行",W,r,_t="<code>sh ./installer.sh ~/.cache/dein</code>",X,M,Ht="出力されたコードを<code>~/.vimrc</code>に追記",Y,d,Lt=`<code><span class="token comment">&quot;dein Scripts-----------------------------</span>

<span class="token keyword">if</span> &amp;<span class="token builtin">compatible</span>
  <span class="token keyword">set</span> <span class="token builtin">nocompatible</span>               <span class="token comment">&quot; Be iMproved</span>
<span class="token keyword">endif</span>

<span class="token comment">&quot; ~ 中略 ~</span>

<span class="token keyword">if</span> dein#<span class="token function">check_install</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">&quot; ここの3行がコメントアウトされている場合は外す</span>
  <span class="token keyword">call</span> dein#<span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">&quot; ※外さないとdeinに追加したプラグインがインストールされません</span>
<span class="token keyword">endif</span>

<span class="token comment">&quot;End dein Scripts-------------------------</span></code>`,Z,T,Mt='※dein.vim(GitHub) - <a href="https://github.com/Shougo/dein.vim" rel="nofollow">https://github.com/Shougo/dein.vim</a>',tt,P,Tt="プラグインの追加方法",st,S,Pt="上記のdeinの導入時に.vimrcに貼り付けたスクリプトに追記してプラグインを追加",nt,v,St=`<code><span class="token comment">&quot; ~ 略 ~</span>

<span class="token comment">&quot; Add or remove your plugins here:</span>
<span class="token comment">&quot;call dein#add(</span><span class="token string">&#39;Shougo/neosnippet.vim&#39;</span><span class="token punctuation">)</span>
<span class="token comment">&quot;call dein#add(</span><span class="token string">&#39;Shougo/neosnippet-snippets&#39;</span><span class="token punctuation">)</span>

<span class="token comment">&quot; ~ ここに追記 ~</span>

<span class="token comment">&quot; Required:</span>
<span class="token keyword">call</span> dein#<span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">&quot; ~ 略 ~</span></code>`,et,g,gt="テーマの追加(プラグイン導入例)",at,E,Et="今回は，例としてdeinにayuとlightlineというテーマプラグインを導入する．",lt,h,Rt=`<code><span class="token comment">&quot; ~ 略 ~</span>

<span class="token comment">&quot; Add or remove your plugins here:</span>
<span class="token comment">&quot;call dein#add(</span><span class="token string">&#39;Shougo/neosnippet.vim&#39;</span><span class="token punctuation">)</span>
<span class="token comment">&quot;call dein#add(</span><span class="token string">&#39;Shougo/neosnippet-snippets&#39;</span><span class="token punctuation">)</span>

<span class="token comment">&quot; ~ 追加行 ここから ~</span>
 <span class="token keyword">call</span> dein#<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;ayu-theme/ayu-vim&#39;</span><span class="token punctuation">)</span>
 <span class="token keyword">call</span> dein#<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;itchyny/lightline.vim&#39;</span><span class="token punctuation">)</span>
<span class="token comment">&quot; ~ 追加行 ここまで ~</span>

<span class="token comment">&quot; Required:</span>
<span class="token keyword">call</span> dein#<span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">&quot; ~ 中略 ~</span>

<span class="token comment">&quot;End dein Scripts-------------------------</span>

<span class="token comment">&quot; ~ 追加行 ここから (ayu-themeの設定) ~</span>
<span class="token keyword">set</span> termguicolors     <span class="token comment">&quot; enable true colors support</span>
<span class="token string">&quot;let ayucolor=&quot;</span>light<span class="token string">&quot;  &quot;</span> <span class="token keyword">for</span> light <span class="token keyword">version</span> of theme
<span class="token string">&quot;let ayucolor=&quot;</span>mirage<span class="token string">&quot; &quot;</span> <span class="token keyword">for</span> mirage <span class="token keyword">version</span> of theme
<span class="token keyword">let</span> ayucolor<span class="token operator">=</span><span class="token string">&quot;dark&quot;</span>   <span class="token comment">&quot; for dark version of theme</span>
<span class="token keyword">colorscheme</span> ayu
<span class="token comment">&quot; ~ 追加行 ここまで ~</span>

<span class="token comment">&quot; ~ 略 ~</span></code>`,ot,R,Vt="上記の通り.vimrcに追記してvimを起動すると，自動的に必要なものがダウンロードされ，テーマが適用された状態でvimが開く．",pt,V,jt='※ayu-theme/ayu-vim(GitHub) - <a href="https://github.com/ayu-theme/ayu-vim" rel="nofollow">https://github.com/ayu-theme/ayu-vim</a>',ct,j,zt='※itchyny/lightline.vim(GitHub) - <a href="https://github.com/itchyny/lightline.vim" rel="nofollow">https://github.com/itchyny/lightline.vim</a>';return{c(){i=o("p"),i.innerHTML=ut,G=c(),y=o("h1"),y.textContent=kt,A=c(),f=o("p"),f.innerHTML=mt,B=c(),q=o("p"),q.textContent=rt,I=c(),b=o("p"),b.innerHTML=dt,O=c(),x=o("h1"),x.innerHTML=vt,D=c(),w=o("p"),w.innerHTML=ht,F=c(),u=o("pre"),u.innerHTML=yt,Q=c(),C=o("h1"),C.textContent=ft,$=c(),_=o("h3"),_.textContent=qt,J=c(),k=o("pre"),k.innerHTML=bt,K=c(),H=o("h3"),H.textContent=xt,N=c(),m=o("pre"),m.innerHTML=wt,U=c(),L=o("h3"),L.textContent=Ct,W=c(),r=o("pre"),r.innerHTML=_t,X=c(),M=o("h3"),M.innerHTML=Ht,Y=c(),d=o("pre"),d.innerHTML=Lt,Z=c(),T=o("p"),T.innerHTML=Mt,tt=c(),P=o("h1"),P.textContent=Tt,st=c(),S=o("p"),S.textContent=Pt,nt=c(),v=o("pre"),v.innerHTML=St,et=c(),g=o("h1"),g.textContent=gt,at=c(),E=o("p"),E.textContent=Et,lt=c(),h=o("pre"),h.innerHTML=Rt,ot=c(),R=o("p"),R.textContent=Vt,pt=c(),V=o("p"),V.innerHTML=jt,ct=c(),j=o("p"),j.innerHTML=zt,this.h()},l(t){i=a(t,"P",{"data-svelte-h":!0}),l(i)!=="svelte-n3rv35"&&(i.innerHTML=ut),G=p(t),y=a(t,"H1",{"data-svelte-h":!0}),l(y)!=="svelte-1f33nh3"&&(y.textContent=kt),A=p(t),f=a(t,"P",{"data-svelte-h":!0}),l(f)!=="svelte-uaukg8"&&(f.innerHTML=mt),B=p(t),q=a(t,"P",{"data-svelte-h":!0}),l(q)!=="svelte-ap910z"&&(q.textContent=rt),I=p(t),b=a(t,"P",{"data-svelte-h":!0}),l(b)!=="svelte-qvxot0"&&(b.innerHTML=dt),O=p(t),x=a(t,"H1",{"data-svelte-h":!0}),l(x)!=="svelte-f2z7ki"&&(x.innerHTML=vt),D=p(t),w=a(t,"P",{"data-svelte-h":!0}),l(w)!=="svelte-14f5kl4"&&(w.innerHTML=ht),F=p(t),u=a(t,"PRE",{class:!0,"data-svelte-h":!0}),l(u)!=="svelte-6algwz"&&(u.innerHTML=yt),Q=p(t),C=a(t,"H1",{"data-svelte-h":!0}),l(C)!=="svelte-yjm9sq"&&(C.textContent=ft),$=p(t),_=a(t,"H3",{"data-svelte-h":!0}),l(_)!=="svelte-1un54nl"&&(_.textContent=qt),J=p(t),k=a(t,"PRE",{class:!0,"data-svelte-h":!0}),l(k)!=="svelte-1xurp8l"&&(k.innerHTML=bt),K=p(t),H=a(t,"H3",{"data-svelte-h":!0}),l(H)!=="svelte-361n4y"&&(H.textContent=xt),N=p(t),m=a(t,"PRE",{class:!0,"data-svelte-h":!0}),l(m)!=="svelte-1aykfo3"&&(m.innerHTML=wt),U=p(t),L=a(t,"H3",{"data-svelte-h":!0}),l(L)!=="svelte-8nn7ra"&&(L.textContent=Ct),W=p(t),r=a(t,"PRE",{class:!0,"data-svelte-h":!0}),l(r)!=="svelte-1gbuhuo"&&(r.innerHTML=_t),X=p(t),M=a(t,"H3",{"data-svelte-h":!0}),l(M)!=="svelte-1xblhhw"&&(M.innerHTML=Ht),Y=p(t),d=a(t,"PRE",{class:!0,"data-svelte-h":!0}),l(d)!=="svelte-fi9osh"&&(d.innerHTML=Lt),Z=p(t),T=a(t,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1nobml5"&&(T.innerHTML=Mt),tt=p(t),P=a(t,"H1",{"data-svelte-h":!0}),l(P)!=="svelte-1lql88q"&&(P.textContent=Tt),st=p(t),S=a(t,"P",{"data-svelte-h":!0}),l(S)!=="svelte-14gnoqq"&&(S.textContent=Pt),nt=p(t),v=a(t,"PRE",{class:!0,"data-svelte-h":!0}),l(v)!=="svelte-1vn2oim"&&(v.innerHTML=St),et=p(t),g=a(t,"H1",{"data-svelte-h":!0}),l(g)!=="svelte-1eem0er"&&(g.textContent=gt),at=p(t),E=a(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-17pucan"&&(E.textContent=Et),lt=p(t),h=a(t,"PRE",{class:!0,"data-svelte-h":!0}),l(h)!=="svelte-1cspe7i"&&(h.innerHTML=Rt),ot=p(t),R=a(t,"P",{"data-svelte-h":!0}),l(R)!=="svelte-1196li7"&&(R.textContent=Vt),pt=p(t),V=a(t,"P",{"data-svelte-h":!0}),l(V)!=="svelte-18bp1n5"&&(V.innerHTML=jt),ct=p(t),j=a(t,"P",{"data-svelte-h":!0}),l(j)!=="svelte-1ms59la"&&(j.innerHTML=zt),this.h()},h(){z(u,"class","language-vim"),z(k,"class","language-terminal"),z(m,"class","language-terminal"),z(r,"class","language-terminal"),z(d,"class","language-vim"),z(v,"class","language-vim"),z(h,"class","language-vim")},m(t,s){e(t,i,s),e(t,G,s),e(t,y,s),e(t,A,s),e(t,f,s),e(t,B,s),e(t,q,s),e(t,I,s),e(t,b,s),e(t,O,s),e(t,x,s),e(t,D,s),e(t,w,s),e(t,F,s),e(t,u,s),e(t,Q,s),e(t,C,s),e(t,$,s),e(t,_,s),e(t,J,s),e(t,k,s),e(t,K,s),e(t,H,s),e(t,N,s),e(t,m,s),e(t,U,s),e(t,L,s),e(t,W,s),e(t,r,s),e(t,X,s),e(t,M,s),e(t,Y,s),e(t,d,s),e(t,Z,s),e(t,T,s),e(t,tt,s),e(t,P,s),e(t,st,s),e(t,S,s),e(t,nt,s),e(t,v,s),e(t,et,s),e(t,g,s),e(t,at,s),e(t,E,s),e(t,lt,s),e(t,h,s),e(t,ot,s),e(t,R,s),e(t,pt,s),e(t,V,s),e(t,ct,s),e(t,j,s)},p:it,i:it,o:it,d(t){t&&(n(i),n(G),n(y),n(A),n(f),n(B),n(q),n(I),n(b),n(O),n(x),n(D),n(w),n(F),n(u),n(Q),n(C),n($),n(_),n(J),n(k),n(K),n(H),n(N),n(m),n(U),n(L),n(W),n(r),n(X),n(M),n(Y),n(d),n(Z),n(T),n(tt),n(P),n(st),n(S),n(nt),n(v),n(et),n(g),n(at),n(E),n(lt),n(h),n(ot),n(R),n(pt),n(V),n(ct),n(j))}}}const Gt={title:"Vimをちょっとだけ使いやすくする設定【Vim】",date:"2024-11-08",tags:["Vim","Linux","vimrc","エディタ"],description:""},{title:Jt,date:Kt,tags:Nt,description:Ut}=Gt;class Ft extends It{constructor(i){super(),Ot(this,i,null,Dt,Bt,{})}}const Wt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft,metadata:Gt},Symbol.toStringTag,{value:"Module"}));export{Wt as _};
