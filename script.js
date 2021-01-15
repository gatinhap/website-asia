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

const menuItems = document.querySelectorAll(".nav__desktop-view a");

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", hideNav);
});

const exitMenu = document.querySelector('.nav-menu-exit');

exitMenu.addEventListener("click", hideNav);


function showArrow() {
    if (window.pageYOffset >= 200) {
        document.getElementById("sticky").style.display = "block";
    } else document.getElementById("sticky").style.display = "none";
}

document.addEventListener("scroll", showArrow);

function showTh1() {
    const x = document.querySelector('.therapy1');
    x.classList.add('desktop');
}

function hideTh1() {
    const x = document.querySelector('.therapy1');
    x.classList.remove('desktop');
}

function showTh2() {
    const x = document.querySelector('.therapy2');
    x.classList.add('desktop');
}

function hideTh2() {
    const x = document.querySelector('.therapy2');
    x.classList.remove('desktop');
}

function showExp() {
    const x = document.querySelector('.experience');
    x.classList.add('desktop');
}

function hideExp() {
    const x = document.querySelector('.experience');
    x.classList.remove('desktop');
}

