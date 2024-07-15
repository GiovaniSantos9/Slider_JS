let buttonLeft = document.getElementById("left");
let buttonRight = document.getElementById("right");
let img = document.getElementById("img1");

buttonRight.addEventListener("click", () => {
    if (img.src.includes("imagens/paisagem.jpg")) {
        img.src = "imagens/paisagem2.jpg";
    } else {
        img.src = "imagens/paisagem.jpg";
    }
});

buttonLeft.addEventListener("click", () => {
    if (img.src.includes("imagens/paisagem2.jpg")) {
        img.src = "imagens/paisagem3.jpg";
    } else {
        img.src = "imagens/paisagem2.jpg";
    }
});



