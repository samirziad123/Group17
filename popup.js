//create title
let title = document.createElement("h1");
title.id = "title";
title.innerHTML = "Color Corrector";
document.body.appendChild(title);

//create button
let btn = document.createElement("button");
btn.id = "button";
btn.innerHTML = "Click Me";
btn.onclick = function () {
    let message = document.createElement("h2");
    message.id = "message";
    message.innerHTML = "It has been clicked";
    document.body.appendChild(message);
};
document.body.appendChild(btn);
