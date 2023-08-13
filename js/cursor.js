let cursor = document.querySelector(".custom-cursor");

const updateCursor = () => {
    if (cursor.classList.contains("large")) {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
    } else {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
    }
}

document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
        updateCursor();
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
        updateCursor();
    });
});

document.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

document.addEventListener("mouseover", () => {
    cursor.style.display = "block";
});
