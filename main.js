const interests = ["ホヨバゲー","ガジェット","プログラミング"];
const specialties = ["ちな言語選び","めっちゃ迷ってる","どないすんねん？"];
const greetings = ["トマトマゼール？","パスタクエール？","バイトコレール？"];
const button = document.querySelector("#button");
button.addEventListener("click", function () {
    const name = document.querySelector("#name").value;
    // nameに#を追加
    const index1 = Math.floor(Math.random() * interests.length);
    const index2 = Math.floor(Math.random() * specialties.length);
    const index3 = Math.floor(Math.random() * greetings.length);
    const interest = interests[index1];
    const specialty = specialties[index2];
    const greeting = greetings[index3];
    const message = `
    こんちくわ ${name}さん。
    最近ハマっているのは${interest}で、
    ぶっちゃけ${specialty}なんだけど${greeting}`;
    const output = document.querySelector("#output");
    output.textContent = message;
});