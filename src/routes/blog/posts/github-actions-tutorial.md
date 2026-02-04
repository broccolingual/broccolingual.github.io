---
title: "Github Actionsで始めるプログラム定期実行"
date: "2021-02-13"
tags: ["Github Actions", "定期実行", "初心者", "GitHub", "Python"]
description: ""
---

この記事はQiitaに投稿した[記事](https://qiita.com/Broccolingual/items/bf0fa0d00920fbfda371)の転載です

# はじめに

よくプログラムの定期実行の方法として、Windowsではタスクの登録、Linuxではcronでの定期実行が紹介されるが、ローカル環境でこれらを行う場合は、もちろんPCを起動しておく必要がある。しかし、たかが1プログラムのために電気代を消費するのも勿体ないし、サーバーを借りて実行するほどでもない、といった需要に一番マッチするのがGithub Actionsである。

`※この記事はGitに関しての記事ではないため、コミットやプッシュなどは理解しているものとして話を進める。`

# GitHub Actionsとは?

Github Actionsはその名の通りGitHubから提供されているワークフローを自動化するためのツールである。
具体的には、リポジトリの`.github/workflows`の配下にYAML形式の実行制御ファイルを配置することによって利用することができる。Linuxで利用されるcronによる定期実行やレポジトリへのプッシュを検知して、ワークフローを実行することもできる。

公式ドキュメント -> https://docs.github.com/ja/actions/reference/workflow-syntax-for-github-actions

# 実行するトリガーとなるイベントを検知

### リポジトリの`main`ブランチにプッシュされたときに実行
```yaml
on:
  push:
    branches:
      - main
```

### 時間を設定して定期実行
```yaml
on:
  schedule:
    - cron: '0 3 * * *'
```
`※時間はUTCであることに注意が必要。上記の例では、1日に1回日本時間の12:00に実行。`

cronの時間設定については↓の記事を参照

[クーロン(cron)をさわってみるお](https://qiita.com/katsukii/items/d5f90a6e4592d1414f99)

# 実行する環境の設定

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
```
他にもWindows ServerやMacOSなども使用できる。利用する場合は[公式ドキュメント](https://docs.github.com/ja/actions/reference/workflow-syntax-for-github-actions)を参照されたい。

# ワークフローの実行

ここからは主にLinuxで実行したいコマンドを書いていくことになる。(Linuxのコマンドの内容については解説しない)
今回は例としてPythonの環境を構築して、レポジトリ内の`main.py`を実行し、実行した結果をレポジトリに自動でプッシュするように設定する。

```yaml
name: ActionsTest # GitHub Actionsにつける名前。任意で良い。

on:
  schedule:
    - cron: '0 3 * * *' # cronで定期実行

jobs:
  build:
    runs-on: ubuntu-latest # 最新のubuntu環境で下記のジョブを実行
    steps:
      - uses: actions/checkout@v2 # おまじない
      
      - name: Setup python # ワークフローのセクションごとに設定する名前。特に設定する必要はないが、どこでエラーが起きているかを把握する為にも設定しておいた方が良い。
        uses: actions/setup-python@v2 # Pythonのセットアップ
        with:
          python-version: "3.x" # Pythonのバージョン指定
      
      - name: Install dependencies # Pythonの依存環境のインストール
        run: | #このような書き方で複数行を一気に実行することができる。
          python -m pip install --upgrade pip
          pip install pandas
          pip install pytz
          pip install matplotlib
          pip install numpy
          
      - name: Run main.py # Pythonファイルの実行
        run: |
          python main.py

      - name: Commit and Push # 実行した結果をプッシュして変更をレポジトリに反映
        run: |
          git config user.name "YOUR NAME"
          git config user.email "YOUR MAIL"
          git add .
          git commit -m "Commit Message"
          git pull
          git push origin master
```
`※最後のGitにコミットする前の名前とEmailは必須だそうだ。(この行を省いた状態でテストしていない...)`

これだけで簡単にスクリプトを実行し、レポジトリに反映するスクリプトが出来る。ただし、月当たりの利用時間の制限があるので、サーバーとして運用するのは厳しいかと思われる。（無料枠では**2000分/月**）

# その他の機能

上記で紹介したもののほかにも、環境変数を利用したり、特定のシェルを利用することもできる。これらの機能の詳細については、下記のドキュメントを参考にされたい。

公式ドキュメント -> https://docs.github.com/ja/actions/reference/workflow-syntax-for-github-actions
