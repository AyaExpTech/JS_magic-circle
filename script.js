/**
 * document.querySelectorのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element}
 */
const $ = (selector) => {
    return document.querySelector(selector);
}

const magic = () => {
    // 詠唱用意
    const targetText = $("#target").value;
    const promptText = $("#prompt").value;
    // 詠唱
    try {
        if (promptText == "") {
            throw new Error("呪文を入力してください");
        }
        if (targetText == "") {
            throw new Error("対象を入力してください");
        }
        const result = Function("input", promptText)(targetText);
        $("#target").value = String(result);
        displayResultMessage("#393", "呪文の詠唱に成功しました！");
    } catch (error) {
        displayResultMessage("#933", error.message);
    }
};

/**
 * 画面下部に結果やエラーなどを示すメッセージボックスを表示
 * @param {String} color - #RRGGBB
 * @param {String} desc - 文章
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