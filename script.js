var menu = document.querySelector(".right__nav");
var menubar = document.querySelector(".menu__bar");
var closeicon = document.querySelector(".close__icon");

function showSidebar() {
    menu.classList.add("mobile__view");
    menubar.classList.remove("menu__bar");
    closeicon.style.display = "block"
}
function closeSidebar() {
    menu.classList.remove("mobile__view");
    menubar.classList.add("menu__bar");
    closeicon.style.display = "none"
}