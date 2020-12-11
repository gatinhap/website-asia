function showNav() {
    const x = document.getElementById("hero");
    if (x.className === "hero") {
        x.className += " responsive";
    } else {
        x.className = "hero";
    }

}

function hideNav() {
    const element = document.getElementById("hero");
    element.classList.remove("responsive");

}

function showContent() {
    const x = document.getElementById("test");
    if (x.className === "therapy1") {
        x.className += " desktop";
    } else {
        x.className = "therapy1"
    }
}