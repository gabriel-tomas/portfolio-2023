let page_link = document.querySelectorAll(".page-links > a");
let cursor_size = 50;
let cursor_increased_size = `${cursor_size + (cursor_size * 0.54)}px`;

page_link.forEach((item) => item.addEventListener("mouseover", function() {
    cursor.style.width = cursor_increased_size;
    cursor.style.height = cursor_increased_size;
}))

page_link.forEach((item) => item.addEventListener("mouseleave", function() {
    cursor.style.width = `${cursor_size}px`;
    cursor.style.height = `${cursor_size}px`;
}))