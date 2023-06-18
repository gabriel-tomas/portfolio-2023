const menu_button = document.getElementById("menu-button");
var menu = document.getElementById("menu");
menu.style["visibility"] = "hidden";

function open_menu() {
    if (menu.style["visibility"] == "hidden") {
        document.querySelector("body > main").style["touch-action"] = "none";
        document.querySelector("body").style["overflow-y"] = "hidden";
        menu.style["transform"] = "translateX(100vw)";
        setTimeout('menu.style["visibility"] = "visible"', 250);
        setTimeout('menu.style["transform"] = "translateX(0vw)"', 250);
        setTimeout('document.getElementById("menu--item0").style["opacity"] = "100%"', 100);
        setTimeout('document.getElementById("menu--item1").style["opacity"] = "100%"', 100);
        setTimeout('document.getElementById("menu--item2").style["opacity"] = "100%"', 100);
        setTimeout('document.querySelector("body > main").style["display"] = "none"', 450);
        
    }
    else {
        document.querySelector("body > main").style.removeProperty("touch-action");
        document.querySelector("body").style.removeProperty("overflow-y");
        menu.style["transform"] = "translateX(100vw)";
        document.getElementById("menu--item0").style["opacity"] = "0%";
        document.getElementById("menu--item1").style["opacity"] = "0%";
        document.getElementById("menu--item2").style["opacity"] = "0%";
        document.querySelector("body > main").style["display"] = "flex";
        setTimeout('menu.style["visibility"] = "hidden"', 250);
        setTimeout('menu.style["transform"] = "translateX(0vw)"', 250);
    }
}