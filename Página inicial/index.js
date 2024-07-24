const icone_menuHamburguer = document.querySelector(".i-menuHamburguer");
const menuHamburguer = document.querySelector("#menuHamburguer");

icone_menuHamburguer.addEventListener("click", function () {
    if (menuHamburguer.style.display == "block") {
        menuHamburguer.style.display = "none"
    } else {
        menuHamburguer.style.display = "block"
    }
});

window.addEventListener("resize", function () {
    let width = window.innerWidth;
    if (width > 1060) {
        menuHamburguer.style.display = "none";
    }
});