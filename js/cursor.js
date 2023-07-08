let cursor = document.getElementById("cursor");
let body = document.querySelector("body");

function is_touch_enabled() {
    return ( 'ontouchstart' in window ) ||
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}

window.addEventListener('mousemove', function() {
    if( is_touch_enabled() && window.getComputedStyle(cursor, null).display == "block" ) {
        cursor.style.display = "none";
        console.log("touch");
    }
    else if (is_touch_enabled() == false && window.getComputedStyle(cursor, null).display == "none") {
        cursor.style.display = "block";
        console.log("mouse");
    }
});

body.addEventListener("mousemove", (event) => {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
})