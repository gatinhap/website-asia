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

document.addEventListener("scroll", showScroll);

function showScroll() {
    if (window.pageYOffset >= 200) {
        document.getElementById("sticky").style.display = "block";
    } else document.getElementById("sticky").style.display = "none";
}

function showContent(sectionName) {
    const x = document.querySelector('.' + sectionName);
    x.classList.toggle('desktop');
}

// function closeContent() {
//     const x = document.getElementById('therapy1');
//     x.classList.remove('desktop');
// }