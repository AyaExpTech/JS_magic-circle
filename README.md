# JS_magic-circle

> プログラミングは現代の魔法なので、呪文詠唱する魔法円的なものがあってもいいと思うんだ

綾坂こと制作のJavaScript魔法詠唱ツールです

GitHub : [https://github.com/AyaExpTech/JS_magic-circle](https://github.com/AyaExpTech/JS_magic-circle)

## 使い方

[https://ayaexptech.github.io/JS_magic-circle/](https://ayaexptech.github.io/JS_magic-circle/)を開きます

### 一般利用者向け

1. 近くにいる魔術者(もといエンジニア)に呪文をもらいます。
2. もらった呪文を『呪文』の欄にコピペします。
3. 魔法をかける対象となるデータを『対象』の欄にコピペします。
4. 中央下の杖のボタンを押します。
    - Ctrl+Enter(macではcommand+Enter)でも実行できます。
    - Ctrl+Shift+Enter(macではcommand+Shift+Enter)を押すと、現在の"出力"を"対象"にコピーしてから実行します。
5. 対象データに呪文がかかります。あとは煮るなり焼くなりお好きに。

### ver1.x.xから使っていた方向け

- ver2.x.x以降、呪文の仕様が変更されています。
    - ver1.x.x時点の呪文をそのまま使いたい場合は、オプションの「v1互換モード」をONにしてください。
- 対象欄と出力欄が分離されました。

### 魔術者(エンジニア)向け

- 入力値をstring型で受け取り、出力値をstringで返す関数オブジェクト(式)を書いてください。
    - 例 : 入力値を2倍する呪文 → `input => (+input * 2).toString()`
    - 例 : 入力値をURLエンコードする呪文 → `input => encodeURIComponent(input)`
    - async functionも使えます
        - 例 : 1秒待って入力値を返す呪文 → `async input => { await new Promise(r => setTimeout(r, 1000)); return input; }`
- URLのクエリパラメータで初期値を設定できます。
    - `p` : 呪文
    - `t` : 対象
    - `title` : タイトル
        - ページタイトルを一部自由に設定できます
    - `file` : ファイル名
        - 呪文をファイルから読み込みます
    - 例 : テキストのURLエンコード → https://ayaexptech.github.io/JS_magic-circle/?p=return%20encodeURIComponent(input)&title=URL%20encode
- v1互換モードをONにすると、ver1.x.xの呪文を(ほぼ)そのまま使えます。
    - 内部的には、前に`input => {`、後ろに`}`を追加して実行しています。

## 利用規約

copyright (c) 2023- Ayasaka-Koto (Project "AyaExpTech"), All rights reserved.  

私に不利益が生じたり、公序良俗に反したりしない限り、基本的には自由に使用していただいて構いません。  
私が使用を許可したくない場合はその旨ご連絡いたします。その際は速やかに使用を中止していただきますようお願いいたします。  
使った際は、私の名前(綾坂こと)をどこかに記載していただけると嬉しいです。

## 更新履歴

> ※現在のバージョンはツールにも表示されます。  
> (@開発者 リリース時に変更を忘れずに！)

2024-11-07 `v2.1.0`
- async functionが使えるように

2024-10-23 `v2.0.0`
- 全体的なデザイン変更
- 呪文の仕様を変更
    - 入力値をstring型で受け取り、出力値をstringで返す関数オブジェクト(式)を書くように変更
    - ver1.x.x時点の呪文をそのまま使いたい場合は、オプションの「v1互換モード」をONにしてください
- 対象欄と出力欄を分離
- クエリ文字列でファイルから呪文を読み込めるように(file=ファイル名)

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
