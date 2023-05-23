const menu_button = document.getElementById("menu-button");
var menu = document.getElementById("menu");
menu.style["visibility"] = "hidden"

function open_menu() {
    if (menu.style["visibility"] == "hidden") {
        menu.style["visibility"] = "visible";
        menu.style["transform"] = "translateX(0vw)";
        setTimeout('document.getElementById("menu--item0").style["opacity"] = "100%"', 100);
        setTimeout('document.getElementById("menu--item1").style["opacity"] = "100%"', 100);
        setTimeout('document.getElementById("menu--item2").style["opacity"] = "100%"', 100);
        setTimeout('document.querySelector("body > main").style["display"] = "none"', 250);
    }
    else {
        menu.style["transform"] = "translateX(100vw)";
        document.getElementById("menu--item0").style["opacity"] = "0%";
        document.getElementById("menu--item1").style["opacity"] = "0%";
        document.getElementById("menu--item2").style["opacity"] = "0%";
        document.querySelector("body > main").style["display"] = "block";
        setTimeout('menu.style["visibility"] = "hidden"', 250);
    }
}