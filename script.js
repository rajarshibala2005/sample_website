const nav = document.getElementById("nav");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close");

let menu = "close";

const toggleNav = () => {
    if (menu === "close") {
        menu = "open";
        nav.style.display = "block";
        closeMenu.style.display = "block";
        openMenu.style.display = "none";
    } else {
        menu = "close";
        nav.style.display = "none";
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    } 
  }

openMenu.addEventListener("click", toggleNav)
closeMenu.addEventListener("click", toggleNav)