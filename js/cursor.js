let cursor = document.getElementById("cursor");

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

function mouse_move(pos) {
    let mouse_x = pos.clientX;
    let mouse_y = pos.clientY;

    cursor.style.top = `${mouse_y}px`;
    cursor.style.left = `${mouse_x}px`;
}