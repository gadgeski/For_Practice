const interests = ["ホヨバゲー","ガジェット","プログラミング"]；
const specialities = ["ちなこの設問は","めっちゃ迷ってる","どないすんねん？"]；
const greetings = ["トマトマゼール？","パスタクエール？","バイトコレール？"]
const button = document.querySelector("#button");
button.addEventListener("click", function () {
    const name = document.querySelector("name").value;
    const index1 = Math.floor(Math.random() * interests.length);
    const index2 = Math.floor(Math.random() * specialities.length);
    const index3 = Math.floor(Math.random() * greetings.length);
    const interest = interests[index1];
    const speciality = specialities[index2];
    const greeting = greetings[index3];
    const message = 'こんちくわ $[name]さん
    最近ハマっているのは$[interrest]で、ぶっちゃけ$[speciality]なんだけど$[greeting]';
    const output = document.querySelector("#output");
    output.textContent = message;
});