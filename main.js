

const btn = document.getElementById("accessibilityBtn");
const menu = document.getElementById("accessibilityMenu");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

let fontSize = 100;

function changeFontSize(value) {
    fontSize += value * 10;
    fontSize = Math.max(80, Math.min(fontSize, 180));
    document.body.style.fontSize = fontSize + "%";
}

function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}
