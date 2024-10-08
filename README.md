# JS_magic-circle

> 『プログラミングは現代の魔法なので、呪文詠唱する魔法円的なものがあってもいいと思うんだ』

綾坂こと制作のJavaScript魔法詠唱ツールです(？)

## 使い方

- [https://ayaexptech.github.io/JS_magic-circle/](https://ayaexptech.github.io/JS_magic-circle/)を開きます

### 一般利用者向け

1. 近くにいる魔術者(もといエンジニア)に呪文をもらいます。
2. もらった呪文を『呪文』の欄にコピペします。
3. 魔法をかける対象となるデータを『対象』の欄にコピペします。
4. 中央の杖のボタンを押します。
    - Ctrl+Enter(macではcommand+Enter)でもOK
5. 対象データに呪文がかかります。あとは煮るなり焼くなりお好きに。

### 魔術者(エンジニア)向け

出力値を返す関数の中身のコードを書き、呪文として渡してください。  
`input`で入力値を(String型で)参照できます。  
例 : 入力値を2倍する呪文の入力値↓

```js
return +input * 2;
```

> URLのクエリパラメータで初期値を設定できます。`p`が呪文、`t`が対象、`title`がタイトル。  
> 例 : テキストのURLエンコード → https://ayaexptech.github.io/JS_magic-circle/?p=return%20encodeURIComponent(input)&title=URL%20encode

## 利用規約

Copyright (c) 2023- Ayasaka-Koto

日本の法令や公序良俗に反さなければ自由に利用できます。  
再配布時は著作者(原作者)として"綾坂こと"を表記してください。

### 注意

以下の素材には上記利用規約が適用されないことに注意してください。

1.  魔法陣素材(`circle.svg`)は『あやえも研究所』様の素材をお借りしています。  
    ([配布サイト](https://ayaemo.skr.jp/material_magic_circuit.html))
2.  魔法杖素材(`wand.svg`)は『Font Awesome』様の素材をお借りしています。  
    ([配布サイト](https://fontawesome.com/icons/wand-magic-sparkles?f=classic&s=solid))

## 更新履歴

> ※現在のバージョンはツールにも表示されます。  
> (@開発者 リリース時に変更を忘れずに！)

2024-08-31 `v1.5.0`
- フォントを変更
- クエリ文字列でページタイトルを設定できるように(title=タイトル)

2024-08-02 `v1.4.0`
- ショートカットキーを追加

2024-02-28 `v1.3.0`
- フォントを等幅フォントに変更

2023-05-19 `v1.2.0`
- 画面幅が小さい環境で文字が想定したより大きく表示されるバグを仮修正
- バージョン表記を追加
- [AXT-func.js](https://github.com/AyaExpTech/AXT-func.js)の最新リリース版を読み込むように
- 対象未入力時にエラーを投げないように(召喚魔術ができるようになった)

2023-05-08 `v1.1.0`
- OGPとfaviconを追加
- クエリ文字列で初期値を代入できるように(p=呪文、t=対象)

2023-05-08 `v1.0.2`
- GitHubリポジトリへのリンクを追加

2023-05-08 `v1.0.1`
- 綾急技研・綾坂ことの文言にそれぞれTwitterへのリンクを追加

2023-05-08 `v1.0.0`
- リリース
- `.nojekyll`と`.gitignore`を追加(いつもの)

2023-05-08 `v0.0.0`
- 思いついたのでリポジトリを立てました
