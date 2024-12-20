/** ================================================================================================
 * テンプレート
================================================================================================= */

/**
 * ページのロード完了を待つ
 */
await Promise.race([
    // ページのロード完了を待つ
    new Promise((resolve) => { window.addEventListener("load", resolve, { once: true }); }),
    // 3秒経過したら強制的にresolve
    new Promise((resolve) => { setTimeout(resolve, 3000); }),
]);


/**
 * document.querySelectorのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element}
 */
const $ = selector => document.querySelector(selector);

/**
 * document.querySelectorAllのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element[]}
 */
const $$ = selector => Array.from(document.querySelectorAll(selector));

/** ================================================================================================
 * 以下、本体
================================================================================================= */

/**
 * クエリパラメータで指定された値があれば設定
 */
const param = new URLSearchParams(window.location.search);
// p : 呪文(spell)
if (param.has("p")) $("textarea#spell").value = param.get("p");
// t : 対象(target)
if (param.has("t")) $("textarea#target").value = param.get("t");
// title : ページタイトル
if (param.has("title")) document.title = `${param.get("title")} | JS_magic-circle`;
// file : 呪文を外部ファイルから読み込み
if (param.has("file")) {
    const url = param.get("file");
    const res = await fetch(url, { mode: "cors" });
    const text = await res.text();
    $("textarea#spell").value = text;
}

/**
 * 画面下部に結果やエラーなどを示すメッセージボックスを表示
 * @param {string} color - #RRGGBB
 * @param {string} desc - 文章
 */
const displayResultMessage = (color, desc) => {
    const el = document.createElement("p");
    el.classList.add("message");
    el.style.backgroundColor = color;
    el.textContent = desc;
    el.addEventListener("animationstart", (event) => {
        setTimeout(() => {
            event.target.remove();
        }, 3500);
    });
    $("body").appendChild(el);
}

/**
 * 詠唱
 */
const magic = async () => {
    /** @type {string} - 対象 */
    const target = $("textarea#target").value;
    /** @type {string} - 呪文 */
    const spell = $("textarea#spell").value;
    try {
        // 呪文が空文字列の場合はエラー投げ
        if (!spell) {
            throw new Error("呪文を入力してください");
        }
        // v1互換モードかどうか
        const isV1 = $(".options input#v1compat").checked;
        // 魔法をかける
        let fn;
        if (isV1) {
            fn = new Function(`return (input => {${spell}});`)();
        } else {
            fn = new Function(`return (${spell});`)();
        }
        // メッセージを表示(詠唱を開始)
        displayResultMessage("#555", "詠唱を開始");
        const result = await fn(target);
        // 結果をtextareaに表示
        $("textarea#result").value = result;
        // メッセージを表示
        displayResultMessage("#282", "詠唱が完了しました");
    } catch (error) {
        displayResultMessage("#822", "«Error» " + error.message);
        console.error(error);
    }
};

/**
 * 再実行のために出力を対象にコピー
 */
const cycle = () => {
    $("textarea#target").value = $("textarea#result").value;
}

/**
 * ボタンにイベントリスナーを追加
 */
$("button#start").addEventListener("click", magic);
$("button#cycle").addEventListener("click", cycle);

/**
 * ショートカットキー
 * - Ctrl(command) + Enter: 詠唱
 * - Ctrl(command) + Shift + Enter: 出力を対象にコピーして再詠唱
 */
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        if (event.shiftKey) {
            cycle();
        }
        magic();
    }
});
