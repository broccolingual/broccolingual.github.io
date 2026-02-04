---
title: "Haskellで各種ソートを実装してみる"
date: "2022-06-27"
tags: ["Haskell", "ソート"]
description: ""
---

この記事はQiitaに投稿した[記事](https://qiita.com/Broccolingual/items/bee28bf7708ebd4bae9b)の転載です

# Haskellとは

Haskellとは純粋関数型プログラミング言語の代表格である。
関数型という特徴故に普段我々が慣れ親しんでいる手続き型とはパラダイムが大きく異なるため習得には、多少の苦労が必要。代表的な言語特性としては、変数の再代入禁止・関数のパターンマッチング・遅延評価(無限リストの実現)などがある。

公式サイト : [https://www.haskell.org/](https://www.haskell.org/)

# 選択ソート

### 特徴

* 最悪計算量 $O(n^2)$
* 安定でない

### ソースコード

```haskell
selectionSort :: (Ord a) => [a] -> [a]
selectionSort [] = []
selectionSort [x] = [x]
selectionSort xs =
  min:selectionSort [x | x <- xs, x /= min] -- 1
  where min = minimum xs -- 2
```

### ソースコード解説

1. 与えられた配列の最小値を省いた配列をselectionSortに渡し、その配列の先頭に最小値を挿入
1. 配列から最小値を取り出し、値をminに格納


# バブルソート

### 特徴

* 最悪計算量 $O(n^2)$
* 安定

### ソースコード

```haskell
bubble :: (Ord a) => [a] -> [a]
bubble [] = []
bubble [x] = [x]
bubble (x:y:xs) -- 1
  | x < y = x:bubble (y:xs) --  2
  | otherwise = y:bubble (x:xs) -- 3

bubbleSort :: (Ord a) => [a] -> [a]
bubbleSort [] = []
bubbleSort [x] = [x]
bubbleSort xs = bubbleSort (init r) ++ [last r] -- 4
  where r = bubble xs -- 5
```

### ソースコード解説

1. 先頭と2番目の要素をx,yに束縛
1. yがxよりも大きい場合はxとyを入れ替えない
1. それ以外の場合はxとyを入れ替える
1. rの最後の要素以外をbubbleSortに渡し、得られた配列に最後の要素を追加
1. bubble関数で処理された配列をrに格納(rの最後の要素は配列中の最大値になっている)

# クイックソート

### 特徴

* 最悪計算量 $O(n^2)$
* 安定でない

### ソースコード

```haskell
quickSort :: (Ord a) => [a] -> [a]
quickSort [] = []
quickSort [x] = [x]
quickSort (x:xs) = -- 1
  quickSort l ++ [x] ++ quickSort r -- 2
  where l = filter ( <= x) xs -- 3
        r = filter ( > x) xs -- 4
```

### ソースコード解説

1. 先頭の要素をxに束縛
1. lを渡して得られた配列をxの左、quickSortにrを渡して得られた配列をxの右に結合
1. xを除いた残りの配列のうちx以下のものを配列lに格納
1. xを除いた残りの配列のうちxより大きいものを配列rに格納

# マージソート

### 特徴

* 最悪計算量 $O(n \log n)$
* 安定

### ソースコード

```haskell
marge :: (Ord a) => [a] -> [a] -> [a]
marge xs [] = xs
marge [] ys = ys
marge (x:xs) (y:ys) -- 1
  | x < y = x:marge xs (y:ys) -- 2
  | otherwise = y:marge (x:xs) ys -- 3

margeSort :: (Ord a) => [a] -> [a]
margeSort [] = []
margeSort [x] = [x]
margeSort xs = marge (margeSort l) (margeSort r) -- 4
  where l = take half xs -- 5
        r = drop half xs -- 6
        half = length xs `div` 2 -- 7
```

### ソースコード解説

1. 1つ目の配列の先頭の要素をxに束縛、2つ目の配列の先頭の要素yに束縛
1. yがxよりも大きい場合は、margeに1つ目の配列の残りの部分と2つ目の配列を渡し、得られた配列の先頭にxを挿入
1. それ以外の場合は、margeに1つ目の配列と2つ目の配列の残りの部分を渡し、得られた配列の先頭にyを挿入
1. margeにmargeSortに配列lと配列rをそれぞれ渡したものを渡す
1. 与えられた配列を半分に分割し、前部分を配列lに格納
1. 与えられた配列を半分に分割し、後ろ部分を配列rに格納
1. 配列の長さを2で割ったものをhalfに格納(\`div\`はdivの中置記法文法)

# あとがき

上記のコードは、筆者がHaskellの学習のために浅い知識でとりあえず動くように作ってみたコードです。よって、蛇足な箇所やHaskellの特性を生かし切れていない部分も見受けられるかもしれませんが、何卒ご了承ください。

# これからHaskellを学ぶ方へ

[すごいHaskellたのしく学ぼう！](https://www.amazon.co.jp/dp/B009RO80XY/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

巷で「すごいH本」としてよく知られているHaskell入門書の定番。ポップなタイトルとは裏腹に割と本格的（言語特性的に仕方がないかも?）で網羅的。
