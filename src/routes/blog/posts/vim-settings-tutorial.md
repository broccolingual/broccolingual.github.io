---
title: "Vimをちょっとだけ使いやすくする設定【Vim】"
date: "2024-11-08"
tags: ["Vim", "Linux", "vimrc", "エディタ"]
description: ""
---

この記事はQiitaに投稿した[記事](https://qiita.com/Broccolingual/items/8facc5f36564b987807f)の転載です

# はじめに

皆さんは開発する際のエディタとして何を使っているだろうか?
最近は言語を問わず`VSCode`という方も多いと思うが，CLI環境のLinuxでの開発となると話は変わってくる．
だいたい，派閥としては`vi(vim)`, `emacs`, `nano`等があげられるが，その中でも比較的簡単にカスタマイズしやすく拡張性もあるのが，`vim`である．`vim`というと操作が独特で拒否感を持っている方も一定数いると思うが，自分好みに魔改造することで，ほぼVSCode並のエディタにすることも可能である．今回は，そんな拒否感を持っている方のためにも使いやすいように軽くカスタマイズを試みようと思う．

※本当にVSCode並に魔改造したい人は↓

[vimって極めればvscode並のIDEになるんじゃないの？](https://qiita.com/ulwlu/items/98901f4c4f0683e7aa57)

# `.vimrc`の編集

vimの設定を変更するためには，ホームディレクトリに`.vimrc`ファイルを作成し，vim専用の言語で設定を行う必要がある．

```vim
set number " 行番号の追加
set cursorline " 編集中の行をハイライト
set ruler " 右下にカーソルの位置を表示
set showcmd " 入力中のコマンドを表示
set title " タイトルの追加
syntax enable " シンタックスハイライトを有効化
set wildmenu " vim上からファイルを選択できる機能を有効化
set ambiwidth=double " 全角文字の重なりを解消
set backspace=indent,eol,start " 挿入モードでbackspaceを使って削除を可能に
set laststatus=2 " ステータスバーを2行表示
set history=1000 " コマンドの履歴を1000件保存
set showmatch " 対応する括弧をハイライト
set smartindent " 前の行のインデントを保持
set clipboard+=unnamed " ヤンクの結果をクリップボードに保存
set noerrorbells " エラーの表示時にビープ音を鳴らさない
set mouse=a " マウスの有効化

set shiftwidth=0 " タブの設定(タブ幅4の場合)
set softtabstop=4
set tabstop=4

autocmd FileType python setlocal tabstop=4 " 言語ごとにタブ幅を設定する場合

set hlsearch " 検索結果をハイライト
set incsearch " 最初の一文字を入力した時点から検索開始
set wrapscan " ファイル末尾に到達すると再び先頭から検索
```

# dein.vim(プラグイン)のインストール ※さらに改造したい人向け

### ホームディレクトリにdein用のディレクトリを作成し，作業ディレクトリを移動

```terminal
mkdir -p ~/.cache/dein && cd $_
```

### curlでインストール用のShellScriptをダウンロード

```terminal
curl https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > installer.sh
```

### インストール実行

```terminal
sh ./installer.sh ~/.cache/dein
```

### 出力されたコードを`~/.vimrc`に追記

```vim
"dein Scripts-----------------------------

if &compatible
  set nocompatible               " Be iMproved
endif

" ~ 中略 ~

if dein#check_install() " ここの3行がコメントアウトされている場合は外す
  call dein#install()   " ※外さないとdeinに追加したプラグインがインストールされません
endif

"End dein Scripts-------------------------
```

※dein.vim(GitHub) - https://github.com/Shougo/dein.vim

# プラグインの追加方法

上記のdeinの導入時に.vimrcに貼り付けたスクリプトに追記してプラグインを追加

```vim
" ~ 略 ~

" Add or remove your plugins here:
"call dein#add('Shougo/neosnippet.vim')
"call dein#add('Shougo/neosnippet-snippets')

" ~ ここに追記 ~

" Required:
call dein#end()

" ~ 略 ~
```

# テーマの追加(プラグイン導入例)

今回は，例としてdeinにayuとlightlineというテーマプラグインを導入する．

```vim
" ~ 略 ~

" Add or remove your plugins here:
"call dein#add('Shougo/neosnippet.vim')
"call dein#add('Shougo/neosnippet-snippets')

" ~ 追加行 ここから ~
 call dein#add('ayu-theme/ayu-vim')
 call dein#add('itchyny/lightline.vim')
" ~ 追加行 ここまで ~

" Required:
call dein#end()

" ~ 中略 ~

"End dein Scripts-------------------------

" ~ 追加行 ここから (ayu-themeの設定) ~
set termguicolors     " enable true colors support
"let ayucolor="light"  " for light version of theme
"let ayucolor="mirage" " for mirage version of theme
let ayucolor="dark"   " for dark version of theme
colorscheme ayu
" ~ 追加行 ここまで ~

" ~ 略 ~
```

上記の通り.vimrcに追記してvimを起動すると，自動的に必要なものがダウンロードされ，テーマが適用された状態でvimが開く．

※ayu-theme/ayu-vim(GitHub) - https://github.com/ayu-theme/ayu-vim

※itchyny/lightline.vim(GitHub) - https://github.com/itchyny/lightline.vim
