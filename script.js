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

document.addEventListener("scroll", showSticky);

function showSticky() {
    document.getElementById("sticky").style.display = "block";
}

// document.getElementById("sticky").addEventListener("click", hideSticky);
//
// function hideSticky() {
//     document.getElementById("sticky").style.display = "none";
// }
//https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset

function showContent(sectionName) {
    const x = document.querySelector('.' + sectionName);
    x.classList.toggle('desktop');
}