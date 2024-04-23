// Show nav-contents
var show_menu = document.getElementById("displayMenu");
var hide_menu = document.getElementById("hide_menu");
var nav_links = document.querySelector(".nav-links");

show_menu.addEventListener("click", () => {
    if (nav_links.style.display = "none") {
        nav_links.style.display = "block";
        hide_menu.style.display = "block";
        show_menu.style.display = "none";
    }
})

hide_menu.addEventListener("click", () => {
    if (nav_links.style.display = "block") {
        nav_links.style.display = "none";
        hide_menu.style.display = "none";
        show_menu.style.display = "block"
    }
})

var pages = document.getElementById("Pages");
var drop_down = document.querySelector(".drops");
var icon_down = document.getElementById("icon-drops");
var icon_up = document.getElementById("icon-drops-up");
pages.addEventListener("click", () => {
    if (drop_down.style.display === "none") {
        drop_down.style.display = "block";
        icon_up.style.display = "none";
        icon_down.style.display = "block"
    }else{
        drop_down.style.display = "none";
        icon_up.style.display = "block"
        icon_down.style.display = "none"
    }
})