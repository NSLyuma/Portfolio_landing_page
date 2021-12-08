const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");
const navMini = document.querySelector(".nav-mini");
const lang = document.querySelector(".header__lang");
const closeBtn = document.getElementById("close");
const img = document.querySelector(".header__img");
const imgMini = document.querySelector(".header__img-mini");

//медиа-запрос с шириной экрана <= 410px
const mediaQuery = window.matchMedia("(max-width: 410px)");

/**
 * 
 */
class AddRemoveClass {
    constructor(elem, mediaQuery, elemClass) {
        this.elem = elem;
        this.mediaQuery = window.matchMedia(`(max-width: ${mediaQuery}px)`);
        this.elemClass = elemClass;
    }
    addClass() {
        if (this.mediaQuery.matches && !this.elem.classList.contains(this.elemClass)) {
            this.elem.classList.add(this.elemClass);
        }
        window.addEventListener("resize", () => {
            if (this.mediaQuery.matches &&
                !this.elem.classList.contains(this.elemClass)) {
                this.elem.classList.add(this.elemClass);
            } else if (!this.mediaQuery.matches &&
                this.elem.classList.contains(this.elemClass)) {
                this.elem.classList.remove(this.elemClass);
            }
        });
    }
    removeClass() {
        if (this.mediaQuery.matches && this.elem.classList.contains(this.elemClass)) {
            this.elem.classList.remove(this.elemClass);
        }
        window.addEventListener("resize", () => {
            if (this.mediaQuery.matches &&
                this.elem.classList.contains(this.elemClass)) {
                this.elem.classList.remove(this.elemClass);
            } else if (!this.mediaQuery.matches &&
                !this.elem.classList.contains(this.elemClass)) {
                this.elem.classList.add("hidden");
            }
        });
    }
}

let navClass = new AddRemoveClass(nav, 410, "hidden");
navClass.addClass();

let langClass = new AddRemoveClass(lang, 410, "hidden");
langClass.addClass();

let imgClass = new AddRemoveClass(img, 410, "hidden");
imgClass.addClass();

let menuClass = new AddRemoveClass(menu, 410, "hidden");
menuClass.removeClass();

let imgMiniClass = new AddRemoveClass(imgMini, 410, "hidden");
imgMiniClass.removeClass();

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

const navMiniL = document.querySelector(".nav-mini__left");
const links = navMiniL.querySelectorAll("a");
console.log(links);

//меню закрывается при клике на любую из ссылок
links.forEach((link) => {
    link.addEventListener("click", () => {
        navMini.classList.add("hidden");
    })
})