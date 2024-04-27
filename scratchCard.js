let canvas = document.getElementById("scratch-card1");
let context = canvas.getContext("2d")

const init = () => {
    context.fillStyle = "#FFCA4A";
    context.fillRect(0, 0, 300, 300);
};

let isDragging = false;

const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 24, 0, 2 * Math.PI);
    context.fill();
}

canvas.addEventListener("mousedown", (event) => {
    isDragging = true;
    scratch(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", (event) => {
    if (isDragging) {
        scratch(event.offsetX, event.offsetY);
    }
});

canvas.addEventListener("mouseup", () => {
    isDragging = false;
});

canvas.addEventListener("mouseleave", () => {
    isDragging = false;
});

init();