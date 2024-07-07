let cursor = document.querySelector(".custom-cursor");

const updateCursor = (size) => {
    cursor.style.width = size + "px";
    cursor.style.height = size + "px";
};

document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
        updateCursor(40);
    });

    el.addEventListener("mouseleave", () => {
        updateCursor(30);
    });

    el.addEventListener("mousedown", () => {
        updateCursor(25);
    });

    el.addEventListener("mouseup", () => {
        updateCursor(40);
    });
});

document.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

document.addEventListener("mousedown", () => {
    updateCursor(25);
});

document.addEventListener("mouseup", () => {
    updateCursor(30);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

document.addEventListener("mouseover", () => {
    cursor.style.display = "block";
});
