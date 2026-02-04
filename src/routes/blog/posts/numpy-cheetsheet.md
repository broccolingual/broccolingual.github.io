---
title: "あなたの知らない(かもしれない)numpyライフハックの世界"
date: "2023-10-20"
tags: ["Python", "numpy", "初心者"]
description: ""
---

この記事はQiitaに投稿した[記事](https://qiita.com/Broccolingual/items/863bcf79f0212fefd500)の転載です

# はじめに
全世界80億のnumpyユーザーの皆さんこんにちは。この記事ではnumpyを扱い始めたばかり、もしくは今までなんとなくnumpyを使い続けてきた人向けにnumpyの痒い所に手が届く機能をご紹介します。

# 単位行列

```py
M = np.eye(3) # 3 x 3の単位行列を生成
print(M)
```

```terminal:実行結果
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]
```

# 対角要素の取得

```py
M = np.arange(9).reshape(3, 3)
print(M)
M = np.diag(M)
print(M)
```

```terminal:実行結果
[[0 1 2]
 [3 4 5]
 [6 7 8]]
[0 4 8]
```

# ゼロ以下の要素をすべて0にする

```py
M = np.arange(-4, 4)
print(M)
M[M < 0] = 0 # 0以下の要素を0に
print(M)
```

```terminal:実行結果
[-4 -3 -2 -1  0  1  2  3]
[0 0 0 0 0 1 2 3]
```

# ゼロでない要素のインデックスの取得

```py
M = np.arange(9)
print(M)
M = np.nonzero(M) # ゼロでない要素のインデックスのリストを作成
print(M)
```

```terminal:実行結果
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
(array([1, 2, 3, 4, 5, 6, 7, 8], dtype=int64),)
```

# 条件に合致する要素のインデックスを取得

```py
M = np.arange(-4, 4)
print(M)
M = np.where(M < 0) # 0未満の要素のインデックスを取得
print(M)
```

```terminal:実行結果
[-4 -3 -2 -1  0  1  2  3]
(array([0, 1, 2, 3], dtype=int64),)
```

# 配列の累積和を取得

```py
M = np.arange(9)
print(M)
M = np.cumsum(M)
print(M)
```

```terminal:実行結果
[0 1 2 3 4 5 6 7 8]
[ 0  1  3  6 10 15 21 28 36]
```

# 既存の配列の周囲を任意の値で埋める

```py
M = np.arange(9).reshape(3, 3)
print(M)
M = np.pad(M, pad_width=1, mode='constant', constant_values=-1) # 配列Mの周囲1マスを-1で埋める
print(M)
```

```terminal:実行結果
[[0 1 2]
 [3 4 5]
 [6 7 8]]
[[-1 -1 -1 -1 -1]
 [-1  0  1  2 -1]
 [-1  3  4  5 -1]
 [-1  6  7  8 -1]
 [-1 -1 -1 -1 -1]]
```

# 配列の要素を一定の範囲に収める

```py
M = np.arange(9)
print(M)
M = np.clip(M, 2, 5) # 要素を2から5の範囲に収める
print(M)
```

```terminal:実行結果
[0 1 2 3 4 5 6 7 8]
[2 2 2 3 4 5 5 5 5]
```

# 参考記事
・[100 Numpy Exercises](https://github.com/rougier/numpy-100)
・[NumPy日本語公式サイト](https://numpy.org/ja/)
