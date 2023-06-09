const menu_button = document.getElementById("menu-button");
var menu = document.getElementById("menu");
var menu_behind = document.getElementById("menu-behind")
menu.style["visibility"] = "hidden";
menu_behind.style["visibility"] = "hidden";

function open_menu() {
    if (window.matchMedia("(min-width: 769px)").matches) {
        if (menu.style["visibility"] == "hidden") {
            document.querySelector("body > main").style["touch-action"] = "none";
            document.querySelector("body").style["overflow-y"] = "hidden";
            menu.style["transform"] = "translateX(100vw)";
            setTimeout('menu.style["visibility"] = "visible"', 250);
            setTimeout('menu_behind.style["visibility"] = "visible"', 250);
            menu_behind.style["opacity"] = "1";
            menu_behind.style["transition-delay"] = "165ms";
            setTimeout('menu.style["transform"] = "translateX(0vw)"', 250);
            setTimeout('document.getElementById("menu--item0").style["opacity"] = "100%"', 100);
            setTimeout('document.getElementById("menu--item1").style["opacity"] = "100%"', 100);
            setTimeout('document.getElementById("menu--item2").style["opacity"] = "100%"', 100);
            //setTimeout('document.querySelector("body > main").style["display"] = "none"', 450);//
            
        }
        else {
            document.querySelector("body > main").style.removeProperty("touch-action");
            document.querySelector("body").style.removeProperty("overflow-y");
            menu.style["transform"] = "translateX(100vw)";
            document.getElementById("menu--item0").style["opacity"] = "0%";
            document.getElementById("menu--item1").style["opacity"] = "0%";
            document.getElementById("menu--item2").style["opacity"] = "0%";
            //document.querySelector("body > main").style["display"] = "block";//
            setTimeout('menu.style["visibility"] = "hidden"', 250);
            setTimeout('menu_behind.style["visibility"] = "hidden"', 250);
            menu_behind.style["opacity"] = "0";
            menu_behind.style["transition-delay"] = "0ms";
            setTimeout('menu.style["transform"] = "translateX(0vw)"', 250);
        }
    }
    else if (window.matchMedia("(max-width: 768px)").matches) {
        if (menu.style["visibility"] == "hidden") {
            menu.style["display"] = "flex";
            document.querySelector("body > main").style["touch-action"] = "none";
            document.querySelector("body").style["overflow-y"] = "hidden";
            
            document.body.style.top = `-${window.scrollY}px`;
            setTimeout("document.body.style.position = 'fixed'", 300)
            
            menu.style["transform"] = "translateX(100vw)";
            setTimeout('menu.style["visibility"] = "visible"', 250);
            setTimeout('menu_behind.style["visibility"] = "visible"', 250);
            menu_behind.style["opacity"] = "1";
            menu_behind.style["transition-delay"] = "165ms";
            setTimeout('menu.style["transform"] = "translateX(0vw)"', 250);
            setTimeout('document.getElementById("menu--item0").style["opacity"] = "100%"', 100);
            setTimeout('document.getElementById("menu--item1").style["opacity"] = "100%"', 100);
            setTimeout('document.getElementById("menu--item2").style["opacity"] = "100%"', 100);
            //setTimeout('document.querySelector("body > main").style["display"] = "none"', 450);
            
        }
        else {
            document.querySelector("body > main").style.removeProperty("touch-action");
            document.querySelector("body").style.removeProperty("overflow-y");
            
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);

            menu.style["transform"] = "translateX(100vw)";
            document.getElementById("menu--item0").style["opacity"] = "0%";
            document.getElementById("menu--item1").style["opacity"] = "0%";
            document.getElementById("menu--item2").style["opacity"] = "0%";
            //document.querySelector("body > main").style["display"] = "block";
            setTimeout('menu.style["visibility"] = "hidden"', 250);
            setTimeout('menu.style["display"] = "none"', 250);
            setTimeout('menu_behind.style["visibility"] = "hidden"', 250);
            menu_behind.style["opacity"] = "0";
            menu_behind.style["transition-delay"] = "0ms";
            setTimeout('menu.style["transform"] = "translateX(0vw)"', 250);
        }
    }
}