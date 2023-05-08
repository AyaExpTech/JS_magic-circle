# JS_magic-circle

> 『プログラミングは現代の魔法なので、呪文詠唱する魔法円的なものがあってもいいと思うんだ』

綾坂こと制作のJavaScript魔法詠唱ツールです(？)

## 使い方

### 一般利用者向け

1. 近くにいる魔術者(もといエンジニア)に呪文をもらいます。
2. もらった呪文を『呪文』の欄にコピペします。
3. 魔法をかける対象となるデータを『対象』の欄にコピペします。
4. 中央の杖のボタンを押します。
5. 対象データに呪文がかかります。あとは煮るなり焼くなりお好きに。

### 魔術者(エンジニア)向け

出力値を返す関数の中身のコードを書き、呪文として渡してください。  
`input`で入力値を(String型で)参照できます。  
例 : 入力値を2倍する呪文の入力値↓

```js
((i) => {
    return i * 2;
})(input)
```

## 利用規約

Copyright (c) 2023-  
AyaExpTech, Ayasaka-Koto

以下の規約のいずれかに従ってください。  
Follow one of the following licenses.

- "AeTOS for Seller" …… https://axtech.dev/license/#aetos-for-seller

### 注意

以下の素材にはAeTOSが適用されないことに注意してください。

1.  魔法陣素材(`circle.svg`)は『あやえも研究所』様の素材をお借りしています。  
    ([配布サイト](https://ayaemo.skr.jp/material_magic_circuit.html))
2.  魔法杖素材(`wand.svg`)は『Font Awesome』様の素材をお借りしています。  
    ([配布サイト](https://fontawesome.com/icons/wand-magic-sparkles?f=classic&s=solid))

## 更新履歴

2023-05-08 `v1.0.0`
- リリース
- `.nojekyll`と`.gitignore`を追加(いつもの)

2023-05-08 `v0.0.0`
- 思いついたのでリポジトリを立てました