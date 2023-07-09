let page_link = document.querySelectorAll("a");
let portfolio_item_image_container_link = document.querySelectorAll(".item--image-container");
let portfolio_item_image_container_is_hovered = document.querySelectorAll(".image-container--is-hovered")
let cursor_size = 50;
let cursor_increased_size = `${cursor_size + (cursor_size * 0.54)}px`;

function mouseincrease() {
    cursor.style.width = cursor_increased_size;
    cursor.style.height = cursor_increased_size;
}

function mousedefault() {
    cursor.style.width = `${cursor_size}px`;
    cursor.style.height = `${cursor_size}px`;
}

function cursor_portfolio_item_hover() {
    cursor.classList.add("portfolio-item-hover");
}

function cursor_remove_portfolio_item_hover() {
    cursor.classList.remove("portfolio-item-hover");
}

page_link.forEach((item) => item.addEventListener("mouseover", mouseincrease));

page_link.forEach((item) => item.addEventListener("mouseleave", mousedefault));

portfolio_item_image_container_link.forEach((item) => item.addEventListener("mouseover", cursor_portfolio_item_hover));

portfolio_item_image_container_link.forEach((item) => item.addEventListener("mouseleave", cursor_remove_portfolio_item_hover));

portfolio_item_image_container_is_hovered.forEach((item) => item.addEventListener("mouseover", mouseincrease));

portfolio_item_image_container_is_hovered.forEach((item) => item.addEventListener("mouseleave", mousedefault));