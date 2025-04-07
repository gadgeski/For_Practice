const button = document.querySelector("#button");
button.addEventListener("click", function () {
    const name = document.querySelector("name").value;
    const message = 'こんちくわ $[name]さん';
    const output = document.querySelector("#output");
    output.textContent = message;
});