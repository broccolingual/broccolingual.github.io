---
title: "Pythonにおけるlogging徹底攻略"
date: "2021-01-13"
tags: ["Python", "logging"]
description: ""
---

この記事はQiitaに投稿した[記事](https://qiita.com/Broccolingual/items/9838443aa6838a867041)の転載です

# loggingの重要ポイント
ルートの`logging`を汚さないよう、`getLogger`でloggerオブジェクトを作り、ロギングを行うことが望ましい。また、コード中で誤って`logging`を汚さないように下記の良い例のようにimportを工夫すると良い。

```python
# 良くない例
import logging
logging.debug('this is bad logging')
```

```python
# 良い例
from logging import getLogger # 途中で誤ってloggingを汚さないように個別にimport
logger = getLogger(__name__)
logger.debug('this is good logging')
```
logger作成時に`__name__`としておくことで、出力に`__name__`の値を表示することが出来る。

# ログレベルについて
loggingにはログレベルが設定でき、`setLevel`によりどのログレベルまで表示を行うかを制御することが可能。
ログレベルには、`DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`の5つがあり、ユーザーが任意に指定する必要がある。これらはloggerや後述の各ハンドラーにも個別に設定することが出来る。

```python
from logging import getLogger, INFO

logger = getLogger(__name__)
logger.setLevel(INFO) # この場合、INFO以上のログが出力。つまり、DEBUG以外は出力される

logger.debug('debug log') # 今回の場合、これは表示されない
logger.info('info log')
logger.warning('warning log')
logger.error('error log')
logger.critical('critical log')
```

`出力結果`

```terminal
INFO:root:info log
WARNING:root:warning log
ERROR:root:error log
CRITICAL:root:critical log
```

※loggerに設定されたログレベルは後述のハンドラーにも継承される。

下記はログレベルの詳細の表である。ログレベルに与えられた数値は任意に設定することで、ユーザー定義のログレベルを設定することもできる。利用するタイミングについては任意であるため、必ずしも下記の表に準拠する必要はない。(参考程度)

|ログレベル|数値|利用するタイミング(任意)|
|----|----|----|
|`DEBUG`|10|問題探求に必要な詳細な情報を出力したい場合|
|`INFO`|20|想定内の処理が行われた場合|
|`WARNING`|30|想定外の処理やそれが起こりそうな場合|
|`ERROR`|40|重大な問題により、機能を実行出来ない場合|
|`CRITICAL`|50|プログラムが実行不可となるような重大なエラーが発生した場合|
※[Logging HOWTO](https://docs.python.org/ja/3/howto/logging.html#logging-basic-tutorial)より引用

# フォーマットについて
loggingにはフォーマットも追加でき、`setFormatter`によりログに日付や関数、ログレベルの情報など様々な詳細情報を出力できるようになる。これもログレベルと同じく、loggerや各ハンドラーごとに個別に設定することが出来る。

```python
from logging import getLogger, Formatter

logger = getLogger(__name__)
format = Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger.setFormatter(format) # loggerにフォーマットを適用

logger.info('this is format')
```

`出力結果`

```terminal
2021-01-13 16:40:23 - __main__ - INFO - this is format
```

※その他の利用できるフォーマットについては、[logging --- Python 用ロギング機能](https://docs.python.org/ja/3/library/logging.html)のLogRecord属性を参照

# ハンドラーの設定(StreamHandler, FileHandler)
logを出力するためには、ハンドラーを作成する必要がある。
`StreamHandler`はコンソール出力用、`FileHandler`はログファイル出力用に設定する。

```python
from logging import getLogger, StreamHandler, FileHandler, Formatter, INFO, ERROR

logger = getLogger(__name__)
logger.setLevel(INFO) # loggerがINFOに設定されていると、ハンドラーにもINFO以上のログのみ継承される

# StreamHandlerの設定
ch = StreamHandler()
ch.setLevel(INFO) # ハンドラーにもそれぞれログレベル、フォーマットの設定が可能
ch_formatter = Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger.addHandler(ch) # StreamHandlerの追加

# FileHandlerの設定
fh = FileHandler('log/test.log') # 引数には出力ファイルのパスを指定
fh.setLevel(ERROR) # ハンドラーには、logger以下のログレベルを設定することは出来ない(この場合、DEBUGは不可)
fh_formatter = Formatter('%(asctime)s - %(levelname)s - %(filename)s - %(name)s - %(funcName)s - %(message)s')
logger.addHandler(fh) # FileHandlerの追加
```

※その他の有用なハンドラーは、[logging.handlers --- ロギングハンドラ](https://docs.python.org/ja/3/library/logging.handlers.html#module-logging.handlers)を参照

# コンフィグを利用したログの設定
`logging.config`を利用して、上記のようなハンドラーやフォーマットの個別の設定を読み込ませることもできる。
### `fileConfig`(コンフィグファイルで設定する方法)

```python
from logging import getLogger
import logging.config

logging.config.fileConfig('logging_settings.ini') # ファイルから設定を読み込む
logger = getLogger('root') # logging_settings.iniのrootの設定が呼び出される

logger.info('this is fileConfig from logging_settings.ini')
```

`logging_settings.ini`

```ini
[loggers] ; getLoggerで参照する名前を登録(rootは__main__の時に自動で取得)
keys=root

[handlers] ; 下記のhandler_xxxで設定したものを記述(複数の場合はコンマ区切り)
keys=newStreamhandler

[formatters] ; 下記のformatter_xxxで設定したものを記述(複数の場合はコンマ区切り)
keys=newFormatter

[logger_root] ; 各loggerの設定(logger_<loggerのkey名>とする)
level=INFO
handlers=newStreamhandler

[handler_newStreamhandler]
class=Streamhandler
level=DEBUG
formatter=newFormatter
args=(sys.stderr,)

[formatter_newFormatter]
format=%(asctime)s - %(name)s - %(levelname)s - %(message)s
```

`出力結果`

```terminal
2021-01-13 16:40:23 - root - INFO - this is fileConfig from logging_settings.ini
```

---
### `dictConfig`(辞書型で設定する方法)

```python
from logging import getLogger, DEBUG, INFO
import logging.config

dict_logging_settings = {
    'version': 1, # おまじない
# 新しいハンドラーを追加する場合は、handlers内にnewStreamhandlerと同じ形式で追加
    'handlers': {
        'newStreamHandler': {
            'class': 'logging.StreamHandler',
            'formatter': 'newFormatter',
            'level': DEBUG
        }
    },
# 新しいフォーマットを追加する場合は、formatters内にnewFormatterと同じ形式で追加
    'formatters': {
        'newFormatter': {
            'format': '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        },
    },
# rootのloggerのみ例外的にloggersの外で設定
    'root': {
        'handlers': ['newStreamHandler'],
        'level': INFO
    },
# 他に追加したいloggerについては、上記のrootと同じようにloggers内に記述する
    'loggers': {}
}

logging.config.dictConfig(dict_logging_settings) # 辞書から設定を読み込む
logger = getLogger('root') # dict_logging_settingsのrootの設定が呼び出される

logger.info('this is dictConfig from dict_logging_settings')
```

`出力結果`

```terminal
2021-01-13 16:40:23 - root - INFO - this is dictConfig from dict_logging_settings
```


# 参考記事
* [logging --- Python 用ロギング機能](https://docs.python.org/ja/3/library/logging.html)
* [Logging クックブック](https://docs.python.org/ja/3/howto/logging-cookbook.html#logging-from-multiple-threads)
* [Pythonでロギングを学ぼう - Qiita](https://qiita.com/__init__/items/91e5841ed53d55a7895e)
* [ログ出力のための print と import logging はやめてほしい - Qiita](https://qiita.com/amedama/items/b856b2f30c2f38665701)
