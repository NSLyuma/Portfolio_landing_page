//нахожу нужные элементы
const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");
const navMini = document.querySelector(".nav-mini");
const lang = document.querySelector(".header__lang");
const closeBtn = document.getElementById("close");
const img = document.querySelector(".header__img");
const imgMini = document.querySelector(".header__img-mini");

//медиа-запрос с шириной экрана <= 410px
const mediaQuery = window.matchMedia("(max-width: 410px)");

//если ширина экрана меньше 410px и у nav, lang и img нет класса hidden, этот класс добавляется
if (mediaQuery.matches && !nav.classList.contains("hidden") && !lang.classList.contains("hidden") && !img.classList.contains("hidden")) {
    nav.classList.add("hidden");
    lang.classList.add("hidden");
    img.classList.add("hidden");
}

//если ширина экрана меньше 410px и у menu и imgMini есть класс hidden, этот класс убирается
if (mediaQuery.matches && menu.classList.contains("hidden") && imgMini.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    imgMini.classList.remove("hidden");
}

//при изменении размеров окна добавляется и убирается класс hidden для элементов nav, lang, menu и img
window.addEventListener("resize", () => {
    if (mediaQuery.matches &&
        !nav.classList.contains("hidden") &&
        !lang.classList.contains("hidden") &&
        !img.classList.contains("hidden")) {
        nav.classList.add("hidden");
        lang.classList.add("hidden");
        img.classList.add("hidden");
    } else if (!mediaQuery.matches &&
        nav.classList.contains("hidden") &&
        lang.classList.contains("hidden") &&
        img.classList.contains("hidden")) {
        nav.classList.remove("hidden");
        lang.classList.remove("hidden");
        img.classList.remove("hidden");
    }

    if (mediaQuery.matches &&
        menu.classList.contains("hidden") &&
        imgMini.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        imgMini.classList.remove("hidden");
    } else if (!mediaQuery.matches &&
        !menu.classList.contains("hidden") &&
        !imgMini.classList.contains("hidden")) {
        menu.classList.add("hidden");
        imgMini.classList.add("hidden");
    }
});

//при клике на гамбургер появляется мини-меню
menu.addEventListener("click", () => {
    if (mediaQuery.matches) {
        navMini.classList.remove("hidden");
    }
});

//при клике на крестик меню закрывается
closeBtn.addEventListener("click", () => {
    navMini.classList.add("hidden");
});